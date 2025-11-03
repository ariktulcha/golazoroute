# Logo & Favicon Setup Guide

## Your GolazoRoute Logo
The trophy with soccer ball logo has been configured for your World Cup 2026 planning app!

## Steps to Complete Setup

### 1. Save the Logo Image
Save your logo image (the trophy with soccer ball) to the project. I recommend:
- **Main Logo**: Save as `/public/logo.png` (recommended size: 512x512px or larger)
- This will be used throughout your app in the navigation and other components

### 2. Create Favicon Files
You need to create multiple favicon sizes from your logo. Here are the required files for `/public/`:

#### Required Favicon Sizes:
- **favicon.ico** - 16x16, 32x32, 48x48 (multi-resolution ICO file)
- **favicon-16x16.png** - 16x16px
- **favicon-32x32.png** - 32x32px
- **apple-touch-icon.png** - 180x180px (for iOS devices)
- **android-chrome-192x192.png** - 192x192px (for Android)
- **android-chrome-512x512.png** - 512x512px (for Android)

### 3. Quick Setup Methods

#### Option A: Use Online Favicon Generator (Recommended)
1. Go to [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
2. Upload your logo image
3. Customize settings:
   - **iOS**: Keep the trophy/ball design
   - **Android**: Keep the trophy/ball design
   - **Windows Metro**: Choose your brand color (#1a1a2e - dark blue)
   - **macOS Safari**: Keep the trophy/ball design
4. Generate and download the favicon package
5. Extract all files to `/Users/tulcha/Desktop/dev/world_cup/public/`

#### Option B: Use ImageMagick (Command Line)
If you have ImageMagick installed, you can run these commands:

```bash
# Navigate to your public directory
cd /Users/tulcha/Desktop/dev/world_cup/public

# Assuming you have the original logo as 'logo.png'
# Create all required sizes
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 android-chrome-192x192.png
convert logo.png -resize 512x512 android-chrome-512x512.png

# Create multi-resolution ICO file
convert logo.png -define icon:auto-resize=48,32,16 favicon.ico
```

#### Option C: Manual Export from Image Editor
Use Photoshop, GIMP, Figma, or similar to:
1. Open your logo
2. Export each required size listed above
3. Save all files to `/public/` directory

### 4. Update Open Graph Image
For social media sharing, create a larger banner version:
- **File**: `/public/og-image.png`
- **Size**: 1200x630px
- **Content**: Your logo with "GolazoRoute - FIFA World Cup 2026 Trip Planner" text

### 5. Verification
After adding all files, verify they exist in `/public/`:
```
public/
  ├── logo.png
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── apple-touch-icon.png
  ├── android-chrome-192x192.png
  ├── android-chrome-512x512.png
  └── og-image.png
```

### 6. Test Your Favicons
1. Start your dev server: `npm run dev`
2. Open your browser and navigate to your site
3. Check the favicon in:
   - Browser tab
   - Bookmarks
   - Mobile home screen (if testing on mobile)

### 7. Clear Browser Cache
If you don't see the new favicon immediately:
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Close and reopen the browser

## Design Notes

Your logo features:
- ⚽ Soccer ball in a trophy
- 🏆 Blue and gold trophy design
- Perfect for the World Cup 2026 theme!
- The dark blue (#1a1a2e) background matches your site theme

## Using the Logo in Components

### In Navigation Component
Add the logo to your Navigation component:

```tsx
<img 
  src="/logo.png" 
  alt="GolazoRoute Logo" 
  className="h-8 w-8"
/>
```

### As Link to Home
```tsx
<Link to="/" className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="GolazoRoute" 
    className="h-8 w-8"
  />
  <span className="text-xl font-bold">GolazoRoute</span>
</Link>
```

## Next Steps
1. ✅ HTML favicon links are configured
2. ⏳ Save your logo image to `/public/logo.png`
3. ⏳ Generate and save all favicon sizes to `/public/`
4. ⏳ Update Navigation component to include logo
5. ⏳ Create og-image.png for social sharing
6. ⏳ Test in browser

## Files Modified
- ✅ `index.html` - Updated with proper favicon links

