"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";

/* ---------------------------------------------------------------------------
   Constants — Sanity CDN base + image IDs
   --------------------------------------------------------------------------- */

const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";
const R2_CDN = "https://pub-c3f399360b0b4437b233f8cc0505582a.r2.dev/videos";

const HERO_VIDEO_DESKTOP = `${R2_CDN}/compressed-experience-desktop-r2.mp4`;
const HERO_VIDEO_MOBILE = `${R2_CDN}/compressed-experience-mobile-r2.mp4`;

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
      { name: "Uber", src: `${SANITY_CDN}/ae1c4e28f2e64113163a11688e9491eaced07734-76x45.svg` },
    ],
  },
  {
    name: "Airlines",
    image: `${SANITY_CDN}/63e7e05a6a30a30f436156a8cb269a9bf9462a41-1500x1892.jpg`,
    description:
      "Our partnerships with leading global airlines will integrate our air taxi service into existing aviation networks.",
    logos: [
      { name: "Delta", src: `${SANITY_CDN}/3668a86d6101741073f98b390a355183e6a7521a-480x180.png` },
      { name: "Virgin Atlantic", src: `${SANITY_CDN}/045aa354beeb7b18c26ecc75a71d274340c6da04-993x231.png` },
      { name: "ANA", src: `${SANITY_CDN}/5ba090dd2266b6ea85978ba2a62d482482a94740-92x45.svg` },
    ],
  },
  {
    name: "Infrastructure",
    image: `${SANITY_CDN}/0478fe6e587c2e8fb1ac677e0cf1ea3332083e6f-1500x1892.jpg`,
    description:
      "Together with key infrastructure partners, we\u2019re building the physical backbone needed for convenient everyday flight.",
    logos: [
      { name: "Skyports", src: `${SANITY_CDN}/703ef7455889d41a12b2750e5c0891426fa7b142-112x45.svg` },
      { name: "Vertiports by Atlantic", src: `${SANITY_CDN}/52a92a0193c660628053cbfcb60c24a21bf14608-102x45.svg` },
      { name: "Signature Flight Support", src: `${SANITY_CDN}/b01675566cfe8d9377f546874496f8b7afdd98b6-122x45.svg` },
      { name: "Jetex", src: `${SANITY_CDN}/f7e02666c110899b16a7df086f9b7daa1bb6e446-90x45.svg` },
      { name: "Clay Lacy", src: `${SANITY_CDN}/c0a0a44e718ac7c11a58fc941ee54231367bf8b0-122x45.svg` },
      { name: "Helo Holdings, Inc.", src: `${SANITY_CDN}/d3a3de92285f5ba0e49e504675e3475f63948e13-74x45.svg` },
    ],
  },
  {
    name: "R&D",
    image: `${SANITY_CDN}/af456faf9640de0bdd711f84e45d958cc636ab8a-1500x1892.jpg`,
    description:
      "We collaborate with pioneers in manufacturing and innovation to create a vertically integrated, world-class production ecosystem.",
    logos: [
      { name: "Toyota", src: `${SANITY_CDN}/e2e469f991528ca2c648fd9455142a6388ea2e16-122x45.svg` },
      { name: "NASA", src: `${SANITY_CDN}/fb4aa83f7c38f23fbc0fbbf56e0559534b9a9e7e-510x198.png` },
    ],
  },
  {
    name: "Technology",
    image: `${SANITY_CDN}/e139fbac7c088eda6c77b752cea28f4ca66fa420-1500x1892.png`,
    description:
      "Our aviation technology partnerships power the systems that support navigation, autonomy, pilot training, and operational excellence.",
    logos: [
      { name: "Garmin", src: `${SANITY_CDN}/65c47bff04766eeb14a3e794cbfcf3939c3d0f23-112x45.svg` },
      { name: "CAE", src: `${SANITY_CDN}/41e28c69c10d417477200ee5be7f29fa01429fc3-66x45.svg` },
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeRoute, setActiveRoute] = useState(0);
  const [activePartner, setActivePartner] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroVideoMobileRef = useRef<HTMLVideoElement>(null);

  /* Slide navigation */
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, []);

  /* Ensure hero videos play */
  useEffect(() => {
    const playVideo = (video: HTMLVideoElement | null) => {
      if (video) {
        video.play().catch(() => {
          // Autoplay was prevented — that's okay
        });
      }
    };
    playVideo(heroVideoRef.current);
    playVideo(heroVideoMobileRef.current);
  }, []);

  /* Auto-advance slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % SLIDER_IMAGES.length;
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(-${next * 100}%)`;
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentRoute = MAP_ROUTES[activeRoute];

  return (
    <main className={styles.pageWrapper}>
      {/* ================================================================
          Hero Section — Full-screen video with title overlay
          ================================================================ */}
      <section className={styles.heroSection}>
        <div className={styles.heroStickyWrapper}>
          <div className={styles.heroSticky}>
            {/* Background Video */}
            <div className={styles.heroMediaWrapper}>
              <video
                ref={heroVideoRef}
                className={`${styles.heroVideo} ${styles.heroVideoDesktop}`}
                src={HERO_VIDEO_DESKTOP}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              <video
                ref={heroVideoMobileRef}
                className={`${styles.heroVideo} ${styles.heroVideoMobile}`}
                src={HERO_VIDEO_MOBILE}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>

            {/* Title */}
            <div className={styles.heroTitle}>
              <div className={styles.heroTitleDesktop}>
                <h1 className={styles.heroTitleText}>Take the high road</h1>
              </div>
              <div className={styles.heroTitleMobile}>
                <h1 className={styles.heroTitleText}>Take the high road</h1>
              </div>
            </div>

            {/* Subtitle */}
            <div className={styles.heroSubtitle}>
              <p className={styles.heroSubtitleText}>
                Your city, elevated. Lift off and leave the gridlock and your stress behind.
              </p>
            </div>

            {/* Text slides */}
            <div className={styles.heroTextSlides}>
              <div className={styles.heroTextSlidesInner}>
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
      <section className={styles.scrollySection}>
        <div className={styles.scrollyHeader}>
          <div className={styles.scrollyHeaderSticky}>
            <div className={styles.scrollyTextWrapper}>
              <p className={styles.scrollyLabel}>Experience features</p>
              {SCROLLY_LINES.map((line, i) => (
                <div key={i} className={styles.scrollyTextLineWrapper}>
                  <div className={styles.scrollyTextLineScale}>
                    <p className={styles.scrollyTextLine}>{line}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Slider Section — Feature image slider with descriptions
          ================================================================ */}
      <section className={styles.sliderSection}>
        <div className={styles.slidesContainer}>
          {/* Image Slider */}
          <div className={styles.imageSlider}>
            <div className={styles.imageSliderMask}>
              <div
                className={styles.imageSliderInner}
                ref={sliderRef}
              >
                {SLIDER_IMAGES.map((slide, i) => (
                  <div key={i} className={styles.imageSliderScale}>
                    <div className={styles.imageSliderZoom}>
                      <img
                        className={styles.imageSliderImage}
                        src={slide.src}
                        alt={slide.alt}
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    {/* Figure caption overlay */}
                    <span className={styles.figureCaption}>{slide.figure}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text content for active slide */}
          <div className={styles.slideContent}>
            <h3 className={styles.slideTitle}>
              {SLIDER_IMAGES[activeSlide].title}
            </h3>
            <p className={styles.slideBody}>
              {SLIDER_IMAGES[activeSlide].body}
            </p>
          </div>

          {/* Pagination dots */}
          <div className={styles.pagination}>
            {SLIDER_IMAGES.map((_, i) => (
              <button
                key={i}
                className={`${styles.paginationItem} ${i === activeSlide ? styles.active : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          Map Section — Route comparison with city maps
          ================================================================ */}
      <section className={styles.mapSection}>
        <div className={styles.mapWrapper}>
          <div className={styles.mapContent}>
            {/* Title */}
            <h2 className={styles.mapTitle}>
              Be there in
            </h2>
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
                  onClick={() => setActiveRoute(i)}
                >
                  <div className={styles.mapRouteInner}>
                    <div className={styles.mapRouteFromTo}>
                      <span className={styles.mapRouteFrom}>{route.from}</span>
                      <span className={styles.mapRouteArrow} />
                      <span className={styles.mapRouteTo}>{route.to}</span>
                    </div>
                    <span className={styles.mapRouteDescription}>
                      {route.description}
                    </span>
                    <span className={styles.mapRouteCity}>{route.city}</span>
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
                  <div className={styles.onMapFrom} style={{ position: "absolute", left: "15%", top: "45%" }}>
                    <div className={styles.onMapFromDot} />
                    <span className={styles.onMapFromDotText}>JFK Airport</span>
                  </div>
                  <div className={styles.onMapTo} style={{ position: "absolute", left: "45%", top: "30%" }}>
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
                  <div className={styles.onMapFrom} style={{ position: "absolute", left: "20%", top: "40%" }}>
                    <div className={styles.onMapFromDot} />
                    <span className={styles.onMapFromDotText}>DXB</span>
                  </div>
                  <div className={styles.onMapTo} style={{ position: "absolute", left: "55%", top: "35%" }}>
                    <span className={styles.onMapMinutesNumber}>12</span>
                    <span className={styles.onMapMinutesText}>min</span>
                    <div className={styles.onMapToDot} />
                    <span className={styles.onMapToDotText}>Palm Jumeirah</span>
                  </div>
                </div>
              </div>

              {/* LA Map */}
              <div
                className={styles.mapLA}
                style={{ opacity: activeRoute === 2 ? 1 : 0 }}
              >
                <div className={styles.onMapContent}>
                  <div className={styles.onMapFrom} style={{ position: "absolute", left: "15%", top: "50%" }}>
                    <div className={styles.onMapFromDot} />
                    <span className={styles.onMapFromDotText}>LAX Airport</span>
                  </div>
                  <div className={styles.onMapTo} style={{ position: "absolute", left: "55%", top: "30%" }}>
                    <span className={styles.onMapMinutesNumber}>12</span>
                    <span className={styles.onMapMinutesText}>min</span>
                    <div className={styles.onMapToDot} />
                    <span className={styles.onMapToDotText}>Downtown LA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Partners Section — Tabbed partner categories
          ================================================================ */}
      <section className={styles.partnersSection}>
        <h2 className={styles.partnersTitle}>
          With partners like this,
          <span className={styles.partnersTitleHighlight}>
            there&rsquo;s nowhere to go but up.
          </span>
        </h2>

        <div className={styles.partnersWrapper}>
          {/* Category tabs */}
          <div className={styles.partnersCategories}>
            {PARTNER_CATEGORIES.map((cat, i) => (
              <button
                key={cat.name}
                className={`${styles.partnerCategory} ${i === activePartner ? styles.active : ""}`}
                onClick={() => setActivePartner(i)}
              >
                <span className={styles.partnerCategoryDot} />
                <span className={styles.partnerCategoryName}>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Content panels */}
          <div className={styles.partnersContent}>
            {PARTNER_CATEGORIES.map((cat, i) => (
              <div
                key={cat.name}
                className={`${styles.partnersContentItem} ${i === activePartner ? styles.active : ""}`}
              >
                {/* Category hero image */}
                <div className={styles.partnersContentImageWrapper}>
                  <img
                    className={styles.partnersContentImage}
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                  />
                </div>

                {/* Description */}
                <p className={styles.partnersContentDescription}>
                  {cat.description}
                </p>

                {/* Partner logos */}
                {cat.logos.length > 0 && (
                  <div className={styles.partnersLogos}>
                    {cat.logos.map((logo) => (
                      <div key={logo.name} className={styles.partnerLogoWrapper}>
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
      </section>

      {/* ================================================================
          Entry / CTA Section — Full-screen image with call to action
          ================================================================ */}
      <section className={styles.entrySection}>
        <div className={styles.entryStickyWrapper}>
          <div className={styles.entrySticky}>
            {/* Background image */}
            <div className={styles.entryMediaWrapper}>
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
            <div className={styles.entryContent}>
              <h2 className={styles.entryTitle}>
                The sky was never the limit.
              </h2>
              <a href="/technology" className={styles.entryButton}>
                Explore
              </a>
              <div className={styles.entryFeatures}>
                <span className={styles.entryFeature}>Vertical take-off and landing</span>
                <span className={styles.entryFeature}>200 mph top speed</span>
                <span className={styles.entryFeature}>Zero operating emissions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
