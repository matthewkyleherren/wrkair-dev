"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------------------------------------------
   Constants — Sanity CDN base
   --------------------------------------------------------------------------- */
const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";
const R2_CDN = "https://pub-c3f399360b0b4437b233f8cc0505582a.r2.dev/videos";

function sanityImg(ref: string) {
  return `${SANITY_CDN}/${ref}`;
}

/* Remap a value from one range to another, with clamping */
function remap(val: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const clamped = Math.min(inMax, Math.max(inMin, val));
  return ((clamped - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/* Partner categories data */
const PARTNER_CATEGORIES = [
  {
    name: "Car Service",
    image: "08c1cc4c2b2f84e81af5a811a077423dbf1a82d5-1500x1892.jpg",
    description: "We\u2019re partnering with global leaders in ground transportation to seamlessly integrate air mobility into the future of door-to-door travel.",
    logos: [{ name: "Uber", src: "ae1c4e28f2e64113163a11688e9491eaced07734-76x45.svg" }],
  },
  {
    name: "Airlines",
    image: "63e7e05a6a30a30f436156a8cb269a9bf9462a41-1500x1892.jpg",
    description: "Our partnerships with leading global airlines will integrate our air taxi service into existing aviation networks.",
    logos: [
      { name: "Delta", src: "3668a86d6101741073f98b390a355183e6a7521a-480x180.png" },
      { name: "Virgin Atlantic", src: "045aa354beeb7b18c26ecc75a71d274340c6da04-993x231.png" },
      { name: "ANA", src: "5ba090dd2266b6ea85978ba2a62d482482a94740-92x45.svg" },
    ],
  },
  {
    name: "Infrastructure",
    image: "0478fe6e587c2e8fb1ac677e0cf1ea3332083e6f-1500x1892.jpg",
    description: "Together with key infrastructure partners, we\u2019re building the physical backbone needed for convenient everyday flight.",
    logos: [
      { name: "Skyports", src: "703ef7455889d41a12b2750e5c0891426fa7b142-112x45.svg" },
      { name: "Vertiports by Atlantic", src: "52a92a0193c660628053cbfcb60c24a21bf14608-102x45.svg" },
      { name: "Signature Flight Support", src: "b01675566cfe8d9377f546874496f8b7afdd98b6-122x45.svg" },
      { name: "Jetex", src: "f7e02666c110899b16a7df086f9b7daa1bb6e446-90x45.svg" },
      { name: "Clay Lacy", src: "c0a0a44e718ac7c11a58fc941ee54231367bf8b0-122x45.svg" },
      { name: "Helo Holdings, Inc.", src: "d3a3de92285f5ba0e49e504675e3475f63948e13-74x45.svg" },
    ],
  },
  {
    name: "R&D",
    image: "af456faf9640de0bdd711f84e45d958cc636ab8a-1500x1892.jpg",
    description: "We collaborate with pioneers in manufacturing and innovation to create a vertically integrated, world-class production ecosystem.",
    logos: [
      { name: "Toyota", src: "e2e469f991528ca2c648fd9455142a6388ea2e16-122x45.svg" },
      { name: "NASA", src: "fb4aa83f7c38f23fbc0fbbf56e0559534b9a9e7e-510x198.png" },
    ],
  },
  {
    name: "Technology",
    image: "e139fbac7c088eda6c77b752cea28f4ca66fa420-1500x1892.png",
    description: "Our aviation technology partnerships power the systems that support navigation, autonomy, pilot training, and operational excellence.",
    logos: [
      { name: "Garmin", src: "65c47bff04766eeb14a3e794cbfcf3939c3d0f23-112x45.svg" },
      { name: "CAE", src: "41e28c69c10d417477200ee5be7f29fa01429fc3-66x45.svg" },
    ],
  },
  {
    name: "Government",
    image: "bb92b433868cdbe3608420f4e69de82d3a952d7d-1120x1412.jpg",
    description: "We collaborate with forward-thinking government agencies to shape policy, accelerate innovation, and enable the introduction of advanced air mobility.",
    logos: [],
  },
];

/* Illustration layer parallax speed multipliers (from original) */
const LAYER_SPEEDS = [0, 0, 0.4, 0.3, 0.4, 0.55, 0, 0.2, 0.6, 0.4, 0];

/* ---------------------------------------------------------------------------
   Homepage Component
   --------------------------------------------------------------------------- */
export default function HomePage() {
  /* --- Refs: Hero --- */
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroVideoMobileRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroTextSlidesRef = useRef<HTMLDivElement>(null);

  /* --- Refs: Experience Highlights --- */
  const expStickyWrapperRef = useRef<HTMLDivElement>(null);
  const expSlidesRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slideImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slideContentRefs = useRef<(HTMLElement | null)[]>([]);
  const expEndSectionRef = useRef<HTMLDivElement>(null);
  const expEndTitleRef = useRef<HTMLDivElement>(null);
  const expEndButtonRef = useRef<HTMLAnchorElement>(null);

  /* --- Refs: App --- */
  const appSectionRef = useRef<HTMLDivElement>(null);
  const appMediaInnerRef = useRef<HTMLDivElement>(null);
  const appEndTitleRef = useRef<HTMLDivElement>(null);

  /* --- Refs: Technology Entry --- */
  const techSectionRef = useRef<HTMLElement>(null);
  const techMediaRef = useRef<HTMLDivElement>(null);
  const techContentRef = useRef<HTMLDivElement>(null);
  const techFeaturesRef = useRef<HTMLDivElement>(null);

  /* --- Refs: News --- */
  const newsSectionRef = useRef<HTMLDivElement>(null);
  const newsContainerRef = useRef<HTMLDivElement>(null);
  const newsItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  /* --- Refs: Partners --- */
  const partnersStickyWrapperRef = useRef<HTMLDivElement>(null);
  const partnersWrapperRef = useRef<HTMLDivElement>(null);
  const partnersCategoriesRef = useRef<HTMLDivElement>(null);
  const partnersImagesWrapperRef = useRef<HTMLDivElement>(null);
  const partnersContentRef = useRef<HTMLDivElement>(null);
  const partnerImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partnerContentItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* --- Refs: Story Entry --- */
  const storySectionRef = useRef<HTMLElement>(null);
  const storyMediaRef = useRef<HTMLDivElement>(null);
  const storyContentRef = useRef<HTMLDivElement>(null);

  /* --- Refs: Illustration --- */
  const illustrationContentWrapperRef = useRef<HTMLDivElement>(null);
  const illustrationLayerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const illustrationContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* --- State: Partners active index --- */
  const [activePartner, setActivePartner] = useState(0);

  /* --- State: Hero text slide index --- */
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const kills: (ScrollTrigger | gsap.core.Timeline | gsap.core.Tween)[] = [];

    /* ===================================================================
       HERO — Video scrub + intro animation
       =================================================================== */
    const heroSection = heroSectionRef.current;
    if (heroSection) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const video = isMobile ? heroVideoMobileRef.current : heroVideoRef.current;

      // Page-load intro animation
      const introTl = gsap.timeline({ delay: 0.5 });
      if (heroTitleRef.current) introTl.to(heroTitleRef.current, { "--animate-in": 1, ease: "power2.out", duration: 0.8 }, 0);
      if (heroSubtitleRef.current) introTl.to(heroSubtitleRef.current, { "--animate-in": 1, ease: "power2.out", duration: 0.8 }, 0.2);
      if (heroTextSlidesRef.current) introTl.to(heroTextSlidesRef.current, { opacity: 1, y: "0rem", ease: "power2.out", duration: 0.6 }, 0.4);
      kills.push(introTl);

      const r = 1 / 14;
      const innerTl = gsap.timeline();
      innerTl.set({}, {}, 1);

      if (heroMediaRef.current) innerTl.to(heroMediaRef.current, { "--translate-y-progress": 1, "--border-radius-in": 1, ease: "power1.inOut", duration: r }, 0);
      if (heroTitleRef.current) innerTl.to(heroTitleRef.current, { "--animate-in": 1, ease: "power1.inOut", duration: r }, 0);
      if (heroSubtitleRef.current) innerTl.to(heroSubtitleRef.current, { "--animate-in": 1, ease: "power1.inOut", duration: r }, 0);
      if (heroTextSlidesRef.current) innerTl.fromTo(heroTextSlidesRef.current, { opacity: 0, y: "-2rem" }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.2 * r }, 0.75 * r);

      const innerSt = ScrollTrigger.create({
        trigger: heroSection, start: "top top", end: "bottom bottom", scrub: true,
        animation: innerTl,
        onUpdate: (self) => {
          if (!video || !video.duration) return;
          video.currentTime = remap(self.progress, 0.05, 1, 0, 1) * video.duration;

          // Hero text slides - cycle through based on scroll progress
          // First slide: 0-50%, Second slide: 50-100%
          const slideIndex = self.progress < 0.5 ? 0 : 1;
          setActiveHeroSlide(slideIndex);
        },
      });
      kills.push(innerSt, innerTl);

      const fullTl = gsap.timeline();
      if (heroMediaRef.current) fullTl.to(heroMediaRef.current, { "--border-radius-out": 1, ease: "power2.out", duration: 0.75 * r }, 1 - r);
      if (heroTextSlidesRef.current) fullTl.to(heroTextSlidesRef.current, { y: "-2rem", opacity: 0, ease: "power2.out", duration: 0.2 * r }, 1 - 1.25 * r);

      const fullSt = ScrollTrigger.create({ trigger: heroSection, start: "top top", end: "bottom top", scrub: true, animation: fullTl });
      kills.push(fullSt, fullTl);
    }

    /* ===================================================================
       EXPERIENCE HIGHLIGHTS — Scroll-driven slide carousel
       =================================================================== */
    const expWrapper = expStickyWrapperRef.current;
    if (expWrapper) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (!isMobile) {
        const numSlides = 3;
        // Adjusted timing: each slide gets more room for smooth transitions
        const slideAllocation = 0.85 / numSlides;

        // Set initial state: first slide fully in
        if (slideRefs.current[0]) {
          slideRefs.current[0].style.setProperty("--slide-progress-in", "1");
        }

        const expSt = ScrollTrigger.create({
          trigger: expWrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Smoother scrub
          onUpdate: (self) => {
            const progress = self.progress;

            slideRefs.current.forEach((slide, d) => {
              if (!slide) return;

              const slideStart = d * slideAllocation;
              const slideEnd = slideStart + slideAllocation;
              
              // First slide starts fully "in", others animate in
              let slideProgressIn: number;
              if (d === 0) {
                slideProgressIn = 1;
              } else {
                // Slides animate in over the first 40% of their allocation
                slideProgressIn = remap(progress, slideStart, slideStart + slideAllocation * 0.4, 0, 1);
              }
              
              // Slide animates out starting at 70% of its allocation, completing when next slide is 40% in
              const slideProgressOut = d < numSlides - 1 
                ? remap(progress, slideStart + slideAllocation * 0.7, slideEnd + slideAllocation * 0.4, 0, 1) 
                : 0;
              
              // Slide fully exits (for z-index purposes) - extends beyond current slide's allocation
              const slideProgressEnd = d < numSlides - 2 
                ? remap(progress, slideEnd + slideAllocation * 0.4, slideEnd + slideAllocation * 1.4, 0, 1) 
                : 0;

              // For last slide, add a "last child out" progress for exit animation
              const lastChildOut = d === numSlides - 1 ? remap(progress, 0.9, 1, 0, 1) : 0;

              slide.style.setProperty("--slide-progress-in", String(Math.max(0, Math.min(1, slideProgressIn))));
              slide.style.setProperty("--slide-progress-out", String(Math.max(0, Math.min(1, slideProgressOut))));
              slide.style.setProperty("--slide-progress-end", String(Math.max(0, Math.min(1, slideProgressEnd))));
              slide.style.setProperty("--slide-progress-last-child-out", String(Math.max(0, Math.min(1, lastChildOut))));

              // Visibility: hide slides that have fully exited
              if (slideProgressEnd >= 1) {
                slide.style.visibility = "hidden";
              } else {
                slide.style.visibility = "visible";
              }
            });
          },
        });
        kills.push(expSt);
      }

      // End section reveal
      if (expEndSectionRef.current) {
        const endTl = gsap.timeline({ paused: true });
        if (expEndTitleRef.current) endTl.fromTo(expEndTitleRef.current, { y: "3rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.8 }, 0);
        if (expEndButtonRef.current) endTl.fromTo(expEndButtonRef.current, { y: "1.4rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.6 }, 0.15);

        let endFired = false;
        const endSt = ScrollTrigger.create({
          trigger: expEndSectionRef.current,
          start: "top 80%",
          end: "bottom top",
          onEnter: () => { if (!endFired) { endFired = true; endTl.play(); } },
        });
        kills.push(endSt, endTl);
      }
    }

    /* ===================================================================
       APP SECTION — Scale zoom-out parallax
       =================================================================== */
    if (appSectionRef.current) {
      const appTl = gsap.timeline();
      if (appMediaInnerRef.current) {
        appTl.fromTo(appMediaInnerRef.current, { scale: 1.15 }, { scale: 1, ease: "power1.out", duration: 1 });
      }

      const appSt = ScrollTrigger.create({
        trigger: appSectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        animation: appTl,
      });
      kills.push(appSt, appTl);

      // End title reveal
      if (appEndTitleRef.current) {
        let appEndFired = false;
        const appEndSt = ScrollTrigger.create({
          trigger: appEndTitleRef.current,
          start: "top 80%",
          onEnter: () => {
            if (!appEndFired) {
              appEndFired = true;
              gsap.fromTo(appEndTitleRef.current, { y: "3rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.8 });
            }
          },
        });
        kills.push(appEndSt);
      }
    }

    /* ===================================================================
       TECHNOLOGY ENTRY — Border radius reveal + translate-y parallax
       =================================================================== */
    if (techSectionRef.current) {
      const techEntryTl = gsap.timeline();
      techEntryTl.set({}, {}, 1);

      // Border radius: round corners flatten as section scrolls in
      techEntryTl.fromTo(techSectionRef.current, { "--border-radius-progress": 0 }, { "--border-radius-progress": 1, ease: "power2.out", duration: 0.6 }, 0);

      // Media translate in from below
      if (techMediaRef.current) {
        techEntryTl.fromTo(techMediaRef.current, { "--translate-y-in-progress": 0 }, { "--translate-y-in-progress": 1, ease: "power1.out", duration: 1 }, 0);
      }

      // Content fade in - starts earlier and has transform
      if (techContentRef.current) {
        techEntryTl.fromTo(techContentRef.current, 
          { opacity: 0, y: "2rem" }, 
          { opacity: 1, y: "0rem", ease: "power2.out", duration: 0.5 }, 
          0.35
        );
      }

      const techEntrySt = ScrollTrigger.create({
        trigger: techSectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 0.5, // Smoother scrub
        animation: techEntryTl,
      });
      kills.push(techEntrySt, techEntryTl);

      // Full progress: media translates out with slight scale
      const techFullTl = gsap.timeline();
      if (techMediaRef.current) {
        techFullTl.fromTo(techMediaRef.current, { "--translate-y-out-progress": 0 }, { "--translate-y-out-progress": 1, ease: "none", duration: 1 }, 0);
      }
      techFullTl.fromTo(techSectionRef.current, { "--border-radius-out": 0 }, { "--border-radius-out": 1, ease: "power1.in", duration: 1 }, 0);

      const techFullSt = ScrollTrigger.create({
        trigger: techSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.3,
        animation: techFullTl,
      });
      kills.push(techFullSt, techFullTl);
    }

    /* ===================================================================
       NEWS — Staggered card entrance
       =================================================================== */
    if (newsContainerRef.current) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (!isMobile) {
        let newsFired = false;
        const newsSt = ScrollTrigger.create({
          trigger: newsContainerRef.current,
          start: "top 70%",
          onEnter: () => {
            if (newsFired) return;
            newsFired = true;

            // Title + button reveal
            if (newsSectionRef.current) {
              const title = newsSectionRef.current.querySelector("h2");
              if (title) gsap.fromTo(title, { y: "2rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.7 });
            }

            // Staggered card animations - tighter stagger for more cohesive feel
            newsItemRefs.current.forEach((item, i) => {
              if (!item) return;
              const stagger = 0.12 * i; // Slightly tighter stagger
              gsap.fromTo(item,
                { y: "2.5rem", opacity: 0 },
                { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.7, delay: stagger }
              );
            });
          },
        });
        kills.push(newsSt);
      } else {
        // Mobile: individual card animations
        newsItemRefs.current.forEach((item) => {
          if (!item) return;
          const st = ScrollTrigger.create({
            trigger: item,
            start: "top 85%",
            onEnter: () => {
              gsap.fromTo(item, { y: "2rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.6 });
            },
            once: true,
          });
          kills.push(st);
        });
      }
    }

    /* ===================================================================
       PARTNERS — Scroll-driven category switching
       =================================================================== */
    if (partnersStickyWrapperRef.current) {
      const numCats = PARTNER_CATEGORIES.length;

      const partnersSt = ScrollTrigger.create({
        trigger: partnersStickyWrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3, // Smoother scrub for better category switching feel
        onUpdate: (self) => {
          // Use floor with slight bias to make transitions feel more deliberate
          // Each category gets equal scroll distance
          const rawIndex = self.progress * (numCats - 1);
          const idx = Math.round(rawIndex);
          setActivePartner(idx);

          // Set CSS variables for potential CSS-driven animations
          if (partnersWrapperRef.current) {
            partnersWrapperRef.current.style.setProperty("--active-slide", String(idx));
            partnersWrapperRef.current.style.setProperty("--scroll-progress", String(self.progress));
          }
        },
      });
      kills.push(partnersSt);

      // Images scale entrance - starts at 0.3 scale and grows to 1
      if (partnersImagesWrapperRef.current) {
        const imgTl = gsap.timeline();
        imgTl.fromTo(partnersImagesWrapperRef.current, { "--progress": 0 }, { "--progress": 1, ease: "power2.out", duration: 1 });

        const imgSt = ScrollTrigger.create({
          trigger: partnersImagesWrapperRef.current,
          start: "top bottom",
          end: "top 20%", // Slightly longer entrance for smoother scale-up
          scrub: 0.5,
          animation: imgTl,
        });
        kills.push(imgSt, imgTl);
      }
    }

    /* ===================================================================
       STORY ENTRY — Same pattern as Technology Entry
       =================================================================== */
    if (storySectionRef.current) {
      const storyEntryTl = gsap.timeline();
      storyEntryTl.set({}, {}, 1);

      storyEntryTl.fromTo(storySectionRef.current, { "--border-radius-progress": 0 }, { "--border-radius-progress": 1, ease: "power2.out", duration: 0.6 }, 0);

      if (storyMediaRef.current) {
        storyEntryTl.fromTo(storyMediaRef.current, { "--translate-y-in-progress": 0 }, { "--translate-y-in-progress": 1, ease: "power1.out", duration: 1 }, 0);
      }

      if (storyContentRef.current) {
        storyEntryTl.fromTo(storyContentRef.current, 
          { opacity: 0, y: "2rem" }, 
          { opacity: 1, y: "0rem", ease: "power2.out", duration: 0.5 }, 
          0.35
        );
      }

      const storyEntrySt = ScrollTrigger.create({
        trigger: storySectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        animation: storyEntryTl,
      });
      kills.push(storyEntrySt, storyEntryTl);

      const storyFullTl = gsap.timeline();
      if (storyMediaRef.current) {
        storyFullTl.fromTo(storyMediaRef.current, { "--translate-y-out-progress": 0 }, { "--translate-y-out-progress": 1, ease: "none", duration: 1 }, 0);
      }
      storyFullTl.fromTo(storySectionRef.current, { "--border-radius-out": 0 }, { "--border-radius-out": 1, ease: "power1.in", duration: 1 }, 0);

      const storyFullSt = ScrollTrigger.create({
        trigger: storySectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.3,
        animation: storyFullTl,
      });
      kills.push(storyFullSt, storyFullTl);
    }

    /* ===================================================================
       ILLUSTRATION — Parallax layers + text reveals + border radius
       =================================================================== */
    if (illustrationContentWrapperRef.current) {
      // Border radius reveal - starts rounding and flattens as section enters
      const illBrTl = gsap.timeline();
      illBrTl.fromTo(illustrationContentWrapperRef.current, { "--border-radius-progress": 0 }, { "--border-radius-progress": 1, ease: "power2.out", duration: 1 });

      const illBrSt = ScrollTrigger.create({
        trigger: illustrationContentWrapperRef.current,
        start: "top bottom",
        end: "top 20%", // Border radius completes before section is fully in view
        scrub: 0.5,
        animation: illBrTl,
      });
      kills.push(illBrSt, illBrTl);

      // Per-layer parallax - each layer moves at different speeds for depth effect
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      // Increased base amount for more noticeable parallax
      const baseAmount = (isMobile ? 0.12 : 0.18) * window.innerHeight;

      illustrationLayerRefs.current.forEach((layer, i) => {
        if (!layer || LAYER_SPEEDS[i] === 0) return;
        const range = baseAmount * LAYER_SPEEDS[i];

        const tween = gsap.fromTo(layer, { y: -range }, { y: range, ease: "none" });
        const st = ScrollTrigger.create({
          trigger: illustrationContentWrapperRef.current, // Use wrapper as trigger for consistent parallax
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3, // Smooth scrub for parallax
          animation: tween,
          invalidateOnRefresh: true,
        });
        kills.push(st, tween);
      });

      // Content text block reveals - staggered entrance animations
      illustrationContentRefs.current.forEach((block, i) => {
        if (!block) return;
        let fired = false;
        const st = ScrollTrigger.create({
          trigger: block,
          start: "top 80%", // Trigger slightly earlier
          onEnter: () => {
            if (fired) return;
            fired = true;
            gsap.fromTo(block, 
              { y: "2.5rem", opacity: 0 }, 
              { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.8, delay: i * 0.08 }
            );
          },
        });
        kills.push(st);
      });
    }

    /* ===================================================================
       Cleanup
       =================================================================== */
    return () => {
      kills.forEach((k) => {
        if ("kill" in k) k.kill();
      });
    };
  }, []);

  /* --- Partner click handler --- */
  const handlePartnerClick = useCallback((index: number) => {
    if (!partnersStickyWrapperRef.current) return;
    const numCats = PARTNER_CATEGORIES.length;
    const wrapperRect = partnersStickyWrapperRef.current.getBoundingClientRect();
    const wrapperTop = window.scrollY + wrapperRect.top;
    const wrapperHeight = partnersStickyWrapperRef.current.scrollHeight;
    const targetScroll = wrapperTop + (index / Math.max(1, numCats - 1)) * (wrapperHeight - window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* ================================================================
          SECTION 1: Hero
          ================================================================ */}
      <section ref={heroSectionRef} className={`${styles.heroSection} ${styles.sectionWrapperContain}`}>
        <div className={styles.heroStickyWrapper}>
          <div className={styles.heroStickyElement}>
            <div ref={heroMediaRef} className={styles.heroMediaWrapper}>
              <video
                ref={heroVideoRef}
                className={`${styles.heroVideo} ${styles.heroDesktopVideo}`}
                src={`${R2_CDN}/compressed-home-intro-desktop-r3.mp4`}
                autoPlay
                muted
                playsInline
                preload="auto"
              />
              <video
                ref={heroVideoMobileRef}
                className={`${styles.heroVideo} ${styles.heroMobileVideo}`}
                src={`${R2_CDN}/compressed-home-intro-mobile-r3.mp4`}
                autoPlay
                muted
                playsInline
                preload="auto"
              />
            </div>
            <div ref={heroTitleRef} className={styles.heroTitle}>
              <h1 className={styles.heroTitleText}>
                Skip traffic.{"\n"}Time to fly.
              </h1>
            </div>
            <div ref={heroSubtitleRef} className={styles.heroSubtitle}>
              <p className={styles.heroSubtitleText}>
                The future of aviation is coming soon.
              </p>
            </div>
            <div ref={heroTextSlidesRef} className={styles.heroTextSlides}>
              <div className={`${styles.heroTextSlideItem} ${activeHeroSlide === 0 ? styles.heroTextSlideItemActive : ""}`}>
                Elevate your commute with our all-electric air taxi, soon to be
                bookable at the tap of a button.
              </div>
              <div className={`${styles.heroTextSlideItem} ${activeHeroSlide === 1 ? styles.heroTextSlideItemActive : ""}`}>
                Zero traffic. Zero operating emissions. Just the space and time
                your day deserves.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: Experience Highlights
          ================================================================ */}
      <section id="experience-highlights" className={styles.sectionWrapper}>
        <div className={styles.experienceHighlights}>
          <div ref={expStickyWrapperRef} className={styles.experienceStickyWrapper}>
            <div className={styles.experienceStickyElement}>
              <h2 className={styles.experienceTitle} aria-label="Nowhere to go but Up">
                <div aria-hidden="true" className={styles.experienceTitleDesktop}>
                  Nowhere to go but Up
                </div>
                <div aria-hidden="true" className={styles.experienceTitleMobile}>
                  Let&apos;s fly
                </div>
              </h2>

              <div ref={expSlidesRef} className={styles.slidesContainer}>
                {[
                  {
                    img: "a0cc53073d2e2741323b19bcc392b9b3fc5ea888-1444x1700.jpg",
                    alt: "Leave city congestion behind and choose a stress-free commute through the clouds.",
                    text: "Leave city congestion behind and choose a stress-free commute through the clouds.",
                    num: "1",
                  },
                  {
                    img: "050c5279f4a679a956a0e3d341f45723e624a5a0-1444x1700.jpg",
                    alt: "Sit back and enjoy. Breathtaking views come standard with every seat.",
                    text: "Sit back and enjoy.\nBreathtaking views come standard with every seat.",
                    num: "2",
                  },
                  {
                    img: "7fe8973f1288a16f20520b22e08b67c5f5ac6e2b-1444x1700.jpg",
                    alt: "Enjoy seamless travel with a choreographed rideshare to the vertiport.",
                    text: "Enjoy seamless travel with a choreographed rideshare to the vertiport.",
                    num: "3",
                  },
                ].map((slide, i) => (
                  <div
                    key={i}
                    ref={(el) => { slideRefs.current[i] = el; }}
                    className={styles.slide}
                    style={{
                      "--slide-index": i,
                      "--slide-progress-in": i === 0 ? 1 : 0,
                      "--slide-progress-out": 0,
                      "--slide-progress-end": 0,
                    } as React.CSSProperties}
                  >
                    <div
                      ref={(el) => { slideImageRefs.current[i] = el; }}
                      className={styles.slideImage}
                    >
                      <div className={styles.slideImageInner}>
                        <img
                          src={sanityImg(slide.img)}
                          alt={slide.alt}
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                    <Link
                      className={styles.slideContent}
                      href="/experience"
                      ref={(el) => { slideContentRefs.current[i] = el; }}
                    >
                      <span className={styles.slideContentNumber}><span>{slide.num}</span></span>
                      <p className={styles.slideText}>{slide.text}</p>
                      <span className={styles.slideLink}>Discover the Experience</span>
                    </Link>
                  </div>
                ))}
              </div>

              <div className={styles.experienceLabels}>
                <span className={styles.experienceLabel}>Experience Highlights</span>
                <span className={styles.experienceLabel}>Skip town, let&apos;s fly</span>
              </div>
            </div>
          </div>

          <div ref={expEndSectionRef} className={styles.experienceEndSection}>
            <div ref={expEndTitleRef} className={styles.experienceEndTitle}>
              Imagine looking forward to your commute. And forgetting what
              gridlock feels like. When flight is a part of everyday life,
              anything is possible.{" "}
            </div>
            <Link ref={expEndButtonRef} className={styles.experienceEndButton} href="/experience">
              <button className={`${styles.button} ${styles.buttonFilled}`}>
                Discover the Experience
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: App
          ================================================================ */}
      <section id="app" className={styles.sectionWrapper}>
        <div ref={appSectionRef} className={styles.sectionApp}>
          <div className={styles.appLeftMedia}>
            <div ref={appMediaInnerRef} className={styles.appMediaInner}>
              <div className={styles.appDesktopImage}>
                <img
                  src={sanityImg("896d4d7e05eb68acd3a49e98a0ff6f9804601e84-2248x1450.jpg")}
                  alt="Seamless door to door travel, all from a few taps on our app."
                  loading="lazy"
                />
              </div>
              <div className={styles.appMobileImage}>
                <img
                  src={sanityImg("b3c6200a3053e3e70ece01b29cd0f58604fa692b-515x747.jpg")}
                  alt="Seamless door to door travel, all from a few taps on our app."
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={styles.appRightContent}>
            <div className={styles.appRightMedia}>
              <img
                src={sanityImg("86c8943db1672031c0b73ddbf16932e3aed15a4b-552x552.jpg")}
                alt="Our app coordinates your end-to-end commute, including an Uber to and from our vertiport."
                loading="lazy"
              />
            </div>
            <p className={styles.appRightText}>
              Our app coordinates your end-to-end commute, including an Uber to
              and from our vertiport.
            </p>
          </div>

          <span className={styles.appLabel}>Coming soon</span>

          <div className={styles.appSectionEnd}>
            <div ref={appEndTitleRef} className={styles.appEndTitle}>
              Seamless door to door travel, all from a few taps on our app.
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: Technology Entry
          ================================================================ */}
      <section
        ref={techSectionRef}
        id="technology"
        className={`${styles.sectionWrapper} ${styles.sectionWrapperContain} ${styles.sectionEntry}`}
        style={{
          "--border-radius-progress": 0,
          "--border-radius-out": 0,
        } as React.CSSProperties}
      >
        <div ref={techMediaRef} className={styles.entryMedia} style={{
          "--translate-y-in-progress": 0,
          "--translate-y-out-progress": 0,
        } as React.CSSProperties}>
          <div className={styles.entryMediaDesktop}>
            <img
              className={styles.entryMediaImg}
              src={sanityImg("fe892333d4c9a9934032f2ee33da32ac0f61211f-3200x1800.jpg")}
              alt="Technology that makes the dream possible"
              loading="lazy"
            />
          </div>
          <div className={styles.entryMediaMobile}>
            <img
              className={styles.entryMediaImg}
              src={sanityImg("bb2f1438061f5e799944e0ba4659720790d63bf2-1125x2250.jpg")}
              alt="Technology that makes the dream possible"
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.entryStickyWrapper}>
          <div className={styles.entryStickyElement}>
            <div ref={techContentRef} className={styles.entryInner}>
              <div className={styles.entryContentLeft}>
                <h3 className={styles.entryTitle}>
                  Technology that makes{"\n"}the dream possible
                </h3>
                <div className={styles.entryButtons}>
                  <Link href="/technology">
                    <button className={`${styles.button} ${styles.buttonFilledTransparent}`}>
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
              <div ref={techFeaturesRef} className={styles.entryFeatures}>
                <span className={styles.entryFeature}>Vertical take-off and landing</span>
                <span className={styles.entryFeature}>200 mph top speed</span>
                <span className={styles.entryFeature}>Zero operating emissions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: News
          ================================================================ */}
      <section id="news" ref={newsSectionRef} className={`${styles.sectionWrapper} ${styles.sectionWrapperContain}`}>
        <div className={styles.sectionNews}>
          <h2 className={styles.newsTitle}>News from above</h2>

          <div className={styles.newsButtonContainer}>
            <Link href="/news">
              <button className={`${styles.button} ${styles.buttonOutlined}`}>
                View all News
              </button>
            </Link>
          </div>

          <div ref={newsContainerRef} className={styles.newsContainer}>
            {[
              {
                href: "/news/joby-completes-piloted-electric-air-taxi-flight-across-san-francisco-bay-and-around-the-golden",
                date: "Mar 13, 2026",
                title: "Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate",
                img: "9d0764b417418fd1c74f84ceffb1197d861b40fa-6000x4000.jpg",
              },
              {
                href: "/news/joby-s-first-faa-conforming-aircraft-takes-flight",
                date: "Mar 11, 2026",
                title: "Joby\u2019s First FAA-Conforming Aircraft Takes Flight",
                img: "6f800281b68a999fc7fac710d5abf199282530df-3000x2000.jpg",
              },
              {
                href: "/news/joby-to-begin-u-s-operations-in-2026-under-white-house-air-taxi-program",
                date: "Mar 9, 2026",
                title: "Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program",
                img: "411a712308f1858194b3efd9368aa51dad54a599-6000x4000.jpg",
              },
            ].map((item, i) => (
              <Link
                key={i}
                className={styles.newsItem}
                href={item.href}
                ref={(el) => { newsItemRefs.current[i] = el; }}
              >
                <div className={styles.newsItemHeader}>
                  <span className={styles.newsItemDate}>{item.date}</span>
                  <p className={styles.newsItemTitle}>{item.title}</p>
                </div>
                <div className={styles.newsItemImage}>
                  <img src={sanityImg(item.img)} alt={item.title} loading="lazy" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: Partners
          ================================================================ */}
      <section id="section-partners" className={`${styles.sectionWrapper} ${styles.sectionWrapperContain}`}>
        <div className={styles.sectionPartners}>
          <div className={styles.partnersTitleContainer}>
            <h2 className={styles.partnersTitle}>
              With partners like this,{"\n"}there&apos;s nowhere to go but up.
            </h2>
          </div>

          <div ref={partnersStickyWrapperRef} className={styles.partnersStickyWrapper}>
            <div className={styles.partnersStickyElement}>
              <div
                ref={partnersWrapperRef}
                className={styles.partnersWrapper}
                style={{ "--active-slide": activePartner } as React.CSSProperties}
              >
                {/* Categories List */}
                <div ref={partnersCategoriesRef} className={styles.partnersCategories}>
                  {PARTNER_CATEGORIES.map((cat, i) => (
                    <div
                      key={cat.name}
                      className={styles.partnersCategoryName}
                      style={{ "--index": i, cursor: "pointer", opacity: i === activePartner ? 1 : 0.3, transition: "opacity 0.3s" } as React.CSSProperties}
                      onClick={() => handlePartnerClick(i)}
                    >
                      {i === activePartner && <div className={styles.partnersCategoryDot} />}
                      <p className={styles.partnersCategoryNameText}>{cat.name}</p>
                    </div>
                  ))}
                </div>

                {/* Images */}
                <div
                  ref={partnersImagesWrapperRef}
                  className={styles.partnersImagesWrapper}
                  style={{ "--progress": 0 } as React.CSSProperties}
                >
                  {PARTNER_CATEGORIES.map((cat, i) => (
                    <div
                      key={cat.name}
                      ref={(el) => { partnerImageRefs.current[i] = el; }}
                      className={styles.partnersCategoryImage}
                      style={{
                        position: i === 0 ? "relative" : "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        opacity: i === activePartner ? 1 : 0,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <img src={sanityImg(cat.image)} alt={cat.name} loading="lazy" />
                    </div>
                  ))}
                </div>

                {/* Content Items */}
                <div ref={partnersContentRef} className={styles.partnersContent}>
                  {PARTNER_CATEGORIES.map((cat, i) => (
                    <div
                      key={cat.name}
                      ref={(el) => { partnerContentItemRefs.current[i] = el; }}
                      className={`${styles.partnersContentItem} ${i === activePartner ? styles.partnersContentItemActive : ""}`}
                    >
                      <p className={styles.partnerDescription}>{cat.description}</p>
                      {cat.logos.length > 0 && (
                        <div className={styles.logoWrapper}>
                          {cat.logos.map((logo) => (
                            <div key={logo.name} className={styles.logo}>
                              <div className={styles.logoInner}>
                                <img src={sanityImg(logo.src)} alt={logo.name} loading="lazy" />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: Story Entry
          ================================================================ */}
      <section
        ref={storySectionRef}
        id="story"
        className={`${styles.sectionWrapper} ${styles.sectionWrapperContain} ${styles.sectionEntry}`}
        style={{
          "--border-radius-progress": 0,
          "--border-radius-out": 0,
        } as React.CSSProperties}
      >
        <div ref={storyMediaRef} className={styles.entryMedia} style={{
          "--translate-y-in-progress": 0,
          "--translate-y-out-progress": 0,
        } as React.CSSProperties}>
          <div className={styles.entryMediaDesktop}>
            <img
              className={styles.entryMediaImg}
              src={sanityImg("de462f3594507f8d71cc7820510d8b5493830083-2520x1580.png")}
              alt="The sky was never the limit."
              loading="lazy"
            />
          </div>
          <div className={styles.entryMediaMobile}>
            <img
              className={styles.entryMediaImg}
              src={sanityImg("336ae41e52f6f4e93e9a0c4a4236893f6892d8a6-1125x2250.jpg")}
              alt="The sky was never the limit."
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.entryStickyWrapper}>
          <div className={styles.entryStickyElement}>
            <div ref={storyContentRef} className={styles.entryInner}>
              <div className={styles.entryContentLeft}>
                <h3 className={styles.entryTitle}>
                  The sky was never the limit.
                </h3>
                <div className={styles.entryButtons}>
                  <Link href="/company">
                    <button className={`${styles.button} ${styles.buttonFilledTransparent}`}>
                      Discover our Story
                    </button>
                  </Link>
                  <Link href="/careers">
                    <button className={`${styles.button} ${styles.buttonOutlinedTransparent}`}>
                      Work at Joby
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.entryContentRight}>
                <p className={styles.entryDescription}>
                  In 2009, a small team of Joby engineers set out to build the
                  future of flight. Thousands of test flights later, we&apos;ve
                  turned &quot;what if&quot; into &quot;what&apos;s next&quot;?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: Illustration — Dream of Flight
          ================================================================ */}
      <section id="illustration" className={`${styles.sectionWrapper} ${styles.sectionWrapperContain}`}>
        <div className={styles.sectionIllustration}>
          <div className={styles.illustrationHeader}>
            <div className={styles.illustrationLabelWrapper}>
              <span className={styles.illustrationLabelLeft}>Our future vision</span>
              <span className={styles.illustrationLabelRight}>New wave aviation</span>
            </div>
            <h2 className={styles.illustrationTitleDesktop}>
              Dream of Flight
            </h2>
            <h2 className={styles.illustrationTitleMobile}>
              Dream{"\n"}of Flight
            </h2>
          </div>

          <div
            ref={illustrationContentWrapperRef}
            className={styles.illustrationContentWrapper}
            style={{ "--border-radius-progress": 0 } as React.CSSProperties}
          >
            {[
              { pretitle: "Future Vision \u2014 1", text: "Imagine a world where every cross-town invitation is a definite \u2018yes\u2019." },
              { pretitle: "Future Vision \u2014 2", text: "Where game day is gridlock-free and every restaurant is local." },
              { pretitle: "Future Vision \u2014 3", text: "Where our cities are greener, more friendly places to be." },
            ].map((block, i) => (
              <div
                key={i}
                ref={(el) => { illustrationContentRefs.current[i] = el; }}
                className={styles.illustrationContent}
              >
                <span className={styles.illustrationPretitle}>{block.pretitle}</span>
                <div className={styles.illustrationText}>{block.text}</div>
              </div>
            ))}

            <div className={styles.illustrationBackground}>
              {[
                { desktop: "c87e7474a50bc61d572909da05aee1647cd8f082-2400x6045.webp", mobile: "0a69932fb2b24e757fa9d1704eea6fc29cee4870-563x3527.webp" },
                { desktop: "e5d6f302a057dc33abc3047e611edd9b8c74bcf0-2400x1518.webp", mobile: "e11f4b40ca3ec460076dfd86179082352303c8c5-563x600.webp" },
                { desktop: "dd2fb834986e5aace151c61fa2243743ba9d442b-2400x975.webp", mobile: "95884b5d5467b36a6da04505fe3ac615a7f01a4f-563x380.webp" },
                { desktop: "f534edec7bf7bc54afc1ece9f54f507eed0dcff1-2400x1616.webp", mobile: "712a9bdb835cf1beff518e2bac704dce0e1b68ce-563x735.webp" },
                { desktop: "b2ec77696825a0ef40f54f85f2ef75ec4905dcd5-2400x195.webp", mobile: "eda6bcbd653bedc6290bdbdba46d10da721b646c-563x83.webp" },
                { desktop: "7bf0b0a519093b043b8a870943a16fbc521eed5a-2400x407.webp", mobile: "0d5a8981595b62f8c583687d8934a963c87204fd-563x158.webp" },
                { desktop: "ee46d244254cb61608942005e383662740c383cb-2400x1811.webp", mobile: "d8429b57b9a567d4bc25915ac2156803e2f2710e-563x983.webp" },
                { desktop: "3c8db3fa82c0be25fa06d318f49c40bdeacba13e-2400x819.webp", mobile: "a5fc6f536db0c35bae0ebbcb1cd0598a7ad09f69-563x305.webp" },
                { desktop: "c29987660ed88a308e3daae091da628a4d0b1232-2400x1202.webp", mobile: "0c55594d3bd511382dca2eba0026203a76d410ec-563x653.webp" },
                { desktop: "237e8abbc506011492066bd3ac9a4e5390ea99f4-2400x1233.webp", mobile: "15c5e6df328a8621f9110ba5495c5019e845daf9-563x519.webp" },
                { desktop: "786bb4bbf59d8b1866595d98f7db505cd2f9d456-2400x890.webp", mobile: "db3331bd1630601194a67a87c39482e2648c9fda-563x330.webp" },
              ].map((layer, i) => (
                <div
                  key={i}
                  ref={(el) => { illustrationLayerRefs.current[i] = el; }}
                  className={`${styles.illustrationLayer} ${styles[`layer${i + 1}` as keyof typeof styles]}`}
                >
                  <div className={styles.illustrationLayerDesktop}>
                    <img className={styles.illustrationLayerImg} src={sanityImg(layer.desktop)} alt="" loading="lazy" />
                  </div>
                  <div className={styles.illustrationLayerMobile}>
                    <img className={styles.illustrationLayerImg} src={sanityImg(layer.mobile)} alt="" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
