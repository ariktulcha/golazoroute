# 🚀 Article System - Quick Start

The fastest way to add high-quality blog articles to your World Cup site!

## ⚡ Super Simple Method

Just send me text like this:

```
CATEGORY: city-guide
TITLE: Miami World Cup 2026 Guide
CITY: Miami

## Introduction
Your article content here...

## More Sections
More content...

## FAQ
**Question?**
Answer here.
```

I'll instantly convert it to proper TypeScript! ✨

## 🛠️ Using the Generator Script

### Option 1: Interactive (Recommended)
```bash
npm run create-article
```

Then answer the prompts!

### Option 2: Command Line
```bash
npm run create-article "Your Title" category path/to/article.md
```

Example:
```bash
npm run create-article "Miami Guide" city-guide ~/Desktop/miami.md
```

## 📋 Categories Available

- `city-guide` - City guides (Los Angeles, Miami, etc.)
- `itinerary` - Multi-city routes
- `planning` - Budget, tips, logistics
- `ticket-info` - Ticket guides
- `team` - Team-specific content
- `experience` - Fan experiences
- `comparison` - Comparisons

## 📁 File Organization

Articles are automatically organized:

```
src/data/articles/
├── city-guides/     ← City guides
├── planning/        ← Planning & tickets
├── itineraries/     ← Travel routes
└── reference/       ← Databases & schedules
```

## ✅ After Generation

The script tells you exactly what to do:

1. **Update image** in the generated file
2. **Add import** to `blogArticles.ts`:
   ```typescript
   import { yourArticle } from './articles/city-guides/your-slug';
   ```
3. **Add to array**:
   ```typescript
   export const blogArticles: BlogArticle[] = [
     // ... existing
     yourArticle,  // ← Add here
   ];
   ```
4. **Test**: `npm run dev`
5. **Deploy**!

## 📝 Writing Tips

### Good Article Structure:
```markdown
## Introduction
Start with **Direct Answer** - specific numbers and facts.

## Main Topic 1
Detailed content...

### Subtopic
More details...

## FAQ
**How do I...?**
Clear answer with specifics.

**What about...?**
More helpful info.
```

### Include:
- ✅ Specific numbers (prices, distances, times)
- ✅ Direct answers first
- ✅ 5-10 FAQ items
- ✅ Clear headers (## and ###)
- ✅ Bold for emphasis
- ✅ 2000+ words for guides

## 🎯 Full Example

See `src/data/articles/_EXAMPLE_INPUT.md` for a complete example!

## 🆘 Need Help?

1. **Check template**: `src/data/articles/_TEMPLATE.md`
2. **Read full guide**: `ARTICLE_SYSTEM_README.md`
3. **Ask me**: Just send your article text!

---

**That's it!** Write articles in simple markdown → Run script → Add to index → Deploy! 🎉

**Or even simpler:** Just send me the text and I'll do it all for you!

