import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectGallery from "@/components/projects/ProjectGallery";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "HN Grup Dekorasyon ile tamamlanan konut, ofis, mutfak & banyo ve tadilat projeleri. Kategoriye göre filtreleyerek çalışmalarımızı inceleyin.",
  alternates: { canonical: "/projeler" },
};

export default function ProjelerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolyo"
        title="Hayata geçirdiğimiz projeler"
        description="Konuttan ofise, anahtar teslim tadilattan mutfak tasarımına kadar tamamladığımız işlerden bir seçki. Kategoriye göre filtreleyebilirsiniz."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Projeler", href: "/projeler" },
        ]}
      />
      <ProjectGallery />
      <CtaBanner />
    </>
  );
}
