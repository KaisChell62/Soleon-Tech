import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Shield, AlertTriangle, Globe, Activity, Lock, Eye, Server,
  Bell, Search, Menu, X, ShieldCheck, Zap, ChevronRight, RefreshCw,
  Ban, CheckCircle2, Filter, ArrowUpRight, ArrowDownRight, Wifi
} from 'lucide-react';

/* ── Translations ────────────────────────────────────────── */
const txt: Record<string, Record<string, string>> = {
  fr: { brand:'CyberGuard', sub:'Centre de Sécurité', threats:'Menaces bloquées', active:'Menaces actives', uptime:'Disponibilité', latency:'Latence moy.', overview:'Vue d\'ensemble', incidents:'Incidents', network:'Réseau', threatMap:'Activité réseau', live:'En direct', alerts:'Alertes récentes', search:'Rechercher...', endpoints:'Endpoints', firewalls:'Règles actives', bandwidth:'Bande passante', investigating:'En cours', mitigated:'Résolue', detected:'Détectée', viewAll:'Voir tout', trafficIn:'Trafic entrant', trafficOut:'Trafic sortant', ok:'Opérationnel', warn:'Charge élevée', off:'Maintenance', block:'Bloquer IP', dismiss:'Ignorer', detail:'Détails', scan:'Scanner', scanning:'Scan en cours...', scanDone:'Scan terminé', filterAll:'Toutes', filterCrit:'Critiques', filterHigh:'Hautes', filterMed:'Moyennes', filterLow:'Basses', blocked:'Bloquée', src:'Source', severity:'Sévérité', actions:'Actions', close:'Fermer', noAlert:'Aucune alerte' },
  en: { brand:'CyberGuard', sub:'Security Center', threats:'Threats blocked', active:'Active threats', uptime:'Uptime', latency:'Avg. Latency', overview:'Overview', incidents:'Incidents', network:'Network', threatMap:'Network Activity', live:'Live', alerts:'Recent Alerts', search:'Search...', endpoints:'Endpoints', firewalls:'Active rules', bandwidth:'Bandwidth', investigating:'Investigating', mitigated:'Mitigated', detected:'Detected', viewAll:'View all', trafficIn:'Inbound traffic', trafficOut:'Outbound traffic', ok:'Operational', warn:'High Load', off:'Maintenance', block:'Block IP', dismiss:'Dismiss', detail:'Details', scan:'Scan', scanning:'Scanning...', scanDone:'Scan complete', filterAll:'All', filterCrit:'Critical', filterHigh:'High', filterMed:'Medium', filterLow:'Low', blocked:'Blocked', src:'Source', severity:'Severity', actions:'Actions', close:'Close', noAlert:'No alerts' },
  es: { brand:'CyberGuard', sub:'Centro de Seguridad', threats:'Amenazas bloqueadas', active:'Amenazas activas', uptime:'Disponibilidad', latency:'Latencia prom.', overview:'Resumen', incidents:'Incidentes', network:'Red', threatMap:'Actividad de red', live:'En vivo', alerts:'Alertas recientes', search:'Buscar...', endpoints:'Endpoints', firewalls:'Reglas activas', bandwidth:'Ancho de banda', investigating:'Investigando', mitigated:'Mitigada', detected:'Detectada', viewAll:'Ver todo', trafficIn:'Tráfico entrante', trafficOut:'Tráfico saliente', ok:'Operativo', warn:'Carga alta', off:'Mantenimiento', block:'Bloquear IP', dismiss:'Descartar', detail:'Detalles', scan:'Escanear', scanning:'Escaneando...', scanDone:'Escaneo completo', filterAll:'Todas', filterCrit:'Críticas', filterHigh:'Altas', filterMed:'Medias', filterLow:'Bajas', blocked:'Bloqueada', src:'Origen', severity:'Severidad', actions:'Acciones', close:'Cerrar', noAlert:'Sin alertas' },
  de: { brand:'CyberGuard', sub:'Sicherheitszentrum', threats:'Blockierte Bedrohungen', active:'Aktive Bedrohungen', uptime:'Verfügbarkeit', latency:'Ø Latenz', overview:'Übersicht', incidents:'Vorfälle', network:'Netzwerk', threatMap:'Netzwerkaktivität', live:'Live', alerts:'Aktuelle Warnungen', search:'Suchen...', endpoints:'Endpoints', firewalls:'Aktive Regeln', bandwidth:'Bandbreite', investigating:'Wird untersucht', mitigated:'Entschärft', detected:'Erkannt', viewAll:'Alle anzeigen', trafficIn:'Eingehend', trafficOut:'Ausgehend', ok:'Betriebsbereit', warn:'Hohe Last', off:'Wartung', block:'IP blockieren', dismiss:'Verwerfen', detail:'Details', scan:'Scannen', scanning:'Scannt...', scanDone:'Scan abgeschlossen', filterAll:'Alle', filterCrit:'Kritisch', filterHigh:'Hoch', filterMed:'Mittel', filterLow:'Niedrig', blocked:'Blockiert', src:'Quelle', severity:'Schweregrad', actions:'Aktionen', close:'Schließen', noAlert:'Keine Warnungen' },
  zh: { brand:'CyberGuard', sub:'安全中心', threats:'已拦截威胁', active:'活跃威胁', uptime:'运行时间', latency:'平均延迟', overview:'概览', incidents:'事件', network:'网络', threatMap:'网络活动', live:'实时', alerts:'最近告警', search:'搜索...', endpoints:'终端', firewalls:'活跃规则', bandwidth:'带宽', investigating:'调查中', mitigated:'已缓解', detected:'已检测', viewAll:'查看全部', trafficIn:'入站流量', trafficOut:'出站流量', ok:'运行正常', warn:'高负载', off:'维护中', block:'封锁IP', dismiss:'忽略', detail:'详情', scan:'扫描', scanning:'扫描中...', scanDone:'扫描完成', filterAll:'全部', filterCrit:'严重', filterHigh:'高', filterMed:'中', filterLow:'低', blocked:'已封锁', src:'来源', severity:'严重性', actions:'操作', close:'关闭', noAlert:'无告警' },
  ar: { brand:'CyberGuard', sub:'مركز الأمان', threats:'تهديدات محظورة', active:'تهديدات نشطة', uptime:'وقت التشغيل', latency:'متوسط الاستجابة', overview:'نظرة عامة', incidents:'الحوادث', network:'الشبكة', threatMap:'نشاط الشبكة', live:'مباشر', alerts:'تنبيهات حديثة', search:'بحث...', endpoints:'نقاط نهاية', firewalls:'قواعد نشطة', bandwidth:'عرض النطاق', investigating:'قيد التحقيق', mitigated:'مخففة', detected:'مكتشفة', viewAll:'عرض الكل', trafficIn:'حركة واردة', trafficOut:'حركة صادرة', ok:'يعمل', warn:'حمل عالٍ', off:'صيانة', block:'حظر IP', dismiss:'تجاهل', detail:'تفاصيل', scan:'فحص', scanning:'جاري الفحص...', scanDone:'اكتمل الفحص', filterAll:'الكل', filterCrit:'حرجة', filterHigh:'عالية', filterMed:'متوسطة', filterLow:'منخفضة', blocked:'محظورة', src:'المصدر', severity:'الخطورة', actions:'إجراءات', close:'إغلاق', noAlert:'لا تنبيهات' },
  pt: { brand:'CyberGuard', sub:'Centro de Segurança', threats:'Ameaças bloqueadas', active:'Ameaças ativas', uptime:'Disponibilidade', latency:'Latência média', overview:'Visão geral', incidents:'Incidentes', network:'Rede', threatMap:'Atividade de rede', live:'Ao vivo', alerts:'Alertas recentes', search:'Buscar...', endpoints:'Endpoints', firewalls:'Regras ativas', bandwidth:'Largura de banda', investigating:'Investigando', mitigated:'Mitigada', detected:'Detectada', viewAll:'Ver tudo', trafficIn:'Tráfego entrada', trafficOut:'Tráfego saída', ok:'Operacional', warn:'Carga alta', off:'Manutenção', block:'Bloquear IP', dismiss:'Dispensar', detail:'Detalhes', scan:'Escanear', scanning:'Escaneando...', scanDone:'Escaneamento completo', filterAll:'Todas', filterCrit:'Críticas', filterHigh:'Altas', filterMed:'Médias', filterLow:'Baixas', blocked:'Bloqueada', src:'Origem', severity:'Severidade', actions:'Ações', close:'Fechar', noAlert:'Sem alertas' },
  ru: { brand:'CyberGuard', sub:'Центр безопасности', threats:'Заблокировано угроз', active:'Активные угрозы', uptime:'Аптайм', latency:'Ср. задержка', overview:'Обзор', incidents:'Инциденты', network:'Сеть', threatMap:'Сетевая активность', live:'В реальном времени', alerts:'Последние оповещения', search:'Поиск...', endpoints:'Устройства', firewalls:'Активные правила', bandwidth:'Пропускная способность', investigating:'Расследуется', mitigated:'Нейтрализована', detected:'Обнаружена', viewAll:'Показать все', trafficIn:'Входящий трафик', trafficOut:'Исходящий трафик', ok:'Работает', warn:'Высокая нагрузка', off:'Обслуживание', block:'Заблокировать IP', dismiss:'Отклонить', detail:'Детали', scan:'Сканировать', scanning:'Сканирование...', scanDone:'Сканирование завершено', filterAll:'Все', filterCrit:'Критические', filterHigh:'Высокие', filterMed:'Средние', filterLow:'Низкие', blocked:'Заблокирована', src:'Источник', severity:'Серьёзность', actions:'Действия', close:'Закрыть', noAlert:'Нет оповещений' },
};

/* ── Bar Chart ───────────────────────────────────────────── */
function Bars({ data, color }: { data: number[]; color: string }) {
  return (
    <div className="flex items-end gap-[3px] h-full w-full">
      {data.map((v, i) => (
        <motion.div key={i} className="flex-1 rounded-t-sm min-w-[3px]" style={{ backgroundColor: color, opacity: .6 + (i / data.length) * .4 }}
          initial={{ height:0 }} animate={{ height:`${v}%` }} transition={{ duration:.4, ease:'easeOut' }} />
      ))}
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────── */
export default function CyberGuard() {
  const { i18n } = useTranslation();
  const t = txt[i18n.language.split('-')[0]] || txt.en;

  const [tab, setTab] = useState('overview');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [blocked, setBlocked] = useState(128473);
  const [activeT, setActiveT] = useState(7);
  const [tIn, setTIn] = useState(() => Array.from({ length: 24 }, () => Math.random() * 60 + 20));
  const [tOut, setTOut] = useState(() => Array.from({ length: 24 }, () => Math.random() * 40 + 15));
  const [sevFilter, setSevFilter] = useState('all');
  const [selectedAlert, setSelectedAlert] = useState<number | null>(null);
  const [blockedIPs, setBlockedIPs] = useState<string[]>([]);
  const [scanning, setScanning] = useState(false);
  const [scanDone, setScanDone] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setBlocked(v => v + Math.floor(Math.random() * 8) + 1);
      setActiveT(v => Math.max(0, Math.min(20, v + (Math.random() > .6 ? 1 : -1))));
      setTIn(p => [...p.slice(1), Math.random() * 60 + 20]);
      setTOut(p => [...p.slice(1), Math.random() * 40 + 15]);
    }, 2000);
    return () => clearInterval(iv);
  }, []);

  const doScan = () => { setScanning(true); setScanDone(false); setTimeout(() => { setScanning(false); setScanDone(true); setBlocked(v => v + Math.floor(Math.random() * 50) + 20); setTimeout(() => setScanDone(false), 3000); }, 2500); };

  const alerts = [
    { id:0, type:'DDoS Attack', sev:'critical' as const, src:'185.220.101.xx', status:t.investigating, time:'2m', detail:'Volumetric DDoS · 4.2 Gbps · TCP SYN flood' },
    { id:1, type:'SQL Injection', sev:'high' as const, src:'45.155.205.xx', status:t.mitigated, time:'8m', detail:'UNION-based injection on /api/users endpoint' },
    { id:2, type:'Brute Force', sev:'high' as const, src:'91.240.118.xx', status:t.mitigated, time:'15m', detail:'2,847 failed SSH login attempts in 5min' },
    { id:3, type:'XSS Attempt', sev:'medium' as const, src:'103.75.190.xx', status:t.detected, time:'22m', detail:'Reflected XSS via search parameter' },
    { id:4, type:'Port Scan', sev:'low' as const, src:'194.26.29.xx', status:t.mitigated, time:'41m', detail:'Sequential scan on ports 1-1024' },
  ];

  const sevOrder = { critical:0, high:1, medium:2, low:3 };
  const filteredAlerts = alerts.filter(a => sevFilter === 'all' || a.sev === sevFilter);
  const sevColors: Record<string,string> = { critical:'bg-red-500/10 text-red-400 border-red-500/20', high:'bg-orange-500/10 text-orange-400 border-orange-500/20', medium:'bg-amber-500/10 text-amber-400 border-amber-500/20', low:'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' };
  const sevFilters = [{ k:'all', l:t.filterAll }, { k:'critical', l:t.filterCrit }, { k:'high', l:t.filterHigh }, { k:'medium', l:t.filterMed }, { k:'low', l:t.filterLow }];

  const servers = [
    { name:'US-East-1', load:42, s:'ok' as const }, { name:'EU-West-2', load:67, s:'ok' as const },
    { name:'AP-South-1', load:89, s:'warn' as const }, { name:'SA-East-1', load:0, s:'off' as const },
  ];

  const navItems = [
    { id:'overview', icon:Eye, label:t.overview },
    { id:'incidents', icon:AlertTriangle, label:t.incidents },
    { id:'network', icon:Globe, label:t.network },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-300 font-sans overflow-hidden selection:bg-indigo-500/30">
      {/* Header */}
      <header className="h-14 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileMenu(true)} className="md:hidden text-slate-400 hover:text-white transition"><Menu size={20} /></button>
          <Shield size={20} className="text-indigo-400" />
          <span className="font-bold tracking-tight text-white">{t.brand}</span>
          <span className="text-slate-600 text-sm hidden sm:inline">/ {t.sub}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-slate-900/60 border border-slate-800/60 rounded-lg px-3 py-1.5">
            <Search size={14} className="text-slate-600" />
            <input className="bg-transparent text-sm text-slate-400 outline-none w-32 placeholder:text-slate-700" placeholder={t.search} />
          </div>
          {/* Scan button */}
          <button onClick={doScan} disabled={scanning} className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${scanning ? 'bg-indigo-500/20 text-indigo-400' : scanDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}`}>
            {scanning ? <><RefreshCw size={12} className="animate-spin" /> {t.scanning}</> : scanDone ? <><CheckCircle2 size={12} /> {t.scanDone}</> : <><RefreshCw size={12} /> {t.scan}</>}
          </button>
          <div className="relative cursor-pointer">
            <Bell size={18} className="text-slate-500 hover:text-white transition" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className="hidden md:flex w-52 border-r border-slate-800/50 bg-slate-950 flex-col py-5">
          <nav className="px-3 space-y-1">
            {navItems.map(n => (
              <button key={n.id} onClick={() => setTab(n.id)} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${tab === n.id ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-500 hover:bg-white/5 hover:text-slate-300'}`}>
                <n.icon size={16} /> {n.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto mx-4 space-y-3 border-t border-slate-800/50 pt-5">
            {[{ l:t.endpoints, v:'2,847', ic:Server }, { l:t.firewalls, v:'1,204', ic:Lock }, { l:t.bandwidth, v:'4.2 Gbps', ic:Zap }].map(s => (
              <div key={s.l} className="flex items-center gap-3 text-xs">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800/50 flex items-center justify-center"><s.ic size={12} className="text-slate-600" /></div>
                <div><div className="text-slate-600">{s.l}</div><div className="text-slate-300 font-semibold">{s.v}</div></div>
              </div>
            ))}
          </div>
        </aside>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenu && (
            <>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden" onClick={() => setMobileMenu(false)} />
              <motion.div initial={{ x:'-100%' }} animate={{ x:0 }} exit={{ x:'-100%' }} transition={{ type:'tween', duration:.2 }} className="fixed top-0 bottom-0 left-0 w-60 bg-slate-950 border-r border-slate-800 z-50 md:hidden">
                <div className="h-14 flex items-center justify-between px-4 border-b border-slate-800">
                  <span className="text-white font-bold">{t.brand}</span>
                  <button onClick={() => setMobileMenu(false)}><X size={18} className="text-slate-500" /></button>
                </div>
                <div className="p-3 space-y-1">
                  {navItems.map(n => (
                    <button key={n.id} onClick={() => { setTab(n.id); setMobileMenu(false); }} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm ${tab === n.id ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-500'}`}>
                      <n.icon size={16} /> {n.label}
                    </button>
                  ))}
                </div>
                <div className="p-4">
                  <button onClick={() => { doScan(); setMobileMenu(false); }} className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 rounded-xl text-xs text-slate-300">
                    <RefreshCw size={12} /> {t.scan}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Dashboard */}
        <main className="flex-1 p-4 md:p-5 overflow-y-auto space-y-5 scroll-smooth">
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { l:t.threats, v:blocked.toLocaleString(), ic:ShieldCheck, c:'text-emerald-400', a:'from-emerald-500/10 to-emerald-500/5', trend:'+12%', up:true },
              { l:t.active, v:activeT.toString(), ic:Activity, c:'text-amber-400', a:'from-amber-500/10 to-amber-500/5', trend:activeT > 5 ? '+' + activeT : '-3', up:activeT > 5 },
              { l:t.uptime, v:'99.97%', ic:Zap, c:'text-indigo-400', a:'from-indigo-500/10 to-indigo-500/5', trend:'+0.02%', up:true },
              { l:t.latency, v:'42ms', ic:Globe, c:'text-purple-400', a:'from-purple-500/10 to-purple-500/5', trend:'-8ms', up:false },
            ].map(s => (
              <div key={s.l} className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-4 hover:border-slate-700/50 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.a} flex items-center justify-center`}><s.ic size={18} className={s.c} /></div>
                  <span className={`text-[10px] font-medium flex items-center gap-0.5 ${s.up ? 'text-emerald-400' : 'text-indigo-400'}`}>
                    {s.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />} {s.trend}
                  </span>
                </div>
                <div className="text-xl font-bold text-white mb-0.5">{s.v}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Traffic */}
            <div className="lg:col-span-3 bg-slate-900/50 border border-slate-800/50 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-white text-sm flex items-center gap-2"><Activity size={16} className="text-indigo-400" /> {t.threatMap}</h3>
                <div className="flex items-center gap-2 text-xs"><div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" /><span className="text-indigo-400 font-medium">{t.live}</span></div>
              </div>
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5"><span>{t.trafficIn}</span><span className="text-emerald-400 font-medium">2.8 Gbps</span></div>
                <div className="h-20 bg-slate-950/50 rounded-xl p-2"><Bars data={tIn} color="rgb(99 102 241)" /></div>
              </div>
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5"><span>{t.trafficOut}</span><span className="text-slate-400 font-medium">1.4 Gbps</span></div>
                <div className="h-16 bg-slate-950/50 rounded-xl p-2"><Bars data={tOut} color="rgb(168 85 247)" /></div>
              </div>
              {/* Servers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {servers.map(s => (
                  <div key={s.name} className="bg-slate-950/50 border border-slate-800/40 rounded-xl p-2.5 hover:border-slate-700/50 transition cursor-pointer">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-medium text-white">{s.name}</span>
                      <div className={`w-2 h-2 rounded-full ${s.s === 'ok' ? 'bg-emerald-500 shadow-[0_0_6px] shadow-emerald-500/50' : s.s === 'warn' ? 'bg-amber-500 shadow-[0_0_6px] shadow-amber-500/50' : 'bg-slate-600'}`} />
                    </div>
                    <div className="text-[9px] text-slate-600 mb-1">{s.s === 'ok' ? t.ok : s.s === 'warn' ? t.warn : t.off}</div>
                    {s.s !== 'off' && (
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div className={`h-full rounded-full ${s.s === 'warn' ? 'bg-amber-500' : 'bg-indigo-500'}`} initial={{ width:0 }} animate={{ width:`${s.load}%` }} transition={{ duration:1 }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800/50 rounded-2xl p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-sm flex items-center gap-2"><Bell size={16} className="text-indigo-400" /> {t.alerts}</h3>
              </div>
              {/* Severity filter */}
              <div className="flex items-center gap-1.5 mb-4 overflow-x-auto scrollbar-none">
                {sevFilters.map(f => (
                  <button key={f.k} onClick={() => setSevFilter(f.k)} className={`px-2.5 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap transition ${sevFilter === f.k ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800/50 text-slate-500 hover:text-slate-300'}`}>{f.l}</button>
                ))}
              </div>
              {/* Alert list */}
              <div className="space-y-2 flex-1 overflow-y-auto">
                {filteredAlerts.length === 0 && <p className="text-center text-slate-600 text-xs py-8">{t.noAlert}</p>}
                {filteredAlerts.map(a => (
                  <motion.div key={a.id} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ delay:a.id * .04 }}
                    onClick={() => setSelectedAlert(selectedAlert === a.id ? null : a.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedAlert === a.id ? 'bg-slate-800/60 border-indigo-500/30' : 'bg-slate-950/50 border-slate-800/40 hover:border-slate-700/50'}`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${sevColors[a.sev]}`}><AlertTriangle size={14} /></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium text-white truncate">{a.type}</span>
                          <span className="text-[9px] text-slate-600 shrink-0">{a.time}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 mt-0.5">
                          <span className="text-[10px] text-slate-600 truncate">{a.src}</span>
                          <span className={`text-[9px] font-medium ${a.status === t.investigating ? 'text-amber-400' : a.status === t.mitigated ? 'text-emerald-400' : 'text-indigo-400'}`}>{a.status}</span>
                        </div>
                      </div>
                    </div>
                    {/* Expanded detail */}
                    <AnimatePresence>
                      {selectedAlert === a.id && (
                        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
                          <div className="mt-3 pt-3 border-t border-slate-800/50 space-y-2">
                            <p className="text-[11px] text-slate-400">{a.detail}</p>
                            <div className="flex items-center gap-2">
                              {!blockedIPs.includes(a.src) ? (
                                <button onClick={e => { e.stopPropagation(); setBlockedIPs(p => [...p, a.src]); }} className="flex items-center gap-1 px-2.5 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg text-[10px] font-medium hover:bg-red-500/20 transition">
                                  <Ban size={10} /> {t.block}
                                </button>
                              ) : (
                                <span className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-[10px] font-medium"><CheckCircle2 size={10} /> {t.blocked}</span>
                              )}
                              <button onClick={e => e.stopPropagation()} className="flex items-center gap-1 px-2.5 py-1 bg-slate-800 text-slate-400 rounded-lg text-[10px] font-medium hover:bg-slate-700 transition">{t.dismiss}</button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
