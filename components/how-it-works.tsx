import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, FileText, CheckCircle, Home } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Solicitá tu preaprobación",
    description: "Completá el formulario online con tus datos básicos y laborales.",
  },
  {
    number: 2,
    icon: FileCheck,
    title: "Presentá tu documentación",
    description: "Enviá tus recibos de sueldo y documentación requerida de forma digital.",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Recibí tu aprobación",
    description: "En 24hs te confirmamos la aprobación de tu garantía de alquiler.",
  },
  {
    number: 4,
    icon: Home,
    title: "Firmá tu contrato de alquiler",
    description: "Con tu garantía aprobada, podés firmar el contrato y mudarte.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary/30 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Cómo funciona?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Cuatro pasos simples para obtener tu garantía de alquiler
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-border lg:block" />
              )}
              <Card className="relative border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <step.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">{step.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
