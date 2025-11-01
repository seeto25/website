import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Terms() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">Terms of Service</h1>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-light shadow-lg space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Terms of Service Content</h2>
            <p className="text-brand-dark/80 leading-relaxed">
              This is a placeholder for the Terms of Service content. Please provide the actual terms here.
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
