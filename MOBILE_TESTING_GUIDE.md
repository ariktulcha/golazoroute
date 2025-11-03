# 📱 Mobile Testing Guide

## Quick Test All Pages

### 1. **Match Schedule** (`/schedule`)
**What to test:**
- [ ] Scroll through match cards
- [ ] Tap favorite button (should be easy to tap)
- [ ] Check team names don't overflow
- [ ] Verify stage badges are readable
- [ ] Test filter dropdowns
- [ ] Check date headers

**Expected behavior:**
- Cards display clearly with vertical team layout
- All buttons are easy to tap (44px minimum)
- No text overflow
- Smooth scrolling

---

### 2. **Destination Info** (`/destination-info`)
**What to test:**
- [ ] Tap country filters
- [ ] Scroll city list (should limit to 300px)
- [ ] Select different cities
- [ ] Check stat cards layout
- [ ] Scroll through city details
- [ ] Test weather and tips sections

**Expected behavior:**
- City list doesn't overwhelm screen
- All content readable
- Stats display in single column
- Smooth transitions between cities

---

### 3. **Match Optimizer** (`/optimizer`)
**What to test:**
- [ ] Select matches from match selector
- [ ] Scroll through match selector
- [ ] Tap "Optimize Route" button
- [ ] View optimized itinerary
- [ ] Check summary stats cards
- [ ] Test save dialog
- [ ] Try loading popular routes

**Expected behavior:**
- Sidebar limited to 50vh on mobile
- Itinerary takes priority when shown
- All buttons are touch-friendly
- Stats display in 2-column grid

---

### 4. **City Explorer** (`/explorer`)
**What to test:**
- [ ] Select cities from sidebar
- [ ] Check city card appears at bottom
- [ ] Scroll city card content
- [ ] Close city card
- [ ] Test map interactions
- [ ] Try map controls

**Expected behavior:**
- City card positioned at bottom edge
- Card scrollable with max-height
- Map controls don't overlap
- Smooth animations

---

### 5. **Interactive Map** (Component in Explorer/Optimizer)
**What to test:**
- [ ] Tap map style buttons (Dark/Satellite/Streets)
- [ ] Tap reset view button
- [ ] Tap fullscreen button
- [ ] Open/close tips panel
- [ ] Check legend positioning
- [ ] Try zoom controls

**Expected behavior:**
- All buttons minimum 44px
- Style buttons show icons only on mobile
- Tips panel scrollable
- Controls positioned properly with safe areas
- No overlap between elements

---

## Testing Scenarios by Device Size

### Small Phone (375px - iPhone SE)
- [ ] All text readable
- [ ] No horizontal scrolling
- [ ] Touch targets still 44px
- [ ] Content doesn't feel cramped

### Standard Phone (390px - iPhone 12/13)
- [ ] Optimal layout
- [ ] Good spacing
- [ ] Clear typography
- [ ] Easy navigation

### Large Phone (428px - iPhone 14 Plus)
- [ ] Doesn't look too sparse
- [ ] Good use of space
- [ ] Transitions smooth

### Tablet (768px+)
- [ ] Desktop layout kicks in at right place
- [ ] Two-column layouts appear
- [ ] Increased spacing appropriate

---

## Common Issues to Look For

### ❌ **Red Flags:**
- Text running off screen
- Buttons too small to tap comfortably
- Elements overlapping
- Horizontal scrolling (except intentional carousels)
- Modal/dialog taller than viewport
- Text too small to read
- Icons too small
- Excessive whitespace or cramping

### ✅ **Good Signs:**
- All buttons easy to tap
- Text clearly readable
- Smooth scrolling
- No layout shifts
- Appropriate spacing
- Good visual hierarchy
- Proper touch feedback
- Content fits within viewport

---

## Quick Browser DevTools Testing

### Chrome/Edge:
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select device presets or set custom dimensions
4. Test these sizes:
   - 375 × 667 (iPhone SE)
   - 390 × 844 (iPhone 12/13)
   - 428 × 926 (iPhone 14 Plus)
   - 360 × 740 (Android)

### Safari (for iOS testing):
1. Use responsive design mode (Cmd+Opt+R)
2. Test with actual devices if available
3. Check safe area behavior on notched devices

---

## Touch Interaction Tests

### Each Interactive Element:
1. **Size Check**: Measure in DevTools (should be ≥44px)
2. **Tap Test**: Try tapping quickly - should work easily
3. **Visual Feedback**: Should see color change on tap (active state)
4. **No Mis-taps**: Shouldn't accidentally tap neighboring elements

### Scrolling:
1. **Smooth**: No janky or laggy scrolling
2. **Proper Areas**: Only intended areas scroll
3. **No Horizontal**: No unexpected horizontal scrolling
4. **Momentum**: Natural momentum scrolling on iOS

---

## Viewport Size Breakpoints

```css
/* Mobile */
< 640px (sm:) - Primary mobile focus

/* Tablet */
640px - 1024px (sm: and md:) - Transition zone

/* Desktop */
> 1024px (lg:+) - Full desktop layout
```

---

## Critical Pages Priority

1. **High Priority** (Test First):
   - Schedule (most used)
   - City Explorer (map interactions critical)
   - Match Optimizer (complex layout)

2. **Medium Priority**:
   - Destination Info (content-heavy)
   - All other pages

3. **Components** (Test in Context):
   - CityCard (in Explorer)
   - ItineraryView (in Optimizer)
   - MatchSelector (in Optimizer)

---

## Automated Testing Commands

```bash
# Start dev server
npm run dev

# Open in mobile-sized browser
# Use DevTools device mode

# Check for console errors
# Look for layout warnings
# Verify no horizontal overflow
```

---

## Sign-off Checklist

Before considering mobile testing complete:

- [ ] All pages tested at 375px width
- [ ] All interactive elements tested for tap-ability
- [ ] No text overflow observed
- [ ] Scrolling smooth on all pages
- [ ] Safe areas respected (check on iPhone X+)
- [ ] Active states provide visual feedback
- [ ] Typography readable at all sizes
- [ ] No horizontal scrolling anywhere
- [ ] Modals/dialogs fit on screen
- [ ] Loading states look good
- [ ] Error states display properly
- [ ] Empty states formatted correctly

---

## Final Recommendation

**Test on actual devices when possible!** While browser DevTools are great, nothing beats testing on real hardware to catch:
- Touch responsiveness
- Performance issues
- Safe area rendering
- Font rendering
- Scrolling behavior
- Network conditions

---

## Quick Test Script

1. Open app on mobile device or in DevTools mobile mode (375px)
2. Navigate to each main page
3. Scroll through content
4. Tap all interactive elements
5. Check for any visual issues
6. Repeat at 390px and 428px widths
7. Verify smooth transitions to desktop at 640px+

**Total time needed: ~15-20 minutes for comprehensive test**

---

## Report Template

If you find issues, report them like this:

```
Page: [Page Name]
Device Width: [Width in px]
Issue: [Brief description]
Steps to Reproduce:
1. ...
2. ...
3. ...

Expected: [What should happen]
Actual: [What actually happens]
Screenshot: [If available]
```

---

## Success Criteria

✅ **All pages tested**
✅ **No critical issues found**
✅ **All touch targets ≥44px**
✅ **No text overflow**
✅ **Smooth scrolling**
✅ **Proper visual feedback**
✅ **Safe areas respected**
✅ **Loading/error states work**

**When all boxes checked: MOBILE UX IS PRODUCTION READY! 🎉**

