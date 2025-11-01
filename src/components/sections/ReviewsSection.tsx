import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const ReviewsSection = () => {
  const reviews = [
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
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
            Отзывы клиентов
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
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
  );
};
