import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Мощный выброс",
      description: "До 27 метров при любой плотности снега"
    },
    {
      icon: "Gauge",
      title: "Высокая производительность",
      description: "До 300 тонн снега в час"
    },
    {
      icon: "Shield",
      title: "Надёжная конструкция",
      description: "Усиленный корпус из стали 5 мм"
    },
    {
      icon: "Settings",
      title: "Простое управление",
      description: "Гидравлический поворот дефлектора 360°"
    },
    {
      icon: "Wrench",
      title: "Лёгкое обслуживание",
      description: "Минимум точек смазки и простая конструкция"
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "12 месяцев гарантии и техподдержка"
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
            Почему выбирают СШР?
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Надежное оборудование для уборки снега
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-gradient-to-r from-primary to-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} size={24} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
              <p className="font-body text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
