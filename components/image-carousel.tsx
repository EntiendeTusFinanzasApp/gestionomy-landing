"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: string[]
  alt: string
  autoPlay?: boolean
  interval?: number
}

export function ImageCarousel({ images, alt, autoPlay = true, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Función para ir a la siguiente imagen
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  // Función para ir a una imagen específica
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Autoplay
  useEffect(() => {
    if (!autoPlay) return

    const intervalId = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(intervalId)
  }, [autoPlay, interval, nextSlide])

  // Si no hay imágenes, mostrar un placeholder
  if (images.length === 0) {
    return (
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl border bg-background">
        <Image src="/placeholder.svg?height=720&width=1280" fill alt={alt} className="object-contain" />
      </div>
    )
  }

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl border bg-background">
      {/* Imagen actual */}
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          fill
          alt={`${alt} - Imagen ${currentIndex + 1}`}
          className="object-contain transition-opacity duration-500"
        />
        <div className="absolute bottom-2 right-2 p-2 text-center bg-background/70 rounded-md">
          <p className="text-sm font-medium">
            {currentIndex + 1}/{images.length}
          </p>
        </div>
      </div>

      {/* Botones de navegación */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-foreground rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-foreground rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>

      {/* Indicadores */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

