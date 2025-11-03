import { useState } from 'react';
import { Save, Trash2, Calendar, FileJson } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import {
  getSavedTrips,
  saveTrip,
  deleteTrip,
  downloadTrip,
  type SavedTrip,
} from '../utils/tripStorage';

export default function SavedTrips() {
  const [trips, setTrips] = useState<SavedTrip[]>(getSavedTrips());
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [tripName, setTripName] = useState('');
  const { selectedMatches, clearMatches } = useAppStore();

  const handleSaveTrip = () => {
    if (!tripName.trim() || selectedMatches.length === 0) return;
    
    const trip = saveTrip(tripName, selectedMatches);
    setTrips(getSavedTrips());
    setTripName('');
    setShowSaveDialog(false);
    
    alert(`Trip "${trip.name}" saved successfully!`);
  };

  const handleLoadTrip = (trip: SavedTrip) => {
    clearMatches();
    trip.matches.forEach(match => {
      useAppStore.getState().addMatch(match);
    });
    alert(`Loaded trip "${trip.name}" with ${trip.matches.length} matches`);
  };

  const handleDeleteTrip = (id: string, name: string) => {
    if (confirm(`Delete trip "${name}"?`)) {
      deleteTrip(id);
      setTrips(getSavedTrips());
    }
  };

  const handleDownload = (trip: SavedTrip, format: 'json' | 'ical') => {
    downloadTrip(trip, format);
  };

  return (
    <div className="space-y-4">
      {/* Save Current Trip Button */}
      {selectedMatches.length > 0 && (
        <div className="bg-fifa-blue/20 border border-fifa-blue rounded-lg p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 flex items-center gap-2">
            <Save className="w-4 h-4 sm:w-5 sm:h-5" />
            Save Current Trip
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
            You have {selectedMatches.length} matches selected
          </p>
          
          {showSaveDialog ? (
            <div className="space-y-2 sm:space-y-3">
              <input
                type="text"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                placeholder="Enter trip name..."
                className="input-field text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSaveTrip()}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveTrip}
                  disabled={!tripName.trim()}
                  className="flex-1 bg-fifa-blue hover:bg-blue-700 active:bg-blue-700 disabled:bg-gray-600 text-white py-2.5 sm:py-2 rounded font-semibold transition-colors touch-manipulation text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowSaveDialog(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 active:bg-gray-600 text-white py-2.5 sm:py-2 rounded font-semibold transition-colors touch-manipulation text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowSaveDialog(true)}
              className="w-full bg-fifa-blue hover:bg-blue-700 active:bg-blue-700 text-white py-2.5 sm:py-2 rounded font-semibold transition-colors touch-manipulation text-sm"
            >
              Save Trip
            </button>
          )}
        </div>
      )}

      {/* Saved Trips List */}
      {trips.length > 0 && (
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold">Saved Trips ({trips.length})</h3>
          
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-white truncate">{trip.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {trip.matches.length} matches • Created{' '}
                    {new Date(trip.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-2 sm:mt-3">
                <button
                  onClick={() => handleLoadTrip(trip)}
                  className="flex-1 sm:flex-initial bg-fifa-blue hover:bg-blue-700 active:bg-blue-700 text-white text-xs sm:text-sm py-2.5 sm:py-2 px-3 sm:px-4 rounded font-semibold transition-colors touch-manipulation min-w-[80px]"
                >
                  Load
                </button>
                <button
                  onClick={() => handleDownload(trip, 'ical')}
                  className="bg-green-600 hover:bg-green-700 active:bg-green-700 text-white text-sm py-2.5 sm:py-2 px-3 rounded transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Download as Calendar"
                  aria-label="Download as Calendar"
                >
                  <Calendar className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDownload(trip, 'json')}
                  className="bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white text-sm py-2.5 sm:py-2 px-3 rounded transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Download as JSON"
                  aria-label="Download as JSON"
                >
                  <FileJson className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteTrip(trip.id, trip.name)}
                  className="bg-red-600 hover:bg-red-700 active:bg-red-700 text-white text-sm py-2.5 sm:py-2 px-3 rounded transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                  title="Delete Trip"
                  aria-label="Delete Trip"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {trips.length === 0 && selectedMatches.length === 0 && (
        <div className="text-center py-6 sm:py-8 text-gray-400">
          <Save className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 opacity-50" />
          <p className="text-sm sm:text-base">No saved trips yet</p>
          <p className="text-xs sm:text-sm mt-1">Select matches and save your trip to get started</p>
        </div>
      )}
    </div>
  );
}

