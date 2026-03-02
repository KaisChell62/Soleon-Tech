import { motion } from 'framer-motion';
import { 
  LayoutDashboard, ShoppingBag, BarChart3, Truck, 
  Settings, Bell, Search, User, MoreVertical,
  TrendingUp, ArrowUpRight, ArrowDownRight, Package, Users
} from 'lucide-react';

export type WireframeType = 'dashboard' | 'marketplace' | 'analytics' | 'logistics';

interface WireframeProps {
  type: WireframeType;
}

export default function WireframeSchematic({ type }: WireframeProps) {
  // Enhanced "Real Product" Theme
  const theme = {
    bg: 'bg-slate-50', // Cool grey
    sidebar: 'bg-slate-900', // Deep slate
    sidebarItem: 'text-slate-400 hover:text-white',
    sidebarActive: 'bg-emerald-600 text-white', 
    header: 'bg-white border-b border-slate-200',
    card: 'bg-white shadow-sm border border-slate-100',
    primary: 'text-emerald-600',
    primaryBg: 'bg-emerald-500', 
    secondaryBg: 'bg-emerald-50',
    textMain: 'text-slate-800',
    textMuted: 'text-slate-500',
    textLight: 'text-slate-400'
  };

  const Sidebar = () => (
    <div className={`w-14 md:w-16 h-full flex flex-col items-center py-4 md:py-6 ${theme.sidebar} shrink-0 z-20 transition-all`}>
      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl ${theme.primaryBg} mb-6 md:mb-10 flex items-center justify-center shadow-lg shadow-emerald-900/50`}>
        <Package className="text-white" size={18} />
      </div>
      <div className="flex flex-col gap-4 md:gap-6 w-full items-center">
        <button className={`p-2 md:p-3 rounded-lg transition-all ${type === 'dashboard' ? theme.sidebarActive : theme.sidebarItem}`}>
          <LayoutDashboard size={18} />
        </button>
        <button className={`p-2 md:p-3 rounded-lg transition-all ${type === 'marketplace' ? theme.sidebarActive : theme.sidebarItem}`}>
          <ShoppingBag size={18} />
        </button>
        <button className={`p-2 md:p-3 rounded-lg transition-all ${type === 'analytics' ? theme.sidebarActive : theme.sidebarItem}`}>
          <BarChart3 size={18} />
        </button>
        <button className={`p-2 md:p-3 rounded-lg transition-all ${type === 'logistics' ? theme.sidebarActive : theme.sidebarItem}`}>
          <Truck size={18} />
        </button>
      </div>
      <div className={`mt-auto mb-4 ${theme.sidebarItem}`}>
        <Settings size={18} />
      </div>
    </div>
  );

  const TopBar = () => (
    <div className={`h-14 md:h-16 flex items-center px-4 md:px-8 justify-between ${theme.header} z-10 transition-all`}>
      <div className="flex gap-3 md:gap-4 items-center">
         <h2 className="text-base md:text-lg font-bold text-slate-800 capitalize tracking-tight">{type} Overview</h2>
         <div className="hidden sm:flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-slate-100 rounded-md text-slate-500 text-[10px] md:text-xs font-medium">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live System
         </div>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
         <div className="relative">
            <Bell size={18} className="text-slate-400" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
         </div>
         <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-500">
            <User size={16} />
         </div>
      </div>
    </div>
  );

  const WireContent = () => {
    switch (type) {
      case 'dashboard':
        return (
          <div className="p-4 md:p-8 pt-4 md:pt-6 h-full flex flex-col gap-4 md:gap-6 overflow-y-auto">
            
            {/* KPI Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
               {[
                 { label: 'Total Waste (Tn)', val: '1,240', sub: '+12%', color: 'text-emerald-500' },
                 { label: 'Revenue ($)', val: '45.2k', sub: '+8%', color: 'text-emerald-500' },
                 { label: 'Pending Orders', val: '14', sub: '-2', color: 'text-orange-500' },
                 { label: 'Carbon Saved', val: '850t', sub: '+15%', color: 'text-emerald-500' }
               ].map((stat, i) => (
                 <div key={i} className={`bg-white rounded-xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow`}>
                    <div className="flex justify-between items-start mb-2 md:mb-4">
                       <span className="text-slate-500 text-[10px] md:text-xs font-semibold uppercase tracking-wider truncate mr-1">{stat.label}</span>
                       <TrendingUp className={stat.color} size={14} />
                    </div>
                    <div>
                       <div className="text-xl md:text-2xl font-bold text-slate-800">{stat.val}</div>
                       <div className={`text-[10px] md:text-xs font-medium ${stat.color} mt-1 flex items-center gap-1`}>
                          {stat.sub.includes('+') ? <ArrowUpRight size={10}/> : <ArrowDownRight size={10}/>} 
                          {stat.sub} vs last month
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 flex-1 min-h-0">
               {/* Main Chart */}
               <div className={`col-span-1 lg:col-span-2 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100 flex flex-col min-h-[200px]`}>
                  <div className="flex justify-between items-center mb-4 md:mb-8">
                     <h3 className="font-bold text-slate-700 text-sm md:text-base">Material Recovery</h3>
                     <div className="flex gap-1 md:gap-2">
                        <span className="px-2 md:px-3 py-1 bg-slate-100 rounded text-[10px] md:text-xs font-medium text-slate-600">Week</span>
                        <span className="px-2 md:px-3 py-1 bg-emerald-50 rounded text-[10px] md:text-xs font-medium text-emerald-600">Month</span>
                     </div>
                  </div>
                  <div className="flex-1 flex items-end justify-between px-1 md:px-2 gap-2 relative">
                     {/* Y-Axis lines */}
                     <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-20">
                        <div className="w-full h-px bg-slate-300 mx-0" />
                        <div className="w-full h-px bg-slate-300 mx-0" />
                        <div className="w-full h-px bg-slate-300 mx-0" />
                        <div className="w-full h-px bg-slate-300 mx-0" />
                     </div>
                     {[45, 62, 55, 78, 60, 85, 70, 95, 65, 75, 60, 82].map((h, i) => (
                        <div key={i} className="w-full bg-emerald-500 rounded-t-sm z-10 transition-all hover:bg-emerald-600 relative group" style={{ height: `${h}%` }}>
                           <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg">
                              {h * 10} Tons
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="flex justify-between mt-2 md:mt-4 text-[10px] md:text-xs text-slate-400 font-medium px-1">
                     <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  </div>
               </div>
               
               {/* Recent Activity */}
               <div className={`col-span-1 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100 flex flex-col gap-4 md:gap-5 overflow-hidden min-h-[200px]`}>
                   <h3 className="font-bold text-slate-700 mb-0 md:mb-2 text-sm md:text-base">Live Activity</h3>
                   {[1, 2, 3, 4].slice(0, 3).map(i => (
                      <div key={i} className="flex gap-3 items-start p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                         <div className={`w-8 h-8 rounded-full ${i%2===0 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'} shrink-0 flex items-center justify-center font-bold text-xs`}>
                            {i%2===0 ? 'MR' : 'TX'}
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="text-xs md:text-sm font-medium text-slate-800 truncate group-hover:text-emerald-600 transition-colors">Order #{20240 + i} Processed</div>
                            <div className="text-[10px] md:text-xs text-slate-400 mt-0.5">2 mins ago • {i%2===0 ? 'Recycling' : 'Transport'}</div>
                         </div>
                      </div>
                   ))}
                   <button className="mt-auto w-full py-2 bg-slate-50 text-slate-600 text-xs md:text-sm font-medium rounded hover:bg-slate-100 transition-colors">View All Logs</button>
               </div>
            </div>
          </div>
        );
      case 'marketplace':
        return (
          <div className="p-4 md:p-8 pt-4 md:pt-6 h-full flex flex-col gap-4 md:gap-6 overflow-hidden">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm gap-3">
                <div className="relative w-full max-w-sm">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                   <div className="w-full pl-9 md:pl-10 pr-4 py-2 bg-slate-50 rounded-lg text-xs md:text-sm text-slate-500 border border-slate-200">Search materials...</div>
                </div>
                <div className="flex gap-2 md:gap-3 w-full md:w-auto">
                   <button className="flex-1 md:flex-none px-3 md:px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs md:text-sm font-medium hover:bg-slate-50">Filter</button>
                   <button className="flex-1 md:flex-none px-3 md:px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-emerald-700 shadow-md shadow-emerald-200">Create Listing</button>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 overflow-y-auto pr-1">
                {[
                  { title: 'Aluminum Scrap Grade A', loc: 'Berlin, DE', price: '€1,200/t', q: '50t', img: 'bg-slate-200' },
                  { title: 'HDPE Plastic Pellets', loc: 'Lyon, FR', price: '€850/t', q: '120t', img: 'bg-blue-100' },
                  { title: 'Copper Wire Waste', loc: 'Madrid, ES', price: '€6,400/t', q: '5t', img: 'bg-orange-100' },
                  { title: 'Industrial Steel Mix', loc: 'Milan, IT', price: '€420/t', q: '200t', img: 'bg-slate-300' }
                ].map((item, i) => (
                   <div key={i} className="bg-white rounded-xl p-3 md:p-4 flex gap-3 md:gap-4 shadow-sm border border-slate-100 hover:border-emerald-300 transition-colors group cursor-pointer relative overflow-hidden">
                      <div className={`w-16 h-16 md:w-24 md:h-24 rounded-lg ${item.img} shrink-0`} />
                      <div className="flex-1 flex flex-col justify-center gap-1">
                         <div className="flex justify-between items-start">
                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Available</span>
                            <MoreVertical size={16} className="text-slate-400" />
                         </div>
                         <h4 className="font-bold text-slate-800 text-sm md:text-lg group-hover:text-emerald-600 transition-colors line-clamp-1">{item.title}</h4>
                         <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 mb-1 md:mb-2">
                            <Truck size={12} /> {item.loc} • {item.q}
                         </div>
                         <div className="mt-auto font-bold text-emerald-600 text-sm md:text-lg">{item.price}</div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-4 md:p-8 pt-4 md:pt-6 h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-y-auto">
             {/* Donut Chart */}
             <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center relative min-h-[200px]">
                 <h3 className="absolute top-4 left-4 md:top-6 md:left-6 font-bold text-slate-700 text-xs md:text-sm">Waste Type Distribution</h3>
                 <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[20px] md:border-[24px] border-emerald-500 border-r-emerald-200 border-b-emerald-100 rotate-45 mt-6 md:mt-8 hover:scale-105 transition-transform cursor-pointer relative" >
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                       <span className="text-xl md:text-2xl font-bold text-slate-800">45%</span>
                       <span className="text-[9px] md:text-[10px] text-slate-400 uppercase">Plastic</span>
                    </div>
                 </div>
                 <div className="mt-6 md:mt-8 flex gap-4 md:gap-6 w-full justify-center">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-600"><div className="w-2 h-2 rounded-full bg-emerald-500" />Plastic</div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-600"><div className="w-2 h-2 rounded-full bg-emerald-200" />Metal</div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-600"><div className="w-2 h-2 rounded-full bg-emerald-100" />Other</div>
                 </div>
             </div>
             
             {/* Line Chart */}
             <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100 flex flex-col relative overflow-hidden min-h-[200px]">
                 <h3 className="font-bold text-slate-700 text-xs md:text-sm mb-4">Carbon Offset (YTD)</h3>
                 <div className="flex-1 w-full relative">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                       <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor:'rgb(16, 185, 129)', stopOpacity:0.2}} />
                            <stop offset="100%" style={{stopColor:'rgb(16, 185, 129)', stopOpacity:0}} />
                          </linearGradient>
                       </defs>
                       <path d="M0,100 C 50,90 100,40 150,50 C 200,60 250,20 300,30 V 150 H 0 Z" fill="url(#grad1)" />
                       <path d="M0,100 C 50,90 100,40 150,50 C 200,60 250,20 300,30" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                       
                       {/* Points */}
                       <circle cx="150" cy="50" r="4" fill="white" stroke="#10B981" strokeWidth="2" />
                       <circle cx="300" cy="30" r="4" fill="white" stroke="#10B981" strokeWidth="2" />
                    </svg>
                 </div>
                 <div className="flex justify-between mt-2 pt-2 border-t border-slate-100">
                    <div className="text-center">
                       <div className="text-[10px] md:text-xs text-slate-400">Total Offset</div>
                       <div className="font-bold text-sm md:text-base text-slate-800">4,200 tCO2e</div>
                    </div>
                    <div className="text-center">
                       <div className="text-[10px] md:text-xs text-slate-400">YoY Growth</div>
                       <div className="font-bold text-sm md:text-base text-emerald-600">+24%</div>
                    </div>
                 </div>
             </div>
          </div>
        );
      case 'logistics':
        return (
          <div className="h-full relative overflow-hidden bg-slate-50 flex flex-col">
             {/* Grid Background */}
             <div className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
             />
             
             {/* Map UI */}
             <div className="absolute top-4 left-4 z-10 bg-white p-1.5 md:p-2 rounded-lg shadow-sm border border-slate-200 flex flex-col gap-2">
                 <button className="p-1.5 md:p-2 bg-slate-50 hover:bg-slate-100 rounded text-slate-600"><Search size={14} className="md:w-4 md:h-4" /></button>
                 <button className="p-1.5 md:p-2 bg-slate-50 hover:bg-slate-100 rounded text-slate-600"><Users size={14} className="md:w-4 md:h-4" /></button>
             </div>

             {/* Connection Line & Nodes */}
             <div className="flex-1 relative w-full h-full min-h-[300px]">
                <div className="absolute inset-0">
                    {/* SVG Map Path - Using percentage coordinates/viewBox for scaling */}
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                           <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" style={{stopColor:'#10B981', stopOpacity:1}} />
                              <stop offset="100%" style={{stopColor:'#CBD5E1', stopOpacity:1}} />
                           </linearGradient>
                        </defs>
                        {/* Path from 25,50 to 75,50 with curve */}
                        <path d="M 25 50 Q 50 20 75 50" stroke="url(#lineGrad)" strokeWidth="1" fill="none" strokeDasharray="2 1" vectorEffect="non-scaling-stroke" />
                    </svg>
                    
                    {/* Warehouse Node */}
                    <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2">
                       <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 border-emerald-500 flex items-center justify-center z-10 relative">
                          <Package className="text-emerald-600" size={18} />
                          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] md:text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">Warehouse A</div>
                       </div>
                       <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Client Node */}
                    <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2">
                       <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 border-slate-300 flex items-center justify-center z-10 relative">
                          <Users className="text-slate-500" size={18} />
                          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] md:text-[10px] py-1 px-2 rounded whitespace-nowrap z-20">Client Site</div>
                       </div>
                    </div>

                    {/* Truck Animation */}
                    <motion.div 
                        className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2"
                        animate={{ 
                            x: [-50, 50, -50], 
                            y: [-30, -30, -30] // Approximate curve path
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                       <div className="w-8 h-8 bg-white rounded-full shadow border border-slate-200 flex items-center justify-center">
                          <Truck size={14} className="text-emerald-600" />
                       </div>
                    </motion.div>
                </div>
             </div>

             {/* Bottom Panel */}
             <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 md:p-4 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center z-20">
                 <div className="flex gap-3 md:gap-4 items-center w-full md:w-auto">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">85%</div>
                    <div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-800 uppercase tracking-wide">Route Optimization</div>
                        <div className="text-[10px] md:text-xs text-slate-500">ETA: 45 min • 12km remaining</div>
                    </div>
                 </div>
                 <button className="w-full md:w-auto px-4 py-2 bg-emerald-600 text-white text-[10px] md:text-xs font-bold rounded hover:bg-emerald-700 transition-colors uppercase tracking-wide text-center">Track Live</button>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className={`w-full h-full ${theme.bg} flex overflow-hidden font-sans select-none rounded-[1rem]`}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <TopBar />
        <div className="flex-1 overflow-hidden relative px-4 pb-4">
           <WireContent />
        </div>
      </div>
    </motion.div>
  );
}
