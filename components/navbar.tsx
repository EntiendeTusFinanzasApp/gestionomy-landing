
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Image src="/images/icon/icon-nav.png" width={30}  height={30} alt="img" className="object-contain ms-2" />
            <span>Gestionomy</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#features"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Características
              </Link>
              <Link
                href="#modules"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Módulos
              </Link>
              <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>
  )
}
