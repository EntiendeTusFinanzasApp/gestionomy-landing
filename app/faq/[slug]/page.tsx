"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { faqCategories } from "@/data/faq-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/footer";
import { Category, Question } from "@/types/faq";

export default function FAQDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const slug = params?.slug as string;

  useEffect(() => {
    // Buscar la pregunta por slug
    for (const cat of faqCategories) {
      const foundQuestion = cat.questions.find((q) => q.slug === slug);
      if (foundQuestion) {
        setQuestion(foundQuestion);
        setCategory(cat);
        break;
      }
    }
  }, [slug]);

  // Si no se encuentra la pregunta, redirigir a la página de FAQ
  useEffect(() => {
    if (!slug) {
      router.push("/faq");
    }
  }, [slug, router]);

  if (!question) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Image
              src="/images/icon/icon-nav.png"
              width={30}
              height={30}
              alt="img"
              className="object-contain ms-2"
            />
            <span>Gestionomy</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Inicio
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/faq">
                  Preguntas Frecuentes
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{question.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Button
            variant="ghost"
            className="mb-6 flex items-center gap-2"
            onClick={() => router.push("/faq")}
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Preguntas Frecuentes
          </Button>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                {category?.name}
              </div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                {question.title}
              </h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              {question.content
                .split("\n\n")
                .map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}

              {question.images && question.images.length > 0 && (
                <div className="my-8 space-y-6">
                  {question.images.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden border"
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={450}
                        className="w-full object-cover"
                      />
                      {image.caption && (
                        <div className="bg-muted p-3 text-sm text-center">
                          {image.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {question.steps && (
                <div className="my-8">
                  <h2 className="text-xl font-bold mb-4">Pasos a seguir</h2>
                  <ol className="space-y-4">
                    {question.steps.map((step: string, index: number) => (
                      <li key={index} className="flex gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <div className="flex-1">{step}</div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {question.relatedQuestions &&
              question.relatedQuestions.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold mb-4">
                    Preguntas relacionadas
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {question.relatedQuestions.map((relatedId: string) => {
                      // Encontrar la pregunta relacionada
                      let relatedQuestion = null;
                      for (const cat of faqCategories) {
                        const found = cat.questions.find(
                          (q) => q.id === relatedId
                        );
                        if (found) {
                          relatedQuestion = found;
                          break;
                        }
                      }

                      if (!relatedQuestion) return null;

                      return (
                        <Link
                          key={relatedId}
                          href={`/faq/${relatedQuestion.slug}`}
                          className="rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                          <h3 className="font-medium">
                            {relatedQuestion.title}
                          </h3>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
