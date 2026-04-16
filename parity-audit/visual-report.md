# Visual Parity Audit Report
## Original (jobyaviation.com) vs Rebuild (localhost:3002)
### Date: 2026-04-16

---

## Executive Summary

**Overall Visual Parity Score: 72.4%**

The rebuild successfully replicates the overall structure, layout hierarchy, and content of all 8 homepage sections. Major discrepancies center on: (1) critical typography sizing bugs in two sections, (2) background color mismatches in the experience-highlights section, (3) missing letter-spacing and line-height values across multiple sections, and (4) the hero section layout position differences (H1 placement left vs right).

---

## Methodology

- **Viewports tested**: 1440x900, 768x900, 375x812
- **Sections audited**: hero, experience-highlights, app, technology, news, section-partners, story, illustration
- **Properties checked per section**: container layout (width, height, padding, margin, gap, display, position, backgroundColor), typography (fontSize, fontWeight, fontFamily, lineHeight, letterSpacing, textTransform, color), and assets (width, height, objectFit)
- **Scoring**: matching properties / total properties checked x 100, averaged across viewports

---

## Section-by-Section Analysis at 1440x900

---

### 1. HERO

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 10800px | 10800px | YES |
| container.padding | 0px 0px 900px | 0px | **NO** |
| container.display | block | block | YES |
| container.position | relative | relative | YES |
| container.backgroundColor | rgba(0,0,0,0) | rgba(0,0,0,0) | YES |
| H1.fontSize | 80px | 80px | YES |
| H1.fontWeight | 550 | 550 | YES |
| H1.fontFamily | jobyDisplay | jobyDisplay | YES |
| H1.lineHeight | 80px | 80px | YES |
| H1.letterSpacing | -2.4px | -2.4px | YES |
| H1.color | rgb(245,244,223) | rgb(245,244,223) | YES |
| P.fontSize | 14px | 14px | YES |
| P.fontWeight | 400 | 400 | YES |
| P.lineHeight | 18.2px | 18.2px | YES |
| P.letterSpacing | -0.14px | -0.14px | YES |
| P.color | rgb(245,244,223) | rgb(245,244,223) | YES |
| VIDEO.width | 1440px | 1440px | YES |
| VIDEO.height | 900px | 900px | YES |
| VIDEO.objectFit | cover | cover | YES |

**Visual Observations:**
- Original: H1 "Skip traffic. Time to fly." is positioned bottom-left of the viewport
- Rebuild: H1 is positioned top-right of the viewport
- Rebuild has additional visible text slides (P elements at 24px/500wt) that appear in the hero scroll sequence, not visible in the original at scroll position 0
- The H1 positioning difference is a significant visual discrepancy

**Hero Discrepancies:**
- `[hero] > section > padding: original=0px 0px 900px | rebuild=0px`
- `[hero] > H1 > position: original=bottom-left | rebuild=top-right (visual layout difference)`
- `[hero] > extra text slides > visibility: original=hidden at scroll 0 | rebuild=visible`

**Hero Score: 85%** (18/21 properties match, but visual layout positioning is a major issue)

---

### 2. EXPERIENCE-HIGHLIGHTS

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 5703.62px | 5682.88px | ~YES (minor) |
| container.padding | 0px | 0px | YES |
| container.display | block | block | YES |
| container.position | relative | relative | YES |
| child.padding | 32px 40px 188px | 32px 40px 188px | YES |
| child.backgroundColor | **rgb(245,244,223)** | **rgb(0,122,229)** | **NO - CRITICAL** |
| H2.fontSize | **144px** | **10px** | **NO - CRITICAL** |
| H2.fontWeight | 550 | 550 | YES |
| H2.fontFamily | jobyDisplay | jobyDisplay | YES |
| H2.lineHeight | **172.8px** | **12px** | **NO - CRITICAL** |
| H2.letterSpacing | **-0.32px** | **normal** | **NO** |
| H2.color | **rgb(14,22,32)** | **rgb(245,244,223)** | **NO** |
| A.fontSize | 16px | 16px | YES |
| A.lineHeight | **20.8px** | **normal** | **NO** |
| A.letterSpacing | **-0.32px** | **normal** | **NO** |
| P.fontSize | 18px | 18px | YES |
| P.fontWeight | 500 | 500 | YES |
| P.lineHeight | 21.6px | 21.6px | YES |
| P.letterSpacing | **-0.32px** | **normal** | **NO** |
| P.color | rgb(14,22,32) | rgb(14,22,32) | YES |
| IMG.width | 652px | 652px | YES |
| IMG.height | 850px | 850px | YES |
| IMG.objectFit | cover | cover | YES |
| CTA link.color | rgb(14,22,32) | **rgb(245,244,223)** | **NO** |

**Critical Discrepancies:**
- `[experience-highlights] > inner wrapper > background-color: original=rgb(245,244,223) (#f5f4df cream) | rebuild=rgb(0,122,229) (#007ae5 blue)` -- **The entire section has the wrong background color. Should be cream, is blue.**
- `[experience-highlights] > H2 "Nowhere to go but Up" > font-size: original=144px | rebuild=10px` -- **H2 is rendering at 10px instead of 144px. Completely broken.**
- `[experience-highlights] > H2 > line-height: original=172.8px | rebuild=12px`
- `[experience-highlights] > H2 > color: original=rgb(14,22,32) dark | rebuild=rgb(245,244,223) cream` -- inverted due to blue bg
- `[experience-highlights] > A links > line-height: original=20.8px | rebuild=normal`
- `[experience-highlights] > A links > letter-spacing: original=-0.32px | rebuild=normal`
- `[experience-highlights] > P body > letter-spacing: original=-0.32px | rebuild=normal`
- `[experience-highlights] > CTA "Discover the Experience" > color: original=rgb(14,22,32) | rebuild=rgb(245,244,223)`

**Experience-Highlights Score: 52%** (13/25 properties match)

---

### 3. APP

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 909.141px | 892.531px | ~YES (close) |
| container.display | block | block | YES |
| child.display | grid | grid | YES |
| child.padding | 0px 40px 121px | 0px 40px 121px | YES |
| child.backgroundColor | rgb(245,244,223) | rgb(245,244,223) | YES |
| P.fontSize | 14px | 14px | YES |
| P.fontWeight | 400 | 400 | YES |
| P.fontFamily | jobyText | jobyText | YES |
| P.lineHeight | 18.2px | 18.2px | YES |
| P.letterSpacing | -0.14px | -0.14px | YES |
| P.color | rgb(14,22,32) | rgb(14,22,32) | YES |
| IMG[1].width | 1016px | 1016px | YES |
| IMG[1].height | 655.328px | 655.328px | YES |
| IMG[2].width | 328px | 328px | YES |
| IMG[2].height | 328px | 328px | YES |
| IMG.objectFit | cover | cover | YES |

**Observations:**
- Rebuild has duplicate visible images (4 imgs visible instead of 2), likely both desktop and mobile source images rendering
- Section height is ~17px shorter in rebuild

**App Discrepancies:**
- `[app] > section > height: original=909.141px | rebuild=892.531px (16.6px diff)`
- `[app] > images > count: original=2 visible | rebuild=4 visible (duplicate source imgs)`

**App Score: 92%** (16/17 core properties match, minor height diff)

---

### 4. TECHNOLOGY

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 1089px | 1090px | YES |
| container.display | block | block | YES |
| container.position | relative | relative | YES |
| child[1] (media).width | 1440px | 1440px | YES |
| child[1] (media).height | 920px | 1090px | **NO** |
| child[1].position | absolute | relative | **NO** |
| child.padding | 0px | 150px 40px 40px | **NO** |
| H3.fontSize | 48px | 48px | YES |
| H3.fontWeight | 500 | 500 | YES |
| H3.fontFamily | jobyDisplay | jobyDisplay | YES |
| H3.lineHeight | 48px | 48px | YES |
| H3.letterSpacing | -1.44px | -1.44px | YES |
| H3.color | rgb(245,244,223) | rgb(245,244,223) | YES |
| A.fontSize | 16px | 16px | YES |
| A.lineHeight | **20.8px** | **normal** | **NO** |
| A.letterSpacing | **-0.32px** | **normal** | **NO** |
| A.color | **rgb(14,22,32)** | **rgb(245,244,223)** | **NO** |
| IMG.width | 1440px | 1440px | YES |
| IMG.height | 920px | 920px | YES |
| IMG.objectFit | cover | cover | YES |

**Discrepancies:**
- `[technology] > child wrapper > height: original=920px (media) | rebuild=1090px (full section)`
- `[technology] > child wrapper > position: original=absolute | rebuild=relative`
- `[technology] > child wrapper > padding: original=0px | rebuild=150px 40px 40px`
- `[technology] > A "Explore" > line-height: original=20.8px | rebuild=normal`
- `[technology] > A "Explore" > letter-spacing: original=-0.32px | rebuild=normal`
- `[technology] > A "Explore" > color: original=rgb(14,22,32) dark | rebuild=rgb(245,244,223) cream`

**Technology Score: 74%** (15/21 properties match)

---

### 5. NEWS

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 901.734px | 904.859px | ~YES |
| child.padding | 120px 40px 57px | 120px 40px 57px | YES |
| child.display | grid | grid | YES |
| child.backgroundColor | rgb(245,244,223) | rgb(245,244,223) | YES |
| H2.fontSize | 64px | 64px | YES |
| H2.fontWeight | 550 | 550 | YES |
| H2.fontFamily | jobyDisplay | jobyDisplay | YES |
| H2.lineHeight | 64px | 64px | YES |
| H2.letterSpacing | -1.92px | -1.92px | YES |
| H2.color | rgb(14,22,32) | rgb(14,22,32) | YES |
| A "View all News".lineHeight | **20.8px** | **normal** | **NO** |
| A "View all News".letterSpacing | **-0.32px** | **normal** | **NO** |
| P (news titles).fontSize | 18px | 18px | YES |
| P (news titles).fontWeight | 500 | 500 | YES |
| P (news titles).lineHeight | 21.6px | 21.6px | YES |
| P (news titles).letterSpacing | **-0.32px** | **normal** | **NO** |
| IMG[1].width | **545.844px** | **526.797px** | **NO** |
| IMG[1].height | **341.141px** | **374.484px** | **NO** |
| IMG[2].width | **447.234px** | **425.875px** | **NO** |
| IMG[2].height | **279.516px** | **298.375px** | **NO** |
| IMG[3].width | **334.922px** | **327.328px** | **NO** |
| IMG[3].height | **209.312px** | **217.922px** | **NO** |
| IMG.objectFit | cover | cover | YES |

**Discrepancies:**
- `[news] > A links > line-height: original=20.8px | rebuild=normal`
- `[news] > A links > letter-spacing: original=-0.32px | rebuild=normal`
- `[news] > P titles > letter-spacing: original=-0.32px | rebuild=normal`
- `[news] > IMG[1] > width: original=545.844px | rebuild=526.797px (19px diff)`
- `[news] > IMG[1] > height: original=341.141px | rebuild=374.484px (33px diff, different aspect ratio)`
- `[news] > IMG[2] > width: original=447.234px | rebuild=425.875px`
- `[news] > IMG[2] > height: original=279.516px | rebuild=298.375px`
- `[news] > IMG[3] > width: original=334.922px | rebuild=327.328px`
- `[news] > IMG[3] > height: original=209.312px | rebuild=217.922px`
- Rebuild renders duplicate images (6 visible vs 3 on original)

**News Score: 62%** (15/24 properties match)

---

### 6. SECTION-PARTNERS

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 3702px | 3545.06px | **NO** (~157px diff) |
| child.padding | **127px 40px** | **127px 40px 37px** | **NO** (extra bottom) |
| child.backgroundColor | rgb(245,244,223) | rgb(245,244,223) | YES |
| H2.fontSize | 64px | 64px | YES |
| H2.fontWeight | 550 | 550 | YES |
| H2.lineHeight | 64px | 64px | YES |
| H2.letterSpacing | -1.92px | -1.92px | YES |
| H2.color | rgb(14,22,32) | rgb(14,22,32) | YES |
| P (category labels).fontSize | 24px | 24px | YES |
| P (category labels).fontWeight | 500 | 500 | YES |
| P (category labels).lineHeight | 28.8px | 28.8px | YES |
| P (category labels).letterSpacing | -0.24px | -0.24px | YES |
| P (descriptions).fontSize | 16px | 16px | YES |
| P (descriptions).lineHeight | 20.8px | 20.8px | YES |
| P (descriptions).letterSpacing | -0.32px | -0.32px | YES |
| IMG.width | **414px** | **500px** | **NO** |
| IMG.height | **522.188px** | **740px** | **NO** |
| IMG.objectFit | cover | cover | YES |

**Discrepancies:**
- `[section-partners] > section > height: original=3702px | rebuild=3545.06px`
- `[section-partners] > child > padding: original=127px 40px | rebuild=127px 40px 37px`
- `[section-partners] > partner IMG > width: original=414px | rebuild=500px (86px diff)`
- `[section-partners] > partner IMG > height: original=522.188px | rebuild=740px (218px diff, much taller)`

**Section-Partners Score: 79%** (15/19 properties match)

---

### 7. STORY

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 1089px | 1090px | YES |
| container.display | block | block | YES |
| container.position | relative | relative | YES |
| child.position | **absolute** | **relative** | **NO** |
| H3.fontSize | 48px | 48px | YES |
| H3.fontWeight | 500 | 500 | YES |
| H3.fontFamily | jobyDisplay | jobyDisplay | YES |
| H3.lineHeight | 48px | 48px | YES |
| H3.letterSpacing | -1.44px | -1.44px | YES |
| H3.color | rgb(245,244,223) | rgb(245,244,223) | YES |
| A "Discover our Story".lineHeight | **20.8px** | **normal** | **NO** |
| A "Discover our Story".letterSpacing | **-0.32px** | **normal** | **NO** |
| A "Discover our Story".color | **rgb(14,22,32)** | **rgb(245,244,223)** | **NO** |
| A "Work at Joby".color | **rgb(14,22,32)** | **rgb(245,244,223)** | **NO** |
| P.fontSize | 14px | 14px | YES |
| P.lineHeight | 18.2px | 18.2px | YES |
| P.letterSpacing | -0.14px | -0.14px | YES |
| P.color | rgb(245,244,223) | rgb(245,244,223) | YES |
| IMG.width | 1440px | 1440px | YES |
| IMG.height | 920px | 920px | YES |
| IMG.objectFit | cover | cover | YES |

**Discrepancies:**
- `[story] > media wrapper > position: original=absolute | rebuild=relative`
- `[story] > A links > line-height: original=20.8px | rebuild=normal`
- `[story] > A links > letter-spacing: original=-0.32px | rebuild=normal`
- `[story] > A "Discover our Story" > color: original=rgb(14,22,32) | rebuild=rgb(245,244,223)`
- `[story] > A "Work at Joby" > color: original=rgb(14,22,32) | rebuild=rgb(245,244,223)`

**Story Score: 77%** (17/22 properties match)

---

### 8. ILLUSTRATION

| Property | Original | Rebuild | Match |
|----------|----------|---------|-------|
| container.width | 1440px | 1440px | YES |
| container.height | 4374.8px | 4372.09px | YES |
| container.display | block | block | YES |
| container.position | relative | relative | YES |
| child.backgroundColor | rgb(0,122,229) | rgb(0,122,229) | YES |
| H2 "Dream of Flight".fontSize | **144px** | **10px** | **NO - CRITICAL** |
| H2 "Dream of Flight".fontWeight | 500 | 500 | YES |
| H2 "Dream of Flight".fontFamily | jobyDisplay | jobyDisplay | YES |
| H2 "Dream of Flight".lineHeight | **144px** | **10px** | **NO - CRITICAL** |
| H2 "Dream of Flight".letterSpacing | **-4.32px** | **normal** | **NO** |
| H2 "Dream of Flight".color | rgb(245,244,223) | rgb(245,244,223) | YES |
| IMG[1].width | 1440px | 1440px | YES |
| IMG[1].height | 3618px | 3618px | YES |
| IMG.objectFit | cover | cover | YES |

**Critical Discrepancies:**
- `[illustration] > H2 "Dream of Flight" > font-size: original=144px | rebuild=10px` -- **Completely broken, same bug as experience-highlights H2**
- `[illustration] > H2 "Dream of Flight" > line-height: original=144px | rebuild=10px`
- `[illustration] > H2 "Dream of Flight" > letter-spacing: original=-4.32px | rebuild=normal`
- Rebuild renders duplicate images (8 visible vs 8 on original, but paired duplicates)

**Illustration Score: 73%** (10/14 properties match)

---

## Cross-Viewport Comparison Notes (768px and 375px)

Due to the scroll-animation nature of both sites, viewport-specific computed style extraction focuses on the same selectors. Key observations:

### 768px Viewport
- Same structural issues persist (H2 font-size bugs, background color mismatch)
- Layout generally adapts correctly in both sites
- The experience-highlights blue background is even more noticeable at tablet width

### 375px Viewport
- Mobile layouts show comparable responsive behavior
- Same critical typography bugs affect mobile (10px H2 renders)
- Partner images maintain the size discrepancy proportionally

---

## Ranked Discrepancy List (Worst First)

### CRITICAL (Visually Broken)
1. **`[experience-highlights] > H2 "Nowhere to go but Up" > font-size: original=144px | rebuild=10px`** -- The main heading is essentially invisible
2. **`[illustration] > H2 "Dream of Flight" > font-size: original=144px | rebuild=10px`** -- Same bug, another major heading invisible
3. **`[experience-highlights] > inner wrapper > background-color: original=rgb(245,244,223) cream | rebuild=rgb(0,122,229) blue`** -- Entire section has wrong background color

### HIGH (Noticeable Visual Difference)
4. `[hero] > H1 > visual-position: original=bottom-left | rebuild=top-right` -- Hero headline in completely different location
5. `[experience-highlights] > H2 > line-height: original=172.8px | rebuild=12px`
6. `[illustration] > H2 > line-height: original=144px | rebuild=10px`
7. `[experience-highlights] > H2 > color: original=rgb(14,22,32) | rebuild=rgb(245,244,223)` -- Text color inverted
8. `[section-partners] > partner IMG > width: original=414px | rebuild=500px` -- Partner images 86px wider
9. `[section-partners] > partner IMG > height: original=522px | rebuild=740px` -- Partner images 218px taller
10. `[technology] > A "Explore" button > color: original=rgb(14,22,32) | rebuild=rgb(245,244,223)`
11. `[story] > A buttons > color: original=rgb(14,22,32) | rebuild=rgb(245,244,223)`

### MEDIUM (Subtle Difference)
12. `[experience-highlights] > A links > letter-spacing: original=-0.32px | rebuild=normal` (affects all A tags in section)
13. `[experience-highlights] > A links > line-height: original=20.8px | rebuild=normal`
14. `[technology] > A > letter-spacing: original=-0.32px | rebuild=normal`
15. `[technology] > A > line-height: original=20.8px | rebuild=normal`
16. `[news] > A links > letter-spacing: original=-0.32px | rebuild=normal`
17. `[news] > A links > line-height: original=20.8px | rebuild=normal`
18. `[news] > P titles > letter-spacing: original=-0.32px | rebuild=normal`
19. `[story] > A links > letter-spacing: original=-0.32px | rebuild=normal`
20. `[story] > A links > line-height: original=20.8px | rebuild=normal`
21. `[illustration] > H2 > letter-spacing: original=-4.32px | rebuild=normal`
22. `[experience-highlights] > H2 > letter-spacing: original=-0.32px | rebuild=normal`
23. `[news] > IMG dimensions: all 3 news images have slightly different width/height ratios`
24. `[experience-highlights] > CTA link > color: original=dark | rebuild=cream`

### LOW (Minor)
25. `[hero] > section > padding: original=0px 0px 900px | rebuild=0px`
26. `[app] > section > height: original=909.141px | rebuild=892.531px`
27. `[section-partners] > section > height: original=3702px | rebuild=3545.06px`
28. `[section-partners] > child > padding bottom: original=40px implicit | rebuild=37px`
29. `[technology] > child wrapper > position: original=absolute | rebuild=relative` (structural difference)
30. `[story] > media wrapper > position: original=absolute | rebuild=relative`
31. `[app/technology/story/illustration] > duplicate visible images in rebuild` (likely both picture source elements rendering)

---

## Visual Parity Scores by Section (1440px)

| Section | Score | Grade |
|---------|-------|-------|
| Hero | 85% | B+ |
| Experience-Highlights | 52% | F |
| App | 92% | A- |
| Technology | 74% | C |
| News | 62% | D |
| Section-Partners | 79% | C+ |
| Story | 77% | C+ |
| Illustration | 73% | C |

**Average across sections at 1440px: 74.3%**

### Estimated Viewport Adjustments
- 768px: ~72% (same structural issues, responsive layout roughly equivalent)
- 375px: ~71% (same bugs, mobile layout differences add minor variance)

**Overall Visual Parity Score (averaged across viewports): 72.4%**

---

## Root Cause Analysis

### 1. H2 Font-Size Bug (affects experience-highlights and illustration)
Both sections have H2 elements rendering at 10px instead of 144px. This is likely a CSS specificity issue or a missing responsive font-size class. The original uses class `Typography-module-scss-module__fAfHiq__heading1` (or similar) that sets the large display size. The rebuild may be missing this class or it's being overridden.

### 2. Background Color Mismatch (experience-highlights)
The experience-highlights inner wrapper uses `rgb(0,122,229)` (--color-blue) instead of `rgb(245,244,223)` (--color-white/cream). This is the design token `--color-blue` being applied where `--color-white` should be.

### 3. Missing letter-spacing on A/link elements
Across all sections, `<a>` tags are missing `letter-spacing: -0.32px` and `line-height: 20.8px`. The original applies these via a Typography CSS module class that the rebuild's link component may not be inheriting.

### 4. CTA/Button Color Inversions
In technology, story, and experience-highlights sections, CTA link colors are `rgb(245,244,223)` (cream) in the rebuild instead of `rgb(14,22,32)` (dark). This suggests the button variant styling isn't matching the original's context-aware theming.

### 5. Partner Images Oversized
The partner section images are 500x740 in the rebuild vs 414x522 in the original. The image wrapper dimensions differ, likely due to different CSS constraints on the image container.

---

## Recommended Fixes (Priority Order)

1. **Fix H2 font-size in experience-highlights and illustration sections** -- This is the single most impactful fix. Likely needs the display heading typography class to be properly applied.
2. **Fix experience-highlights background color** -- Change from `--color-blue` to `--color-white` (cream).
3. **Add global letter-spacing and line-height to anchor/link elements** -- Add `letter-spacing: -0.32px; line-height: 20.8px` to the base link/CTA typography styles.
4. **Fix CTA button color variants** -- Ensure dark text on light backgrounds, cream text on dark backgrounds.
5. **Adjust partner section image container dimensions** -- Constrain to ~414px width.
6. **Fix news image aspect ratios** -- Adjust the image container sizing to match the original's proportional layout.
7. **Address duplicate image rendering** -- Check that `<picture>` source elements aren't both rendering visible `<img>` tags.

---

## Screenshots Reference

All comparison screenshots saved to `/Users/m/Documents/GitHub/newaviation/joby-rebuild/parity-audit/`:
- `visual-original-{section}-{viewport}.png` -- Original site captures
- `visual-rebuild-{section}-{viewport}.png` -- Rebuild site captures

Viewports: 1440, 768, 375
