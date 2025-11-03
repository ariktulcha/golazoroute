# 🚀 Quick Start Guide - FIFA World Cup 2026 Planner

> Get your World Cup planning app running in **5 minutes**!

---

## ⚡ Installation (2 minutes)

### Step 1: Install Dependencies

```bash
cd /Users/tulcha/Desktop/dev/world_cup
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Visit: **http://localhost:5173**

✅ **Done!** Your app is running.

---

## 🎯 First-Time User Tour (3 minutes)

### Homepage
Your starting point with:
- Hero banner with Call-to-Action
- Quick access to main features
- Featured routes and popular destinations

### Main Features

#### 1️⃣ **Explore Cities** 🗺️
**URL:** `/explorer`

Browse all 16 host cities:
- View stadium information
- See match schedules
- Check local tips and safety info
- Explore on interactive map

**Try it:** Hover over any city card and click the (i) button for detailed stadium info and nearby places.

#### 2️⃣ **Plan Your Route** 🛤️
**URL:** `/route-plan`

Create custom World Cup journeys:
- **Match Selection:** Pick specific matches
- **Team Following:** Auto-route for your favorite team
- **View Route:** See optimized path on map
- **Cost Estimates:** Hotels, flights, and total budget

**Try it:** 
1. Click "Follow a Team" tab
2. Select a team (e.g., Brazil)
3. Click "Create My Route"
4. View your auto-generated journey!

#### 3️⃣ **Recommended Routes** 🌟
**URL:** `/recommended-routes`

Pre-built popular routes:
- Opening Weekend Explorer
- Final Four Frenzy
- Coast to Coast Adventure
- And many more!

**Try it:** Browse featured routes and click "View Details" to see the full itinerary.

#### 4️⃣ **My Journey** 📋
**URL:** `/my-journey`

Manage your saved trips:
- View all saved routes
- Load previous plans
- Export to calendar
- Delete old trips

**Try it:**
1. Create a route in Route Plan
2. Click "Save Trip"
3. Visit My Journey to see it saved

---

## 💾 Save & Export Your Trip (1 minute)

### Saving a Trip

1. **Create your route** in Route Plan or follow a team
2. **Click "Save Trip"** button (floppy disk icon)
3. **Enter a name** (e.g., "Brazil World Cup Tour")
4. **Click Save**

✅ Your trip is saved locally!

### Exporting to Calendar

1. **Load your saved trip** in My Journey
2. **Click the Calendar icon** (📅)
3. **Download `.ics` file**
4. **Import to:**
   - Google Calendar
   - Apple Calendar
   - Outlook
   - Any calendar app

✅ All matches are now in your calendar with locations and times!

### Exporting as JSON

1. **Load your saved trip**
2. **Click the Download icon** (⬇️)
3. **Save the JSON file**

✅ Perfect for backup or sharing with friends!

---

## 🗺️ Using the Interactive Map

### Map Controls

- **Zoom:** Scroll wheel or +/- buttons
- **Pan:** Click and drag
- **Rotate:** Right-click and drag (or Ctrl + drag)
- **Tilt:** Ctrl + drag up/down

### 3D Buildings

1. **Zoom into any city** (zoom level 15+)
2. **Watch buildings rise** in 3D
3. **Tilt the map** (Ctrl + drag) for a better view

### Route Visualization

When you create a route:
- **Blue markers** = Cities on your route
- **Numbered markers** = Order of stops
- **Red lines** = Your travel path

---

## 🏟️ Exploring Stadiums

### Stadium Archive
**URL:** `/stadium-archive`

View all 16 World Cup stadiums:
- Full specifications
- Capacity and facilities
- Historical information
- Match schedules

### Individual Stadium Pages
**URL:** `/stadiums/[stadium-name]`

Detailed pages for each stadium with:
- HD images
- Seating charts
- Transit information
- Nearby attractions

---

## 🎪 Fan Zones

**URL:** `/fan-zones`

Discover official FIFA fan zones:
- Public viewing locations
- Event schedules
- Capacity information
- Interactive maps

**Try it:** Click on any fan zone to see detailed information and get directions.

---

## 🌡️ Weather Planning

**URL:** `/weather-planner`

Plan for the best conditions:
- Monthly climate data for June-July 2026
- Temperature and precipitation forecasts
- Packing recommendations
- FAQ about World Cup weather

---

## 💰 Budget Planning

**URL:** `/budget-planner`

Estimate your total trip cost:
- Hotel costs by city
- Flight/transportation estimates
- Match ticket prices (estimated)
- Daily expenses

---

## 📰 Travel Blog & Guides

**URL:** `/blog`

Expert articles on:
- Stadium database and history
- Match schedule breakdowns
- City-specific guides
- Travel tips and tricks
- Ticket information
- Route planning strategies

**Try it:** Browse articles for in-depth World Cup planning advice.

---

## 🔧 Developer Commands

### Development

```bash
# Start dev server with hot reload
npm run dev

# Run linter
npm run lint
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Generate sitemap (included in build)
npm run generate:sitemap
```

### Testing URLs

After building:
- **Sitemap:** http://localhost:5173/sitemap.xml
- **Robots:** http://localhost:5173/robots.txt

---

## 🎨 Customization Quick Tips

### Change App Name/Branding

**File:** `src/pages/Home.tsx`, `src/components/Navigation.tsx`

Update text and titles to your branding.

### Modify Colors

**File:** `src/index.css`

```css
:root {
  --fifa-blue: #32127a;    /* Primary color */
  --fifa-cyan: #00bcd4;    /* Accent color */
  --fifa-purple: #7c4dff;  /* Secondary */
}
```

### Add/Edit Cities

**File:** `src/data/cities.ts`

Add new cities to the array with:
- Name, country, coordinates
- Stadium information
- Hotel costs, transit scores
- Local tips and safety info

### Add/Edit Matches

**File:** `src/data/matches.ts`

Add matches with:
- Date and time
- Stadium location
- Round (Group Stage, Round of 16, etc.)
- Teams (or TBD)

---

## 🔍 SEO Configuration (5 minutes)

### Update Domain Name

**Files to update:**
1. `src/utils/seoHelpers.ts` - Update `SITE_URL`
2. `src/components/SEO.tsx` - Update canonical URLs
3. `scripts/generateSitemap.js` - Update base URL
4. `public/robots.txt` - Update Sitemap URL

**Find and Replace:**
- Replace: `worldcup2026planner.com`
- With: `your-domain.com`

### Add Open Graph Image

1. **Create image:** 1200x630 pixels
2. **Name it:** `og-image.png`
3. **Place in:** `public/` folder

### Add Favicon

1. **Use:** https://favicon.io/
2. **Generate** favicon files
3. **Place in:** `public/` folder
4. **Update:** `index.html` with favicon links

---

## 🚨 Troubleshooting

### Problem: Map Not Loading

**Solution:**
1. Check Mapbox token in `src/components/Map.tsx`
2. Verify internet connection
3. Check browser console for errors

### Problem: Trip Not Saving

**Solution:**
1. Ensure LocalStorage is enabled
2. Exit private/incognito mode
3. Clear cache and try again

### Problem: Build Errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist

# Try building again
npm run build
```

### Problem: Port 5173 Already in Use

**Solution:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

---

## 🎯 Next Steps

Now that you're up and running:

1. ✅ **Explore all features** - Click through every page
2. ✅ **Create a test route** - Try the route planner
3. ✅ **Save and export** - Test the save/export functionality
4. ✅ **Check mobile view** - Resize your browser or use dev tools
5. ✅ **Read the docs** - Check out other .md files for details

### Recommended Reading

- **NEW_FEATURES.md** - Complete feature overview
- **SEO_QUICK_START.md** - Optimize for search engines
- **GDPR_QUICK_START.md** - Privacy compliance guide
- **MAPBOX_SETUP.md** - Advanced mapping features

---

## 📱 Mobile Testing

### Using Browser Dev Tools

1. **Open DevTools** (F12 or Cmd+Option+I)
2. **Click device icon** (Toggle device toolbar)
3. **Select device:** iPhone 12, iPad, etc.
4. **Test navigation and features**

### Recommended Test Devices

- **iPhone SE** (375px) - Small phone
- **iPhone 12 Pro** (390px) - Standard phone
- **iPad** (768px) - Tablet
- **iPad Pro** (1024px) - Large tablet
- **Desktop** (1280px+) - Desktop

---

## 🎊 You're Ready!

Your FIFA World Cup 2026 Planner is fully operational! 🚀

### What You Can Do Now

✅ Plan complex multi-city World Cup journeys  
✅ Follow your favorite team automatically  
✅ Save unlimited trip variations  
✅ Export trips to your calendar  
✅ Explore all 16 host cities  
✅ Discover fan zones and attractions  
✅ Check weather and plan accordingly  
✅ Read expert travel guides  
✅ Share routes with friends  

### Get Help

- **Documentation:** Check other .md files
- **Issues:** Open a GitHub issue
- **Questions:** Contact via email in README.md

---

## 🌟 Pro Tips

### 1. Keyboard Shortcuts (Map)
- **+/-** : Zoom in/out
- **Arrow keys** : Pan map
- **Shift + drag** : Rotate map
- **Ctrl + drag** : Tilt map

### 2. Optimal Route Planning
- **Select 3-5 matches** for best results
- **Check rest time** between matches (24+ hours recommended)
- **Consider time zones** when planning
- **Use "Follow a Team"** for automatic optimal routes

### 3. Sharing Tips
- **Export as JSON** to share with friends
- **Take screenshots** of your route map
- **Use calendar export** to sync with travel companions
- **Share blog articles** for travel planning help

### 4. Performance Tips
- **Clear old saved trips** to free up space
- **Close other browser tabs** when using the map
- **Use latest browser version** for best performance
- **Disable unnecessary extensions** while planning

---

## 📞 Support

Need help? Check these resources:

1. **README.md** - Full project documentation
2. **Feature docs** - NEW_FEATURES.md, MAPBOX_SETUP.md, etc.
3. **Browser console** - Check for error messages
4. **GitHub Issues** - Search existing issues or create new one

---

<div align="center">

**Happy World Cup Planning!** ⚽🌍

*Start planning your dream World Cup 2026 journey today!*

</div>
