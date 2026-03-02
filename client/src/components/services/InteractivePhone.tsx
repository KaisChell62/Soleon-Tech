import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Signal, Wifi, MessageCircle, Home, User, Bell, Settings, Mail, ChevronLeft, Send, Search, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function InteractivePhone() {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState<'home' | 'messages' | 'profile'>('home');
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const contacts = [
    { id: 1, name: "Alice", role: t('services.preview.phone.role_1'), time: "2m", unread: true, avatar: "bg-pink-500" },
    { id: 2, name: "Bob", role: t('services.preview.phone.role_2'), time: "1h", unread: false, avatar: "bg-blue-500" },
    { id: 3, name: "Charlie", role: "Manager", time: "3h", unread: true, avatar: "bg-green-500" }, // Partial translation
    { id: 4, name: "David", role: "VIP", time: "1d", unread: false, avatar: "bg-purple-500" },
  ];


  return (
    <div className="relative w-[300px] h-[600px] mx-auto perspective-1000 group">
      <motion.div
        initial={{ rotateY: -15, rotateX: 5 }}
        whileHover={{ rotateY: 0, rotateX: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="relative w-full h-full bg-neutral-900 rounded-[3rem] border-8 border-neutral-800 shadow-2xl overflow-hidden"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-20 flex items-center justify-center">
            <div className="w-16 h-4 bg-neutral-900 rounded-full"></div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-2 w-full px-6 flex justify-between items-center text-white text-xs z-10 font-medium">
          <span>9:41</span>
          <div className="flex gap-1.5">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={12} />
          </div>
        </div>

        {/* App Content */}
        <div className="bg-neutral-950 w-full h-full pt-12 pb-20 px-4 flex flex-col relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{t('services.preview.phone.hello')}</h3>
                    <p className="text-xs text-neutral-400">{t('services.preview.phone.welcome_back')}</p>
                  </div>
                  <div 
                    onClick={() => setActiveTab('profile')} 
                    className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-indigo-400 transition"
                  >
                      <User size={18} className="text-white" />
                  </div>
                </div>

                {/* Dashboard Widgets */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-neutral-900 p-3 rounded-2xl border border-neutral-800">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-2">
                             <Signal size={16} />
                        </div>
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-[10px] text-neutral-400">{t('services.preview.phone.uptime')}</div>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-2xl border border-neutral-800">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mb-2">
                             <User size={16} />
                        </div>
                        <div className="text-2xl font-bold text-white">1.2k</div>
                        <div className="text-[10px] text-neutral-400">{t('services.preview.phone.new_users')}</div>
                    </div>
                </div>

                {/* Main Action Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 mb-6 shadow-lg shadow-indigo-900/20 cursor-pointer relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">{t('services.preview.phone.revenue')}</div>
                    <div className="text-white text-3xl font-bold mb-4">$24,500.00</div>
                    <div className="flex items-center gap-2">
                        <span className="bg-white/20 px-2 py-1 rounded text-[10px] text-white backdrop-blur-sm">{t('services.preview.phone.growth')}</span>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -left-4 -top-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
                </motion.div>

                {/* Recent Activity List */}
                <div className="flex-1 overflow-hidden flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-bold text-white">{t('services.preview.phone.recent_activity')}</h4>
                      <span className="text-[10px] text-indigo-400 cursor-pointer">{t('services.preview.phone.view_all')}</span>
                  </div>
                  <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 pb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center gap-3 p-2 hover:bg-neutral-900 rounded-xl transition cursor-pointer group">
                             <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-700 group-hover:text-white transition">
                                 <Bell size={16} />
                             </div>
                             <div className="flex-1">
                                 <div className="text-sm text-white font-medium">{t('services.preview.phone.new_update')}</div>
                                 <div className="text-[10px] text-neutral-500">{t('services.preview.phone.just_now')}</div>
                             </div>
                        </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'messages' && (
              <motion.div 
                key="messages"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col h-full"
              >
                  {!selectedChat ? (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-white">{t('services.preview.phone.chats')}</h3>
                            <div className="bg-neutral-800 p-2 rounded-full text-indigo-400">
                                <Send size={16} />
                            </div>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2 mb-4 text-neutral-500 text-sm">
                            <Search size={16} />
                            <span>{t('services.preview.phone.search_conversations')}</span>
                        </div>

                        {/* Stories / Online Users */}
                        <div className="flex gap-4 overflow-x-auto pb-4 mb-2 no-scrollbar">
                           <div className="flex flex-col items-center gap-1 min-w-[56px]">
                               <div className="w-14 h-14 rounded-full border-2 border-dashed border-neutral-700 flex items-center justify-center bg-neutral-900 text-white">
                                   +
                               </div>
                               <span className="text-[10px] text-neutral-400">{t('services.preview.phone.my_story')}</span>
                           </div>
                           {contacts.map(c => (
                               <div key={c.id} className="flex flex-col items-center gap-1 min-w-[56px]">
                                   <div className={`w-14 h-14 rounded-full ${c.avatar} border-2 border-black relative`}>
                                       <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                                   </div>
                                   <span className="text-[10px] text-neutral-400 truncate w-14 text-center">{c.name.split(' ')[0]}</span>
                               </div>
                           ))}
                        </div>

                        {/* List */}
                        <div className="space-y-1 flex-1 overflow-y-auto no-scrollbar -mx-2 px-2">
                           {contacts.map((contact) => (
                              <motion.div 
                                key={contact.id} 
                                layoutId={`chat-${contact.id}`}
                                onClick={() => setSelectedChat(contact.id)}
                                className="flex gap-3 items-center p-3 rounded-xl hover:bg-neutral-900 transition cursor-pointer active:scale-95"
                              >
                                  <div className={`w-12 h-12 rounded-full ${contact.avatar}`} />
                                  <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-baseline mb-0.5">
                                          <h4 className="text-sm font-bold text-white truncate">{contact.name}</h4>
                                          <span className={`text-[10px] ${contact.unread ? 'text-indigo-400 font-bold' : 'text-neutral-600'}`}>{contact.time}</span>
                                      </div>
                                      <p className={`text-xs truncate ${contact.unread ? 'text-white font-medium' : 'text-neutral-500'}`}>Hey, do you have the latest mockups for...</p>
                                  </div>
                                  {contact.unread && (
                                      <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full ml-1" />
                                  )}
                              </motion.div>
                           ))}
                        </div>
                    </>
                  ) : (
                    <div className="flex flex-col h-full -mx-4 -mt-12">
                        {/* Chat Header */}
                        <div className="bg-neutral-900/90 backdrop-blur-md p-4 pt-12 flex items-center gap-3 border-b border-neutral-800 z-10 absolute top-0 w-full">
                            <button onClick={() => setSelectedChat(null)} className="text-white hover:bg-neutral-800 p-1 rounded-full"><ChevronLeft /></button>
                            <div className={`w-8 h-8 rounded-full ${contacts.find(c => c.id === selectedChat)?.avatar || 'bg-gray-500'}`} />
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-white">{contacts.find(c => c.id === selectedChat)?.name}</h4>
                                <span className="text-[10px] text-green-500">{t('services.preview.phone.online')}</span>
                            </div>
                            <User size={16} className="text-white" />
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 bg-black p-4 pt-28 space-y-4 overflow-y-auto pb-20">
                            <div className="flex justify-center"><span className="text-[10px] text-neutral-600 bg-neutral-900/50 px-2 py-1 rounded-full">Today 9:41 AM</span></div>
                            
                            <div className="flex flex-col gap-1 items-start max-w-[80%]">
                                <div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-sm text-neutral-200 text-xs shadow-sm">
                                    Hi Alex! How is the project going?
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-end ml-auto max-w-[80%]">
                                <div className="bg-indigo-600 p-3 rounded-2xl rounded-tr-sm text-white text-xs shadow-md shadow-indigo-500/10">
                                    Hey! It's going great. I just pushed the latest updates. 🚀
                                </div>
                                <div className="bg-indigo-600 p-3 rounded-2xl text-white text-xs shadow-md shadow-indigo-500/10">
                                    Check it out when you can.
                                </div>
                                <span className="text-[10px] text-neutral-500">Read 9:45 AM</span>
                            </div>

                            <div className="flex flex-col gap-1 items-start max-w-[80%]">
                                <div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-sm text-neutral-200 text-xs shadow-sm">
                                    Awesome! I'll take a look tonight.
                                </div>
                            </div>
                            
                            {/* Dummy space at bottom for scroll */}
                            <div className="h-4" />
                        </div>

                        {/* Input Area */}
                        <div className="absolute bottom-0 w-full p-3 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 flex items-center gap-2 z-20">
                            <div className="p-2 text-neutral-400 hover:bg-neutral-800 rounded-full cursor-pointer"><ImageIcon size={20} /></div>
                            <input 
                                type="text" 
                                placeholder={t('services.preview.phone.message_placeholder')} 
                                className="flex-1 bg-neutral-950 text-white text-sm rounded-full px-4 py-2 border border-neutral-800 focus:border-indigo-500 focus:outline-none"
                            />
                            <div className="p-2 bg-indigo-600 text-white rounded-full"><Send size={16} /></div>
                        </div>
                    </div>
                  )}
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div 
                key="profile"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col h-full pt-8 px-2"
              >
                  <div className="flex items-center gap-4 mb-8 px-2">
                       <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
                           <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center overflow-hidden">
                               <User size={32} className="text-white" />
                           </div>
                       </div>
                       <div>
                           <h3 className="text-xl font-bold text-white">Alex Doe</h3>
                           <p className="text-indigo-400 text-sm">{t('services.preview.phone.pro_member')}</p>
                       </div>
                  </div>

                  <div className="w-full space-y-3">
                      <div className="text-xs font-bold text-neutral-500 ml-2 mb-1">{t('services.preview.phone.general')}</div>
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between cursor-pointer hover:bg-neutral-800 transition">
                         <div className="flex items-center gap-3">
                             <div className="bg-neutral-800 p-2 rounded-lg text-white"><Settings size={18} /></div>
                             <span className="text-neutral-300 text-sm font-medium">{t('services.preview.phone.settings')}</span>
                         </div>
                         <ChevronLeft size={16} className="rotate-180 text-neutral-600" />
                      </div>
                      <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between cursor-pointer hover:bg-neutral-800 transition">
                         <div className="flex items-center gap-3">
                             <div className="bg-neutral-800 p-2 rounded-lg text-white"><Mail size={18} /></div>
                             <span className="text-neutral-300 text-sm font-medium">{t('services.preview.phone.notifications')}</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <span className="w-2 h-2 bg-red-500 rounded-full" />
                             <ChevronLeft size={16} className="rotate-180 text-neutral-600" />
                         </div>
                      </div>
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Bar - Only show when NOT in chat detail */}
        {!selectedChat && (
            <div className="absolute bottom-0 w-full h-16 bg-black/60 backdrop-blur-md flex justify-around items-center px-2 text-neutral-500 z-30">
                <button onClick={() => setActiveTab('home')} className={`p-2 transition ${activeTab === 'home' ? 'text-indigo-400' : 'hover:text-white'}`}>
                    <Home size={24} />
                    {activeTab === 'home' && <motion.div layoutId="bubble" className="absolute w-1 h-1 bg-indigo-500 rounded-full bottom-2 left-1/2 -translate-x-1/2" />}
                </button>
                <button onClick={() => setActiveTab('messages')} className={`p-2 transition ${activeTab === 'messages' ? 'text-indigo-400' : 'hover:text-white'} relative`}>
                    <MessageCircle size={24} />
                    <span className="absolute top-2 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-black rounded-full text-[8px] flex items-center justify-center text-white"></span>
                </button>
                <button onClick={() => setActiveTab('profile')} className={`p-2 transition ${activeTab === 'profile' ? 'text-indigo-400' : 'hover:text-white'}`}>
                    <User size={24} />
                </button>
            </div>
        )}

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white rounded-full opacity-50 z-40"></div>
      </motion.div>
      
      {/* Reflection/Shadow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/50 blur-xl rounded-[100%]"></div>
    </div>
  );
}
