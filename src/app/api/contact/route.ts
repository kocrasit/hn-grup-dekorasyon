import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * İletişim formu gönderim uç noktası.
 *
 * E-posta gönderimi Web3Forms üzerinden yapılır (ücretsiz, domain doğrulama
 * gerektirmez). Çalışması için .env.local içine WEB3FORMS_ACCESS_KEY ekleyin:
 *   1. https://web3forms.com adresine gidin
 *   2. Teklif e-postalarının düşeceği adresi girip ücretsiz access key alın
 *   3. .env.local dosyasına yapıştırın → sunucuyu yeniden başlatın
 *
 * Anahtar tanımlı değilse form yine doğrulanır ve sunucu log'una yazılır
 * (geliştirme modu), böylece arayüz çalışmaya devam eder.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const service = String(data.service ?? "").trim();
  const company = String(data.company ?? "").trim(); // honeypot

  // Bot tuzağı: gizli alan doluysa sessizce başarı dön
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Lütfen adınızı girin.";
  if (!/^[0-9+()\s-]{7,}$/.test(phone)) errors.phone = "Geçerli bir telefon girin.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Geçerli bir e-posta girin.";
  if (message.length < 10) errors.message = "Lütfen kısaca projenizi anlatın.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  // Anahtar yoksa: geliştirme modunda log'la ve başarı dön
  if (!accessKey) {
    console.log("[İletişim formu — e-posta anahtarı tanımsız]", {
      name,
      phone,
      email,
      service,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  // Web3Forms ile e-posta gönder
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Yeni Teklif Talebi — ${name}`,
        from_name: `${site.name} Web Sitesi`,
        name,
        phone,
        email: email || "Belirtilmedi",
        "İlgilenilen Hizmet": service || "Belirtilmedi",
        message,
      }),
    });
    const result = await res.json();

    if (!result.success) {
      console.error("[Web3Forms hata]", result);
      return NextResponse.json(
        { ok: false, error: "E-posta gönderilemedi." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[Web3Forms istek hatası]", err);
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
