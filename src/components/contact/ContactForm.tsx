"use client";

import { useRef, useState } from "react";
import { Send, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { whatsappLink } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<string, string>>;

const inputBase =
  "w-full rounded-xl border border-sand bg-cream/50 px-4 py-3 text-ink placeholder:text-stone/50 transition-colors focus:border-gold focus:bg-cream focus:outline-none focus:ring-2 focus:ring-gold/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Form bilgilerini hazır WhatsApp mesajına çevirip açar
  function sendViaWhatsApp() {
    const form = formRef.current;
    if (!form) return;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    const lines = [
      "Merhaba, teklif talebim:",
      `Ad Soyad: ${get("name") || "-"}`,
      `Telefon: ${get("phone") || "-"}`,
      get("email") && `E-posta: ${get("email")}`,
      get("service") && `Hizmet: ${get("service")}`,
      "",
      get("message") || "(Detay belirtilmedi)",
    ].filter(Boolean) as string[];

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrors(json.errors ?? {});
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl border border-sand bg-cream p-10 text-center shadow-soft">
        <CheckCircle2 className="h-14 w-14 text-gold" />
        <h3 className="mt-5 font-serif text-2xl text-ink">Talebiniz alındı!</h3>
        <p className="mt-3 max-w-sm text-stone">
          En kısa sürede (genellikle 24 saat içinde) size geri dönüş yapacağız.
          İlginiz için teşekkür ederiz.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-gold-dark hover:underline"
        >
          Yeni bir talep gönder
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-sand bg-cream p-6 shadow-soft sm:p-8"
    >
      {/* Honeypot — kullanıcılar görmez */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px]"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad *" error={errors.name}>
          <input name="name" type="text" placeholder="Adınız Soyadınız" className={inputBase} />
        </Field>
        <Field label="Telefon *" error={errors.phone}>
          <input name="phone" type="tel" placeholder="05XX XXX XX XX" className={inputBase} />
        </Field>
        <Field label="E-posta" error={errors.email}>
          <input name="email" type="email" placeholder="ornek@eposta.com" className={inputBase} />
        </Field>
        <Field label="İlgilendiğiniz Hizmet">
          <select name="service" defaultValue="" className={inputBase}>
            <option value="" disabled>
              Seçiniz
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Diğer">Diğer</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Projeniz Hakkında *" error={errors.message}>
          <textarea
            name="message"
            rows={5}
            placeholder="Hayalinizdeki projeyi kısaca anlatın; mekân türü, m², bütçe aralığı vb."
            className={`${inputBase} resize-none`}
          />
        </Field>
      </div>

      {status === "error" && !Object.keys(errors).length && (
        <p className="mt-4 text-sm text-red-600">
          Bir hata oluştu. Lütfen tekrar deneyin veya telefonla ulaşın.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-cream shadow-soft transition-all duration-300 hover:bg-gold-dark hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              Teklif Talebini Gönder
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={sendViaWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] px-8 py-4 text-sm font-medium text-[#1f9e4e] transition-colors duration-300 hover:bg-[#25D366]/10"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp ile Gönder
        </button>
      </div>
      <p className="mt-4 text-xs text-stone">
        Bilgileriniz yalnızca size dönüş yapmak için kullanılır, üçüncü kişilerle paylaşılmaz.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
