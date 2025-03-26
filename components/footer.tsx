
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex gap-2 items-center text-xl font-bold">
          <span>Gestionomy</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Gestionomy. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            SAPE Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
}
