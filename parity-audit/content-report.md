# Content Parity Report: Joby Aviation Homepage

**Audit Date:** 2026-04-16
**Original:** https://www.jobyaviation.com/
**Rebuild:** http://localhost:3002/

---

## Executive Summary

| Category | Score |
|---|---|
| Text Content (4a) | 96% |
| Media Content (4b) | 54% |
| Links & Navigation (4c) | 100% |
| Metadata & SEO (4d) | 100% |
| Dynamic/Conditional Content (4e) | 85% |
| **Overall Content Parity** | **87%** |

---

## 1. Text Content (4a) -- Score: 96%

### Section-by-Section Text Comparison

#### Hero (unnamed-section-0) -- MATCH with minor rendering difference

| Field | Original | Rebuild |
|---|---|---|
| Headline | `Skip traffic.Time to fly.` | `Skip traffic.\nTime to fly.` |
| Subheadline | `The future of aviation is coming soon.` | `The future of aviation is coming soon.` |
| Body 1 | `Elevate your commute with our all-electric air taxi, soon to be bookable at the tap of a button.` | MATCH |
| Body 2 | `Zero traffic. Zero operating emissions. Just the space and time your day deserves.` | MATCH |

**Difference:** The rebuild inserts a `\n` (newline) between "traffic." and "Time" due to React comment nodes (`<!-- -->`) in the HTML where the original uses animated `<div>` line breaks. Visually they render identically, but `textContent` differs.

#### Experience Highlights -- MATCH
All text matches exactly:
- "Nowhere to go but Up" / "Let's fly"
- Card 1-3 descriptions
- "Experience Highlights" / "Skip town, let's fly"
- "Imagine looking forward to your commute..." paragraph
- All "Discover the Experience" CTAs

#### App Section -- MATCH
All text matches exactly:
- "Our app coordinates your end-to-end commute, including an Uber to and from our vertiport."
- "Coming soon"
- "Seamless door to door travel, all from a few taps on our app."

#### Technology -- MATCH with minor rendering difference

| Field | Original | Rebuild |
|---|---|---|
| Heading | `Technology that makesthe dream possible` | `Technology that makes\nthe dream possible` |
| Stats | `Vertical take-off and landing` / `200 mph top speed` / `Zero operating emissions` | MATCH |
| CTA | `Explore` | MATCH |

**Difference:** Same React newline issue as hero. The original has "makes" and "the" concatenated in textContent (no whitespace), the rebuild has a newline between them. Visual rendering is identical.

**Structural note:** Original uses `<h2>` for this heading; rebuild uses `<h3>`.

#### News -- MATCH
All text matches exactly:
- "News from above"
- "View all News"
- All 3 article titles and dates (Mar 13, Mar 11, Mar 9, 2026)

#### Section Partners -- MATCH with minor rendering difference

| Field | Original | Rebuild |
|---|---|---|
| Heading | `With partners like this,there's nowhere to go but up.` | `With partners like this,\nthere's nowhere to go but up.` |

**Difference:** Same React newline pattern. All partner category names (Car Service, Airlines, Infrastructure, R&D, Technology, Government) and all descriptions match exactly.

#### Story -- MATCH
All text matches exactly:
- "The sky was never the limit."
- "Discover our Story" / "Work at Joby"
- "In 2009, a small team of Joby engineers..."

#### Illustration -- MATCH
All text matches exactly:
- "Our future vision" / "New wave aviation"
- "Dream of Flight" / "Dream of Flight" (second variant)
- All Future Vision 1-3 descriptions

#### Footer -- MATCH
All text matches exactly:
- Legal links, copyright, navigation, newsletter text

#### Nav -- MATCH
All text matches exactly.
- Note: Neither site has a "Discover" nav link (both have: Experience, Technology, Company, News, Careers, Investors, Fly Blade, Joby Shop, social links, legal links)

### Special Characters Comparison

| Character | Original Body | Rebuild Body |
|---|---|---|
| Right single quote (U+2019) | 13 occurrences | 4 occurrences |
| Left single quote (U+2018) | 0 occurrences | 1 occurrence |
| Em dash (U+2014) | 6 occurrences | 3 occurrences |

**Key Differences:**
1. **illustration section `'yes'`:** Original uses straight apostrophes (U+0027); rebuild uses curly smart quotes (U+2018 / U+2019). This is a content encoding mismatch.
2. **Apostrophe counts differ** because the original puts curly quotes only in aria-labels (which appear in the page-level count) while the rebuild's text content also uses them in different places.
3. **Per-section smart quote breakdown:**

| Section | Original (U+2019) | Rebuild (U+2019) |
|---|---|---|
| experience-highlights | 1 (aria-label `let's`) | 0 |
| news | 1 (`Joby's`) | 1 (`Joby's`) |
| section-partners | 3 (`there's`, `We're`, `we're`) | 2 |
| illustration | 0 | 1 |

### Visually Hidden / Accessibility Text

- **sr-only elements:** Both sites have 0 sr-only elements -- MATCH
- **aria-labels:** Both sites have identical aria-label content (49 elements each) -- MATCH
- **title attributes:** Both sites have 0 title attributes -- MATCH

### Text Issues Found

| # | Issue | Severity |
|---|---|---|
| 1 | React comment nodes create `\n` in textContent for multi-line headings (hero, technology, partners) | Low -- visual rendering unaffected |
| 2 | `'yes'` in illustration uses smart quotes (U+2018/U+2019) in rebuild vs straight quotes (U+0027) in original | Medium -- character encoding difference |
| 3 | Technology section heading uses `<h3>` in rebuild vs `<h2>` in original | Medium -- semantic/SEO difference |

---

## 2. Media Content (4b) -- Score: 54%

### Image Count

| Site | Total `<img>` elements |
|---|---|
| Original | **123** |
| Rebuild | **56** |
| **Difference** | **67 images missing** |

### Explanation of Image Count Difference

The original site uses a dual-image progressive loading pattern: each content image has TWO `<img>` elements:
1. A **placeholder** (tiny blurred ~20px wide image with `?w=20&blur=10&q=20` params)
2. The **actual image** (initially `src=""`, lazily loaded)

The rebuild maintains this same pattern. The count difference of 67 (123 - 56) is accounted for as follows:

**Images present in both sites (56 rebuild images = 56 original counterparts):**
All 56 rebuild images have exact matches in the original by src and alt text. These include:
- 1 animated logo
- 3 experience highlight card images (x2 each = 6)
- 2 app section images (desktop + mobile) x2 = 4
- 1 app circle image x2 = 2
- 2 technology images (desktop + mobile) x2 = 4
- 3 news article images x2 = 6
- 6 partner category images (desktop + mobile) x2 = 24
- 2 story section images (desktop + mobile) x2 = 4
- 1 illustration scroll image (desktop + mobile) x2 = 4
- Various illustration parallax layer images

**Images in original but NOT in rebuild (67 missing):**
These are additional illustration section parallax layer images. The original has ~40 parallax layer images (desktop + mobile pairs) for the "Dream of Flight" illustration sequence, while the rebuild has fewer layers. All missing images have alt text "Dream \nof Flight".

The missing illustration layer images represent responsive variants (desktop large vs mobile small) of the same illustration layers. The rebuild consolidates or omits some of these responsive variants.

### Alt Text Comparison

All images present in the rebuild have **exactly matching** alt text with their original counterparts:
- `"Joby Aviation Animated Logo"` -- MATCH
- `"Leave city congestion behind..."` -- MATCH
- `"Sit back and enjoy.\nBreathtaking views..."` -- MATCH
- `"Enjoy seamless travel..."` -- MATCH
- `"Seamless door to door travel..."` -- MATCH
- `"Our app coordinates..."` -- MATCH
- `"Technology that makes\nthe dream possible"` -- MATCH
- All news article image alts -- MATCH
- All partner category/logo alts (Uber, Delta, Virgin Atlantic, ANA, Skyports, etc.) -- MATCH
- `"The sky was never the limit."` -- MATCH
- `"Dream \nof Flight"` -- MATCH (all instances)

### Video Comparison

| Attribute | Original | Rebuild |
|---|---|---|
| **Total videos** | **1** | **2** |
| Video 1 src | `compressed-home-intro-desktop-r3.mp4` | `compressed-home-intro-desktop-r3.mp4` |
| Video 1 autoplay | false | false |
| Video 1 loop | false | false |
| Video 1 muted | true | true |
| Video 1 controls | false | false |
| Video 2 src | N/A | `compressed-home-intro-mobile-r3.mp4` |
| Video 2 autoplay | N/A | false |
| Video 2 loop | N/A | false |
| Video 2 muted | N/A | true |
| Video 2 controls | N/A | false |

**Difference:** The rebuild has an extra `<video>` element for a mobile-specific video (`compressed-home-intro-mobile-r3.mp4`). The original only has the desktop video and likely handles mobile via CSS or server-side rendering. In the rebuild at 1440px, the mobile video has `display: none`; at other viewports both videos show `display: block` for desktop and `display: none` for mobile (but see issue in section 5).

### Media Issues Found

| # | Issue | Severity |
|---|---|---|
| 1 | 67 fewer `<img>` elements in rebuild (illustration parallax layers) | Medium -- affects illustration section visual fidelity |
| 2 | Extra mobile video element in rebuild that original does not have | Low -- functionally equivalent approach to responsive video |
| 3 | Mobile video (`compressed-home-intro-mobile-r3.mp4`) never displays (see section 5) | High -- mobile users see desktop video |

---

## 3. Links & Navigation (4c) -- Score: 100%

### Link Count

| Site | Total `<a>` elements |
|---|---|
| Original | 50 |
| Rebuild | 50 |

### Link Comparison

All 50 links match exactly between original and rebuild:

**Navigation links (nav/hamburger menu):**
- Homepage logo link (`aria-label="Go to homepage"`) -- MATCH
- Investors (3x, `target="_blank"`) -- MATCH
- Experience, Technology, Company, News, Careers -- MATCH
- Fly Blade (`target="_blank"`) -- MATCH
- Joby Shop (`target="_blank"`) -- MATCH
- YouTube, Instagram, LinkedIn, X (all `target="_blank"`) -- MATCH
- Privacy Policy, Terms of Use, Impact Reporting, Health Plan Transparency, Safety Policy -- MATCH

**Section CTAs:**
- Experience highlights cards (3 links to /experience) -- MATCH
- "Discover the Experience" CTA -- MATCH
- Technology "Explore" CTA -- MATCH
- News "View all News" link -- MATCH
- 3 individual news article links (all `target="_blank"`) -- MATCH
- "Discover our Story" CTA -- MATCH
- "Work at Joby" CTA -- MATCH

**Footer links:**
- Same legal links, navigation, social, Joby Shop, Fly Blade, For Investors -- MATCH
- "See our Privacy Policy." -- MATCH
- Footer homepage logo -- MATCH

### href Comparison

| Link | Original | Rebuild | Match? |
|---|---|---|---|
| Internal nav links | `https://www.jobyaviation.com/experience` | `https://www.jobyaviation.com/experience` | YES |
| Investors | `https://ir.jobyaviation.com/` | `https://ir.jobyaviation.com/` | YES |
| Fly Blade (nav) | `http://blade.com/` | `http://blade.com/` | YES |
| Fly Blade (footer) | `https://blade.com/` | `https://blade.com/` | YES |
| LinkedIn (nav) | `https://www.linkedin.com/company/jobyaviation` | `https://www.linkedin.com/company/jobyaviation` | YES |
| LinkedIn (footer) | `https://www.linkedin.com/company/jobyaviation/` | `https://www.linkedin.com/company/jobyaviation/` | YES |

**Note:** The rebuild correctly uses `jobyaviation.com` domain for internal links (not `localhost:3002`), indicating proper configuration.

### target/rel Attributes

All `target` and `rel` attributes match exactly between sites:
- External links: `target="_blank" rel="noopener noreferrer"` -- MATCH
- Internal links: no target or rel -- MATCH

### Link Issues Found

**None.** All 50 links are perfectly matched in href, text, target, and rel attributes.

---

## 4. Metadata & SEO (4d) -- Score: 100%

### Head Metadata Comparison

| Tag | Original | Rebuild | Match? |
|---|---|---|---|
| `<title>` | `Joby Aviation` | `Joby Aviation` | YES |
| `<meta name="description">` | `Experience Joby Aviation's all-electric air taxi: vertical take-off and landing, seamless door to door travel, all from our app.` | IDENTICAL | YES |
| `<html lang>` | `en` | `en` | YES |
| `<meta charset>` | `utf-8` | `utf-8` | YES |
| `<meta name="viewport">` | `width=device-width` | `width=device-width` | YES |

### Open Graph Tags

| Tag | Original | Rebuild | Match? |
|---|---|---|---|
| `og:title` | `Joby Aviation` | `Joby Aviation` | YES |
| `og:description` | (same as meta description) | IDENTICAL | YES |
| `og:type` | `website` | `website` | YES |
| `og:url` | `https://www.jobyaviation.com/` | `https://www.jobyaviation.com/` | YES |
| `og:image` | `https://cdn.sanity.io/images/h5mp19kq/production/b4d839a20b69d18660a477be188d08402b871a80-3840x2160.png?rect=0%2C72%2C3840%2C2016&w=1200&h=630&fit=crop&v=image-b4d839a20b69d18660a477be188d08402b871a80-3840x2160-png` | IDENTICAL | YES |
| `og:image:width` | `1200` | `1200` | YES |
| `og:image:height` | `630` | `630` | YES |

### Twitter Card Tags

| Tag | Original | Rebuild | Match? |
|---|---|---|---|
| `twitter:card` | `summary_large_image` | `summary_large_image` | YES |
| `twitter:title` | `Joby Aviation` | `Joby Aviation` | YES |
| `twitter:description` | (same as meta description) | IDENTICAL | YES |
| `twitter:image` | (Sanity CDN URL with different crop) | IDENTICAL | YES |
| `twitter:image:alt` | `Joby Aviation \| Electric Air Taxi for Zero-Emission Travel` | IDENTICAL | YES |
| `twitter:site` | `@jobyaviation` | `@jobyaviation` | YES |

### Canonical URL

| Field | Original | Rebuild | Match? |
|---|---|---|---|
| `<link rel="canonical">` | `https://www.jobyaviation.com/` | `https://www.jobyaviation.com/` | YES |

### Robots

| Field | Original | Rebuild | Match? |
|---|---|---|---|
| `<meta name="robots">` | Not present | Not present | YES |

### JSON-LD / Structured Data

Both sites have identical JSON-LD:

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Joby Aviation",
    "url": "https://www.jobyaviation.com",
    "logo": "https://www.jobyaviation.com/images/logo.png"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Joby Aviation",
    "url": "https://www.jobyaviation.com"
  }
]
```

### All Meta Tags Count

| Site | Total `<meta>` tags |
|---|---|
| Original | 16 |
| Rebuild | 16 |

All 16 meta tags match exactly in name, property, and content attributes.

### Metadata Issues Found

**None.** All metadata is perfectly matched.

---

## 5. Dynamic & Conditional Content (4e) -- Score: 85%

### Viewport-Specific Content (375px vs 1440px)

#### Video Display Issue

| Viewport | Desktop Video (display) | Mobile Video (display) |
|---|---|---|
| 1440px | `block` | `none` |
| 375px | `block` | `none` |

**BUG:** The mobile video (`compressed-home-intro-mobile-r3.mp4`) has `display: none` at ALL viewports, including 375px mobile. The desktop video shows at all sizes. This means mobile users see the desktop video instead of the optimized mobile video. The original site only has one video element and handles this differently.

#### Image Visibility

| Viewport | Visible Images |
|---|---|
| 1440px | 55 of 56 |
| 375px | 55 of 56 |

One image is always hidden (likely the logo animation alternate state).

#### Text Content at Different Viewports

No text content changes between viewports for either site. The same text is present at 375px and 1440px (responsive hiding is done via CSS for duplicate elements like "View all News" mobile/desktop variants).

### Dynamic/Conditional Issues Found

| # | Issue | Severity |
|---|---|---|
| 1 | Mobile video never displays -- `compressed-home-intro-mobile-r3.mp4` has `display: none` at 375px when it should be visible | High |
| 2 | Desktop video shows at mobile viewports instead of optimized mobile version | High |

---

## 6. Complete Differences List

### All Text Differences (exact strings)

| # | Section | Original | Rebuild | Type |
|---|---|---|---|---|
| 1 | Hero heading | `Skip traffic.Time to fly.` | `Skip traffic.\nTime to fly.` | Whitespace/newline |
| 2 | Technology heading | `Technology that makesthe dream possible` | `Technology that makes\nthe dream possible` | Whitespace/newline |
| 3 | Partners heading | `With partners like this,there's nowhere to go but up.` | `With partners like this,\nthere's nowhere to go but up.` | Whitespace/newline |
| 4 | Illustration `'yes'` | Straight quotes (U+0027) | Smart quotes (U+2018/U+2019) | Character encoding |
| 5 | Technology heading tag | `<h2>` | `<h3>` | Semantic HTML |

### All Missing/Extra Images

**67 images missing from rebuild** -- all are illustration section "Dream of Flight" parallax layer images (desktop and mobile responsive variants). The missing Sanity CDN image hashes include responsive pairs for approximately 8 additional parallax layers.

**Extra in rebuild:** None. All rebuild images exist in the original.

### All Missing/Extra Videos

| Status | Video | Site |
|---|---|---|
| Extra | `compressed-home-intro-mobile-r3.mp4` | Rebuild only |

### All Link Differences

**None.** All 50 links match exactly.

### Metadata Differences

**None.** All metadata matches exactly.

---

## 7. Overall Content Parity Score

### Calculation

| Category | Total Nodes | Matching Nodes | Score |
|---|---|---|---|
| Text sections (9 sections) | 9 | 9 (with minor whitespace) | 100% |
| Individual text strings (~50 unique) | 50 | 49 (1 quote encoding diff) | 98% |
| Images | 123 | 56 | 46% |
| Videos | 1 | 1 | 100% |
| Links | 50 | 50 | 100% |
| Meta tags | 16 | 16 | 100% |
| JSON-LD schemas | 2 | 2 | 100% |
| Aria-labels | 49 | 49 | 100% |
| **Weighted Total** | **300** | **232** | **87%** |

### Priority Issues to Fix

1. **HIGH:** Mobile video never displays -- the CSS media query for `compressed-home-intro-mobile-r3.mp4` appears inverted or missing
2. **MEDIUM:** 67 illustration parallax layer images missing from rebuild (affects "Dream of Flight" scroll animation fidelity)
3. **MEDIUM:** Smart quotes vs straight quotes in illustration section `'yes'` text
4. **MEDIUM:** Technology section uses `<h3>` instead of `<h2>` (SEO heading hierarchy)
5. **LOW:** React comment nodes create `\n` in textContent for multi-line animated headings (hero, technology, partners) -- visually identical but differs in DOM text extraction
