import { Car, Users, Leaf, TrendingDown, CreditCard, BarChart3, ChevronLeft, ChevronRight, CheckCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const LOGO_PATH = '/images/seeto-logo.png';
const BETA_URL = "https://seeto.onrender.com";

function App() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const screenshots = [
    {
      title: 'Home',
      description: 'View all upcoming trips, and recent activity at a glance',
      image: 'images/Home-zugeklappt.png'
    },
    {
      title: 'Create a Trip',
      description: 'Easily schedule new rides with destination, time, and available seats',
      image: 'images/Home.png'
    },
    {
      title: 'Browse Available Rides',
      description: 'Find and join rides that match your schedule and route',
      image: 'images/Home-Fahrtsuchen.png'
    },
    {
      title: 'Credits & Statistics',
      description: 'Track your earned and spent credits',
      image: 'images/stats-fairness.png'
    },
      {
    title: 'Statistics & Impact',
    description: 'View your environmental impact and savings over time',
    image: '/images/stats-dashboard.jpg'
  },
    {
      title: 'Group Management',
      description: 'Manage your team members, view group statistics, and invite new participants',
      image: 'images/groups.png'
    }
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const previousScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lightest to-brand-light">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-brand-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
              <img src={LOGO_PATH} alt="Seeto Logo" className="h-10" />
            </button>

            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-brand-dark hover:text-brand-green transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-brand-dark hover:text-brand-green transition-colors font-medium">How It Works</a>
              <a href="#benefits" className="text-brand-dark hover:text-brand-green transition-colors font-medium">Benefits</a>
              <button onClick={() => window.location.href = BETA_URL} className="bg-brand-green hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-medium">
                Start Free (Beta Version)
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-brand-dark hover:text-brand-green transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-dark hover:text-brand-green transition-colors font-medium py-2"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-dark hover:text-brand-green transition-colors font-medium py-2"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-dark hover:text-brand-green transition-colors font-medium py-2"
              >
                Benefits
              </a>
              <button onClick={() => window.location.href = BETA_URL} className="w-full bg-brand-green hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium">
                Start Free (Beta Version)
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-16 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-block bg-brand-light text-brand-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              Fair Carpooling Made Simple
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-4 md:mb-6 leading-tight">
              Share Rides.<br />Save Money.<br />Save the Planet.
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/80 mb-6 md:mb-8 leading-relaxed">
              Seeto revolutionizes carpooling with an innovative credit system. Drive together, earn credits, and make every journey count for your team, sports club, or organization.
            </p>
            <div className="flex gap-4">
              <button onClick={() => window.location.href = BETA_URL} className="bg-white hover:bg-brand-light text-brand-dark px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 border-2 border-brand-light hover:border-brand-green hover:-translate-y-0.5 font-semibold text-base md:text-lg">
                Start Free Beta Version
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
                  <div className="text-sm text-brand-green font-semibold mb-2">Next Trip</div>
                  <div className="text-xl md:text-2xl font-bold text-brand-dark mb-1">
                      Düsseldorf Hbf → <br />
                      TH Köln Campus Deutz
                    </div>
                  <div className="text-sm md:text-base text-brand-dark/80">Monday, 9:00 AM</div>
                  <div className="flex items-center gap-1.5 md:gap-2 mt-4 flex-wrap">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-gray-300 rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-gray-300 rounded"></div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-gray-300 rounded"></div>
                    <span className="text-brand-dark ml-2 font-medium text-sm md:text-base">3 seats available</span>
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
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Why Choose Seeto?</h2>
            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
              Our innovative platform makes carpooling fair, efficient, and rewarding for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Credit System</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                Earn credits by driving others. Use credits to ride along. Everyone takes turns driving, making it completely fair and balanced.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Save Money</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                No money changes hands. Share fuel costs through driving turns. Maximize vehicle capacity and minimize individual expenses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Reduce Emissions</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                Fewer cars on the road means lower CO2 emissions. Make a real environmental impact while building community connections.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Build Community</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                Connect with colleagues and teammates during commutes. Transform travel time into valuable networking and bonding opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Track Progress</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                Monitor your trips, credits, and environmental impact. See how much money and CO2 your group saves over time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-lightest to-brand-light rounded-2xl p-8 border border-brand-light hover:border-brand-green hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-brand-green w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">No Car? No Problem</h3>
              <p className="text-brand-dark/80 leading-relaxed">
                Students and non-car owners can purchase credits to participate. Everyone's included in the sustainable mobility solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-gradient-to-b from-brand-lightest to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">How It Works</h2>
            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
              Getting started with Seeto is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Create Group</h3>
              <p className="text-brand-dark/80">
                Set up your organization, team, or club group in minutes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Plan Trips</h3>
              <p className="text-brand-dark/80">
                Schedule rides with destination, time, and available seats
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Earn Credits</h3>
              <p className="text-brand-dark/80">
                Drive others and accumulate credits automatically
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Use Credits</h3>
              <p className="text-brand-dark/80">
                Spend credits to join rides offered by other members
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-brand-light">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-brand-lightest to-brand-light rounded-xl overflow-hidden">
                  <img
                    src={screenshots[currentScreenshot].image}
                    alt={screenshots[currentScreenshot].title}
                    className="w-full h-full object-cover"
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
              <h2 className="text-4xl font-bold mb-6 text-brand-dark">Perfect for Organizations & Teams</h2>
              <p className="text-xl text-brand-dark/80 mb-8 leading-relaxed">
                Whether you're a company looking to reduce parking costs and environmental impact, or a sports team traveling to matches, Seeto provides the perfect solution for organized group transportation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1 text-brand-dark">Corporate Teams</div>
                    <div className="text-brand-dark/70">Reduce parking needs and commute costs</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1 text-brand-dark">Sports Clubs</div>
                    <div className="text-brand-dark/70">Coordinate team travel to games and practices</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-green rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1 text-brand-dark">Universities</div>
                    <div className="text-brand-dark/70">Enable students to share rides affordably</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-light shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-brand-dark">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">2025</div>
                  <div className="text-brand-dark/70">Launch Year</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">100%</div>
                  <div className="text-brand-dark/70">Fair Ride Sharing</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">0%</div>
                  <div className="text-brand-dark/70">Hidden Fees</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-green mb-2">1</div>
                  <div className="text-brand-dark/70">Mission: Moving Together, Fairly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-brand-lightest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-6">Ready to Transform Your Commute?</h2>
          <p className="text-xl text-brand-dark/80 mb-10">
            Join thousands of organizations already saving money and reducing their environmental impact with Seeto
          </p>
          <div className="flex justify-center">
            <button onClick={() => window.location.href = BETA_URL} className="bg-brand-green hover:bg-brand-dark text-white px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 font-semibold text-lg">
              Start Free Beta Version
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-brand-dark text-white py-12 border-t border-brand-dark/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={LOGO_PATH} alt="Seeto Logo" className="h-8" />
              <p className="text-brand-light text-sm">
                Fair carpooling for teams and organizations
              </p>
            </div>
            <div className="flex gap-6 text-brand-light text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
              <a href="mailto:shpath.seeto@hotmail.com?subject=Kontakt%20über%20Website%20-%20%5BZweck%5D" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-center text-brand-light text-sm">
            © 2025 Seeto. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
