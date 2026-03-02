import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { kanbanData } from '../../data/interactive';
import type { KanbanTask } from '../../types/interactive';
import { Plus, MoreHorizontal, Clock } from 'lucide-react';

const TagColors: Record<string, string> = {
  Design: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Frontend: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Backend: 'bg-green-500/20 text-green-300 border-green-500/30',
  Review: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

export default function LiveBoard() {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20 overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-140px)] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
            <div>
                 <div className="flex items-center gap-2 text-green-500 font-mono text-sm mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {t('liveBoard.status')}
                 </div>
                 <h1 className="text-3xl font-bold">{t('liveBoard.title')}</h1>
                 <p className="text-neutral-400">{t('liveBoard.subtitle')}</p>
            </div>
            
            <div className="hidden md:flex -space-x-2">
                 {['S', 'M', 'A', 'J'].map((initial, i) => (
                     <div key={i} className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-neutral-950 flex items-center justify-center font-bold text-sm text-neutral-400">
                         {initial}
                     </div>
                 ))}
                 <div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-neutral-950 flex items-center justify-center font-bold text-sm text-neutral-400">
                     <Plus size={16} />
                 </div>
            </div>
        </div>

        {/* Board */}
        <div className="flex-1 overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max h-full">
                {kanbanData.map((column, colIndex) => (
                    <div key={column.id} className="w-[300px] flex flex-col bg-neutral-900/40 rounded-xl border border-neutral-800/50 h-full max-h-full">
                        
                        {/* Column Header */}
                        <div className="p-4 flex justify-between items-center border-b border-neutral-800/50">
                            <h3 className="font-bold text-sm text-neutral-300 flex items-center gap-2">
                                {column.title}
                                <span className="text-xs bg-neutral-800 px-2 py-0.5 rounded-full text-neutral-500">{column.tasks.length}</span>
                            </h3>
                            <MoreHorizontal size={16} className="text-neutral-600 cursor-pointer hover:text-neutral-400" />
                        </div>

                        {/* Tasks Container */}
                        <div className="p-3 space-y-3 overflow-y-auto custom-scrollbar flex-1">
                            {column.tasks.map((task: KanbanTask, taskIndex) => (
                                <motion.div
                                    key={task.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: colIndex * 0.1 + taskIndex * 0.05 }}
                                    className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:border-indigo-500/50 cursor-grab active:cursor-grabbing shadow-sm group hover:shadow-md transition-all"
                                >
                                    <div className={`text-xs px-2 py-1 rounded inline-block border mb-3 font-medium ${TagColors[task.tag] || TagColors.Review}`}>
                                        {task.tag}
                                    </div>
                                    
                                    <h4 className="font-medium text-sm mb-4 leading-snug">{task.title}</h4>
                                    
                                    <div className="flex justify-between items-end">
                                        <div className="text-neutral-500">
                                            <Clock size={14} />
                                        </div>
                                        {task.assignedTo && (
                                            <div title={task.assignedTo.name} className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs flex items-center justify-center font-bold">
                                                {task.assignedTo.avatar}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            
                            {/* Empty State / Dropzone Placeholder */}
                            <div className="h-20 border-2 border-dashed border-neutral-800 rounded-lg flex items-center justify-center text-neutral-700 text-sm opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                                {t('liveBoard.addTask')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
