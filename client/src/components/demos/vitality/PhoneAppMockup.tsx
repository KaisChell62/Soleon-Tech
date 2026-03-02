import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity, Zap, TrendingUp,
  Heart, Calendar, Home, User, Play, Flame, Trophy,
  ChevronLeft
} from 'lucide-react';

export default function PhoneAppMockup({ t }: { t: any }) {
  const [activeTab, setActiveTab] = useState('home');
  const [view, setView] = useState('home'); // 'home', 'workout', 'profile', 'stats', 'calendar'
  const [cal, setCal] = useState(842);
  const [hr, setHr] = useState(112);
  const [timer, setTimer] = useState(0);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null);

  // Live Stats Simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setCal(c => c + (isWorkoutActive ? 5 : Math.floor(Math.random()*2)));
      setHr(h => isWorkoutActive ? Math.min(180, h + Math.floor(Math.random() * 5)) : Math.max(60, h + (Math.random() > 0.5 ? 1 : -1)));
    }, 2000);
    return () => clearInterval(iv);
  }, [isWorkoutActive]);

  // Workout Timer
  useEffect(() => {
    let iv: any;
    if (isWorkoutActive) {
      iv = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(iv);
  }, [isWorkoutActive]);

  const startWorkout = (workout: any) => {
    setSelectedWorkout(workout);
    setView('workout');
    setActiveTab('workout');
    setIsWorkoutActive(true);
    setTimer(0);
  };

  const stopWorkout = () => {
    setIsWorkoutActive(false);
    setView('home');
    setActiveTab('home');
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className='w-full h-full bg-neutral-950 text-white font-sans overflow-hidden relative select-none flex flex-col'>
      {/* Status Bar */}
      <div className='h-8 flex justify-between items-center px-6 pt-2 text-[10px] font-medium text-neutral-400 shrink-0 z-30'>
        <span>9:41</span>
        <div className='flex gap-1'><Activity size={10} /><div className='w-4 h-2 border border-current rounded-sm bg-current' /></div>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 overflow-y-auto no-scrollbar relative z-10'>
        <AnimatePresence mode='wait'>
          
          {/* HOME VIEW */}
          {view === 'home' && (
            <motion.div 
              key='home'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className='px-6 pt-4 pb-20'
            >
              <header className='flex justify-between items-center mb-6'>
                <div>
                  <p className='text-neutral-400 text-[10px] uppercase tracking-wider font-bold mb-0.5'>{t.welcome}</p>
                  <h2 className='text-lg font-bold'>Sarah Connor</h2>
                </div>
                <button onClick={() => { setView('profile'); setActiveTab('user'); }} className='w-8 h-8 rounded-full bg-neutral-800 border border-white/10 overflow-hidden hover:scale-110 transition-transform'>
                   <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100' className='w-full h-full object-cover' alt="Profile" />
                </button>
              </header>

              <div className='grid grid-cols-2 gap-3 mb-6'>
                  <div className='bg-lime-500/10 p-3 rounded-2xl border border-lime-500/20'>
                    <div className='flex items-center gap-1.5 text-lime-400 mb-1'><Flame size={12} /><span className='text-[10px] font-bold'>{t.calories}</span></div>
                    <p className='text-xl font-bold'>{cal}</p>
                  </div>
                  <div className='bg-red-500/10 p-3 rounded-2xl border border-red-500/20'>
                    <div className='flex items-center gap-1.5 text-red-400 mb-1'><Heart size={12} /><span className='text-[10px] font-bold'>{t.heart}</span></div>
                    <p className='text-xl font-bold'>{hr}</p>
                  </div>
              </div>

              <div className='flex items-center gap-3 bg-neutral-900 border border-white/5 rounded-2xl p-3 mb-6'>
                 <div className='w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center'><Trophy size={14} /></div>
                 <div className='flex-1'><p className='text-xs font-bold'>12 {t.streak} 🔥</p><div className='h-1 bg-neutral-800 rounded-full mt-1 overflow-hidden'><div className='h-full w-3/4 bg-orange-500' /></div></div>
              </div>

              <div className='space-y-3'>
                {[
                  { icon: Zap, title: t.hiit, time: '45 ' + t.min, color: 'text-orange-400 bg-orange-500/20' },
                  { icon: Activity, title: t.yoga, time: '30 ' + t.min, color: 'text-blue-400 bg-blue-500/20' },
                  { icon: Trophy, title: t.power, time: '60 ' + t.min, color: 'text-purple-400 bg-purple-500/20' },
                ].map((item, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={i} 
                    className='bg-neutral-900 p-3 rounded-2xl flex items-center gap-3 border border-white/5 cursor-local hover:bg-neutral-800 transition-colors'
                    onClick={() => startWorkout(item)}
                  >
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                      <item.icon size={18} />
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-bold text-sm text-white'>{item.title}</h4>
                      <p className='text-[10px] text-neutral-500'>{item.time} • {t.advanced}</p>
                    </div>
                    <button className='w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-lime-400 transition-colors'>
                      <Play size={12} fill='currentColor' />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* WORKOUT VIEW */}
          {view === 'workout' && (
            <motion.div 
              key='workout'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className='absolute inset-0 z-20 bg-neutral-900 flex flex-col'
            >
               <div className='h-1/2 relative'>
                  <div className='absolute inset-0 bg-lime-500/20 animate-pulse' />
                  <div className='absolute inset-0 flex items-center justify-center'>
                     <Activity size={64} className='text-lime-500 animate-bounce' />
                  </div>
                  <button onClick={stopWorkout} className='absolute top-4 left-4 p-2 bg-black/50 rounded-full text-white backdrop-blur hover:bg-black/70 transition-colors'>
                    <ChevronLeft size={24} />
                  </button>
               </div>
               <div className='flex-1 bg-neutral-950 rounded-t-3xl -mt-6 relative z-10 p-6 flex flex-col items-center justify-center gap-6'>
                  <div className='text-center'>
                    <h2 className='text-2xl font-bold mb-1'>{selectedWorkout?.title || 'Workout'}</h2>
                    <p className='text-lime-400 font-medium animate-pulse'>{t.workout_in_progress}</p>
                  </div>
                  <div className='text-6xl font-black font-mono tracking-wider'>
                    {formatTime(timer)}
                  </div>
                  <div className='grid grid-cols-2 gap-8 w-full px-4'>
                     <div className='text-center'>
                        <Heart className='mx-auto text-red-500 mb-2' />
                        <span className='text-2xl font-bold'>{hr}</span>
                        <p className='text-xs text-neutral-500'>BPM</p>
                     </div>
                     <div className='text-center'>
                        <Flame className='mx-auto text-orange-500 mb-2' />
                        <span className='text-2xl font-bold'>{cal}</span>
                        <p className='text-xs text-neutral-500'>KCAL</p>
                     </div>
                  </div>
                  <button 
                    onClick={stopWorkout}
                    className='w-full py-4 bg-red-500 text-white font-bold rounded-2xl mt-auto active:scale-95 transition-transform hover:bg-red-600'
                  >
                    {t.stop}
                  </button>
               </div>
            </motion.div>
          )}

           {/* PROFILE VIEW */}
           {view === 'profile' && (
             <motion.div 
               key='profile'
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               className='px-6 pt-8 pb-20 flex flex-col items-center'
             >
                <div className='w-24 h-24 rounded-full border-4 border-lime-500 p-1 mb-4 relative'>
                   <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' className='w-full h-full object-cover rounded-full' alt="Profile Detail" />
                   <div className='absolute bottom-0 right-0 w-6 h-6 bg-lime-500 rounded-full border-2 border-black flex items-center justify-center text-black font-bold text-xs'>✓</div>
                </div>
                <h2 className='text-xl font-bold'>Sarah Connor</h2>
                <p className='text-neutral-500 text-sm mb-6'>Pro Member</p>
                
                <div className='w-full space-y-2'>
                  {['Account Settings', 'My Plans', 'Notifications', 'Connected Devices'].map((item, i) => (
                    <div key={i} className='w-full p-4 bg-neutral-900 rounded-xl flex justify-between items-center border border-white/5 hover:bg-neutral-800 transition-colors cursor-pointer'>
                       <span>{item}</span>
                       <ChevronLeft size={16} className='rotate-180 text-neutral-500' />
                    </div>
                  ))}
                </div>
             </motion.div>
           )}

        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className='absolute bottom-0 w-full bg-neutral-900/95 backdrop-blur border-t border-white/5 pb-6 pt-3 px-6 flex justify-between items-center text-neutral-500 z-30'>
        <button className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-lime-400' : 'hover:text-white transition-colors'}`} onClick={() => { setView('home'); setActiveTab('home'); }}>
            <Home size={20} />
        </button>
        <button className={`flex flex-col items-center gap-1 ${activeTab === 'calendar' ? 'text-lime-400' : 'hover:text-white transition-colors'}`} onClick={() => { setView('home'); setActiveTab('calendar'); }}>
            <Calendar size={20} />
        </button>
        <div className='w-12 h-12 rounded-full bg-lime-400 text-black flex items-center justify-center -mt-8 border-4 border-neutral-950 shadow-lg shadow-lime-400/20 cursor-pointer hover:scale-110 transition-transform active:scale-95' onClick={() => startWorkout({ title: 'Quick Start', color: 'text-lime-500' })}>
          <Zap size={20} fill='currentColor' />
        </div>
        <button className={`flex flex-col items-center gap-1 ${activeTab === 'stats' ? 'text-lime-400' : 'hover:text-white transition-colors'}`} onClick={() => { setView('home'); setActiveTab('stats'); }}>
            <TrendingUp size={20} />
        </button>
        <button className={`flex flex-col items-center gap-1 ${activeTab === 'user' ? 'text-lime-400' : 'hover:text-white transition-colors'}`} onClick={() => { setView('profile'); setActiveTab('user'); }}>
             <User size={20} />
        </button>
      </div>
    </div>
  );
}
