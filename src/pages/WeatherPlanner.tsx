import { useState, useEffect } from 'react';
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind,
  Thermometer,
  Droplets,
  AlertTriangle,
  MapPin,
  Calendar,
  Info,
  RefreshCw,
  TrendingUp,
  Shirt,
  Umbrella
} from 'lucide-react';
import { cities } from '../data/cities';
import { useAppStore } from '../store/appStore';
import { format } from 'date-fns';
import SEO from '../components/SEO';
import { generateWeatherFAQData, generateWeatherStructuredData, getWeatherKeywords, generateBreadcrumbData } from '../utils/seoHelpers';

interface WeatherForecast {
  date: string;
  tempHigh: number;
  tempLow: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'partly-cloudy';
  humidity: number;
  windSpeed: number;
  precipitation: number;
}

export default function WeatherPlanner() {
  const { selectedMatches } = useAppStore();
  const [selectedCity, setSelectedCity] = useState('');
  const [tempUnit, setTempUnit] = useState<'F' | 'C'>('F');
  const [activeTab, setActiveTab] = useState<'overview' | 'matches' | 'comparison' | 'packing'>('overview');
  const [mockForecast, setMockForecast] = useState<WeatherForecast[]>([]);

  // Mock weather API - In production, this would call OpenWeatherMap API
  // Generates forecast for World Cup period (June 11 - July 19, 2026)
  const fetchWeather = (cityId: string) => {
    const city = cities.find(c => c.id === cityId);
    if (!city) return;

    // Generate mock forecast for World Cup dates based on historical June-July data
    const baseTempF = parseTempRange(city.weather.tempRange);
    const forecast: WeatherForecast[] = [];
    
    // Start from World Cup opening day: June 11, 2026
    const worldCupStart = new Date('2026-06-11');
    
    // Generate 7-week forecast (covering entire tournament)
    for (let i = 0; i < 39; i++) { // 39 days from June 11 to July 19
      const forecastDate = new Date(worldCupStart);
      forecastDate.setDate(worldCupStart.getDate() + i);
      
      // Add some realistic variation based on typical weather patterns
      const variation = (Math.random() - 0.5) * 10;
      
      // Adjust precipitation based on city's typical weather
      let basePrecipitation = 20;
      if (city.weather.description.toLowerCase().includes('rain')) {
        basePrecipitation = 50;
      } else if (city.weather.description.toLowerCase().includes('dry')) {
        basePrecipitation = 5;
      }
      
      forecast.push({
        date: forecastDate.toISOString(),
        tempHigh: baseTempF.high + variation,
        tempLow: baseTempF.low + variation,
        condition: getConditionFromDescription(city.weather.description),
        humidity: city.weather.description.toLowerCase().includes('humid') ? 60 + Math.random() * 30 : 40 + Math.random() * 30,
        windSpeed: 5 + Math.random() * 15,
        precipitation: basePrecipitation + (Math.random() - 0.5) * 20,
      });
    }
    
    setMockForecast(forecast);
  };

  const parseTempRange = (tempRange: string): { high: number; low: number } => {
    const match = tempRange.match(/(\d+)-(\d+)/);
    if (match) {
      return { low: parseInt(match[1]), high: parseInt(match[2]) };
    }
    return { low: 70, high: 85 };
  };

  const getRandomCondition = (): WeatherForecast['condition'] => {
    const conditions: WeatherForecast['condition'][] = ['sunny', 'cloudy', 'rainy', 'partly-cloudy'];
    return conditions[Math.floor(Math.random() * conditions.length)];
  };

  const getConditionFromDescription = (description: string): WeatherForecast['condition'] => {
    const lowerDesc = description.toLowerCase();
    if (lowerDesc.includes('rain') || lowerDesc.includes('shower') || lowerDesc.includes('storm')) {
      return Math.random() > 0.3 ? 'rainy' : 'cloudy';
    } else if (lowerDesc.includes('fog') || lowerDesc.includes('cloud')) {
      return Math.random() > 0.5 ? 'cloudy' : 'partly-cloudy';
    } else if (lowerDesc.includes('sunny') || lowerDesc.includes('dry') || lowerDesc.includes('hot')) {
      return Math.random() > 0.7 ? 'sunny' : 'partly-cloudy';
    }
    return getRandomCondition();
  };

  const convertTemp = (tempF: number): number => {
    return tempUnit === 'F' ? tempF : ((tempF - 32) * 5) / 9;
  };

  const formatTemp = (tempF: number): string => {
    return `${Math.round(convertTemp(tempF))}°${tempUnit}`;
  };

  const getWeatherIcon = (condition: WeatherForecast['condition'], size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClass = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-10 h-10' : 'w-6 h-6';
    
    switch (condition) {
      case 'sunny':
        return <Sun className={`${sizeClass} text-yellow-400`} />;
      case 'cloudy':
        return <Cloud className={`${sizeClass} text-gray-400`} />;
      case 'rainy':
        return <CloudRain className={`${sizeClass} text-blue-400`} />;
      case 'partly-cloudy':
        return <Cloud className={`${sizeClass} text-gray-300`} />;
    }
  };

  const getPackingRecommendations = (city: typeof cities[0]) => {
    const tempRange = parseTempRange(city.weather.tempRange);
    const avgTemp = (tempRange.high + tempRange.low) / 2;
    
    const recommendations = [];
    
    if (avgTemp > 80) {
      recommendations.push({ item: 'Light, breathable clothing', icon: Shirt, priority: 'essential' });
      recommendations.push({ item: 'Sunscreen (SPF 30+)', icon: Sun, priority: 'essential' });
      recommendations.push({ item: 'Hat and sunglasses', icon: Sun, priority: 'important' });
      recommendations.push({ item: 'Refillable water bottle', icon: Droplets, priority: 'essential' });
    } else if (avgTemp > 65) {
      recommendations.push({ item: 'Comfortable layers', icon: Shirt, priority: 'essential' });
      recommendations.push({ item: 'Light jacket for evenings', icon: Wind, priority: 'important' });
    } else {
      recommendations.push({ item: 'Warm jacket', icon: Wind, priority: 'essential' });
      recommendations.push({ item: 'Long pants', icon: Shirt, priority: 'important' });
    }
    
    if (city.weather.description.toLowerCase().includes('rain')) {
      recommendations.push({ item: 'Rain jacket or umbrella', icon: Umbrella, priority: 'important' });
    }
    
    return recommendations;
  };

  useEffect(() => {
    if (selectedCity) {
      fetchWeather(selectedCity);
    }
  }, [selectedCity]); // fetchWeather is defined inside component, safe to omit

  // SEO Structured Data removed to avoid TypeScript warnings - handled by SEO component

  return (
    <>
      <SEO
        title="FIFA World Cup 2026 Weather Planner | Climate Guide for USA, Mexico & Canada"
        description="Plan your World Cup 2026 journey with detailed weather forecasts for all 16 host cities. Get temperature predictions, packing recommendations, and climate comparisons for June-July 2026."
        keywords={getWeatherKeywords()}
        canonicalUrl="/weather"
        structuredData={[
          generateWeatherStructuredData(),
          generateBreadcrumbData([
            { name: 'Home', url: 'https://worldcup2026planner.com/' },
            { name: 'Weather Planner', url: 'https://worldcup2026planner.com/weather' }
          ]),
          generateWeatherFAQData()
        ]}
      />

      <div className="min-h-screen bg-gray-950 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <Cloud className="w-8 h-8 text-cyan-400" />
                  Weather Planner
                </h1>
                <p className="text-gray-400">
                  Check weather conditions for your World Cup journey
                </p>
              </div>

            {/* Temperature Unit Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setTempUnit('F')}
                className={`px-4 py-2 rounded transition-colors ${
                  tempUnit === 'F'
                    ? 'bg-fifa-blue text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                °F
              </button>
              <button
                onClick={() => setTempUnit('C')}
                className={`px-4 py-2 rounded transition-colors ${
                  tempUnit === 'C'
                    ? 'bg-fifa-blue text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                °C
              </button>
            </div>
          </div>

          {/* API Notice */}
          <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 mt-0.5" />
              <div className="text-sm">
                <p className="text-blue-300 font-semibold mb-1">World Cup Weather Data</p>
                <p className="text-gray-300">
                  Showing expected weather conditions during the 2026 FIFA World Cup (June 11 - July 19, 2026). 
                  Data based on historical weather patterns for this period. Live forecasts will become available closer to the tournament.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'overview'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Cloud className="w-4 h-4 inline mr-2" />
            City Overview
          </button>
          <button
            onClick={() => setActiveTab('matches')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'matches'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Match Weather
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'comparison'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Compare Cities
          </button>
          <button
            onClick={() => setActiveTab('packing')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'packing'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Shirt className="w-4 h-4 inline mr-2" />
            Packing Guide
          </button>
        </div>

        {/* City Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* City Selector */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <label className="block text-sm text-gray-400 mb-2">Select City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-fifa-blue"
              >
                <option value="">Choose a city...</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>
                    {city.name}, {city.country}
                  </option>
                ))}
              </select>
            </div>

            {selectedCity && (
              <>
                {/* Current Weather Summary */}
                {(() => {
                  const city = cities.find(c => c.id === selectedCity)!;
                  return (
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold">{city.name}</h2>
                          <p className="opacity-90">{city.country}</p>
                          <p className="text-sm opacity-75 mt-1">World Cup Period Weather</p>
                        </div>
                        {getWeatherIcon(getConditionFromDescription(city.weather.description), 'lg')}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div>
                          <div className="text-sm opacity-80 mb-1">Typical Range</div>
                          <div className="text-2xl font-bold">{city.weather.tempRange}</div>
                        </div>
                        <div>
                          <div className="text-sm opacity-80 mb-1">Season</div>
                          <div className="text-lg font-semibold">{city.weather.summer}</div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-sm opacity-80 mb-1">Conditions</div>
                          <div className="text-sm">{city.weather.description}</div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Tournament Period Forecast */}
                {mockForecast.length > 0 && (
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Tournament Period Forecast</h3>
                        <p className="text-xs text-gray-400 mt-1">June 11 - July 19, 2026</p>
                      </div>
                      <button
                        onClick={() => fetchWeather(selectedCity)}
                        className="text-fifa-blue hover:text-blue-400 flex items-center gap-2 text-sm"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                      </button>
                    </div>

                    {/* Weekly breakdown */}
                    <div className="space-y-4">
                      {[0, 1, 2, 3, 4, 5].map((weekIndex) => {
                        const weekStart = weekIndex * 7;
                        const weekEnd = Math.min(weekStart + 7, mockForecast.length);
                        const weekData = mockForecast.slice(weekStart, weekEnd);
                        
                        if (weekData.length === 0) return null;
                        
                        const weekStartDate = new Date(weekData[0].date);
                        const weekEndDate = new Date(weekData[weekData.length - 1].date);
                        
                        return (
                          <div key={weekIndex} className="border border-gray-700 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-gray-300 mb-3">
                              {format(weekStartDate, 'MMM d')} - {format(weekEndDate, 'MMM d, yyyy')}
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                              {weekData.map((day, idx) => (
                                <div key={idx} className="bg-gray-700 rounded-lg p-3 text-center">
                                  <div className="text-xs text-gray-400 mb-1">
                                    {format(new Date(day.date), 'MMM d')}
                                  </div>
                                  <div className="text-xs font-semibold mb-2">
                                    {format(new Date(day.date), 'EEE')}
                                  </div>
                                  <div className="flex justify-center mb-2">
                                    {getWeatherIcon(day.condition)}
                                  </div>
                                  <div className="mb-1">
                                    <div className="text-sm font-bold">{formatTemp(day.tempHigh)}</div>
                                    <div className="text-xs text-gray-400">{formatTemp(day.tempLow)}</div>
                                  </div>
                                  <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                                    <Droplets className="w-3 h-3" />
                                    {day.precipitation.toFixed(0)}%
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}

            {!selectedCity && (
              <div className="bg-gray-800 rounded-lg p-12 border border-gray-700 text-center">
                <Cloud className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Select a city to view weather information</p>
              </div>
            )}
          </div>
        )}

        {/* Match Weather Tab */}
        {activeTab === 'matches' && (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Weather for Your Selected Matches</h3>
              
              {selectedMatches.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No matches selected</p>
                  <p className="text-sm mt-1">Go to Optimizer to select matches</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedMatches.map(match => {
                    const city = cities.find(c => c.id === match.cityId)!;
                    const tempRange = parseTempRange(city.weather.tempRange);
                    
                    return (
                      <div key={match.id} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">
                              {match.homeTeam} vs {match.awayTeam}
                            </h4>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>{format(new Date(match.date), 'MMM d, yyyy')}</span>
                              <span>{match.time}</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {city.name}
                              </span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-1">
                              <Thermometer className="w-4 h-4 text-orange-400" />
                              <span className="font-semibold">
                                {formatTemp(tempRange.low)} - {formatTemp(tempRange.high)}
                              </span>
                            </div>
                            <div className="text-xs text-gray-400">{city.weather.summer}</div>
                          </div>
                        </div>

                        {city.weather.description.toLowerCase().includes('rain') && (
                          <div className="mt-3 flex items-center gap-2 text-yellow-400 text-sm">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Possible rain - bring rain gear</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* City Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Climate Comparison During World Cup (June 11 - July 19, 2026)</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">City</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">Temperature</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">Conditions</th>
                      <th className="text-left py-3 px-2 text-gray-400 font-semibold">Climate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cities.map(city => {
                      const tempRange = parseTempRange(city.weather.tempRange);
                      const avgTemp = (tempRange.high + tempRange.low) / 2;
                      
                      return (
                        <tr key={city.id} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                          <td className="py-3 px-2">
                            <div className="font-semibold">{city.name}</div>
                            <div className="text-xs text-gray-400">{city.country}</div>
                          </td>
                          <td className="py-3 px-2">
                            <div className="font-semibold">
                              {formatTemp(tempRange.low)} - {formatTemp(tempRange.high)}
                            </div>
                            <div className="text-xs text-gray-400">
                              Avg: {formatTemp(avgTemp)}
                            </div>
                          </td>
                          <td className="py-3 px-2 text-sm">{city.weather.summer}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              avgTemp > 80 ? 'bg-red-600' :
                              avgTemp > 70 ? 'bg-orange-600' :
                              'bg-blue-600'
                            }`}>
                              {avgTemp > 80 ? 'Hot' : avgTemp > 70 ? 'Warm' : 'Moderate'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Packing Guide Tab */}
        {activeTab === 'packing' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cities.map(city => {
                const recommendations = getPackingRecommendations(city);
                
                return (
                  <div key={city.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{city.name}</h3>
                        <p className="text-sm text-gray-400">{city.weather.tempRange}</p>
                      </div>
                      <Shirt className="w-8 h-8 text-gray-600" />
                    </div>

                    <div className="space-y-2">
                      {recommendations.map((rec, idx) => {
                        const Icon = rec.icon;
                        return (
                          <div key={idx} className="flex items-center gap-3 text-sm">
                            <Icon className={`w-4 h-4 ${
                              rec.priority === 'essential' ? 'text-red-400' : 'text-yellow-400'
                            }`} />
                            <span className="flex-1">{rec.item}</span>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              rec.priority === 'essential' 
                                ? 'bg-red-600/20 text-red-400' 
                                : 'bg-yellow-600/20 text-yellow-400'
                            }`}>
                              {rec.priority}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Universal Packing List</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-fifa-gold mb-2">Essentials</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Valid passport</li>
                    <li>• Match tickets</li>
                    <li>• Phone & charger</li>
                    <li>• Travel insurance docs</li>
                    <li>• Credit cards & cash</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fifa-gold mb-2">Clothing</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Team jersey</li>
                    <li>• Comfortable shoes</li>
                    <li>• Light layers</li>
                    <li>• Hat/cap</li>
                    <li>• Sunglasses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fifa-gold mb-2">Health & Safety</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Sunscreen</li>
                    <li>• Hand sanitizer</li>
                    <li>• Face masks</li>
                    <li>• Basic medications</li>
                    <li>• First aid kit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
}

