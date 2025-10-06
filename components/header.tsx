import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">
              TF
            </span>
          </div>
          <span className="text-xl font-bold text-foreground">TuFianza</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#como-funciona"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Cómo funciona
          </Link>
          <Link
            href="#beneficios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Beneficios
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>

        <Button
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Obtener Garantía
        </Button>
      </div>
    </header>
  );
}
