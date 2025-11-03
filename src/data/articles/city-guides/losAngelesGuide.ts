import { BlogArticle } from '../../blogTypes';

export const losAngelesGuideArticle: BlogArticle = {
  id: 'los-angeles-world-cup-2026',
  slug: 'los-angeles-world-cup-2026-sofi-stadium-guide',
  title: 'Los Angeles World Cup 2026: SoFi Stadium Complete Travel Guide',
  metaDescription: 'Complete guide to World Cup 2026 in Los Angeles at SoFi Stadium. Transportation, hotels, beaches, Hollywood attractions, and everything you need for the perfect LA soccer experience.',
  category: 'city-guide',
  publishDate: '2025-01-25',
  lastUpdated: '2025-10-31',
  author: 'World Cup 2026 Travel Team',
  readTime: 14,
  featuredImage: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=1200&h=600&fit=crop',
  tags: ['los-angeles', 'sofi-stadium', 'california', 'hollywood', 'beaches', 'city-guide'],
  relatedCities: ['los-angeles'],
  relatedArticles: ['stadium-database-2026', 'match-schedule-2026'],
  
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Los Angeles World Cup 2026: SoFi Stadium Complete Travel Guide',
    description: 'Complete guide to attending World Cup 2026 in Los Angeles',
    datePublished: '2025-01-25',
    dateModified: '2025-10-31',
    author: {
      '@type': 'Organization',
      name: 'World Cup 2026 Travel Planner'
    }
  },

  content: {
    quickFacts: [
      { label: 'Stadium', value: 'SoFi Stadium', icon: '🏟️' },
      { label: 'Capacity', value: '70,240', icon: '👥' },
      { label: 'Matches', value: '8 Games', icon: '⚽' },
      { label: 'Airport Distance', value: 'LAX (3 mi)', icon: '✈️' }
    ],

    sections: [
      {
        id: 'intro',
        title: 'Why visit Los Angeles for World Cup 2026?',
        content: `
          <p class="text-lg mb-4"><strong>Direct Answer:</strong> Los Angeles will host <strong>8 World Cup 2026 matches</strong> at the state-of-the-art SoFi Stadium, including a Quarter-Final. LA combines world-class soccer with Hollywood glamour, pristine beaches, perfect weather, and unmatched entertainment - all just 3 miles from LAX airport.</p>

          <p class="mb-4">SoFi Stadium opened in 2020 and is the crown jewel of World Cup 2026 venues. The $5 billion facility features a translucent roof creating an indoor-outdoor experience, climate control for LA's perfect weather, and the world's first 360-degree, double-sided video board - the Oculus.</p>

          <p class="mb-6">Beyond soccer, LA offers everything: walk the Hollywood Walk of Fame, surf in Malibu, shop on Rodeo Drive, explore world-class museums, and experience the best food scene in America. Average temperatures during the tournament (June-July) are a perfect 70-85°F with virtually no rain.</p>

          <h3 class="text-2xl font-bold mb-4 mt-8">Key Facts:</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Location:</strong> Inglewood, California (3 miles from LAX)</li>
            <li><strong>Capacity:</strong> 70,240 (6th largest in tournament)</li>
            <li><strong>Matches:</strong> 8 games including Quarter-Final</li>
            <li><strong>Weather:</strong> Sunny, 70-85°F (21-29°C)</li>
            <li><strong>Transit Score:</strong> Medium (Uber/Lyft recommended)</li>
            <li><strong>Average Hotel:</strong> $220/night</li>
          </ul>
        `
      },

      {
        id: 'stadium-guide',
        title: 'What makes SoFi Stadium special?',
        content: `
          <h3 class="text-2xl font-bold mb-4">Stadium Features:</h3>

          <h4 class="text-xl font-bold mb-3 mt-6">🏗️ Architecture & Design</h4>
          <p class="mb-4">SoFi Stadium is an architectural marvel designed by HKS Architects. The translucent ETFE roof covers 2.5 million square feet, making it the largest stadium canopy in the world. Despite the roof, the stadium is classified as "open-air" because sides are open to the California breeze.</p>

          <h4 class="text-xl font-bold mb-3 mt-6">📺 The Oculus</h4>
          <p class="mb-4">The centerpiece is the Infinity Screen by Samsung - a dual-sided, 360-degree video board that's 120 yards long. It's the largest video board in sports, visible from every seat and even from planes flying into LAX!</p>

          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <h4 class="text-xl font-bold mb-3">Stadium Amenities:</h4>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Climate Control:</strong> Perfect temperature year-round</li>
              <li><strong>Premium Seating:</strong> 260 luxury suites, club seats</li>
              <li><strong>Food & Drink:</strong> 50+ concession stands, gourmet options</li>
              <li><strong>Technology:</strong> 5G connectivity, mobile ordering</li>
              <li><strong>Accessibility:</strong> Fully ADA compliant</li>
              <li><strong>Parking:</strong> 10,000+ spaces on-site</li>
            </ul>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🎨 Art & Entertainment</h4>
          <p class="mb-4">The stadium features curated art installations and is part of Hollywood Park, a 298-acre entertainment destination with shopping, dining, and entertainment year-round.</p>
        `
      },

      {
        id: 'getting-there',
        title: 'How do I get to SoFi Stadium?',
        content: `
          <p class="mb-4">SoFi Stadium is located in Inglewood, just 3 miles from LAX airport - the closest stadium-airport combination in the entire tournament!</p>

          <h3 class="text-2xl font-bold mb-4 mt-8">Transportation Options:</h3>

          <h4 class="text-xl font-bold mb-3 mt-6">🚗 From LAX Airport (Recommended)</h4>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-2"><strong>Uber/Lyft:</strong> 10-15 minutes, $15-30 (surge pricing on match days)</p>
            <p class="mb-2"><strong>Taxi:</strong> 15 minutes, $25-40</p>
            <p class="mb-2"><strong>Rental Car:</strong> Easy 10-minute drive, parking $40-80</p>
            <p><strong>Shuttle:</strong> Some hotels offer game day shuttles</p>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🚇 Public Transit</h4>
          <p class="mb-4">LA Metro is expanding a rail line to SoFi Stadium, expected to open by 2026. Until then, public transit is limited. The closest Metro station is currently Aviation/LAX (Green Line), then Uber/Lyft from there.</p>

          <h4 class="text-xl font-bold mb-3 mt-6">🅿️ Parking at Stadium</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>General Parking:</strong> $40-60 (book in advance)</li>
            <li><strong>Premier Parking:</strong> $80-150 (closer spots)</li>
            <li><strong>ADA Parking:</strong> Available with proper placard</li>
            <li><strong>Tip:</strong> Arrive 2-3 hours early on match days</li>
          </ul>

          <div class="bg-fifa-blue-500/10 border border-fifa-blue-500/30 p-4 rounded-lg mb-4">
            <p><strong>💡 Pro Tip:</strong> Book Uber/Lyft from your hotel 2 hours before kickoff to avoid surge pricing. The short distance from LAX-area hotels makes ride-sharing very affordable ($10-20 normally).</p>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🚕 From Other LA Areas</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Downtown LA:</strong> 20-30 min ($25-40 Uber)</li>
            <li><strong>Santa Monica:</strong> 15-20 min ($20-35 Uber)</li>
            <li><strong>Hollywood:</strong> 25-35 min ($30-45 Uber)</li>
            <li><strong>Beverly Hills:</strong> 20-25 min ($25-40 Uber)</li>
          </ul>
        `
      },

      {
        id: 'where-to-stay',
        title: 'Where should I stay in Los Angeles?',
        content: `
          <p class="mb-4">Los Angeles hotels average <strong>$220 per night</strong> during World Cup. Choose your location based on what you want to experience:</p>

          <h3 class="text-2xl font-bold mb-4 mt-8">Best Neighborhoods:</h3>

          <h4 class="text-xl font-bold mb-3 mt-6">🏟️ Near Stadium (Inglewood/LAX Area)</h4>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-3"><strong>Best for:</strong> Convenience, budget</p>
            <p class="mb-3"><strong>Distance to Stadium:</strong> 5-10 minutes</p>
            <p class="mb-3"><strong>Price Range:</strong> $150-250/night</p>
            <p class="mb-3"><strong>Pros:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Walk or quick Uber to stadium</li>
              <li>Near LAX (easy airport access)</li>
              <li>More affordable than beach/Hollywood</li>
            </ul>
            <p class="mb-3"><strong>Cons:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>Limited nightlife</li>
              <li>Not traditional "LA experience"</li>
              <li>Need transport for sightseeing</li>
            </ul>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🏖️ Santa Monica/Venice Beach</h4>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-3"><strong>Best for:</strong> Beach lovers, restaurants, nightlife</p>
            <p class="mb-3"><strong>Distance to Stadium:</strong> 15-20 minutes</p>
            <p class="mb-3"><strong>Price Range:</strong> $250-400/night</p>
            <p class="mb-3"><strong>Pros:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Beach access and ocean views</li>
              <li>Santa Monica Pier attractions</li>
              <li>Excellent restaurants and bars</li>
              <li>Bike-friendly with rentals everywhere</li>
            </ul>
            <p class="mb-3"><strong>Cons:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>More expensive</li>
              <li>Traffic to stadium can be heavy</li>
            </ul>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🎬 Hollywood/West Hollywood</h4>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-3"><strong>Best for:</strong> Nightlife, celebrities, entertainment</p>
            <p class="mb-3"><strong>Distance to Stadium:</strong> 25-35 minutes</p>
            <p class="mb-3"><strong>Price Range:</strong> $200-350/night</p>
            <p class="mb-3"><strong>Pros:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Walk of Fame, Hollywood Sign nearby</li>
              <li>Best nightlife scene</li>
              <li>Central location for sightseeing</li>
            </ul>
            <p class="mb-3"><strong>Cons:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>Longer drive to stadium</li>
              <li>Touristy areas can be crowded</li>
            </ul>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🏙️ Downtown LA</h4>
          <p class="mb-4"><strong>Best for:</strong> Museums, urban exploration, diverse dining</p>
          <p class="mb-4"><strong>Distance:</strong> 20-30 minutes | <strong>Price:</strong> $180-280/night</p>

          <div class="bg-fifa-gold-500/10 border border-fifa-gold-500/30 p-4 rounded-lg mb-6">
            <p><strong>🌟 Best Value Pick:</strong> Stay near LAX/Inglewood for easy stadium access and lower prices. Use savings for a rental car to explore beaches and Hollywood on non-match days!</p>
          </div>
        `
      },

      {
        id: 'attractions',
        title: 'What should I do in Los Angeles besides soccer?',
        content: `
          <p class="mb-4">LA offers incredible attractions for every interest. Here's how to maximize your World Cup trip:</p>

          <h3 class="text-2xl font-bold mb-4 mt-8">🎬 Hollywood & Entertainment</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Hollywood Walk of Fame:</strong> Free! See 2,700+ stars (2 hours)</li>
            <li><strong>Hollywood Sign Hike:</strong> Griffith Observatory trail (3 hours)</li>
            <li><strong>Universal Studios Hollywood:</strong> Movie-themed park ($109+, full day)</li>
            <li><strong>Warner Bros Studio Tour:</strong> Behind-the-scenes ($69, 3 hours)</li>
            <li><strong>TCL Chinese Theatre:</strong> Historic movie palace with handprints ($15)</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 mt-8">🏖️ Beaches & Outdoors</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Santa Monica Pier:</strong> Iconic pier with rides, aquarium (Free + attractions)</li>
            <li><strong>Venice Beach:</strong> Boardwalk, street performers, muscle beach (Free)</li>
            <li><strong>Malibu:</strong> Surf, celebrity homes, scenic PCH drive (Free + dining)</li>
            <li><strong>Manhattan Beach:</strong> Quieter, upscale beach town (Free)</li>
            <li><strong>Griffith Observatory:</strong> Free admission, planetarium shows ($7), city views</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 mt-8">🎨 Culture & Museums</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Getty Center:</strong> World-class art, architecture, gardens (Free!)</li>
            <li><strong>LACMA:</strong> LA County Museum of Art ($25)</li>
            <li><strong>The Broad:</strong> Contemporary art museum (Free, reserve ahead)</li>
            <li><strong>Natural History Museum:</strong> Dinosaurs, gems, LA history ($15)</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 mt-8">🛍️ Shopping & Luxury</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Rodeo Drive:</strong> Beverly Hills luxury shopping (window shopping free!)</li>
            <li><strong>The Grove:</strong> Outdoor shopping mall with fountain shows</li>
            <li><strong>Melrose Avenue:</strong> Trendy boutiques and street art</li>
            <li><strong>Grand Central Market:</strong> Historic food hall downtown</li>
          </ul>

          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <h4 class="text-xl font-bold mb-3">📅 Sample 3-Day Itinerary:</h4>
            <p class="mb-2"><strong>Day 1:</strong> Hollywood Walk of Fame → Griffith Observatory sunset → Match at SoFi</p>
            <p class="mb-2"><strong>Day 2:</strong> Santa Monica Pier → Beach time → Venice Beach boardwalk → Sunset dinner</p>
            <p><strong>Day 3:</strong> Getty Center → Beverly Hills & Rodeo Drive → Evening match or nightlife</p>
          </div>
        `
      },

      {
        id: 'food-scene',
        title: 'Where should I eat in Los Angeles?',
        content: `
          <p class="mb-4">LA has arguably the best food scene in America with every cuisine imaginable:</p>

          <h3 class="text-2xl font-bold mb-4 mt-8">🌮 Must-Try LA Foods:</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Tacos:</strong> LA has the best Mexican food outside Mexico</li>
            <li><strong>Korean BBQ:</strong> Koreatown is a world-class destination</li>
            <li><strong>In-N-Out Burger:</strong> California institution (try "Animal Style")</li>
            <li><strong>Food Trucks:</strong> Gourmet options everywhere</li>
            <li><strong>Poke Bowls:</strong> Fresh Hawaiian influence</li>
            <li><strong>California Cuisine:</strong> Farm-to-table, fresh ingredients</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 mt-8">🍽️ Neighborhoods by Cuisine:</h3>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-2"><strong>🇲🇽 Mexican:</strong> East LA, Boyle Heights (authentic)</p>
            <p class="mb-2"><strong>🇰🇷 Korean:</strong> Koreatown (BBQ, late-night)</p>
            <p class="mb-2"><strong>🇯🇵 Japanese:</strong> Little Tokyo, Sawtelle</p>
            <p class="mb-2"><strong>🇮🇹 Italian:</strong> Beverly Hills, West Hollywood</p>
            <p class="mb-2"><strong>🌊 Seafood:</strong> Santa Monica, Malibu (oceanfront)</p>
            <p><strong>🥗 Healthy:</strong> Venice, Santa Monica (vegan options)</p>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">💰 Budget Options:</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Grand Central Market:</strong> Downtown food hall ($10-15)</li>
            <li><strong>Food Trucks:</strong> Find via apps ($8-12)</li>
            <li><strong>In-N-Out Burger:</strong> Double-Double $5</li>
            <li><strong>Taquerias:</strong> Authentic tacos $2-3 each</li>
          </ul>

          <div class="bg-fifa-blue-500/10 border border-fifa-blue-500/30 p-4 rounded-lg mb-4">
            <p><strong>💡 Foodie Tip:</strong> Make reservations 1-2 weeks ahead for popular restaurants. Use OpenTable or Resy. Many top spots book out quickly, especially during World Cup!</p>
          </div>
        `
      },

      {
        id: 'weather-packing',
        title: 'What is the weather like and what should I pack?',
        content: `
          <p class="mb-4">Los Angeles weather during World Cup (June-July) is nearly perfect:</p>

          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <h4 class="text-xl font-bold mb-3">☀️ Summer Weather:</h4>
            <p class="mb-2"><strong>Temperature:</strong> 70-85°F (21-29°C) during day</p>
            <p class="mb-2"><strong>Evenings:</strong> 60-70°F (16-21°C)</p>
            <p class="mb-2"><strong>Humidity:</strong> Low (comfortable)</p>
            <p class="mb-2"><strong>Rain:</strong> Virtually none in summer</p>
            <p><strong>UV Index:</strong> High - sunscreen essential!</p>
          </div>

          <h3 class="text-2xl font-bold mb-4 mt-8">🎒 Packing List:</h3>
          <h4 class="text-xl font-bold mb-3 mt-6">Essentials:</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Sunscreen:</strong> SPF 30+ (reapply every 2 hours)</li>
            <li><strong>Sunglasses:</strong> UV protection important</li>
            <li><strong>Light jacket:</strong> For air-conditioned spaces and evenings</li>
            <li><strong>Comfortable shoes:</strong> Lots of walking</li>
            <li><strong>Hat or cap:</strong> Sun protection</li>
            <li><strong>Reusable water bottle:</strong> Stay hydrated</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">Beach Days:</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Swimsuit</li>
            <li>Beach towel (hotels may not allow taking theirs)</li>
            <li>Flip-flops/sandals</li>
            <li>Beach bag</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">Match Days:</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Team jersey or colors</li>
            <li>Light, breathable clothing</li>
            <li>Stadium has climate control, but dress for LA heat outside</li>
          </ul>

          <p class="mb-4"><strong>Note:</strong> SoFi Stadium has covered seating with climate control, but you'll be outside in LA heat before/after matches. Dress in layers!</p>
        `
      },

      {
        id: 'local-tips',
        title: 'What are the best local tips for Los Angeles?',
        content: `
          <h3 class="text-2xl font-bold mb-4">🚗 Transportation Tips:</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Traffic is real:</strong> LA traffic is legendary. Plan 2x normal travel time during rush hour (7-10 AM, 4-7 PM)</li>
            <li><strong>Consider rental car:</strong> Despite traffic, having a car gives you freedom. Parking at hotels typically $25-45/day</li>
            <li><strong>Uber/Lyft strategy:</strong> Use for stadium + nightlife. Cheaper than parking + drinking</li>
            <li><strong>Metro:</strong> Limited but growing. Good for Downtown, Hollywood, Santa Monica (by 2026)</li>
            <li><strong>Beach cruising:</strong> Rent bikes or scooters along the beach path (Santa Monica to Venice)</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 mt-8">💰 Money & Costs:</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Tipping:</strong> 18-20% at restaurants, $1-2 per drink at bars</li>
            <li><strong>Parking:</strong> $10-45 depending on location (stadium highest)</li>
            <li><strong>Beach parking:</strong> $10-20 for the day (arrive early on weekends)</li>
            <li><strong>Museum costs:</strong> Many have free days (check websites)</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4 mt-8">⚠️ Safety & Common Sense:</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>LA is generally safe</strong> in tourist areas (Hollywood, beaches, Beverly Hills)</li>
            <li><strong>Avoid:</strong> Skid Row (Downtown), some parts after dark</li>
            <li><strong>Car safety:</strong> Don't leave valuables visible in car</li>
            <li><strong>Beach safety:</strong> Watch belongings on beach</li>
            <li><strong>Sun safety:</strong> Sunburn happens FAST - reapply sunscreen!</li>
          </ul>

          <div class="bg-fifa-gold-500/10 border border-fifa-gold-500/30 p-4 rounded-lg mb-6">
            <h4 class="text-xl font-bold mb-3">🌟 Local Secrets:</h4>
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Best sunset views:</strong> Griffith Observatory or Malibu beaches</li>
              <li><strong>Avoid Hollywood on weekends:</strong> Crowded with tourists</li>
              <li><strong>Beach strategy:</strong> Go early (before 11 AM) or late afternoon (after 4 PM)</li>
              <li><strong>Free parking:</strong> Many beaches have free street parking if you walk a bit</li>
              <li><strong>Happy hours:</strong> 3-6 PM typically, great deals on food + drinks</li>
            </ul>
          </div>
        `
      }
    ],

    faq: [
      {
        question: 'How many World Cup matches will Los Angeles host?',
        answer: 'Los Angeles will host 8 World Cup 2026 matches at SoFi Stadium, including one Quarter-Final match. This makes it one of the most important venues in the tournament.'
      },
      {
        question: 'How far is SoFi Stadium from LAX airport?',
        answer: 'SoFi Stadium is only 3 miles from Los Angeles International Airport (LAX), making it the closest stadium-airport combination in the entire tournament. The journey takes just 10-15 minutes by car.'
      },
      {
        question: 'What is the best way to get to SoFi Stadium?',
        answer: 'The best way is Uber or Lyft for a quick 10-15 minute ride from most LA areas. A new Metro line is planned to open by 2026 providing direct rail access. Driving is also easy with 10,000+ parking spaces available ($40-80).'
      },
      {
        question: 'Where should I stay in Los Angeles for World Cup?',
        answer: 'The best areas are Inglewood/LAX area (closest to stadium, budget-friendly at $150-250/night), Santa Monica (beach access, restaurants, $250-400/night), or Hollywood (nightlife, attractions, $200-350/night). Choose based on your priorities: convenience, beaches, or entertainment.'
      },
      {
        question: 'What is the weather like in LA during World Cup?',
        answer: 'June and July in Los Angeles feature nearly perfect weather: sunny skies, temperatures between 70-85°F (21-29°C), low humidity, and virtually no rain. Evenings cool to 60-70°F. Bring sunscreen - the UV index is high!'
      },
      {
        question: 'What should I do in Los Angeles besides watching soccer?',
        answer: 'Top attractions include Hollywood Walk of Fame, Santa Monica Pier, Venice Beach, Universal Studios, Getty Center, Griffith Observatory, and Rodeo Drive shopping. LA also has incredible beaches, museums, and the best food scene in America with every cuisine imaginable.'
      },
      {
        question: 'Is Los Angeles expensive for World Cup visitors?',
        answer: 'LA is moderately expensive with hotels averaging $220/night during World Cup. Budget $150-300/day total including food, transport, and activities. You can save by staying near the stadium, using Uber instead of rental cars, and eating at food trucks or taquerias ($10-15 meals).'
      },
      {
        question: 'Do I need a car in Los Angeles?',
        answer: 'Not essential but helpful. For just stadium and nearby beach hotels, Uber/Lyft works well ($15-30 per ride). For exploring multiple areas (Hollywood, beaches, Beverly Hills), a rental car gives you freedom despite traffic. Many visitors do a hybrid: Uber to stadium, rental car for sightseeing days.'
      },
      {
        question: 'How is the traffic in Los Angeles?',
        answer: 'LA traffic is famously bad. Avoid rush hours (7-10 AM and 4-7 PM). Plan double the normal travel time during peak hours. For match days at SoFi Stadium, leave your hotel 2-3 hours before kickoff. Uber from nearby hotels is often faster than driving from distant areas.'
      },
      {
        question: 'Can I visit both the beach and Hollywood in one day?',
        answer: 'Yes, but it is tight. Santa Monica to Hollywood is 25-30 minutes without traffic, but can be an hour+ during rush hour. Better plan: beach morning/afternoon, then Hollywood for evening/night. Or dedicate separate days to each for a more relaxed experience.'
      }
    ]
  }
};

