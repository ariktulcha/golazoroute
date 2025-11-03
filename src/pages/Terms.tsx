import { FileText, AlertCircle, CheckCircle, XCircle, Scale } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4 text-purple-400" />
            Terms of Service
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-lg">
            Legal terms and conditions for using World Cup Planner
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: October 31, 2025
          </p>
        </div>

        {/* Agreement Notice */}
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-8 border border-purple-800/30 mb-8">
          <div className="flex items-start gap-4">
            <Scale className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing or using World Cup Planner, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>
          </div>
        </div>

        {/* Use License */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">1. Use License</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily access and use World Cup Planner for personal, non-commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Modify or copy the materials</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Use the materials for any commercial purpose or public display</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Attempt to reverse engineer any software contained on World Cup Planner</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Remove any copyright or proprietary notations from the materials</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Transfer the materials to another person or "mirror" the materials on any other server</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by World Cup Planner at any time.
            </p>
          </div>
        </div>

        {/* User Accounts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">2. User Accounts and Responsibilities</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">When you create an account with us, you agree to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Provide accurate, current, and complete information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Maintain and promptly update your account information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Maintain the security of your password and account</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Accept responsibility for all activities that occur under your account</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Notify us immediately of any unauthorized use of your account</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, not current, or incomplete.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">3. Disclaimer</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-400 text-sm">
                  The materials on World Cup Planner are provided on an 'as is' basis. World Cup Planner makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              World Cup Planner does not warrant or make any representations concerning:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• The accuracy, completeness, or reliability of the materials</li>
              <li>• That the service will be uninterrupted or error-free</li>
              <li>• That defects will be corrected</li>
              <li>• That the website or server is free of viruses or other harmful components</li>
            </ul>
            <p className="text-gray-300 mt-4">
              World Cup Planner is a planning tool and does not sell tickets, accommodations, or travel services. We are not responsible for the availability or accuracy of third-party services.
            </p>
          </div>
        </div>

        {/* Limitations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">4. Limitations of Liability</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              In no event shall World Cup Planner or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on World Cup Planner, even if World Cup Planner or its authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            <p className="text-gray-300">
              Some jurisdictions do not allow limitations on implied warranties or limitations of liability for consequential or incidental damages. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
            </p>
          </div>
        </div>

        {/* Accuracy of Materials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">5. Accuracy of Materials</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              The materials appearing on World Cup Planner could include technical, typographical, or photographic errors. World Cup Planner does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
            <p className="text-gray-300">
              World Cup Planner may make changes to the materials contained on its website at any time without notice. However, World Cup Planner does not make any commitment to update the materials.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">6. Links to Third-Party Sites</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              World Cup Planner has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by World Cup Planner of the site.
            </p>
            <p className="text-gray-300">
              Use of any such linked website is at the user's own risk. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
            </p>
          </div>
        </div>

        {/* Modifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">7. Modifications to Terms</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300">
              World Cup Planner may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service. We will notify users of any material changes by posting a notice on our website or sending an email to registered users.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">8. Governing Law</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which World Cup Planner operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">9. Termination</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Breach of these Terms of Service</li>
              <li>• Fraudulent, abusive, or illegal activity</li>
              <li>• Request by law enforcement or other government agencies</li>
              <li>• Discontinuation or material modification to the service</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Upon termination, your right to use the service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-8 border border-purple-800/30">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> <a href="mailto:legal@worldcupplanner.com" className="text-blue-400 hover:text-blue-300">legal@worldcupplanner.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
