import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lightest to-brand-light">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-brand-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-brand-dark hover:text-brand-green transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">Legal notice</h1>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-light shadow-lg space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Legal notice</h2>
            <p className="text-brand-dark/80 leading-relaxed">
            Information pursuant to § 5 TMG (German Telemedia Act)
            kowuma GbR
            Represented by: Shpat Haxhimusa
            Betzdorfer Str. 2
            50667 Cologne
            Germany
            Contact:
            Email: shpath.seeto@hotmail.de
            VAT ID:
            No VAT identification number available.
            Register entry:
            No register entry available.
            Responsible for content according to § 55 (2) RStV:
            Shpat Haxhimusa
            Betzdorfer Str. 2
            50667 Cologne
            </p>
          </div>

          <div>
            <p className="text-sm text-brand-dark/60">
              Last updated: November 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
