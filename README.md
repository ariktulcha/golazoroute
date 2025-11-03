# ⚽ FIFA World Cup 2026 Travel Planner

> **Your ultimate companion for planning the perfect World Cup 2026 journey** across the USA, Mexico, and Canada!

![World Cup 2026](https://img.shields.io/badge/FIFA-World%20Cup%202026-blue?style=for-the-badge)
![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🌟 Overview

The **FIFA World Cup 2026 Travel Planner** is a comprehensive, feature-rich web application designed to help football fans plan their ultimate World Cup experience. With 16 host cities across 3 countries and 104 matches, this planner makes it easy to create, optimize, and manage your World Cup journey.

**Live Demo:** [Your Demo URL Here]

---

## ✨ Key Features

### 🗺️ Interactive Mapping
- **Mapbox GL Integration** - Beautiful, interactive maps with real-time visualization
- **3D Stadium Views** - Building extrusions for immersive city exploration
- **Route Visualization** - See your travel path with actual road routes
- **Real-time Directions** - Accurate travel times and distances using Mapbox API

### 📅 Trip Planning & Optimization
- **Match Selection** - Choose from 104 World Cup matches
- **Route Optimization** - AI-powered algorithms minimize travel time and costs
- **Team Following** - Auto-generate routes for your favorite team
- **Multi-City Tours** - Plan complex journeys with 5+ cities
- **Smart Scheduling** - Avoid tight connections and optimize rest time

### 💾 Trip Management
- **Save/Load Trips** - Store unlimited trip variations locally
- **Calendar Export** - One-click export to .ics format (Google/Apple Calendar)
- **JSON Export** - Backup your data
- **Trip Comparison** - Compare different route scenarios

### 🏟️ Comprehensive City & Stadium Information
- **16 Host Cities** - Detailed guides for each destination
- **Stadium Details** - Capacity, transit scores, and accessibility info
- **Nearby Places** - Discover restaurants, hotels, and attractions near stadiums
- **Local Tips** - Insider knowledge for each city
- **Weather Forecasts** - Plan for the best conditions

### 📰 Travel Blog & Guides
- **8+ Expert Articles** - In-depth guides on planning, tickets, and experiences
- **SEO Optimized** - Easy to discover via search engines
- **City Spotlights** - Detailed city-specific content
- **Travel Tips** - Visa, budget, and packing guides

### 🎪 Fan Zone Discovery
- **Official Fan Zones** - Find public viewing areas in each city
- **Event Details** - Dates, locations, and capacities
- **Interactive Maps** - Navigate to fan zones easily

### 🌡️ Weather Planning
- **Monthly Climate Data** - Temperature and precipitation for June-July 2026
- **Packing Recommendations** - What to bring for each city's climate
- **Best Time Insights** - Plan for optimal weather conditions

### 💰 Budget Planning
- **Cost Estimates** - Hotels, flights, and transportation
- **Smart Recommendations** - Best travel modes based on distance
- **Detailed Breakdowns** - Know exactly what to budget

### 🔒 Privacy & Compliance
- **GDPR Compliant** - Full compliance with EU privacy regulations
- **Cookie Consent** - Granular control over tracking preferences
- **Privacy First** - All data stored locally on your device
- **Legal Pages** - Comprehensive Privacy Policy, Terms, and Cookie Policy

### 📱 Mobile Optimized
- **Fully Responsive** - Perfect on phones, tablets, and desktops
- **Touch-Friendly** - Optimized tap targets and gestures
- **Progressive Scaling** - Beautiful on all screen sizes
- **Fast Performance** - Optimized for mobile networks

---

## 🌍 Host Cities & Stadiums

### 🇺🇸 United States (11 Cities)
| City | Stadium | Capacity |
|------|---------|----------|
| **Atlanta** | Mercedes-Benz Stadium | 75,000 |
| **Boston** | Gillette Stadium | 70,000 |
| **Dallas** | AT&T Stadium | 105,000 |
| **Houston** | NRG Stadium | 72,000 |
| **Kansas City** | Arrowhead Stadium | 76,000 |
| **Los Angeles** | SoFi Stadium | 70,000 |
| **Miami** | Hard Rock Stadium | 67,000 |
| **New York/NJ** | MetLife Stadium | 87,000 |
| **Philadelphia** | Lincoln Financial Field | 69,000 |
| **San Francisco** | Levi's Stadium | 68,500 |
| **Seattle** | Lumen Field | 69,000 |

### 🇲🇽 Mexico (3 Cities)
| City | Stadium | Capacity |
|------|---------|----------|
| **Mexico City** | Estadio Azteca | 87,000 |
| **Guadalajara** | Estadio Akron | 46,000 |
| **Monterrey** | Estadio BBVA | 53,000 |

### 🇨🇦 Canada (2 Cities)
| City | Stadium | Capacity |
|------|---------|----------|
| **Toronto** | BMO Field | 45,000 |
| **Vancouver** | BC Place | 54,000 |

---

## 🚀 Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Vite 7** - Lightning-fast build tool
- **React Router 7** - Client-side routing

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom Animations** - Smooth transitions and effects

### Mapping & Location
- **Mapbox GL** - Interactive maps and 3D visualization
- **React Map GL** - React wrapper for Mapbox
- **Mapbox Directions API** - Real routing and navigation
- **Mapbox Geocoding API** - Address search and POI discovery

### State Management & Data
- **Zustand** - Lightweight state management
- **LocalStorage** - Client-side data persistence
- **date-fns** - Date manipulation and formatting

### SEO & Analytics
- **React Helmet Async** - Dynamic meta tags
- **Structured Data** - Schema.org markup for rich snippets
- **Sitemap Generator** - Auto-generated sitemap.xml
- **Open Graph** - Social media optimization

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** or **pnpm**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/world_cup.git
cd world_cup

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit http://localhost:5173
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Generate sitemap (included in build)
npm run generate:sitemap
```

### Environment Variables

Your Mapbox API token is already configured in `src/components/Map.tsx`. If you need to change it:

```typescript
// src/components/Map.tsx
const MAPBOX_TOKEN = 'your-mapbox-token-here';
```

---

## 📁 Project Structure

```
world_cup/
├── public/
│   ├── robots.txt              # SEO: Search engine rules
│   ├── sitemap.xml             # SEO: Auto-generated sitemap
│   └── vite.svg                # Favicon
│
├── scripts/
│   └── generateSitemap.js      # Sitemap generation script
│
├── src/
│   ├── components/
│   │   ├── AlertBanner.tsx         # Warning system for tight schedules
│   │   ├── CityCard.tsx            # City information cards
│   │   ├── CityStayCard.tsx        # Journey stop cards
│   │   ├── CookieConsent.tsx       # GDPR cookie banner
│   │   ├── FAQSection.tsx          # Frequently asked questions
│   │   ├── Footer.tsx              # App footer with links
│   │   ├── ItineraryView.tsx       # Travel timeline view
│   │   ├── Map.tsx                 # Mapbox GL map component
│   │   ├── MatchSelector.tsx       # Match selection UI
│   │   ├── Navigation.tsx          # App navigation header
│   │   ├── PopularRoutes.tsx       # Featured route suggestions
│   │   ├── RouteDetailsCard.tsx    # Route summary cards
│   │   ├── SavedTrips.tsx          # Trip management component
│   │   ├── SEO.tsx                 # SEO meta tags component
│   │   ├── SimpleHeader.tsx        # Minimal page header
│   │   ├── StadiumDetails.tsx      # Stadium information modal
│   │   ├── TeamSelector.tsx        # Team following selector
│   │   ├── TransportationLinks.tsx # Flight/train booking links
│   │   ├── TravelSegmentCard.tsx   # Journey segment display
│   │   └── TripStats.tsx           # Trip statistics display
│   │
│   ├── data/
│   │   ├── articles/               # Blog article content (8 files)
│   │   ├── blogArticles.ts         # Blog article registry
│   │   ├── blogTypes.ts            # Blog type definitions
│   │   ├── cities.ts               # 16 host city data
│   │   ├── fanZones.ts             # Fan zone information
│   │   ├── matches.ts              # 104 World Cup matches
│   │   ├── stadiums.ts             # Stadium details
│   │   └── types.ts                # TypeScript type definitions
│   │
│   ├── pages/
│   │   ├── Home.tsx                # Homepage with hero
│   │   ├── Explorer.tsx            # City exploration mode
│   │   ├── Optimizer.tsx           # Trip optimization (legacy)
│   │   ├── MyJourney.tsx           # Personal journey planner
│   │   ├── RecommendedRoutes.tsx   # Featured route templates
│   │   ├── RoutePlan.tsx           # Custom route builder
│   │   ├── FollowTeam.tsx          # Team-based planning
│   │   ├── Schedule.tsx            # Match schedule viewer
│   │   ├── CityDetails.tsx         # Individual city pages
│   │   ├── StadiumArchive.tsx      # All stadiums overview
│   │   ├── StadiumDetail.tsx       # Individual stadium pages
│   │   ├── FanZones.tsx            # Fan zone directory
│   │   ├── FanZoneSingle.tsx       # Individual fan zone pages
│   │   ├── DestinationInfo.tsx     # City guides hub
│   │   ├── WeatherPlanner.tsx      # Weather planning tool
│   │   ├── BudgetPlanner.tsx       # Budget calculator
│   │   ├── TransportationHub.tsx   # Transportation guide
│   │   ├── VisaDocuments.tsx       # Visa requirements
│   │   ├── BlogIndex.tsx           # Blog listing page
│   │   ├── BlogArticle.tsx         # Blog article page
│   │   ├── About.tsx               # About page
│   │   ├── OurStory.tsx            # Team story
│   │   ├── Roadmap.tsx             # Feature roadmap
│   │   ├── Contact.tsx             # Contact page
│   │   ├── Privacy.tsx             # Privacy policy
│   │   ├── Terms.tsx               # Terms of service
│   │   ├── Cookies.tsx             # Cookie policy
│   │   ├── GDPR.tsx                # GDPR rights
│   │   ├── JoinFacebookGroup.tsx   # Facebook group CTA
│   │   ├── DonateACoffee.tsx       # Donation page
│   │   └── Sponsor.tsx             # Sponsorship info
│   │
│   ├── store/
│   │   └── appStore.ts             # Zustand global state
│   │
│   ├── utils/
│   │   ├── distance.ts             # Haversine distance calculator
│   │   ├── generateSitemap.ts      # Sitemap generation logic
│   │   ├── journeyStorage.ts       # Journey persistence
│   │   ├── mapboxHelpers.ts        # Mapbox API utilities
│   │   ├── optimizer.ts            # Route optimization algorithms
│   │   ├── penalties.ts            # Connection time penalties
│   │   ├── popularRoutes.ts        # Featured route data
│   │   ├── seoHelpers.ts           # SEO utility functions
│   │   ├── teamRoutes.ts           # Team-based route generation
│   │   └── tripStorage.ts          # Trip save/load utilities
│   │
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App-wide styles
│   ├── main.tsx                # React entry point
│   └── index.css               # Global CSS with Tailwind
│
├── dist/                       # Production build output
├── node_modules/               # Dependencies
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── eslint.config.js            # ESLint configuration
```

---

## 🎯 Usage Guide

### Planning Your Trip

#### Option 1: Follow Your Team
1. Navigate to **"Follow a Team"**
2. Select your favorite team
3. Get an auto-generated route for all their matches
4. Customize as needed

#### Option 2: Custom Route Builder
1. Go to **"Plan Your Route"**
2. Choose specific matches you want to attend
3. View optimized route on the map
4. Review cost estimates and travel times

#### Option 3: Browse Featured Routes
1. Visit **"Recommended Routes"**
2. Browse pre-made popular routes
3. Select one that fits your style
4. Customize to your preferences

### Saving Your Trip
1. Create your ideal route
2. Click **"Save Trip"**
3. Give it a memorable name
4. Your trip is saved locally!

### Exporting to Calendar
1. Load your saved trip
2. Click the **Calendar Export** icon
3. Download `.ics` file
4. Import to Google Calendar or Apple Calendar

### Discovering Cities
1. Navigate to **"Explore Cities"**
2. Browse all 16 host cities
3. Click any city for detailed information
4. View nearby restaurants, hotels, and attractions

---

## 🔍 SEO & Discoverability

### Search Engine Optimization
- **73 Optimized Pages** with unique content
- **Structured Data** for rich search results
- **Open Graph Tags** for social media sharing
- **Sitemap.xml** auto-generated on build
- **robots.txt** configured for search engines

### Target Keywords
- World Cup 2026
- FIFA World Cup 2026 planner
- World Cup trip planner
- [City] World Cup 2026 (for all 16 cities)
- World Cup schedule
- World Cup stadiums

### Social Media Ready
- Beautiful preview cards when shared on Facebook, Twitter, LinkedIn
- Optimized images and descriptions
- Proper meta tags for all platforms

---

## 🔒 Privacy & GDPR Compliance

### Features
- **Cookie Consent Banner** - Granular control over tracking
- **Privacy Policy** - Comprehensive data practices
- **Terms of Service** - Clear usage terms
- **GDPR Rights** - All 6 EU data rights explained
- **Cookie Policy** - Detailed cookie information
- **Local Storage Only** - No server-side data collection

### Your Data
All trip data is stored **locally on your device**. We don't collect, store, or share your personal information.

---

## 📱 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

**Recommended:** Use the latest version of any modern browser for the best experience.

---

## 🎨 Customization

### Changing Colors
Edit `src/index.css` to modify the color scheme:

```css
:root {
  --fifa-blue: #32127a;
  --fifa-cyan: #00bcd4;
  --fifa-purple: #7c4dff;
  /* Add your custom colors here */
}
```

### Adding New Cities or Matches
Edit data files in `src/data/`:
- `cities.ts` - Add/edit city information
- `matches.ts` - Add/edit match data
- `stadiums.ts` - Add/edit stadium details

### Modifying Route Optimization
Adjust algorithms in `src/utils/optimizer.ts` to change:
- Distance calculation methods
- Cost estimation formulas
- Travel time penalties

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution
- Adding more blog articles
- Improving route optimization algorithms
- Adding new features (see ROADMAP.md)
- Fixing bugs
- Improving documentation
- Translating to other languages

---

## 📄 Documentation

### Quick Start Guides
- **QUICK_START.md** - Get up and running in 5 minutes
- **SEO_QUICK_START.md** - SEO optimization in 30 minutes
- **GDPR_QUICK_START.md** - GDPR compliance guide

### Feature Documentation
- **NEW_FEATURES.md** - Complete feature overview
- **MAPBOX_SETUP.md** - Mapbox integration guide
- **BLOG_SETUP.md** - Blog system documentation
- **FANZONE_FEATURE.md** - Fan zone implementation

### Technical Guides
- **SEO_IMPLEMENTATION_SUMMARY.md** - SEO technical details
- **GDPR_COMPLIANCE.md** - Privacy compliance guide
- **MOBILE_IMPROVEMENTS_SUMMARY.md** - Mobile optimization

---

## 🐛 Troubleshooting

### Map Not Loading
- Check your Mapbox token in `src/components/Map.tsx`
- Verify internet connection (Mapbox requires network access)
- Check browser console for errors

### Trip Not Saving
- Check browser's LocalStorage is enabled
- Ensure you're not in private/incognito mode
- Clear browser cache and try again

### Slow Performance
- Reduce number of selected matches
- Clear browser cache
- Update to latest browser version
- Check internet connection

### Calendar Export Not Working
- Ensure you have at least 2 matches selected
- Try a different browser
- Check that downloads are allowed in browser settings

---

## 🚧 Roadmap

### Upcoming Features
- [ ] User accounts and cloud sync
- [ ] Mobile app (iOS/Android)
- [ ] Real-time match updates
- [ ] Hotel booking integration
- [ ] Flight booking integration
- [ ] Multi-language support
- [ ] Group trip planning
- [ ] Social sharing features
- [ ] Ticket availability alerts
- [ ] Live match updates

See **ROADMAP.md** for detailed feature timeline.

---

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Load Times
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Total Bundle Size:** < 500KB (gzipped)

---

## 📈 Analytics (Optional Setup)

To track user behavior and optimize the experience:

1. **Google Analytics 4** - Add tracking ID to index.html
2. **Google Search Console** - Submit sitemap
3. **Google Tag Manager** - Advanced event tracking

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **FIFA** - For the 2026 World Cup
- **Mapbox** - For beautiful maps and location services
- **Host Cities** - USA, Mexico, and Canada
- **React Community** - For amazing tools and libraries
- **Contributors** - Everyone who has helped improve this project

---

## 📞 Contact & Support

### Get Help
- **Documentation:** Check the `/docs` folder
- **Issues:** Open a GitHub issue
- **Email:** info@worldcupplanner.com (update with your email)

### Stay Connected
- **Facebook Group:** Join our fan community
- **Twitter:** Follow for updates
- **Newsletter:** Subscribe for tips and announcements

---

## ⚽ Built for Football Fans, By Football Fans

This project was created to help fans have the **best possible World Cup 2026 experience**. Whether you're attending one match or following your team throughout the tournament, this planner has everything you need.

**Start planning your World Cup 2026 adventure today!** 🌍⚽🏆

---

<div align="center">

**Made with ❤️ for World Cup 2026**

[Get Started](#-installation--setup) • [Features](#-key-features) • [Documentation](#-documentation) • [Contribute](#-contributing)

</div>
