import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Mail, Send, User, MessageSquare, AlertCircle,
  MapPin, Clock, Sparkles, CheckCircle2, Globe, ChevronDown,
} from 'lucide-react';
import { sendContactMessage } from '../api/contact';
import { useLanguageDetection } from '../hooks/useLanguageDetection';
import StepIndicator from '../components/contact/StepIndicator';
import LanguageBadge from '../components/contact/LanguageBadge';
import { LANGUAGE_INFO, SORTED_LANGUAGES } from '../data/languages';

function validateForm(data: { name: string; email: string; language: string; subject: string; message: string }) {
  const errors: string[] = [];
  if (data.name.length < 2 || data.name.length > 100) errors.push('Name must be 2-100 characters');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Invalid email format');
  if (!data.language) errors.push('Language is required');
  if (data.subject.length < 3 || data.subject.length > 200) errors.push('Subject must be 3-200 characters');
  if (data.message.length < 10 || data.message.length > 5000) errors.push('Message must be 10-5000 characters');
  return errors;
}

interface LangDropdownProps {
  value: string; open: boolean; onToggle: () => void;
  onChange: (code: string) => void; onFocus: () => void; onBlur: () => void; placeholder: string;
}

function LanguageDropdown({ value, open, onToggle, onChange, onFocus, onBlur, placeholder }: LangDropdownProps) {
  const selected = value ? LANGUAGE_INFO[value] : null;
  return (
    <div className="relative">
      <button type="button" onClick={onToggle} onFocus={onFocus} onBlur={onBlur}
        className={`w-full pl-11 pr-10 py-3.5 bg-transparent focus:outline-none text-sm text-left flex items-center justify-between ${value ? 'text-white' : 'text-neutral-600'}`}
      >
        {selected ? (
          <span className="flex items-center gap-2">
            <img src={`https://flagcdn.com/24x18/${selected.flag}.png`} alt={selected.name} width="24" height="18" className="rounded-sm" />
            <span>{selected.name}</span>
          </span>
        ) : <span>{placeholder}</span>}
        <ChevronDown size={16} className={`transition-transform mr-3 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-y-auto z-50 max-h-60"
          >
            {SORTED_LANGUAGES.map(([code, info]) => (
              <button key={code} type="button" onClick={() => onChange(code)}
                className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 transition-colors hover:bg-neutral-800/50 ${value === code ? 'bg-indigo-500/10 text-indigo-400' : 'text-white'}`}
              >
                <img src={`https://flagcdn.com/24x18/${info.flag}.png`} alt={info.name} width="24" height="18" className="rounded-sm" />
                <span>{info.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const { t, i18n } = useTranslation('common');
  const { detectedCountry } = useLanguageDetection();
  const [formData, setFormData] = useState({ name: '', email: '', language: '', subject: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const formLoadTime = useRef(Date.now());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const currentStep = formData.message.length > 0 ? 2 : (formData.name && formData.email && formData.language) ? 1 : 0;

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' }));
    update(); const id = setInterval(update, 30_000); return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const lang = i18n.language?.slice(0, 2);
    if (lang && LANGUAGE_INFO[lang] && !formData.language) setFormData(prev => ({ ...prev, language: lang }));
  }, [i18n.language]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('submitting'); setErrorMessage('');
    if (honeypot) { setStatus('success'); return; }
    const errors = validateForm(formData);
    if (errors.length > 0) { setErrorMessage(errors[0]); setStatus('error'); return; }
    try {
      await sendContactMessage({ ...formData, timestamp: formLoadTime.current, website: honeypot });
      setStatus('success');
      setFormData({ name: '', email: '', language: i18n.language?.slice(0, 2) || '', subject: '', message: '' });
      formLoadTime.current = Date.now();
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : t('contact.form.error'));
      setStatus('error');
    }
  };

  const infoCards = [
    { icon: MapPin, title: t('contact.info.location'), desc: 'Paris, France', color: 'indigo' },
    { icon: Clock, title: t('contact.info.hours'), desc: `${t('contact.info.timezone')}  ${currentTime}`, color: 'purple' },
    { icon: Mail, title: t('contact.info.email_label'), desc: 'chelhaoui.kais62141@gmail.com', color: 'indigo', isLink: true },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 text-sm font-medium"
          ><Sparkles size={14} />{t('contact.badge')}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4">{t('contact.title')}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 mb-6">{t('contact.subtitle')}</motion.p>
          {detectedCountry && <LanguageBadge languageCode={formData.language || i18n.language?.slice(0, 2) || 'en'} />}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-6">
            {infoCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/60 hover:border-neutral-700/60 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${card.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
                    <card.icon size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">{card.title}</div>
                    {'isLink' in card && card.isLink
                      ? <a href="mailto:chelhaoui.kais62141@gmail.com" className="text-white font-medium hover:text-indigo-400 transition">{card.desc}</a>
                      : <div className="text-white font-medium">{card.desc}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/5 border border-green-500/10"
            >
              <div className="relative"><div className="w-2.5 h-2.5 rounded-full bg-green-400" /><div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" /></div>
              <span className="text-sm text-green-400/80">{t('contact.info.response')}</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-3">
            <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800/60 p-6 md:p-8 backdrop-blur-sm">
              <StepIndicator currentStep={currentStep} />
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="py-16 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6"
                    ><CheckCircle2 size={36} className="text-green-400" /></motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t('contact.form.success_title')}</h3>
                    <p className="text-neutral-400">{t('contact.form.success_desc')}</p>
                  </motion.div>
                ) : status === 'submitting' ? (
                  <motion.div key="sending" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">{t('contact.form.sending_title')}</h3>
                    <p className="text-neutral-400">{t('contact.form.sending')}</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <FieldWrapper field="name" focused={focusedField === 'name'}>
                      <User size={16} />
                      <input type="text" name="name" required placeholder={t('contact.form.name')} value={formData.name} onChange={handleChange}
                        onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                        className="w-full pl-11 pr-4 py-3.5 bg-transparent text-white placeholder-neutral-600 focus:outline-none text-sm" />
                    </FieldWrapper>
                    <FieldWrapper field="email" focused={focusedField === 'email'}>
                      <Mail size={16} />
                      <input type="email" name="email" required placeholder={t('contact.form.email')} value={formData.email} onChange={handleChange}
                        onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                        className="w-full pl-11 pr-4 py-3.5 bg-transparent text-white placeholder-neutral-600 focus:outline-none text-sm" />
                    </FieldWrapper>
                    <FieldWrapper field="language" focused={focusedField === 'language'} isSelect>
                      <Globe size={16} />
                      <LanguageDropdown value={formData.language} open={langDropdownOpen}
                        onToggle={() => setLangDropdownOpen(o => !o)}
                        onChange={code => { setFormData(prev => ({ ...prev, language: code })); setLangDropdownOpen(false); }}
                        onFocus={() => setFocusedField('language')}
                        onBlur={() => { setFocusedField(null); setTimeout(() => setLangDropdownOpen(false), 150); }}
                        placeholder={t('contact.form.language')} />
                    </FieldWrapper>
                    <FieldWrapper field="subject" focused={focusedField === 'subject'}>
                      <AlertCircle size={16} />
                      <input type="text" name="subject" required placeholder={t('contact.form.subject')} value={formData.subject} onChange={handleChange}
                        onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)}
                        className="w-full pl-11 pr-4 py-3.5 bg-transparent text-white placeholder-neutral-600 focus:outline-none text-sm" />
                    </FieldWrapper>
                    <FieldWrapper field="message" focused={focusedField === 'message'} isTextarea>
                      <MessageSquare size={16} />
                      <textarea name="message" required rows={5} placeholder={t('contact.form.message')} value={formData.message} onChange={handleChange}
                        onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                        className="w-full pl-11 pr-4 py-3.5 bg-transparent text-white placeholder-neutral-600 focus:outline-none resize-none text-sm" />
                      <div className="absolute bottom-2 right-3 text-xs text-neutral-700">{formData.message.length}/5000</div>
                    </FieldWrapper>
                    <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
                      className="absolute -left-[9999px] opacity-0 h-0 w-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    <motion.button type="submit"
                      whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
                    >
                      {t('contact.form.send')} <Send size={16} />
                    </motion.button>
                    {status === 'error' && (
                      <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-center text-sm flex items-center justify-center gap-2"
                      ><AlertCircle size={14} /> {errorMessage || t('contact.form.error')}</motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface FieldWrapperProps { field: string; focused: boolean; isTextarea?: boolean; isSelect?: boolean; children: React.ReactNode; }
function FieldWrapper({ focused, isTextarea, children }: FieldWrapperProps) {
  const kids = Array.isArray(children) ? children : [children];
  return (
    <div className={`relative rounded-xl border transition-all duration-300 ${focused ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/5 bg-neutral-950/80' : 'border-neutral-800/60 bg-neutral-950/50'}`}>
      <div className={`absolute ${isTextarea ? 'top-3.5' : 'top-1/2 -translate-y-1/2'} left-4 pointer-events-none transition-colors ${focused ? 'text-indigo-400' : 'text-neutral-600'}`}>
        {kids[0]}
      </div>
      {kids.slice(1)}
    </div>
  );
}