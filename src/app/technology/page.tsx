"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./page.module.css";

/* ---------------------------------------------------------------------------
   Constants — CDN paths
   --------------------------------------------------------------------------- */

const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";
const R2_CDN = "https://pub-c3f399360b0b4437b233f8cc0505582a.r2.dev/videos";

const HERO_VIDEO_DESKTOP = `${R2_CDN}/compressed-technology-intro-desktop.mp4`;
const HERO_VIDEO_MOBILE = `${R2_CDN}/compressed-technology-intro-mobile.mp4`;

/* ---------------------------------------------------------------------------
   Data — Safety slides
   --------------------------------------------------------------------------- */

const SAFETY_SLIDES = [
  {
    src: `${SANITY_CDN}/4cdce047e61c99dde940e537e57ce1a3ecd7590e-2001x2003.jpg`,
    alt: "Nearly a decade of certification work with FAA",
    tag: "Safety",
    title: "Nearly a decade of certification work with FAA",
    body: "Our aircraft is in the final stage of the same design certification process that is used to certify traditional airplanes and helicopters.",
  },
  {
    src: `${SANITY_CDN}/9dfd136df938212acbf21454c7ea04f86bc597bd-2001x2003.jpg`,
    alt: "Thousands of testing hours for each part",
    tag: "Safety",
    title: "Thousands of testing hours for each part",
    body: "We rigorously test every aspect of our aircraft\u2019s hardware and software, from the smallest piece of carbon fiber to fully integrated systems.",
  },
  {
    src: `${SANITY_CDN}/a0c8080aa19771444f92d41cd87410246c548fce-2048x2048.jpg`,
    alt: "Redundancy built in",
    tag: "Safety",
    title: "Redundancy built in",
    body: "We designed our aircraft\u2019s powertrain, flight controls, and electronics to be fully redundant, with six dual-wound propulsion motors, four battery packs, a triple-redundant flight control computer and dual critical actuation systems.",
  },
  {
    src: `${SANITY_CDN}/e681f1aa1760df0457a47f6f2041cef58d48fb0a-2001x2003.jpg`,
    alt: "Intuitive piloting with integrated controls",
    tag: "Safety",
    title: "Intuitive piloting with integrated controls",
    body: "We\u2019ve revolutionized pilot controls, to make them simple and intuitive, allowing our fully-qualified pilots to focus on what matters most.",
  },
];

/* ---------------------------------------------------------------------------
   Data — Engineering highlights
   --------------------------------------------------------------------------- */

const ENGINEERING_HIGHLIGHTS = [
  {
    src: `${SANITY_CDN}/fe3af7129d304499bff4bdf9bea97de672de205f-3240x1929.png`,
    alt: "Aerospace manufacturing",
    text: "We\u2019re redefining aerospace manufacturing  with advanced techniques and innovative materials. Our titanium-aluminum-carbon fiber airframe and robotic 3D printing deliver exceptional strength, precision, and efficiency.",
  },
  {
    src: `${SANITY_CDN}/9da8f76da2593a04f95db82831af28e07ff1dc16-2160x1286.jpg`,
    alt: "Modular battery",
    text: "Our lightweight, modular battery  has four independent packs with fault isolation. System-wide redundancy keeps the aircraft safely airborne even in the rare event of a component failure.",
  },
  {
    src: `${SANITY_CDN}/6bbca106ad4824183f874e8e780dcbb201d89ee2-3240x1929.png`,
    alt: "Tilting propeller system",
    text: "Our tilting propeller system  blends VTOL capability with high-speed, fixed-wing cruise. It lifts off from any vertiport, no runway required, while delivering best-in-class lift-to-drag efficiency for exceptional range.",
  },
  {
    src: `${SANITY_CDN}/197b82ad591341921f04e6d6e1f3cfcb6b1da8da-4000x2667.jpg`,
    alt: "VTOL aerodynamics",
    text: "VTOL aerodynamics  are complex, and our team has spent 15+ years perfecting advanced tools, simulations, and test methods. We use internally developed proprietary simulation tools combined with testing in NASA\u2019s largest wind tunnel.",
  },
  {
    src: `${SANITY_CDN}/0577810349fc0c17f1e5fa843ad443ecf74e20ef-3240x1929.png`,
    alt: "Software ecosystem",
    text: "Our software is developed in-house and integrated in collaboration with industry-leading partners, ensuring a seamless, end-to-end system. User, operational, and pilot tools connect as one ecosystem, improving efficiency, safety, and the flight experience.",
  },
  {
    src: `${SANITY_CDN}/b6f7485c5606d4e89b503b1e3780544dd5fdaeb6-3240x1929.png`,
    alt: "Flight testing",
    text: "All flight testing  is done in-house with a safety-first approach focused on pilot confidence and system reliability. It includes digital simulators, hardware-in-the-loop, remote-controlled, and fully piloted flights.",
  },
  {
    src: `${SANITY_CDN}/626cb6719b69a16e2573c40c3d5547fde4dc4000-3240x1929.png`,
    alt: "Whirly Bird test rig",
    text: "To test our propulsion systems,  we built the \u201cWhirly Bird,\u201d a test rig that simulates beyond flight conditions, letting us gather performance insights rapidly without flying a full aircraft.",
  },
  {
    src: `${SANITY_CDN}/f72ab8923545b9455d10d55147f154168ad8bb31-3240x1929.png`,
    alt: "Environmental testing",
    text: "Our environmental testing  combines simulation and real-world conditions in state-of-the-art facilities to validate durability and performance across temperature, humidity, altitude, vibration, RF exposure, salt, lightning, loads, and more.",
  },
];

/* ---------------------------------------------------------------------------
   Data — Engineering process
   --------------------------------------------------------------------------- */

const ENGINEERING_PROCESS = [
  {
    label: "4.1",
    title: "Performance Engineering",
    text: "We\u2019re delivering best-in-class performance through ultra-lightweight, highly optimized design. From airframes and actuators to powertrains and electronics, our components are engineered in-house with a relentless focus on innovation.",
  },
  {
    label: "4.2",
    title: "Equipment-level Testing",
    text: "We conduct equipment-level testing at speed, with the capability to support the full spectrum of development and certification testing. Our state-of-the-art labs enable rapid iteration and validation across systems.",
  },
  {
    label: "4.3",
    title: "Precision and Quality",
    text: "Our manufacturing process is designed for scalability without compromising precision or quality \u2014 made possible through close collaboration with Toyota\u2019s world-renowned engineering and production systems.",
  },
  {
    label: "4.4",
    title: "An American Company",
    text: "Designed, engineered, built and tested in America.",
  },
];

/* ---------------------------------------------------------------------------
   Data — Specs
   --------------------------------------------------------------------------- */

const SPECS_SUMMARY = [
  { label: "Aircraft type", value: "Powered-lift Aircraft" },
  { label: "Seating capacity", value: "1 pilot + 4 passengers" },
  { label: "Luggage capacity", value: "4 carry-on bags" },
  {
    label: "Propulsion",
    value: "6 electric tilt-propeller units with 5 blades each",
  },
  { label: "Power source", value: "4 battery packs" },
  {
    label: "Battery system",
    value: "High-density, lithium-ion polymer batteries",
  },
  { label: "Flight controls", value: "Fly-by-wire unified flight control" },
  { label: "Airframe", value: "Carbon-fiber composite" },
];

const SPECS_PERFORMANCE = [
  { label: "Speed", value: "Up to 200 mph (174 knots)" },
  { label: "Max weight", value: "2400 kg, 5300 lbs (gross)" },
  { label: "Service ceiling", value: "10,000 ft (3048 m)" },
  {
    label: "Noise footprint",
    value:
      "45dBA at Cruise, from 1640ft (500m)\n65dBA at Landing, from 330ft (100m)",
  },
];

const SPECS_FLEET = [
  { label: "Data as of", value: "December 2025" },
  { label: "Flights", value: "2,600+" },
  { label: "Miles flown", value: "50,000+" },
];

const SPECS_TABS = ["Summary", "Performance", "Dimensions", "Fleet"];

const SPECS_FIGURES = [
  "Fig. 6.1 \u2014 Overhead view of aircraft",
  "Fig. 6.2 \u2014 Direct drive motor breakdown",
  "Fig. 6.3 \u2014 Side view diagram",
  "Fig. 6.5 \u2014 Skyport diagram",
];

/* ==========================================================================
   Rive Component (lazy wrapper)
   ========================================================================== */

function RiveViewer({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        const rive = await import("@rive-app/react-webgl2");
        // For canvas-based rendering we just show the placeholder
        // Full Rive integration would use the useRive hook
        setLoaded(true);
      } catch {
        // Rive not available — show placeholder
      }
    })();

    return () => {
      cleanup?.();
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.specsRiveCanvas}
      style={{ background: loaded ? "transparent" : "rgba(0,0,0,0.02)" }}
    />
  );
}

/* ==========================================================================
   Technology Page Component
   ========================================================================== */

export default function TechnologyPage() {
  const [activeMode, setActiveMode] = useState(0); // 0 = Cruise, 1 = Vertical
  const [activeSafetySlide, setActiveSafetySlide] = useState(0);
  const [activeSpecsTab, setActiveSpecsTab] = useState(0);
  const [activeDimensionView, setActiveDimensionView] = useState(0); // 0 = Side, 1 = Front
  const safetySliderRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroVideoMobileRef = useRef<HTMLVideoElement>(null);

  /* Safety slide navigation */
  const goToSafetySlide = useCallback((index: number) => {
    setActiveSafetySlide(index);
    if (safetySliderRef.current) {
      safetySliderRef.current.style.transform = `translateX(-${index * 100}%)`;
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

  /* Auto-advance safety slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSafetySlide((prev) => {
        const next = (prev + 1) % SAFETY_SLIDES.length;
        if (safetySliderRef.current) {
          safetySliderRef.current.style.transform = `translateX(-${next * 100}%)`;
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  /* Mode data */
  const MODES = [
    {
      name: "Cruise Mode",
      label: "Propeller rotation",
      stats: [
        { label: "Position", value: "Horizontal" },
        { label: "Rotation", value: "0\u00BA angle" },
        { label: "Transition Speed", value: "45-90 knots" },
      ],
      description:
        "In the horizontal position, our propellers allow for efficient and fast cruising during wingborne flight.",
    },
    {
      name: "Vertical Mode",
      label: "Propeller rotation",
      stats: [
        { label: "Position", value: "Vertical" },
        { label: "Rotation", value: "90\u00BA angle" },
        { label: "Transition Speed", value: "45-90 knots" },
      ],
      description:
        "In the vertical position, our propellers generate upward thrust for takeoff and landing, enabling stable, helicopter-like flight in tight urban spaces.",
    },
  ];

  const currentMode = MODES[activeMode];

  /* Rive file paths for specs */
  const RIVE_FILES = {
    side: "/rives/joby_rive_specs-diagram_side_desktop.riv",
    front: "/rives/joby_rive_specs-diagram_back_desktop.riv",
    performance: "/rives/joby_rive_specs-diagram_performance_desktop.riv",
  };

  return (
    <main className={styles.pageWrapper}>
      {/* ================================================================
          Hero Section
          ================================================================ */}
      <section data-section="hero" className={styles.heroSection}>
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

            {/* Content overlay */}
            <div className={styles.heroContent}>
              <div className={styles.heroTitle}>
                <h1 className={styles.heroTitleText}>
                  Cruise, controlled.
                </h1>
              </div>

              <p className={styles.heroBody}>
                Technology that makes the dream possible
              </p>

              <div className={styles.heroTagline}>
                <span className={styles.heroTaglineLeft}>
                  Electric Vertical Take-off<br />and Landing (eVTOL)
                </span>
                <span className={styles.heroTaglineRight}>Joby Aircraft</span>
              </div>

              <div className={styles.heroTextBlocks}>
                <div className={styles.heroTextBlock}>
                  <p className={styles.heroTextBlockTitle}>Passengers</p>
                  <p className={styles.heroTextBlockSubtitle}>
                    Pilot + 4 passengers
                  </p>
                </div>
                <div className={styles.heroTextBlock}>
                  <p className={styles.heroTextBlockTitle}>Speed</p>
                  <p className={styles.heroTextBlockSubtitle}>Up to 200 mph</p>
                </div>
                <div className={styles.heroTextBlock}>
                  <p className={styles.heroTextBlockTitle}>Sound</p>
                  <p className={styles.heroTextBlockSubtitle}>
                    45dBA in cruise
                  </p>
                </div>
                <div className={styles.heroTextBlock}>
                  <p className={styles.heroTextBlockTitle}>All-electric</p>
                  <p className={styles.heroTextBlockSubtitle}>
                    Zero operating emissions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Aircraft Section
          ================================================================ */}
      <section className={styles.aircraftSection}>
        <div className={styles.aircraftScroller}>
          {/* --- Intro --- */}
          <div className={styles.aircraftIntro}>
            <div className={styles.aircraftIntroFixed}>
              {/* Aircraft image */}
              <div className={styles.aircraftIntroMediaDesktop}>
                <img
                  src={`${SANITY_CDN}/efdaf237ec499c9731dd89205127792fbb20bf8f-2122x1194.png`}
                  alt="Safely soaring skyward"
                  className={styles.aircraftIntroCanvas}
                  loading="lazy"
                />
              </div>
              <div className={styles.aircraftIntroMediaMobile}>
                <img
                  src={`${SANITY_CDN}/efdaf237ec499c9731dd89205127792fbb20bf8f-2122x1194.png`}
                  alt="Safely soaring skyward"
                  className={styles.aircraftIntroCanvas}
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.aircraftNumberedTitle}>
              <span className={styles.aircraftNumberedNumber}>1</span>
              <h2 className={styles.aircraftTitle}>Joby Aircraft</h2>
            </div>

            <div className={styles.aircraftTextBlocks}>
              <div className={styles.aircraftTextBlock}>
                <h3 className={styles.aircraftTextBlockTitle}>
                  Fast, Flexible Travel
                </h3>
                <p className={styles.aircraftTextBlockText}>
                  Taking off and landing vertically allows us to get you closer
                  to your destination than ever before.
                </p>
              </div>
              <div className={styles.aircraftTextBlock}>
                <h3 className={styles.aircraftTextBlockTitle}>
                  Quiet by design
                </h3>
                <p className={styles.aircraftTextBlockText}>
                  We designed our acoustic footprint to make our aircraft as
                  quiet as the wind in the trees for city-friendly travel.
                </p>
              </div>
              <div className={styles.aircraftTextBlock}>
                <h3 className={styles.aircraftTextBlockTitle}>
                  Zero operating emissions
                </h3>
                <p className={styles.aircraftTextBlockText}>
                  All-electric and energy-efficient, making clean, everyday
                  flight a reality.
                </p>
              </div>
              <div className={styles.aircraftTextBlock}>
                <h3 className={styles.aircraftTextBlockTitle}>
                  Six electric motors
                </h3>
                <p className={styles.aircraftTextBlockText}>
                  Six propellers, four battery packs and a triple-redundant
                  flight computer to enhance safety in the skies.
                </p>
              </div>
            </div>
          </div>

          {/* --- Flight Modes --- */}
          <div className={styles.aircraftModes}>
            <div className={styles.aircraftModesSticky}>
              <p className={styles.aircraftModesLabel}>Propeller rotation</p>

              <div className={styles.aircraftModeSelectors}>
                {MODES.map((mode, i) => (
                  <button
                    key={mode.name}
                    className={`${styles.aircraftModeSelector} ${i === activeMode ? styles.active : ""}`}
                    onClick={() => setActiveMode(i)}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>

              {MODES.map((mode, i) => (
                <div
                  key={mode.name}
                  className={`${styles.aircraftModeContent} ${i === activeMode ? styles.active : ""}`}
                >
                  <div className={styles.aircraftModeStats}>
                    {mode.stats.map((stat) => (
                      <div key={stat.label} className={styles.aircraftModeStat}>
                        <span className={styles.aircraftModeStatLabel}>
                          {stat.label}
                        </span>
                        <span className={styles.aircraftModeStatValue}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className={styles.aircraftModeDescription}>
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Safety Slider Section
          ================================================================ */}
      <section className={styles.safetySection}>
        <div className={styles.safetyHeader}>
          <div className={styles.safetyNumberedTitle}>
            <span className={styles.safetyNumberedNumber}>2</span>
            <h2 className={styles.safetyTitle}>Safely soaring skyward</h2>
          </div>
          <p className={styles.safetyLabel}>Safety</p>
        </div>

        <div className={styles.safetySlidesContainer}>
          {/* Image Slider */}
          <div className={styles.safetyImageSlider}>
            <div className={styles.safetyImageSliderMask}>
              <div
                className={styles.safetyImageSliderInner}
                ref={safetySliderRef}
              >
                {SAFETY_SLIDES.map((slide, i) => (
                  <div key={i} className={styles.safetyImageSliderScale}>
                    <img
                      className={styles.safetySlideImage}
                      src={slide.src}
                      alt={slide.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <span className={styles.safetySlideTag}>{slide.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className={styles.safetySlideContent}>
            <h3 className={styles.safetySlideTitle}>
              {SAFETY_SLIDES[activeSafetySlide].title}
            </h3>
            <p className={styles.safetySlideBody}>
              {SAFETY_SLIDES[activeSafetySlide].body}
            </p>
          </div>

          {/* Pagination */}
          <div className={styles.safetyPagination}>
            {SAFETY_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`${styles.safetyPaginationItem} ${i === activeSafetySlide ? styles.active : ""}`}
                onClick={() => goToSafetySlide(i)}
                aria-label={`Go to safety slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          Sound Section
          ================================================================ */}
      <section className={styles.soundSection}>
        <div className={styles.soundWrapper}>
          <div className={styles.soundNumberedTitle}>
            <span className={styles.soundNumberedNumber}>3</span>
            <h2 className={styles.soundTitle}>Designed to be quiet</h2>
          </div>

          {/* Video placeholder */}
          <div className={styles.soundVideoWrapper}>
            <div className={styles.soundVideoInner}>
              <img
                src={`${SANITY_CDN}/c5428bf864f113e61212b8860974f0a73f672cf4-2048x1366.jpg`}
                alt="Sound design"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1.2rem",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Sound info blocks */}
          <div className={styles.soundPropellerWrapper}>
            <div className={styles.soundInfoBlock}>
              <p className={styles.soundInfoLabel}>Propeller Design</p>
              <p className={styles.soundInfoText}>
                Blade tip geometry was designed to reduce vortex-interaction
                noise in transition
              </p>
            </div>
            <div className={styles.soundInfoBlock}>
              <p className={styles.soundInfoLabel}>Sound Waves</p>
              <p className={styles.soundInfoText}>
                Low-intensity sound waves in cruise let our aircraft fade into
                daily noise
              </p>
            </div>
          </div>

          <p className={styles.soundDescription}>
            We&rsquo;ve spent more than a decade ensuring our aircraft is able to
            blend into the background as it moves around our cities.
          </p>

          <a href="#" className={styles.soundCta}>
            Hear for yourself
          </a>

          <div className={styles.soundBottomContent}>
            <span className={styles.soundBottomLabel}>
              World-class facility
            </span>
            <span className={styles.soundBottomLocation}>Marina, CA</span>
          </div>
        </div>
      </section>

      {/* ================================================================
          Engineering Section
          ================================================================ */}
      <section className={styles.engineeringSection}>
        <div className={styles.engineeringHeader}>
          <div className={styles.engineeringNumberedTitle}>
            <span className={styles.engineeringNumberedNumber}>4</span>
            <h2 className={styles.engineeringTitle}>Making Dreams Take Flight</h2>
          </div>

          <div className={styles.engineeringIntro}>
            <p className={styles.engineeringIntroLeft}>
              We design, engineer and manufacture our critical aircraft
              components in-house. That means almost every detail, seen and
              unseen, is built and verified by our own team.
            </p>
            <p className={styles.engineeringIntroRight}>
              Our manufacturing process is designed to maximize precision and
              quality control, informed by Toyota&rsquo;s legendary expertise.
            </p>
          </div>

          <div className={styles.engineeringMediaLabels}>
            <span className={styles.engineeringMediaLabel}>
              Airframe Autoclave
            </span>
            <span className={styles.engineeringMediaLabel}>Marina, CA</span>
          </div>
        </div>

        {/* Engineering media image */}
        <div className={styles.engineeringMediaTransition}>
          <img
            src={`${SANITY_CDN}/c5428bf864f113e61212b8860974f0a73f672cf4-2048x1366.jpg`}
            alt="Engineering facility"
            className={styles.engineeringMediaImage}
            loading="lazy"
          />
        </div>

        {/* Process sub-section */}
        <div className={styles.engineeringProcess}>
          <p className={styles.engineeringProcessLabel}>
            Process &amp; Capabilities
          </p>
          <h3 className={styles.engineeringProcessTitle}>
            Joby is a vertically-integrated company, meaning we design,
            engineer, test and manufacture our critical aircraft components
            in-house.
          </h3>

          <div className={styles.engineeringProcessContents}>
            {ENGINEERING_PROCESS.map((item, i) => (
              <div key={i} className={styles.engineeringProcessItem}>
                <span className={styles.engineeringProcessItemLabel}>
                  {item.label}
                </span>
                <div>
                  <h4 className={styles.engineeringProcessItemTitle}>
                    {item.title}
                  </h4>
                  <p className={styles.engineeringProcessItemText}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights sub-section */}
        <div className={styles.engineeringHighlights}>
          <p className={styles.engineeringHighlightsLabel}>
            Engineering Highlights
          </p>

          <div className={styles.engineeringHighlightsGrid}>
            {ENGINEERING_HIGHLIGHTS.map((item, i) => (
              <div key={i} className={styles.engineeringHighlightItem}>
                <img
                  className={styles.engineeringHighlightImage}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
                <div className={styles.engineeringHighlightOverlay}>
                  <p className={styles.engineeringHighlightText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          Sustainability Section
          ================================================================ */}
      <section className={styles.sustainabilitySection}>
        <div className={styles.sustainabilityWrapper}>
          <div className={styles.sustainabilityNumberedTitle}>
            <span className={styles.sustainabilityNumberedNumber}>5</span>
            <h2 className={styles.sustainabilityTitle}>
              Nothing but clear<br />skies ahead.
            </h2>
          </div>

          {/* Background image */}
          <div className={styles.sustainabilityBackground}>
            <img
              className={`${styles.sustainabilityBackgroundImage} ${styles.sustainabilityBackgroundImageDesktop}`}
              src={`${SANITY_CDN}/aa0a93fdc1c9737c4fc33c3238c4d066ecb303d9-2500x5938.jpg`}
              alt="Nothing but clear skies ahead."
              loading="lazy"
            />
            <img
              className={`${styles.sustainabilityBackgroundImage} ${styles.sustainabilityBackgroundImageMobile}`}
              src={`${SANITY_CDN}/bf73d645074cc86c1fce412d7429a88ca0e2bfdc-1000x3946.jpg`}
              alt="Nothing but clear skies ahead."
              loading="lazy"
            />
          </div>

          {/* Sustainability slides */}
          <div className={styles.sustainabilitySlides}>
            {/* 5.1 — Operating emissions */}
            <div className={styles.sustainabilitySlide}>
              <span className={styles.sustainabilitySlideLabel}>5.1</span>
              <h3 className={styles.sustainabilitySlideTitle}>
                Operating emissions
              </h3>
              <p className={styles.sustainabilityBigNumberReduced}>Zero</p>
              <p className={styles.sustainabilitySlideSubtitle}>
                operating emissions during flight
              </p>
            </div>

            {/* 5.2 — Joby vs. helicopter or car */}
            <div className={styles.sustainabilitySlide}>
              <span className={styles.sustainabilitySlideLabel}>5.2</span>
              <h3 className={styles.sustainabilitySlideTitle}>
                Joby vs. helicopter or car
              </h3>
              <p className={styles.sustainabilityBigNumber}>90%</p>
              <p className={styles.sustainabilitySlideSubtitle}>
                fewer emissions than a helicopter
              </p>
              <p className={styles.sustainabilityBigNumber}>40%</p>
              <p className={styles.sustainabilitySlideSubtitle}>
                fewer emissions than the average car
              </p>
              <p className={styles.sustainabilitySlideDescription}>
                Based on a trip distance of 37 miles in the Los Angeles area.
                Average car is defined as a gas-powered combustion vehicle.
                Emissions account for both well-to-tank and tank-to-well
                (upstream and operating emissions).
              </p>
            </div>

            {/* 5.3 — Manufacturing sustainability */}
            <div className={styles.sustainabilitySlide}>
              <span className={styles.sustainabilitySlideLabel}>5.3</span>
              <h3 className={styles.sustainabilitySlideTitle}>
                Manufacturing sustainability
              </h3>
              <p className={styles.sustainabilityBigNumber}>84%</p>
              <p className={styles.sustainabilitySlideSubtitle}>
                of electricity powering our primary facilities came from
                renewable sources in 2024
              </p>
            </div>
          </div>

          <p className={styles.sustainabilityEndText}>
            We are proud to lead the way in developing electric air taxis for
            quieter, cleaner skies for all.
          </p>

          <a href="#" className={styles.sustainabilityCta}>
            Joby Impact Report 2024
          </a>
        </div>
      </section>

      {/* ================================================================
          Specs Section
          ================================================================ */}
      <section className={styles.specsSection}>
        <div className={styles.specsWrapper}>
          <div className={styles.specsNumberedTitle}>
            <span className={styles.specsNumberedNumber}>6</span>
            <h2 className={styles.specsTitle}>Joby Aircraft Specifications</h2>
          </div>

          <p className={styles.specsSubtitle}>
            A technical overview of the Joby Aircraft, detailing core
            specifications, performance capabilities, propulsion architecture,
            and overall system design.
          </p>

          {/* Tab Navigation */}
          <div className={styles.specsTabs}>
            {SPECS_TABS.map((tab, i) => (
              <button
                key={tab}
                className={`${styles.specsTab} ${i === activeSpecsTab ? styles.active : ""}`}
                onClick={() => setActiveSpecsTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={styles.specsContent}>
            {/* Summary Panel */}
            <div
              className={`${styles.specsPanel} ${activeSpecsTab === 0 ? styles.active : ""}`}
            >
              <div className={styles.specsSummary}>
                <div className={styles.specsSummaryLeft}>
                  <div className={styles.specsStatGrid}>
                    {SPECS_SUMMARY.map((stat) => (
                      <div key={stat.label} className={styles.specsStat}>
                        <span className={styles.specsStatLabel}>
                          {stat.label}
                        </span>
                        <span className={styles.specsStatValue}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.specsSummaryRight}>
                  <div className={styles.specsRiveContainer}>
                    <RiveViewer src={RIVE_FILES.side} />
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Panel */}
            <div
              className={`${styles.specsPanel} ${activeSpecsTab === 1 ? styles.active : ""}`}
            >
              <div className={styles.specsPerformance}>
                <div className={styles.specsPerformanceLeft}>
                  <div className={styles.specsStatGrid}>
                    {SPECS_PERFORMANCE.map((stat) => (
                      <div key={stat.label} className={styles.specsStat}>
                        <span className={styles.specsStatLabel}>
                          {stat.label}
                        </span>
                        <span className={styles.specsStatValue}>
                          {stat.value.split("\n").map((line, j) => (
                            <span key={j}>
                              {line}
                              {j < stat.value.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.specsPerformanceRight}>
                  <div className={styles.specsRiveContainer}>
                    <RiveViewer src={RIVE_FILES.performance} />
                  </div>
                </div>
              </div>
            </div>

            {/* Dimensions Panel */}
            <div
              className={`${styles.specsPanel} ${activeSpecsTab === 2 ? styles.active : ""}`}
            >
              <div className={styles.specsDimensions}>
                <div className={styles.specsDimensionsViews}>
                  <button
                    className={`${styles.specsDimensionView} ${activeDimensionView === 0 ? styles.active : ""}`}
                    onClick={() => setActiveDimensionView(0)}
                  >
                    Side view
                  </button>
                  <button
                    className={`${styles.specsDimensionView} ${activeDimensionView === 1 ? styles.active : ""}`}
                    onClick={() => setActiveDimensionView(1)}
                  >
                    Front view
                  </button>
                </div>
                <div className={styles.specsDimensionsRive}>
                  <RiveViewer
                    src={
                      activeDimensionView === 0
                        ? RIVE_FILES.side
                        : RIVE_FILES.front
                    }
                  />
                </div>
              </div>
            </div>

            {/* Fleet Panel */}
            <div
              className={`${styles.specsPanel} ${activeSpecsTab === 3 ? styles.active : ""}`}
            >
              <div className={styles.specsFleet}>
                <div className={styles.specsFleetLeft}>
                  <div className={styles.specsFleetStats}>
                    {SPECS_FLEET.map((stat) => (
                      <div key={stat.label} className={styles.specsFleetStat}>
                        <span className={styles.specsFleetStatLabel}>
                          {stat.label}
                        </span>
                        <span className={styles.specsFleetStatValue}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.specsFleetRight}>
                  <div className={styles.specsRiveContainer}>
                    <RiveViewer src={RIVE_FILES.side} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Figures legend */}
          <div className={styles.specsFigures}>
            {SPECS_FIGURES.map((fig, i) => (
              <span
                key={fig}
                className={`${styles.specsFigure} ${i === 2 ? styles.active : ""}`}
              >
                {fig}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          Entry / CTA Section
          ================================================================ */}
      <section className={styles.entrySection}>
        <div className={styles.entryStickyWrapper}>
          <div className={styles.entrySticky}>
            {/* Background image */}
            <div className={styles.entryMediaWrapper}>
              <img
                className={`${styles.entryImage} ${styles.entryImageDesktop}`}
                src={`${SANITY_CDN}/2b619d49bbf13550af464d85d2e077135d9a33c9-3200x1800.jpg`}
                alt="Bringing back the wonder of flight to your daily commute"
                loading="lazy"
              />
              <img
                className={`${styles.entryImage} ${styles.entryImageMobile}`}
                src={`${SANITY_CDN}/06931f02a6d83ad98531c6c9877e745a4ebb6a5d-1125x2250.jpg`}
                alt="Bringing back the wonder of flight to your daily commute"
                loading="lazy"
              />
            </div>

            {/* Content overlay */}
            <div className={styles.entryContent}>
              <h2 className={styles.entryTitle}>
                Bringing back the wonder of flight to your daily commute
              </h2>
              <a href="/experience" className={styles.entryButton}>
                Explore
              </a>
              <div className={styles.entryFeatures}>
                <span className={styles.entryFeature}>
                  Breathtaking city views
                </span>
                <span className={styles.entryFeature}>
                  Seating for four passengers
                </span>
                <span className={styles.entryFeature}>
                  All-electric flight
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
