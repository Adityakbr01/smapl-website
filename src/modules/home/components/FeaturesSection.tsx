import { Shield, Cpu, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Superior Quality",
    description:
      "Manufactured with high grade raw materials and strict quality control.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description:
      "State-of-the-art infrastructure and latest manufacturing technology.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Committed to delivering reliable products and timely service.",
  },
  {
    icon: Award,
    title: "25+ Years Experience",
    description:
      "Decades of expertise in power line and pole line hardware.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-7 h-7 text-navy" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
