import { City } from './types';

export const cities: City[] = [
  {
    id: 'atlanta',
    name: 'Atlanta',
    country: 'USA',
    stadium: 'Mercedes-Benz Stadium',
    capacity: 71000,
    coordinates: [-84.400833, 33.755556],
    timezone: 'America/New_York',
    timezoneOffset: -5,
    airportCode: 'ATL',
    transitScore: 'Medium',
    fanZone: 'Centennial Olympic Park',
    fanZoneDetails: {
      location: 'Centennial Olympic Park',
      address: '265 Park Ave W NW, Atlanta, GA 30313',
      transportation: {
        metro: ['MARTA Red/Gold Line to Peachtree Center Station', 'MARTA Blue Line to Dome/GWCC/Philips Arena'],
        bus: ['MARTA Bus Route 12', 'MARTA Bus Route 55'],
        walking: '15-minute walk from Mercedes-Benz Stadium',
        parking: 'Limited parking nearby - public transit recommended'
      },
      openingHours: 'Coming Soon - Waiting for FIFA updates',
      description: 'Centennial Olympic Park was the heart of the 1996 Summer Olympics and will once again host thousands of fans. This 22-acre green space in downtown Atlanta features fountains, gardens, and wide-open spaces perfect for massive viewing screens and festival activities. Surrounded by world-class attractions like the Georgia Aquarium and World of Coca-Cola, the park transforms into a vibrant celebration zone during major sporting events.',
      officialWebsite: 'https://www.atlantadowntown.com/go/centennial-olympic-park'
    },
    localTips: [
      'MARTA rail connects airport to stadium (30 min)',
      'Hot and humid in summer - stay hydrated',
      'World-class Southern BBQ scene'
    ],
    safety: 'Exercise normal precautions in downtown area',
    averageHotelCost: 180,
    topAttractions: [
      'Georgia Aquarium',
      'World of Coca-Cola',
      'Martin Luther King Jr. National Historical Park',
      'Centennial Olympic Park',
      'Stone Mountain Park',
      'Atlanta Botanical Garden'
    ],
    getYourGuideLinks: [
      { name: 'Georgia Aquarium Skip-the-Line Ticket', url: 'https://www.getyourguide.com/atlanta-l47/georgia-aquarium-skip-the-line-ticket-t87964/' },
      { name: 'Atlanta CityPASS: Top Attractions', url: 'https://www.getyourguide.com/atlanta-l47/atlanta-citypass-t97451/' },
      { name: 'Martin Luther King Jr. Walking Tour', url: 'https://www.getyourguide.com/atlanta-l47/martin-luther-king-jr-walking-tour-t142783/' },
      { name: 'Atlanta Food Walking Tour', url: 'https://www.getyourguide.com/atlanta-l47/atlanta-food-walking-tour-t126784/' },
      { name: 'Stone Mountain Park Day Trip', url: 'https://www.getyourguide.com/atlanta-l47/stone-mountain-park-day-trip-t89764/' },
      { name: 'CNN Studio Tours', url: 'https://www.getyourguide.com/atlanta-l47/cnn-studio-tour-t87963/' }
    ],
    weather: {
      summer: 'Hot and Humid',
      tempRange: '75-90°F (24-32°C)',
      description: 'Expect hot, humid weather with frequent afternoon thunderstorms. Stay hydrated and plan indoor activities during peak heat.'
    }
  },
  {
    id: 'boston',
    name: 'Boston',
    country: 'USA',
    stadium: 'Gillette Stadium',
    capacity: 65878,
    coordinates: [-71.264167, 42.091111],
    timezone: 'America/New_York',
    timezoneOffset: -5,
    airportCode: 'BOS',
    transitScore: 'High',
    fanZone: 'Boston Common',
    fanZoneDetails: {
      location: 'Boston Common',
      address: '139 Tremont St, Boston, MA 02111',
      transportation: {
        metro: ['Green Line to Park Street', 'Red Line to Park Street', 'Orange Line to Chinatown'],
        bus: ['Multiple MBTA bus routes serve the area'],
        walking: 'Central location - walkable from most downtown hotels',
        parking: 'Boston Common Garage available'
      },
      openingHours: 'Coming Soon - Waiting for FIFA updates',
      description: "Established in 1634, Boston Common is America's oldest public park and a National Historic Landmark. This 50-acre urban oasis in the heart of downtown has hosted countless historic events and gatherings. The expansive lawns provide perfect sightlines for massive screens, while the park's central location makes it easily accessible from anywhere in Boston. The Common has previously hosted major celebrations including championship parades and public concerts.",
      officialWebsite: 'https://www.boston.gov/parks/boston-common'
    },
    localTips: [
      'Stadium is in Foxborough (40 min south of Boston)',
      'Use commuter rail for easier access',
      'Historic city - arrive early to explore'
    ],
    safety: 'Very safe, one of America\'s safest major cities',
    averageHotelCost: 250,
    topAttractions: [
      'Freedom Trail',
      'Fenway Park',
      'Boston Common & Public Garden',
      'New England Aquarium',
      'Museum of Fine Arts',
      'Harvard University & MIT Campus'
    ],
    getYourGuideLinks: [
      { name: 'Freedom Trail Walking Tour', url: 'https://www.getyourguide.com/boston-l36/freedom-trail-walking-tour-t62847/' },
      { name: 'Fenway Park Guided Tour', url: 'https://www.getyourguide.com/boston-l36/fenway-park-guided-tour-t62846/' },
      { name: 'Boston Harbor Historic Sightseeing Cruise', url: 'https://www.getyourguide.com/boston-l36/boston-harbor-cruise-t62849/' },
      { name: 'Harvard University Student-Led Tour', url: 'https://www.getyourguide.com/boston-l36/harvard-university-tour-t87652/' },
      { name: 'New England Aquarium Skip-the-Line', url: 'https://www.getyourguide.com/boston-l36/new-england-aquarium-ticket-t128764/' },
      { name: 'Boston Movie Mile Walking Tour', url: 'https://www.getyourguide.com/boston-l36/boston-movie-mile-tour-t142890/' }
    ],
    weather: {
      summer: 'Warm and Pleasant',
      tempRange: '65-80°F (18-27°C)',
      description: 'Pleasant summer weather with mild temperatures. Occasional rain showers. Perfect for outdoor sightseeing.'
    }
  },
  {
    id: 'dallas',
    name: 'Dallas',
    country: 'USA',
    stadium: 'AT&T Stadium',
    capacity: 80000,
    coordinates: [-97.093056, 32.7475],
    timezone: 'America/Chicago',
    timezoneOffset: -6,
    airportCode: 'DFW',
    transitScore: 'Low',
    fanZone: 'Main Street Garden Park',
    localTips: [
      'Stadium is in Arlington (30 min west)',
      'Car is essential - limited public transit',
      'Massive stadium with retractable roof'
    ],
    safety: 'Generally safe, standard urban precautions',
    averageHotelCost: 160,
    topAttractions: [
      'Sixth Floor Museum at Dealey Plaza',
      'Dallas Arboretum and Botanical Garden',
      'Reunion Tower GeO-Deck',
      'Dallas World Aquarium',
      'Perot Museum of Nature and Science',
      'Fort Worth Stockyards'
    ],
    getYourGuideLinks: [
      { name: 'JFK Assassination Tour', url: 'https://www.getyourguide.com/dallas-l135/jfk-assassination-tour-t87234/' },
      { name: 'Reunion Tower GeO-Deck Observation', url: 'https://www.getyourguide.com/dallas-l135/reunion-tower-ticket-t128945/' },
      { name: 'Fort Worth Stockyards Tour', url: 'https://www.getyourguide.com/dallas-l135/fort-worth-stockyards-tour-t142567/' },
      { name: 'Dallas Arts District Walking Tour', url: 'https://www.getyourguide.com/dallas-l135/dallas-arts-district-tour-t156782/' },
      { name: 'Perot Museum Admission', url: 'https://www.getyourguide.com/dallas-l135/perot-museum-ticket-t167234/' },
      { name: 'Dallas Food and Culture Tour', url: 'https://www.getyourguide.com/dallas-l135/dallas-food-culture-tour-t178945/' }
    ],
    weather: {
      summer: 'Very Hot',
      tempRange: '80-100°F (27-38°C)',
      description: 'Extremely hot summer with temperatures often exceeding 95°F. Thunderstorms possible. Stay indoors during peak afternoon heat.'
    }
  },
  {
    id: 'guadalajara',
    name: 'Guadalajara',
    country: 'Mexico',
    stadium: 'Estadio Akron',
    capacity: 48071,
    coordinates: [-103.460556, 20.692778],
    timezone: 'America/Mexico_City',
    timezoneOffset: -6,
    airportCode: 'GDL',
    transitScore: 'Medium',
    fanZone: 'Plaza de Armas',
    localTips: [
      'Birthplace of mariachi and tequila',
      'Uber and taxis widely available',
      'Try authentic birria and tortas ahogadas'
    ],
    safety: 'Exercise caution, avoid travel at night',
    averageHotelCost: 90,
    topAttractions: [
      'Hospicio Cabañas (UNESCO World Heritage)',
      'Guadalajara Cathedral',
      'Tequila Distillery Tour',
      'Tlaquepaque Arts & Crafts Village',
      'Teatro Degollado',
      'Mercado San Juan de Dios'
    ],
    getYourGuideLinks: [
      { name: 'Tequila Tour from Guadalajara', url: 'https://www.getyourguide.com/guadalajara-l1264/tequila-tour-t87654/' },
      { name: 'Guadalajara City Tour', url: 'https://www.getyourguide.com/guadalajara-l1264/city-tour-t128347/' },
      { name: 'Tlaquepaque and Tonala Artisan Tour', url: 'https://www.getyourguide.com/guadalajara-l1264/tlaquepaque-tonala-tour-t142890/' },
      { name: 'Guadalajara Food Tour', url: 'https://www.getyourguide.com/guadalajara-l1264/food-tour-t156234/' },
      { name: 'Lake Chapala Day Trip', url: 'https://www.getyourguide.com/guadalajara-l1264/lake-chapala-tour-t167845/' },
      { name: 'Mariachi Plaza Experience', url: 'https://www.getyourguide.com/guadalajara-l1264/mariachi-plaza-tour-t178456/' }
    ],
    weather: {
      summer: 'Warm with Rain',
      tempRange: '70-85°F (21-29°C)',
      description: 'Pleasant temperatures with afternoon rain showers. Rainy season brings cooler evenings. Bring an umbrella.'
    }
  },
  {
    id: 'houston',
    name: 'Houston',
    country: 'USA',
    stadium: 'NRG Stadium',
    capacity: 72220,
    coordinates: [-95.410833, 29.684722],
    timezone: 'America/Chicago',
    timezoneOffset: -6,
    airportCode: 'IAH',
    transitScore: 'Low',
    fanZone: 'Discovery Green',
    localTips: [
      'Hot and humid - prepare for extreme heat',
      'Diverse food scene, especially Tex-Mex',
      'METRORail connects downtown to stadium area'
    ],
    safety: 'Safe in main areas, avoid isolated spots',
    averageHotelCost: 140,
    topAttractions: [
      'Space Center Houston',
      'Houston Museum District',
      'Buffalo Bayou Park',
      'Houston Zoo',
      'The Menil Collection',
      'Museum of Fine Arts Houston'
    ],
    getYourGuideLinks: [
      { name: 'Space Center Houston Admission', url: 'https://www.getyourguide.com/houston-l271/space-center-houston-t87345/' },
      { name: 'Houston CityPASS', url: 'https://www.getyourguide.com/houston-l271/houston-citypass-t128567/' },
      { name: 'Buffalo Bayou Kayak Tour', url: 'https://www.getyourguide.com/houston-l271/buffalo-bayou-kayak-t142678/' },
      { name: 'Houston Food Tour', url: 'https://www.getyourguide.com/houston-l271/houston-food-tour-t156890/' },
      { name: 'Museum District Walking Tour', url: 'https://www.getyourguide.com/houston-l271/museum-district-tour-t167234/' },
      { name: 'Houston Heights Bike Tour', url: 'https://www.getyourguide.com/houston-l271/houston-heights-bike-tour-t178456/' }
    ],
    weather: {
      summer: 'Extremely Hot and Humid',
      tempRange: '80-95°F (27-35°C)',
      description: 'Very hot and humid with high heat index. Afternoon thunderstorms common. Air conditioning is essential.'
    }
  },
  {
    id: 'kansas-city',
    name: 'Kansas City',
    country: 'USA',
    stadium: 'Arrowhead Stadium',
    capacity: 76416,
    coordinates: [-94.483889, 39.048889],
    timezone: 'America/Chicago',
    timezoneOffset: -6,
    airportCode: 'MCI',
    transitScore: 'Low',
    fanZone: 'Power & Light District',
    localTips: [
      'Famous for BBQ - don\'t miss it',
      'Stadium in suburbs, car recommended',
      'Passionate sports city with great atmosphere'
    ],
    safety: 'Very safe, friendly Midwestern hospitality',
    averageHotelCost: 130,
    topAttractions: [
      'National WWI Museum and Memorial',
      'Country Club Plaza',
      'Nelson-Atkins Museum of Art',
      'Kansas City Zoo',
      'Union Station',
      'Boulevard Brewing Company'
    ],
    getYourGuideLinks: [
      { name: 'Kansas City BBQ Tour', url: 'https://www.getyourguide.com/kansas-city-l864/bbq-tour-t87456/' },
      { name: 'National WWI Museum Admission', url: 'https://www.getyourguide.com/kansas-city-l864/wwi-museum-ticket-t128678/' },
      { name: 'KC Streetcar and Walking Tour', url: 'https://www.getyourguide.com/kansas-city-l864/streetcar-tour-t142789/' },
      { name: 'Boulevard Brewing Tour', url: 'https://www.getyourguide.com/kansas-city-l864/boulevard-brewing-tour-t156234/' },
      { name: 'Nelson-Atkins Museum Tour', url: 'https://www.getyourguide.com/kansas-city-l864/nelson-atkins-tour-t167845/' },
      { name: 'KC Jazz District Experience', url: 'https://www.getyourguide.com/kansas-city-l864/jazz-district-tour-t178567/' }
    ],
    weather: {
      summer: 'Hot and Humid',
      tempRange: '75-90°F (24-32°C)',
      description: 'Hot summer days with moderate humidity. Thunderstorms possible. Pleasant evenings for outdoor activities.'
    }
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    country: 'USA',
    stadium: 'SoFi Stadium',
    capacity: 70240,
    coordinates: [-118.337778, 33.953611],
    timezone: 'America/Los_Angeles',
    timezoneOffset: -8,
    airportCode: 'LAX',
    transitScore: 'Medium',
    fanZone: 'LA Live',
    fanZoneDetails: {
      location: 'LA Live Entertainment Complex',
      address: '800 W Olympic Blvd, Los Angeles, CA 90015',
      transportation: {
        metro: ['Metro E Line (Expo) to Pico Station'],
        bus: ['Metro Bus Lines 30, 31, 81, 442, 745'],
        walking: 'Adjacent to Crypto.com Arena and Convention Center',
        parking: 'Multiple parking structures available ($20-40)'
      },
      openingHours: 'Coming Soon - Waiting for FIFA updates',
      description: 'LA Live is a 4-million-square-foot entertainment complex featuring state-of-the-art screens, premium restaurants, and nightlife venues. Home to the Microsoft Theater and adjacent to Crypto.com Arena, this district has hosted NBA Finals celebrations, award shows, and major sporting events. The Nokia Plaza features a 54-foot LED screen and can accommodate thousands of fans in a festival atmosphere combining LA\'s entertainment culture with world-class sports viewing.',
      officialWebsite: 'https://www.lalive.com'
    },
    localTips: [
      'Brand new state-of-the-art stadium',
      'Heavy traffic - plan 2+ hours for travel',
      'Uber/Lyft recommended over driving'
    ],
    safety: 'Generally safe, varies by neighborhood',
    averageHotelCost: 220,
    topAttractions: [
      'Hollywood Sign & Griffith Observatory',
      'Santa Monica Pier & Beach',
      'Universal Studios Hollywood',
      'Getty Center',
      'Venice Beach Boardwalk',
      'Rodeo Drive & Beverly Hills'
    ],
    getYourGuideLinks: [
      { name: 'Universal Studios Hollywood Ticket', url: 'https://www.getyourguide.com/los-angeles-l45/universal-studios-ticket-t87123/' },
      { name: 'Hollywood Sign Hiking Tour', url: 'https://www.getyourguide.com/los-angeles-l45/hollywood-sign-tour-t128456/' },
      { name: 'LA Grand City Tour', url: 'https://www.getyourguide.com/los-angeles-l45/grand-city-tour-t142678/' },
      { name: 'Getty Center & Museum Tour', url: 'https://www.getyourguide.com/los-angeles-l45/getty-center-tour-t156789/' },
      { name: 'Santa Monica & Venice Beach Tour', url: 'https://www.getyourguide.com/los-angeles-l45/santa-monica-venice-tour-t167234/' },
      { name: 'Beverly Hills & Rodeo Drive Tour', url: 'https://www.getyourguide.com/los-angeles-l45/beverly-hills-tour-t178456/' }
    ],
    weather: {
      summer: 'Warm and Dry',
      tempRange: '70-85°F (21-29°C)',
      description: 'Classic sunny LA weather. Mild temperatures with low humidity. Perfect for beach and outdoor activities. May be cooler near coast.'
    }
  },
  {
    id: 'mexico-city',
    name: 'Mexico City',
    country: 'Mexico',
    stadium: 'Estadio Azteca',
    capacity: 87523,
    coordinates: [-99.150556, 19.303056],
    timezone: 'America/Mexico_City',
    timezoneOffset: -6,
    airportCode: 'MEX',
    transitScore: 'High',
    fanZone: 'Zócalo',
    fanZoneDetails: {
      location: 'Zócalo (Plaza de la Constitución)',
      address: 'Plaza de la Constitución, Centro Histórico, Mexico City',
      transportation: {
        metro: ['Metro Line 2 (Blue) to Zócalo', 'Metro Line 1 to Pino Suárez'],
        bus: ['Metrobús Line 4'],
        walking: 'Central location in historic downtown',
        parking: 'Limited - not recommended. Use public transit'
      },
      openingHours: 'Coming Soon - Waiting for FIFA updates',
      description: "The Zócalo is one of the world's largest public squares at 57,600 square meters (620,000 sq ft). This UNESCO World Heritage site has been Mexico's main ceremonial center since Aztec times and has hosted everything from papal visits to massive concerts with crowds exceeding 200,000. Surrounded by the Metropolitan Cathedral and National Palace, it's the perfect blend of history and celebration. The square regularly transforms for major events, with professional sound and screen installations that create an unmatched atmosphere.",
      officialWebsite: 'https://www.zocalo.cdmx.gob.mx'
    },
    localTips: [
      'Iconic stadium, hosted 1970 & 1986 finals',
      'High altitude (7,350 ft) - may affect stamina',
      'Use Metro or Uber, avoid driving'
    ],
    safety: 'Exercise increased caution, secure valuables',
    averageHotelCost: 100,
    topAttractions: [
      'Teotihuacan Pyramids',
      'National Museum of Anthropology',
      'Zócalo & Metropolitan Cathedral',
      'Frida Kahlo Museum',
      'Chapultepec Castle',
      'Xochimilco Floating Gardens'
    ],
    getYourGuideLinks: [
      { name: 'Teotihuacan Pyramids Tour', url: 'https://www.getyourguide.com/mexico-city-l92/teotihuacan-tour-t87234/' },
      { name: 'Xochimilco Boat Tour & Coyoacan', url: 'https://www.getyourguide.com/mexico-city-l92/xochimilco-coyoacan-tour-t128567/' },
      { name: 'Frida Kahlo Museum Skip-the-Line', url: 'https://www.getyourguide.com/mexico-city-l92/frida-kahlo-museum-t142678/' },
      { name: 'Mexico City Food Tour', url: 'https://www.getyourguide.com/mexico-city-l92/food-tour-t156789/' },
      { name: 'Anthropology Museum & Chapultepec', url: 'https://www.getyourguide.com/mexico-city-l92/anthropology-museum-tour-t167234/' },
      { name: 'Historic Center Walking Tour', url: 'https://www.getyourguide.com/mexico-city-l92/historic-center-tour-t178456/' }
    ],
    weather: {
      summer: 'Mild with Rain',
      tempRange: '65-75°F (18-24°C)',
      description: 'Pleasant temperatures due to high altitude. Daily afternoon rain showers during rainy season. Cooler evenings, bring a light jacket.'
    }
  },
  {
    id: 'miami',
    name: 'Miami',
    country: 'USA',
    stadium: 'Hard Rock Stadium',
    capacity: 64767,
    coordinates: [-80.238889, 25.958056],
    timezone: 'America/New_York',
    timezoneOffset: -5,
    airportCode: 'MIA',
    transitScore: 'Medium',
    fanZone: 'Bayfront Park',
    localTips: [
      'Tropical climate - hot and rainy',
      'Stadium in Miami Gardens (30 min north)',
      'Great beaches and nightlife'
    ],
    safety: 'Safe in tourist areas, standard precautions',
    averageHotelCost: 210,
    topAttractions: [
      'South Beach & Art Deco District',
      'Vizcaya Museum & Gardens',
      'Wynwood Walls',
      'Everglades National Park',
      'Little Havana',
      'Bayside Marketplace'
    ],
    getYourGuideLinks: [
      { name: 'Everglades Airboat Adventure', url: 'https://www.getyourguide.com/miami-l51/everglades-airboat-tour-t87345/' },
      { name: 'Miami City Tour with Boat Ride', url: 'https://www.getyourguide.com/miami-l51/miami-city-boat-tour-t128678/' },
      { name: 'Wynwood Walls Art Tour', url: 'https://www.getyourguide.com/miami-l51/wynwood-art-tour-t142789/' },
      { name: 'Little Havana Food Tour', url: 'https://www.getyourguide.com/miami-l51/little-havana-food-tour-t156234/' },
      { name: 'Key West Day Trip', url: 'https://www.getyourguide.com/miami-l51/key-west-day-trip-t167845/' },
      { name: 'South Beach Bike Tour', url: 'https://www.getyourguide.com/miami-l51/south-beach-bike-tour-t178567/' }
    ],
    weather: {
      summer: 'Hot, Humid, Rainy',
      tempRange: '80-90°F (27-32°C)',
      description: 'Very hot and humid with frequent afternoon thunderstorms. Hurricane season (June-November). Beach weather but plan for rain.'
    }
  },
  {
    id: 'monterrey',
    name: 'Monterrey',
    country: 'Mexico',
    stadium: 'Estadio BBVA',
    capacity: 53500,
    coordinates: [-100.290833, 25.720556],
    timezone: 'America/Mexico_City',
    timezoneOffset: -6,
    airportCode: 'MTY',
    transitScore: 'Medium',
    fanZone: 'Macroplaza',
    localTips: [
      'Modern, business-focused city',
      'Mountain views - bring camera',
      'Try cabrito (roasted goat) - local specialty'
    ],
    safety: 'Generally safe, one of Mexico\'s safest cities',
    averageHotelCost: 85,
    topAttractions: [
      'Fundidora Park',
      'Macroplaza',
      'Cerro de la Silla Mountain',
      'Paseo Santa Lucia',
      'MARCO Contemporary Art Museum',
      'Garcia Caves'
    ],
    getYourGuideLinks: [
      { name: 'Garcia Caves Tour', url: 'https://www.getyourguide.com/monterrey-l1265/garcia-caves-tour-t87456/' },
      { name: 'Monterrey City Tour', url: 'https://www.getyourguide.com/monterrey-l1265/city-tour-t128678/' },
      { name: 'Chipinque Ecological Park Hike', url: 'https://www.getyourguide.com/monterrey-l1265/chipinque-park-hike-t142789/' },
      { name: 'Santiago Magic Town Tour', url: 'https://www.getyourguide.com/monterrey-l1265/santiago-tour-t156234/' },
      { name: 'Monterrey Food & Culture Tour', url: 'https://www.getyourguide.com/monterrey-l1265/food-culture-tour-t167845/' },
      { name: 'Cola de Caballo Waterfall Visit', url: 'https://www.getyourguide.com/monterrey-l1265/cola-caballo-waterfall-t178567/' }
    ],
    weather: {
      summer: 'Very Hot and Dry',
      tempRange: '80-100°F (27-38°C)',
      description: 'Extremely hot with low humidity. Desert climate with intense sun. Stay hydrated and avoid midday activities.'
    }
  },
  {
    id: 'new-york',
    name: 'New York/New Jersey',
    country: 'USA',
    stadium: 'MetLife Stadium',
    capacity: 82500,
    coordinates: [-74.074167, 40.813611],
    timezone: 'America/New_York',
    timezoneOffset: -5,
    airportCode: 'EWR',
    transitScore: 'High',
    fanZone: 'Times Square',
    fanZoneDetails: {
      location: 'Times Square',
      address: 'Times Square, Manhattan, NY 10036',
      transportation: {
        metro: ['Subway Lines 1, 2, 3, 7, N, Q, R, W, S to Times Square-42nd St'],
        bus: ['Multiple MTA bus routes'],
        walking: 'Heart of Manhattan - highly walkable area',
        parking: 'Extremely limited and expensive - use public transit'
      },
      openingHours: 'Coming Soon - Waiting for FIFA updates',
      description: "Times Square, dubbed 'The Crossroads of the World,' is New York City's most iconic public space, visited by 50 million people annually. The pedestrian plaza features the world's largest concentration of digital billboards and is perfectly equipped for massive viewing events. Having hosted countless New Year's Eve celebrations for over a million people, Times Square has unmatched infrastructure for large-scale events. The energy, lights, and global atmosphere make it the ultimate urban fan zone experience.",
      officialWebsite: 'https://www.timessquarenyc.org'
    },
    localTips: [
      'Stadium in East Rutherford, NJ',
      'NJ Transit train from Penn Station',
      'Expensive city - book hotels early'
    ],
    safety: 'Very safe, heavy security presence',
    averageHotelCost: 300,
    topAttractions: [
      'Statue of Liberty & Ellis Island',
      'Central Park',
      'Empire State Building',
      '9/11 Memorial & Museum',
      'Times Square',
      'Brooklyn Bridge'
    ],
    getYourGuideLinks: [
      { name: 'Statue of Liberty & Ellis Island Tour', url: 'https://www.getyourguide.com/new-york-l59/statue-liberty-tour-t87123/' },
      { name: 'Empire State Building Observatory', url: 'https://www.getyourguide.com/new-york-l59/empire-state-building-t128456/' },
      { name: '9/11 Memorial Museum Ticket', url: 'https://www.getyourguide.com/new-york-l59/911-memorial-museum-t142678/' },
      { name: 'Central Park Bike Tour', url: 'https://www.getyourguide.com/new-york-l59/central-park-bike-tour-t156789/' },
      { name: 'NYC Hop-On Hop-Off Bus Tour', url: 'https://www.getyourguide.com/new-york-l59/hop-on-hop-off-tour-t167234/' },
      { name: 'Broadway Show Tickets', url: 'https://www.getyourguide.com/new-york-l59/broadway-tickets-t178456/' }
    ],
    weather: {
      summer: 'Warm and Humid',
      tempRange: '70-85°F (21-29°C)',
      description: 'Warm summer weather with moderate humidity. Occasional heat waves and thunderstorms. Great time to explore the city.'
    }
  },
  {
    id: 'philadelphia',
    name: 'Philadelphia',
    country: 'USA',
    stadium: 'Lincoln Financial Field',
    capacity: 69796,
    coordinates: [-75.167222, 39.900833],
    timezone: 'America/New_York',
    timezoneOffset: -5,
    airportCode: 'PHL',
    transitScore: 'High',
    fanZone: 'Independence Mall',
    localTips: [
      'Broad Street Line subway to stadium',
      'Historic city - visit Liberty Bell',
      'Famous for cheesesteaks'
    ],
    safety: 'Safe in main areas, passionate sports fans',
    averageHotelCost: 170,
    topAttractions: [
      'Independence Hall & Liberty Bell',
      'Philadelphia Museum of Art & Rocky Steps',
      'Reading Terminal Market',
      'Eastern State Penitentiary',
      'Barnes Foundation',
      'Betsy Ross House'
    ],
    getYourGuideLinks: [
      { name: 'Philadelphia Revolution & Founding Fathers Tour', url: 'https://www.getyourguide.com/philadelphia-l62/revolution-tour-t87234/' },
      { name: 'Philly Cheesesteak Food Tour', url: 'https://www.getyourguide.com/philadelphia-l62/cheesesteak-tour-t128567/' },
      { name: 'Eastern State Penitentiary Tour', url: 'https://www.getyourguide.com/philadelphia-l62/eastern-state-penitentiary-t142678/' },
      { name: 'Philadelphia Museum of Art Admission', url: 'https://www.getyourguide.com/philadelphia-l62/museum-art-ticket-t156789/' },
      { name: 'Historic Philadelphia Walking Tour', url: 'https://www.getyourguide.com/philadelphia-l62/historic-walking-tour-t167234/' },
      { name: 'Hop-On Hop-Off Trolley Tour', url: 'https://www.getyourguide.com/philadelphia-l62/trolley-tour-t178456/' }
    ],
    weather: {
      summer: 'Hot and Humid',
      tempRange: '75-88°F (24-31°C)',
      description: 'Hot and humid summer with occasional thunderstorms. Heat index can be high. Good time for indoor museums.'
    }
  },
  {
    id: 'san-francisco',
    name: 'San Francisco Bay Area',
    country: 'USA',
    stadium: 'Levi\'s Stadium',
    capacity: 68500,
    coordinates: [-121.970278, 37.403056],
    timezone: 'America/Los_Angeles',
    timezoneOffset: -8,
    airportCode: 'SFO',
    transitScore: 'High',
    fanZone: 'Pier 39',
    localTips: [
      'Stadium in Santa Clara (45 min south)',
      'VTA light rail to stadium',
      'Book early - tech hub with high costs'
    ],
    safety: 'Generally safe, standard urban precautions',
    averageHotelCost: 280,
    topAttractions: [
      'Golden Gate Bridge',
      'Alcatraz Island',
      'Fisherman\'s Wharf & Pier 39',
      'Cable Cars',
      'Chinatown',
      'Muir Woods National Monument'
    ],
    getYourGuideLinks: [
      { name: 'Alcatraz Island Tour with Ferry', url: 'https://www.getyourguide.com/san-francisco-l61/alcatraz-tour-t87123/' },
      { name: 'Golden Gate Bridge Bike Tour', url: 'https://www.getyourguide.com/san-francisco-l61/golden-gate-bike-tour-t128456/' },
      { name: 'Muir Woods & Sausalito Tour', url: 'https://www.getyourguide.com/san-francisco-l61/muir-woods-tour-t142678/' },
      { name: 'San Francisco City Tour', url: 'https://www.getyourguide.com/san-francisco-l61/city-tour-t156789/' },
      { name: 'Napa Valley Wine Tour', url: 'https://www.getyourguide.com/san-francisco-l61/napa-valley-tour-t167234/' },
      { name: 'Bay Cruise Adventure', url: 'https://www.getyourguide.com/san-francisco-l61/bay-cruise-t178456/' }
    ],
    weather: {
      summer: 'Cool and Foggy',
      tempRange: '55-70°F (13-21°C)',
      description: 'Classic SF summer fog. Cool temperatures, especially near coast. Bring layers. Warmer inland (stadium area can be 20°F warmer).'
    }
  },
  {
    id: 'seattle',
    name: 'Seattle',
    country: 'USA',
    stadium: 'Lumen Field',
    capacity: 69000,
    coordinates: [-122.331944, 47.595278],
    timezone: 'America/Los_Angeles',
    timezoneOffset: -8,
    airportCode: 'SEA',
    transitScore: 'High',
    fanZone: 'Pike Place Market',
    localTips: [
      'Downtown stadium - easy access',
      'Link light rail from airport',
      'Famous for coffee and seafood'
    ],
    safety: 'Very safe, progressive city',
    averageHotelCost: 200,
    topAttractions: [
      'Pike Place Market',
      'Space Needle',
      'Chihuly Garden and Glass',
      'Seattle Waterfront',
      'Museum of Pop Culture',
      'Olympic National Park'
    ],
    getYourGuideLinks: [
      { name: 'Space Needle & Chihuly Garden Combo', url: 'https://www.getyourguide.com/seattle-l63/space-needle-chihuly-t87234/' },
      { name: 'Pike Place Market Food Tour', url: 'https://www.getyourguide.com/seattle-l63/pike-place-food-tour-t128567/' },
      { name: 'Seattle City Tour', url: 'https://www.getyourguide.com/seattle-l63/city-tour-t142678/' },
      { name: 'Mt. Rainier National Park Day Trip', url: 'https://www.getyourguide.com/seattle-l63/mt-rainier-tour-t156789/' },
      { name: 'Seattle Harbor Cruise', url: 'https://www.getyourguide.com/seattle-l63/harbor-cruise-t167234/' },
      { name: 'Underground Tour', url: 'https://www.getyourguide.com/seattle-l63/underground-tour-t178456/' }
    ],
    weather: {
      summer: 'Warm and Dry',
      tempRange: '60-75°F (16-24°C)',
      description: 'Best time to visit! Dry, sunny weather with low humidity. Comfortable temperatures perfect for outdoor activities. Rare rain.'
    }
  },
  {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    stadium: 'BMO Field',
    capacity: 45000,
    coordinates: [-79.418611, 43.633333],
    timezone: 'America/Toronto',
    timezoneOffset: -5,
    airportCode: 'YYZ',
    transitScore: 'High',
    fanZone: 'Nathan Phillips Square',
    fanZoneDetails: {
      location: 'Nathan Phillips Square',
      address: '100 Queen St W, Toronto, ON M5H 2N2',
      transportation: {
        metro: ['Subway Line 1 to Queen Station', 'Subway Line 1 to Osgoode Station'],
        bus: ['TTC Streetcar 501, 502, 503, 504'],
        walking: 'Central downtown location - walkable from most hotels',
        parking: 'Underground parking at City Hall'
      },
      openingHours: 'Coming Soon - Waiting for FIFA updates',
      description: "Named after Toronto's longest-serving mayor, Nathan Phillips Square is the city's premier public space and ceremonial heart. The 17,000-square-meter plaza features the iconic 'TORONTO' sign, reflecting pool (ice rink in winter), and the architecturally stunning City Hall. The square has hosted Raptors NBA Championship celebrations, New Year's Eve events, and countless public gatherings with crowds exceeding 50,000. Its central location and modern amenities make it perfect for a world-class fan festival.",
      officialWebsite: 'https://www.toronto.ca/explore-enjoy/festivals-events/nathan-phillips-square/'
    },
    localTips: [
      'Streetcar to stadium from downtown',
      'Multicultural city with diverse food',
      'Passport required for US visitors'
    ],
    safety: 'Very safe, one of North America\'s safest cities',
    averageHotelCost: 190,
    topAttractions: [
      'CN Tower',
      'Ripley\'s Aquarium of Canada',
      'Royal Ontario Museum',
      'Distillery District',
      'Casa Loma',
      'Toronto Islands'
    ],
    getYourGuideLinks: [
      { name: 'CN Tower Skip-the-Line Ticket', url: 'https://www.getyourguide.com/toronto-l66/cn-tower-ticket-t87345/' },
      { name: 'Niagara Falls Day Trip from Toronto', url: 'https://www.getyourguide.com/toronto-l66/niagara-falls-tour-t128678/' },
      { name: 'Ripley\'s Aquarium Admission', url: 'https://www.getyourguide.com/toronto-l66/ripleys-aquarium-t142789/' },
      { name: 'Toronto City Pass', url: 'https://www.getyourguide.com/toronto-l66/toronto-citypass-t156234/' },
      { name: 'Distillery District Food Tour', url: 'https://www.getyourguide.com/toronto-l66/distillery-food-tour-t167845/' },
      { name: 'Casa Loma Admission & Tour', url: 'https://www.getyourguide.com/toronto-l66/casa-loma-tour-t178567/' }
    ],
    weather: {
      summer: 'Warm and Pleasant',
      tempRange: '70-80°F (21-27°C)',
      description: 'Pleasant summer weather. Warm days with comfortable humidity. Occasional rain. Perfect for exploring the city and waterfront.'
    }
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    country: 'Canada',
    stadium: 'BC Place',
    capacity: 54500,
    coordinates: [-123.111944, 49.276667],
    timezone: 'America/Vancouver',
    timezoneOffset: -8,
    airportCode: 'YVR',
    transitScore: 'High',
    fanZone: 'Canada Place',
    localTips: [
      'Downtown stadium - highly walkable',
      'SkyTrain from airport (25 min)',
      'Beautiful mountain and ocean views'
    ],
    safety: 'Very safe, clean and organized',
    averageHotelCost: 210,
    topAttractions: [
      'Stanley Park & Seawall',
      'Granville Island',
      'Capilano Suspension Bridge',
      'Grouse Mountain',
      'Gastown',
      'Vancouver Aquarium'
    ],
    getYourGuideLinks: [
      { name: 'Capilano Suspension Bridge Ticket', url: 'https://www.getyourguide.com/vancouver-l218/capilano-suspension-bridge-t87456/' },
      { name: 'Vancouver City & Capilano Tour', url: 'https://www.getyourguide.com/vancouver-l218/city-capilano-tour-t128678/' },
      { name: 'Grouse Mountain Adventure', url: 'https://www.getyourguide.com/vancouver-l218/grouse-mountain-t142789/' },
      { name: 'Granville Island Market Tour', url: 'https://www.getyourguide.com/vancouver-l218/granville-island-tour-t156234/' },
      { name: 'Stanley Park Bike Tour', url: 'https://www.getyourguide.com/vancouver-l218/stanley-park-bike-tour-t167845/' },
      { name: 'Whistler Day Trip', url: 'https://www.getyourguide.com/vancouver-l218/whistler-day-trip-t178567/' }
    ],
    weather: {
      summer: 'Mild and Pleasant',
      tempRange: '60-75°F (16-24°C)',
      description: 'Beautiful summer weather. Warm days, cool evenings. Low humidity. Minimal rain (unlike rest of year). Perfect outdoor conditions.'
    }
  }
];

export const getCityById = (id: string): City | undefined => {
  return cities.find(city => city.id === id);
};

export const getCitiesByCountry = (country: 'USA' | 'Mexico' | 'Canada'): City[] => {
  return cities.filter(city => city.country === country);
};



