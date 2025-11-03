# 📊 Article Creation Workflow

## 🎨 Visual Workflow

```
┌─────────────────────────────────────────────────────────┐
│  STEP 1: Write Your Article                            │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  Just write in simple markdown:                         │
│                                                         │
│  ## Introduction                                        │
│  Miami will host 7 matches...                           │
│                                                         │
│  ## Getting There                                       │
│  The stadium is located...                              │
│                                                         │
│  ## FAQ                                                 │
│  **How do I...?**                                       │
│  Answer here...                                         │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 2A: Send Me the Text (Easiest!)                  │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  Just paste and tell me:                                │
│  - Title                                                │
│  - Category                                             │
│  - City (if applicable)                                 │
│                                                         │
│  I'll convert it instantly! ⚡                          │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │   I generate:   │
                   │   - TypeScript  │
                   │   - Metadata    │
                   │   - SEO data    │
                   │   - Schema      │
                   └─────────────────┘
                            │
                            │
┌───────────────────────────┴─────────────────────────────┐
│  STEP 2B: Or Use the Script                            │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  $ npm run create-article                               │
│                                                         │
│  Answer prompts:                                        │
│  > Article title: Miami Guide                           │
│  > Category: city-guide                                 │
│  > City: Miami                                          │
│  > File: miami.md                                       │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│  RESULT: Generated TypeScript File                     │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  ✅ src/data/articles/city-guides/miami-guide.ts        │
│                                                         │
│  Contains:                                              │
│  • TypeScript BlogArticle object                        │
│  • SEO metadata (title, description)                    │
│  • Schema.org structured data                           │
│  • Formatted content sections                           │
│  • FAQ items                                            │
│  • Tags and categories                                  │
│  • Read time calculation                                │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 3: Add to Blog Index                             │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  Edit: src/data/blogArticles.ts                         │
│                                                         │
│  1. Add import:                                         │
│     import { miamiGuideArticle }                        │
│       from './articles/city-guides/miami-guide';        │
│                                                         │
│  2. Add to array:                                       │
│     export const blogArticles = [                       │
│       stadiumDatabaseArticle,                           │
│       matchScheduleArticle,                             │
│       miamiGuideArticle,  // ← Add here                 │
│     ];                                                  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 4: Test Locally                                  │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  $ npm run dev                                          │
│                                                         │
│  Visit: http://localhost:5173/blog/miami-guide          │
│                                                         │
│  Check:                                                 │
│  ✓ Content displays correctly                           │
│  ✓ Formatting looks good                                │
│  ✓ Images load                                          │
│  ✓ FAQ section works                                    │
│  ✓ Related articles link                                │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│  STEP 5: Deploy!                                       │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  $ git add .                                            │
│  $ git commit -m "Add Miami guide article"              │
│  $ git push                                             │
│                                                         │
│  Your article is now live! 🚀                           │
└─────────────────────────────────────────────────────────┘
```

## ⚡ Ultra-Fast Method

```
YOU                          ME                        RESULT
─────────────────────────────────────────────────────────────

"Here's my article          "Here's the                Article
about Miami:                TypeScript code:"          ready to
                                                       deploy!
## Introduction             export const
Miami hosts 7               miamiArticle = {           Just add
matches at Hard             ...                        import &
Rock Stadium...             }                          deploy!

## Getting There            Copy/paste                 ⚡ 30 seconds
Take I-95 to..."            → Done!                    total!
```

## 📁 File Organization Flow

```
Your Article (markdown)
    │
    ├─ city-guide ──────→ src/data/articles/city-guides/
    ├─ itinerary ───────→ src/data/articles/itineraries/
    ├─ planning ────────→ src/data/articles/planning/
    └─ reference ───────→ src/data/articles/reference/
                              │
                              ▼
                    Imports gathered in
                    src/data/blogArticles.ts
                              │
                              ▼
                    Used throughout site:
                    - Blog index page
                    - Individual article pages
                    - Related articles
                    - City pages
                    - SEO metadata
```

## 🎯 Category → Folder Mapping

| Category      | Folder           | Examples                    |
|---------------|------------------|-----------------------------|
| city-guide    | city-guides/     | Los Angeles, New York       |
| itinerary     | itineraries/     | West Coast Route            |
| planning      | planning/        | Budget, Tickets             |
| ticket-info   | planning/        | Ticket phases, pricing      |
| reference     | reference/       | Stadium DB, Schedule        |
| team          | teams/           | Team-specific guides        |
| experience    | experiences/     | Fan experiences             |
| comparison    | comparisons/     | Option comparisons          |

## 🔄 Comparison: Before vs After

### Before (Manual Process)
```
1. Create TypeScript file manually            ⏱️ 30 min
2. Write all boilerplate code                 ⏱️ 15 min
3. Format content with HTML                   ⏱️ 20 min
4. Add schema markup                          ⏱️ 10 min
5. Calculate metadata                         ⏱️ 5 min
6. Add imports                                ⏱️ 2 min
7. Test and fix errors                        ⏱️ 10 min
                                              ────────
                                    Total:    ⏱️ 92 min
```

### After (With System)
```
METHOD A: Send me text
1. Write article in markdown                  ⏱️ 30 min
2. Send to me                                 ⏱️ 1 min
3. I generate everything                      ⏱️ Instant
4. Copy/paste result                          ⏱️ 1 min
5. Add import                                 ⏱️ 1 min
6. Deploy                                     ⏱️ 1 min
                                              ────────
                                    Total:    ⏱️ 34 min

METHOD B: Use script
1. Write article in markdown                  ⏱️ 30 min
2. Run npm run create-article                 ⏱️ 1 min
3. Add import                                 ⏱️ 1 min
4. Deploy                                     ⏱️ 1 min
                                              ────────
                                    Total:    ⏱️ 33 min

TIME SAVED: 60+ minutes per article! ⚡
```

## 🎓 Decision Tree

```
                    Need to add article?
                            │
                            ▼
              ┌─────────────┴─────────────┐
              │                           │
         Small update?              New article?
              │                           │
              ▼                           ▼
      Edit existing file         ┌───────┴───────┐
      in city-guides/            │               │
      planning/etc.          Quick?        Detailed?
                                 │               │
                                 ▼               ▼
                          Send me text    Use template
                          I'll convert    Write fully
                          instantly!      Run script
                                 │               │
                                 └───────┬───────┘
                                         │
                                         ▼
                                  Add to index
                                         │
                                         ▼
                                     Deploy!
```

## 📊 Quality Checklist Workflow

```
Writing Phase:
□ Title (50-60 chars)
□ Clear introduction with direct answer
□ 5+ main sections with headers
□ Specific numbers and data
□ 2000+ words

Pre-Generation:
□ FAQ section with 5-10 items
□ Proper markdown formatting (##, ###)
□ Bold keywords (**text**)
□ Lists where appropriate

Generated File:
□ Update featured image URL
□ Review auto-generated meta description
□ Check tags are relevant
□ Verify schema markup looks good

Adding to Site:
□ Import in blogArticles.ts
□ Add to array
□ Link related articles
□ Add city association if applicable

Testing:
□ npm run dev works
□ Article displays correctly
□ Images load
□ FAQ section renders
□ Links work
□ Mobile looks good

Deploy:
□ Git commit
□ Push to production
□ Verify live site
□ Check SEO in Google Search Console
```

## 🚀 Pro Tips

### For Maximum Efficiency:
1. **Batch writing** - Write 3-5 articles at once
2. **Use template** - Start from `_TEMPLATE.md`
3. **Send to me** - Fastest conversion (seconds!)
4. **Test locally** - Catch issues before deploy
5. **Version control** - Git tracks all changes

### For Best Quality:
1. **Specific numbers** - "7 matches" not "several matches"
2. **Direct answers** - First paragraph answers the question
3. **Rich FAQs** - 8-10 items for SEO rich snippets
4. **Internal links** - Link to other articles/cities
5. **Update regularly** - Keep information current

### For SEO Success:
1. **Target keywords** - Use in title, headers, first paragraph
2. **Meta descriptions** - Compelling, 150-160 chars
3. **Schema markup** - Auto-generated, verify it's correct
4. **Alt text** - Describe images (add manually)
5. **Fresh content** - Update dates when you edit

---

**Remember:** The absolute fastest way is to just send me your article text!

I'll handle all the conversion, formatting, and TypeScript generation instantly! ⚡

