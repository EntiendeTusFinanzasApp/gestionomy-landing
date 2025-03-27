
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-1">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Image src="/images/icon/icon-nav.png" width={30}  height={30} alt="img" className="object-contain ms-2" />
            <span>Gestionomy</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#features"
                className="text-xs font-medium transition-colors hover:text-primary md:text-sm"
              >
                Características
              </Link>
              <Link
                href="#modules"
                className="text-xs font-medium transition-colors hover:text-primary md:text-sm"
              >
                Módulos
              </Link>
              <Link href="/faq" className="text-xs font-medium transition-colors hover:text-primary md:text-sm">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>
  )
}
