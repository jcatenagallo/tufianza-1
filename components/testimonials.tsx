import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Conseguí mi departamento en una semana, sin depender de mis padres. El proceso fue súper rápido y transparente.",
    author: "Martín González",
    age: 28,
    role: "Diseñador Gráfico",
    image: "/young-professional-man-smiling.png",
  },
  {
    quote: "Como propietaria, me siento más segura que con una garantía tradicional. El respaldo legal es excelente.",
    author: "Laura Fernández",
    age: 45,
    role: "Propietaria",
    image: "/professional-woman-smiling.png",
  },
  {
    quote:
      "Mudarse a Buenos Aires siendo del interior parecía imposible. Esta garantía me cambió la vida completamente.",
    author: "Santiago Ruiz",
    age: 32,
    role: "Ingeniero en Sistemas",
    image: "/young-professional-man-happy.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Miles de personas ya confiaron en nosotros para alquilar su hogar
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border bg-card">
              <CardContent className="p-8">
                <Quote className="mb-4 h-8 w-8 text-primary/40" />
                <p className="mb-6 text-pretty leading-relaxed text-card-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.age} años
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
