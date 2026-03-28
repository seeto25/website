import { Car, Users, Leaf, TrendingUp, CreditCard, BarChart3, ChevronLeft, ChevronRight, CheckCircle, Menu, X, Globe, Smartphone } from 'lucide-react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../main';
import { translations } from '../translations';

const LOGO_PATH = '/images/seeto-logo.png';
const BETA_URL = "https://seeto.onrender.com";

export default function Home() {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  const t = translations[language];

  const screenshots = t.screenshots.items.map((item, index) => ({
    title: item.title,
    description: item.description,
    image: [
      '/images/Home-zugeklappt.png',
      '/images/Home.png',
      '/images/Home-Fahrtsuchen.png',
      '/images/stats-fairness.png',
      '/images/stats-dashboard.png',
      '/images/groups.png'
    ][index]
  }));

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const previousScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lightest to-brand-light">
      {ctaVisible && (
        <div className="fixed bottom-1 right-8 z-50 group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCtaVisible(false);
            }}
            className="absolute top-4 right-2.5 bg-white hover:bg-brand-dark text-brand-dark hover:text-white rounded-full p-1 shadow-lg transition-all duration-200 z-10"
            aria-label="Schließen"
          >
            <X className="w-3 h-3" />
          </button>
 
          <div className="flex flex-col items-center scale-75">
<button
  className="relative bg-brand-green hover:bg-brand-dark text-white font-bold transition-all duration-300 hover:scale-105 shadow-2xl border-[12px] border-white px-6 py-5 mb-1"
  style={{
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    minHeight: '90px',
    minWidth: '90px',
  }}
              aria-label="Zur App"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)'
                }}
              ></div>
              <div className="relative flex flex-col items-center justify-center gap-1">
                <span className="text-xl tracking-wide">STARTEN</span>
                <Smartphone className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
              </div>
            </button>

            <div className="w-2.5 bg-brand-dark rounded-sm shadow-lg" style={{ height: '80px' }}>
              <div className="w-full h-1.5 bg-gray-700 rounded-t-sm"></div>
              <div className="w-full h-1.5 bg-gray-600 absolute bottom-0"></div>
            </div>

            <div className="w-12 h-6 bg-gray-500 rounded-b-full shadow-lg border-3 border-gray-600 relative">
              <div className="absolute inset-x-2 top-0.5 h-0.5 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      <nav className="bg-white/80 backdrop-blur-sm border-b border-brand-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
              <img src={LOGO_PATH} alt="Seeto Logo" className="h-10" />
            </button>

            <div className="hidden md:flex items-center gap-4">
              <a href="#features" className="text-brand-dark hover:text-brand-green transition-colors font-medium">{t.nav.features}</a>
              <a href="#how-it-works" className="text-brand-dark hover:text-brand-green transition-colors font-medium">{t.nav.howItWorks}</a>
              <a href="#benefits" className="text-brand-dark hover:text-brand-green transition-colors font-medium">{t.nav.benefits}</a>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-brand-light hover:bg-brand text-brand-dark px-3 py-1.5 rounded-full transition-all duration-200 font-medium"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'EN' : 'DE'}</span>
              </button>
              <button onClick={() => window.location.href = BETA_URL} className="bg-brand-green hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-medium">
                {t.nav.startBeta}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 bg-brand-light hover:bg-brand text-brand-dark px-2.5 py-1.5 rounded-full transition-all duration-200 font-medium text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'EN' : 'DE'}</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-dark hover:text-brand-green transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-dark hover:text-brand-green transition-colors font-medium py-2"
              >
                {t.nav.features}
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-dark hover:text-brand-green transition-colors font-medium py-2"
              >
                {t.nav.howItWorks}
              </a>
              <a
                href="#benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-dark hover:text-brand-green transition-colors font-medium py-2"
              >
                {t.nav.benefits}
              </a>
              <button onClick={() => window.location.href = BETA_URL} className="w-full bg-brand-green hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium">
                {t.nav.startBeta}
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-16 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-block bg-brand-light text-brand-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 md:mb-6 leading-tight">
              {t.hero.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/80 mb-6 md:mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex gap-4">
              <button onClick={() => window.location.href = BETA_URL} className="bg-white hover:bg-brand-light text-brand-dark px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 border-2 border-brand-light hover:border-brand-green hover:-translate-y-0.5 font-semibold text-base md:text-lg">
                {t.hero.ctaButton}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-brand-light">
              <div className="flex items-center gap-3 mb-6 md:mb-2">
                <img src={LOGO_PATH} alt="Seeto Logo" className="h-10" />
              </div>
              <div className="space-y-6">
                <div className="bg-brand-lightest rounded-xl p-4 md:p-6 border border-brand-light">
                  <div className="text-sm text-brand-green font-semibold mb-2">{t.hero.nextTrip}</div>
                  <div className="text-xl md:text-2xl font-bold text-brand-dark mb-1">
                      Düsseldorf Hbf → <br />
                      TH Köln Campus Deutz
                    </div>
                  <div className="flex items-center gap-1.5 md:gap-2 mt-4 flex-wrap">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 border-2 border-brand-dark rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 border-2 border-brand-dark rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green border-2 border-brand-dark rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green border-2 border-brand-dark rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green border-2 border-brand-dark rounded"></div>
                    <span className="text-brand-dark ml-2 font-medium text-sm md:text-base">
                      3 {t.hero.seatsAvailable}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-24 border-y border-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">{t.features.title}</h2>
            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{t.features.creditSystem.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                {t.features.creditSystem.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{t.features.saveMoney.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                {t.features.saveMoney.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{t.features.reduceEmissions.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                {t.features.reduceEmissions.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{t.features.buildCommunity.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                {t.features.buildCommunity.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{t.features.trackProgress.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                {t.features.trackProgress.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{t.features.noCar.title}</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                {t.features.noCar.description}
              </p>
            </div>
          </div>
            <div className="flex justify-center">
            <button onClick={() => window.location.href = BETA_URL} className="mt-8 bg-brand-green hover:bg-brand-dark text-white px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 font-semibold text-lg">
              {t.nav.startBeta}
            </button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-gradient-to-b from-brand-lightest to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">{t.howItWorks.title}</h2>
            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{t.howItWorks.step1.title}</h3>
              <p className="text-brand-dark/80">
                {t.howItWorks.step1.description}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{t.howItWorks.step2.title}</h3>
              <p className="text-brand-dark/80">
                {t.howItWorks.step2.description}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{t.howItWorks.step3.title}</h3>
              <p className="text-brand-dark/80">
                {t.howItWorks.step3.description}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{t.howItWorks.step4.title}</h3>
              <p className="text-brand-dark/80">
                {t.howItWorks.step4.description}
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-brand-light">
              <div className="relative">
                <div className="aspect-video white rounded-xl overflow-hidden">
                  <img
                    src={screenshots[currentScreenshot].image}
                    alt={screenshots[currentScreenshot].title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <button
                  onClick={previousScreenshot}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextScreenshot}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  {screenshots[currentScreenshot].title}
                </h3>
                <p className="text-brand-dark/80 mb-4">
                  {screenshots[currentScreenshot].description}
                </p>

                <div className="flex justify-center gap-2">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentScreenshot
                          ? 'bg-brand-green w-8'
                          : 'bg-brand-light hover:bg-brand-green/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-gradient-to-br from-brand-light via-brand-lightest to-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-brand-dark">{t.benefits.title}</h2>
              <p className="text-xl text-brand-dark/80 mb-8 leading-relaxed">
                {t.benefits.subtitle}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1 text-brand-dark">{t.benefits.corporate.title}</div>
                    <div className="text-brand-dark/70">{t.benefits.corporate.description}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1 text-brand-dark">{t.benefits.sports.title}</div>
                    <div className="text-brand-dark/70">{t.benefits.sports.description}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1 text-brand-dark">{t.benefits.universities.title}</div>
                    <div className="text-brand-dark/70">{t.benefits.universities.description}</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-light shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-dark">{t.benefits.stats.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">2026</div>
                  <div className="text-brand-dark/70">{t.benefits.stats.launchYear}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">100%</div>
                  <div className="text-brand-dark/70">{t.benefits.stats.fairSharing}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">0%</div>
                  <div className="text-brand-dark/70">{t.benefits.stats.hiddenFees}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">1</div>
                  <div className="text-brand-dark/70">{t.benefits.stats.mission}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-brand-lightest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-6">{t.cta.title}</h2>
          <p className="text-xl text-brand-dark/80 mb-10">
            {t.cta.subtitle}
          </p>
          <div className="flex justify-center">
            <button onClick={() => window.location.href = BETA_URL} className="bg-brand-green hover:bg-brand-dark text-white px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 font-semibold text-lg">
              {t.cta.button}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-brand-dark text-white py-12 border-t border-brand-dark/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_PATH}
                alt="Seeto Logo"
                className="h-8 p-1 bg-white rounded-md"
              />
              <p className="text-brand-light text-sm">
                {t.footer.tagline}
                </p>
            </div>
            <div className="flex gap-6 text-brand-light text-sm">
              <button onClick={() => navigate('/legalnotice')} className="hover:text-white transition-colors cursor-pointer">{t.footer.legal}</button>
              <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors cursor-pointer">{t.footer.privacy}</button>
              <a href="mailto:seeto@kowuma.de?subject=Kontakt%20über%20Website%20-%20%5BZweck%5D" className="hover:text-white transition-colors">{t.footer.contact}</a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-center text-brand-light text-sm">
            © 2026 Seeto. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
