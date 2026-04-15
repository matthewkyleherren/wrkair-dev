"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import CompanyTimeline from "./CompanyTimeline";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";

/* External arrow SVG */
function ExternalArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.67188 6.99844L7.66719 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.67188 1L7.67188 1L7.67188 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Timeline slider images */
const TIMELINE_IMAGES = [
  "e512f17e9cfc1e8178e637e3519ef2a5a319473f-1440x991.jpg",
  "c761953ab8eee09507d04579152c234cb6686c80-1440x991.jpg",
  "a6838b0d5dcabc0825980b496f84e53f7efcb1f2-1920x1321.jpg",
  "180862b8ea9f046936c5851115e8fa905bd38d38-1920x1321.jpg",
  "30e687ad3a4ea882f89030b43f7d5779991686ab-1920x1321.jpg",
  "45acf2f7e3be392fc205ed9e2aa70c3970819b94-1440x991.jpg",
  "eeeee64628a9e8bdbe569ee32edcfcbf4a13a5df-1920x1321.jpg",
  "577595ff84965f3e5fa87710999ba12cb9b6da40-1440x991.jpg",
  "d36a18b5292e692e9f4105d489908f1b35ab7251-1440x991.jpg",
  "c735bb1b77c1f2f079ade845dc72e7e5ed0f186b-1440x991.jpg",
  "deebf72478f31b617e99a99522e79762a2cfbbbc-1440x991.jpg",
  "8f7b3be770870fd44bc65085680fd2efe96587a8-1920x1321.jpg",
  "97c7890114494fbddc6efeda24ee445ae5f7cda5-1920x1321.jpg",
  "ed9155e339bed598d0f336dcea66c7bbdd0717c0-1920x1321.jpg",
  "1575167b78bff582425b20d77104688394a712a0-1920x1321.jpg",
  "fbd721c74cb18f381321d59880ed5fbb211c1a25-1920x1321.jpg",
  "84b7f35f1f17c671c1ec16669e96567ec88ccbef-1920x1321.jpg",
  "abf115fa93d7c558d0243b42c8ae0e1c8d701a77-1920x1321.jpg",
  "b98cc3dd82d8342db04ac1cbbfca13d269893dca-10670x7113.jpg",
];

/* Stats data */
const STATS = [
  { label: "Team members on board", value: "2500+" },
  { label: "Year founded", value: "2009" },
  { label: "Joby locations worldwide", value: "15+" },
  { label: "Operating emissions during flight", value: "0" },
];

/* ------------------------------------------------------------------ */
/*  Company Page Component                                             */
/* ------------------------------------------------------------------ */

export default function CompanyPage() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const blueLayerRef = useRef<HTMLDivElement>(null);
  const orangeLayerRef = useRef<HTMLDivElement>(null);
  const whiteLayerRef = useRef<HTMLDivElement>(null);
  const pageEntryRef = useRef<HTMLElement>(null);
  const pageEntryMediaRef = useRef<HTMLDivElement>(null);
  const pageEntryContentRef = useRef<HTMLDivElement>(null);
  const todayBlockRef = useRef<HTMLDivElement>(null);
  const infoSection1Ref = useRef<HTMLDivElement>(null);
  const infoSection2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kills: (ScrollTrigger | gsap.core.Timeline | gsap.core.Tween)[] = [];

    /* ===================================================================
       HERO — Layer intro + scroll animation
       =================================================================== */
    // Intro animation (on page load)
    if (blueLayerRef.current) {
      const introTween1 = gsap.to(blueLayerRef.current, { "--intro": 1, duration: 0.7, delay: 2, ease: "power2.inOut" });
      kills.push(introTween1);
    }
    if (orangeLayerRef.current) {
      const introTween2 = gsap.to(orangeLayerRef.current, { "--intro": 1, duration: 0.9, delay: 2.2, ease: "back.out(2)" });
      kills.push(introTween2);
    }
    if (heroTitleRef.current) {
      const introTween3 = gsap.fromTo(heroTitleRef.current, { y: "3rem", opacity: 0 }, { y: "0rem", opacity: 1, duration: 0.7, delay: 2.5, ease: "power2.out" });
      kills.push(introTween3);
    }

    // Scroll animation for hero layers
    if (heroSectionRef.current) {
      const heroTl = gsap.timeline();
      heroTl.set({}, {}, 1);

      // Title moves up
      if (heroTitleRef.current) {
        heroTl.to(heroTitleRef.current, { y: "-100lvh", ease: "none", duration: 0.4 }, 0.2);
      }

      // Blue layer scales to full height
      if (blueLayerRef.current) {
        heroTl.to(blueLayerRef.current, { "--animate-scroll": 1, duration: 0.6, ease: "sine.out" }, 0.2);
      }

      // Orange layer scales to full height
      if (orangeLayerRef.current) {
        heroTl.to(orangeLayerRef.current, { "--animate-scroll": 1, duration: 0.56, ease: "power2.out" }, 0.28);
      }

      // White layer flash
      if (whiteLayerRef.current) {
        heroTl.to(whiteLayerRef.current, { "--progress": 1, duration: 0.4, ease: "power1.inOut" }, 0.2);
        heroTl.to(whiteLayerRef.current, { "--progress": 0, duration: 0.1, ease: "power1.inOut" }, 0.6);
      }

      const heroSt = ScrollTrigger.create({
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: heroTl,
      });
      kills.push(heroSt, heroTl);
    }

    /* ===================================================================
       PAGE ENTRY — Border radius reveal + translate-y parallax
       =================================================================== */
    if (pageEntryRef.current) {
      const entryTl = gsap.timeline();
      entryTl.set({}, {}, 1);

      entryTl.fromTo(pageEntryRef.current, { "--border-radius-progress": 0 }, { "--border-radius-progress": 1, ease: "power1.in", duration: 0.5 }, 0);

      if (pageEntryMediaRef.current) {
        entryTl.fromTo(pageEntryMediaRef.current, { "--translate-y-in-progress": 0 }, { "--translate-y-in-progress": 1, ease: "none", duration: 1 }, 0);
      }

      if (pageEntryContentRef.current) {
        entryTl.fromTo(pageEntryContentRef.current, { opacity: 0 }, { opacity: 1, ease: "power1.out", duration: 0.4 }, 0.4);
      }

      const entrySt = ScrollTrigger.create({
        trigger: pageEntryRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        animation: entryTl,
      });
      kills.push(entrySt, entryTl);

      // Exit parallax
      const exitTl = gsap.timeline();
      if (pageEntryMediaRef.current) {
        exitTl.fromTo(pageEntryMediaRef.current, { "--translate-y-out-progress": 0 }, { "--translate-y-out-progress": 1, ease: "none", duration: 1 }, 0);
      }

      const exitSt = ScrollTrigger.create({
        trigger: pageEntryRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: exitTl,
      });
      kills.push(exitSt, exitTl);
    }

    /* ===================================================================
       TODAY BLOCK — Entrance animation
       =================================================================== */
    if (todayBlockRef.current) {
      let todayFired = false;
      const todaySt = ScrollTrigger.create({
        trigger: todayBlockRef.current,
        start: "top 80%",
        onEnter: () => {
          if (todayFired) return;
          todayFired = true;
          const title = todayBlockRef.current?.querySelector("h2");
          if (title) gsap.fromTo(title, { y: "2rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.7 });
        },
      });
      kills.push(todaySt);
    }

    /* ===================================================================
       INFO SECTIONS — Entrance animations
       =================================================================== */
    [infoSection1Ref.current, infoSection2Ref.current].forEach((section) => {
      if (!section) return;
      let fired = false;
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          if (fired) return;
          fired = true;
          gsap.to(section, { "--progress": 1, duration: 0.833, ease: "power2.out" });
          const title = section.querySelector("h4");
          if (title) gsap.fromTo(title, { y: "1.9rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.667, delay: 0.3 });
          const desc = section.querySelector("p");
          if (desc) gsap.fromTo(desc, { y: "1.4rem", opacity: 0 }, { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.5, delay: 0.5 });
          const img = section.querySelector("img");
          if (img) gsap.fromTo(img, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: "power2.out", duration: 0.6, delay: 0.3 });
        },
      });
      kills.push(st);
    });

    return () => {
      kills.forEach((k) => { if ("kill" in k) k.kill(); });
    };
  }, []);

  return (
    <div>
      {/* ============================================================
          Hero Section
          ============================================================ */}
      <section ref={heroSectionRef} data-section="hero" className={styles.heroSection}>
        <div className={styles.heroSticky}>
          <h1 ref={heroTitleRef} className={styles.heroTitle}>
            It&rsquo;s time to dream bigger. Our vision is to save a billion
            people an hour a day.
          </h1>
        </div>
        <div className={styles.heroBackground}>
          <div ref={blueLayerRef} className={styles.blueLayer} />
          <div ref={orangeLayerRef} className={styles.orangeLayer} />
          <div ref={whiteLayerRef} className={styles.whiteLayer} />
        </div>
      </section>

      {/* ============================================================
          Timeline Outer
          ============================================================ */}
      <div className={styles.timelineOuter}>
        <div className={styles.timelineBackground}>
          <div className={styles.imageSlider}>
            {TIMELINE_IMAGES.map((img, i) => (
              <div className={styles.imageSliderItem} key={i}>
                <img
                  src={`${SANITY_CDN}/${img}`}
                  alt={`Joby Aviation timeline ${i + 1}`}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.introContent}>
          <section id="intro" className={styles.introSection}>
            <div className={styles.introSticky}>
              <div className={styles.introWrapper}>
                <div className={styles.introLabels}>
                  <span className={styles.introLabel}>
                    36&ordm; 59&rsquo; 10.536&rdquo; N
                  </span>
                  <span className={styles.introLabel}>
                    122&ordm; 2&rsquo; 12.696&rdquo; W
                  </span>
                </div>
                <div className={styles.introTitles}>
                  <div className={styles.introTitleLeft}>
                    <h2>Our story starts</h2>
                  </div>
                  <div className={styles.introTitleRight}>
                    <h2>in Santa Cruz, CA</h2>
                    <h2 className={styles.introTitleRightReplace}>
                      back in <span>2025</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.timelineContent}>
          <section id="mythology">
            <div className={styles.timelineWrapper}>
              <div className={styles.timelineHeader}>
                <div className={styles.headerColumn1}>
                  <span className={styles.headerLabel}>Origins</span>
                </div>
                <div className={styles.headerColumn2}>
                  <span className={styles.headerLabel}>2009</span>
                </div>
                <div className={styles.headerColumn3Intro}>
                  <span className={styles.headerLabel}>The Beginning</span>
                </div>
                <div
                  className={`${styles.headerColumnLast} ${styles.desktopOnly}`}
                >
                  <span className={styles.headerLabel}>
                    Redwoods, Santa Cruz
                  </span>
                </div>
              </div>

              <div className={styles.timelinePastIntro}>
                <div className={styles.timelineTitle}>
                  <p className={styles.timelineTitleText}>
                    Tucked in the misty redwoods above Santa Cruz, seven
                    engineers gathered in a workshop.
                  </p>
                  <p className={styles.timelineTitleText}>
                    They weren&rsquo;t just building an aircraft. They were
                    chasing a dream. What if flight could be quiet, clean,
                    convenient &mdash; a part of everyday life?
                  </p>
                </div>

                <div className={styles.mobileOnly}>
                  <p className={styles.timelineBodyText}>
                    Imagine getting to work without traffic. Seeing your city
                    from the clouds. Saying &ldquo;yes&rdquo; to dinner across
                    town.
                  </p>
                  <p className={styles.timelineBodyText}>
                    The sky shouldn&rsquo;t be off limits. It should be a
                    shortcut. A sigh of relief. A daily moment of awe. Because
                    when you lift above the noise, everything shifts &mdash; your
                    view, your pace, your possibilities.
                  </p>
                </div>

                <div className={styles.timelineHeader}>
                  <div className={styles.headerColumn1}>
                    <span className={styles.headerLabel}>Origins</span>
                  </div>
                  <div className={styles.headerColumn2}>
                    <span className={styles.headerLabel}>2009</span>
                  </div>
                  <div
                    className={`${styles.headerBodies} ${styles.desktopOnly}`}
                  >
                    <p className={styles.timelineBodyText}>
                      Imagine getting to work without traffic. Seeing your city
                      from the clouds. Saying &ldquo;yes&rdquo; to dinner across
                      town.
                    </p>
                    <p className={styles.timelineBodyText}>
                      The sky shouldn&rsquo;t be off limits. It should be a
                      shortcut. A sigh of relief. A daily moment of awe. Because
                      when you lift above the noise, everything shifts &mdash;
                      your view, your pace, your possibilities.
                    </p>
                  </div>
                </div>

                <div className={styles.timelineTitle}>
                  <p className={styles.timelineTitleText}>
                    From the electric motors to airframes and propellers, the
                    aircraft was designed from the ground up. It was slow,
                    hands-on, and humbling. They started over again and again.
                    Relentlessly refining for reliability, performance, and
                    precision.
                  </p>
                </div>

                <div className={styles.mobileOnly}>
                  <p className={styles.timelineBodyText}>
                    This wasn&rsquo;t just a technical challenge. It meant
                    designing an entire ecosystem: infrastructure, software, and
                    service, all working in sync with the cities we love.
                  </p>
                  <p className={styles.timelineBodyText}>
                    The vision? To choreograph entire trips with just a few taps,
                    from ride-share to skyport to destination. No gridlock. No
                    stress. Just time, reclaimed.
                  </p>
                </div>

                <div className={styles.timelineHeader}>
                  <div className={styles.headerColumn1}>
                    <span className={styles.headerLabel}>Origins</span>
                  </div>
                  <div
                    className={`${styles.headerBodiesAlt} ${styles.desktopOnly}`}
                  >
                    <p className={styles.timelineBodyText}>
                      This wasn&rsquo;t just a technical challenge. It meant
                      designing an entire ecosystem: infrastructure, software,
                      and service, all working in sync with the cities we love.
                    </p>
                    <p className={styles.timelineBodyText}>
                      The vision? To choreograph entire trips with just a few
                      taps, from ride-share to skyport to destination. No
                      gridlock. No stress. Just time, reclaimed.
                    </p>
                  </div>
                  <div className={styles.headerColumn2}>
                    <span className={styles.headerLabel}>Redwoods</span>
                  </div>
                </div>

                <div className={styles.timelineTitle}>
                  <p className={styles.timelineTitleText}>
                    What began as a dream in the trees has since grown into a
                    global effort to bring electric flight to life. Because
                    cleaner skies mean a healthier planet. Less traffic means
                    more time. And future generations deserve both.
                  </p>
                </div>

                <div className={styles.timelineHeader}>
                  <div className={styles.headerColumn1}>
                    <span className={styles.headerLabel}>Origins</span>
                  </div>
                  <div className={styles.headerColumn2}>
                    <span className={styles.headerLabel}>Redwoods</span>
                  </div>
                  <div className={styles.headerColumn3Intro}>
                    <span className={styles.headerLabel}>Santa Cruz</span>
                  </div>
                  <div className={styles.headerColumnLast}>
                    <span className={styles.headerLabel}>California</span>
                  </div>
                </div>
              </div>

              <CompanyTimeline />
            </div>
          </section>
        </div>
      </div>

      {/* ============================================================
          About Section
          ============================================================ */}
      <section id="about" className={styles.aboutSection}>
        <div ref={todayBlockRef} className={styles.todayBlock}>
          <span className={styles.todayLabel}>Joby today</span>
          <h2 className={styles.todayTitle}>
            We&rsquo;re a community of engineers and visionaries bringing the
            dream of everyday flight to life through world-class manufacturing
            and technology.
          </h2>
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div className={styles.statBlock} key={stat.label}>
                <span className={styles.statLabel}>{stat.label}</span>
                <p className={styles.statValue}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={infoSection1Ref} className={styles.infoSection}>
          <span className={styles.infoLabel}>Careers</span>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>Join our crew</h4>
            <p className={styles.infoDescription}>
              If you&rsquo;re as excited about the future of flight as we are,
              and ready to pair hard work with innovative thinking, join our
              crew.
            </p>
            <a href="/careers" className={styles.button}>
              Work at Joby
            </a>
          </div>
          <div className={styles.infoMedia}>
            <img
              src={`${SANITY_CDN}/5516a3e6dae9dad0e7951e0afa6acb76a6d5d4ab-1600x988.jpg`}
              alt="Join our crew"
            />
          </div>
        </div>

        <div ref={infoSection2Ref} className={styles.infoSection}>
          <span className={styles.infoLabel}>For Investors</span>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>Backed by vision</h4>
            <p className={styles.infoDescription}>
              Discover more about our organizational structure, financial
              results, and governance.
            </p>
            <a
              href="https://ir.jobyaviation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Investor Portal
              <ExternalArrow className={styles.externalArrow} />
            </a>
          </div>
          <div className={styles.infoMedia}>
            <img
              src={`${SANITY_CDN}/f22efa42473ad1842fbb476918dfd7559c49a16f-1600x988.jpg`}
              alt="Backed by vision"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          Page Entry (Bottom CTA)
          ============================================================ */}
      <section
        ref={pageEntryRef}
        id="explore"
        className={styles.pageEntry}
      >
        <div ref={pageEntryMediaRef} className={styles.pageEntryMedia}>
          <div className={styles.pageEntryMediaDesktop}>
            <img
              src={`${SANITY_CDN}/2d63ec7352e2a6938dcb11f485244bc156ed003a-3200x1800.jpg`}
              alt="Designing cleaner flight for people and the planet."
            />
          </div>
          <div className={styles.pageEntryMediaMobile}>
            <img
              src={`${SANITY_CDN}/a5d1c28586ec8b552beb477811dbcb13f998ab44-1125x2250.jpg`}
              alt="Designing cleaner flight for people and the planet."
            />
          </div>
        </div>
        <div className={styles.pageEntrySticky}>
          <div ref={pageEntryContentRef} className={styles.pageEntryInner}>
            <div className={styles.pageEntryLeft}>
              <h3 className={styles.pageEntryTitle}>
                Designing cleaner flight for people and the planet.
              </h3>
              <a
                href="https://joby-site.cdn.prismic.io/joby-site/aH-801GsbswqTJbL_JobyAviation-2024ImpactReport.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonTransparent}`}
              >
                Joby Impact Report 2024
                <ExternalArrow className={styles.externalArrow} />
              </a>
            </div>
            <div className={styles.pageEntryFeatures}>
              <span className={styles.pageEntryFeature}>
                90% fewer emissions than a helicopter
              </span>
              <span className={styles.pageEntryFeature}>
                40% fewer emissions than an average car
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
