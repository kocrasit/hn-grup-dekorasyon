import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 5);
  const [lead, ...rest] = featured;

  return (
    <section className="bg-espresso py-16 sm:py-20 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projelerimiz"
          title="Tamamladığımız işler"
          description="Tamamladığımız ev ve dükkân işlerinden bir seçki."
          className="[&_h2]:text-cream [&_p]:text-cream/70"
        />

        <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-2">
          {/* Büyük öne çıkan proje */}
          {lead && <ProjectCard project={lead} large />}

          {/* Yan grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/projeler" variant="light" size="lg">
            Tüm Projeleri Görüntüle
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) {
  return (
    <Link
      href="/projeler"
      className={`group relative block overflow-hidden rounded-2xl ${
        large ? "min-h-[22rem] lg:min-h-full" : "min-h-[16rem]"
      }`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={large ? "(max-width:1024px) 100vw, 50vw" : "(max-width:640px) 100vw, 25vw"}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="eyebrow text-gold-soft">{project.category}</span>
        <h3
          className={`mt-2 text-cream ${large ? "text-2xl sm:text-3xl" : "text-lg"}`}
        >
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-cream/70">{project.location}</p>
      </div>
      <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream/95 text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </Link>
  );
}
