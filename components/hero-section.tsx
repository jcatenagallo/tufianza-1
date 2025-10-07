import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { BackgroundBeams } from "./ui/shadcn-io/background-beams";
import { InteractiveGridPattern } from "./ui/shadcn-io/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20 sm:py-28 lg:py-32 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-b after:from-transparent after:to-background after:pointer-events-none">
      <InteractiveGridPattern
        squares={[50, 35]}
        className={cn(
          "absolute inset-0",
          "[mask-image:radial-gradient(ellipse_1000px_800px_at_50%_50%,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[180%] skew-y-6 opacity-70",
        )}
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8 z-50">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Alquilá sin Garante Propietario
              </h1>
              <p className="text-pretty text-2xl font-semibold text-primary sm:text-3xl">
                Tu sueldo es tu garantía
              </p>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Hacemos posible que alquiles la propiedad que necesitás sin
                depender de un garante propietario. Solo necesitás demostrar tus
                ingresos y nosotros respaldamos tu contrato.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Obtener mi Garantía
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white">
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl lg:h-[500px]">
              <img
                src=".//happy-young-professional-couple-moving-into-new-ap.jpg"
                alt="Pareja feliz mudándose a su nuevo departamento"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
