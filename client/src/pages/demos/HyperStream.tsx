import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Play, Pause, Search, X, Heart, Star, Clock, Volume2, VolumeX,
  Maximize, SkipForward, SkipBack, Menu, Home, Film, Tv, Bookmark,
  Send, MessageCircle, Users, Plus, Check, ChevronDown, Lock
} from 'lucide-react';

/* ── Translations ─────────────────────────────────────────── */
const txt: Record<string, Record<string, string>> = {
  fr:{brand:'HyperStream',home:'Accueil',movies:'Films',series:'Séries',myList:'Ma liste',search:'Rechercher...',trending:'Tendances',all:'Tout',action:'Action',scifi:'Sci-Fi',drama:'Drame',comedy:'Comédie',thriller:'Thriller',horror:'Horreur',addList:'Ajouter',added:'Ajouté',play:'Lecture',resume:'Reprendre',info:"Plus d'infos",watchParty:'Watch Party',viewers:'spectateurs',chat:'Chat',sendMsg:'Message...',ep:'Ép',min:'min',close:'Fermer',live:'EN DIRECT',noResult:'Aucun résultat',continueWatching:'Reprendre',top10:'Top 10',newEp:'Nouveau',season:'Saison',episodes:'Épisodes',similar:'Titres similaires',matchScore:'Recommandé pour vous'},
  en:{brand:'HyperStream',home:'Home',movies:'Movies',series:'Series',myList:'My List',search:'Search...',trending:'Trending',all:'All',action:'Action',scifi:'Sci-Fi',drama:'Drama',comedy:'Comedy',thriller:'Thriller',horror:'Horror',addList:'Add',added:'Added',play:'Play',resume:'Resume',info:'More Info',watchParty:'Watch Party',viewers:'viewers',chat:'Chat',sendMsg:'Message...',ep:'Ep',min:'min',close:'Close',live:'LIVE',noResult:'No results',continueWatching:'Continue',top10:'Top 10',newEp:'New',season:'Season',episodes:'Episodes',similar:'More Like This',matchScore:'Recommended for you'},
  es:{brand:'HyperStream',home:'Inicio',movies:'Películas',series:'Series',myList:'Mi lista',search:'Buscar...',trending:'Tendencias',all:'Todo',action:'Acción',scifi:'Ciencia ficción',drama:'Drama',comedy:'Comedia',thriller:'Suspenso',horror:'Terror',addList:'Agregar',added:'Agregado',play:'Reproducir',resume:'Continuar',info:'Más info',watchParty:'Watch Party',viewers:'espectadores',chat:'Chat',sendMsg:'Mensaje...',ep:'Ep',min:'min',close:'Cerrar',live:'EN VIVO',noResult:'Sin resultados',continueWatching:'Seguir Viendo',top10:'Top 10',newEp:'Nuevo',season:'Temporada',episodes:'Episodios',similar:'Más como esto',matchScore:'Recomendado para ti'},
  de:{brand:'HyperStream',home:'Startseite',movies:'Filme',series:'Serien',myList:'Meine Liste',search:'Suchen...',trending:'Trending',all:'Alle',action:'Action',scifi:'Sci-Fi',drama:'Drama',comedy:'Komödie',thriller:'Thriller',horror:'Horror',addList:'Hinzufügen',added:'Hinzugefügt',play:'Abspielen',resume:'Fortsetzen',info:'Mehr Info',watchParty:'Watch Party',viewers:'Zuschauer',chat:'Chat',sendMsg:'Nachricht...',ep:'Ep',min:'Min',close:'Schließen',live:'LIVE',noResult:'Keine Ergebnisse',continueWatching:'Weiterschauen',top10:'Top 10',newEp:'Neu',season:'Staffel',episodes:'Folgen',similar:'Ähnliche Titel',matchScore:'Empfohlen für dich'},
  zh:{brand:'HyperStream',home:'首页',movies:'电影',series:'剧集',myList:'我的列表',search:'搜索...',trending:'热门',all:'全部',action:'动作',scifi:'科幻',drama:'剧情',comedy:'喜剧',thriller:'惊悚',horror:'恐怖',addList:'添加',added:'已添加',play:'播放',resume:'继续',info:'更多信息',watchParty:'一起看',viewers:'观众',chat:'聊天',sendMsg:'消息...',ep:'集',min:'分钟',close:'关闭',live:'直播',noResult:'无结果',continueWatching:'继续观看',top10:'热播前十',newEp:'新',season:'第',episodes:'集数',similar:'类似推荐',matchScore:'为你推荐'},
  ar:{brand:'HyperStream',home:'الرئيسية',movies:'أفلام',series:'مسلسلات',myList:'قائمتي',search:'ابحث...',trending:'رائج',all:'الكل',action:'أكشن',scifi:'خيال علمي',drama:'دراما',comedy:'كوميديا',thriller:'إثارة',horror:'رعب',addList:'إضافة',added:'مضاف',play:'تشغيل',resume:'متابعة',info:'معلومات',watchParty:'مشاهدة جماعية',viewers:'مشاهد',chat:'دردشة',sendMsg:'رسالة...',ep:'ح',min:'د',close:'إغلاق',live:'مباشر',noResult:'لا نتائج',continueWatching:'متابعة',top10:'أفضل 10',newEp:'جديد',season:'موسم',episodes:'حلقات',similar:'مشابه',matchScore:'موصى به لك'},
  pt:{brand:'HyperStream',home:'Início',movies:'Filmes',series:'Séries',myList:'Minha lista',search:'Buscar...',trending:'Em alta',all:'Tudo',action:'Ação',scifi:'Ficção científica',drama:'Drama',comedy:'Comédia',thriller:'Suspense',horror:'Terror',addList:'Adicionar',added:'Adicionado',play:'Reproduzir',resume:'Continuar',info:'Mais info',watchParty:'Watch Party',viewers:'espectadores',chat:'Chat',sendMsg:'Mensagem...',ep:'Ep',min:'min',close:'Fechar',live:'AO VIVO',noResult:'Sem resultados',continueWatching:'Continuar',top10:'Top 10',newEp:'Novo',season:'Temporada',episodes:'Episódios',similar:'Semelhantes',matchScore:'Recomendado para você'},
  ru:{brand:'HyperStream',home:'Главная',movies:'Фильмы',series:'Сериалы',myList:'Мой список',search:'Найти...',trending:'В тренде',all:'Все',action:'Боевик',scifi:'Фантастика',drama:'Драма',comedy:'Комедия',thriller:'Триллер',horror:'Ужасы',addList:'Добавить',added:'Добавлено',play:'Смотреть',resume:'Продолжить',info:'Подробнее',watchParty:'Вместе',viewers:'зрителей',chat:'Чат',sendMsg:'Сообщение...',ep:'Сер',min:'мин',close:'Закрыть',live:'ЭФИР',noResult:'Нет результатов',continueWatching:'Продолжить',top10:'Топ 10',newEp:'Новое',season:'Сезон',episodes:'Серии',similar:'Похожее',matchScore:'Рекомендуем вам'},
};

type Episode = { n:number; title:string; dur:number; locked?:boolean };
type CatItem = { id:number; title:string; cat:string; yr:number; rate:number; dur:number; ep:number; desc:string; isNew:boolean; grad:string; accent:string; glow:string; shapes:ReactNode; episodes?:Episode[] };

/* ── Catalog ──────────────────────────────────────────────── */
const catalog: CatItem[] = [
  { id:1, title:'Quantum Horizon', cat:'scifi', yr:2025, rate:9.1, dur:148, ep:0, desc:'A physicist discovers that parallel universes are collapsing — and ours is next.', isNew:false,
    grad:'bg-gradient-to-br from-violet-700 via-indigo-900 to-black', accent:'bg-violet-500', glow:'shadow-violet-600/40',
    shapes:<><div className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-purple-500/20 blur-2xl"/><div className="absolute bottom-[30%] right-[10%] w-20 h-20 rounded-full bg-indigo-400/30 blur-xl"/><div className="absolute top-[10%] right-[20%] w-1 h-40 bg-gradient-to-b from-violet-400/60 to-transparent rotate-[25deg]"/></> },
  { id:2, title:'Shadow Protocol', cat:'thriller', yr:2024, rate:8.7, dur:122, ep:0, desc:'An ex-MI6 operative is dragged back for one last mission in the dark.', isNew:false,
    grad:'bg-gradient-to-br from-slate-800 via-gray-900 to-black', accent:'bg-slate-400', glow:'shadow-slate-500/30',
    shapes:<><div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,.02)_20px,rgba(255,255,255,.02)_21px)]"/><div className="absolute top-[40%] left-[20%] w-24 h-24 bg-slate-500/10 blur-2xl rounded-full"/></> },
  { id:3, title:'Neon District', cat:'action', yr:2025, rate:8.9, dur:0, ep:8, desc:'In a rain-soaked cyberpunk megacity, a rogue detective fights corporate overlords.', isNew:true,
    grad:'bg-gradient-to-br from-cyan-600 via-blue-900 to-black', accent:'bg-cyan-400', glow:'shadow-cyan-500/40',
    shapes:<><div className="absolute top-[5%] right-[10%] w-40 h-1 bg-cyan-400/50"/><div className="absolute top-[8%] right-[15%] w-28 h-0.5 bg-pink-400/40"/><div className="absolute bottom-[20%] left-[5%] w-20 h-48 bg-gradient-to-t from-cyan-500/20 to-transparent blur-md"/></>,
    episodes:[{n:1,title:'Neon Rain',dur:52},{n:2,title:'Ghost Signal',dur:48},{n:3,title:'Blackout',dur:55},{n:4,title:'The Syndicate',dur:50},{n:5,title:'Red Wire',dur:53},{n:6,title:'Override',dur:47},{n:7,title:'Flashpoint',dur:58},{n:8,title:'System Crash',dur:62}] },
  { id:4, title:'The Last Signal', cat:'drama', yr:2024, rate:9.3, dur:135, ep:0, desc:'A stranded astronaut records one final message for the family she may never see.', isNew:false,
    grad:'bg-gradient-to-br from-amber-800 via-orange-950 to-black', accent:'bg-amber-500', glow:'shadow-amber-600/30',
    shapes:<><div className="absolute top-[15%] left-[40%] w-28 h-28 rounded-full border border-amber-400/20"/><div className="absolute bottom-[25%] right-[20%] w-2 h-2 bg-amber-400 rounded-full shadow-lg shadow-amber-400/80"/></> },
  { id:5, title:'Code Zero', cat:'thriller', yr:2025, rate:8.5, dur:0, ep:10, desc:'A hacker collective stumbles onto a government surveillance program — and becomes its target.', isNew:true,
    grad:'bg-gradient-to-br from-emerald-700 via-teal-950 to-black', accent:'bg-emerald-400', glow:'shadow-emerald-500/30',
    shapes:<><div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(16,185,129,.06)_3px,rgba(16,185,129,.06)_4px)]"/><div className="absolute top-[30%] left-[50%] text-emerald-500/20 text-[8px] font-mono select-none leading-tight">01001<br/>11010</div></>,
    episodes:[{n:1,title:'Ping',dur:42},{n:2,title:'Backdoor',dur:45},{n:3,title:'Rootkit',dur:44},{n:4,title:'Payload',dur:48},{n:5,title:'Exfil',dur:43},{n:6,title:'Zero Day',dur:50},{n:7,title:'Keylogger',dur:46},{n:8,title:'Firewall',dur:47},{n:9,title:'Darknet',dur:51},{n:10,title:'Shutdown',dur:55}] },
  { id:6, title:'Lunar Colony', cat:'scifi', yr:2024, rate:8.8, dur:156, ep:0, desc:'The first human settlement on the Moon faces a crisis that could end it all.', isNew:false,
    grad:'bg-gradient-to-br from-indigo-700 via-purple-950 to-black', accent:'bg-indigo-400', glow:'shadow-indigo-500/30',
    shapes:<><div className="absolute top-[10%] right-[15%] w-36 h-36 rounded-full bg-white/5 blur-md"/><div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-white/60 rounded-full shadow-sm shadow-white/40"/><div className="absolute top-[60%] left-[55%] w-1 h-1 bg-white/30 rounded-full"/></> },
  { id:7, title:'Dark Comedy Club', cat:'comedy', yr:2025, rate:7.9, dur:0, ep:12, desc:'A failing stand-up comedian accidentally goes viral and chaos follows.', isNew:true,
    grad:'bg-gradient-to-br from-pink-600 via-rose-900 to-black', accent:'bg-pink-400', glow:'shadow-pink-500/30',
    shapes:<><div className="absolute top-[25%] left-[20%] w-28 h-28 bg-yellow-400/10 rounded-full blur-2xl"/><div className="absolute bottom-[20%] left-[40%] text-[40px] select-none opacity-10">😂</div></>,
    episodes:[{n:1,title:'Open Mic Night',dur:28},{n:2,title:'Going Viral',dur:30},{n:3,title:'Cancel Culture',dur:27},{n:4,title:'The Roast',dur:31},{n:5,title:'Sold Out',dur:29},{n:6,title:'Writer\'s Block',dur:26},{n:7,title:'The Comeback',dur:32},{n:8,title:'Netflix Special',dur:30},{n:9,title:'Heckler',dur:28},{n:10,title:'Encore',dur:33},{n:11,title:'Final Set',dur:29},{n:12,title:'Standing Ovation',dur:35}] },
  { id:8, title:'Abyssal Fear', cat:'horror', yr:2024, rate:8.2, dur:109, ep:0, desc:'A deep-sea research team awakens something ancient — and very hungry.', isNew:false,
    grad:'bg-gradient-to-br from-red-900 via-red-950 to-black', accent:'bg-red-500', glow:'shadow-red-600/30',
    shapes:<><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.6)_100%)]"/><div className="absolute top-[40%] left-[45%] w-20 h-32 bg-red-500/10 blur-2xl rounded-full"/></> },
  { id:9, title:'Velocity X', cat:'action', yr:2025, rate:8.6, dur:131, ep:0, desc:'An underground street racer gets pulled into a high-stakes international heist.', isNew:false,
    grad:'bg-gradient-to-br from-orange-600 via-red-900 to-black', accent:'bg-orange-500', glow:'shadow-orange-500/30',
    shapes:<><div className="absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"/><div className="absolute top-[45%] left-[60%] w-8 h-8 bg-orange-500/20 blur-lg rounded-full"/></> },
  { id:10, title:'Parallel Lives', cat:'drama', yr:2025, rate:9.0, dur:0, ep:6, desc:'Two strangers on opposite sides of the world realize they are living the same dream.', isNew:true,
    grad:'bg-gradient-to-br from-fuchsia-700 via-purple-950 to-black', accent:'bg-fuchsia-400', glow:'shadow-fuchsia-500/30',
    shapes:<><div className="absolute top-[20%] left-[25%] w-24 h-24 rounded-full border border-fuchsia-400/20 border-dashed"/><div className="absolute top-[22%] right-[25%] w-24 h-24 rounded-full border border-purple-400/20 border-dashed"/><div className="absolute top-[35%] left-[47%] w-2 h-2 bg-fuchsia-400/60 rounded-full shadow-lg shadow-fuchsia-400/50"/></>,
    episodes:[{n:1,title:'Mirror',dur:54},{n:2,title:'Déjà Vu',dur:52},{n:3,title:'Convergence',dur:58},{n:4,title:'The Thread',dur:50},{n:5,title:'Fracture',dur:55},{n:6,title:'One Life',dur:63}] },
];

const CardArt = ({item, className='', children}:{item:CatItem, className?:string, children?:ReactNode}) => (
  <div className={`${item.grad} relative overflow-hidden ${className}`}>{item.shapes}{children}</div>
);

/* ── Component ────────────────────────────────────────────── */
export default function HyperStream() {
  const { i18n } = useTranslation();
  const t = txt[i18n.language.split('-')[0]] || txt.en;

  const [nav, setNav] = useState('home');
  const [filter, setFilter] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const [saved, setSaved] = useState<number[]>([]);
  const [picked, setPicked] = useState<CatItem|null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [chatOn, setChatOn] = useState(false);
  const [chatMsg, setChatMsg] = useState('');
  const [msgs, setMsgs] = useState([{u:'Alex',m:'🔥🔥🔥',t:'2m'},{u:'Mia',m:'Best scene!',t:'1m'},{u:'Tom',m:'No spoilers!',t:'30s'}]);
  const [viewers, setViewers] = useState(1847);
  const [liked, setLiked] = useState<number[]>([]);
  const [watched] = useState<Record<number,number>>({1:67,3:23,8:45});
  const chatEl = useRef<HTMLDivElement>(null);

  const cats = ['all','action','scifi','drama','comedy','thriller','horror'];
  const catL:Record<string,string> = {all:t.all,action:t.action,scifi:t.scifi,drama:t.drama,comedy:t.comedy,thriller:t.thriller,horror:t.horror};
  const list = catalog.filter(m => nav==='myList'?saved.includes(m.id):nav==='movies'?m.dur>0:nav==='series'?m.ep>0:true).filter(m => filter==='all'||m.cat===filter).filter(m => !searchQ||m.title.toLowerCase().includes(searchQ.toLowerCase()));

  useEffect(()=>{if(!playing)return;const iv=setInterval(()=>setProgress(p=>p>=100?0:p+.12),100);return()=>clearInterval(iv)},[playing]);
  useEffect(()=>{const iv=setInterval(()=>setViewers(v=>Math.max(1500,v+Math.floor((Math.random()-.45)*8))),2500);return()=>clearInterval(iv)},[]);
  useEffect(()=>{if(!playing)return;const au=['Amazing! 😮','Love this','So intense!','😂😂','Wow','🔥','Best ever','❤️'];const nm=['Léa','Jake','Yuki','Sara','Omar','Nina'];const iv=setInterval(()=>setMsgs(p=>[...p.slice(-10),{u:nm[Math.floor(Math.random()*nm.length)],m:au[Math.floor(Math.random()*au.length)],t:'now'}]),3200);return()=>clearInterval(iv)},[playing]);
  useEffect(()=>{chatEl.current?.scrollTo(0,chatEl.current.scrollHeight)},[msgs]);

  const toggle=(id:number)=>setSaved(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const togLike=(id:number)=>setLiked(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const send=()=>{if(!chatMsg.trim())return;setMsgs(p=>[...p,{u:'You',m:chatMsg,t:'now'}]);setChatMsg('')};
  const navI = [{id:'home',ic:Home,l:t.home},{id:'movies',ic:Film,l:t.movies},{id:'series',ic:Tv,l:t.series},{id:'myList',ic:Bookmark,l:t.myList}];

  return (
    <div className="flex flex-col h-screen bg-[#08080f] text-white font-sans overflow-hidden selection:bg-purple-500/30">
      {/* Header */}
      <header className="h-14 border-b border-white/5 bg-[#08080f]/95 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 z-40 shrink-0">
        <div className="flex items-center gap-5">
          <button onClick={()=>setDrawer(true)} className="md:hidden text-white/50 hover:text-white"><Menu size={20}/></button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center"><Play size={12} fill="white" className="ml-0.5"/></div>
            <span className="font-bold text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide">{t.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navI.map(n=><button key={n.id} onClick={()=>{setNav(n.id);setFilter('all')}} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${nav===n.id?'bg-white/10 text-white':'text-white/40 hover:text-white/70'}`}><n.ic size={14}/> {n.l}</button>)}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <AnimatePresence>{searchOpen && <motion.div initial={{width:0,opacity:0}} animate={{width:200,opacity:1}} exit={{width:0,opacity:0}} className="overflow-hidden"><input autoFocus value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder={t.search} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs outline-none text-white placeholder-white/30"/></motion.div>}</AnimatePresence>
          <button onClick={()=>{setSearchOpen(!searchOpen);if(searchOpen)setSearchQ('')}} className="text-white/40 hover:text-white transition">{searchOpen?<X size={18}/>:<Search size={18}/>}</button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 cursor-pointer"/>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile drawer */}
        <AnimatePresence>{drawer && (<>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/70 z-50 md:hidden" onClick={()=>setDrawer(false)}/>
          <motion.aside initial={{x:'-100%'}} animate={{x:0}} exit={{x:'-100%'}} transition={{type:'tween',duration:.2}} className="fixed top-0 bottom-0 left-0 w-56 bg-[#0c0c16] border-r border-white/5 z-50 md:hidden p-4">
            <div className="flex justify-between items-center mb-6"><span className="font-bold text-sm">{t.brand}</span><button onClick={()=>setDrawer(false)}><X size={18} className="text-white/40"/></button></div>
            {navI.map(n=><button key={n.id} onClick={()=>{setNav(n.id);setFilter('all');setDrawer(false)}} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm mb-1 ${nav===n.id?'bg-purple-500/10 text-purple-400':'text-white/40'}`}><n.ic size={16}/> {n.l}</button>)}
          </motion.aside>
        </>)}</AnimatePresence>

        <main className="flex-1 overflow-y-auto scroll-smooth scrollbar-none">
          {/* ── Fullscreen Player ── */}
          <AnimatePresence>{picked && playing && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-black flex flex-col">
              <CardArt item={picked} className="flex-1 flex items-center justify-center group">
                <div className="text-center select-none"><p className="text-white/10 text-xs font-mono mb-2">HYPERSTREAM™ · 4K HDR</p><h2 className="text-3xl md:text-5xl font-bold text-white/20">{picked.title}</h2></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-6">
                    <button className="text-white/60 hover:text-white"><SkipBack size={24}/></button>
                    <button onClick={()=>setPlaying(false)} className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30"><Pause size={28}/></button>
                    <button className="text-white/60 hover:text-white"><SkipForward size={24}/></button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-1 bg-white/20 rounded-full mb-3 cursor-pointer" onClick={e=>{const r=e.currentTarget.getBoundingClientRect();setProgress((e.clientX-r.left)/r.width*100)}}>
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative" style={{width:`${progress}%`}}><div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"/></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="font-mono">{Math.floor(progress*1.2)}:00 / {picked.dur||45}:00</span>
                    <div className="flex items-center gap-4">
                      <button onClick={()=>setMuted(!muted)}>{muted?<VolumeX size={16}/>:<Volume2 size={16}/>}</button>
                      <button onClick={()=>setChatOn(!chatOn)} className="flex items-center gap-1.5"><MessageCircle size={14}/><span className="hidden sm:inline">{t.chat}</span></button>
                      <button><Maximize size={16}/></button>
                      <button onClick={()=>{setPlaying(false);setPicked(null)}}><X size={16}/></button>
                    </div>
                  </div>
                </div>
              </CardArt>
              <AnimatePresence>{chatOn && (
                <motion.div initial={{height:0}} animate={{height:200}} exit={{height:0}} className="bg-[#0c0c16] border-t border-white/5 overflow-hidden shrink-0 flex flex-col">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 shrink-0">
                    <span className="text-xs font-bold text-white/40 flex items-center gap-2"><Users size={12}/> {t.watchParty} · {viewers.toLocaleString()} {t.viewers}</span>
                    <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"/><span className="text-[10px] text-red-400">{t.live}</span></div>
                  </div>
                  <div ref={chatEl} className="flex-1 overflow-y-auto p-3 space-y-2">
                    {msgs.map((m,i)=><div key={i} className="flex items-start gap-2"><div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center text-[9px] shrink-0 mt-0.5">{m.u[0]}</div><div><span className="text-[10px] font-bold text-purple-300">{m.u}</span><p className="text-[11px] text-white/50">{m.m}</p></div></div>)}
                  </div>
                  <div className="p-2 border-t border-white/5 shrink-0 flex items-center gap-2">
                    <input value={chatMsg} onChange={e=>setChatMsg(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder={t.sendMsg} className="flex-1 bg-white/5 rounded-full px-3 py-1.5 text-xs outline-none text-white placeholder-white/20"/>
                    <button onClick={send} className="text-purple-400 hover:text-purple-300"><Send size={14}/></button>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </motion.div>
          )}</AnimatePresence>

          {/* ── Hero Banner ── */}
          {!picked && (
            <CardArt item={catalog[0]} className="relative h-[50vh] sm:h-[55vh]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-[#08080f]/40 to-transparent"/>
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10">
                <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-2 block">{t.trending} #1</span>
                <h1 className="text-3xl md:text-5xl font-bold mb-3">{catalog[0].title}</h1>
                <div className="flex items-center gap-3 text-xs text-white/50 mb-5">
                  <span className="flex items-center gap-1"><Star size={12} className="text-yellow-400"/> {catalog[0].rate}</span>
                  <span>{catalog[0].yr}</span><span>{catalog[0].dur?`${catalog[0].dur} ${t.min}`:`${catalog[0].ep} ${t.ep}`}</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-white/60">{catL[catalog[0].cat]}</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <button onClick={()=>{setPicked(catalog[0]);setPlaying(true);setProgress(0)}} className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg font-bold text-sm hover:bg-white/90 transition"><Play size={16} fill="black"/> {t.play}</button>
                  <button onClick={()=>setPicked(catalog[0])} className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur rounded-lg text-sm font-medium hover:bg-white/20 transition">{t.info}</button>
                  <button onClick={()=>toggle(catalog[0].id)} className="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition">{saved.includes(catalog[0].id)?<><Check size={14} className="text-emerald-400"/> {t.added}</>:<><Plus size={14}/> {t.addList}</>}</button>
                </div>
              </div>
            </CardArt>
          )}

          {/* ── Netflix-style Detail Panel ── */}
          <AnimatePresence>{picked && !playing && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto scrollbar-none" onClick={()=>setPicked(null)}>
              <motion.div initial={{y:60,opacity:0}} animate={{y:0,opacity:1}} exit={{y:60,opacity:0}} transition={{type:'spring',damping:25}} className="relative max-w-3xl mx-auto mt-8 mb-16 bg-[#181824] rounded-2xl overflow-hidden shadow-2xl" onClick={e=>e.stopPropagation()}>
                {/* Backdrop art */}
                <CardArt item={picked} className="h-[35vh] sm:h-[40vh]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181824] via-[#181824]/60 to-transparent"/>
                  <button onClick={()=>setPicked(null)} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:bg-black/80 transition"><X size={18}/></button>
                  {/* Play button centered */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button onClick={()=>{setPlaying(true);setProgress(0)}} className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-2xl transition hover:scale-110"><Play size={28} fill="black" className="ml-1"/></button>
                  </div>
                </CardArt>

                {/* Info section */}
                <div className="px-6 md:px-10 pb-8 -mt-16 relative z-10">
                  <h2 className="text-2xl md:text-4xl font-bold mb-1">{picked.title}</h2>
                  <div className="flex items-center gap-3 text-sm mb-4 flex-wrap">
                    <span className="text-emerald-400 font-bold">98% {t.matchScore}</span>
                    <span className="text-white/50">{picked.yr}</span>
                    <span className="px-1.5 py-0.5 rounded border border-white/20 text-[10px] text-white/50">{picked.dur?`${picked.dur} ${t.min}`:`${picked.ep} ${t.ep}`}</span>
                    <span className="flex items-center gap-1 text-white/60"><Star size={12} className="text-yellow-400"/> {picked.rate}</span>
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-xs text-white/60">{catL[picked.cat]}</span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    <button onClick={()=>{setPlaying(true);setProgress(0)}} className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-bold text-sm hover:bg-white/90 transition"><Play size={16} fill="black"/> {t.play}</button>
                    <button onClick={()=>toggle(picked.id)} className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition ${saved.includes(picked.id)?'border-emerald-400 text-emerald-400':'border-white/30 text-white/60 hover:border-white'}`}>{saved.includes(picked.id)?<Check size={16}/>:<Plus size={16}/>}</button>
                    <button onClick={()=>togLike(picked.id)} className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition ${liked.includes(picked.id)?'border-red-400 text-red-400':'border-white/30 text-white/60 hover:border-white'}`}><Heart size={16} fill={liked.includes(picked.id)?'currentColor':'none'}/></button>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xl">{picked.desc}</p>

                  {/* ── Episodes list (for series) ── */}
                  {picked.episodes && picked.episodes.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">{t.episodes}</h3>
                        <button className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition"><span>{t.season} 1</span><ChevronDown size={14}/></button>
                      </div>
                      <div className="space-y-2">
                        {picked.episodes.map((ep, idx) => (
                          <motion.div key={ep.n} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:idx*.04}}
                            onClick={()=>{setPlaying(true);setProgress(0)}}
                            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition">
                            {/* Episode number */}
                            <span className="text-lg font-bold text-white/20 w-8 text-center shrink-0">{ep.n}</span>
                            {/* Thumbnail mini */}
                            <CardArt item={picked} className="w-28 h-16 rounded-lg shrink-0">
                              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"/>
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"><Play size={12} fill="black" className="ml-0.5"/></div>
                              </div>
                              {idx > 4 && <div className="absolute inset-0 flex items-center justify-center bg-black/50"><Lock size={14} className="text-white/40"/></div>}
                            </CardArt>
                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-0.5">
                                <h4 className="text-sm font-semibold truncate">{ep.title}</h4>
                                <span className="text-xs text-white/30 shrink-0 ml-2">{ep.dur}{t.min}</span>
                              </div>
                              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: idx===0?'67%':idx===1?'23%':'0%'}}/>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Movie details extras ── */}
                  {!picked.episodes && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {catalog.filter(c=>c.cat===picked.cat&&c.id!==picked.id).slice(0,4).map(s=>(
                        <div key={s.id} onClick={()=>setPicked(s)} className="group cursor-pointer rounded-lg overflow-hidden">
                          <CardArt item={s} className="aspect-video">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"/>
                            <div className="absolute bottom-2 left-2 right-2"><p className="text-[11px] font-bold truncate">{s.title}</p><p className="text-[9px] text-white/40">{s.yr} · {s.rate}★</p></div>
                          </CardArt>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}</AnimatePresence>

          {/* ── Catalog ── */}
          {!playing && !picked && (
            <div className="p-4 md:px-8 space-y-6">
              {/* Continue Watching */}
              {nav==='home'&&filter==='all'&&!searchQ && (
                <section>
                  <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3 flex items-center gap-2"><Clock size={14}/>{t.continueWatching}</h2>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                    {catalog.filter(m=>watched[m.id]).map(item=>(
                      <div key={item.id} onClick={()=>{setPicked(item);setPlaying(true);setProgress(watched[item.id]||0)}} className="shrink-0 w-52 md:w-64 cursor-pointer group">
                        <CardArt item={item} className="aspect-video rounded-lg"><div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"/><div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"><div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg"><Play size={16} fill="black" className="ml-0.5"/></div></div><div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"><div className="h-full bg-gradient-to-r from-red-500 to-red-400" style={{width:`${watched[item.id]}%`}}/></div></CardArt>
                        <p className="text-xs font-medium text-white/70 mt-1.5 truncate">{item.title}</p>
                        <p className="text-[10px] text-white/30">{t.resume} · {Math.floor((watched[item.id]||0)*1.2)}min</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {cats.map(c=><button key={c} onClick={()=>setFilter(c)} className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${filter===c?'bg-purple-600 text-white':'bg-white/5 text-white/40 hover:bg-white/10'}`}>{catL[c]}</button>)}
              </div>

              {/* Top 10 */}
              {nav==='home'&&filter==='all'&&!searchQ && (
                <section>
                  <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">{t.top10} {t.trending}</h2>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {catalog.slice(0,10).map((item,idx)=>(
                      <div key={item.id} onClick={()=>setPicked(item)} className="shrink-0 relative cursor-pointer group flex items-end">
                        <span className="text-[80px] md:text-[100px] font-black leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,.15)] select-none mr-[-12px] z-10 relative">{idx+1}</span>
                        <CardArt item={item} className={`w-28 md:w-32 aspect-[2/3] rounded-xl shadow-md ${item.glow} group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                          {item.isNew && <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-red-600 text-[8px] font-bold uppercase z-10">{t.newEp}</div>}
                          <div className="absolute bottom-2 left-2 right-2 z-10"><p className="text-[10px] font-bold text-white/80 truncate">{item.title}</p></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        </CardArt>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {list.map((item,idx)=>(
                  <motion.div key={item.id} layout initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:idx*.04}} className="group cursor-pointer relative" onClick={()=>setPicked(item)}>
                    <div className={`relative aspect-[2/3] rounded-xl overflow-hidden shadow-md ${item.glow} group-hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.04]`}>
                      <CardArt item={item} className="absolute inset-0"/>
                      {/* Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-[1]"/>
                      {/* Badges */}
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm flex items-center gap-1 text-[10px] z-10"><Star size={9} className="text-yellow-400" fill="currentColor"/><span className="text-white font-bold">{item.rate}</span></div>
                      {item.isNew && <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-red-600 text-[8px] font-bold uppercase z-10 animate-pulse">{t.newEp}</div>}
                      {saved.includes(item.id)&&!item.isNew && <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center z-10"><Check size={9}/></div>}
                      {/* Series badge */}
                      {item.ep > 0 && <div className="absolute top-9 left-2 px-1.5 py-0.5 rounded bg-purple-600/80 backdrop-blur-sm text-[9px] font-bold z-10">{item.ep} {t.ep}</div>}
                      {/* Title always visible */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                        <h3 className="text-sm font-bold text-white drop-shadow-lg leading-tight">{item.title}</h3>
                        <p className="text-[10px] text-white/50 mt-0.5">{item.yr} · {catL[item.cat]}</p>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 z-20">
                        <p className="text-[10px] text-white/80 line-clamp-3 mb-3 leading-relaxed">{item.desc}</p>
                        <div className="flex items-center gap-1.5">
                          <button onClick={e=>{e.stopPropagation();setPicked(item);setPlaying(true);setProgress(0)}} className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-white text-black rounded-md text-[10px] font-bold hover:bg-white/90 transition"><Play size={10} fill="black"/>{t.play}</button>
                          <button onClick={e=>{e.stopPropagation();toggle(item.id)}} className="w-7 h-7 rounded-md bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition">{saved.includes(item.id)?<Check size={12} className="text-emerald-400"/>:<Plus size={12}/>}</button>
                          <button onClick={e=>{e.stopPropagation();togLike(item.id)}} className="w-7 h-7 rounded-md bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition"><Heart size={12} className={liked.includes(item.id)?'text-red-400 fill-red-400':''}/></button>
                        </div>
                      </div>
                      {/* Continue bar */}
                      {watched[item.id] && <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30"><div className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-r-full" style={{width:`${watched[item.id]}%`}}/></div>}
                    </div>
                  </motion.div>
                ))}
              </div>
              {list.length===0 && <div className="text-center py-20 text-white/20 text-sm">{t.noResult}</div>}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
