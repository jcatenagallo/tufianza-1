import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  G
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                TuFianza
              </span>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Tu sueldo es tu garantía. Alquilá sin garante propietario de forma
              rápida y segura.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Enlaces
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#como-funciona"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#beneficios"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Beneficios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@garantiaya.com.ar"
                  className="transition-colors hover:text-foreground"
                >
                  info@garantiaya.com.ar
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+541112345678"
                  className="transition-colors hover:text-foreground"
                >
                  +54 11 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://wa.me/541112345678"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Seguinos
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TuFianza. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
