import { TravelSegment } from '../data/types';
import { Plane, Car, Clock, DollarSign, Navigation, Globe, Sunrise } from 'lucide-react';

interface TravelSegmentCardProps {
  segment: TravelSegment;
  showConnector?: boolean;
}

export default function TravelSegmentCard({ segment, showConnector = true }: TravelSegmentCardProps) {
  const ModeIcon = segment.mode === 'flight' ? Plane : Car;
  
  return (
    <div className="relative">
      {showConnector && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-0.5 h-6 bg-gradient-to-b from-gray-700 to-fifa-blue-500"></div>
      )}
      
      <div className="glass-dark rounded-xl p-4 sm:p-5 border border-fifa-blue-500/30 bg-gradient-to-br from-fifa-blue-950/30 to-gray-900/30">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${
              segment.mode === 'flight' 
                ? 'bg-fifa-blue-500/20 text-fifa-blue-400' 
                : 'bg-purple-500/20 text-purple-400'
            }`}>
              <ModeIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white capitalize">
                {segment.mode === 'flight' ? 'Flight' : 'Drive'}
              </div>
              <div className="text-sm text-gray-400">
                {segment.from.name} → {segment.to.name}
              </div>
            </div>
          </div>
          
          {segment.crossBorder && (
            <div className="badge-info flex items-center gap-1 text-xs">
              <Globe className="w-3 h-3" />
              Border
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-400">Distance</div>
              <div className="text-sm font-semibold text-white">
                {segment.distance.toFixed(0)} mi
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-400">Duration</div>
              <div className="text-sm font-semibold text-white">
                {segment.durationHours}h
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-400">Cost</div>
              <div className="text-sm font-semibold text-white">
                ${segment.estimatedCost}
              </div>
            </div>
          </div>
        </div>

        {segment.timezoneDelta !== 0 && (
          <div className="mt-3 pt-3 border-t border-gray-700/50 flex items-center gap-2 text-xs text-gray-400">
            <Sunrise className="w-3.5 h-3.5" />
            <span>
              Timezone: {segment.timezoneDelta > 0 ? '+' : ''}{segment.timezoneDelta}h
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

