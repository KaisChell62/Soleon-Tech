import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ChevronRight, Calendar, MapPin, Phone, Star, Shield, Award, Fuel } from 'lucide-react';
import { motion } from 'framer-motion';

const translations: Record<string, Record<string, string>> = {
  fr: { brand: 'Velocity Motors', tagline: 'Votre prochaine voiture de luxe vous attend', viewDetails: 'Voir les détails', testDrive: 'Essai routier', contact: 'Nous contacter', featured: 'Véhicules en vedette', price: 'Prix', year: 'Année', mileage: 'Kilométrage', fuel: 'Carburant', from: 'À partir de', perMonth: '/mois', leasing: 'ou leasing', back: 'Retour au portfolio', schedule: 'Planifier un essai', call: 'Appeler', visit: 'Visiter le showroom', ourServices: 'Nos services', financing: 'Financement flexible', warranty: 'Garantie étendue', delivery: 'Livraison à domicile', certification: 'Véhicules certifiés', premium: 'Premium', new: 'Nouveau', sold: 'Vendu', available: 'Disponible', diesel: 'Diesel', petrol: 'Essence', electric: 'Électrique', hybrid: 'Hybride', km: 'km', showroom: 'Showroom Paris 16ème', openHours: 'Ouvert du Lun-Sam 9h-19h', gallery: 'Galerie', specs: 'Caractéristiques', reserve: 'Réserver ce véhicule' },
  en: { brand: 'Velocity Motors', tagline: 'Your next luxury car awaits', viewDetails: 'View details', testDrive: 'Test drive', contact: 'Contact us', featured: 'Featured vehicles', price: 'Price', year: 'Year', mileage: 'Mileage', fuel: 'Fuel', from: 'From', perMonth: '/month', leasing: 'or leasing', back: 'Back to portfolio', schedule: 'Schedule a test drive', call: 'Call', visit: 'Visit showroom', ourServices: 'Our services', financing: 'Flexible financing', warranty: 'Extended warranty', delivery: 'Home delivery', certification: 'Certified vehicles', premium: 'Premium', new: 'New', sold: 'Sold', available: 'Available', diesel: 'Diesel', petrol: 'Petrol', electric: 'Electric', hybrid: 'Hybrid', km: 'mi', showroom: 'London Mayfair Showroom', openHours: 'Open Mon-Sat 9am-7pm', gallery: 'Gallery', specs: 'Specifications', reserve: 'Reserve this vehicle' },
  es: { brand: 'Velocity Motors', tagline: 'Tu próximo coche de lujo te espera', viewDetails: 'Ver detalles', testDrive: 'Prueba de manejo', contact: 'Contáctenos', featured: 'Vehículos destacados', price: 'Precio', year: 'Año', mileage: 'Kilometraje', fuel: 'Combustible', from: 'Desde', perMonth: '/mes', leasing: 'o leasing', back: 'Volver al portafolio', schedule: 'Programar prueba', call: 'Llamar', visit: 'Visitar showroom', ourServices: 'Nuestros servicios', financing: 'Financiación flexible', warranty: 'Garantía extendida', delivery: 'Entrega a domicilio', certification: 'Vehículos certificados', premium: 'Premium', new: 'Nuevo', sold: 'Vendido', available: 'Disponible', diesel: 'Diésel', petrol: 'Gasolina', electric: 'Eléctrico', hybrid: 'Híbrido', km: 'km', showroom: 'Showroom Madrid Centro', openHours: 'Abierto Lun-Sáb 9h-19h', gallery: 'Galería', specs: 'Especificaciones', reserve: 'Reservar este vehículo' },
  de: { brand: 'Velocity Motors', tagline: 'Ihr nächstes Luxusauto wartet', viewDetails: 'Details ansehen', testDrive: 'Probefahrt', contact: 'Kontakt', featured: 'Ausgewählte Fahrzeuge', price: 'Preis', year: 'Jahr', mileage: 'Kilometerstand', fuel: 'Kraftstoff', from: 'Ab', perMonth: '/Monat', leasing: 'oder Leasing', back: 'Zurück zum Portfolio', schedule: 'Probefahrt planen', call: 'Anrufen', visit: 'Showroom besuchen', ourServices: 'Unsere Services', financing: 'Flexible Finanzierung', warranty: 'Erweiterte Garantie', delivery: 'Lieferung nach Hause', certification: 'Zertifizierte Fahrzeuge', premium: 'Premium', new: 'Neu', sold: 'Verkauft', available: 'Verfügbar', diesel: 'Diesel', petrol: 'Benzin', electric: 'Elektrisch', hybrid: 'Hybrid', km: 'km', showroom: 'Showroom München', openHours: 'Geöffnet Mo-Sa 9-19 Uhr', gallery: 'Galerie', specs: 'Spezifikationen', reserve: 'Dieses Fahrzeug reservieren' },
  zh: { brand: 'Velocity Motors', tagline: '您的下一辆豪华汽车在等您', viewDetails: '查看详情', testDrive: '试驾', contact: '联系我们', featured: '精选车辆', price: '价格', year: '年份', mileage: '里程', fuel: '燃料', from: '起价', perMonth: '/月', leasing: '或租赁', back: '返回作品集', schedule: '预约试驾', call: '致电', visit: '参观展厅', ourServices: '我们的服务', financing: '灵活融资', warranty: '延长保修', delivery: '送货上门', certification: '认证车辆', premium: '高级', new: '新品', sold: '已售', available: '有现货', diesel: '柴油', petrol: '汽油', electric: '电动', hybrid: '混合动力', km: '公里', showroom: '上海展厅', openHours: '周一至周六 9:00-19:00', gallery: '图库', specs: '规格', reserve: '预订此车' },
  ar: { brand: 'Velocity Motors', tagline: 'سيارتك الفاخرة التالية بانتظارك', viewDetails: 'عرض التفاصيل', testDrive: 'تجربة قيادة', contact: 'اتصل بنا', featured: 'المركبات المميزة', price: 'السعر', year: 'السنة', mileage: 'المسافة', fuel: 'الوقود', from: 'ابتداءً من', perMonth: '/شهر', leasing: 'أو تأجير', back: 'العودة للمحفظة', schedule: 'جدولة تجربة', call: 'اتصل', visit: 'زيارة المعرض', ourServices: 'خدماتنا', financing: 'تمويل مرن', warranty: 'ضمان ممتد', delivery: 'توصيل للمنزل', certification: 'مركبات معتمدة', premium: 'فاخر', new: 'جديد', sold: 'مباع', available: 'متاح', diesel: 'ديزل', petrol: 'بنزين', electric: 'كهربائي', hybrid: 'هجين', km: 'كم', showroom: 'معرض دبي', openHours: 'مفتوح الإثنين-السبت 9ص-7م', gallery: 'معرض الصور', specs: 'المواصفات', reserve: 'احجز هذه السيارة' },
  pt: { brand: 'Velocity Motors', tagline: 'Seu próximo carro de luxo espera por você', viewDetails: 'Ver detalhes', testDrive: 'Test drive', contact: 'Contate-nos', featured: 'Veículos em destaque', price: 'Preço', year: 'Ano', mileage: 'Quilometragem', fuel: 'Combustível', from: 'A partir de', perMonth: '/mês', leasing: 'ou leasing', back: 'Voltar ao portfólio', schedule: 'Agendar test drive', call: 'Ligar', visit: 'Visitar showroom', ourServices: 'Nossos serviços', financing: 'Financiamento flexível', warranty: 'Garantia estendida', delivery: 'Entrega em casa', certification: 'Veículos certificados', premium: 'Premium', new: 'Novo', sold: 'Vendido', available: 'Disponível', diesel: 'Diesel', petrol: 'Gasolina', electric: 'Elétrico', hybrid: 'Híbrido', km: 'km', showroom: 'Showroom São Paulo', openHours: 'Aberto Seg-Sáb 9h-19h', gallery: 'Galeria', specs: 'Especificações', reserve: 'Reservar este veículo' },
  ru: { brand: 'Velocity Motors', tagline: 'Ваш следующий люксовый автомобиль ждёт', viewDetails: 'Подробнее', testDrive: 'Тест-драйв', contact: 'Связаться', featured: 'Избранные автомобили', price: 'Цена', year: 'Год', mileage: 'Пробег', fuel: 'Топливо', from: 'От', perMonth: '/мес', leasing: 'или лизинг', back: 'Назад к портфолио', schedule: 'Записаться на тест-драйв', call: 'Позвонить', visit: 'Посетить шоурум', ourServices: 'Наши услуги', financing: 'Гибкое финансирование', warranty: 'Расширенная гарантия', delivery: 'Доставка на дом', certification: 'Сертифицированные авто', premium: 'Премиум', new: 'Новый', sold: 'Продан', available: 'В наличии', diesel: 'Дизель', petrol: 'Бензин', electric: 'Электро', hybrid: 'Гибрид', km: 'км', showroom: 'Шоурум Москва', openHours: 'Пн-Сб 9:00-19:00', gallery: 'Галерея', specs: 'Характеристики', reserve: 'Забронировать автомобиль' },
};

const cars = [
  { id: 1, name: 'Porsche 911 Carrera', price: 142000, monthlyPrice: 1890, year: 2024, mileage: 1200, fuel: 'petrol', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop', badge: 'new', rating: 4.9 },
  { id: 2, name: 'Mercedes-AMG GT', price: 178000, monthlyPrice: 2350, year: 2024, mileage: 3400, fuel: 'petrol', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop', badge: 'premium', rating: 4.8 },
  { id: 3, name: 'BMW i8 Roadster', price: 165000, monthlyPrice: 2100, year: 2023, mileage: 8500, fuel: 'hybrid', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop', badge: 'premium', rating: 4.7 },
  { id: 4, name: 'Audi e-tron GT', price: 124000, monthlyPrice: 1650, year: 2024, mileage: 2100, fuel: 'electric', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop', badge: 'new', rating: 4.9 },
  { id: 5, name: 'Range Rover Sport', price: 98000, monthlyPrice: 1290, year: 2023, mileage: 12000, fuel: 'diesel', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=500&fit=crop', badge: null, rating: 4.6 },
  { id: 6, name: 'Tesla Model S Plaid', price: 135000, monthlyPrice: 1780, year: 2024, mileage: 500, fuel: 'electric', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop', badge: 'new', rating: 4.8 },
];

export default function Velocity() {
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'en';
  const t = translations[lang] || translations.en;
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  const getFuelLabel = (fuel: string) => t[fuel] || fuel;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold tracking-tight">{t.brand}</h1>
            <a href="#contact" className="text-sm bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition">
              {t.contact}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop" 
            alt="Luxury car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{t.tagline}</h2>
            <p className="text-neutral-300 text-lg mb-8 flex items-center gap-2">
              <MapPin size={18} className="text-indigo-400" />
              {t.showroom} • {t.openHours}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cars" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition flex items-center gap-2">
                {t.featured} <ChevronRight size={18} />
              </a>
              <a href="#contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg font-semibold transition">
                {t.schedule}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: t.certification },
              { icon: Award, text: t.warranty },
              { icon: Calendar, text: t.financing },
              { icon: MapPin, text: t.delivery },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  <item.icon size={20} className="text-indigo-400" />
                </div>
                <span className="text-sm font-medium text-neutral-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section id="cars" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-10">{t.featured}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-indigo-500/50 transition-all group cursor-pointer"
                onClick={() => setSelectedCar(selectedCar === car.id ? null : car.id)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {car.badge && (
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                      car.badge === 'new' ? 'bg-green-500 text-white' : 'bg-indigo-500 text-white'
                    }`}>
                      {t[car.badge]}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-2">{car.name}</h4>
                  <div className="flex flex-wrap gap-3 text-sm text-neutral-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {car.year}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {car.mileage.toLocaleString()} {t.km}</span>
                    <span className="flex items-center gap-1"><Fuel size={14} /> {getFuelLabel(car.fuel)}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">€{car.price.toLocaleString()}</div>
                      <div className="text-sm text-neutral-500">{t.from} €{car.monthlyPrice}{t.perMonth}</div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition">
                      {t.viewDetails}
                    </button>
                  </div>
                </div>

                {/* Expanded details */}
                {selectedCar === car.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="border-t border-neutral-800 p-5 bg-neutral-800/50"
                  >
                    <div className="flex flex-wrap gap-3">
                      <button className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition flex items-center justify-center gap-2">
                        <Calendar size={16} /> {t.testDrive}
                      </button>
                      <button className="flex-1 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition flex items-center justify-center gap-2">
                        <Phone size={16} /> {t.call}
                      </button>
                    </div>
                    <p className="text-center text-neutral-500 text-sm mt-3">
                      <Check size={14} className="inline mr-1 text-green-500" />
                      {t.available}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">{t.schedule}</h3>
          <p className="text-neutral-400 mb-8">{t.showroom}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold transition flex items-center justify-center gap-2">
              <Phone size={18} /> +33 1 23 45 67 89
            </button>
            <button className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 rounded-xl font-bold transition flex items-center justify-center gap-2">
              <MapPin size={18} /> {t.visit}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 text-sm">
          © 2024 {t.brand}. Demo by Soleon Tech.
        </div>
      </footer>
    </div>
  );
}
