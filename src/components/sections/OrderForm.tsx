import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderForm = ({ isOpen, onClose }: OrderFormProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <Card className="w-full max-w-md p-8 bg-card" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-heading text-2xl font-bold">Заказать звонок</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <Icon name="X" size={24} />
          </button>
        </div>
        
        <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-center justify-center gap-2 text-lg font-heading font-bold text-primary">
            <Icon name="Phone" size={20} />
            <a href="tel:+79870045757" className="hover:text-secondary transition-colors">
              +7 987 004 57 57
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">Или оставьте заявку и мы перезвоним</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="font-body text-sm text-muted-foreground mb-2 block">Ваше имя</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
              placeholder="Иван Иванов"
            />
          </div>
          
          <div>
            <label className="font-body text-sm text-muted-foreground mb-2 block">Телефон</label>
            <input 
              type="tel" 
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          
          <div>
            <label className="font-body text-sm text-muted-foreground mb-2 block">Комментарий (необязательно)</label>
            <textarea 
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors resize-none"
              rows={3}
              placeholder="Удобное время для звонка"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all font-body font-semibold"
            size="lg"
          >
            Отправить заявку
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </Card>
    </div>
  );
};
