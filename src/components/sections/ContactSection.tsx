import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactSectionProps {
  onOrderClick: () => void;
}

export const ContactSection = ({ onOrderClick }: ContactSectionProps) => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-black mb-6">
          Остались вопросы?
        </h2>
        <p className="font-body text-xl text-foreground/80 mb-8">
          Звоните прямо сейчас или оставьте заявку
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+79870045757" className="flex items-center gap-2 text-2xl font-heading font-bold text-primary hover:text-secondary transition-colors">
            <Icon name="Phone" size={28} />
            +7 987 004 57 57
          </a>
          <span className="text-muted-foreground hidden sm:block">или</span>
          <Button 
            size="lg"
            onClick={onOrderClick}
            variant="outline"
            className="text-lg px-8 py-6 border-2 font-body font-semibold"
          >
            Заказать звонок
          </Button>
        </div>
      </div>
    </section>
  );
};
