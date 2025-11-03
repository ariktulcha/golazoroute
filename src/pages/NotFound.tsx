import { Home, Search, Map, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SimpleHeader />
      <div className="max-w-6xl mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center">
          {/* 404 Number with Soccer Ball styling */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              404
            </h1>
            <div className="relative -mt-12">
              <div className="text-6xl">⚽</div>
            </div>
          </div>

          {/* Main message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oops! This Page is Off the Field
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Looks like this page has been sent off with a red card! The page you're looking for doesn't exist or has been moved to another stadium.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Quick links */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Popular Destinations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/app"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors group"
              >
                <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Map className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-sm font-medium">Trip Planner</span>
              </Link>

              <Link
                to="/blog"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors group"
              >
                <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                  <Search className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm font-medium">Blog</span>
              </Link>

              <Link
                to="/cities"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors group"
              >
                <div className="bg-green-600/20 p-3 rounded-lg group-hover:bg-green-600/30 transition-colors">
                  <Map className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-sm font-medium">Cities</span>
              </Link>

              <Link
                to="/stadiums"
                className="flex flex-col items-center gap-2 p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors group"
              >
                <div className="bg-orange-600/20 p-3 rounded-lg group-hover:bg-orange-600/30 transition-colors">
                  <Calendar className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-sm font-medium">Stadiums</span>
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-8 text-gray-500">
            <p>
              Need help?{' '}
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

