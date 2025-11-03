export interface FanZone {
  id: string;
  cityName: string;
  country: string;
  name: string;
  location: string;
  address: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  capacity: string;
  facilities: string[];
  activities: string[];
  transportation: {
    metro: string[];
    bus: string[];
    walking: string;
    parking: string;
  };
  openingHours: string;
  nearbyAttractions: string[];
  foodAndDrinks: string[];
  accessibility: string[];
  officialWebsite: string;
  images?: string[];
  tips: string[];
}

export const fanZones: FanZone[] = [
  {
    id: 'atlanta',
    cityName: 'Atlanta',
    country: 'USA',
    name: 'Centennial Olympic Park Fan Zone',
    location: 'Centennial Olympic Park',
    address: '265 Park Ave W NW, Atlanta, GA 30313',
    coordinates: [-84.392778, 33.760278],
    description: 'Centennial Olympic Park was the heart of the 1996 Summer Olympics and will once again host thousands of fans during the 2026 World Cup. This 22-acre green space in downtown Atlanta features fountains, gardens, and wide-open spaces perfect for massive viewing screens and festival activities. Surrounded by world-class attractions like the Georgia Aquarium and World of Coca-Cola, the park transforms into a vibrant celebration zone during major sporting events.',
    capacity: 'Up to 30,000 fans',
    facilities: [
      'Giant LED screens for live match viewing',
      'Food and beverage vendors',
      'Official FIFA merchandise stores',
      'VIP hospitality areas',
      'First aid stations',
      'Family zones with kids activities',
      'Accessible restrooms',
      'Charging stations'
    ],
    activities: [
      'Live match screenings on giant screens',
      'Interactive football games and challenges',
      'Meet and greets with football legends',
      'Live music and entertainment',
      'Cultural performances',
      'Food festivals featuring local cuisine',
      'FIFA World Cup Trophy photo opportunities',
      'Virtual reality football experiences'
    ],
    transportation: {
      metro: ['MARTA Red/Gold Line to Peachtree Center Station', 'MARTA Blue Line to Dome/GWCC/Philips Arena'],
      bus: ['MARTA Bus Route 12', 'MARTA Bus Route 55'],
      walking: '15-minute walk from Mercedes-Benz Stadium',
      parking: 'Limited parking nearby - public transit strongly recommended'
    },
    openingHours: 'Daily from 10:00 AM to 11:00 PM during tournament (subject to FIFA confirmation)',
    nearbyAttractions: [
      'Georgia Aquarium (5 min walk)',
      'World of Coca-Cola (5 min walk)',
      'Mercedes-Benz Stadium (15 min walk)',
      'CNN Center (10 min walk)',
      'National Center for Civil and Human Rights (8 min walk)'
    ],
    foodAndDrinks: [
      'Southern BBQ vendors',
      'International food trucks',
      'Local craft beer gardens',
      'Traditional American fare',
      'Vegetarian and vegan options',
      'Halal food stations'
    ],
    accessibility: [
      'Wheelchair accessible throughout',
      'Accessible viewing platforms',
      'ASL interpreters for events',
      'Accessible restrooms',
      'Sensory-friendly zones'
    ],
    officialWebsite: 'https://www.atlantadowntown.com/go/centennial-olympic-park',
    tips: [
      'Arrive early on match days as it gets crowded',
      'Use MARTA public transit to avoid parking issues',
      'Bring sunscreen - summer in Atlanta is hot and humid',
      'Visit the nearby Georgia Aquarium before or after matches',
      'Stay hydrated - free water stations available'
    ]
  },
  {
    id: 'boston',
    cityName: 'Boston',
    country: 'USA',
    name: 'Boston Common Fan Festival',
    location: 'Boston Common',
    address: '139 Tremont St, Boston, MA 02111',
    coordinates: [-71.066389, 42.355556],
    description: "Established in 1634, Boston Common is America's oldest public park and a National Historic Landmark. This 50-acre urban oasis in the heart of downtown has hosted countless historic events and gatherings. The expansive lawns provide perfect sightlines for massive screens, while the park's central location makes it easily accessible from anywhere in Boston. The Common has previously hosted major celebrations including championship parades and public concerts.",
    capacity: 'Up to 35,000 fans',
    facilities: [
      'Multiple giant LED screens',
      'Premium food court',
      'Official merchandise pavilion',
      'Covered VIP sections',
      'Medical facilities',
      'Family entertainment zones',
      'Modern restroom facilities',
      'Free WiFi throughout'
    ],
    activities: [
      'Live match broadcasts',
      'Penalty shootout challenges',
      'Football skill competitions',
      'Live bands and DJs',
      'Street performers',
      'New England food tastings',
      'Trophy replica photo ops',
      'Interactive FIFA exhibits'
    ],
    transportation: {
      metro: ['Green Line to Park Street', 'Red Line to Park Street', 'Orange Line to Chinatown'],
      bus: ['Multiple MBTA bus routes serve the area'],
      walking: 'Central location - walkable from most downtown hotels',
      parking: 'Boston Common Garage available'
    },
    openingHours: 'Daily from 9:00 AM to midnight during tournament (subject to FIFA confirmation)',
    nearbyAttractions: [
      'Freedom Trail (starts here)',
      'Boston Public Garden (adjacent)',
      'Faneuil Hall (10 min walk)',
      'Newbury Street shopping (15 min walk)',
      'Museum of Fine Arts (20 min transit)'
    ],
    foodAndDrinks: [
      'New England clam chowder stands',
      'Lobster roll vendors',
      'International cuisine pavilion',
      'Boston craft breweries',
      'Local coffee roasters',
      'Farm-to-table options'
    ],
    accessibility: [
      'Fully wheelchair accessible',
      'Elevated viewing areas',
      'Sign language services',
      'Accessible facilities throughout',
      'Designated assistance areas'
    ],
    officialWebsite: 'https://www.boston.gov/parks/boston-common',
    tips: [
      'Layer your clothing - Boston weather can be unpredictable',
      'Explore the Freedom Trail while you\'re there',
      'Use the T (subway) - it\'s the easiest way to get around',
      'Try local favorites like clam chowder and lobster rolls',
      'Book accommodations early - Boston hotels fill up fast'
    ]
  },
  {
    id: 'los-angeles',
    cityName: 'Los Angeles',
    country: 'USA',
    name: 'LA Live Fan Fest',
    location: 'LA Live Entertainment Complex',
    address: '800 W Olympic Blvd, Los Angeles, CA 90015',
    coordinates: [-118.267222, 34.043056],
    description: 'LA Live is a 4-million-square-foot entertainment complex featuring state-of-the-art screens, premium restaurants, and nightlife venues. Home to the Microsoft Theater and adjacent to Crypto.com Arena, this district has hosted NBA Finals celebrations, award shows, and major sporting events. The Nokia Plaza features a 54-foot LED screen and can accommodate thousands of fans in a festival atmosphere combining LA\'s entertainment culture with world-class sports viewing.',
    capacity: 'Up to 40,000 fans',
    facilities: [
      'Massive outdoor LED screens',
      'Celebrity chef food pavilions',
      'Multi-level viewing decks',
      'VIP hospitality suites',
      'Medical and security stations',
      'Kids play zones',
      'Premium restroom facilities',
      '5G connectivity throughout'
    ],
    activities: [
      'Live match screenings',
      'Celebrity appearances',
      'Hollywood-style entertainment',
      'Freestyle football shows',
      'Live concerts',
      'Food and wine festivals',
      'World Cup Trophy viewing',
      'AR/VR football experiences'
    ],
    transportation: {
      metro: ['Metro E Line (Expo) to Pico Station'],
      bus: ['Metro Bus Lines 30, 31, 81, 442, 745'],
      walking: 'Adjacent to Crypto.com Arena and Convention Center',
      parking: 'Multiple parking structures available ($20-40)'
    },
    openingHours: 'Daily from 10:00 AM to 1:00 AM during tournament (subject to FIFA confirmation)',
    nearbyAttractions: [
      'Crypto.com Arena (adjacent)',
      'Grammy Museum (2 min walk)',
      'Downtown LA (5 min walk)',
      'Grand Central Market (10 min walk)',
      'The Broad Museum (15 min drive)'
    ],
    foodAndDrinks: [
      'Celebrity chef restaurants',
      'Gourmet food trucks',
      'LA street food',
      'California wine bars',
      'International cuisine',
      'Vegan and organic options'
    ],
    accessibility: [
      'ADA compliant throughout',
      'Wheelchair accessible viewing areas',
      'ASL interpretation available',
      'Accessible parking nearby',
      'Sensory rooms for fans with special needs'
    ],
    officialWebsite: 'https://www.lalive.com',
    tips: [
      'Traffic is heavy - use Metro or rideshare',
      'Explore nearby Grand Central Market for authentic LA food',
      'Evening events have the best atmosphere',
      'Book hotels early - LA is expensive during major events',
      'Bring layers - it can get cool in the evening'
    ]
  },
  {
    id: 'mexico-city',
    cityName: 'Mexico City',
    country: 'Mexico',
    name: 'Zócalo Fan Zone',
    location: 'Zócalo (Plaza de la Constitución)',
    address: 'Plaza de la Constitución, Centro Histórico, Mexico City',
    coordinates: [-99.133056, 19.432778],
    description: "The Zócalo is one of the world's largest public squares at 57,600 square meters (620,000 sq ft). This UNESCO World Heritage site has been Mexico's main ceremonial center since Aztec times and has hosted everything from papal visits to massive concerts with crowds exceeding 200,000. Surrounded by the Metropolitan Cathedral and National Palace, it's the perfect blend of history and celebration. The square regularly transforms for major events, with professional sound and screen installations that create an unmatched atmosphere.",
    capacity: 'Up to 100,000 fans',
    facilities: [
      'Stadium-size LED screens',
      'Traditional Mexican food markets',
      'FIFA merchandise megastore',
      'Multiple VIP viewing platforms',
      'Comprehensive medical facilities',
      'Family-friendly zones',
      'Modern sanitary facilities',
      'Free public WiFi'
    ],
    activities: [
      'Live match broadcasts',
      'Mexican cultural performances',
      'Mariachi bands',
      'Lucha libre exhibitions',
      'Traditional dance shows',
      'Mexican food festivals',
      'Trophy photo opportunities',
      'Interactive football games'
    ],
    transportation: {
      metro: ['Metro Line 2 (Blue) to Zócalo', 'Metro Line 1 to Pino Suárez'],
      bus: ['Metrobús Line 4'],
      walking: 'Central location in historic downtown',
      parking: 'Limited - not recommended. Use public transit'
    },
    openingHours: 'Daily from 8:00 AM to midnight during tournament (subject to FIFA confirmation)',
    nearbyAttractions: [
      'Metropolitan Cathedral (adjacent)',
      'National Palace (adjacent)',
      'Templo Mayor ruins (5 min walk)',
      'Palacio de Bellas Artes (10 min walk)',
      'Alameda Central (15 min walk)'
    ],
    foodAndDrinks: [
      'Traditional tacos and quesadillas',
      'Street food vendors',
      'Mexican craft beers',
      'Tequila and mezcal bars',
      'Regional Mexican cuisine',
      'Fresh juice stands'
    ],
    accessibility: [
      'Wheelchair access available',
      'Accessible viewing platforms',
      'Spanish sign language interpreters',
      'Accessible restrooms',
      'Designated assistance points'
    ],
    officialWebsite: 'https://www.zocalo.cdmx.gob.mx',
    tips: [
      'Be cautious with valuables in crowded areas',
      'Use Metro - it\'s cheap and efficient',
      'Try street food but choose busy vendors',
      'High altitude (7,350 ft) - take it easy at first',
      'Visit early morning to see the flag ceremony'
    ]
  },
  {
    id: 'new-york',
    cityName: 'New York/New Jersey',
    country: 'USA',
    name: 'Times Square Fan Central',
    location: 'Times Square',
    address: 'Times Square, Manhattan, NY 10036',
    coordinates: [-73.985131, 40.758896],
    description: "Times Square, dubbed 'The Crossroads of the World,' is New York City's most iconic public space, visited by 50 million people annually. The pedestrian plaza features the world's largest concentration of digital billboards and is perfectly equipped for massive viewing events. Having hosted countless New Year's Eve celebrations for over a million people, Times Square has unmatched infrastructure for large-scale events. The energy, lights, and global atmosphere make it the ultimate urban fan zone experience.",
    capacity: 'Up to 50,000 fans',
    facilities: [
      'Iconic digital billboard screens',
      'Multi-level viewing areas',
      'World-class food vendors',
      'Premium merchandise stores',
      'VIP hospitality boxes',
      'Medical and security facilities',
      'Family entertainment zones',
      'State-of-the-art sound system'
    ],
    activities: [
      'Live match screenings on massive billboards',
      'Broadway performers',
      'International DJ sets',
      'Street performances',
      'Football freestyle shows',
      'Global food festival',
      'Trophy replica photos',
      'Interactive FIFA games'
    ],
    transportation: {
      metro: ['Subway Lines 1, 2, 3, 7, N, Q, R, W, S to Times Square-42nd St'],
      bus: ['Multiple MTA bus routes'],
      walking: 'Heart of Manhattan - highly walkable area',
      parking: 'Extremely limited and expensive - use public transit'
    },
    openingHours: '24/7 access, main events from 9:00 AM to midnight (subject to FIFA confirmation)',
    nearbyAttractions: [
      'Broadway theaters (surrounding)',
      'Rockefeller Center (10 min walk)',
      'Central Park (15 min walk)',
      'Empire State Building (15 min walk)',
      'Museum of Modern Art (10 min walk)'
    ],
    foodAndDrinks: [
      'NYC pizza and hot dogs',
      'International food court',
      'Rooftop bars and restaurants',
      'Food trucks',
      'Craft cocktail bars',
      'Kosher and halal options'
    ],
    accessibility: [
      'Fully accessible pedestrian plaza',
      'Wheelchair accessible viewing',
      'ASL services available',
      'Accessible restrooms in surrounding buildings',
      'Priority assistance zones'
    ],
    officialWebsite: 'https://www.timessquarenyc.org',
    tips: [
      'Arrive very early for popular matches',
      'Keep belongings secure in crowds',
      'Use subway - fastest way to get around',
      'Expensive area - budget accordingly',
      'Experience it at night when lights are spectacular'
    ]
  },
  {
    id: 'toronto',
    cityName: 'Toronto',
    country: 'Canada',
    name: 'Nathan Phillips Square Fan Fest',
    location: 'Nathan Phillips Square',
    address: '100 Queen St W, Toronto, ON M5H 2N2',
    coordinates: [-79.383056, 43.652778],
    description: "Named after Toronto's longest-serving mayor, Nathan Phillips Square is the city's premier public space and ceremonial heart. The 17,000-square-meter plaza features the iconic 'TORONTO' sign, reflecting pool (ice rink in winter), and the architecturally stunning City Hall. The square has hosted Raptors NBA Championship celebrations, New Year's Eve events, and countless public gatherings with crowds exceeding 50,000. Its central location and modern amenities make it perfect for a world-class fan festival.",
    capacity: 'Up to 40,000 fans',
    facilities: [
      'Large LED screens',
      'International food pavilions',
      'Official FIFA store',
      'VIP lounges',
      'Medical facilities',
      'Children\'s play areas',
      'Clean washroom facilities',
      'Free public WiFi'
    ],
    activities: [
      'Live match broadcasts',
      'Canadian cultural shows',
      'Live music performances',
      'Football competitions',
      'Indigenous cultural ceremonies',
      'Multicultural food fest',
      'Trophy viewing',
      'Interactive experiences'
    ],
    transportation: {
      metro: ['Subway Line 1 to Queen Station', 'Subway Line 1 to Osgoode Station'],
      bus: ['TTC Streetcar 501, 502, 503, 504'],
      walking: 'Central downtown location - walkable from most hotels',
      parking: 'Underground parking at City Hall'
    },
    openingHours: 'Daily from 9:00 AM to midnight during tournament (subject to FIFA confirmation)',
    nearbyAttractions: [
      'CN Tower (10 min walk)',
      'Ripley\'s Aquarium (12 min walk)',
      'St. Lawrence Market (15 min walk)',
      'Harbourfront (20 min walk)',
      'Distillery District (15 min drive)'
    ],
    foodAndDrinks: [
      'Canadian poutine stands',
      'International cuisine',
      'Toronto craft breweries',
      'Multicultural food vendors',
      'Canadian BBQ',
      'Vegetarian options'
    ],
    accessibility: [
      'Fully wheelchair accessible',
      'Accessible viewing platforms',
      'ASL and LSQ interpreters',
      'Accessible restrooms',
      'Designated accessibility services'
    ],
    officialWebsite: 'https://www.toronto.ca/explore-enjoy/festivals-events/nathan-phillips-square/',
    tips: [
      'Bring passport (US visitors need it for Canada)',
      'Use TTC - efficient and affordable',
      'Explore multicultural neighborhoods nearby',
      'Weather can be unpredictable - dress in layers',
      'Very safe city - enjoy freely'
    ]
  }
];

export const getFanZoneById = (id: string): FanZone | undefined => {
  return fanZones.find(zone => zone.id === id);
};

export const getFanZonesByCountry = (country: string): FanZone[] => {
  return fanZones.filter(zone => zone.country === country);
};

