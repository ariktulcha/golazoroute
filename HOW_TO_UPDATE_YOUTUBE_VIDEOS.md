# How to Update YouTube Videos for Stadiums

## Quick Guide to Finding and Adding YouTube Videos

### Step 1: Search on YouTube

Go to YouTube and search for:
- **MetLife Stadium**: Search "MetLife Stadium tour" or "MetLife Stadium World Cup"
- **SoFi Stadium**: Search "SoFi Stadium inside tour" or "SoFi Stadium official"
- **Estadio Azteca**: Search "Estadio Azteca World Cup" or "Estadio Azteca documentary"

### Step 2: Get the Video ID

From any YouTube video URL, extract the ID:

**URL Format:**
```
https://www.youtube.com/watch?v=VIDEO_ID_HERE
```

**Example:**
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                  ^^^^^^^^^^^
                                  This is the Video ID
```

### Step 3: Update the Stadium Data

Open: `src/data/stadiums.ts`

Find the stadium and update the `youtubeVideoId` field:

```typescript
{
  id: 'metlife-stadium',
  name: 'MetLife Stadium',
  // ... other fields ...
  youtubeVideoId: 'YOUR_VIDEO_ID_HERE', // <-- Update this
  // ... other fields ...
}
```

### Current Video IDs (Need Verification)

**MetLife Stadium:**
```typescript
youtubeVideoId: 'ZWQjJaAMZ7s'
```

**SoFi Stadium:**
```typescript
youtubeVideoId: 'StTqXEQ2l-Y'
```

**Estadio Azteca:**
```typescript
youtubeVideoId: '1wnje7fGMVk'
```

## How to Test

1. **Start your development server:**
```bash
npm run dev
```

2. **Navigate to a stadium page:**
- http://localhost:5173/stadiums/metlife-stadium
- http://localhost:5173/stadiums/sofi-stadium
- http://localhost:5173/stadiums/estadio-azteca

3. **Check if the video loads and plays correctly**

## Recommended Videos to Search For

### MetLife Stadium
Search terms:
- "MetLife Stadium official tour"
- "MetLife Stadium NFL"
- "MetLife Stadium World Cup 2026"

Look for:
- Official NFL videos
- Stadium tour videos
- High-quality production

### SoFi Stadium
Search terms:
- "SoFi Stadium tour"
- "SoFi Stadium inside"
- "SoFi Stadium Rams Chargers"

Look for:
- Official LA Rams/Chargers videos
- Stadium unveiling videos
- Tour videos showing the Oculus screen

### Estadio Azteca
Search terms:
- "Estadio Azteca World Cup"
- "Estadio Azteca history"
- "Estadio Azteca Maradona"

Look for:
- FIFA official videos
- Historical documentary videos
- Stadium tour videos in Spanish or English

## Adding More Stadiums

For the remaining 4 stadiums (Atlanta, Seattle, Toronto), follow the same process:

1. Search YouTube for the stadium
2. Pick the first relevant, high-quality video
3. Extract the video ID
4. Add to the stadium data:

```typescript
{
  id: 'mercedes-benz-stadium',
  name: 'Mercedes-Benz Stadium',
  // ... other fields ...
  youtubeVideoId: 'YOUR_VIDEO_ID', // Add this line
  // ... other fields ...
}
```

## Tips for Choosing Videos

✅ **Good Videos:**
- Official stadium channels
- High production quality (HD or 4K)
- Length: 2-10 minutes ideal
- Shows stadium features and history
- English language preferred (or English subtitles)

❌ **Avoid:**
- Fan-made shaky cam videos
- Low quality/old footage
- Videos with copyrighted music
- Videos over 15 minutes (too long)
- Videos in languages without subtitles

## Quick Command to Update

After finding the correct video ID:

```bash
# Open the file
code src/data/stadiums.ts

# Or
vim src/data/stadiums.ts
```

Search for `youtubeVideoId` and update with your new ID.

## Test Checklist

After updating a video ID:

- [ ] Video loads without errors
- [ ] Video is relevant to the stadium
- [ ] Video quality is good (not pixelated)
- [ ] Video plays on mobile devices
- [ ] Video doesn't have copyright issues
- [ ] Fullscreen works correctly

## Need Help?

If a video doesn't work:
1. Check the video ID is correct (11 characters, letters and numbers)
2. Make sure the video isn't age-restricted
3. Verify the video is publicly available (not private/unlisted)
4. Try a different video from the search results

