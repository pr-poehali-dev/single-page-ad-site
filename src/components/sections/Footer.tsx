import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              СНЕГОРОТОР СШР
            </div>
            <p className="text-sm text-muted-foreground font-body mb-4">
              Производитель: АО "Кузембетьевский РМЗ"
            </p>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                <span>Татарстан, Мензелинский район, с.Кузембетьево, ул.Советская, 77а</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-foreground mb-4">Контакты</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Icon name="Phone" size={16} />
              <a href="tel:+79870045757" className="hover:text-primary transition-colors">
                +7 987 004 57 57
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Icon name="Mail" size={16} />
              <a href="mailto:rmz-ru@yandex.ru" className="hover:text-primary transition-colors">
                rmz-ru@yandex.ru
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Icon name="Globe" size={16} />
              <a href="https://k-rmz.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                k-rmz.ru
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-border/50 text-sm text-muted-foreground font-body">
          © 2024 АО "Кузембетьевский РМЗ". Все права защищены.
        </div>
      </div>
    </footer>
  );
};