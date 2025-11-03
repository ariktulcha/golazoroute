import { Link } from 'react-router-dom';
import { Mail, Shield, Cookie, FileText, Info, BookOpen, Users, Heart, Coffee, Rocket, Youtube, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black border-t border-gray-800/50 mt-16 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fifa-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fifa-gold-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-fifa-blue-400 via-green-400 to-fifa-gold-400 bg-clip-text text-transparent">
                About
              </span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your ultimate companion for planning the perfect World Cup experience across{' '}
              <span className="text-blue-400 font-semibold">USA</span>,{' '}
              <span className="text-green-400 font-semibold">Mexico</span>, and{' '}
              <span className="text-red-400 font-semibold">Canada</span>.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fifa-blue-500/10 to-fifa-gold-500/10 border border-fifa-blue-500/30 hover:border-fifa-gold-500/50 text-fifa-blue-300 hover:text-fifa-gold-300 text-sm font-medium transition-all duration-300 group"
            >
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Learn More
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-fifa-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/sponsor"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <Heart className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                  <span>Be Our Sponsor</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <Coffee className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>Buy Us a Coffee</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <BookOpen className="w-4 h-4 text-fifa-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Our Story</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <Rocket className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>Roadmap</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-fifa-gold-400 to-red-400 bg-clip-text text-transparent">
                Legal
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <Shield className="w-4 h-4 text-fifa-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <FileText className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/gdpr"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <Shield className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>GDPR</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-300 hover:text-fifa-gold-300 text-sm flex items-center gap-2 transition-all duration-300 group"
                >
                  <Cookie className="w-4 h-4 text-fifa-gold-400 group-hover:scale-110 transition-transform" />
                  <span>Cookie Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-fifa-gold-400 via-red-400 to-fifa-blue-400 bg-clip-text text-transparent">
                Stay Connected
              </span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Get the latest updates on World Cup planning tools and features.
            </p>
            
            {/* Follow Us Section */}
            <div className="space-y-3 mb-4">
              <h4 className="text-sm font-semibold text-gray-200">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.youtube.com/@GolazoRoute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 hover:border-red-400/50 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all duration-300 group"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.facebook.com/GolazoRoute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300 group"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/company/golazoroute/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-600/30 hover:border-blue-500/50 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 transition-all duration-300 group"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                to="/join-facebook-group"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 hover:border-purple-500/50 text-fifa-blue-300 hover:text-purple-300 text-sm font-medium transition-all duration-300 group w-full sm:w-auto"
              >
                <Users className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm">Join Our Facebook Group</span>
              </Link>
              <a
                href="mailto:info@worldcupplanner.com"
                className="flex items-center gap-2 text-gray-300 hover:text-fifa-gold-300 text-sm transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-fifa-gold-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm break-all">info@worldcupplanner.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gradient-to-r from-fifa-blue-500/20 via-purple-500/20 to-fifa-gold-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-xs sm:text-sm font-medium mb-2">
                © {currentYear} World Cup Planner. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Made with <span className="text-red-400">❤️</span> for football fans worldwide
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-fifa-blue-300 text-xs sm:text-sm transition-all duration-300 font-medium hover:scale-105"
              >
                Privacy
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-green-300 text-xs sm:text-sm transition-all duration-300 font-medium hover:scale-105"
              >
                Terms
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/cookies" 
                className="text-gray-400 hover:text-fifa-gold-300 text-xs sm:text-sm transition-all duration-300 font-medium hover:scale-105"
              >
                Cookies
              </Link>
              <span className="text-gray-700">•</span>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-purple-300 text-xs sm:text-sm transition-all duration-300 font-medium hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

