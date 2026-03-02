/**
 * LanguageBadge — shows detected language from geo-detection
 */
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_INFO } from '../../data/languages';

interface Props {
  languageCode: string;
}

export default function LanguageBadge({ languageCode }: Props) {
  const { t } = useTranslation('common');
  const info = LANGUAGE_INFO[languageCode];
  if (!info) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm"
    >
      <Globe size={14} className="text-indigo-400" />
      <span className="text-indigo-300">{t('contact.detected')}</span>
      <img
        src={`https://flagcdn.com/24x18/${info.flag}.png`}
        alt={info.name}
        width="24"
        height="18"
        className="rounded-sm"
      />
      <span className="text-white font-medium">{info.name}</span>
    </motion.div>
  );
}
