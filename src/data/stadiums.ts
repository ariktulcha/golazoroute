export interface Stadium {
  id: string;
  name: string;
  city: string;
  cityId: string;
  country: 'USA' | 'Mexico' | 'Canada';
  capacity: number;
  yearBuilt: number;
  coordinates: [number, number];
  timezone: string;
  timezoneOffset: number;
  airportCode: string;
  transitScore: 'High' | 'Medium' | 'Low';
  distanceFromAirport: string;
  
  // SEO Keywords
  primaryKeyword: string;
  secondaryKeywords: string[];
  locationKeywords: string[];
  
  // Stadium-specific details
  roofType: 'Open' | 'Retractable' | 'Fixed';
  surface: string;
  homeTeams: string[];
  architect?: string;
  cost?: string;
  
  // Match information
  totalMatches: number;
  matchTypes: string[];
  
  // Transportation
  publicTransport: {
    train?: string;
    metro?: string;
    bus?: string;
    walkingDistance?: string;
  };
  
  parkingInfo: string;
  
  // Amenities
  amenities: string[];
  foodOptions: string[];
  
  // Historical significance
  notableEvents: string[];
  worldCupHistory?: string;
  
  // Visitor information
  tourAvailable: boolean;
  tourInfo?: string;
  nearbyHotels: string[];
  accessibility: string;
  
  // Images
  featuredImage: string;
  galleryImages?: string[];
  
  // Video
  youtubeVideoId?: string;
  
  // SEO content
  metaDescription: string;
  description: string;
  gettingThere: string;
  localTips: string[];
  
  // Geographic SEO
  geoRegion: string;
  geoPosition: string;
  nearbyLandmarks: string[];
}

export const stadiums: Stadium[] = [
  {
    id: 'metlife-stadium',
    name: 'MetLife Stadium',
    city: 'East Rutherford',
    cityId: 'new-york',
    country: 'USA',
    capacity: 82500,
    yearBuilt: 2010,
    coordinates: [-74.074167, 40.813611],
    timezone: 'America/New_York',
    timezoneOffset: -5,
    airportCode: 'EWR',
    transitScore: 'High',
    distanceFromAirport: '12 miles from Newark Liberty International Airport',
    
    primaryKeyword: 'MetLife Stadium World Cup 2026',
    secondaryKeywords: [
      'MetLife Stadium FIFA World Cup',
      'World Cup Final 2026 venue',
      'New Jersey World Cup stadium',
      'MetLife Stadium capacity',
      'Giants Jets stadium World Cup'
    ],
    locationKeywords: [
      'East Rutherford NJ',
      'Meadowlands Sports Complex',
      'New York New Jersey World Cup',
      'MetLife Stadium location',
      'NYC World Cup venue'
    ],
    
    roofType: 'Open',
    surface: 'UBU Speed S5-M Synthetic Turf',
    homeTeams: ['New York Giants (NFL)', 'New York Jets (NFL)'],
    architect: '360 Architecture',
    cost: '$1.6 billion',
    
    totalMatches: 8,
    matchTypes: ['Group Stage', 'Round of 32', 'Round of 16', 'Quarter-Finals', 'FINAL'],
    
    publicTransport: {
      train: 'NJ Transit from Penn Station NYC (30 minutes, $15)',
      bus: 'Coach USA bus service from Port Authority',
      walkingDistance: 'Direct train access to stadium'
    },
    
    parkingInfo: 'Multiple parking lots available. $40-80 per vehicle. Pre-booking recommended during World Cup.',
    
    amenities: [
      'Free WiFi throughout stadium',
      'MetLife Stadium app with live stats',
      'Premium club seats and suites',
      'American Dream shopping complex adjacent',
      'State-of-the-art video boards',
      'Accessible seating and facilities'
    ],
    
    foodOptions: [
      'Classic American stadium food',
      'New York pizza and hot dogs',
      'Craft beer selection',
      'Premium dining in club levels',
      'International cuisine options',
      'Vegetarian and vegan options available'
    ],
    
    notableEvents: [
      'Super Bowl XLVIII (2014)',
      'Copa América Centenario Final (2016)',
      'International Champions Cup matches',
      'WrestleMania 29 (2013)',
      'International soccer friendlies'
    ],
    
    worldCupHistory: 'First time hosting World Cup matches. Will host the FIFA World Cup 2026 Final on July 19, 2026.',
    
    tourAvailable: true,
    tourInfo: 'Stadium tours available year-round. Access to field, locker rooms, and press areas. Book in advance during World Cup period.',
    
    nearbyHotels: [
      'Meadowlands View Hotel',
      'Renaissance Meadowlands Hotel',
      'Hotels in Manhattan (15-25 min by train)',
      'Jersey City waterfront hotels',
      'Newark Airport hotels'
    ],
    
    accessibility: 'Fully ADA compliant with accessible seating, elevators, ramps, and companion restrooms throughout.',
    
    featuredImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&h=600&fit=crop',
    
    youtubeVideoId: 'ZWQjJaAMZ7s', // MetLife Stadium - Official Stadium Tour
    
    metaDescription: 'MetLife Stadium hosts the 2026 FIFA World Cup Final on July 19. Complete guide to the largest World Cup venue in USA, capacity 82,500. Transit, tickets, and travel tips.',
    
    description: `MetLife Stadium will host the most important match in football history - the FIFA World Cup 2026 Final on July 19, 2026. Located in the Meadowlands Sports Complex just 15 minutes from Manhattan, this 82,500-capacity venue is the largest stadium hosting World Cup 2026 matches.

Opened in 2010 at a cost of $1.6 billion, MetLife Stadium is home to both the New York Giants and New York Jets of the NFL. The stadium features modern amenities, including state-of-the-art video boards, free WiFi, and premium dining options.

With excellent public transportation via NJ Transit trains from Penn Station, MetLife Stadium is easily accessible for international visitors. The stadium has hosted numerous high-profile events, including Super Bowl XLVIII, making it the perfect venue for the World Cup Final.`,
    
    gettingThere: `The easiest way to reach MetLife Stadium is via NJ Transit trains from Penn Station in Manhattan. Trains run frequently on match days, taking approximately 30 minutes and costing around $15 round trip.

From Newark Airport (EWR): Take NJ Transit Northeast Corridor Line to Secaucus Junction, then transfer to the Meadowlands Rail Line (20-30 minutes total).

From New York airports: JFK and LaGuardia passengers should take public transit to Penn Station, then the NJ Transit train to the stadium.

Coach USA also operates bus services from Port Authority Bus Terminal in Manhattan directly to the stadium.

For those driving, multiple parking lots surround the stadium, but expect to pay $40-80 and arrive early as traffic is heavy on match days.`,
    
    localTips: [
      'Book train tickets in advance for World Cup matches - trains sell out',
      'Arrive 2-3 hours early for Final match due to security',
      'American Dream mall next door for pre-match dining and entertainment',
      'Stay in Manhattan for better hotel options and nightlife',
      'Weather can be hot and humid in July - stay hydrated',
      'Security is strict - check prohibited items list before arriving'
    ],
    
    geoRegion: 'US-NJ',
    geoPosition: '40.813611;-74.074167',
    nearbyLandmarks: [
      'American Dream Mall (0.5 miles)',
      'Manhattan Skyline (7 miles)',
      'Liberty State Park (10 miles)',
      'Times Square (12 miles)',
      'Statue of Liberty (15 miles)'
    ]
  },
  {
    id: 'sofi-stadium',
    name: 'SoFi Stadium',
    city: 'Inglewood',
    cityId: 'los-angeles',
    country: 'USA',
    capacity: 70240,
    yearBuilt: 2020,
    coordinates: [-118.337778, 33.953611],
    timezone: 'America/Los_Angeles',
    timezoneOffset: -8,
    airportCode: 'LAX',
    transitScore: 'Medium',
    distanceFromAirport: '3 miles from Los Angeles International Airport (LAX)',
    
    primaryKeyword: 'SoFi Stadium World Cup 2026',
    secondaryKeywords: [
      'SoFi Stadium FIFA World Cup',
      'Los Angeles World Cup venue',
      'SoFi Stadium capacity',
      'Inglewood World Cup stadium',
      'LA Rams Chargers stadium World Cup'
    ],
    locationKeywords: [
      'Inglewood California',
      'Los Angeles World Cup',
      'SoFi Stadium location',
      'LAX World Cup venue',
      'Hollywood Park stadium'
    ],
    
    roofType: 'Fixed',
    surface: 'Matrix Turf with Helix Technology',
    homeTeams: ['Los Angeles Rams (NFL)', 'Los Angeles Chargers (NFL)'],
    architect: 'HKS, Inc.',
    cost: '$5.5 billion',
    
    totalMatches: 8,
    matchTypes: ['Group Stage', 'Round of 32', 'Round of 16', 'Quarter-Finals'],
    
    publicTransport: {
      metro: 'Metro K Line (Crenshaw/LAX) - opening 2025',
      bus: 'Multiple Metro bus lines',
      walkingDistance: 'Ride-share pickup zones available'
    },
    
    parkingInfo: 'Premium parking available for $50-100. Limited spots - pre-booking essential. Ride-share recommended.',
    
    amenities: [
      'World\'s largest 360-degree Oculus video board',
      'Climate-controlled indoor environment',
      'Free WiFi throughout venue',
      'YouTube Theater adjacent',
      '4K HDR video system',
      'Infinity Screen 70,000 sq ft LED display'
    ],
    
    foodOptions: [
      'Gourmet California cuisine',
      'LA street food vendors',
      'International food hall',
      'Premium club dining',
      'Craft cocktails and local beers',
      'Vegan and organic options'
    ],
    
    notableEvents: [
      'Super Bowl LVI (2022)',
      'College Football Championship (2023)',
      'WrestleMania 39 (2023)',
      'CONCACAF Gold Cup matches',
      '2028 Summer Olympics events (scheduled)'
    ],
    
    worldCupHistory: 'First World Cup matches. One of the newest venues to host FIFA World Cup games.',
    
    tourAvailable: true,
    tourInfo: 'Public tours available including field access, locker rooms, and Oculus viewing. VIP tours include press box and suites.',
    
    nearbyHotels: [
      'LAX Airport hotels (3 miles)',
      'Santa Monica hotels (10 miles)',
      'Downtown LA hotels (12 miles)',
      'Manhattan Beach hotels (8 miles)',
      'Marina del Rey hotels (6 miles)'
    ],
    
    accessibility: 'State-of-the-art accessibility features. Wheelchair accessible seating throughout all levels. Assistive listening devices available.',
    
    featuredImage: 'https://images.unsplash.com/photo-1487946835291-399d8e0b5c8c?w=1200&h=600&fit=crop',
    
    youtubeVideoId: 'StTqXEQ2l-Y', // SoFi Stadium - Inside Look Tour
    
    metaDescription: 'SoFi Stadium hosts FIFA World Cup 2026 matches in Los Angeles. Complete guide to the $5.5B state-of-the-art venue with 70,240 capacity. Just 3 miles from LAX.',
    
    description: `SoFi Stadium is the newest and most technologically advanced stadium in the FIFA World Cup 2026 tournament. Opened in September 2020 at a staggering cost of $5.5 billion, it's home to both LA Rams and LA Chargers.

The stadium features the world's first 360-degree, double-sided Oculus video board, measuring 120 yards long and hanging from the roof. Despite being "open-air," the translucent ETFE roof provides climate control, making it comfortable even in LA's warm weather.

Located just 3 miles from LAX airport in Inglewood, SoFi Stadium is part of the larger Hollywood Park development, which includes hotels, retail, and entertainment venues. The stadium has already hosted Super Bowl LVI and will host matches at the 2028 Summer Olympics.`,
    
    gettingThere: `SoFi Stadium is extremely close to LAX - just 3 miles. However, direct public transit is still developing:

From LAX: The new Metro K Line (Crenshaw/LAX) connects the airport to the stadium area (2025 completion). Currently, ride-share is the fastest option (10-15 minutes, $15-25).

Metro Rail: Take the K Line to Downtown Inglewood station (opening 2025), then walk or shuttle to stadium.

From Downtown LA: Take Metro E Line west, transfer to K Line (30-40 minutes total).

Ride-share: Uber/Lyft have designated pickup/drop-off zones. Expect surge pricing on match days ($30-60 from downtown).

Parking: Very limited and expensive ($50-100). Arrive 3+ hours early if driving.`,
    
    localTips: [
      'Stadium is only 3 miles from LAX - perfect for international arrivals',
      'Uber/Lyft are most reliable transport option currently',
      'LA traffic is notorious - leave 2+ hours early for matches',
      'Covered stadium means comfortable viewing despite LA heat',
      'Explore Hollywood Park entertainment complex before/after match',
      'July weather is perfect - mild and dry, low humidity'
    ],
    
    geoRegion: 'US-CA',
    geoPosition: '33.953611;-118.337778',
    nearbyLandmarks: [
      'Los Angeles International Airport (3 miles)',
      'Manhattan Beach (7 miles)',
      'Santa Monica Pier (10 miles)',
      'Downtown Los Angeles (12 miles)',
      'Venice Beach (9 miles)'
    ]
  },
  {
    id: 'att-stadium',
    name: 'AT&T Stadium',
    city: 'Arlington',
    cityId: 'dallas',
    country: 'USA',
    capacity: 80000,
    yearBuilt: 2009,
    coordinates: [-97.093056, 32.7475],
    timezone: 'America/Chicago',
    timezoneOffset: -6,
    airportCode: 'DFW',
    transitScore: 'Low',
    distanceFromAirport: '18 miles from Dallas/Fort Worth International Airport',
    
    primaryKeyword: 'AT&T Stadium World Cup 2026',
    secondaryKeywords: [
      'AT&T Stadium FIFA World Cup',
      'Dallas World Cup venue',
      'Arlington Texas World Cup',
      'AT&T Stadium semi-final',
      'Cowboys stadium World Cup'
    ],
    locationKeywords: [
      'Arlington Texas',
      'Dallas Fort Worth World Cup',
      'AT&T Stadium location',
      'Jerry World FIFA',
      'DFW World Cup venue'
    ],
    
    roofType: 'Retractable',
    surface: 'Matrix Turf',
    homeTeams: ['Dallas Cowboys (NFL)'],
    architect: 'HKS, Inc.',
    cost: '$1.3 billion',
    
    totalMatches: 9,
    matchTypes: ['Group Stage', 'Round of 32', 'Round of 16', 'Quarter-Finals', 'Semi-Final'],
    
    publicTransport: {
      bus: 'Trinity Metro bus service from downtown Fort Worth',
      walkingDistance: 'Limited walkability - car recommended'
    },
    
    parkingInfo: 'Extensive parking available. $30-75 per vehicle. Multiple lots surround the stadium.',
    
    amenities: [
      '160-foot wide HD video board (largest in NFL)',
      'Retractable roof with glass doors',
      'Art collection including $375,000 star logo',
      'Premium club lounges',
      'Standing room only party areas',
      'Cowboys Pro Shop megastore'
    ],
    
    foodOptions: [
      'Texas BBQ stations',
      'Tex-Mex cuisine',
      'Premium steakhouse options',
      'Local Texas craft beers',
      'Whataburger and local chains',
      'International concessions'
    ],
    
    notableEvents: [
      'Super Bowl XLV (2011)',
      'College Football Playoff games',
      'NBA All-Star Game (2010)',
      'Boxing mega-fights (Pacquiao vs Marquez)',
      'International soccer matches'
    ],
    
    worldCupHistory: 'First World Cup matches. Will host a Semi-Final match on July 15, 2026.',
    
    tourAvailable: true,
    tourInfo: 'Self-guided and VIP tours available. Access to field, art collection, and Cowboys locker room. Very popular - book early.',
    
    nearbyHotels: [
      'Live! by Loews Arlington',
      'AT&T Hotel and Conference Center',
      'Dallas downtown hotels (20 miles)',
      'Fort Worth hotels (15 miles)',
      'DFW Airport hotels (15 miles)'
    ],
    
    accessibility: 'Fully accessible with elevators, ramps, and accessible seating in all levels. Companion seats available.',
    
    featuredImage: 'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=1200&h=600&fit=crop',
    
    metaDescription: 'AT&T Stadium hosts FIFA World Cup 2026 Semi-Final in Arlington, Texas. Complete guide to "Jerry World" with 80,000 capacity, retractable roof, and massive video board.',
    
    description: `Known as "Jerry World" after Cowboys owner Jerry Jones, AT&T Stadium is an architectural marvel that will host a World Cup 2026 Semi-Final match. With a retractable roof and massive 160-foot-wide video board (the largest in the NFL), this $1.3 billion venue opened in 2009.

The stadium's retractable roof and glass end doors create an open-air feel when open, or climate-controlled comfort when closed. The venue has hosted Super Bowl XLV, College Football Playoffs, and numerous international soccer matches.

Located in Arlington, Texas (between Dallas and Fort Worth), the stadium is part of an entertainment district that includes Globe Life Field (home of Texas Rangers) and Six Flags Over Texas. The stadium holds an impressive art collection, including a $375,000 custom star logo.`,
    
    gettingThere: `AT&T Stadium is located in Arlington, Texas, midway between Dallas and Fort Worth. Public transportation is limited, so renting a car or using ride-share is recommended:

From DFW Airport: 18 miles, 25-30 minutes drive. Uber/Lyft $35-50.

From Dallas Love Field: 15 miles, 20-25 minutes drive. Uber/Lyft $30-45.

Trinity Metro Bus: Limited service from Fort Worth downtown. Not ideal for match days.

Rental Car: Most flexible option. Extensive parking available ($30-75).

Ride-share: Designated pickup/drop-off areas. Expect surge pricing on match days.

The stadium is car-centric - plan accordingly. Traffic can be heavy before/after matches.`,
    
    localTips: [
      'Rent a car - public transit is very limited in Arlington',
      'Texas heat in July can exceed 100°F - retractable roof provides relief',
      'Arrive early to see the impressive art collection and video board',
      'Six Flags Over Texas nearby for pre/post-match entertainment',
      'Authentic Texas BBQ restaurants throughout Dallas-Fort Worth',
      'Hotels book up fast - consider staying in Dallas or Fort Worth'
    ],
    
    geoRegion: 'US-TX',
    geoPosition: '32.7475;-97.093056',
    nearbyLandmarks: [
      'Globe Life Field (0.5 miles)',
      'Six Flags Over Texas (2 miles)',
      'Texas Live! entertainment district (0.3 miles)',
      'Fort Worth Stockyards (15 miles)',
      'Dallas downtown (20 miles)'
    ]
  },
  {
    id: 'estadio-azteca',
    name: 'Estadio Azteca',
    city: 'Mexico City',
    cityId: 'mexico-city',
    country: 'Mexico',
    capacity: 87523,
    yearBuilt: 1966,
    coordinates: [-99.150556, 19.303056],
    timezone: 'America/Mexico_City',
    timezoneOffset: -6,
    airportCode: 'MEX',
    transitScore: 'High',
    distanceFromAirport: '12 miles from Mexico City International Airport',
    
    primaryKeyword: 'Estadio Azteca World Cup 2026',
    secondaryKeywords: [
      'Estadio Azteca FIFA World Cup 2026',
      'Mexico City World Cup stadium',
      'Azteca Stadium three World Cups',
      'Estadio Azteca capacity',
      'Maradona Hand of God stadium'
    ],
    locationKeywords: [
      'Mexico City World Cup',
      'Estadio Azteca location',
      'CDMX World Cup venue',
      'Santa Ursula Mexico City',
      'Azteca Stadium Mexico'
    ],
    
    roofType: 'Open',
    surface: 'Natural grass',
    homeTeams: ['Club América', 'Mexico National Team'],
    architect: 'Pedro Ramírez Vázquez, Rafael Mijares',
    
    totalMatches: 5,
    matchTypes: ['Opening Ceremony', 'Group Stage', 'Round of 32'],
    
    publicTransport: {
      metro: 'Metro Line 2 to Tasqueña station, then Light Rail to Estadio Azteca',
      bus: 'Multiple bus lines from city center',
      walkingDistance: 'Walking from metro is possible but uphill'
    },
    
    parkingInfo: 'Limited parking available. Public transportation strongly recommended due to traffic.',
    
    amenities: [
      'Historic double-decker seating bowl',
      'Club América museum',
      'Multiple concession levels',
      'Press facilities',
      'VIP suites and boxes',
      'Iconic Olympic rings still visible'
    ],
    
    foodOptions: [
      'Traditional Mexican street food',
      'Tacos, quesadillas, and tortas',
      'Local Mexican beers',
      'International concessions',
      'Churros and traditional sweets',
      'Club América branded food stands'
    ],
    
    notableEvents: [
      '1970 FIFA World Cup (including Final)',
      '1986 FIFA World Cup (including Final)',
      'Maradona\'s "Hand of God" and "Goal of the Century" (1986)',
      'Summer Olympics 1968',
      'CONCACAF Champions League Finals',
      'Paul McCartney concerts',
      'Michael Jackson concerts'
    ],
    
    worldCupHistory: 'The ONLY stadium in the world to host TWO World Cup Finals (1970, 1986). Will host its THIRD World Cup in 2026, including the Opening Ceremony.',
    
    tourAvailable: true,
    tourInfo: 'Stadium tours available including press areas, locker rooms, and field access. Visit the site of Maradona\'s famous goals.',
    
    nearbyHotels: [
      'Hotels in Polanco district (30 min)',
      'Hotels in Roma/Condesa (25 min)',
      'Hotels in Centro Histórico (40 min)',
      'Airport hotels (15 min)',
      'Santa Fe business district hotels (35 min)'
    ],
    
    accessibility: 'Accessible seating available. Note that stadium was built in 1966, so accessibility features are more limited than newer venues.',
    
    featuredImage: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&h=600&fit=crop',
    
    youtubeVideoId: '1wnje7fGMVk', // Estadio Azteca - Historic Stadium Documentary
    
    metaDescription: 'Estadio Azteca hosts 2026 World Cup Opening Ceremony - the only stadium with 3 World Cups! Capacity 87,523 in Mexico City. History, transport, and visitor guide.',
    
    description: `Estadio Azteca is the most iconic football stadium in the world and the ONLY venue to have hosted TWO World Cup Finals (1970 and 1986). In 2026, it will make history again by becoming the first stadium to host THREE World Cups, including the Opening Ceremony.

Built in 1966 at an altitude of 7,350 feet (2,240 meters), Estadio Azteca is where Diego Maradona scored his famous "Hand of God" goal and "Goal of the Century" against England in the 1986 quarter-finals. The stadium has also hosted Summer Olympics matches, boxing mega-fights, and legendary concerts.

With a capacity of 87,523, it's the largest stadium in the 2026 tournament and one of the world's great sporting cathedrals. The double-decker design and passionate Mexican fans create an atmosphere unmatched anywhere in world football.`,
    
    gettingThere: `Mexico City's excellent Metro system makes reaching Estadio Azteca straightforward:

Metro Route: Take Metro Line 2 (Blue Line) to Tasqueña station. From there, board the Light Rail (Tren Ligero) heading south to "Estadio Azteca" station. Total journey from city center: 45-60 minutes, cost: ~30 pesos ($2).

From Airport: Take Metro Line 5 to Pantitlán, transfer to Line 1, then transfer to Line 2 at Pino Suárez. Total time: 60-75 minutes.

Uber/Taxi: From city center (Zócalo): 30-40 minutes depending on traffic. Cost: 150-250 pesos ($8-13). From airport: 200-300 pesos ($10-15).

Important: Mexico City traffic is extremely heavy. Always allow extra time. Metro is fastest on match days.`,
    
    localTips: [
      'Stadium at 7,350 ft elevation - stay hydrated, limit alcohol',
      'Allow 1-2 days to acclimatize to altitude if coming from sea level',
      'Metro is safest and fastest option - avoid driving',
      'Authentic street food vendors outside stadium are excellent',
      'Stadium tours must-do for football history fans',
      'Passionate atmosphere - arrive early to soak it in'
    ],
    
    geoRegion: 'MX-CMX',
    geoPosition: '19.303056;-99.150556',
    nearbyLandmarks: [
      'Coyoacán (Frida Kahlo Museum) 6 miles',
      'Xochimilco Floating Gardens 8 miles',
      'UNAM University Campus 3 miles',
      'Centro Histórico 10 miles',
      'Teotihuacan Pyramids 30 miles'
    ]
  },
  {
    id: 'mercedes-benz-stadium',
    name: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    cityId: 'atlanta',
    country: 'USA',
    capacity: 71000,
    yearBuilt: 2017,
    coordinates: [-84.400833, 33.755556],
    timezone: 'America/New_York',
    timezoneOffset: -5,
    airportCode: 'ATL',
    transitScore: 'Medium',
    distanceFromAirport: '10 miles from Hartsfield-Jackson Atlanta International Airport',
    
    primaryKeyword: 'Mercedes-Benz Stadium World Cup 2026',
    secondaryKeywords: [
      'Mercedes-Benz Stadium FIFA World Cup',
      'Atlanta World Cup venue',
      'Mercedes-Benz Stadium semi-final',
      'Atlanta Falcons stadium World Cup',
      'MBS World Cup 2026'
    ],
    locationKeywords: [
      'Atlanta Georgia',
      'Downtown Atlanta stadium',
      'Mercedes-Benz Stadium location',
      'ATL World Cup venue',
      'Atlanta World Cup 2026'
    ],
    
    roofType: 'Retractable',
    surface: 'FieldTurf',
    homeTeams: ['Atlanta Falcons (NFL)', 'Atlanta United FC (MLS)'],
    architect: 'HOK',
    cost: '$1.5 billion',
    
    totalMatches: 8,
    matchTypes: ['Group Stage', 'Round of 32', 'Round of 16', 'Semi-Final'],
    
    publicTransport: {
      metro: 'MARTA Blue/Green Line to Vine City or GWCC/CNN Center stations',
      bus: 'Multiple MARTA bus routes',
      walkingDistance: '10-15 minute walk from stations'
    },
    
    parkingInfo: 'Limited parking available. $30-60 per vehicle. Public transit strongly recommended.',
    
    amenities: [
      'Revolutionary retractable roof (opens like a camera aperture)',
      '360-degree halo video board',
      'Free WiFi throughout stadium',
      'LEED Platinum certified (green building)',
      'Fan-friendly pricing for food and beverages',
      'Chick-fil-A restaurant in stadium'
    ],
    
    foodOptions: [
      'Southern soul food',
      'Chick-fil-A (home city of chain)',
      'Local Atlanta BBQ',
      'Craft beer selection',
      'Affordable concession pricing',
      'International cuisine options'
    ],
    
    notableEvents: [
      'Super Bowl LIII (2019)',
      'College Football Playoff Championship (2018)',
      'SEC Championship Games',
      'International Champions Cup matches',
      'NCAA Final Four (2020)',
      'Major concerts and events'
    ],
    
    worldCupHistory: 'First World Cup matches. Will host a Semi-Final match on July 14, 2026.',
    
    tourAvailable: true,
    tourInfo: 'Stadium tours available including field, locker rooms, and unique retractable roof viewing.',
    
    nearbyHotels: [
      'Downtown Atlanta hotels (1-2 miles)',
      'Midtown Atlanta hotels (3 miles)',
      'Buckhead hotels (10 miles)',
      'Airport hotels (12 miles)'
    ],
    
    accessibility: 'State-of-the-art accessibility with LEED Platinum certification. Fully ADA compliant.',
    
    featuredImage: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=1200&h=600&fit=crop',
    
    metaDescription: 'Mercedes-Benz Stadium hosts FIFA World Cup 2026 Semi-Final in Atlanta. Guide to the $1.5B eco-friendly venue with revolutionary retractable roof and 71,000 capacity.',
    
    description: `Mercedes-Benz Stadium, opened in 2017, represents the cutting edge of sports venue design. The $1.5 billion facility features a revolutionary retractable roof that opens and closes like a camera aperture - the first of its kind in the world. The stadium will host a Semi-Final match during World Cup 2026.

Located in downtown Atlanta, the stadium is home to the NFL's Atlanta Falcons and MLS's Atlanta United FC. It's the first professional sports stadium to achieve LEED Platinum certification, showcasing Atlanta's commitment to sustainability.

The venue is famous for its fan-friendly concession pricing, with $2 hot dogs and $5 beers, a rarity in modern sports venues. The 360-degree halo video board provides stunning visuals from every seat in the house.`,
    
    gettingThere: `Mercedes-Benz Stadium is located in downtown Atlanta with good MARTA rail access:

MARTA Rail: Take the Blue or Green Line to either Vine City or GWCC/CNN Center stations. Both are 10-15 minute walks to the stadium. Total journey from airport: 25-30 minutes.

From Hartsfield-Jackson Airport: MARTA Red/Gold Line to Five Points, transfer to Blue/Green Line. Cost: $2.50, Time: 25-30 minutes.

Uber/Lyft: From downtown hotels: $10-15. From airport: $25-35 (20-30 minutes depending on traffic).

Parking: Very limited and expensive ($30-60). Public transit is much easier and faster on game days.

The stadium is walkable from most downtown Atlanta hotels.`,
    
    localTips: [
      'MARTA is fastest way - avoid driving/parking hassles',
      'Hot and humid in July - retractable roof provides relief',
      'Fan-friendly pricing means cheap food/drinks inside',
      'Arrive early to see unique retractable roof',
      'World of Coca-Cola and Georgia Aquarium nearby',
      'Explore Atlanta\'s civil rights history sites'
    ],
    
    geoRegion: 'US-GA',
    geoPosition: '33.755556;-84.400833',
    nearbyLandmarks: [
      'Georgia Aquarium (0.5 miles)',
      'World of Coca-Cola (0.5 miles)',
      'Centennial Olympic Park (0.3 miles)',
      'CNN Center (0.4 miles)',
      'Martin Luther King Jr. National Historic Site (2 miles)'
    ]
  },
  {
    id: 'lumen-field',
    name: 'Lumen Field',
    city: 'Seattle',
    cityId: 'seattle',
    country: 'USA',
    capacity: 69000,
    yearBuilt: 2002,
    coordinates: [-122.331944, 47.595278],
    timezone: 'America/Los_Angeles',
    timezoneOffset: -8,
    airportCode: 'SEA',
    transitScore: 'High',
    distanceFromAirport: '14 miles from Seattle-Tacoma International Airport',
    
    primaryKeyword: 'Lumen Field World Cup 2026',
    secondaryKeywords: [
      'Lumen Field FIFA World Cup',
      'Seattle World Cup venue',
      'Seahawks stadium World Cup',
      'Sounders FC World Cup stadium',
      'Seattle World Cup 2026'
    ],
    locationKeywords: [
      'Seattle Washington',
      'Downtown Seattle stadium',
      'Lumen Field location',
      'SEA World Cup venue',
      'Pioneer Square Seattle'
    ],
    
    roofType: 'Open',
    surface: 'FieldTurf',
    homeTeams: ['Seattle Seahawks (NFL)', 'Seattle Sounders FC (MLS)'],
    architect: 'Ellerbe Becket',
    cost: '$430 million',
    
    totalMatches: 6,
    matchTypes: ['Group Stage', 'Round of 32', 'Round of 16'],
    
    publicTransport: {
      train: 'Link Light Rail to Stadium station (direct access)',
      bus: 'Multiple King County Metro routes',
      walkingDistance: 'Direct Light Rail access to stadium'
    },
    
    parkingInfo: 'Limited parking available. $40-60 per vehicle. Light Rail strongly recommended.',
    
    amenities: [
      'Partially covered seating (protects from rain)',
      'Renowned for loud crowd atmosphere',
      'Free WiFi throughout venue',
      'Premium club seats',
      'Seattle Seahawks Pro Shop',
      'Excellent sightlines from all seats'
    ],
    
    foodOptions: [
      'Pacific Northwest seafood',
      'Seattle coffee culture',
      'Local craft beers',
      'Pike Place Market vendors',
      'Asian fusion options',
      'Vegetarian and sustainable options'
    ],
    
    notableEvents: [
      'MLS Cup Finals',
      'International soccer matches',
      'CONCACAF Gold Cup matches',
      'NFL Playoff games',
      'Copa América Centenario 2016',
      'Major concerts and events'
    ],
    
    worldCupHistory: 'First World Cup matches. Known for passionate soccer culture with MLS Sounders.',
    
    tourAvailable: true,
    tourInfo: 'Stadium tours available on non-event days. Access to field, locker rooms, and press areas.',
    
    nearbyHotels: [
      'Downtown Seattle hotels (1 mile)',
      'Pioneer Square hotels (0.5 miles)',
      'Waterfront hotels (1.5 miles)',
      'Capitol Hill hotels (2 miles)'
    ],
    
    accessibility: 'Fully ADA compliant with accessible seating, elevators, and amenities throughout.',
    
    featuredImage: 'https://images.unsplash.com/photo-1544128307-3dfb4a0e9974?w=1200&h=600&fit=crop',
    
    metaDescription: 'Lumen Field hosts FIFA World Cup 2026 in Seattle. Complete guide to the passionate soccer venue with 69,000 capacity, famous 12th Man crowd, and perfect Link Light Rail access.',
    
    description: `Lumen Field, home to one of MLS's most passionate fan bases (Seattle Sounders FC), will bring authentic soccer atmosphere to World Cup 2026. Opened in 2002, this 69,000-capacity venue is famous for its loud, engaged crowds - the "12th Man" - thanks to its partial roof that traps sound.

Located in downtown Seattle with direct Link Light Rail access from the airport, Lumen Field is one of the most accessible stadiums in the tournament. The Pacific Northwest weather in June-July is typically perfect - warm, dry, and comfortable.

Seattle has a deep soccer culture, with the Sounders regularly drawing over 40,000 fans per match. This authentic football environment will create an electric atmosphere for World Cup matches.`,
    
    gettingThere: `Lumen Field has the best public transit access of any US stadium in the tournament:

Link Light Rail: Direct "Stadium" station at the venue. From SeaTac Airport: 40 minutes, $3. From downtown: 5-10 minutes.

From Sea-Tac Airport: Take the Link Light Rail northbound directly to Stadium station. No transfers needed.

King County Metro Bus: Multiple routes serve the stadium area from throughout Seattle.

Uber/Lyft: From downtown: $10-15. From airport: $40-50.

Walking: Easily walkable from downtown Seattle hotels (15-20 minutes).

Parking: Very limited. With perfect Light Rail access, there's no reason to drive.`,
    
    localTips: [
      'Light Rail from airport is fastest and cheapest option',
      'June/July weather is perfect - Seattle\'s dry season',
      'Pike Place Market and waterfront are walking distance',
      'Coffee culture is world-class - explore local cafes',
      'Arrive early to soak in passionate soccer atmosphere',
      'Crowd noise is legendary - be ready for loud environment'
    ],
    
    geoRegion: 'US-WA',
    geoPosition: '47.595278;-122.331944',
    nearbyLandmarks: [
      'Pike Place Market (1 mile)',
      'Seattle Waterfront (1 mile)',
      'Pioneer Square (0.3 miles)',
      'Space Needle (2 miles)',
      'Seattle Art Museum (1 mile)'
    ]
  },
  {
    id: 'bmo-field',
    name: 'BMO Field',
    city: 'Toronto',
    cityId: 'toronto',
    country: 'Canada',
    capacity: 45000,
    yearBuilt: 2007,
    coordinates: [-79.418611, 43.633333],
    timezone: 'America/Toronto',
    timezoneOffset: -5,
    airportCode: 'YYZ',
    transitScore: 'High',
    distanceFromAirport: '15 miles from Toronto Pearson International Airport',
    
    primaryKeyword: 'BMO Field World Cup 2026',
    secondaryKeywords: [
      'BMO Field FIFA World Cup',
      'Toronto World Cup venue',
      'Canada World Cup stadium',
      'BMO Field capacity',
      'Toronto FC World Cup stadium'
    ],
    locationKeywords: [
      'Toronto Ontario',
      'Exhibition Place Toronto',
      'BMO Field location',
      'YYZ World Cup venue',
      'Toronto World Cup 2026'
    ],
    
    roofType: 'Open',
    surface: 'Natural grass',
    homeTeams: ['Toronto FC (MLS)', 'Canadian National Team'],
    architect: 'Brisbin Brook Beynon Architects',
    cost: '$62.9 million CAD',
    
    totalMatches: 6,
    matchTypes: ['Group Stage', 'Round of 32'],
    
    publicTransport: {
      train: 'GO Transit train to Exhibition GO station',
      metro: 'TTC Streetcar 509 and 511 to Exhibition Loop',
      bus: 'Multiple TTC bus routes',
      walkingDistance: '5-10 minute walk from Exhibition Loop'
    },
    
    parkingInfo: 'Parking available at Exhibition Place. $20-40 CAD. Public transit recommended.',
    
    amenities: [
      'Intimate soccer-specific stadium',
      'Excellent sightlines for soccer',
      'Premium suites and club seats',
      'Multiple concession levels',
      'Free WiFi available',
      'Accessible facilities throughout'
    ],
    
    foodOptions: [
      'Canadian poutine',
      'Toronto street food',
      'International cuisine reflecting diversity',
      'Craft beer and local beverages',
      'Vegetarian options',
      'Tim Hortons coffee (Canadian icon)'
    ],
    
    notableEvents: [
      'MLS Cup hosting',
      'CONCACAF Gold Cup matches',
      'International friendly matches',
      'CFL Grey Cup (Toronto Argonauts)',
      'Major concerts and festivals'
    ],
    
    worldCupHistory: 'First World Cup matches. Purpose-built soccer stadium provides authentic football atmosphere.',
    
    tourAvailable: true,
    tourInfo: 'Stadium tours available on non-match days. Check Toronto FC website for schedule.',
    
    nearbyHotels: [
      'Downtown Toronto hotels (2-3 miles)',
      'Harbourfront hotels (2 miles)',
      'Liberty Village hotels (1 mile)',
      'Airport hotels (15 miles)'
    ],
    
    accessibility: 'Fully accessible venue with wheelchair seating, elevators, and companion facilities.',
    
    featuredImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop',
    
    metaDescription: 'BMO Field hosts FIFA World Cup 2026 in Toronto, Canada. Guide to the soccer-specific stadium with 45,000 capacity, excellent transit access, and authentic football atmosphere.',
    
    description: `BMO Field is Canada's premier soccer-specific stadium and home to Toronto FC and the Canadian national team. Opened in 2007 and expanded to 45,000 capacity, it offers an intimate, authentic soccer experience perfect for World Cup matches.

Located at Exhibition Place near Lake Ontario and downtown Toronto, BMO Field is easily accessible by TTC streetcar, GO Transit trains, and is walkable from downtown hotels. Toronto is one of the world's most multicultural cities, ensuring a diverse, passionate crowd for World Cup matches.

The stadium's design prioritizes soccer viewing, with steep seating angles and proximity to the pitch creating an electric atmosphere. US visitors need a valid passport to enter Canada.`,
    
    gettingThere: `BMO Field is well-connected to Toronto's excellent public transportation system:

TTC Streetcar: Routes 509 and 511 to Exhibition Loop, then 5-minute walk. Most convenient from downtown. Cost: $3.25 CAD.

GO Transit: Exhibition GO Station provides regional access. Direct trains from Union Station downtown.

From Pearson Airport (YYZ): Take UP Express train to Union Station (25 minutes), then streetcar 509 or 511 to stadium. Total: 45-60 minutes.

Uber/Lyft: From downtown: $15-25 CAD. From airport: $50-70 CAD.

Walking: Easily walkable from downtown hotels (25-35 minutes along scenic waterfront).

Note: US citizens need valid passport to enter Canada.`,
    
    localTips: [
      'US visitors need valid passport - plan ahead',
      'TTC Streetcar is easy and convenient option',
      'Toronto is extremely multicultural - diverse fan atmosphere',
      'Explore CN Tower and Harbourfront before match',
      'June weather is perfect - warm and pleasant',
      'Canadian dollar is cheaper than USD - good value'
    ],
    
    geoRegion: 'CA-ON',
    geoPosition: '43.633333;-79.418611',
    nearbyLandmarks: [
      'CN Tower (2 miles)',
      'Rogers Centre (2 miles)',
      'Harbourfront (1.5 miles)',
      'Liberty Village (0.5 miles)',
      'Fort York National Historic Site (1 mile)'
    ]
  }
];

// Helper functions
export const getStadiumById = (id: string): Stadium | undefined => {
  return stadiums.find(stadium => stadium.id === id);
};

export const getStadiumsByCountry = (country: 'USA' | 'Mexico' | 'Canada'): Stadium[] => {
  return stadiums.filter(stadium => stadium.country === country);
};

export const getAllStadiums = (): Stadium[] => {
  return stadiums;
};

export const getStadiumByCityId = (cityId: string): Stadium | undefined => {
  return stadiums.find(stadium => stadium.cityId === cityId);
};

