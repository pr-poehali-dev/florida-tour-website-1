import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTour, setSelectedTour] = useState('');

  const tours = [
    {
      id: 1,
      title: 'Майами и пляжи',
      description: 'Насладитесь солнцем на белоснежных пляжах Майами, посетите Art Deco район и Ocean Drive',
      price: 'от $299',
      duration: '3 дня',
      image: 'https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/fad328f3-0120-4181-a4d3-be819de4cfef.jpg'
    },
    {
      id: 2,
      title: 'Эверглейдс',
      description: 'Уникальная экосистема с аллигаторами, мангровыми лесами и редкими птицами',
      price: 'от $199',
      duration: '1 день',
      image: 'https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/89c18db0-4e36-4248-a249-7638140704f5.jpg'
    },
    {
      id: 3,
      title: 'Ки-Уэст',
      description: 'Самая южная точка США, красочные закаты и уникальная атмосфера островной жизни',
      price: 'от $399',
      duration: '2 дня',
      image: 'https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/1b48be9d-1fa3-4bba-b8de-2479cd718e3e.jpg'
    },
    {
      id: 4,
      title: 'Орландо и парки',
      description: 'Disney World, Universal Studios и другие тематические парки для всей семьи',
      price: 'от $499',
      duration: '4 дня',
      image: 'https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/fad328f3-0120-4181-a4d3-be819de4cfef.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Смирнова',
      text: 'Невероятное путешествие! Организация на высшем уровне, каждая деталь продумана. Особенно понравился тур в Эверглейдс.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Отличные гиды, комфортабельный транспорт и насыщенная программа. Флорида оставила незабываемые впечатления!',
      rating: 5
    },
    {
      name: 'Елена Петрова',
      text: 'Идеальный отдых для всей семьи. Дети в восторге от парков, а взрослые оценили пляжи и экскурсии.',
      rating: 5
    }
  ];

  const destinations = [
    { name: 'Майами-Бич', icon: 'Palmtree' },
    { name: 'Эверглейдс', icon: 'TreePine' },
    { name: 'Ки-Уэст', icon: 'Ship' },
    { name: 'Орландо', icon: 'Castle' },
    { name: 'Тампа', icon: 'Building2' },
    { name: 'Форт-Лодердейл', icon: 'Waves' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">Florida Tours</h1>
          <div className="hidden md:flex gap-8">
            <a href="#tours" className="hover:text-primary transition-colors">Туры</a>
            <a href="#destinations" className="hover:text-primary transition-colors">Направления</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#booking">Забронировать</a>
          </Button>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/fad328f3-0120-4181-a4d3-be819de4cfef.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Откройте для себя Флориду
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Незабываемые экскурсионные программы по самым красивым местам солнечного штата
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <a href="#tours">Выбрать тур</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#contact">Связаться с нами</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Наши туры</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите идеальную экскурсионную программу из нашей коллекции незабываемых путешествий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <span className="text-lg font-semibold text-primary">{tour.price}</span>
                  </div>
                  <Button className="w-full" onClick={() => {
                    setSelectedTour(tour.title);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Направления</h2>
            <p className="text-muted-foreground text-lg">Популярные места для посещения во Флориде</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((dest, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer group animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={dest.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold">{dest.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg">Моменты из наших незабываемых путешествий</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-96 overflow-hidden rounded-lg group">
              <img 
                src="https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/fad328f3-0120-4181-a4d3-be819de4cfef.jpg" 
                alt="Майами"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-96 overflow-hidden rounded-lg group">
              <img 
                src="https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/89c18db0-4e36-4248-a249-7638140704f5.jpg" 
                alt="Эверглейдс"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-96 overflow-hidden rounded-lg group">
              <img 
                src="https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/1b48be9d-1fa3-4bba-b8de-2479cd718e3e.jpg" 
                alt="Ки-Уэст"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-2 h-96 overflow-hidden rounded-lg group">
              <img 
                src="https://cdn.poehali.dev/projects/fb420d51-00f5-47f7-be54-b42ed96658d1/files/fad328f3-0120-4181-a4d3-be819de4cfef.jpg" 
                alt="Флорида"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">О нас</h2>
          </div>
          <Card className="p-8">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Florida Tours — это команда профессионалов с многолетним опытом организации туров по солнечному штату. 
                Мы знаем Флориду как свой дом и с радостью делимся её красотой с нашими гостями.
              </p>
              <p className="text-lg mb-4">
                Наша миссия — показать вам настоящую Флориду: от всемирно известных пляжей Майами до скрытых жемчужин 
                дикой природы Эверглейдс. Мы создаём не просто экскурсии, а незабываемые впечатления.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Уникальных маршрутов</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Забронировать тур</h2>
            <p className="text-muted-foreground text-lg">Заполните форму и мы свяжемся с вами в ближайшее время</p>
          </div>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tour">Выберите тур</Label>
                  <Select value={selectedTour} onValueChange={setSelectedTour}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тур" />
                    </SelectTrigger>
                    <SelectContent>
                      {tours.map((tour) => (
                        <SelectItem key={tour.id} value={tour.title}>
                          {tour.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Желаемая дата</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Дополнительные пожелания</Label>
                <Textarea id="message" placeholder="Расскажите о ваших пожеланиях..." rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+1 (305) 555-0123</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@floridatours.com</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Miami Beach, Florida</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Florida Tours</h3>
              <p className="text-sm opacity-90">Ваш проводник в мир незабываемых впечатлений Флориды</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Туры</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100">Майами</a></li>
                <li><a href="#" className="hover:opacity-100">Эверглейдс</a></li>
                <li><a href="#" className="hover:opacity-100">Ки-Уэст</a></li>
                <li><a href="#" className="hover:opacity-100">Орландо</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#about" className="hover:opacity-100">О нас</a></li>
                <li><a href="#reviews" className="hover:opacity-100">Отзывы</a></li>
                <li><a href="#contact" className="hover:opacity-100">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-100 opacity-90">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:opacity-100 opacity-90">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:opacity-100 opacity-90">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 Florida Tours. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
