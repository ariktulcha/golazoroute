import { Link } from 'react-router-dom';
import { Trophy, ArrowLeft } from 'lucide-react';

export default function SimpleHeader() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Trophy className="w-8 h-8 text-fifa-gold-400 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <h1 className="text-xl font-bold text-white">
                <span className="gradient-text">GolazoRoute</span>
              </h1>
              <p className="text-xs text-gray-400">World Cup Travel Optimizer</p>
            </div>
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to App</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

