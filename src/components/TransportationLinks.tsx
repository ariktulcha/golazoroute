import { TravelSegment } from '../data/types';
import { Plane, Car, Train, ExternalLink } from 'lucide-react';

interface TransportationLinksProps {
  segment: TravelSegment;
  date: string; // Departure date
}

export default function TransportationLinks({ segment, date }: TransportationLinksProps) {
  const { from, to, mode } = segment;
  
  // Generate search URLs
  const getFlightSearchUrl = () => {
    const fromCode = from.airportCode;
    const toCode = to.airportCode;
    const dateFormatted = date.replace(/-/g, ''); // YYYYMMDD format
    return `https://www.google.com/travel/flights?q=flights%20from%20${fromCode}%20to%20${toCode}%20on%20${dateFormatted}`;
  };

  const getCarRentalUrl = () => {
    return `https://www.rentalcars.com/SearchResults.do?cityName=${encodeURIComponent(from.name)}&dropCity=${encodeURIComponent(to.name)}`;
  };

  const getRome2RioUrl = () => {
    return `https://www.rome2rio.com/map/${encodeURIComponent(from.name)}/${encodeURIComponent(to.name)}`;
  };

  const getTrainUrl = () => {
    return `https://www.amtrak.com/home.html`; // Generic Amtrak link
  };

  const links = [
    ...(mode === 'flight' ? [{
      label: 'Search Flights',
      url: getFlightSearchUrl(),
      icon: Plane,
      color: 'fifa-blue'
    }] : []),
    ...(mode === 'drive' ? [{
      label: 'Rent a Car',
      url: getCarRentalUrl(),
      icon: Car,
      color: 'purple'
    }] : []),
    ...(mode === 'train' ? [{
      label: 'Train Tickets',
      url: getTrainUrl(),
      icon: Train,
      color: 'green'
    }] : []),
    {
      label: 'All Options',
      url: getRome2RioUrl(),
      icon: ExternalLink,
      color: 'gray'
    }
  ];

  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-${link.color}-500/10 hover:bg-${link.color}-500/20 text-${link.color}-400 border border-${link.color}-500/30 transition-all text-xs sm:text-sm`}
          >
            <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{link.label}</span>
            <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </a>
        );
      })}
    </div>
  );
}

