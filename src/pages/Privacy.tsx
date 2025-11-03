import { Shield, Lock, Eye, Database, Users, Mail, AlertCircle } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            Privacy Policy
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">
            How World Cup Planner collects, uses, and protects your personal information
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: October 31, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-blue-800/30 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Commitment to Privacy</h2>
              <p className="text-gray-300">
                At World Cup Planner, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this policy carefully.
              </p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" />
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              <p className="text-gray-300 mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Register for an account</li>
                <li>• Contact us with questions or feedback</li>
                <li>• Subscribe to our newsletter</li>
                <li>• Save travel itineraries and preferences</li>
                <li>• Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-300 mt-3">
                This may include: name, email address, phone number, travel preferences, and payment information.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">Automatically Collected Information</h3>
              <p className="text-gray-300 mb-3">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Browser type and version</li>
                <li>• IP address and general location</li>
                <li>• Pages visited and time spent</li>
                <li>• Referring website</li>
                <li>• Device type and operating system</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-3">Cookies and Tracking Technologies</h3>
              <p className="text-gray-300">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                You can manage your cookie preferences at any time. For more information, see our{' '}
                <a href="/cookies" className="text-blue-400 hover:text-blue-300 underline">Cookie Policy</a>.
              </p>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Eye className="w-6 h-6 text-purple-400" />
            How We Use Your Information
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Provide, operate, and maintain our website and services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Improve and personalize your experience</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Understand and analyze how you use our website</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Develop new products, services, and features</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Communicate with you about updates, offers, and promotions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Process transactions and send related information</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Detect, prevent, and address technical issues and fraud</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Comply with legal obligations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-400" />
            How We Share Your Information
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 mb-4">We may share your information in the following situations:</p>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold text-white mb-1">Service Providers</h4>
                <p className="text-gray-400 text-sm">
                  We share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-white mb-1">Business Transfers</h4>
                <p className="text-gray-400 text-sm">
                  If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-white mb-1">Legal Requirements</h4>
                <p className="text-gray-400 text-sm">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-white mb-1">With Your Consent</h4>
                <p className="text-gray-400 text-sm">
                  We may share your information with third parties when you give us explicit consent to do so.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lock className="w-6 h-6 text-yellow-400" />
            Data Security
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Encryption of data in transit and at rest</li>
              <li>• Regular security assessments and updates</li>
              <li>• Access controls and authentication</li>
              <li>• Employee training on data protection</li>
              <li>• Incident response procedures</li>
            </ul>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mt-4">
              <p className="text-yellow-400 text-sm flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Privacy Rights</h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="space-y-2 text-gray-400">
              <li>• Access and receive a copy of your personal data</li>
              <li>• Correct or update your personal information</li>
              <li>• Request deletion of your personal data</li>
              <li>• Object to or restrict processing of your data</li>
              <li>• Data portability</li>
              <li>• Withdraw consent at any time</li>
              <li>• Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-300 mt-4">
              For more information about your rights under GDPR, please see our{' '}
              <a href="/gdpr" className="text-blue-400 hover:text-blue-300 underline">GDPR page</a>.
            </p>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Children's Privacy</h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
            </p>
          </div>
        </div>

        {/* Changes to Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Changes to This Privacy Policy</h2>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-800/30">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-400" />
            Contact Us
          </h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="space-y-2">
            <p className="text-gray-300">
              <strong>Email:</strong> <a href="mailto:privacy@worldcupplanner.com" className="text-blue-400 hover:text-blue-300">privacy@worldcupplanner.com</a>
            </p>
            <p className="text-gray-300">
              <strong>Data Protection Officer:</strong> <a href="mailto:dpo@worldcupplanner.com" className="text-blue-400 hover:text-blue-300">dpo@worldcupplanner.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
