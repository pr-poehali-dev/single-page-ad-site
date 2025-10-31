import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-body font-medium text-sm">
                  Зима 2024-2025
                </span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                Снег не
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  проблема
                </span>
              </h1>
              
              <p className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-lg">
                Навесной снегоротор для МТЗ-80/82. Убирает снег на расстояние до 15 метров за один проход. Производительность до 300 тонн/час
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 font-body font-semibold"
                >
                  Заказать звонок
                  <Icon name="Phone" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all font-body font-semibold"
                >
                  Характеристики
                </Button>
              </div>
              
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="font-heading text-3xl font-bold text-primary">15м</div>
                  <div className="font-body text-sm text-muted-foreground">Дальность выброса</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-secondary">300т</div>
                  <div className="font-body text-sm text-muted-foreground">Тонн в час</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-accent">-35°C</div>
                  <div className="font-body text-sm text-muted-foreground">Работа в мороз</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30 animate-pulse" />
              <img 
                src="https://cdn.poehali.dev/files/84c41e84-7407-4a83-8adf-df9f073e20dc.jpg"
                alt="Навесной снегоротор для МТЗ"
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Преимущества нашего снегоротора
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Надежное оборудование для профессиональной уборки снега
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Wrench",
                title: "Простой монтаж",
                description: "Быстрая установка на МТЗ-80/82 без дополнительных переходников"
              },
              {
                icon: "Gauge",
                title: "Мощность",
                description: "Отбрасывает снег любой плотности до 15 метров"
              },
              {
                icon: "Shield",
                title: "Надежность",
                description: "Усиленный корпус из стали 5мм, выдерживает камни и лед"
              },
              {
                icon: "Snowflake",
                title: "Морозостойкость",
                description: "Работает при температуре до -35°C без потери эффективности"
              },
              {
                icon: "Settings",
                title: "Регулировка",
                description: "Поворот выброса на 360° из кабины трактора"
              },
              {
                icon: "CircleCheckBig",
                title: "Гарантия 2 года",
                description: "Полная гарантия и техподдержка на весь срок эксплуатации"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              Готовы забыть о
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                снежных заносах?
              </span>
            </h2>
            
            <p className="font-body text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
              Более 500 фермерских хозяйств уже работают с нашим снегоротором
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 font-body font-bold"
              >
                Купить за 185,000₽
                <Icon name="ShoppingCart" className="ml-2" size={24} />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={20} className="text-primary" />
                Доставка по РФ
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Wrench" size={20} className="text-primary" />
                Монтаж в подарок
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={20} className="text-primary" />
                Гарантия 2 года
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-muted-foreground">
              © 2025 СнегоТехника. Все права защищены
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                Контакты
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                Доставка и оплата
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;