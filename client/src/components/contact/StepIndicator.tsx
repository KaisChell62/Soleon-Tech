/**
 * StepIndicator — Contact form progress bar (3 steps)
 */
import { motion } from 'framer-motion';
import { User, MessageSquare, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STEPS = [
  { key: 'info', icon: User },
  { key: 'details', icon: MessageSquare },
  { key: 'send', icon: Send },
] as const;

interface Props {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: Props) {
  const { t } = useTranslation('common');

  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        const isActive = currentStep >= i;
        return (
          <div key={step.key} className="flex items-center gap-2">
            <motion.div
              animate={{ scale: isActive ? 1 : 0.85, opacity: isActive ? 1 : 0.4 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40'
                  : 'bg-neutral-800/50 text-neutral-600 border border-neutral-800'
              }`}
            >
              <Icon size={14} />
            </motion.div>
            <span className={`text-xs font-medium hidden sm:block ${isActive ? 'text-indigo-400' : 'text-neutral-600'}`}>
              {t(`contact.steps.${step.key}`)}
            </span>
            {i < STEPS.length - 1 && (
              <div className={`w-8 h-px mx-1 transition-colors ${currentStep > i ? 'bg-indigo-500/40' : 'bg-neutral-800'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
