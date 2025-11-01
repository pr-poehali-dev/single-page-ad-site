import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface VideoSectionProps {
  onOrderClick: () => void;
}

export const VideoSection = ({ onOrderClick }: VideoSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
            Снегоротор СШР в действии
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Посмотрите, как работает наше оборудование в реальных условиях
          </p>
        </div>
        
        <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://disk.yandex.ru/i/_Sb0NTEFePJdTQ"
              title="Снегоротор СШР в действии"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>
        
        <div className="mt-8 text-center">
          <Button 
            size="lg"
            onClick={onOrderClick}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all font-body font-semibold"
          >
            Заказать консультацию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
