import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            СНЕГОРОТОР СШР
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              +7 987 004 57 57
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} />
              info@sshr.ru
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              Москва, Россия
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground font-body">
          © 2024 Снегоротор СШР. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
