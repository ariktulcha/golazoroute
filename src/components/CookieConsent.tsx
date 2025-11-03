import { Cookie, X, Settings, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'world-cup-planner-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'world-cup-planner-cookie-preferences';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Load saved preferences
      const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (saved) {
        setPreferences(JSON.parse(saved));
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 animate-slide-up">
      <div className="max-w-6xl mx-auto bg-gray-900 border border-gray-700 rounded-lg shadow-2xl">
        {!showSettings ? (
          // Simple Banner
          <div className="p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-orange-600/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                  🍪 We Value Your Privacy
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                  <Link to="/cookies" className="text-blue-400 hover:text-blue-300 active:text-blue-200 underline touch-manipulation">
                    Cookie Policy
                  </Link>
                  {' '}and{' '}
                  <Link to="/gdpr" className="text-blue-400 hover:text-blue-300 active:text-blue-200 underline touch-manipulation">
                    GDPR page
                  </Link>
                  .
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-sm font-medium transition-colors touch-manipulation"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white rounded-lg text-sm font-medium transition-colors touch-manipulation"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 border border-gray-600 hover:border-gray-500 active:border-gray-400 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 touch-manipulation"
                  >
                    <Settings className="w-4 h-4" />
                    Customize
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white active:text-gray-300 transition-colors flex-shrink-0 p-1 touch-manipulation"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          // Settings Panel
          <div className="p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 sm:mb-6 sticky top-0 bg-gray-900 pb-2 border-b border-gray-800">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white">Cookie Preferences</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white active:text-gray-300 transition-colors p-1 touch-manipulation"
                aria-label="Close settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {/* Necessary Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                      <h4 className="text-sm sm:text-base font-semibold text-white">Necessary Cookies</h4>
                      <span className="text-[10px] sm:text-xs bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full border border-green-700">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Essential for the website to function. These cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Functional Cookies</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Remember your preferences and personalize your experience.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Analytics Cookies</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Help us understand how you use the website to improve our service.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Marketing Cookies</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Used to deliver personalized advertisements based on your interests.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-sm font-medium transition-colors touch-manipulation"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-600 hover:border-gray-500 active:border-gray-400 text-white rounded-lg text-sm font-medium transition-colors touch-manipulation"
              >
                Accept All
              </button>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-400 mt-3 sm:mt-4 text-center">
              Read more in our{' '}
              <Link to="/cookies" className="text-blue-400 hover:text-blue-300 active:text-blue-200 underline touch-manipulation">
                Cookie Policy
              </Link>
              {' '}and{' '}
              <Link to="/gdpr" className="text-blue-400 hover:text-blue-300 active:text-blue-200 underline touch-manipulation">
                Privacy Rights (GDPR)
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

