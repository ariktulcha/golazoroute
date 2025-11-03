import { Users, ArrowRight, Globe, Calendar, MessageCircle, Bell } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function JoinFacebookGroup() {
  const handleJoinGroup = () => {
    // Replace with your actual Facebook group URL
    window.open('https://www.facebook.com/groups/worldcupplanner', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <SimpleHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Join Our Facebook Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with thousands of World Cup fans planning their ultimate journey to the 2026 FIFA World Cup
          </p>
          <button
            onClick={handleJoinGroup}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Join the Group
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 rounded-lg p-3">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Share Travel Tips</h3>
                <p className="text-gray-400">
                  Exchange insider knowledge about accommodations, transportation, and local experiences across North America
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600/20 rounded-lg p-3">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Plan Together</h3>
                <p className="text-gray-400">
                  Coordinate meetups, find travel companions, and plan group activities with fellow fans
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-green-600/20 rounded-lg p-3">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Get Real-Time Updates</h3>
                <p className="text-gray-400">
                  Stay informed about ticket sales, match schedules, and important announcements from the community
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-orange-600/20 rounded-lg p-3">
                <Bell className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Early Access</h3>
                <p className="text-gray-400">
                  Be the first to know about new features, tools, and exclusive content from World Cup Planner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Why Join Our Community?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">5,000+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Community Support</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-400">Daily Discussions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Join?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Connect with passionate World Cup fans, share your plans, and make your 2026 World Cup journey unforgettable
          </p>
          <button
            onClick={handleJoinGroup}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            <Users className="w-5 h-5" />
            Join Our Facebook Group
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            By joining our Facebook group, you agree to follow our community guidelines and respect all members.
            Our group is a safe, inclusive space for all World Cup fans.
          </p>
        </div>
      </div>
    </div>
  );
}

