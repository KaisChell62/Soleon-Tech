/**
 * QuoteModal — Language selector + email input for configurator quote sending
 * Used by PacksConfigurator when clicking "Recevoir ce devis"
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Mail, Globe, Send, CheckCircle2, AlertCircle, ChevronDown, User } from 'lucide-react';
import { sendQuoteRequest, type QuoteItem } from '../api/contact';
import { LANGUAGE_INFO, SORTED_LANGUAGES } from '../data/languages';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  oneTimeTotal: number;
  monthlyTotal: number;
  currency: string;
}

export default function QuoteModal({ isOpen, onClose, items, oneTimeTotal, monthlyTotal, currency }: Props) {
  const { t, i18n } = useTranslation('common');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [language, setLanguage] = useState(i18n.language?.slice(0, 2) || 'fr');
  const [langOpen, setLangOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMessage('');
      setEmailError(false);
      setNameError(false);
      setFirstName('');
      setLastName('');
    }
  }, [isOpen]);

  const handleSend = async () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const nameValid = firstName.trim().length >= 2 && lastName.trim().length >= 2;
    if (!emailValid || !nameValid) {
      setEmailError(!emailValid);
      setNameError(!nameValid);
      return;
    }
    setEmailError(false);
    setNameError(false);
    setStatus('sending');
    setErrorMessage('');

    try {
      await sendQuoteRequest({ email, language, firstName, lastName, items, oneTimeTotal, monthlyTotal, currency });
      setStatus('success');
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : t('quote.modal.error'));
      setStatus('error');
    }
  };

  const selectedLang = LANGUAGE_INFO[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl pointer-events-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <h2 className="text-lg font-bold text-white">{t('quote.modal.title')}</h2>
                <button onClick={onClose} className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition">
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                {status === 'sending' ? (
                  <motion.div key="sending" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-white mb-2">{t('quote.modal.sending_title')}</h3>
                    <p className="text-neutral-400 text-sm">{t('quote.modal.sending')}</p>
                  </motion.div>
                ) : status === 'success' ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('quote.modal.success_title')}</h3>
                    <p className="text-neutral-400 text-sm">{t('quote.modal.success_desc')}</p>
                    <p className="text-indigo-400 text-sm mt-1 font-medium">{email}</p>
                    <button onClick={onClose} className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition">
                      {t('quote.modal.close')}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="space-y-5">
                    <p className="text-neutral-400 text-sm">{t('quote.modal.subtitle')}</p>

                    {/* Summary */}
                    <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-4">
                      <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">{t('quote.modal.summary')}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{oneTimeTotal.toLocaleString()}</span>
                        <span className="text-neutral-500">{currency}</span>
                        {monthlyTotal > 0 && (
                          <span className="text-sm text-indigo-400 ml-2">+ {monthlyTotal} {currency}/{t('configurator.month')}</span>
                        )}
                      </div>
                    </div>

                    {/* Name fields */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-neutral-400 mb-2">
                          <User size={13} className="inline mr-1.5" />
                          {t('quote.modal.firstname_label')}
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={e => { setFirstName(e.target.value); setNameError(false); }}
                          placeholder={t('quote.modal.firstname_placeholder')}
                          className={`w-full px-4 py-3 bg-neutral-950/60 border rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none transition ${
                            nameError && firstName.trim().length < 2 ? 'border-red-500/60 bg-red-500/5' : 'border-neutral-800 focus:border-indigo-500/50'
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-2">
                          <User size={13} className="inline mr-1.5" />
                          {t('quote.modal.lastname_label')}
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={e => { setLastName(e.target.value); setNameError(false); }}
                          placeholder={t('quote.modal.lastname_placeholder')}
                          className={`w-full px-4 py-3 bg-neutral-950/60 border rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none transition ${
                            nameError && lastName.trim().length < 2 ? 'border-red-500/60 bg-red-500/5' : 'border-neutral-800 focus:border-indigo-500/50'
                          }`}
                        />
                      </div>
                    </div>
                    {nameError && (
                      <p className="text-red-400 text-xs -mt-2 flex items-center gap-1">
                        <AlertCircle size={12} /> {t('quote.modal.name_invalid')}
                      </p>
                    )}

                    {/* Language selector */}
                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">
                        <Globe size={13} className="inline mr-1.5" />
                        {t('quote.modal.language_label')}
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setLangOpen(o => !o)}
                          className="w-full px-4 py-3 bg-neutral-950/60 border border-neutral-800 rounded-xl text-sm text-white flex items-center justify-between hover:border-neutral-700 transition focus:outline-none focus:border-indigo-500/50"
                        >
                          <span className="flex items-center gap-2">
                            <img src={`https://flagcdn.com/24x18/${selectedLang?.flag}.png`} alt={selectedLang?.name} width="24" height="18" className="rounded-sm" />
                            <span>{selectedLang?.name}</span>
                          </span>
                          <ChevronDown size={16} className={`text-neutral-500 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {langOpen && (
                            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                              className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl overflow-y-auto max-h-52 z-10"
                            >
                              {SORTED_LANGUAGES.map(([code, info]) => (
                                <button key={code} type="button"
                                  onClick={() => { setLanguage(code); setLangOpen(false); }}
                                  className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors hover:bg-neutral-800/50 ${language === code ? 'bg-indigo-500/10 text-indigo-400' : 'text-white'}`}
                                >
                                  <img src={`https://flagcdn.com/24x18/${info.flag}.png`} alt={info.name} width="24" height="18" className="rounded-sm" />
                                  <span>{info.name}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">
                        <Mail size={13} className="inline mr-1.5" />
                        {t('quote.modal.email_label')}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setEmailError(false); setStatus('idle'); }}
                        placeholder={t('quote.modal.email_placeholder')}
                        className={`w-full px-4 py-3 bg-neutral-950/60 border rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none transition ${
                          emailError ? 'border-red-500/60 bg-red-500/5' : 'border-neutral-800 focus:border-indigo-500/50'
                        }`}
                      />
                      {emailError && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {t('quote.modal.email_invalid')}
                        </p>
                      )}
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-red-400 text-sm flex items-center gap-2"
                      >
                        <AlertCircle size={14} /> {errorMessage}
                      </motion.p>
                    )}

                    {/* Submit button */}
                    <motion.button
                      whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                      onClick={handleSend}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20"
                    >
                      <Send size={15} />{t('quote.modal.send')}
                    </motion.button>
                  </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
