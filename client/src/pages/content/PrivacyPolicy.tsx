import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const sections = [
    { icon: Shield, key: 'intro' },
    { icon: Database, key: 'data_collection' },
    { icon: Lock, key: 'data_usage' },
    { icon: UserCheck, key: 'data_sharing' },
    { icon: Eye, key: 'cookies' },
    { icon: FileText, key: 'rights' },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                <Shield className="w-8 h-8 text-indigo-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                {t('privacy.title')}
              </h1>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              {t('privacy.subtitle')}
            </p>
            <p className="text-sm text-neutral-500 mt-4">
              {t('privacy.last_update', { date: '23 Février 2026' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map(({ icon: Icon, key }) => (
              <div key={key} className="group">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {t(`privacy.sections.${key}.title`)}
                      </h2>
                      <div className="text-neutral-400 leading-relaxed space-y-4">
                        <p>{t(`privacy.sections.${key}.content`)}</p>
                        {t(`privacy.sections.${key}.details`, { returnObjects: true, defaultValue: [] }) &&
                          Array.isArray(t(`privacy.sections.${key}.details`, { returnObjects: true })) && (
                            <ul className="space-y-2 ml-6">
                              {(t(`privacy.sections.${key}.details`, { returnObjects: true }) as string[]).map((detail: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-indigo-400 mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('privacy.contact.title')}
            </h3>
            <p className="text-neutral-300 mb-6">
              {t('privacy.contact.description')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              {t('privacy.contact.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
