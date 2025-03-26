"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { faqCategories } from "@/data/faq-data";
import Image from "next/image";
import { Category } from "@/types/faq";
import Footer from "@/components/footer";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(faqCategories);

  // Filtrar las preguntas basadas en la búsqueda
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCategories(faqCategories);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = faqCategories
      .map((category) => {
        const filteredQuestions = category.questions.filter(
          (question) =>
            question.title.toLowerCase().includes(query) ||
            question.content.toLowerCase().includes(query)
        );

        return {
          ...category,
          questions: filteredQuestions,
        };
      })
      .filter((category) => category.questions.length > 0);

    setFilteredCategories(filtered);
  }, [searchQuery]);

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
                <ArrowLeft className="h-4 w-4"/>
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Volver
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Preguntas Frecuentes
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Encuentra respuestas a las preguntas más comunes sobre nuestra
                  aplicación.
                </p>
              </div>

              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar preguntas..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((category) => (
                <Card
                  key={category.id}
                  className="transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.icon}
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.questions.map((question) => (
                        <li key={question.id}>
                          <Link
                            href={`/faq/${question.slug}`}
                            className="flex items-center justify-between rounded-lg border p-3 text-left text-sm transition-all hover:bg-muted"
                          >
                            <span>{question.title}</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
                <p className="text-muted-foreground">
                  No se encontraron resultados para tu búsqueda.
                </p>
                <Button onClick={() => setSearchQuery("")}>
                  Ver todas las preguntas
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
