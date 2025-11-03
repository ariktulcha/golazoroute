# Logo Integration in Navigation Component

## Current Logo Section

Your Navigation component currently uses a Trophy icon at lines 211-225:

```tsx
<div 
  className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
  onClick={() => navigate('/')}
>
  <div className="relative">
    <Trophy className="w-7 h-7 text-fifa-gold-400 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
    <div className="absolute inset-0 blur-xl bg-fifa-gold-500/40 animate-pulse-slow"></div>
  </div>
  <h1 className="text-base font-bold text-white tracking-tight">
    <span className="gradient-text">
      GolazoRoute
    </span>
  </h1>
</div>
```

## Updated Version with Your Logo

Replace the Trophy icon with your actual logo image:

```tsx
<div 
  className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
  onClick={() => navigate('/')}
>
  <div className="relative">
    {/* Your trophy + soccer ball logo */}
    <img 
      src="/logo.png" 
      alt="GolazoRoute Logo" 
      className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
    />
    <div className="absolute inset-0 blur-xl bg-fifa-gold-500/40 animate-pulse-slow"></div>
  </div>
  <h1 className="text-base font-bold text-white tracking-tight">
    <span className="gradient-text">
      GolazoRoute
    </span>
  </h1>
</div>
```

## Alternative: Logo Without Glow Effect

If you prefer a cleaner look without the glow:

```tsx
<div 
  className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
  onClick={() => navigate('/')}
>
  <img 
    src="/logo.png" 
    alt="GolazoRoute Logo" 
    className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
  />
  <h1 className="text-base font-bold text-white tracking-tight">
    <span className="gradient-text">
      GolazoRoute
    </span>
  </h1>
</div>
```

## Alternative: Logo Only (No Text)

For a minimal header:

```tsx
<div 
  className="flex items-center gap-2 group cursor-pointer"
  onClick={() => navigate('/')}
  title="GolazoRoute - FIFA World Cup 2026"
>
  <img 
    src="/logo.png" 
    alt="GolazoRoute - FIFA World Cup 2026" 
    className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
  />
</div>
```

## Mobile Menu Logo

You may also want to update the mobile menu logo (around line 145-175 in Navigation.tsx). Look for the mobile header section and replace the Trophy icon there as well:

```tsx
{/* Mobile: Logo */}
<div className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="GolazoRoute Logo" 
    className="w-7 h-7"
  />
  <h1 className="text-lg font-bold text-white">
    <span className="gradient-text">GolazoRoute</span>
  </h1>
</div>
```

## Recommended Approach

1. **Keep the hover animation**: The `group-hover:scale-110 group-hover:rotate-12` creates a nice interactive effect
2. **Keep the glow effect**: The blur background makes your logo pop
3. **Use appropriate sizing**: `w-8 h-8` works well for desktop, `w-7 h-7` for mobile

## Testing

After making changes:
1. Save the file
2. Check the logo in the navigation bar
3. Test the hover effect
4. Test on mobile (responsive design)
5. Verify the logo is clickable and returns to home page

## Notes

- Your logo (trophy with soccer ball) perfectly matches the World Cup theme! 🏆⚽
- The gold and blue colors complement your existing color scheme
- Make sure to add the logo file to `/public/logo.png` before testing

