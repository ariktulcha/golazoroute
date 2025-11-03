import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { cities } from '../data/cities';
import { City } from '../data/types';
import { useAppStore } from '../store/appStore';
import { Maximize2, Minimize2, Layers, RotateCcw, HelpCircle, X } from 'lucide-react';

// Mapbox API token
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJpa3R1bGNoYSIsImEiOiJjbWhkeWtmcHMwOHJrMm1zZGlnMDIzbXEyIn0.vb9SVHwsIVRtrz3Ye-BDZw';

interface MapProps {
  onCityClick?: (city: City) => void;
  highlightedCities?: string[];
  routeCoordinates?: Array<[number, number]>;
  selectedCity?: City | null;
}

export default function Map({
  onCityClick,
  highlightedCities = [],
  routeCoordinates = [],
  selectedCity = null,
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const { mapCenter, mapZoom, setMapCenter, setMapZoom } = useAppStore();
  const [mapError, setMapError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapStyle, setMapStyle] = useState<'dark' | 'satellite' | 'streets'>('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Check if we have a valid token
    if (!MAPBOX_TOKEN || MAPBOX_TOKEN.includes('example')) {
      setMapError(true);
      return;
    }

    try {
      mapboxgl.accessToken = MAPBOX_TOKEN;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: mapCenter,
        zoom: mapZoom,
        pitch: 45, // 3D angle
        bearing: 0,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add scale control
      map.current.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

      // Add 3D buildings
      map.current.on('load', () => {
        if (!map.current) return;
        
        setIsLoading(false);
        
        const layers = map.current.getStyle().layers;
        const labelLayerId = layers.find(
          (layer) => layer.type === 'symbol' && layer.layout?.['text-field']
        )?.id;

        map.current.addLayer(
          {
            id: '3d-buildings',
            source: 'composite',
            'source-layer': 'building',
            filter: ['==', 'extrude', 'true'],
            type: 'fill-extrusion',
            minzoom: 15,
            paint: {
              'fill-extrusion-color': '#326295',
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height'],
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height'],
              ],
              'fill-extrusion-opacity': 0.6,
            },
          },
          labelLayerId
        );
      });

      map.current.on('move', () => {
        if (map.current) {
          const center = map.current.getCenter();
          setMapCenter([center.lng, center.lat]);
          setMapZoom(map.current.getZoom());
        }
      });

      // Add markers for all cities with improved styling
      cities.forEach((city) => {
        const el = document.createElement('div');
        el.className = 'city-marker relative transition-all duration-300 hover:scale-125 cursor-pointer group';
        el.style.width = '40px';
        el.style.height = '40px';
        el.style.cursor = 'pointer';
        const isHighlighted = highlightedCities.includes(city.id);
        
        // Create custom marker with better styling
        el.innerHTML = `
          <div class="absolute inset-0 bg-${isHighlighted ? 'fifa-gold' : 'fifa-blue'}-400 rounded-full blur-lg opacity-50 group-hover:opacity-100 animate-pulse" style="pointer-events: none;"></div>
          <svg width="40" height="40" viewBox="0 0 24 24" class="relative" style="pointer-events: none;">
            <circle cx="12" cy="12" r="8" fill="${isHighlighted ? '#FFD700' : '#26a69a'}" stroke="#ffffff" stroke-width="2"/>
            <circle cx="12" cy="12" r="3" fill="#ffffff" opacity="0.8"/>
          </svg>
          <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/95 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-semibold shadow-lg border border-gray-700">
            ${city.name}
          </div>
        `;
        
        // Add click event to the marker element - make it very explicit
        el.onclick = () => {
          if (onCityClick) {
            onCityClick(city);
          }
        };

        const marker = new mapboxgl.Marker({ element: el, anchor: 'center' })
          .setLngLat(city.coordinates)
          .addTo(map.current!);

        markers.current.push(marker);
      });
    } catch (error) {
      console.error('Map initialization error:', error);
      setMapError(true);
    }

    return () => {
      markers.current.forEach((marker) => marker.remove());
      markers.current = [];
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Fly to selected city with smooth animation
  useEffect(() => {
    if (!map.current || !selectedCity) return;
    
    map.current.flyTo({
      center: selectedCity.coordinates,
      zoom: 12,
      pitch: 60,
      bearing: 0,
      duration: 2000,
      essential: true,
    });
  }, [selectedCity]);

  // Update markers when highlighted cities change
  useEffect(() => {
    markers.current.forEach((marker, index) => {
      const city = cities[index];
      const isHighlighted = highlightedCities.includes(city.id);
      const el = marker.getElement();
      
      // Update marker appearance - SVG circle fill
      const svg = el.querySelector('svg circle:first-child');
      if (svg) {
        svg.setAttribute('fill', isHighlighted ? '#FFD700' : '#26a69a');
      }
      
      // Update glow effect - first div child
      const glowDiv = el.querySelector('div:first-child');
      if (glowDiv) {
        glowDiv.className = `absolute inset-0 bg-${isHighlighted ? 'fifa-gold' : 'fifa-blue'}-400 rounded-full blur-lg opacity-50 group-hover:opacity-100 animate-pulse`;
        (glowDiv as HTMLElement).style.pointerEvents = 'none';
      }
    });
  }, [highlightedCities]);

  // Update route when routeCoordinates change
  useEffect(() => {
    if (!map.current || routeCoordinates.length < 2) return;

    // Remove existing route layer if it exists
    if (map.current.getLayer('route')) {
      map.current.removeLayer('route');
      map.current.removeSource('route');
    }

    // Add new route
    map.current.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: routeCoordinates,
        },
      },
    });

    map.current.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#FFD700',
        'line-width': 3,
        'line-dasharray': [2, 2],
      },
    });
  }, [routeCoordinates]);

  // Handle map style change
  const handleStyleChange = (style: 'dark' | 'satellite' | 'streets') => {
    if (!map.current) return;
    
    const styleUrls = {
      dark: 'mapbox://styles/mapbox/dark-v11',
      satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
      streets: 'mapbox://styles/mapbox/streets-v12',
    };
    
    setMapStyle(style);
    map.current.setStyle(styleUrls[style]);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Reset view to default
  const resetView = () => {
    if (!map.current) return;
    
    map.current.flyTo({
      center: [-95.7129, 37.0902], // Center of North America
      zoom: 4,
      pitch: 45,
      bearing: 0,
      duration: 1500,
      essential: true,
    });
  };

  // Fallback map when Mapbox token is not available
  if (mapError) {
    return (
      <div className="w-full h-full bg-gray-900 relative overflow-hidden">
        {/* Simple SVG-based map fallback */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <svg
              className="w-full h-full opacity-20"
              viewBox="-180 -90 360 180"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simple world outline */}
              <rect x="-180" y="-90" width="360" height="180" fill="#1a1a2e" />
              <rect x="-170" y="15" width="70" height="60" fill="#2a2a3e" /> {/* USA */}
              <rect x="-120" y="45" width="25" height="35" fill="#2a2a3e" /> {/* Mexico */}
              <rect x="-170" y="-20" width="50" height="30" fill="#2a2a3e" /> {/* Canada */}
            </svg>
            
            {/* City markers overlay */}
            <div className="absolute inset-0">
              {cities.map((city) => {
                const x = ((city.coordinates[0] + 180) / 360) * 100;
                const y = ((90 - city.coordinates[1]) / 180) * 100;
                return (
                  <button
                    key={city.id}
                    className="absolute w-6 h-6 bg-fifa-blue rounded-full border-2 border-white hover:bg-fifa-gold transition-colors"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    onClick={() => onCityClick?.(city)}
                    title={city.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 left-4 bg-gray-800 p-4 rounded-lg max-w-md">
          <p className="text-sm text-yellow-400">
            ⚠️ Map preview mode (Mapbox token not configured)
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Add your Mapbox token to src/components/Map.tsx for full map features
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'w-full h-full'} relative`}>
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-fifa-blue-500/30 border-t-fifa-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white font-semibold">Loading Map...</p>
          </div>
        </div>
      )}
      
      {/* Custom Controls - Improved for mobile */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 flex flex-col gap-2 z-10 safe-top safe-left">
        {/* Map Style Selector - Compact on mobile */}
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50 p-2">
          <div className="flex items-center gap-1 mb-2 px-2 pt-1">
            <Layers className="w-4 h-4 text-fifa-blue-400" />
            <span className="text-xs font-semibold text-gray-300 hidden sm:inline">Map Style</span>
          </div>
          {/* Horizontal buttons on mobile, vertical on larger screens */}
          <div className="flex sm:flex-col gap-1">
            <button
              onClick={() => handleStyleChange('dark')}
              className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                mapStyle === 'dark'
                  ? 'bg-fifa-blue-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 active:bg-gray-700'
              }`}
              aria-label="Dark mode"
            >
              <span className="sm:hidden">🌙</span>
              <span className="hidden sm:inline">🌙 Dark</span>
            </button>
            <button
              onClick={() => handleStyleChange('satellite')}
              className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                mapStyle === 'satellite'
                  ? 'bg-fifa-blue-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 active:bg-gray-700'
              }`}
              aria-label="Satellite mode"
            >
              <span className="sm:hidden">🛰️</span>
              <span className="hidden sm:inline">🛰️ Satellite</span>
            </button>
            <button
              onClick={() => handleStyleChange('streets')}
              className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                mapStyle === 'streets'
                  ? 'bg-fifa-blue-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 active:bg-gray-700'
              }`}
              aria-label="Streets mode"
            >
              <span className="sm:hidden">🗺️</span>
              <span className="hidden sm:inline">🗺️ Streets</span>
            </button>
          </div>
        </div>
        
        {/* Action buttons - Improved touch targets */}
        <div className="flex sm:flex-col gap-2">
          {/* Reset View */}
          <button
            onClick={resetView}
            className="bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800 active:bg-gray-800 border border-gray-700/50 hover:border-fifa-gold-500/50 p-3 rounded-lg shadow-xl transition-all duration-200 group min-w-[44px] min-h-[44px] flex items-center justify-center"
            title="Reset view to default"
            aria-label="Reset view to default"
          >
            <RotateCcw className="w-5 h-5 text-gray-300 group-hover:text-fifa-gold-400 group-active:text-fifa-gold-400" />
          </button>
          
          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800 active:bg-gray-800 border border-gray-700/50 hover:border-fifa-blue-500/50 p-3 rounded-lg shadow-xl transition-all duration-200 group min-w-[44px] min-h-[44px] flex items-center justify-center"
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-gray-300 group-hover:text-fifa-blue-400 group-active:text-fifa-blue-400" />
            ) : (
              <Maximize2 className="w-5 h-5 text-gray-300 group-hover:text-fifa-blue-400 group-active:text-fifa-blue-400" />
            )}
          </button>
          
          {/* Help/Tips Toggle */}
          <button
            onClick={() => setShowTips(!showTips)}
            className={`bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800 active:bg-gray-800 border p-3 rounded-lg shadow-xl transition-all duration-200 group min-w-[44px] min-h-[44px] flex items-center justify-center ${
              showTips ? 'border-fifa-gold-500/50' : 'border-gray-700/50 hover:border-fifa-gold-500/50'
            }`}
            title="Show map tips"
            aria-label="Show map tips"
          >
            <HelpCircle className={`w-5 h-5 transition-colors ${
              showTips ? 'text-fifa-gold-400' : 'text-gray-300 group-hover:text-fifa-gold-400 group-active:text-fifa-gold-400'
            }`} />
          </button>
        </div>
      </div>
      
      {/* Quick Tips Panel - Better positioned for mobile */}
      {showTips && (
        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50 p-3 md:p-4 w-[calc(100vw-1rem)] max-w-xs md:max-w-sm animate-slide-down z-10 safe-top safe-right">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-fifa-gold-400" />
              <h3 className="font-bold text-sm md:text-base text-white">Map Controls</h3>
            </div>
            <button
              onClick={() => setShowTips(false)}
              className="text-gray-400 hover:text-white active:text-white transition-colors min-w-[44px] min-h-[44px] -mt-2 -mr-2 flex items-center justify-center"
              aria-label="Close tips"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 text-xs md:text-sm text-gray-300 max-h-[60vh] overflow-y-auto">
            <div className="flex items-start gap-2">
              <span className="text-fifa-blue-400 font-bold">•</span>
              <span><strong>Click</strong> on markers or sidebar cities to view details</span>
            </div>
            <div className="flex items-start gap-2 hidden md:flex">
              <span className="text-fifa-blue-400 font-bold">•</span>
              <span><strong>Hover</strong> over cities in the sidebar to highlight them on the map</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-fifa-blue-400 font-bold">•</span>
              <span><strong>Drag</strong> the map to pan around</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-fifa-blue-400 font-bold">•</span>
              <span><strong>Pinch</strong> to zoom in/out</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-fifa-blue-400 font-bold">•</span>
              <span>Use the <strong>+/-</strong> buttons for precise zoom control</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-fifa-blue-400 font-bold">•</span>
              <span>Switch between <strong>Dark, Satellite, and Street</strong> views</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-fifa-gold-400 font-bold">•</span>
              <span>Click <RotateCcw className="w-3 h-3 inline" /> to reset the view</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Map Legend - Better positioned for mobile to avoid overlapping with CityCard */}
      <div className="absolute bottom-2 right-2 md:bottom-4 md:left-4 md:right-auto bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50 p-2 md:p-3 z-[5] safe-bottom">
        <h3 className="text-xs font-bold text-gray-300 mb-1.5 md:mb-2">Legend</h3>
        <div className="space-y-1.5 md:space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-fifa-blue-400 flex-shrink-0"></div>
            <span className="text-xs text-gray-300 whitespace-nowrap">Host City</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-fifa-gold-400 flex-shrink-0"></div>
            <span className="text-xs text-gray-300 whitespace-nowrap">Selected</span>
          </div>
        </div>
      </div>
    </div>
  );
}



