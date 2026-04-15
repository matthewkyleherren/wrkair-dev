"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------------------------------------------------
   Constants — Sanity CDN base + image IDs
   --------------------------------------------------------------------------- */

const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";
const R2_CDN = "https://pub-c3f399360b0b4437b233f8cc0505582a.r2.dev/videos";

const HERO_VIDEO_DESKTOP = `${R2_CDN}/compressed-experience-desktop-r2.mp4`;
const HERO_VIDEO_MOBILE = `${R2_CDN}/compressed-experience-mobile-r2.mp4`;

/* Remap a value from one range to another, with clamping */
function remap(
  val: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  const clamped = Math.min(inMax, Math.max(inMin, val));
  return ((clamped - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/* Slider images */
const SLIDER_IMAGES = [
  {
    src: `${SANITY_CDN}/c3e51f6df54314b3643821c76520a1c69b7fde5d-2172x1800.jpg`,
    alt: "A front-row seat for everyone.",
    figure: "Fig. 1 \u2014 Panoramic windows",
    title: "A front-row seat for everyone.",
    body: "Every seat comes with a panoramic view, allowing you to experience your city like never before.",
  },
  {
    src: `${SANITY_CDN}/232cbec3fcbf9b5b78748e36d354288e7caf27ee-2172x1800.jpg`,
    alt: "Comfortable room for your crew and carry-on.",
    figure: "Fig. 2 \u2014 Seating in the Aircraft",
    title: "Comfortable room for your crew and carry-on.",
    body: "Our aircraft seats four passengers, plus a pilot, with space to spare for your daily essentials.",
  },
  {
    src: `${SANITY_CDN}/10d341acdbdbf468f02058345e80c29d3b5e5e40-2172x1800.jpg`,
    alt: "Every leg of your journey, seamlessly orchestrated.",
    figure: "Fig. 3 \u2014 Rideshare integration into the journey",
    title: "Every leg of your journey, seamlessly orchestrated.",
    body: "A few taps on our app and we\u2019ll choreograph your entire commute, including an Uber to and from our vertiports. No hassle or headaches, just seamless travel from A to B.",
  },
  {
    src: `${SANITY_CDN}/1546ac3bccf6cd592836a330bc892dbca9972d57-2172x1800.jpg`,
    alt: "All-electric flight for clear skies ahead.",
    figure: "Fig. 4 \u2014 Electric motor",
    title: "All-electric flight for clear skies ahead.",
    body: "With zero operating emissions and a low acoustic footprint, we\u2019re delivering the cleanest way to travel through the clouds.",
  },
];

/* Map routes */
const MAP_ROUTES = [
  {
    id: "nyc",
    from: "JFK",
    to: "Manhattan",
    fromLabel: "JFK Airport",
    toLabel: "Manhattan",
    minutes: 6,
    description: "43 min faster by air*",
    city: "New York",
  },
  {
    id: "dubai",
    from: "DXB",
    to: "Palm Jumeirah",
    fromLabel: "DXB",
    toLabel: "Palm Jumeirah",
    minutes: 12,
    description: "33 min faster by air*",
    city: "Dubai",
  },
  {
    id: "la",
    from: "LAX",
    to: "Downtown LA",
    fromLabel: "LAX Airport",
    toLabel: "Downtown LA",
    minutes: 12,
    description: "33 min faster by air*",
    city: "Los Angeles",
  },
];

/* Partner categories */
const PARTNER_CATEGORIES = [
  {
    name: "Car Service",
    image: `${SANITY_CDN}/08c1cc4c2b2f84e81af5a811a077423dbf1a82d5-1500x1892.jpg`,
    description:
      "We\u2019re partnering with global leaders in ground transportation to seamlessly integrate air mobility into the future of door-to-door travel.",
    logos: [
      {
        name: "Uber",
        src: `${SANITY_CDN}/ae1c4e28f2e64113163a11688e9491eaced07734-76x45.svg`,
      },
    ],
  },
  {
    name: "Airlines",
    image: `${SANITY_CDN}/63e7e05a6a30a30f436156a8cb269a9bf9462a41-1500x1892.jpg`,
    description:
      "Our partnerships with leading global airlines will integrate our air taxi service into existing aviation networks.",
    logos: [
      {
        name: "Delta",
        src: `${SANITY_CDN}/3668a86d6101741073f98b390a355183e6a7521a-480x180.png`,
      },
      {
        name: "Virgin Atlantic",
        src: `${SANITY_CDN}/045aa354beeb7b18c26ecc75a71d274340c6da04-993x231.png`,
      },
      {
        name: "ANA",
        src: `${SANITY_CDN}/5ba090dd2266b6ea85978ba2a62d482482a94740-92x45.svg`,
      },
    ],
  },
  {
    name: "Infrastructure",
    image: `${SANITY_CDN}/0478fe6e587c2e8fb1ac677e0cf1ea3332083e6f-1500x1892.jpg`,
    description:
      "Together with key infrastructure partners, we\u2019re building the physical backbone needed for convenient everyday flight.",
    logos: [
      {
        name: "Skyports",
        src: `${SANITY_CDN}/703ef7455889d41a12b2750e5c0891426fa7b142-112x45.svg`,
      },
      {
        name: "Vertiports by Atlantic",
        src: `${SANITY_CDN}/52a92a0193c660628053cbfcb60c24a21bf14608-102x45.svg`,
      },
      {
        name: "Signature Flight Support",
        src: `${SANITY_CDN}/b01675566cfe8d9377f546874496f8b7afdd98b6-122x45.svg`,
      },
      {
        name: "Jetex",
        src: `${SANITY_CDN}/f7e02666c110899b16a7df086f9b7daa1bb6e446-90x45.svg`,
      },
      {
        name: "Clay Lacy",
        src: `${SANITY_CDN}/c0a0a44e718ac7c11a58fc941ee54231367bf8b0-122x45.svg`,
      },
      {
        name: "Helo Holdings, Inc.",
        src: `${SANITY_CDN}/d3a3de92285f5ba0e49e504675e3475f63948e13-74x45.svg`,
      },
    ],
  },
  {
    name: "R&D",
    image: `${SANITY_CDN}/af456faf9640de0bdd711f84e45d958cc636ab8a-1500x1892.jpg`,
    description:
      "We collaborate with pioneers in manufacturing and innovation to create a vertically integrated, world-class production ecosystem.",
    logos: [
      {
        name: "Toyota",
        src: `${SANITY_CDN}/e2e469f991528ca2c648fd9455142a6388ea2e16-122x45.svg`,
      },
      {
        name: "NASA",
        src: `${SANITY_CDN}/fb4aa83f7c38f23fbc0fbbf56e0559534b9a9e7e-510x198.png`,
      },
    ],
  },
  {
    name: "Technology",
    image: `${SANITY_CDN}/e139fbac7c088eda6c77b752cea28f4ca66fa420-1500x1892.png`,
    description:
      "Our aviation technology partnerships power the systems that support navigation, autonomy, pilot training, and operational excellence.",
    logos: [
      {
        name: "Garmin",
        src: `${SANITY_CDN}/65c47bff04766eeb14a3e794cbfcf3939c3d0f23-112x45.svg`,
      },
      {
        name: "CAE",
        src: `${SANITY_CDN}/41e28c69c10d417477200ee5be7f29fa01429fc3-66x45.svg`,
      },
    ],
  },
  {
    name: "Government",
    image: `${SANITY_CDN}/bb92b433868cdbe3608420f4e69de82d3a952d7d-1120x1412.jpg`,
    description:
      "We collaborate with forward-thinking government agencies to shape policy, accelerate innovation, and enable the introduction of advanced air mobility.",
    logos: [],
  },
];

/* Entry / CTA images */
const ENTRY_IMAGE_DESKTOP = `${SANITY_CDN}/2793fd52d935f7c5da6a2ac763e49defa93c700b-3200x1800.jpg`;
const ENTRY_IMAGE_MOBILE = `${SANITY_CDN}/0dece5fdd9e5ea1d86baa0607912460dee287c15-1125x2250.jpg`;

/* Scrolly text lines */
const SCROLLY_LINES = [
  "Breathtaking Views",
  "Spacious Comfort",
  "Seamless Journey",
  "All-electric Flight",
];

/* ==========================================================================
   Experience Page Component
   ========================================================================== */

export default function ExperiencePage() {
  /* --- State --- */
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeRoute, setActiveRoute] = useState(0);
  const [activePartner, setActivePartner] = useState(0);

  /* --- Refs: Hero --- */
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroStickyRef = useRef<HTMLDivElement>(null);
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroVideoMobileRef = useRef<HTMLVideoElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroTextSlidesRef = useRef<HTMLDivElement>(null);
  const heroTextSlidesInnerRef = useRef<HTMLDivElement>(null);

  /* --- Refs: Scrolly Text --- */
  const scrollySectionRef = useRef<HTMLElement>(null);
  const scrollyHeaderStickyRef = useRef<HTMLDivElement>(null);
  const scrollyLineScaleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollyLineWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* --- Refs: Slider --- */
  const sliderSectionRef = useRef<HTMLElement>(null);
  const sliderStickyWrapperRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderInnerRef = useRef<HTMLDivElement>(null);
  const sliderImageScaleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderPaginationRef = useRef<HTMLDivElement>(null);
  const sliderPaginationItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* --- Refs: Map --- */
  const mapSectionRef = useRef<HTMLElement>(null);
  const mapStickyWrapperRef = useRef<HTMLDivElement>(null);
  const mapContentRef = useRef<HTMLDivElement>(null);
  const mapRouteRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mapWrapperRef = useRef<HTMLDivElement>(null);

  /* --- Refs: Partners --- */
  const partnersSectionRef = useRef<HTMLElement>(null);
  const partnersStickyWrapperRef = useRef<HTMLDivElement>(null);
  const partnersWrapperRef = useRef<HTMLDivElement>(null);
  const partnersTitleRef = useRef<HTMLHeadingElement>(null);
  const partnersImagesWrapperRef = useRef<HTMLDivElement>(null);
  const partnerContentItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* --- Refs: Entry --- */
  const entrySectionRef = useRef<HTMLElement>(null);
  const entryMediaRef = useRef<HTMLDivElement>(null);
  const entryContentRef = useRef<HTMLDivElement>(null);
  const entryInnerRef = useRef<HTMLDivElement>(null);

  /* =========================================================================
     GSAP ScrollTrigger Animations
     ========================================================================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ==================================================================
         1. HERO — Video scrub + scroll animations
         ================================================================== */
      const heroSection = heroSectionRef.current;
      const heroMedia = heroMediaRef.current;
      const heroVideo = heroVideoRef.current;
      const heroVideoMobile = heroVideoMobileRef.current;
      const heroTitle = heroTitleRef.current;
      const heroSubtitle = heroSubtitleRef.current;
      const heroTextSlides = heroTextSlidesRef.current;
      const heroTextSlidesInner = heroTextSlidesInnerRef.current;

      if (heroSection && heroMedia) {
        /* Intro animation — delayed fade in */
        gsap.to(heroMedia, {
          "--intro-animation-progress": 1,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.2,
        });

        if (heroTitle) {
          gsap.fromTo(
            heroTitle,
            { y: "1.9rem", autoAlpha: 0 },
            {
              y: "0rem",
              autoAlpha: 1,
              duration: 0.667,
              ease: "power2.out",
              delay: 0.7,
            },
          );
        }

        if (heroSubtitle) {
          gsap.fromTo(
            heroSubtitle,
            { y: "1.4rem", opacity: 0 },
            {
              y: "0rem",
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              delay: 1.1,
            },
          );
        }

        /* ScrollTrigger: inner progress — video scrub + border-radius-in + title/subtitle animate-in */
        const sizeVh = 1400;
        const r = 1 / (sizeVh / 100); // ~0.0714

        ScrollTrigger.create({
          trigger: heroSection,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            /* Video scrub: map progress 0.05→1 to video 0%→100% */
            const t = remap(self.progress, 0.05, 1, 0, 1);
            if (heroVideo && heroVideo.duration) {
              heroVideo.currentTime = t * heroVideo.duration;
            }
            if (heroVideoMobile && heroVideoMobile.duration) {
              heroVideoMobile.currentTime = t * heroVideoMobile.duration;
            }
          },
        });

        const heroInnerTl = gsap.timeline();
        heroInnerTl.to(
          heroMedia,
          {
            "--translate-y-progress": 1,
            "--border-radius-in": 1,
            ease: "power1.inOut",
            duration: r,
          },
          0,
        );
        if (heroTitle) {
          heroInnerTl.to(
            heroTitle,
            {
              "--animate-in": 1,
              ease: "power1.inOut",
              duration: r,
            },
            0,
          );
        }
        if (heroSubtitle) {
          heroInnerTl.to(
            heroSubtitle,
            {
              "--animate-in": 1,
              ease: "power1.inOut",
              duration: r,
            },
            0,
          );
        }
        if (heroTextSlides) {
          heroInnerTl.fromTo(
            heroTextSlides,
            { opacity: 0, y: "-2rem" },
            { opacity: 1, y: "0rem", ease: "power2.out", duration: 0.2 * r },
            0.75 * r,
          );
        }
        if (heroTextSlidesInner) {
          heroInnerTl.to(
            heroTextSlidesInner,
            {
              "--inner-progress": 1,
              duration: 1 - r,
              ease: "none",
            },
            r,
          );
        }

        ScrollTrigger.create({
          trigger: heroSection,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          animation: heroInnerTl,
        });

        /* ScrollTrigger: full progress — border-radius-out exit */
        const t = 1 / (sizeVh / 100);
        const heroFullTl = gsap.timeline();
        heroFullTl.to(
          heroMedia,
          {
            "--border-radius-out": 1,
            ease: "power2.out",
            duration: 0.75 * t,
          },
          1 - t,
        );
        heroFullTl.to(
          heroMedia,
          {
            "--translate-inner-y-extra-progress": 1.5,
            ease: "power2.inOut",
            duration: t,
          },
          1 - t,
        );
        if (heroTextSlides) {
          heroFullTl.to(
            heroTextSlides,
            { y: "-2rem", opacity: 0, ease: "power2.out", duration: 0.2 * t },
            1 - 1.25 * t,
          );
        }

        ScrollTrigger.create({
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: true,
          animation: heroFullTl,
        });
      }

      /* ==================================================================
         2. SCROLLY TEXT — Scale down + translateY per line
         ================================================================== */
      mm.add("(min-width: 769px)", () => {
        SCROLLY_LINES.forEach((_, i) => {
          const lineWrapper = scrollyLineWrapperRefs.current[i];
          const lineScale = scrollyLineScaleRefs.current[i];
          if (!lineWrapper || !lineScale) return;

          const tl = gsap.timeline();
          tl.to(lineScale, { scale: 0.08, ease: "sine.inOut", duration: 1 }, 0);
          tl.to(lineScale, { y: "25vh", ease: "power3.in", duration: 1 }, 0);

          if (i === 3 && scrollyHeaderStickyRef.current) {
            tl.to(
              scrollyHeaderStickyRef.current,
              { opacity: 0, y: -20, ease: "power1.out", duration: 0.25 },
              0.5,
            );
          }

          ScrollTrigger.create({
            trigger: lineWrapper,
            start: "top bottom",
            end: "+=135%",
            scrub: true,
            animation: tl,
          });
        });
      });

      mm.add("(max-width: 768px)", () => {
        SCROLLY_LINES.forEach((_, i) => {
          const lineWrapper = scrollyLineWrapperRefs.current[i];
          const lineScale = scrollyLineScaleRefs.current[i];
          if (!lineWrapper || !lineScale) return;

          const tl = gsap.timeline();
          tl.to(
            lineScale,
            { scale: i === 3 ? 0.35 : 0.2, ease: "sine.out", duration: 1 },
            0,
          );
          tl.to(lineScale, { y: "5vh", ease: "power1.in", duration: 1 }, 0);

          if (i === 3 && scrollyHeaderStickyRef.current) {
            tl.to(
              scrollyHeaderStickyRef.current,
              { opacity: 0, y: -20, ease: "power1.out", duration: 0.25 },
              0.5,
            );
          }

          ScrollTrigger.create({
            trigger: lineWrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            animation: tl,
          });
        });
      });

      /* ==================================================================
         3. SLIDER — Scroll-driven image slider
         ================================================================== */
      const sliderStickyWrapper = sliderStickyWrapperRef.current;
      const sliderContainer = sliderContainerRef.current;
      const sliderSection = sliderSectionRef.current;

      if (sliderStickyWrapper && sliderContainer && sliderSection) {
        const slideCount = SLIDER_IMAGES.length;
        const totalDuration = 50 + 150 * slideCount;
        const introPhase = 50 / totalDuration;
        const perSlideDuration =
          (100 * slideCount) / totalDuration / (slideCount - 1);

        /* Viewport entrance */
        const sliderViewportTl = gsap.timeline();
        sliderViewportTl.to(
          sliderContainer,
          { "--animate-in": 1, duration: 1, ease: "power1.in" },
          0,
        );

        ScrollTrigger.create({
          trigger: sliderSection,
          start: "top bottom",
          end: "+=100lvh 0",
          scrub: true,
          animation: sliderViewportTl,
        });

        /* Main sticky ScrollTrigger */
        const sliderTl = gsap.timeline();

        /* Intro phase */
        sliderTl.to(
          sliderContainer,
          {
            "--animate-to-position": 1,
            duration: introPhase,
            ease: "power1.out",
          },
          0,
        );
        sliderTl.to(
          sliderContainer,
          {
            "--border-progress": 1,
            duration: 0.7 * introPhase,
            ease: "power1.inOut",
          },
          0.3 * introPhase,
        );

        if (sliderPaginationRef.current) {
          sliderTl.fromTo(
            sliderPaginationRef.current,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7 * introPhase,
              ease: "power1.inOut",
            },
            0.3 * introPhase,
          );
        }

        /* First slide text entry */
        const firstText = sliderTextRefs.current[0];
        if (firstText) {
          sliderTl.fromTo(
            firstText,
            { "--text-progress": 0, x: 40, visibility: "hidden" as any },
            {
              "--text-progress": 1,
              x: 0,
              visibility: "visible" as any,
              duration: 0.7 * introPhase,
              ease: "power1.inOut",
            },
            0.3 * introPhase,
          );
        }

        /* First slide zoom */
        const firstImgScale = sliderImageScaleRefs.current[0];
        if (firstImgScale) {
          sliderTl.fromTo(
            firstImgScale,
            { "--zoom-progress": 0 },
            {
              "--zoom-progress": 1,
              ease: "power1.out",
              duration: 1.3 * perSlideDuration,
            },
            introPhase,
          );
        }

        /* Per-slide transitions */
        for (let i = 1; i < slideCount; i++) {
          const pos = introPhase + i * perSlideDuration;
          const prevImg = sliderImageScaleRefs.current[i - 1];
          const currImg = sliderImageScaleRefs.current[i];
          const prevText = sliderTextRefs.current[i - 1];
          const currText = sliderTextRefs.current[i];

          /* Fade out previous text */
          if (prevText) {
            sliderTl.to(
              prevText,
              {
                opacity: 0,
                "--text-progress-out": 1,
                duration: 0.25 * perSlideDuration,
              },
              pos - 0.25 * perSlideDuration,
            );
            sliderTl.set(prevText, { visibility: "hidden" as any }, pos);
          }

          /* Fade in current text */
          if (currText) {
            sliderTl.set(currText, { visibility: "visible" as any }, pos);
            sliderTl.fromTo(
              currText,
              { "--text-progress": 0, x: 40, opacity: 0 },
              {
                "--text-progress": 1,
                x: 0,
                opacity: 1,
                duration: 0.25 * perSlideDuration * 0.5,
              },
              pos,
            );
          }

          /* Slide image transition */
          if (prevImg) {
            sliderTl.fromTo(
              prevImg,
              { "--progress": 0 },
              {
                "--progress": 1,
                ease: "power1.out",
                duration: 0.5 * perSlideDuration,
              },
              pos - 0.25 * perSlideDuration,
            );
          }
          if (currImg) {
            sliderTl.fromTo(
              currImg,
              { "--zoom-progress": 0 },
              {
                "--zoom-progress": 1,
                ease: "none",
                duration: 1.5 * perSlideDuration,
              },
              pos - 0.25 * perSlideDuration,
            );
          }

          /* Update active slide state */
          sliderTl.call(() => setActiveSlide(i), [], pos);
        }

        /* Pagination progress tracking */
        for (let i = 0; i < slideCount; i++) {
          const pagItem = sliderPaginationItemRefs.current[i];
          if (!pagItem) continue;
          const pos = introPhase + i * perSlideDuration;
          sliderTl.fromTo(
            pagItem,
            { "--progress": 0 },
            { "--progress": 1, duration: perSlideDuration, ease: "none" },
            pos,
          );
          if (i > 0) {
            sliderTl.to(
              pagItem,
              {
                "--animate-in": 1,
                duration: 0.4 * perSlideDuration,
                ease: "power2.inOut",
              },
              pos,
            );
          } else {
            sliderTl.to(
              pagItem,
              {
                "--animate-in": 1,
                duration: 0.3 * introPhase,
                ease: "power2.inOut",
              },
              0.95 * introPhase,
            );
          }
        }

        ScrollTrigger.create({
          trigger: sliderStickyWrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          animation: sliderTl,
        });

        /* Exit animation — last slide */
        const lastImgScale = sliderImageScaleRefs.current[slideCount - 1];
        if (lastImgScale) {
          ScrollTrigger.create({
            trigger: sliderSection,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
            animation: gsap.fromTo(
              lastImgScale,
              { "--end": 0 },
              { "--end": 1, ease: "power1.inOut", duration: 1 },
            ),
          });
        }
      }

      /* ==================================================================
         4. MAP — Scroll-driven route switching
         ================================================================== */
      const mapStickyWrapper = mapStickyWrapperRef.current;
      const mapSection = mapSectionRef.current;
      const mapWrapper = mapWrapperRef.current;

      if (mapStickyWrapper && mapSection) {
        /* Viewport entrance — animate route items in */
        ScrollTrigger.create({
          trigger: mapSection,
          start: "top bottom",
          end: "+=100lvh 0",
          scrub: true,
          onEnter: () => {
            mapRouteRefs.current.forEach((routeEl, i) => {
              if (!routeEl) return;
              gsap.fromTo(
                routeEl,
                { opacity: 0, y: "1.4rem" },
                {
                  y: "0rem",
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.out",
                  delay: 0.166 * i,
                },
              );
              gsap.to(routeEl, {
                "--progress": 1,
                duration: 0.833,
                ease: "power2.out",
                delay: 0.166 * i,
              });
            });
          },
          once: true,
        });

        /* Scroll-driven route switching */
        let currentMapRoute = 0;
        ScrollTrigger.create({
          trigger: mapStickyWrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const routeCount = MAP_ROUTES.length;
            const newIndex = Math.floor(
              Math.min(self.progress * routeCount, routeCount - 1),
            );
            if (newIndex !== currentMapRoute) {
              currentMapRoute = newIndex;
              setActiveRoute(newIndex);
            }
          },
        });

        /* Exit — border-progress */
        if (mapWrapper) {
          ScrollTrigger.create({
            trigger: mapStickyWrapper,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
            animation: gsap.to(mapWrapper, {
              "--border-progress": 1,
              ease: "power1.inOut",
              duration: 0.5,
            }),
          });
        }
      }

      /* ==================================================================
         5. PARTNERS — Scroll-driven category switching
         ================================================================== */
      const partnersStickyWrapper = partnersStickyWrapperRef.current;
      const partnersWrapper = partnersWrapperRef.current;

      if (partnersStickyWrapper && partnersWrapper) {
        const numCats = PARTNER_CATEGORIES.length;

        /* Viewport entrance */
        ScrollTrigger.create({
          trigger: partnersStickyWrapper,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onEnter: () => {
            if (partnersTitleRef.current) {
              gsap.fromTo(
                partnersTitleRef.current,
                { y: "1.9rem", autoAlpha: 0 },
                {
                  y: "0rem",
                  autoAlpha: 1,
                  duration: 0.667,
                  ease: "power2.out",
                },
              );
            }
          },
          once: true,
        });

        if (partnersImagesWrapperRef.current) {
          const pImgTl = gsap.timeline();
          pImgTl.fromTo(
            partnersImagesWrapperRef.current,
            { "--progress": 0 },
            { "--progress": 1, duration: 1, ease: "power1.inOut" },
          );
          ScrollTrigger.create({
            trigger: partnersStickyWrapper,
            start: "top bottom",
            end: "top top",
            scrub: true,
            animation: pImgTl,
          });
        }

        /* Scroll-driven category switching */
        const visitedPartners = new Set<number>();
        let currentPartnerIdx = 0;
        ScrollTrigger.create({
          trigger: partnersStickyWrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const newIndex = Math.round(
              self.progress * Math.max(0, numCats - 1),
            );
            if (newIndex !== currentPartnerIdx) {
              currentPartnerIdx = newIndex;
              partnersWrapper.style.setProperty(
                "--active-slide",
                newIndex.toString(),
              );
              setActivePartner(newIndex);

              /* First-visit logo entrance animation */
              if (!visitedPartners.has(newIndex)) {
                visitedPartners.add(newIndex);
                const contentItem = partnerContentItemRefs.current[newIndex];
                if (contentItem) {
                  const logos = contentItem.querySelectorAll(
                    "[data-partner-logo]",
                  );
                  logos.forEach((logo, li) => {
                    gsap.fromTo(
                      logo,
                      { y: "1.9rem", scale: 0.9, opacity: 0 },
                      {
                        y: "0rem",
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        delay: 0.3335 + 0.083 * li,
                      },
                    );
                  });
                }
              }
            }
          },
        });
        visitedPartners.add(0);
      }

      /* ==================================================================
         6. ENTRY — SectionEntry border-radius reveal pattern
         ================================================================== */
      const entrySection = entrySectionRef.current;
      const entryMedia = entryMediaRef.current;
      const entryContent = entryContentRef.current;
      const entryInner = entryInnerRef.current;

      if (entrySection && entryMedia) {
        /* Scroll in: border-radius reveal + translate-y parallax */
        const entryInTl = gsap.timeline();
        entryInTl.to(
          entrySection,
          {
            "--border-radius-progress": 1,
            ease: "power1.in",
            duration: 0.5,
          },
          0,
        );
        entryInTl.to(
          entryMedia,
          {
            "--translate-y-in-progress": 1,
            ease: "none",
            duration: 1,
          },
          0,
        );
        if (entryInner) {
          entryInTl.fromTo(
            entryInner,
            { opacity: 0 },
            { opacity: 1, ease: "power1.out", duration: 0.1 },
            0.4,
          );
        }
        if (entryContent) {
          entryInTl.fromTo(
            entryContent,
            { y: "1.9rem", autoAlpha: 0 },
            {
              y: "0rem",
              autoAlpha: 1,
              duration: 0.667,
              ease: "power2.out",
            },
            0.7,
          );
        }

        ScrollTrigger.create({
          trigger: entrySection,
          start: "top bottom",
          end: "top top",
          scrub: true,
          animation: entryInTl,
        });

        /* Scroll out: translate-y out + hide content */
        const entryOutTl = gsap.timeline();
        entryOutTl.to(
          entryMedia,
          {
            "--translate-y-out-progress": 1,
            ease: "none",
            duration: 1,
          },
          0,
        );
        if (entryInner) {
          entryOutTl.to(
            entryInner,
            { opacity: 0, ease: "power1.out", duration: 0.25 },
            0.25,
          );
        }

        ScrollTrigger.create({
          trigger: entrySection,
          start: "top top",
          end: "bottom top",
          scrub: true,
          animation: entryOutTl,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const currentRoute = MAP_ROUTES[activeRoute];

  return (
    <main className={styles.pageWrapper}>
      {/* ================================================================
          Hero Section — Full-screen video with title overlay
          ================================================================ */}
      <section className={styles.heroSection} ref={heroSectionRef}>
        <div className={styles.heroStickyWrapper}>
          <div className={styles.heroSticky} ref={heroStickyRef}>
            {/* Background Video */}
            <div className={styles.heroMediaWrapper} ref={heroMediaRef}>
              <video
                ref={heroVideoRef}
                className={`${styles.heroVideo} ${styles.heroVideoDesktop}`}
                src={HERO_VIDEO_DESKTOP}
                muted
                playsInline
                preload="auto"
              />
              <video
                ref={heroVideoMobileRef}
                className={`${styles.heroVideo} ${styles.heroVideoMobile}`}
                src={HERO_VIDEO_MOBILE}
                muted
                playsInline
                preload="auto"
              />
            </div>

            {/* Title */}
            <div className={styles.heroTitle} ref={heroTitleRef}>
              <div className={styles.heroTitleDesktop}>
                <h1 className={styles.heroTitleText}>Take the high road</h1>
              </div>
              <div className={styles.heroTitleMobile}>
                <h1 className={styles.heroTitleText}>Take the high road</h1>
              </div>
            </div>

            {/* Subtitle */}
            <div className={styles.heroSubtitle} ref={heroSubtitleRef}>
              <p className={styles.heroSubtitleText}>
                Your city, elevated. Lift off and leave the gridlock and your
                stress behind.
              </p>
            </div>

            {/* Text slides */}
            <div className={styles.heroTextSlides} ref={heroTextSlidesRef}>
              <div
                className={styles.heroTextSlidesInner}
                ref={heroTextSlidesInnerRef}
              >
                <p className={styles.heroTextSlideItem}>
                  Distance feels different up here. Minutes pass like moments.
                </p>
                <p className={styles.heroTextSlideItem}>
                  We&rsquo;re bringing the wonder of flight to your commute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Scrolly Text Section — Large feature words
          ================================================================ */}
      <section className={styles.scrollySection} ref={scrollySectionRef}>
        <div className={styles.scrollyHeader}>
          <div
            className={styles.scrollyHeaderSticky}
            ref={scrollyHeaderStickyRef}
          >
            <div className={styles.scrollyTextWrapper}>
              <p className={styles.scrollyLabel}>Experience features</p>
              {SCROLLY_LINES.map((line, i) => (
                <div
                  key={i}
                  className={styles.scrollyTextLineWrapper}
                  ref={(el) => {
                    scrollyLineWrapperRefs.current[i] = el;
                  }}
                >
                  <div
                    className={styles.scrollyTextLineScale}
                    ref={(el) => {
                      scrollyLineScaleRefs.current[i] = el;
                    }}
                  >
                    <p className={styles.scrollyTextLine}>{line}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Slider Section — Scroll-driven feature image slider
          ================================================================ */}
      <section className={styles.sliderSection} ref={sliderSectionRef}>
        <div
          className={styles.sliderStickyWrapper}
          ref={sliderStickyWrapperRef}
        >
          <div className={styles.sliderSticky}>
            <div
              className={styles.slidesContainer}
              ref={sliderContainerRef}
            >
              {/* Image Slider */}
              <div className={styles.imageSlider}>
                <div className={styles.imageSliderMask}>
                  <div
                    className={styles.imageSliderInner}
                    ref={sliderInnerRef}
                  >
                    {SLIDER_IMAGES.map((slide, i) => (
                      <div
                        key={i}
                        className={styles.imageSliderScale}
                        ref={(el) => {
                          sliderImageScaleRefs.current[i] = el;
                        }}
                        style={
                          {
                            "--slide-index": i,
                          } as React.CSSProperties
                        }
                      >
                        <div className={styles.imageSliderZoom}>
                          <img
                            className={styles.imageSliderImage}
                            src={slide.src}
                            alt={slide.alt}
                            loading={i === 0 ? "eager" : "lazy"}
                          />
                        </div>
                        <span className={styles.figureCaption}>
                          {slide.figure}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text content for each slide (stacked, toggled by GSAP) */}
              <div className={styles.slideContentWrapper}>
                {SLIDER_IMAGES.map((slide, i) => (
                  <div
                    key={i}
                    className={`${styles.slideContent} ${i === 0 ? styles.slideContentVisible : ""}`}
                    ref={(el) => {
                      sliderTextRefs.current[i] = el;
                    }}
                  >
                    <h3 className={styles.slideTitle}>{slide.title}</h3>
                    <p className={styles.slideBody}>{slide.body}</p>
                  </div>
                ))}
              </div>

              {/* Pagination dots */}
              <div className={styles.pagination} ref={sliderPaginationRef}>
                {SLIDER_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.paginationItem} ${i === activeSlide ? styles.active : ""}`}
                    ref={(el) => {
                      sliderPaginationItemRefs.current[i] = el;
                    }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Map Section — Scroll-driven route comparison
          ================================================================ */}
      <section className={styles.mapSection} ref={mapSectionRef}>
        <div className={styles.mapStickyWrapper} ref={mapStickyWrapperRef}>
          <div className={styles.mapSticky}>
            <div className={styles.mapWrapper} ref={mapWrapperRef}>
              <div className={styles.mapContent} ref={mapContentRef}>
                {/* Title */}
                <h2 className={styles.mapTitle}>Be there in</h2>
                <div className={styles.mapTitleMinutes}>
                  <span className={styles.mapTitleMinutesNumber}>
                    {currentRoute.minutes}
                  </span>{" "}
                  minutes.
                </div>

                {/* Route selectors */}
                <div className={styles.mapRoutes}>
                  {MAP_ROUTES.map((route, i) => (
                    <div
                      key={route.id}
                      className={`${styles.mapRoute} ${i === activeRoute ? styles.active : ""}`}
                      ref={(el) => {
                        mapRouteRefs.current[i] = el;
                      }}
                    >
                      <div className={styles.mapRouteInner}>
                        <div className={styles.mapRouteFromTo}>
                          <span className={styles.mapRouteFrom}>
                            {route.from}
                          </span>
                          <span className={styles.mapRouteArrow} />
                          <span className={styles.mapRouteTo}>{route.to}</span>
                        </div>
                        <span className={styles.mapRouteDescription}>
                          {route.description}
                        </span>
                        <span className={styles.mapRouteCity}>
                          {route.city}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className={styles.mapDisclaimer}>
                  *Based on peak travel times in representative markets.
                </p>
              </div>

              {/* Map visualization */}
              <div className={styles.mapContainer}>
                <div className={styles.mapSvgDesktop}>
                  {/* NYC Map */}
                  <div
                    className={styles.mapNyc}
                    style={{ opacity: activeRoute === 0 ? 1 : 0 }}
                  >
                    <div className={styles.onMapContent}>
                      <div
                        className={styles.onMapFrom}
                        style={{
                          position: "absolute",
                          left: "15%",
                          top: "45%",
                        }}
                      >
                        <div className={styles.onMapFromDot} />
                        <span className={styles.onMapFromDotText}>
                          JFK Airport
                        </span>
                      </div>
                      <div
                        className={styles.onMapTo}
                        style={{
                          position: "absolute",
                          left: "45%",
                          top: "30%",
                        }}
                      >
                        <span className={styles.onMapMinutesNumber}>6</span>
                        <span className={styles.onMapMinutesText}>min</span>
                        <div className={styles.onMapToDot} />
                        <span className={styles.onMapToDotText}>Manhattan</span>
                      </div>
                    </div>
                  </div>

                  {/* Dubai Map */}
                  <div
                    className={styles.mapDubai}
                    style={{ opacity: activeRoute === 1 ? 1 : 0 }}
                  >
                    <div className={styles.onMapContent}>
                      <div
                        className={styles.onMapFrom}
                        style={{
                          position: "absolute",
                          left: "20%",
                          top: "40%",
                        }}
                      >
                        <div className={styles.onMapFromDot} />
                        <span className={styles.onMapFromDotText}>DXB</span>
                      </div>
                      <div
                        className={styles.onMapTo}
                        style={{
                          position: "absolute",
                          left: "55%",
                          top: "35%",
                        }}
                      >
                        <span className={styles.onMapMinutesNumber}>12</span>
                        <span className={styles.onMapMinutesText}>min</span>
                        <div className={styles.onMapToDot} />
                        <span className={styles.onMapToDotText}>
                          Palm Jumeirah
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* LA Map */}
                  <div
                    className={styles.mapLA}
                    style={{ opacity: activeRoute === 2 ? 1 : 0 }}
                  >
                    <div className={styles.onMapContent}>
                      <div
                        className={styles.onMapFrom}
                        style={{
                          position: "absolute",
                          left: "15%",
                          top: "50%",
                        }}
                      >
                        <div className={styles.onMapFromDot} />
                        <span className={styles.onMapFromDotText}>
                          LAX Airport
                        </span>
                      </div>
                      <div
                        className={styles.onMapTo}
                        style={{
                          position: "absolute",
                          left: "55%",
                          top: "30%",
                        }}
                      >
                        <span className={styles.onMapMinutesNumber}>12</span>
                        <span className={styles.onMapMinutesText}>min</span>
                        <div className={styles.onMapToDot} />
                        <span className={styles.onMapToDotText}>
                          Downtown LA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Partners Section — Scroll-driven tabbed partner categories
          ================================================================ */}
      <section className={styles.partnersSection} ref={partnersSectionRef}>
        <div
          className={styles.partnersStickyWrapper}
          ref={partnersStickyWrapperRef}
        >
          <div className={styles.partnersSticky}>
            <h2 className={styles.partnersTitle} ref={partnersTitleRef}>
              With partners like this,
              <span className={styles.partnersTitleHighlight}>
                there&rsquo;s nowhere to go but up.
              </span>
            </h2>

            <div className={styles.partnersWrapper} ref={partnersWrapperRef}>
              {/* Category tabs */}
              <div className={styles.partnersCategories}>
                {PARTNER_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.name}
                    className={`${styles.partnerCategory} ${i === activePartner ? styles.active : ""}`}
                    onClick={() => setActivePartner(i)}
                  >
                    <span className={styles.partnerCategoryDot} />
                    <span className={styles.partnerCategoryName}>
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Partner images stack */}
              <div className={styles.partnersContentOuter}>
                <div
                  className={styles.partnersImagesWrapper}
                  ref={partnersImagesWrapperRef}
                >
                  {PARTNER_CATEGORIES.map((cat, i) => (
                    <div
                      key={cat.name}
                      className={`${styles.partnersImageItem} ${i === activePartner ? styles.partnersImageItemActive : ""}`}
                    >
                      <img
                        className={styles.partnersContentImage}
                        src={cat.image}
                        alt={cat.name}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Content panels */}
                <div className={styles.partnersContent}>
                  {PARTNER_CATEGORIES.map((cat, i) => (
                    <div
                      key={cat.name}
                      className={`${styles.partnersContentItem} ${i === activePartner ? styles.active : ""}`}
                      ref={(el) => {
                        partnerContentItemRefs.current[i] = el;
                      }}
                    >
                      <p className={styles.partnersContentDescription}>
                        {cat.description}
                      </p>
                      {cat.logos.length > 0 && (
                        <div className={styles.partnersLogos}>
                          {cat.logos.map((logo) => (
                            <div
                              key={logo.name}
                              className={styles.partnerLogoWrapper}
                              data-partner-logo
                            >
                              <img
                                className={styles.partnerLogo}
                                src={logo.src}
                                alt={logo.name}
                                loading="lazy"
                              />
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
          Entry / CTA Section — SectionEntry with border-radius reveal
          ================================================================ */}
      <section className={styles.entrySection} ref={entrySectionRef}>
        <div className={styles.entryStickyWrapper}>
          <div className={styles.entrySticky} ref={entryInnerRef}>
            {/* Background image */}
            <div className={styles.entryMediaWrapper} ref={entryMediaRef}>
              <img
                className={`${styles.entryImage} ${styles.entryImageDesktop}`}
                src={ENTRY_IMAGE_DESKTOP}
                alt="The sky was never the limit."
                loading="lazy"
              />
              <img
                className={`${styles.entryImage} ${styles.entryImageMobile}`}
                src={ENTRY_IMAGE_MOBILE}
                alt="The sky was never the limit."
                loading="lazy"
              />
            </div>

            {/* Content overlay */}
            <div className={styles.entryContent} ref={entryContentRef}>
              <h2 className={styles.entryTitle}>
                The sky was never the limit.
              </h2>
              <a href="/technology" className={styles.entryButton}>
                Explore
              </a>
              <div className={styles.entryFeatures}>
                <span className={styles.entryFeature}>
                  Vertical take-off and landing
                </span>
                <span className={styles.entryFeature}>200 mph top speed</span>
                <span className={styles.entryFeature}>
                  Zero operating emissions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
