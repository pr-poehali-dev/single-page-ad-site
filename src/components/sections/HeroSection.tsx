import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  onOrderClick: () => void;
}

export const HeroSection = ({ timeLeft, onOrderClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.1),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-body font-medium text-sm">
                  🔥 Акция! До 31.12.25г. карданный вал в подарок!
                </span>
              </div>
              
              <Card className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm inline-block">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div className="font-body text-sm text-muted-foreground">До конца акции:</div>
                  <div className="flex gap-2 font-heading font-bold">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl text-primary">{timeLeft.days}</span>
                      <span className="text-xs text-muted-foreground">дней</span>
                    </div>
                    <span className="text-2xl text-muted-foreground">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl text-secondary">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-xs text-muted-foreground">часов</span>
                    </div>
                    <span className="text-2xl text-muted-foreground">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl text-accent">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-xs text-muted-foreground">минут</span>
                    </div>
                    <span className="text-2xl text-muted-foreground">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-xs text-muted-foreground">секунд</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Уберите снег за
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                один проход
              </span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Снегоротор серии СШР для тракторов до 81 л.с. Выбрасывает снег до 27 метров. Захват 2,14 м
            </p>
            
            <div className="inline-flex items-baseline gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 rounded-2xl border-2 border-primary/20">
              <span className="font-heading text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                363 000 ₽
              </span>
              <span className="font-body text-lg text-muted-foreground">с карданным валом</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={onOrderClick}
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 font-body font-semibold"
              >
                Заказать со скидкой
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <a href="#price">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all font-body font-semibold w-full"
                >
                  Узнать цену
                </Button>
              </a>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="font-heading text-3xl font-bold text-primary">27м</div>
                <div className="font-body text-sm text-muted-foreground">Дальность</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-secondary">2.14м</div>
                <div className="font-body text-sm text-muted-foreground">Захват</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-accent">81 л.с.</div>
                <div className="font-body text-sm text-muted-foreground">Мощность</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30 animate-pulse" />
            <img 
              src="https://cdn.poehali.dev/files/84c41e84-7407-4a83-8adf-df9f073e20dc.jpg"
              alt="Снегоротор СШР"
              className="relative z-10 w-full h-auto drop-shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
