import { Cookie, CheckCircle, Settings, BarChart, Shield, Target } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cookie className="w-4 h-4 text-orange-400" />
            Cookie Policy
          </div>
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-400 text-lg">
            How we use cookies and similar technologies on World Cup Planner
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: October 31, 2025
          </p>
        </div>

        {/* What are Cookies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Are Cookies?</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
            </p>
            <p className="text-gray-300">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until they expire or you delete them).
            </p>
          </div>
        </div>

        {/* Types of Cookies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Types of Cookies We Use</h2>
          <div className="space-y-4">
            {/* Essential Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-green-600/20 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Essential Cookies</h3>
                    <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded-full border border-green-700">
                      Always Active
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <div className="bg-gray-800/50 rounded p-3">
                    <p className="text-sm text-gray-400 mb-2"><strong>Examples:</strong></p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Authentication cookies</li>
                      <li>• Session management</li>
                      <li>• Load balancing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Settings className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Functional Cookies</h3>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      Optional
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    These cookies allow us to remember your preferences and provide enhanced, personalized features.
                  </p>
                  <div className="bg-gray-800/50 rounded p-3">
                    <p className="text-sm text-gray-400 mb-2"><strong>Examples:</strong></p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Language preferences</li>
                      <li>• Saved itineraries</li>
                      <li>• Theme settings (light/dark mode)</li>
                      <li>• Recently viewed matches</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-2 rounded-lg">
                  <BarChart className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      Optional
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    These cookies help us understand how visitors interact with our website, allowing us to improve our service.
                  </p>
                  <div className="bg-gray-800/50 rounded p-3">
                    <p className="text-sm text-gray-400 mb-2"><strong>Examples:</strong></p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Google Analytics</li>
                      <li>• Page view tracking</li>
                      <li>• User journey analysis</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-2 rounded-lg">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Marketing Cookies</h3>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      Optional
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">
                    These cookies track your online activity to help us deliver more relevant advertising.
                  </p>
                  <div className="bg-gray-800/50 rounded p-3">
                    <p className="text-sm text-gray-400 mb-2"><strong>Examples:</strong></p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Social media advertising pixels</li>
                      <li>• Retargeting campaigns</li>
                      <li>• Conversion tracking</li>
                      <li>• Ad performance measurement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Third-Party Cookies</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver advertisements, and more.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Google Analytics:</strong> For understanding website traffic and user behavior</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Social Media Platforms:</strong> For social sharing and advertising</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300"><strong>Advertising Partners:</strong> For delivering relevant advertisements</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Control */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Control Cookies</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Using our Cookie Preference Center (accessible through the banner)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Adjusting your browser settings to refuse cookies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Deleting cookies that have already been set</span>
              </li>
            </ul>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
              <p className="text-yellow-400 text-sm">
                <strong>Note:</strong> If you block or delete cookies, some features of our website may not work properly.
              </p>
            </div>
          </div>
        </div>

        {/* Browser Settings */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browser-Specific Instructions</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">To manage cookies in your browser:</p>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li>• <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </div>
        </div>

        {/* Updates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Updates to This Policy</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-800/30">
          <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about our use of cookies, please contact us:
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> <a href="mailto:privacy@worldcupplanner.com" className="text-blue-400 hover:text-blue-300">privacy@worldcupplanner.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

