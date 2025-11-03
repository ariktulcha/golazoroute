import { Heart, Plane, MapPin, Users, Trophy, Sparkles, Globe } from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fifa-blue-600 to-fifa-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Born from Passion,{' '}
            <span className="bg-gradient-to-r from-fifa-blue-400 to-fifa-gold-400 bg-clip-text text-transparent">
              Built for Fans
            </span>
          </h1>
        </div>

        {/* Main Story Section */}
        <div className="space-y-12">
          {/* The Love for Football */}
          <div className="bg-gradient-to-br from-fifa-blue-900/20 to-gray-900/20 rounded-xl p-8 border border-fifa-blue-800/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fifa-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-fifa-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">A Lifelong Love for Football</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Football has been my passion for as long as I can remember. Every year, I travel to countless matches, 
                  experiencing the electric atmosphere of stadiums filled with fans united by their love for the beautiful game.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Each trip is an adventure—not just the matches themselves, but the entire journey. The planning, 
                  the logistics, the challenge of coordinating multiple cities and matches. For me, that's part of the thrill. 
                  I've always loved the puzzle of it all.
                </p>
              </div>
            </div>
          </div>

          {/* The Challenge */}
          <div className="bg-gradient-to-br from-orange-900/20 to-gray-900/20 rounded-xl p-8 border border-orange-800/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Russia 2018 Turning Point</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  But Russia 2018 was different. That's when I truly understood just how crucial proper planning is. 
                  The vast distances between cities, the tight schedule, the complexity of coordinating flights, trains, 
                  and accommodations across 11 time zones—it was overwhelming.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I found myself juggling spreadsheets, maps, timetables, and booking confirmations. What should have 
                  been pure excitement often felt like a logistical nightmare. I watched fellow fans miss matches, 
                  waste hours in transit, or pay premium prices because they couldn't optimize their routes.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  That experience was my wake-up call. I realized that while I loved the challenge, most fans just 
                  wanted to enjoy football without the stress. There had to be a better way.
                </p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-fifa-gold-900/20 to-gray-900/20 rounded-xl p-8 border border-fifa-gold-800/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fifa-gold-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-fifa-gold-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Building a Solution</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  That's why I created FIFA 26 Navigator. This platform was built out of pure love for football 
                  and a deep understanding of what fans need. I wanted to take everything I learned from years 
                  of traveling to matches and turn it into a tool that makes World Cup planning effortless.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Every feature—the trip optimizer, the budget planner, the transportation hub—was designed 
                  with real fans in mind. Fans who want to maximize their World Cup experience, see as many 
                  matches as possible, and spend their time celebrating football, not stressing over logistics.
                </p>
              </div>
            </div>
          </div>

          {/* The Mission */}
          <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 rounded-xl p-8 border border-purple-800/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Football Connects Us All</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Football is more than just a sport. It's a universal language that transcends borders, cultures, 
                  and backgrounds. I've made friends from every corner of the globe in stadium stands, shared moments 
                  of joy and heartbreak with complete strangers who became lifelong companions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nothing connects people quite like football. The World Cup is the ultimate celebration of this 
                  connection—195 nations coming together, billions of people united in their passion. This platform 
                  is my contribution to that beautiful tradition. It's for every fan who dreams of experiencing 
                  the World Cup, who wants to be part of something bigger than themselves.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-fifa-blue-600/20 via-purple-600/20 to-fifa-gold-600/20 rounded-xl p-10 border border-fifa-blue-500/30 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-fifa-gold-400" />
            <h2 className="text-3xl font-bold mb-4">
              Let's Make Your World Cup Dream Come True
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're following your national team or just love the beautiful game, I've built this for you. 
              Let's turn the complexity of World Cup planning into an adventure worth celebrating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-gradient-to-r from-fifa-blue-600 to-fifa-blue-700 hover:from-fifa-blue-700 hover:to-fifa-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Start Planning Your Trip
              </a>
              <a
                href="/contact"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Join Our Community
              </a>
            </div>
          </div>

          {/* Personal Note */}
          <div className="text-center py-8">
            <p className="text-gray-400 italic text-lg">
              "The World Cup isn't just about who wins the trophy—it's about the journey, 
              the people you meet, and the memories you create along the way."
            </p>
            <p className="text-fifa-gold-400 font-semibold mt-4">
              — A Fellow Football Fan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

