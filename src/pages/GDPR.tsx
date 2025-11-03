import { Shield, CheckCircle, Info, Lock, Eye, Trash2, Download, AlertCircle } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function GDPR() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            GDPR Compliance
          </div>
          <h1 className="text-4xl font-bold mb-4">General Data Protection Regulation</h1>
          <p className="text-gray-400 text-lg">
            Your privacy and data protection rights under the GDPR
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: October 31, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-800/30 mb-8">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Commitment to GDPR</h2>
              <p className="text-gray-300">
                World Cup Planner is committed to protecting and respecting your privacy in accordance with the General Data Protection Regulation (GDPR). This page outlines your rights and how we comply with GDPR requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your GDPR Rights</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <Eye className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Right to Access</h3>
                  <p className="text-gray-400">
                    You have the right to request copies of your personal data. We may charge a small fee for this service.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Right to Rectification</h3>
                  <p className="text-gray-400">
                    You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-2 rounded-lg">
                  <Trash2 className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Right to Erasure</h3>
                  <p className="text-gray-400">
                    You have the right to request that we erase your personal data, under certain conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Right to Restrict Processing</h3>
                  <p className="text-gray-400">
                    You have the right to request that we restrict the processing of your personal data, under certain conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600/20 p-2 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Right to Object</h3>
                  <p className="text-gray-400">
                    You have the right to object to our processing of your personal data, under certain conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600/20 p-2 rounded-lg">
                  <Download className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Right to Data Portability</h3>
                  <p className="text-gray-400">
                    You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data We Collect */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Data We Collect</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Personal identification information (Name, email address, phone number, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Usage data (pages visited, time spent, features used)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Travel preferences and saved itineraries</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Cookie and tracking data</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Basis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Legal Basis for Processing</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              We process your personal data under the following legal bases:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Contract:</strong> Processing is necessary for a contract we have with you</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Legal obligation:</strong> Processing is necessary to comply with the law</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Legitimate interests:</strong> Processing is necessary for our legitimate interests or the legitimate interests of a third party</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Data Retention */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Data Retention</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300">
              We only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p className="text-gray-300 mt-4">
              When determining the appropriate retention period, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your data, and applicable legal requirements.
            </p>
          </div>
        </div>

        {/* International Transfers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">International Data Transfers</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.
            </p>
            <p className="text-gray-300 mt-4">
              We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and GDPR requirements.
            </p>
          </div>
        </div>

        {/* Exercise Your Rights */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-800/30">
          <h2 className="text-2xl font-bold mb-4">How to Exercise Your Rights</h2>
          <p className="text-gray-300 mb-6">
            If you wish to exercise any of your GDPR rights, please contact us at:
          </p>
          <div className="space-y-2">
            <p className="text-gray-300">
              <strong>Email:</strong> <a href="mailto:privacy@worldcupplanner.com" className="text-blue-400 hover:text-blue-300">privacy@worldcupplanner.com</a>
            </p>
            <p className="text-gray-300">
              <strong>Data Protection Officer:</strong> <a href="mailto:dpo@worldcupplanner.com" className="text-blue-400 hover:text-blue-300">dpo@worldcupplanner.com</a>
            </p>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            We will respond to your request within 30 days. If you are not satisfied with our response, you have the right to lodge a complaint with your local supervisory authority.
          </p>
        </div>
      </div>
    </div>
  );
}

