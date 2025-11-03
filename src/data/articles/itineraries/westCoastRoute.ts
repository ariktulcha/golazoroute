import { BlogArticle } from '../../blogTypes';

export const westCoastRouteArticle: BlogArticle = {
  id: 'west-coast-world-cup-route-2026',
  slug: 'west-coast-world-cup-2026-route',
  title: 'West Coast World Cup 2026: LA, San Francisco & Seattle Perfect Route',
  metaDescription: 'Complete West Coast World Cup 2026 itinerary: Los Angeles, San Francisco Bay Area, and Seattle. Match schedules, travel times, budgets, and scenic Pacific coast journey.',
  category: 'itinerary',
  publishDate: '2025-02-01',
  lastUpdated: '2025-10-31',
  author: 'World Cup 2026 Travel Team',
  readTime: 16,
  featuredImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop',
  tags: ['west-coast', 'itinerary', 'los-angeles', 'san-francisco', 'seattle', 'road-trip'],
  relatedCities: ['los-angeles', 'san-francisco', 'seattle'],
  relatedArticles: ['stadium-database-2026', 'los-angeles-world-cup-2026', 'match-schedule-2026'],
  
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'West Coast World Cup 2026: LA, San Francisco & Seattle Perfect Route',
    description: 'Complete West Coast World Cup 2026 itinerary guide',
    datePublished: '2025-02-01',
    dateModified: '2025-10-31',
    author: {
      '@type': 'Organization',
      name: 'World Cup 2026 Travel Planner'
    }
  },

  content: {
    quickFacts: [
      { label: 'Total Distance', value: '1,200 miles', icon: '🚗' },
      { label: 'Cities', value: '3 (LA, SF, SEA)', icon: '🏙️' },
      { label: 'Total Matches', value: '20 games', icon: '⚽' },
      { label: 'Budget Est.', value: '$3,500-6,000', icon: '💰' }
    ],

    sections: [
      {
        id: 'intro',
        title: 'Why choose the West Coast route for World Cup 2026?',
        content: `
          <p class="text-lg mb-4"><strong>Direct Answer:</strong> The West Coast route combines <strong>3 world-class cities hosting 20 total matches</strong> with one of America's most scenic drives along the Pacific Coast Highway. This route offers the perfect balance of soccer, beaches, mountains, tech culture, and incredible food - all within 1,200 miles and ideal Pacific Northwest summer weather.</p>

          <p class="mb-4">This itinerary takes you through California's beaches and wine country before reaching the Pacific Northwest's forests and mountains. Each city offers distinct experiences: LA's Hollywood glamour and beaches, San Francisco's tech culture and iconic landmarks, and Seattle's coffee scene and outdoor adventures.</p>

          <h3 class="text-2xl font-bold mb-4 mt-8">West Coast Overview:</h3>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-2"><strong>🏟️ Los Angeles (SoFi Stadium):</strong> 8 matches, 70,240 capacity</p>
            <p class="mb-2"><strong>🏟️ San Francisco (Levi's Stadium):</strong> 6 matches, 68,500 capacity</p>
            <p class="mb-2"><strong>🏟️ Seattle (Lumen Field):</strong> 6 matches, 69,000 capacity</p>
            <p class="mt-4"><strong>Total:</strong> 20 World Cup matches across 3 cities</p>
          </div>

          <h3 class="text-2xl font-bold mb-4 mt-8">Route Highlights:</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>LA to SF:</strong> 382 miles via PCH (Pacific Coast Highway) - stunning coastal drive</li>
            <li><strong>SF to Seattle:</strong> 808 miles via I-5 or scenic coastal route</li>
            <li><strong>Weather:</strong> Perfect summer conditions (65-85°F)</li>
            <li><strong>Culture:</strong> Beach life, tech innovation, coffee culture</li>
          </ul>
        `
      },

      {
        id: 'route-options',
        title: 'How should I travel between West Coast cities?',
        content: `
          <h3 class="text-2xl font-bold mb-4">Transportation Options:</h3>

          <h4 class="text-xl font-bold mb-3 mt-6">✈️ Flying (Fastest)</h4>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-3"><strong>LA to SF:</strong> 1.5 hours flight, $100-250</p>
            <p class="mb-3"><strong>SF to Seattle:</strong> 2 hours flight, $120-300</p>
            <p class="mb-3"><strong>Total Cost:</strong> $220-550</p>
            <p class="mb-3"><strong>Pros:</strong> Save time, easy connections</p>
            <p><strong>Cons:</strong> Miss scenic views, airport hassles, baggage fees</p>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🚗 Driving (Most Flexible)</h4>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-3"><strong>LA to SF:</strong> 6-8 hours (382 miles)</p>
            <p class="mb-3"><strong>SF to Seattle:</strong> 12-14 hours (808 miles)</p>
            <p class="mb-3"><strong>Rental Car Cost:</strong> $50-80/day + gas (~$200 total)</p>
            <p class="mb-3"><strong>Total Cost:</strong> $550-850 (10-day rental)</p>
            <p class="mb-3"><strong>Pros:</strong> Freedom, stops anywhere, scenic routes, no baggage limits</p>
            <p><strong>Cons:</strong> Long SF-Seattle drive, parking costs in cities</p>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">🚆 Train + Car Hybrid</h4>
          <p class="mb-4"><strong>Amtrak Coast Starlight</strong> runs LA → SF → Seattle but takes 35+ hours total. Better: fly to each city, rent cars locally for exploring.</p>

          <div class="bg-fifa-blue-500/10 border border-fifa-blue-500/30 p-4 rounded-lg mb-4">
            <p><strong>💡 Recommended Strategy:</strong> Drive LA to SF (scenic PCH route!), then fly SF to Seattle (save 12 hours of driving). Best of both worlds: coastal views + time efficiency. Total cost: ~$500-700.</p>
          </div>
        `
      },

      {
        id: 'itinerary-10-days',
        title: 'What is the perfect 10-day West Coast itinerary?',
        content: `
          <p class="mb-4">Here's an optimal 10-day West Coast World Cup trip attending 4-6 matches:</p>

          <div class="bg-gradient-to-r from-fifa-blue-500/20 to-fifa-gold-500/20 border-2 border-fifa-gold-500/50 p-6 rounded-xl mb-6">
            <h4 class="text-xl font-bold mb-4">📅 10-Day West Coast World Cup Itinerary</h4>
            
            <div class="mb-4 pb-4 border-b border-gray-700">
              <p class="mb-2"><strong>Days 1-3: Los Angeles</strong></p>
              <p class="text-sm text-gray-300 mb-2"><strong>Day 1:</strong> Arrive LAX → Check in hotel → Hollywood Walk of Fame → Hollywood Sign views from Griffith Observatory</p>
              <p class="text-sm text-gray-300 mb-2"><strong>Day 2:</strong> MATCH DAY at SoFi Stadium (arrive 2 hrs early) → Post-match dinner in Inglewood/Manhattan Beach</p>
              <p class="text-sm text-gray-300"><strong>Day 3:</strong> Santa Monica Pier & Beach → Venice Beach → Sunset dinner</p>
            </div>

            <div class="mb-4 pb-4 border-b border-gray-700">
              <p class="mb-2"><strong>Days 4-5: Drive to San Francisco</strong></p>
              <p class="text-sm text-gray-300 mb-2"><strong>Day 4:</strong> Depart LA morning → PCH Drive → Stop in Santa Barbara (lunch) → Big Sur scenic viewpoints → Overnight in Monterey/Carmel ($150-250/night)</p>
              <p class="text-sm text-gray-300"><strong>Day 5:</strong> Continue to SF → Stop at Half Moon Bay → Arrive SF afternoon → Check in → Fisherman's Wharf dinner</p>
            </div>

            <div class="mb-4 pb-4 border-b border-gray-700">
              <p class="mb-2"><strong>Days 6-7: San Francisco Bay Area</strong></p>
              <p class="text-sm text-gray-300 mb-2"><strong>Day 6:</strong> Golden Gate Bridge → Alcatraz tour (book ahead!) → Cable car rides → Chinatown</p>
              <p class="text-sm text-gray-300"><strong>Day 7:</strong> MATCH DAY at Levi's Stadium in Santa Clara (45 min south) → Wine country optional post-match (Napa/Sonoma)</p>
            </div>

            <div class="mb-4 pb-4 border-b border-gray-700">
              <p class="mb-2"><strong>Day 8: Travel to Seattle</strong></p>
              <p class="text-sm text-gray-300">Morning flight SFO → SEA (2 hours) → Check in downtown hotel → Pike Place Market → First Starbucks → Seattle Waterfront</p>
            </div>

            <div class="mb-4">
              <p class="mb-2"><strong>Days 9-10: Seattle</strong></p>
              <p class="text-sm text-gray-300 mb-2"><strong>Day 9:</strong> Space Needle → Chihuly Garden and Glass → MATCH DAY at Lumen Field (downtown - walk or short Uber)</p>
              <p class="text-sm text-gray-300"><strong>Day 10:</strong> Morning exploration (Museum of Pop Culture or Seattle Art Museum) → Depart from SEA airport</p>
            </div>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">Alternative: Add Extra Matches</h4>
          <p class="mb-4">If you want to see more matches, add 2-3 days per city:</p>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>LA:</strong> Add 2 days (total 5 days) = 2-3 matches possible</li>
            <li><strong>SF:</strong> Add 2 days (total 4 days) = 2 matches possible</li>
            <li><strong>Seattle:</strong> Add 1 day (total 3 days) = 2 matches possible</li>
            <li><strong>Total:</strong> 14-day trip = 6-7 matches!</li>
          </ul>
        `
      },

      {
        id: 'pacific-coast-highway',
        title: 'What is the Pacific Coast Highway route like?',
        content: `
          <p class="mb-4">The drive from LA to SF via Pacific Coast Highway (Highway 1/PCH) is one of America's most scenic drives:</p>

          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <h4 class="text-xl font-bold mb-3">🌊 PCH Route Details:</h4>
            <p class="mb-2"><strong>Distance:</strong> 382 miles (6-8 hours driving time)</p>
            <p class="mb-2"><strong>Best Approach:</strong> Split into 2 days with overnight stop</p>
            <p class="mb-2"><strong>Recommended Stop:</strong> Monterey, Carmel, or Cambria</p>
            <p><strong>Season:</strong> June-July perfect (minimal fog, warm weather)</p>
          </div>

          <h3 class="text-2xl font-bold mb-4 mt-8">Must-Stop Locations:</h3>
          
          <h4 class="text-xl font-bold mb-3 mt-6">1. Malibu (30 min from LA)</h4>
          <ul class="list-disc list-inside space-y-1 mb-4 ml-4">
            <li>Malibu Pier</li>
            <li>Surfrider Beach</li>
            <li>Getty Villa (free museum)</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">2. Santa Barbara (90 miles, 2 hours)</h4>
          <ul class="list-disc list-inside space-y-1 mb-4 ml-4">
            <li><strong>Perfect lunch stop!</strong></li>
            <li>Spanish architecture, wine tasting</li>
            <li>Stearns Wharf, beaches</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">3. Big Sur (260 miles, 5 hours)</h4>
          <ul class="list-disc list-inside space-y-1 mb-4 ml-4">
            <li><strong>Most dramatic scenery!</strong></li>
            <li>Bixby Bridge (iconic photo spot)</li>
            <li>McWay Falls</li>
            <li>Pfeiffer Beach</li>
            <li>Note: Limited cell service, gas up before!</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">4. Monterey/Carmel (335 miles, 6.5 hours)</h4>
          <ul class="list-disc list-inside space-y-1 mb-4 ml-4">
            <li><strong>Recommended overnight stop</strong></li>
            <li>Monterey Bay Aquarium (world-class)</li>
            <li>17-Mile Drive ($11.25, stunning coastal views)</li>
            <li>Carmel-by-the-Sea (charming town)</li>
            <li>Hotels: $150-300/night</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">5. Half Moon Bay (382 miles, arrive SF)</h4>
          <ul class="list-disc list-inside space-y-1 mb-4 ml-4">
            <li>Last stop before SF</li>
            <li>Cute coastal town</li>
            <li>Great for lunch</li>
          </ul>

          <div class="bg-fifa-gold-500/10 border border-fifa-gold-500/30 p-4 rounded-lg mb-6">
            <p><strong>🌟 Perfect 2-Day PCH Drive:</strong></p>
            <p class="mt-2"><strong>Day 1:</strong> Leave LA 8 AM → Malibu breakfast → Santa Barbara lunch → Big Sur photos → Arrive Monterey 5 PM (6 hours driving + stops)</p>
            <p class="mt-2"><strong>Day 2:</strong> Monterey Aquarium morning → 17-Mile Drive → Carmel lunch → Arrive SF 3 PM (3 hours driving)</p>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">PCH Driving Tips:</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Gas:</strong> Fill up in cities (Santa Barbara, Monterey) - gas in Big Sur is expensive/limited</li>
            <li><strong>Safety:</strong> Winding roads, drive during daylight</li>
            <li><strong>Photos:</strong> Use designated pullouts - stopping on highway is dangerous</li>
            <li><strong>Weather:</strong> June-July best (minimal fog)</li>
            <li><strong>Time:</strong> Don't rush! Budget 8-10 hours with stops</li>
          </ul>
        `
      },

      {
        id: 'budget-breakdown',
        title: 'How much does the West Coast World Cup route cost?',
        content: `
          <p class="mb-4">Budget varies based on accommodation choices and how many matches you attend:</p>

          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <h4 class="text-xl font-bold mb-3">💰 10-Day Budget Breakdown (Per Person):</h4>
            
            <p class="mb-3"><strong>Accommodation (9 nights):</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Budget: $100-150/night = $900-1,350</li>
              <li>Mid-range: $180-250/night = $1,620-2,250</li>
              <li>Upscale: $300-500/night = $2,700-4,500</li>
            </ul>

            <p class="mb-3"><strong>Transportation:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Rental car LA-SF (4 days): $200-320</li>
              <li>Gas LA-SF: $60-80</li>
              <li>Flight SF-Seattle: $120-300</li>
              <li>City Ubers/transit: $150-250</li>
              <li><strong>Total: $530-950</strong></li>
            </ul>

            <p class="mb-3"><strong>Food & Drink:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Budget: $40/day = $400</li>
              <li>Mid-range: $70/day = $700</li>
              <li>Foodie/Nice dinners: $100/day = $1,000</li>
            </ul>

            <p class="mb-3"><strong>Match Tickets (3 matches):</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Group stage: $100-400 each = $300-1,200</li>
              <li>Add more for knockout rounds</li>
            </ul>

            <p class="mb-3"><strong>Activities & Attractions:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Museums, tours, experiences: $300-600</li>
            </ul>

            <p class="mt-4 pt-4 border-t border-gray-700"><strong>TOTAL ESTIMATES:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li><strong>Budget Trip:</strong> $2,500-3,500 per person</li>
              <li><strong>Mid-range Trip:</strong> $4,000-5,500 per person</li>
              <li><strong>Upscale Trip:</strong> $6,000-9,000+ per person</li>
            </ul>
          </div>

          <h4 class="text-xl font-bold mb-3 mt-6">💡 Money-Saving Tips:</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Hotels:</strong> Book 6+ months ahead, use hotel rewards points</li>
            <li><strong>Flights:</strong> Tuesday-Wednesday flights cheaper than weekends</li>
            <li><strong>Food:</strong> Mix expensive dinners with food trucks/casual lunches</li>
            <li><strong>Activities:</strong> Many beaches, hikes, views are FREE!</li>
            <li><strong>Split costs:</strong> Travel with friends to share rental car, hotel rooms</li>
          </ul>
        `
      },

      {
        id: 'best-time-matches',
        title: 'When should I visit for the best matches?',
        content: `
          <p class="mb-4">Match timing depends on which stage you want to experience:</p>

          <h3 class="text-2xl font-bold mb-4 mt-8">Group Stage (June 11-27)</h3>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-3"><strong>Pros:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>More matches available (all 3 cities busy)</li>
              <li>Easier to get tickets</li>
              <li>Lower ticket prices</li>
              <li>Follow your team through group</li>
            </ul>
            <p class="mb-3"><strong>Cons:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>Lower stakes (some teams play conservatively)</li>
              <li>Possible lopsided scores</li>
            </ul>
          </div>

          <h3 class="text-2xl font-bold mb-4 mt-8">Knockout Rounds (July 6-8)</h3>
          <div class="bg-gray-800/50 p-6 rounded-xl mb-6">
            <p class="mb-3"><strong>Round of 16 in West Coast Cities:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>Los Angeles - July 7</li>
              <li>Seattle - July 8</li>
            </ul>
            <p class="mb-3"><strong>Pros:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4 mb-3">
              <li>High-stakes drama (elimination)</li>
              <li>Intense atmosphere</li>
              <li>Better quality matches</li>
            </ul>
            <p class="mb-3"><strong>Cons:</strong></p>
            <ul class="list-disc list-inside space-y-1 ml-4">
              <li>More expensive tickets</li>
              <li>Harder to plan (teams unknown until group ends)</li>
            </ul>
          </div>

          <div class="bg-fifa-blue-500/10 border border-fifa-blue-500/30 p-4 rounded-lg mb-4">
            <p><strong>💡 Best of Both Strategy:</strong> Plan trip for late June (Matchday 3 of groups) through early July (Round of 16). You get the final group stage drama PLUS knockout rounds. Book flexible hotels!</p>
          </div>
        `
      },

      {
        id: 'local-highlights',
        title: 'What makes each West Coast city unique?',
        content: `
          <h3 class="text-2xl font-bold mb-4">City-by-City Highlights:</h3>

          <h4 class="text-xl font-bold mb-3 mt-6">☀️ Los Angeles</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Best for:</strong> Beach life, Hollywood, entertainment</li>
            <li><strong>Unique:</strong> SoFi Stadium just 3 miles from LAX (easiest arrival!)</li>
            <li><strong>Weather:</strong> Warmest of 3 cities (75-85°F)</li>
            <li><strong>Food scene:</strong> Best Mexican food, Korean BBQ, everything</li>
            <li><strong>Don't miss:</strong> Santa Monica Pier, Hollywood Sign, Venice Beach</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">🌉 San Francisco</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Best for:</strong> Iconic landmarks, tech culture, wine country</li>
            <li><strong>Unique:</strong> Cable cars, Golden Gate Bridge, Alcatraz</li>
            <li><strong>Weather:</strong> Coolest (60-70°F, can be foggy)</li>
            <li><strong>Food scene:</strong> Sourdough, seafood, Michelin restaurants</li>
            <li><strong>Don't miss:</strong> Golden Gate Bridge walk, Alcatraz tour</li>
            <li><strong>Note:</strong> Stadium in Santa Clara (45 min south)</li>
          </ul>

          <h4 class="text-xl font-bold mb-3 mt-6">☕ Seattle</h4>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Best for:</strong> Coffee culture, outdoor adventures, music history</li>
            <li><strong>Unique:</strong> Downtown stadium (walk from hotels!)</li>
            <li><strong>Weather:</strong> Perfect (65-75°F, dry in summer)</li>
            <li><strong>Food scene:</strong> Fresh seafood, Asian fusion, coffee everywhere</li>
            <li><strong>Don't miss:</strong> Pike Place Market, Space Needle, Mt. Rainier day trip</li>
          </ul>

          <div class="bg-fifa-gold-500/10 border border-fifa-gold-500/30 p-4 rounded-lg mb-6">
            <p><strong>🌟 West Coast Vibe:</strong> Each city offers distinct experiences but shares laid-back Pacific culture, incredible outdoor access, and progressive, diverse atmospheres. Perfect summer weather across all three!</p>
          </div>
        `
      }
    ],

    faq: [
      {
        question: 'How far apart are LA, San Francisco, and Seattle?',
        answer: 'Los Angeles to San Francisco is 382 miles (6-8 hours driving via Pacific Coast Highway). San Francisco to Seattle is 808 miles (12-14 hours driving or 2 hours flying). Total distance: 1,190 miles.'
      },
      {
        question: 'Should I drive or fly between West Coast cities?',
        answer: 'Best hybrid approach: Drive LA to SF (6-8 hours via scenic PCH), then fly SF to Seattle (2 hours, $120-300). This gives you the beautiful coastal drive while saving 12+ hours of less-scenic driving. Total cost: ~$500-700.'
      },
      {
        question: 'How many World Cup matches can I see on a West Coast trip?',
        answer: 'The three West Coast cities host 20 total matches: LA (8), San Francisco (6), and Seattle (6). On a 10-day trip, you can realistically attend 3-4 matches. Extend to 14 days and attend 6-7 matches across all three cities.'
      },
      {
        question: 'What is the best time for a West Coast World Cup trip?',
        answer: 'Late June through early July is ideal. You catch the exciting final group stage matches (June 23-27) when everything is on the line, plus the Round of 16 knockout matches in LA (July 7) and Seattle (July 8). This gives you both atmosphere and high stakes.'
      },
      {
        question: 'How much does a 10-day West Coast World Cup trip cost?',
        answer: 'Budget $2,500-3,500 per person for budget accommodations and 3 matches. Mid-range trips run $4,000-5,500. Upscale with nice hotels and more matches: $6,000-9,000+. Sharing rental cars and hotel rooms significantly reduces costs.'
      },
      {
        question: 'Is the Pacific Coast Highway drive worth it?',
        answer: 'Absolutely! The PCH drive from LA to San Francisco is one of America\'s most scenic routes. Big Sur\'s dramatic coastline, charming towns like Carmel, and stops in Santa Barbara make it unforgettable. Split it over 2 days with an overnight in Monterey for the best experience.'
      },
      {
        question: 'What is the weather like on the West Coast in June-July?',
        answer: 'Perfect summer weather: LA is warmest (75-85°F, sunny), San Francisco coolest (60-70°F, possible fog), Seattle ideal (65-75°F, dry). Pack layers for SF. Rain is extremely rare in summer across all three cities.'
      },
      {
        question: 'Can I do the West Coast route in less than 10 days?',
        answer: 'Yes, a 7-day trip is feasible: 2 days LA, 2 days SF, 2 days Seattle, plus 1 travel day. You can attend 2-3 matches but will have limited time for sightseeing. Flying between all cities (skip PCH drive) saves time but costs more.'
      },
      {
        question: 'Which West Coast city should I prioritize if I can only visit one?',
        answer: 'Los Angeles offers the most matches (8) and easiest airport access (3 miles to SoFi Stadium). Seattle has the best stadium location (downtown, walkable) and atmosphere. San Francisco offers the most iconic landmarks. Choose based on your priorities: matches (LA), convenience (Seattle), or sightseeing (SF).'
      },
      {
        question: 'Do I need a car in West Coast cities?',
        answer: 'Mixed answer: Not needed in Seattle (downtown stadium, good transit). Helpful in SF for stadium access and wine country. Very useful in LA for beaches and flexibility. Best strategy: Rent car for LA-SF drive, return in SF, fly to Seattle car-free. Or skip car in all cities and use Uber/Lyft (more expensive but less parking hassle).'
      }
    ]
  }
};

