import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Terms() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-light shadow-lg space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Terms of Service Content</h2>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">1. Data Controller</h2>
              <div>kowuma GbR</div>
              <div>Represented by: Shpat Haxhimusa</div>
              <div>Betzdorfer Str. 2</div>
              <div>50667 Cologne, Germany</div>
              <div>Email: shpath.seeto@hotmail.de</div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">2. General Information on Data Processing</h2>
              <div>We take the protection of your personal data very seriously. Personal data is only processed to the extent necessary. Processing is based on the General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).</div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">3. Collection and Storage of Personal Data and the Type and Purpose of Use</h2>
        
              <div className="ml-4">
                <h3 className="text-lg font-medium text-brand-dark mb-1">a) When Visiting the Website</h3>
              <div>When you visit our website <a href="https://seeto.onrender.com" className="text-blue-600">https://seeto.onrender.com</a>, technical information (e.g., IP address, time of access, browser type) is automatically collected by the hosting provider. This data is necessary to ensure the functionality and security of the website.
The legal basis is Art. 6 (1) lit. f GDPR (legitimate interest in secure and stable operation).</div>
                
              </div>
        
              <div className="ml-4 mt-3">
                <h3 className="text-lg font-medium text-brand-dark mb-1">b) When registering in the web app</h3>
                <div>When you register in the web app, we collect the following data:</div>
                <div className="ml-4">
                  <div>• Name</div>
                  <div>• Email address</div>
                </div>
                <div>This data is required to grant you access to the platform and its functions (creating carpools, viewing trips, etc.).</div>
                <div>The legal basis is Article 6(1)(b) GDPR (performance of a contract).</div>
              </div>
        
              <div className="ml-4 mt-3">
                <h3 className="text-lg font-medium text-brand-dark mb-1">c) Trip data</h3>
                <div>During use, trip data that you provide yourself (e.g., start time, destination, available seats) is also stored.</div>
                <div>This data is used exclusively for facilitating and managing carpools.</div>
                <div>Legal basis: Article 6(1)(b) GDPR.</div>
              </div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">4. Data Storage and Processing</h2>
              <div>Our data is processed by the following providers:</div>
        
              <div className="ml-4 mt-2">
                <h3 className="text-lg font-medium text-brand-dark mb-1">Render (Web App Hosting)</h3>
                <div>Provider: Render.com, Inc., 111 Sutter Street, Suite 1300, San Francisco, CA 94104, USA</div>
                <div>Render is a data processor within the meaning of Article 28 GDPR.</div>
                <div>Data may be processed in third countries (e.g., the USA). Render is committed to complying with the EU Standard Contractual Clauses.</div>
              </div>
        
              <div className="ml-4 mt-3">
                <h3 className="text-lg font-medium text-brand-dark mb-1">Supabase (Database and Authentication)</h3>
                <div>Provider: Supabase, Inc., 970 Toa Payoh North #07-04, Singapore 318992</div>
                <div>Supabase processes user data to provide database functions.</div>
                <div>Here, too, processing is carried out in accordance with GDPR Standard Contractual Clauses.</div>
              </div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">5. Contacting Us</h2>
              <div>You can contact us by email via the "Contact" button on our website.</div>
              <div>When you contact us, we process the data you provide (e.g., name, email address, message content) solely for the purpose of handling your inquiry.</div>
              <div>The legal basis for this processing is Article 6(1)(a) GDPR (consent) or Article 6(1)(b) GDPR (performance of a contract).</div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">6. Cookies and Tracking</h2>
              <div>Our website does not use its own cookies or tracking tools.</div>
              <div>However, the hosting provider may set technically necessary cookies to ensure the website's functionality.</div>
              <div>These are based on Article 6(1)(f) GDPR (legitimate interest).</div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">7. Data Retention Period</h2>
              <div>Personal data will be deleted as soon as the purpose for which it was processed no longer applies or you withdraw your consent, unless statutory retention periods apply.</div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">8. Your Rights</h2>
              <div>You have the following rights under the GDPR:</div>
              <div className="ml-4">
                <div>• Right of access (Art. 15 GDPR)</div>
                <div>• Right to rectification (Art. 16 GDPR)</div>
                <div>• Right to erasure (Art. 17 GDPR)</div>
                <div>• Right to restriction of processing (Art. 18 GDPR)</div>
                <div>• Right to data portability (Art. 20 GDPR)</div>
                <div>• Right to object to processing (Art. 21 GDPR)</div>
              </div>
              <div>To exercise these rights, you can contact us at any time:</div>
              <div>shpath.seeto@hotmail.de</div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">9. Right to lodge a complaint with a supervisory authority</h2>
              <div>You have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data infringes the GDPR.</div>
              <div>In North Rhine-Westphalia, this is the:</div>
              <div className="ml-4">
                <div>State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia</div>
                <div>Kavalleriestraße 2-4</div>
                <div>40213 Düsseldorf</div>
                <div><a href="https://www.ldi.nrw.de/" className="text-blue-600">https://www.ldi.nrw.de/</a></div>
              </div>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">10. Changes to this Privacy Policy</h2>
              <div>We reserve the right to amend this Privacy Policy to ensure it always complies with current legal requirements or to reflect changes to our services.</div>
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