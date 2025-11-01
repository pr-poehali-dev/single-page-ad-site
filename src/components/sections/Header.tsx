import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header = ({ onOrderClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          СНЕГОРОТОР СШР
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+79870045757" className="hidden md:flex items-center gap-2 font-body text-foreground hover:text-primary transition-colors">
            <Icon name="Phone" size={20} />
            <span className="font-semibold">+7 987 004 57 57</span>
          </a>
          <Button onClick={onOrderClick} className="bg-gradient-to-r from-primary to-secondary">
            Заказать
          </Button>
        </div>
      </div>
    </header>
  );
};
