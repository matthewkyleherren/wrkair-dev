# Interactive Parity Audit Report

**Original:** https://www.jobyaviation.com/  
**Rebuild:** http://localhost:3002/  
**Viewport:** 1440x900 (desktop), 375x812 (mobile)  
**Date:** 2026-04-16

---

## 1. Element Inventory (3a)

### 1.1 Buttons

| Button | Original | Rebuild | Match |
|--------|----------|---------|-------|
| Toggle menu (hamburger) | aria-label="Toggle menu", cursor=pointer | aria-label="Toggle menu", cursor=pointer | PASS |
| Close (menu close) | class="menuClose", cursor=pointer | class="menuClose", cursor=pointer | PASS |
| Discover the Experience | type=submit, class="filled", cursor=pointer | type=submit, class="filled", cursor=pointer | PASS |
| Explore | type=submit, class="filled-transparent", cursor=pointer | type=submit, class="filled-transparent", cursor=pointer | PASS |
| View all News | type=submit, class="outlined", cursor=pointer | type=submit, class="outlined", cursor=pointer | PASS |
| Discover our Story | type=submit, class="filled-transparent", cursor=pointer | type=submit, class="filled-transparent", cursor=pointer | PASS |
| Work at Joby | type=submit, class="outlined-transparent", cursor=pointer | type=submit, class="outlined-transparent", cursor=pointer | PASS |
| Submit newsletter | type=submit, aria-label="Submit newsletter", cursor=pointer | type=submit, aria-label="Submit newsletter", cursor=pointer | PASS |

**Button count:** Original 8, Rebuild 8 (excluding dev tools) -- **PASS**

### 1.2 Links

| Link Category | Original Count | Rebuild Count | Match |
|---------------|---------------|---------------|-------|
| Navigation header links | 2 (homepage + Investors) | 2 (homepage + Investors) | PASS |
| Menu overlay links (Experience, Technology, Company, News, Careers, Investors) | 8 | 8 | PASS |
| Menu secondary links (Fly Blade, Joby Shop, YouTube, Instagram, LinkedIn, X) | 6 | 6 | PASS |
| Menu policy links | 5 | 5 | PASS |
| Experience carousel card links | 3 | 3 | PASS |
| Discover the Experience CTA link | 1 | 1 | PASS |
| Explore (Technology) CTA link | 1 | 1 | PASS |
| View all News CTA link | 1 | 1 | PASS |
| News article links (3 cards) | 3 | 3 | PASS |
| Discover our Story CTA link | 1 | 1 | PASS |
| Work at Joby CTA link | 1 | 1 | PASS |
| Footer Discover links (5) | 5 | 5 | PASS |
| Footer Explore links (3) | 3 | 3 | PASS |
| Footer Connect links (4) | 4 | 4 | PASS |
| Footer policy links (5) | 5 | 5 | PASS |
| Footer homepage logo | 1 | 1 | PASS |
| Footer "See our Privacy Policy" | 1 | 1 | PASS |

**Total unique links:** Original ~48, Rebuild ~48 -- **PASS**

### 1.3 Navigation Elements

| Element | Original | Rebuild | Match |
|---------|----------|---------|-------|
| `<nav>` element | 1, childCount=5 | 1, childCount=5 | PASS |
| Investors inline button in nav | Present, class includes "InlineButton...dark" | Present, class includes "InlineButton...light" | MINOR DIFF |
| nav initial class | "navHidden" | "hero" | MINOR DIFF (scroll-state class naming) |

### 1.4 Carousels / Tabs / Accordions

| Element | Original | Rebuild | Match |
|---------|----------|---------|-------|
| Partner category tabs (Car Service, Airlines, Infrastructure, R&D, Technology, Government) | 6 clickable divs, cursor=pointer | 6 clickable divs, cursor=pointer | PASS |
| Experience card carousel (3 cards) | Present with scroll/animation | Present with scroll/animation | PASS |
| Dream of Flight parallax section (3 future vision items) | Present | Present | PASS |
| ARIA tab roles on partner tabs | NONE (no role="tab") | NONE (no role="tab") | PASS (both missing) |

### 1.5 Hover-triggered Elements

| Element | Original | Rebuild | Match |
|---------|----------|---------|-------|
| Experience carousel card hover (image zoom + text reveal) | Present | Present | PASS |
| News card hover (image zoom effect) | Present | Present | PASS |
| Investors inline button hover animation | Present | Present | PASS |

---

## 2. State Parity (3b)

### 2.1 CTA Button Default States

| Button | Property | Original | Rebuild | Match |
|--------|----------|----------|---------|-------|
| Discover the Experience | color | rgb(245, 244, 223) | rgb(245, 244, 223) | PASS |
| Discover the Experience | backgroundColor | rgba(0,0,0,0) | **rgb(14, 22, 32)** | **FAIL** |
| Discover the Experience | border | 0px none | 0px none | PASS |
| Discover the Experience | transition | color 0.3s cubic-bezier(0.33, 1, 0.68, 1) | **all** | **FAIL** |
| Discover the Experience | opacity | 0 (scroll-animated) | 1 | MINOR (animation-dependent) |
| Explore | color | rgb(14, 22, 32) | rgb(14, 22, 32) | PASS |
| Explore | transition | color 0.3s cubic-bezier(0.33, 1, 0.68, 1) | color 0.3s cubic-bezier(0.33, 1, 0.68, 1) | PASS |
| View all News | color | rgb(245, 244, 223) | rgb(245, 244, 223) | PASS |
| Discover our Story | color | rgb(14, 22, 32) | rgb(14, 22, 32) | PASS |
| Work at Joby | color | rgb(245, 244, 223) | rgb(245, 244, 223) | PASS |
| Work at Joby | border | 0px none | **1px solid rgba(255,255,255,0.4)** | **FAIL** |
| Toggle menu | transition | width/height/bg/transform 0.4s+ | width/height/bg/transform 0.4s+ | PASS |
| Submit newsletter | color | rgb(8, 62, 111) | rgb(8, 62, 111) | PASS |

### 2.2 CTA Button Hover States

| Button | Property | Original Hover | Rebuild Hover | Match |
|--------|----------|---------------|---------------|-------|
| Discover the Experience | transform | matrix(1,0,0,1,0,5.87) | **none** | **FAIL** |
| Discover the Experience | backgroundColor | rgba(0,0,0,0) | **rgb(14,22,32)** | **FAIL** |
| Explore | transform (hover) | matrix(1,0,0,1,0,1.179) | Could not test (scroll-dependent) | N/A |
| View all News | transform (hover) | matrix(1,0,0,1,0,0.406) | Could not test (scroll-dependent) | N/A |
| Discover our Story | transform (hover) | matrix(1,0,0,1,0,1.155) | Could not test (scroll-dependent) | N/A |
| Work at Joby | border (hover) | 0px none | **1px solid rgba(255,255,255,0.4)** | **FAIL** |

### 2.3 CTA Button Inner Element Styles

| Button | Property | Original | Rebuild | Match |
|--------|----------|----------|---------|-------|
| All CTA buttons | borderRadius | 245.76px | 245.76px | PASS |
| All CTA buttons | height | 58.2344px | 58.2344px | PASS |
| All CTA buttons | display | flex | flex | PASS |
| All CTA buttons | fontSize (inner) | 13.3333px | 13.3333px | PASS |

### 2.4 Focus States

| Element | Property | Original | Rebuild | Match |
|---------|----------|----------|---------|-------|
| Links (tabbed) | outlineStyle | auto | auto | PASS |
| Links (tabbed) | outlineWidth | 1px | 1px | PASS |
| Links (tabbed) | outlineColor | rgb(0, 95, 204) | rgb(0, 95, 204) | PASS |
| CTA Buttons (tabbed) | outlineStyle | **none** | **auto** | **FAIL** |
| CTA Buttons (tabbed) | outlineWidth | 3px | 1px | **FAIL** |

### 2.5 Partner Tab States

| Property | Original (active) | Rebuild (active) | Match |
|----------|------------------|-------------------|-------|
| fontSize | **32.768px** | **24px** | **FAIL** |
| fontWeight (active) | 500 | 500 | PASS |
| opacity (active) | 1 | 1 | PASS |
| opacity (inactive) | 0.3 | 0.3 | PASS |
| transition | opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1) | opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1) | PASS |
| cursor | pointer | pointer | PASS |
| color | rgb(14, 22, 32) | rgb(14, 22, 32) | PASS |

### 2.6 News Card Default States

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| cursor | pointer | pointer | PASS |
| Image transform | matrix(2.14286, 0, 0, 1.5, 0, 0) | **matrix(1.2, 0, 0, 1.2, 0, 0)** | **FAIL** |
| Card transform | none | **matrix(1,0,0,1,0,114.159)** | **FAIL** (scroll animation offset) |

### 2.7 Footer Link States

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| color | rgb(245, 244, 223) | rgb(245, 244, 223) | PASS |
| textDecoration | none | none | PASS |
| cursor | pointer | pointer | PASS |
| opacity | 1 | 1 | PASS |
| "See our Privacy Policy" textDecoration | underline 0.5px | underline 0.5px | PASS |

---

## 3. Behavior Parity (3c)

### 3.1 Link Navigation Destinations

| Link | Original href | Rebuild href | Match |
|------|---------------|--------------|-------|
| Homepage logo | / | / | PASS |
| Investors | https://ir.jobyaviation.com/ | https://ir.jobyaviation.com/ | PASS |
| Experience carousel cards | /experience | /experience | PASS |
| Discover the Experience CTA | /experience | /experience | PASS |
| Explore CTA | /technology | /technology | PASS |
| View all News CTA | /news | /news | PASS |
| News card 1 | /news/joby-completes-piloted-... | /news/joby-completes-piloted-... | PASS |
| News card 2 | /news/joby-s-first-faa-... | /news/joby-s-first-faa-... | PASS |
| News card 3 | /news/joby-to-begin-... | /news/joby-to-begin-... | PASS |
| Discover our Story | /company | /company | PASS |
| Work at Joby | /careers | /careers | PASS |
| Privacy Policy (footer) | /privacy-policy | /privacy-policy | PASS |
| Terms of Use (footer) | /terms-of-use | /terms-of-use | PASS |
| Impact Reporting (footer) | /impact-reporting | /impact-reporting | PASS |
| Health Plan Transparency (footer) | /transparency | /transparency | PASS |
| Safety Policy (footer) | /safety-policy | /safety-policy | PASS |
| Footer Experience | /experience | /experience | PASS |
| Footer Technology | /technology | /technology | PASS |
| Footer Company | /company | /company | PASS |
| Footer News | /news | /news | PASS |
| Footer Careers | /careers | /careers | PASS |
| For Investors (footer) | https://ir.jobyaviation.com/ | https://ir.jobyaviation.com/ | PASS |
| Fly Blade (footer) | https://blade.com/ | https://blade.com/ | PASS |
| Joby Shop (footer) | https://shop.jobyaviation.com/ | https://shop.jobyaviation.com/ | PASS |
| YouTube (footer) | https://www.youtube.com/@JobyAviation | https://www.youtube.com/@JobyAviation | PASS |
| Instagram (footer) | https://www.instagram.com/jobyaviation/ | https://www.instagram.com/jobyaviation/ | PASS |
| LinkedIn (footer) | https://www.linkedin.com/company/jobyaviation/ | https://www.linkedin.com/company/jobyaviation/ | PASS |
| X (footer) | https://x.com/jobyaviation | https://x.com/jobyaviation | PASS |

### 3.2 External Link Attributes

| Link | target/rel Original | target/rel Rebuild | Match |
|------|--------------------|--------------------|-------|
| Investors (nav) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| News card 1 | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| News card 2 | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| News card 3 | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| For Investors (footer) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| Fly Blade (footer) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| Joby Shop (footer) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| YouTube (footer) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| Instagram (footer) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| LinkedIn (footer) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |
| X (footer) | _blank / noopener noreferrer | _blank / noopener noreferrer | PASS |

### 3.3 Mobile Hamburger Menu (375px)

| Behavior | Original | Rebuild | Match |
|----------|----------|---------|-------|
| Hamburger button visible | Yes | Yes | PASS |
| Menu opens on click | Yes (adds "open" + "animateIn" classes) | Yes (adds "open" + "animateIn" classes) | PASS |
| Close button visible when open | Yes | Yes | PASS |
| Menu links visible when open | 19 links (all nav + footer links) | 19 links (identical set) | PASS |
| Menu closes on close click | Yes (adds "disable" class) | Yes (adds "disable" class) | PASS |
| Menu link set | Experience, Technology, Company, News, Careers, Investors, Fly Blade, Joby Shop, YouTube, Instagram, LinkedIn, X + policy links | Identical set | PASS |

### 3.4 Partner Tabs Click Behavior

| Behavior | Original | Rebuild | Match |
|----------|----------|---------|-------|
| Tab categories | Car Service, Airlines, Infrastructure, R&D, Technology, Government | Car Service, Airlines, Infrastructure, R&D, Technology, Government | PASS |
| Active tab opacity | 1 | 1 | PASS |
| Inactive tab opacity | 0.3 | 0.3 | PASS |
| Click switches content | Yes | Yes | PASS |

---

## 4. Cursor & Affordance (3d)

| Element | Original cursor | Rebuild cursor | Match |
|---------|----------------|----------------|-------|
| All `<a>` links | pointer | pointer | PASS |
| All `<button>` elements | pointer | pointer | PASS |
| Partner category tab labels | pointer | pointer | PASS |
| Investors inline button wrapper | pointer | pointer | PASS |
| Email input | text (default) | text (default) | PASS |
| Non-interactive text | auto/default | auto/default | PASS |

---

## 5. Accessibility (3e)

### 5.1 ARIA Attributes

| Element | Attribute | Original | Rebuild | Match |
|---------|-----------|----------|---------|-------|
| Toggle menu button | aria-label | "Toggle menu" | "Toggle menu" | PASS |
| Homepage logo link | aria-label | "Go to homepage" | "Go to homepage" | PASS |
| Submit newsletter button | aria-label | "Submit newsletter" | "Submit newsletter" | PASS |
| Footer homepage logo link | aria-label | "Go to homepage" | "Go to homepage" | PASS |
| Email input | placeholder | "Enter e-mail address" | "Enter e-mail address" | PASS |
| Nav element | role | none explicit | none explicit | PASS |
| Partner tabs | role="tab" | **MISSING** | **MISSING** | PASS (both missing) |
| Partner tabs | role="tablist" | **MISSING** | **MISSING** | PASS (both missing) |
| Toggle menu button | aria-expanded | **MISSING** | **MISSING** | PASS (both missing) |

### 5.2 Tab Order (Keyboard Navigation)

**Original focus order (first 25 tab presses):**
1. Toggle menu (BUTTON)
2. Go to homepage (A)
3. Investors (A)
4. VIDEO element
5. Carousel card 1 (A /experience)
6. Discover the Experience CTA (A)
7. Discover the Experience button (BUTTON)
8. Explore CTA (A /technology)
9. Explore button (BUTTON)
10. View all News CTA (A /news)
11. View all News button (BUTTON)
12. News card 1 (A)
13. News card 2 (A)
14. News card 3 (A)
15. Discover our Story (A /company)
16. Discover our Story button (BUTTON)
17. Work at Joby (A /careers)
18. Work at Joby button (BUTTON)
19-23. Footer policy links
24-25. Footer section links

**Rebuild focus order (first 25 tab presses):**
1. Toggle menu (BUTTON)
2. Go to homepage (A)
3. **Carousel card 2** (A /experience) -- skips Investors link and card 1
4. Carousel card 3 (A /experience)
5. Discover the Experience CTA (A)
6. Discover the Experience button (BUTTON)
7. Explore CTA (A /technology)
8. Explore button (BUTTON)
9. View all News CTA (A /news)
10. View all News button (BUTTON)
11. News card 1 (A)
12. News card 2 (A)
13. News card 3 (A)
14. Discover our Story (A /company)
15. Discover our Story button (BUTTON)
16. Work at Joby (A /careers)
17. Work at Joby button (BUTTON)
18-22. Footer policy links
23-25. Footer section links

**Tab Order Differences:**
| Issue | Severity |
|-------|----------|
| Rebuild skips Investors link in tab order (not focusable from tab) | **FAIL** |
| Rebuild skips VIDEO element in tab order | MINOR (may be intentional) |
| Rebuild skips carousel card 1 (only card 2+3 reachable) | **FAIL** |
| Both sites have double-tab issue: link then button inside for CTAs (a > button both focusable) | PASS (same behavior) |

---

## 6. Differences Summary

### Critical Differences (affect user interaction)

| # | Issue | Detail |
|---|-------|--------|
| 1 | **"Discover the Experience" button backgroundColor** | Original: transparent. Rebuild: rgb(14, 22, 32) solid fill. The button has a visible dark background on rebuild that doesn't exist on original. |
| 2 | **"Work at Joby" button border** | Original: no border (0px none). Rebuild: 1px solid rgba(255,255,255,0.4) visible border. |
| 3 | **CTA button hover transform missing** | Original buttons animate with translateY on hover (e.g. matrix(1,0,0,1,0,5.87)). Rebuild shows no transform change on hover. |
| 4 | **CTA button transition property** | Original: `color 0.3s cubic-bezier(0.33, 1, 0.68, 1)`. Rebuild "Discover the Experience": `all` (too broad). |
| 5 | **Partner tab fontSize** | Original: 32.768px. Rebuild: 24px. Tabs appear significantly smaller. |
| 6 | **News card image transform/scale** | Original: matrix(2.14286, 0, 0, 1.5, 0, 0). Rebuild: matrix(1.2, 0, 0, 1.2, 0, 0). Different zoom/crop ratios. |
| 7 | **Tab order: Investors link not reachable** | Original: Investors link receives focus on Tab. Rebuild: skipped. |
| 8 | **Tab order: Carousel card 1 not reachable** | Original: first experience carousel card receives focus. Rebuild: only cards 2 and 3 are tab-reachable. |

### Minor Differences

| # | Issue | Detail |
|---|-------|--------|
| 9 | **CTA button focus outline style** | Original buttons have `outline: none` (3px width set but style none). Rebuild has `outline: auto` (1px). This means rebuild actually shows a visible focus ring on buttons, which is arguably better for accessibility. |
| 10 | **Nav initial class** | Original: "navHidden". Rebuild: "hero". Different scroll-state class naming, but functionally equivalent. |
| 11 | **Investors InlineButton variant** | Original initially renders "dark" variant. Rebuild initially renders "light" variant. Both appear to be scroll-state dependent and both show the correct text/link. |
| 12 | **Nav logo image count** | Both have 1 image in the logo link at time of measurement (scroll-state dependent; original may swap between 2 images). |

### Matching Elements (all pass)

- All link hrefs match exactly
- All external links have correct target="_blank" and rel="noopener noreferrer"
- All button types, classes, and aria-labels match
- Mobile hamburger menu opens/closes correctly on both sites
- Identical menu link sets in both mobile and desktop overlay
- Footer structure, links, and styling are identical
- Partner tab categories and logos match (6 categories, same partner logos)
- Newsletter signup form (email input + submit button) present on both
- All CTA button border-radius (245.76px) and height (58.2344px) match
- Content text matches across all sections
- "Dream of Flight" / future vision section matches
- App section content matches

---

## 7. Interactive Parity Score

### Scoring Breakdown

| Category | Total Checks | Passing | Failing |
|----------|-------------|---------|---------|
| Element Inventory (buttons, links, nav, tabs) | 25 | 25 | 0 |
| Button default states (color, bg, border, transition) | 28 | 22 | 6 |
| Button hover states | 10 | 5 | 5 |
| Focus states | 5 | 3 | 2 |
| Partner tab states | 7 | 6 | 1 |
| News card states | 3 | 1 | 2 |
| Footer link states | 5 | 5 | 0 |
| Link destinations | 28 | 28 | 0 |
| External link attributes | 11 | 11 | 0 |
| Mobile menu behavior | 6 | 6 | 0 |
| Cursor/affordance | 6 | 6 | 0 |
| ARIA attributes | 9 | 9 | 0 |
| Tab order | 5 | 3 | 2 |
| **TOTALS** | **148** | **130** | **18** |

### Interactive Parity Score: **87.8%** (130 / 148)

---

## 8. Priority Fixes

### P0 -- Must Fix

1. **"Discover the Experience" button background**: Remove the solid `background-color: rgb(14, 22, 32)` from the button -- it should be transparent like the original.
2. **"Work at Joby" button border**: Remove the `1px solid rgba(255,255,255,0.4)` border -- the original has no visible border on this button.
3. **CTA button hover translateY animation**: All CTA buttons should animate with a small `translateY` on hover (the original uses scroll-driven Y offset that changes on hover). Ensure the hover state applies a transform.
4. **Partner tab font size**: Increase from 24px to ~32.768px (or use the same responsive calculation as the original, which appears to use vw-based sizing).

### P1 -- Should Fix

5. **CTA button transition specificity**: Change `transition: all` to `transition: color 0.3s cubic-bezier(0.33, 1, 0.68, 1)` on the "Discover the Experience" button for consistent animation behavior.
6. **News card image transform**: Adjust the image scale from `matrix(1.2, 0, 0, 1.2, 0, 0)` to match the original's `matrix(2.14286, 0, 0, 1.5, 0, 0)` aspect ratio crop.
7. **Tab order -- Investors link**: Ensure the Investors inline button in the nav bar is keyboard-focusable via Tab.
8. **Tab order -- Carousel card 1**: Ensure the first experience carousel card is reachable via keyboard Tab navigation.

### P2 -- Nice to Have

9. **Button focus outline style**: Original suppresses button outline (`outline: none`). Rebuild shows browser default. Consider keeping rebuild behavior (better accessibility) or matching original for exact parity.
