import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Home, PieChart, CreditCard, ArrowDownLeft, ArrowUpRight, Settings, LogOut, Bell, Menu, X, Wifi, Wallet, MoreHorizontal, ShoppingBag, Coffee, Smartphone, Plus } from 'lucide-react';

const txt: Record<string, Record<string, string>> = {
  fr: { welcome:'Bonsoir,', myCards:'Mes Cartes', addNew:'Ajouter', holder:'Titulaire', balance:'Solde Total', income:'Revenus Mensuels', expenses:'Dépenses', transactions:'Transactions', viewAll:'Tout Voir', transfer:'Transfert Rapide', dashboard:'Tableau de bord', analytics:'Analyses', cards:'Cartes', transfers:'Virements', settings:'Paramètres', logout:'Déconnexion', sendTo:'Envoyer à', new:'Nouveau', sendNow:'Envoyer', status:'Statut', category:'Catégorie', reference:'Référence', completed:'Terminé', close:'Fermer', electronics:'Électronique', food:'Nourriture', subscription:'Abonnement', transport:'Transport', transferCat:'Virement' },
  en: { welcome:'Good Evening,', myCards:'My Cards', addNew:'Add New', holder:'Card Holder', balance:'Total Balance', income:'Monthly Income', expenses:'Expenses', transactions:'Recent Transactions', viewAll:'View All', transfer:'Quick Transfer', dashboard:'Dashboard', analytics:'Analytics', cards:'Cards', transfers:'Transfers', settings:'Settings', logout:'Log Out', sendTo:'Send Money To', new:'New', sendNow:'Send Now', status:'Status', category:'Category', reference:'Reference', completed:'Completed', close:'Close', electronics:'Electronics', food:'Food & Drink', subscription:'Subscription', transport:'Transport', transferCat:'Transfer' },
  es: { welcome:'Buenas Tardes,', myCards:'Mis Tarjetas', addNew:'Añadir', holder:'Titular', balance:'Saldo Total', income:'Ingresos Mensuales', expenses:'Gastos', transactions:'Transacciones', viewAll:'Ver Todo', transfer:'Transferencia', dashboard:'Panel', analytics:'Análisis', cards:'Tarjetas', transfers:'Transferencias', settings:'Ajustes', logout:'Cerrar Sesión', sendTo:'Enviar Dinero a', new:'Nuevo', sendNow:'Enviar Ahora', status:'Estado', category:'Categoría', reference:'Referencia', completed:'Completado', close:'Cerrar', electronics:'Electrónica', food:'Comida', subscription:'Suscripción', transport:'Transporte', transferCat:'Transferencia' },
  de: { welcome:'Guten Abend,', myCards:'Meine Karten', addNew:'Neu', holder:'Karteninhaber', balance:'Gesamtsaldo', income:'Monatseinkommen', expenses:'Ausgaben', transactions:'Transaktionen', viewAll:'Alle Sehen', transfer:'Schnellüberweisung', dashboard:'Übersicht', analytics:'Analyse', cards:'Karten', transfers:'Überweisungen', settings:'Einstellungen', logout:'Abmelden', sendTo:'Geld Senden an', new:'Neu', sendNow:'Jetzt Senden', status:'Status', category:'Kategorie', reference:'Referenz', completed:'Abgeschlossen', close:'Schließen', electronics:'Elektronik', food:'Essen & Trinken', subscription:'Abo', transport:'Transport', transferCat:'Überweisung' },
  zh: { welcome:'晚上好，', myCards:'我的卡片', addNew:'添加', holder:'持卡人', balance:'总余额', income:'月收入', expenses:'支出', transactions:'近期交易', viewAll:'查看全部', transfer:'快速转账', dashboard:'仪表板', analytics:'分析', cards:'卡片', transfers:'转账', settings:'设置', logout:'退出', sendTo:'转账给', new:'新增', sendNow:'立即发送', status:'状态', category:'类别', reference:'参考号', completed:'已完成', close:'关闭', electronics:'电子产品', food:'餐饮', subscription:'订阅', transport:'交通', transferCat:'转账' },
  ar: { welcome:'مساء الخير،', myCards:'بطاقاتي', addNew:'إضافة', holder:'حامل البطاقة', balance:'الرصيد الإجمالي', income:'الدخل الشهري', expenses:'المصاريف', transactions:'المعاملات', viewAll:'عرض الكل', transfer:'تحويل سريع', dashboard:'لوحة التحكم', analytics:'التحليلات', cards:'البطاقات', transfers:'التحويلات', settings:'الإعدادات', logout:'تسجيل الخروج', sendTo:'إرسال إلى', new:'جديد', sendNow:'إرسال الآن', status:'الحالة', category:'الفئة', reference:'المرجع', completed:'مكتمل', close:'إغلاق', electronics:'إلكترونيات', food:'طعام وشراب', subscription:'اشتراك', transport:'نقل', transferCat:'تحويل' },
  pt: { welcome:'Boa Noite,', myCards:'Meus Cartões', addNew:'Adicionar', holder:'Titular', balance:'Saldo Total', income:'Renda Mensal', expenses:'Despesas', transactions:'Transações', viewAll:'Ver Tudo', transfer:'Transferência Rápida', dashboard:'Painel', analytics:'Análises', cards:'Cartões', transfers:'Transferências', settings:'Configurações', logout:'Sair', sendTo:'Enviar Dinheiro', new:'Novo', sendNow:'Enviar Agora', status:'Status', category:'Categoria', reference:'Referência', completed:'Concluído', close:'Fechar', electronics:'Eletrônicos', food:'Comida', subscription:'Assinatura', transport:'Transporte', transferCat:'Transferência' },
  ru: { welcome:'Добрый Вечер,', myCards:'Мои Карты', addNew:'Добавить', holder:'Владелец', balance:'Общий Баланс', income:'Месячный Доход', expenses:'Расходы', transactions:'Транзакции', viewAll:'Все', transfer:'Быстрый Перевод', dashboard:'Главная', analytics:'Аналитика', cards:'Карты', transfers:'Переводы', settings:'Настройки', logout:'Выход', sendTo:'Отправить', new:'Новый', sendNow:'Отправить', status:'Статус', category:'Категория', reference:'Референс', completed:'Завершено', close:'Закрыть', electronics:'Электроника', food:'Еда и Напитки', subscription:'Подписка', transport:'Транспорт', transferCat:'Перевод' },
};

interface Tx { id:number; merchant:string; date:string; amount:number; icon:React.ElementType; catKey:string; type:string }
const TXS: Tx[] = [
  { id:1, merchant:'Apple Store', date:'Today, 2:30 PM', amount:-1299, icon:ShoppingBag, catKey:'electronics', type:'debit' },
  { id:2, merchant:'Sarah Connor', date:'Today, 11:00 AM', amount:50, icon:ArrowDownLeft, catKey:'transferCat', type:'credit' },
  { id:3, merchant:'Starbucks', date:'Yesterday, 8:45 AM', amount:-5.50, icon:Coffee, catKey:'food', type:'debit' },
  { id:4, merchant:'Netflix', date:'Yesterday, 9:00 AM', amount:-14.99, icon:Smartphone, catKey:'subscription', type:'debit' },
  { id:5, merchant:'Uber', date:'Oct 24, 8:30 PM', amount:-24, icon:ArrowUpRight, catKey:'transport', type:'debit' },
];
const STATS = [
  { key:'balance', val:'$24,500.00', icon:Wallet, color:'text-emerald-400' },
  { key:'income', val:'$8,250.00', icon:ArrowUpRight, color:'text-indigo-400' },
  { key:'expenses', val:'$3,400.00', icon:ArrowDownLeft, color:'text-rose-400' },
];
const NAV = [
  { icon:Home, key:'dashboard', active:false },
  { icon:PieChart, key:'analytics', active:false },
  { icon:CreditCard, key:'cards', active:false },
  { icon:ArrowDownLeft, key:'transfers', active:false },
  { icon:Settings, key:'settings', active:false },
];

export default function ZenithBank() {
  const { i18n } = useTranslation();
  const t = txt[i18n.language.split('-')[0]] || txt.en;
  const [mob, setMob] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [selTx, setSelTx] = useState<Tx | null>(null);
  const [activePage, setActivePage] = useState<string>('dashboard');
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [showNotif, setShowNotif] = useState(false);
  const [toggles, setToggles] = useState<Record<string, boolean>>({ push: true, bio: true, dark: true, usd: true });
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [selectedBenef, setSelectedBenef] = useState<string | null>(null);

  const toggleSetting = (key: string) => setToggles(prev => ({ ...prev, [key]: !prev[key] }));

  const SidebarEl = () => (
    <aside className="w-64 border-r border-slate-800/50 bg-slate-950 flex flex-col p-6 z-20">
      <div className="text-2xl font-bold tracking-tight mb-10 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">Z</div>Zenith
      </div>
      <nav className="flex-1 space-y-2">
        {NAV.map(n => (
          <button key={n.key} onClick={() => { setActivePage(n.key); setMob(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === n.key ? 'bg-indigo-600/10 text-indigo-400 font-medium' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}>
            <n.icon size={20} />{t[n.key]}
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-slate-800/50">
        <button className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"><LogOut size={20} /><span>{t.logout}</span></button>
      </div>
    </aside>
  );

  return (
    <div className="flex bg-slate-950 text-white font-sans selection:bg-indigo-500/30 overflow-hidden min-h-screen h-screen relative">
      {/* Desktop sidebar */}
      <div className="hidden md:flex h-screen sticky top-0"><SidebarEl /></div>
      {/* Mobile menu */}
      <AnimatePresence>
        {mob && (
          <motion.div initial={{ opacity:0, x:-100 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-100 }} className="fixed inset-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-xl">
            <div className="p-4 flex justify-end"><button onClick={() => setMob(false)} className="p-2 text-slate-400 hover:text-white"><X size={24} /></button></div>
            <div className="h-full overflow-y-auto pb-20"><SidebarEl /></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="flex-1 relative min-h-screen overflow-y-auto overflow-x-hidden bg-slate-950">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-20 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-slate-400 hover:text-white" onClick={() => setMob(true)}><Menu size={24} /></button>
            <div>
              <h1 className="text-sm md:text-xl font-medium text-slate-400">{t.welcome}</h1>
              <h2 className="text-xl md:text-2xl font-bold">Alex Mercer</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 relative">
            <button onClick={() => setShowNotif(!showNotif)} className="relative w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[10px] font-bold flex items-center justify-center">3</span>
            </button>
            <AnimatePresence>
              {showNotif && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute top-14 right-0 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <div className="p-4 border-b border-slate-800 flex justify-between items-center"><span className="font-semibold">Notifications</span><button onClick={() => setShowNotif(false)} className="text-slate-500 hover:text-white"><X size={16} /></button></div>
                  <div className="max-h-64 overflow-y-auto">
                    {[{ title: 'Paiement reçu', desc: '+$50.00 de Sarah', time: 'Il y a 2min', color: 'bg-emerald-500' }, { title: 'Facture due', desc: 'Netflix - $14.99', time: 'Il y a 1h', color: 'bg-amber-500' }, { title: 'Sécurité', desc: 'Nouvelle connexion détectée', time: 'Il y a 3h', color: 'bg-rose-500' }].map((n, i) => (
                      <div key={i} className="p-4 hover:bg-slate-800/50 cursor-pointer border-b border-slate-800/50 flex gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${n.color}`} />
                        <div className="flex-1"><p className="font-medium text-sm">{n.title}</p><p className="text-xs text-slate-500">{n.desc}</p><p className="text-xs text-slate-600 mt-1">{n.time}</p></div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-slate-800"><button className="w-full text-center text-sm text-indigo-400 hover:text-indigo-300">Voir tout</button></div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] cursor-pointer hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" alt="User" className="w-full h-full object-cover" /></div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 relative z-10 pb-20">
          {/* Dashboard Page */}
          {activePage === 'dashboard' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Credit Card */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">{t.myCards}</h3>
                  <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">{t.addNew}</button>
                </div>
                <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="relative h-64 w-full md:w-96 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start"><span className="font-bold text-lg italic tracking-wider">Zenith</span><Wifi className="opacity-80 rotate-90" /></div>
                    <div>
                      <div className="flex gap-4 mb-6">{['••••','••••','••••'].map((s,i) => <span key={i} className="text-2xl tracking-widest font-mono">{s}</span>)}<span className="text-xl font-mono">4289</span></div>
                      <div className="flex justify-between items-end">
                        <div><p className="text-[10px] uppercase tracking-wider opacity-70 mb-1">{t.holder}</p><p className="font-medium tracking-wide">ALEX MERCER</p></div>
                        <div className="text-right"><p className="font-bold italic">VISA</p><p className="text-[10px]">Platinum</p></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Quick Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                {STATS.map((s, i) => (
                  <motion.div key={s.key} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*.1 }} className="bg-slate-900/50 backdrop-blur border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-slate-800 ${s.color}`}><s.icon size={20} /></div>
                      <MoreHorizontal size={20} className="text-slate-500" />
                    </div>
                    <p className="text-slate-400 text-sm mb-1">{t[s.key]}</p>
                    <p className="text-2xl font-bold">{s.val}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-slate-900/40 backdrop-blur border border-slate-800 rounded-3xl p-6 h-fit">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold">{t.transactions}</h3>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">{t.viewAll}</button>
              </div>
              <div className="space-y-6">
                {TXS.map((tx, i) => (
                  <motion.div key={tx.id} onClick={() => setSelTx(tx)} initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:.2+i*.05 }} className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-800/50 cursor-pointer transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-colors"><tx.icon size={20} /></div>
                    <div className="flex-1"><p className="font-medium">{tx.merchant}</p><p className="text-sm text-slate-500">{t[tx.catKey]}</p></div>
                    <div className="text-right"><p className={`font-medium ${tx.amount > 0 ? 'text-emerald-400' : ''}`}>{tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}</p><p className="text-xs text-slate-500">{tx.date.split(',')[0]}</p></div>
                  </motion.div>
                ))}
              </div>
              <button onClick={() => setSendOpen(true)} className="w-full mt-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors">{t.transfer}</button>
            </div>
          </div>
          )}

          {/* Analytics Page */}
          {activePage === 'analytics' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <h2 className="text-2xl font-bold">{t.analytics}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Dépenses Mensuelles</h3>
                  <div className="h-48 flex items-end gap-2">
                    {[65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50, 88].map((h, i) => (
                      <div key={i} className="flex-1 bg-indigo-600/30 hover:bg-indigo-600/50 rounded-t transition-all cursor-pointer" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span><span>Juil</span><span>Août</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Déc</span>
                  </div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Répartition par Catégorie</h3>
                  <div className="space-y-4">
                    {[{ name: 'Shopping', pct: 35, color: 'bg-indigo-500' }, { name: 'Alimentation', pct: 25, color: 'bg-emerald-500' }, { name: 'Transport', pct: 20, color: 'bg-amber-500' }, { name: 'Loisirs', pct: 20, color: 'bg-pink-500' }].map((cat) => (
                      <div key={cat.name}>
                        <div className="flex justify-between text-sm mb-1"><span>{cat.name}</span><span>{cat.pct}%</span></div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden"><div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.pct}%` }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Tendance Économies</h3>
                <div className="h-32 flex items-center">
                  <svg viewBox="0 0 400 100" className="w-full h-full">
                    <path d="M0,80 Q50,70 100,60 T200,40 T300,30 T400,20" fill="none" stroke="url(#gradient)" strokeWidth="3" />
                    <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#a855f7" /></linearGradient></defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cards Page */}
          {activePage === 'cards' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{t.cards}</h2>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium flex items-center gap-2 active:scale-95 transition-all"><Plus size={16} />{t.addNew}</button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[{ gradient: 'from-indigo-600 via-purple-600 to-pink-600', number: '4289', type: 'Platinum', balance: '$18,420.00' }, { gradient: 'from-slate-700 via-slate-600 to-slate-500', number: '8821', type: 'Business', balance: '$6,080.00' }].map((card, i) => (
                  <motion.div key={i} onClick={() => setSelectedCard(i)} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className={`relative h-56 rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all bg-gradient-to-br ${card.gradient} p-6 flex flex-col justify-between ${selectedCard === i ? 'ring-4 ring-white/30 scale-[1.02]' : 'hover:scale-[1.02]'}`}>
                    <div className="flex justify-between items-start"><span className="font-bold text-lg italic tracking-wider">Zenith</span><Wifi className="opacity-80 rotate-90" /></div>
                    <div>
                      <div className="flex gap-3 mb-4">{['••••','••••','••••'].map((s,j) => <span key={j} className="text-xl tracking-widest font-mono">{s}</span>)}<span className="text-lg font-mono">{card.number}</span></div>
                      <div className="flex justify-between items-end">
                        <div><p className="text-[10px] uppercase tracking-wider opacity-70">Titulaire</p><p className="font-medium">ALEX MERCER</p></div>
                        <div className="text-right"><p className="font-bold italic">VISA</p><p className="text-[10px]">{card.type}</p></div>
                      </div>
                    </div>
                    {selectedCard === i && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-3 right-3 bg-white/20 backdrop-blur px-2 py-1 rounded-lg text-xs font-medium">Sélectionnée</motion.div>}
                  </motion.div>
                ))}
              </div>
              
              {/* Card Actions */}
              <div className="grid grid-cols-4 gap-4">
                {[{ icon: CreditCard, label: 'Bloquer' }, { icon: Settings, label: 'Paramètres' }, { icon: ArrowUpRight, label: 'Envoyer' }, { icon: Plus, label: 'Plafonds' }].map((action, i) => (
                  <motion.button key={i} whileTap={{ scale: 0.95 }} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-slate-800/50 transition-colors">
                    <action.icon size={24} className="text-indigo-400" />
                    <span className="text-xs text-slate-400">{action.label}</span>
                  </motion.button>
                ))}
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Limites de Carte</h3>
                <div className="space-y-4">
                  <div><div className="flex justify-between text-sm mb-1"><span>Dépenses quotidiennes</span><span className="font-mono">$2,400 / $5,000</span></div><div className="h-3 bg-slate-800 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '48%' }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" /></div></div>
                  <div><div className="flex justify-between text-sm mb-1"><span>Retraits ATM</span><span className="font-mono">$800 / $2,000</span></div><div className="h-3 bg-slate-800 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" /></div></div>
                  <div><div className="flex justify-between text-sm mb-1"><span>Paiements en ligne</span><span className="font-mono">$3,200 / $10,000</span></div><div className="h-3 bg-slate-800 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '32%' }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" /></div></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Transfers Page */}
          {activePage === 'transfers' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <h2 className="text-2xl font-bold">{t.transfers}</h2>
              
              {transferSuccess ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-900/50 border border-emerald-500/30 rounded-3xl p-12 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <motion.div initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4 }}><svg className="w-12 h-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Transfert Réussi!</h3>
                  <p className="text-slate-400 mb-6">Votre virement a été envoyé avec succès.</p>
                  <button onClick={() => setTransferSuccess(false)} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium">Nouveau Transfert</button>
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-6">Nouveau Virement</h3>
                    <div className="space-y-4">
                      <div><label className="text-sm text-slate-400 block mb-2">Destinataire</label><input type="text" placeholder="Nom ou IBAN" defaultValue={selectedBenef || ''} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" /></div>
                      <div><label className="text-sm text-slate-400 block mb-2">Montant</label><div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">$</span><input type="number" placeholder="0.00" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 pl-10 text-2xl font-bold focus:outline-none focus:border-indigo-500 transition-colors" /></div></div>
                      <div><label className="text-sm text-slate-400 block mb-2">Motif</label><input type="text" placeholder="Ex: Remboursement dîner" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" /></div>
                      <motion.button whileTap={{ scale: 0.98 }} onClick={() => setTransferSuccess(true)} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 transition-colors"><ArrowUpRight size={20} />{t.sendNow}</motion.button>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Bénéficiaires</h3>
                    <div className="space-y-2">
                      {[{ name: 'Sarah Connor', iban: 'FR76 •••• 4521' }, { name: 'John Doe', iban: 'DE89 •••• 7832' }, { name: 'Emma Wilson', iban: 'GB82 •••• 1234' }, { name: 'Mike Ross', iban: 'US12 •••• 9087' }].map((benef, i) => (
                        <motion.div key={i} whileTap={{ scale: 0.98 }} onClick={() => setSelectedBenef(benef.name)} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selectedBenef === benef.name ? 'bg-indigo-600/20 border border-indigo-500/30' : 'hover:bg-slate-800/50'}`}>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold">{benef.name[0]}</div>
                          <div className="flex-1"><p className="font-medium text-sm">{benef.name}</p><p className="text-xs text-slate-500 font-mono">{benef.iban}</p></div>
                          {selectedBenef === benef.name && <div className="w-2 h-2 rounded-full bg-indigo-400" />}
                        </motion.div>
                      ))}
                    </div>
                    <button className="w-full mt-4 py-3 border border-dashed border-slate-700 rounded-xl text-slate-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors flex items-center justify-center gap-2"><Plus size={16} />Ajouter</button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Settings Page */}
          {activePage === 'settings' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-2xl">
              <h2 className="text-2xl font-bold">{t.settings}</h2>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl divide-y divide-slate-800">
                {[{ key: 'push', label: 'Notifications Push', desc: 'Recevoir les alertes de transaction' }, { key: 'bio', label: 'Authentification Biométrique', desc: 'Face ID / Touch ID' }, { key: 'dark', label: 'Mode Sombre', desc: 'Thème de l\'application' }, { key: 'usd', label: 'Devise Préférée', desc: 'USD ($)' }].map((item) => (
                  <motion.div key={item.key} whileTap={{ scale: 0.99 }} className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-800/30 transition-colors" onClick={() => toggleSetting(item.key)}>
                    <div><p className="font-medium">{item.label}</p><p className="text-sm text-slate-500">{item.desc}</p></div>
                    <motion.div layout className={`w-14 h-7 rounded-full relative cursor-pointer transition-colors ${toggles[item.key] ? 'bg-indigo-600' : 'bg-slate-700'}`}>
                      <motion.div layout transition={{ type: 'spring', stiffness: 500, damping: 30 }} className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg ${toggles[item.key] ? 'right-1' : 'left-1'}`} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Profil</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-[2px]">
                    <div className="w-full h-full rounded-2xl bg-slate-950 overflow-hidden"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200" alt="Alex Mercer" className="w-full h-full object-cover" /></div>
                  </div>
                  <div><p className="font-bold text-lg">Alex Mercer</p><p className="text-slate-500">alex.mercer@zenith.com</p><button className="text-indigo-400 text-sm mt-1 hover:text-indigo-300">Modifier la photo</button></div>
                </div>
                <div className="space-y-3">
                  <div><label className="text-xs text-slate-500 block mb-1">Nom complet</label><input type="text" defaultValue="Alex Mercer" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" /></div>
                  <div><label className="text-xs text-slate-500 block mb-1">Email</label><input type="email" defaultValue="alex.mercer@zenith.com" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" /></div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Sécurité</h3>
                <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-medium mb-3 transition-colors">Changer le mot de passe</motion.button>
                <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-amber-600/20 text-amber-400 hover:bg-amber-600/30 py-3 rounded-xl font-medium mb-3 transition-colors">Activer 2FA</motion.button>
                <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 py-3 rounded-xl font-medium transition-colors">Déconnexion de tous les appareils</motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Send Modal */}
      <AnimatePresence>
        {sendOpen && (
          <>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={() => setSendOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40" />
            <motion.div initial={{ y:'100%' }} animate={{ y:0 }} exit={{ y:'100%' }} transition={{ type:'spring', damping:25, stiffness:200 }} className="absolute bottom-0 left-0 right-0 h-[70%] bg-slate-900 rounded-t-[2.5rem] border-t border-slate-700 p-6 z-50 flex flex-col">
              <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6">{t.sendTo}</h3>
              <div className="flex gap-4 overflow-x-auto pb-6">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex flex-col items-center gap-2 min-w-[4rem]">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-indigo-500/30 overflow-hidden">
                      <img src={`https://images.unsplash.com/photo-${1500000000000+i*111111111}?w=100&h=100&fit=crop&crop=faces`} alt={`Recipient ${i}`} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <span className="text-xs text-slate-400">User {i}</span>
                  </div>
                ))}
                <button className="flex flex-col items-center gap-2 min-w-[4rem]">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center text-slate-400"><Plus size={24} /></div>
                  <span className="text-xs text-slate-400">{t.new}</span>
                </button>
              </div>
              <div className="mt-6 space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-500">$</span>
                  <input type="number" placeholder="0.00" className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-6 pl-10 text-3xl font-bold focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
                <button onClick={() => setSendOpen(false)} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all">{t.sendNow}</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Transaction Detail Modal */}
      <AnimatePresence>
        {selTx && (
          <motion.div initial={{ opacity:0, scale:.95 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:.95 }} className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
            <div className="w-full max-w-sm bg-slate-900 border border-slate-700/50 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
              <button onClick={() => setSelTx(null)} className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white z-10"><X size={20} /></button>
              <div className="flex flex-col items-center pt-8 pb-6">
                <div className="w-20 h-20 rounded-3xl bg-slate-800 flex items-center justify-center mb-4 shadow-xl shadow-black/30"><selTx.icon size={32} className="text-indigo-400" /></div>
                <h3 className="text-xl font-bold">{selTx.merchant}</h3>
                <p className="text-slate-400 text-sm mt-1">{selTx.date}</p>
                <div className="mt-6 text-3xl font-black tracking-tight flex items-baseline gap-1">
                  <span className={selTx.amount > 0 ? 'text-emerald-400' : 'text-white'}>{Math.abs(selTx.amount).toFixed(2)}</span>
                  <span className="text-sm text-slate-500 font-medium">USD</span>
                </div>
              </div>
              <div className="space-y-4 bg-slate-950/50 rounded-2xl p-4">
                <div className="flex justify-between text-sm"><span className="text-slate-500">{t.status}</span><span className="text-emerald-400 font-medium flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{t.completed}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">{t.category}</span><span>{t[selTx.catKey]}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">{t.reference}</span><span className="font-mono text-xs text-slate-300">#TRX-8859-221</span></div>
              </div>
              <button onClick={() => setSelTx(null)} className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-colors">{t.close}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
