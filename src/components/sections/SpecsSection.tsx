import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const SpecsSection = () => {
  const comparisonData = [
    { label: "Модель", v1: "СШР-2.0", v2: "СШР-2.4", v3: "СШР-2.4 Т" },
    { label: "Ширина захвата, м", v1: "2,0", v2: "2,4", v3: "2,4" },
    { label: "Высота захвата, мм", v1: "700", v2: "800", v3: "800" },
    { label: "Дальность выброса, м", v1: "25", v2: "27", v3: "27" },
    { label: "Производительность, т/ч", v1: "250", v2: "300", v3: "300" },
    { label: "Масса, кг", v1: "350", v2: "380", v3: "400" },
    { label: "Мощность трактора, л.с.", v1: "55-70", v2: "60-81", v3: "60-81" },
    { label: "Частота вращения ВОМ трактора, об/мин", v1: "540", v2: "540", v3: "540" },
    { label: "Количество шнеков, шт.", v1: "2", v2: "1", v3: "1" },
    { label: "Диаметр ротора-метателя, мм", v1: "490", v2: "580", v3: "—" },
    { label: "Управление снегоотбрасывателем", v1: "ручное", v2: "гидросистемой", v3: "гидросистемой" },
    { label: "Гарантия, мес.", v1: "12", v2: "12", v3: "12" }
  ];

  const mainSpecs = [
    { label: "Модель", value: "СШР-2.0" },
    { label: "Тип", value: "Шнекороторный" },
    { label: "Ширина захвата", value: "до 2,14 м" },
    { label: "Высота захвата", value: "до 0,8 м" },
    { label: "Дальность выброса", value: "до 27 м" },
    { label: "Производительность", value: "до 300 т/ч" },
    { label: "Рабочая скорость", value: "3-5 км/ч" },
    { label: "Вес", value: "380 кг" }
  ];

  const technicalSpecs = [
    { label: "Привод", value: "От ВОМ трактора" },
    { label: "Частота вращения ВОМ", value: "540 об/мин" },
    { label: "Мощность трактора", value: "до 81 л.с." },
    { label: "Класс тяги трактора", value: "1,4-2,0" },
    { label: "Навеска", value: "Трёхточечная" },
    { label: "Тип сцепки", value: "Категория II" },
    { label: "Гидравлика", value: "1 секция" },
    { label: "Давление гидросистемы", value: "160-180 кгс/см²" }
  ];

  const constructionSpecs = [
    { label: "Материал корпуса", value: "Сталь 5 мм" },
    { label: "Материал шнека", value: "Сталь 4 мм" },
    { label: "Материал ротора", value: "Сталь 8 мм" },
    { label: "Количество шнеков", value: "2 шт" },
    { label: "Лопасти ротора", value: "6 шт" },
    { label: "Поворот дефлектора", value: "360°" },
    { label: "Управление поворотом", value: "Гидравлика" },
    { label: "Регулировка высоты", value: "Механическая" }
  ];

  const operatingSpecs = [
    { label: "Температура работы", value: "от -35°C до +5°C" },
    { label: "Тип снега", value: "Любой плотности" },
    { label: "Глубина снега", value: "до 80 см" },
    { label: "Лёд и наст", value: "Да" },
    { label: "Гарантия", value: "1 год" },
    { label: "Срок службы", value: "более 10 лет" },
    { label: "Обслуживание", value: "Минимальное" },
    { label: "Сертификация", value: "ГОСТ, ТР ТС" }
  ];

  const packageItems = [
    { text: "Снегоротор в сборе", isGift: false },
    { text: "Карданный вал с защитным кожухом 🎁", isGift: true },
    { text: "Гидравлические шланги 2 шт", isGift: false },
    { text: "Крепёжный комплект", isGift: false },
    { text: "Руководство по эксплуатации", isGift: false },
    { text: "Гарантийный талон", isGift: false },
    { text: "Комплект запчастей для ТО", isGift: false }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
            Технические характеристики
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Подробная информация о моделях снегороторов СШР
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <h3 className="font-heading text-2xl font-bold mb-6 text-center">
              Сравнение моделей
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 text-left font-body font-semibold">Параметр</th>
                    <th className="py-3 px-4 text-center font-heading font-bold text-primary">СШР-2.0</th>
                    <th className="py-3 px-4 text-center font-heading font-bold text-secondary">СШР-2.4</th>
                    <th className="py-3 px-4 text-center font-heading font-bold text-accent">СШР-2.4 Т</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground">{row.label}</td>
                      <td className="py-3 px-4 text-center font-semibold">{row.v1}</td>
                      <td className="py-3 px-4 text-center font-semibold">{row.v2}</td>
                      <td className="py-3 px-4 text-center font-semibold">{row.v3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <Icon name="AlertTriangle" size={20} className="text-yellow-500 mt-0.5" />
                <div className="font-body text-sm">
                  <span className="font-semibold">Внимание!</span> Любое другое использование является использованием не по назначению.
                </div>
              </div>
            </div>
          </Card>
          
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Settings" size={24} className="text-primary" />
                Основные характеристики
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {mainSpecs.map((spec, index) => (
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
                {technicalSpecs.map((spec, index) => (
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
                {constructionSpecs.map((spec, index) => (
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
                {operatingSpecs.map((spec, index) => (
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
                {packageItems.map((item, index) => (
                  <div key={index} className={`flex items-center gap-3 py-2 ${item.isGift ? 'bg-primary/10 -mx-3 px-3 rounded-lg' : ''}`}>
                    <Icon name="Check" size={20} className={item.isGift ? "text-primary" : "text-green-500"} />
                    <span className={`font-body ${item.isGift ? 'font-semibold text-primary' : ''}`}>{item.text}</span>
                    {item.isGift && <span className="ml-auto text-xs bg-primary text-white px-2 py-1 rounded-full">До 31.12.25</span>}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
