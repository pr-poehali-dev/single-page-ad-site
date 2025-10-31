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
                  Новинка 2025
                </span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                Звук нового
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  поколения
                </span>
              </h1>
              
              <p className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-lg">
                Погрузитесь в мир кристально чистого звука с технологией активного шумоподавления и 48 часами автономной работы
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 font-body font-semibold"
                >
                  Заказать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all font-body font-semibold"
                >
                  Узнать больше
                </Button>
              </div>
              
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="font-heading text-3xl font-bold text-primary">48ч</div>
                  <div className="font-body text-sm text-muted-foreground">Автономность</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-secondary">ANC</div>
                  <div className="font-body text-sm text-muted-foreground">Шумоподавление</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-accent">Hi-Res</div>
                  <div className="font-body text-sm text-muted-foreground">Качество звука</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30 animate-pulse" />
              <img 
                src="https://cdn.poehali.dev/projects/ba720415-65fd-4da6-81c2-32afa7322906/files/fbfb14c9-72fa-4b68-86c6-49b5cc063189.jpg"
                alt="Premium Headphones"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
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
              Почему выбирают нас
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Технологии премиум-класса для идеального звучания
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Zap",
                title: "Быстрая зарядка",
                description: "10 минут зарядки = 5 часов прослушивания"
              },
              {
                icon: "Volume2",
                title: "Мощный звук",
                description: "40мм драйверы с Hi-Res Audio сертификацией"
              },
              {
                icon: "Headphones",
                title: "Комфорт 24/7",
                description: "Мягкие амбушюры из премиальной кожи"
              },
              {
                icon: "Bluetooth",
                title: "Bluetooth 5.3",
                description: "Стабильное соединение до 30 метров"
              },
              {
                icon: "Shield",
                title: "Защита IPX4",
                description: "Устойчивость к воде и поту"
              },
              {
                icon: "Smartphone",
                title: "Мульти-подключение",
                description: "Одновременно до 2 устройств"
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
              Готовы ощутить
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                разницу?
              </span>
            </h2>
            
            <p className="font-body text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
              Присоединяйтесь к 100,000+ довольных клиентов по всему миру
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 font-body font-bold"
              >
                Купить за 12,990₽
                <Icon name="ShoppingCart" className="ml-2" size={24} />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={20} className="text-primary" />
                Бесплатная доставка
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RefreshCw" size={20} className="text-primary" />
                14 дней на возврат
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
              © 2025 SoundWave. Все права защищены
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
