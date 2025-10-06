import { Card, CardContent } from "@/components/ui/card"
import { Clock, FileText, Shield } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Aprobación en 24hs",
    description: "Proceso rápido y simple. Obtené tu preaprobación en menos de un día hábil.",
  },
  {
    icon: FileText,
    title: "Solo necesitás demostrar ingresos",
    description: "No necesitás un garante propietario. Tu recibo de sueldo es suficiente.",
  },
  {
    icon: Shield,
    title: "Respaldo legal completo",
    description: "Cobertura total para inquilinos y propietarios con garantía profesional.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="beneficios" className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Simplificamos el proceso de alquiler para que puedas mudarte más rápido
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
