import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            СНЕГОРОТОР СШР
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+78001234567" className="hidden md:flex items-center gap-2 font-body text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span className="font-semibold">8 (800) 123-45-67</span>
            </a>
            <Button onClick={() => setIsFormOpen(true)} className="bg-gradient-to-r from-primary to-secondary">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-background opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.1),transparent_50%)]" />
        
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-body font-medium text-sm">
                  🔥 Акция! Скидка 15% до конца месяца
                </span>
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
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsFormOpen(true)}
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
            {[
              {
                icon: "Zap",
                title: "Мощный выброс",
                description: "До 27 метров при любой плотности снега"
              },
              {
                icon: "Maximize2",
                title: "Широкий захват",
                description: "2,14 метра за один проход"
              },
              {
                icon: "Shield",
                title: "Прочность",
                description: "Сталь 5мм, справится с камнями и льдом"
              },
              {
                icon: "Snowflake",
                title: "До -35°C",
                description: "Работает в любой мороз"
              },
              {
                icon: "Wrench",
                title: "Простая установка",
                description: "Монтаж на трактор за 30 минут"
              },
              {
                icon: "Award",
                title: "Гарантия 2 года",
                description: "Полное гарантийное обслуживание"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
              Технические характеристики
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Settings" size={24} className="text-primary" />
                Основные характеристики
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Модель", value: "СШР-2.0" },
                  { label: "Тип", value: "Шнекороторный" },
                  { label: "Ширина захвата", value: "до 2,14 м" },
                  { label: "Высота захвата", value: "до 0,8 м" },
                  { label: "Дальность выброса", value: "до 27 м" },
                  { label: "Производительность", value: "до 300 т/ч" },
                  { label: "Рабочая скорость", value: "3-5 км/ч" },
                  { label: "Вес", value: "380 кг" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                    <span className="font-body text-muted-foreground">{spec.label}</span>
                    <span className="font-heading font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Wrench" size={24} className="text-primary" />
                Технические параметры
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Привод", value: "От ВОМ трактора" },
                  { label: "Частота вращения ВОМ", value: "540 об/мин" },
                  { label: "Мощность трактора", value: "до 81 л.с." },
                  { label: "Класс тяги трактора", value: "1,4-2,0" },
                  { label: "Навеска", value: "Трёхточечная" },
                  { label: "Тип сцепки", value: "Категория II" },
                  { label: "Гидравлика", value: "1 секция" },
                  { label: "Давление гидросистемы", value: "160-180 кгс/см²" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                    <span className="font-body text-muted-foreground">{spec.label}</span>
                    <span className="font-heading font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="BoxSelect" size={24} className="text-primary" />
                Конструкция
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Материал корпуса", value: "Сталь 5 мм" },
                  { label: "Материал шнека", value: "Сталь 4 мм" },
                  { label: "Материал ротора", value: "Сталь 8 мм" },
                  { label: "Количество шнеков", value: "2 шт" },
                  { label: "Лопасти ротора", value: "6 шт" },
                  { label: "Поворот дефлектора", value: "360°" },
                  { label: "Управление поворотом", value: "Гидравлика" },
                  { label: "Регулировка высоты", value: "Механическая" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                    <span className="font-body text-muted-foreground">{spec.label}</span>
                    <span className="font-heading font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Snowflake" size={24} className="text-primary" />
                Условия эксплуатации
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Температура работы", value: "от -35°C до +5°C" },
                  { label: "Тип снега", value: "Любой плотности" },
                  { label: "Глубина снега", value: "до 80 см" },
                  { label: "Лёд и наст", value: "Да" },
                  { label: "Гарантия", value: "2 года" },
                  { label: "Срок службы", value: "более 10 лет" },
                  { label: "Обслуживание", value: "Минимальное" },
                  { label: "Сертификация", value: "ГОСТ, ТР ТС" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/30">
                    <span className="font-body text-muted-foreground">{spec.label}</span>
                    <span className="font-heading font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Package" size={24} className="text-primary" />
                Комплектация
              </h3>
              <div className="space-y-3">
                {[
                  "Снегоротор в сборе",
                  "Карданный вал с защитным кожухом",
                  "Гидравлические шланги 2 шт",
                  "Крепёжный комплект",
                  "Руководство по эксплуатации",
                  "Гарантийный талон",
                  "Комплект запчастей для ТО"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 py-2">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span className="font-body">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
              Отзывы клиентов
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Иван Петров",
                company: "Фермерское хозяйство \"Заря\"",
                text: "Взяли на пробу зимой 2023. Отработал без нареканий весь сезон. Убирает быстро, снег летит далеко.",
                rating: 5
              },
              {
                name: "Сергей Михайлов",
                company: "ООО \"Агротехника\"",
                text: "До этого работали китайским, сломался через месяц. СШР работает уже второй сезон без поломок. Рекомендую!",
                rating: 5
              },
              {
                name: "Алексей Соколов",
                company: "КФХ \"Раздолье\"",
                text: "Отличное соотношение цены и качества. Установка простая, обслуживание минимальное. Доволен покупкой.",
                rating: 5
              },
              {
                name: "Владимир Кузнецов",
                company: "Сельхозпредприятие \"Нива\"",
                text: "Брали сразу два снегоротора для техники. Работают отлично, справляются даже с мокрым снегом.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="font-body text-foreground mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-heading font-bold text-sm">{review.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{review.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
            Специальная цена
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              этого месяца
            </span>
          </h2>
          
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm inline-block">
            <div className="mb-6">
              <div className="text-muted-foreground line-through text-2xl mb-2">218,000 ₽</div>
              <div className="font-heading text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                185,000 ₽
              </div>
              <div className="inline-block mt-4 px-4 py-2 bg-red-500/20 text-red-500 rounded-full font-body font-semibold">
                Экономия 33,000 ₽
              </div>
            </div>
            
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {[
                "Бесплатная доставка по РФ",
                "Гарантия 2 года",
                "Техподдержка 24/7",
                "Инструкция по установке"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-body">{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 font-body font-bold"
            >
              Заказать сейчас
              <Icon name="ShoppingCart" className="ml-2" size={24} />
            </Button>
            
            <p className="font-body text-sm text-muted-foreground mt-6">
              Акция действует до конца месяца
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-6">
            Остались вопросы?
          </h2>
          <p className="font-body text-xl text-foreground/80 mb-8">
            Звоните прямо сейчас или оставьте заявку
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+78001234567" className="flex items-center gap-2 text-2xl font-heading font-bold text-primary hover:text-secondary transition-colors">
              <Icon name="Phone" size={28} />
              8 (800) 123-45-67
            </a>
            <span className="text-muted-foreground hidden sm:block">или</span>
            <Button 
              size="lg"
              onClick={() => setIsFormOpen(true)}
              variant="outline"
              className="text-lg px-8 py-6 border-2 font-body font-semibold"
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-heading text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СНЕГОРОТОР СШР
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                8 (800) 123-45-67
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

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsFormOpen(false)}>
          <Card className="w-full max-w-md p-8 bg-card" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-heading text-2xl font-bold">Заказать звонок</h3>
              <button onClick={() => setIsFormOpen(false)} className="text-muted-foreground hover:text-foreground">
                <Icon name="X" size={24} />
              </button>
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
      )}
    </div>
  );
};

export default Index;