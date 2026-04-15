"use client";

import { useEffect, useRef } from "react";
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

/* ---------------------------------------------------------------------------
   Homepage Component
   --------------------------------------------------------------------------- */
export default function HomePage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroVideoMobileRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const heroTextSlidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = heroSectionRef.current;
    if (!section) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const video = isMobile ? heroVideoMobileRef.current : heroVideoRef.current;

    /* --- Page-load intro animation (matches original's 2s delay intro) --- */
    const introTl = gsap.timeline({ delay: 0.5 });

    if (heroTitleRef.current) {
      introTl.to(heroTitleRef.current, {
        "--animate-in": 1,
        ease: "power2.out",
        duration: 0.8,
      }, 0);
    }

    if (heroSubtitleRef.current) {
      introTl.to(heroSubtitleRef.current, {
        "--animate-in": 1,
        ease: "power2.out",
        duration: 0.8,
      }, 0.2);
    }

    if (heroTextSlidesRef.current) {
      introTl.to(heroTextSlidesRef.current, {
        opacity: 1,
        y: "0rem",
        ease: "power2.out",
        duration: 0.6,
      }, 0.4);
    }

    /* --- Inner ScrollTrigger: drives video + text animations --- */
    const r = 1 / 14; // sizeVh=1400, r = 100/1400

    const innerTl = gsap.timeline();

    // Extend timeline to exactly 1 unit so ScrollTrigger maps 0-1 progress to 0-1 time
    innerTl.set({}, {}, 1);

    // Media wrapper border-radius + translate
    if (heroMediaRef.current) {
      innerTl.to(heroMediaRef.current, {
        "--translate-y-progress": 1,
        "--border-radius-in": 1,
        ease: "power1.inOut",
        duration: r,
      }, 0);
    }

    // Title animate in
    if (heroTitleRef.current) {
      innerTl.to(heroTitleRef.current, {
        "--animate-in": 1,
        ease: "power1.inOut",
        duration: r,
      }, 0);
    }

    // Subtitle animate in
    if (heroSubtitleRef.current) {
      innerTl.to(heroSubtitleRef.current, {
        "--animate-in": 1,
        ease: "power1.inOut",
        duration: r,
      }, 0);
    }

    // Text slides fade in
    if (heroTextSlidesRef.current) {
      innerTl.fromTo(heroTextSlidesRef.current,
        { opacity: 0, y: "-2rem" },
        { y: "0rem", opacity: 1, ease: "power2.out", duration: 0.2 * r },
        0.75 * r
      );
    }

    const innerSt = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      animation: innerTl,
      onUpdate: (self) => {
        if (!video || !video.duration) return;
        const videoPercent = remap(self.progress, 0.05, 1, 0, 1);
        video.currentTime = videoPercent * video.duration;
      },
    });

    /* --- Full ScrollTrigger: exit animations --- */
    const fullTl = gsap.timeline();

    if (heroMediaRef.current) {
      fullTl.to(heroMediaRef.current, {
        "--border-radius-out": 1,
        ease: "power2.out",
        duration: 0.75 * r,
      }, 1 - r);
    }

    if (heroTextSlidesRef.current) {
      fullTl.to(heroTextSlidesRef.current, {
        y: "-2rem",
        opacity: 0,
        ease: "power2.out",
        duration: 0.2 * r,
      }, 1 - 1.25 * r);
    }

    const fullSt = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: true,
      animation: fullTl,
    });

    return () => {
      introTl.kill();
      innerSt.kill();
      fullSt.kill();
      innerTl.kill();
      fullTl.kill();
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* ================================================================
          SECTION 1: Hero
          ================================================================ */}
      <section ref={heroSectionRef} className={`${styles.heroSection} ${styles.sectionWrapperContain}`}>
        <div className={styles.heroStickyWrapper}>
          <div className={styles.heroStickyElement}>
            {/* Video Background */}
            <div ref={heroMediaRef} className={styles.heroMediaWrapper}>
              <video
                ref={heroVideoRef}
                className={`${styles.heroVideo} ${styles.heroDesktopVideo}`}
                src={`${R2_CDN}/compressed-home-intro-desktop-r3.mp4`}
                muted
                playsInline
                preload="auto"
              />
              <video
                ref={heroVideoMobileRef}
                className={`${styles.heroVideo} ${styles.heroMobileVideo}`}
                src={`${R2_CDN}/compressed-home-intro-mobile-r3.mp4`}
                muted
                playsInline
                preload="auto"
              />
            </div>

            {/* Title */}
            <div ref={heroTitleRef} className={styles.heroTitle}>
              <h1 className={styles.heroTitleText}>
                Skip traffic.{"\n"}Time to fly.
              </h1>
            </div>

            {/* Subtitle */}
            <div ref={heroSubtitleRef} className={styles.heroSubtitle}>
              <p className={styles.heroSubtitleText}>
                {" "}The future of aviation is coming soon.
              </p>
            </div>

            {/* Text Slides */}
            <div ref={heroTextSlidesRef} className={styles.heroTextSlides}>
              <div className={styles.heroTextSlideItem}>
                Elevate your commute with our all-electric air taxi, soon to be
                bookable at the tap of a button.
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
          <div className={styles.experienceStickyWrapper}>
            <div className={styles.experienceStickyElement}>
              {/* Title */}
              <h2 className={styles.experienceTitle} aria-label="Nowhere to go but Up">
                <div aria-hidden="true" className={styles.experienceTitleDesktop}>
                  Nowhere to go but Up
                </div>
                <div aria-hidden="true" className={styles.experienceTitleMobile}>
                  Let&apos;s fly
                </div>
              </h2>

              {/* Slides */}
              <div className={styles.slidesContainer}>
                {/* Slide 1 */}
                <div className={styles.slide} style={{ "--slide-index": 0 } as React.CSSProperties}>
                  <div className={styles.slideImage}>
                    <div className={styles.slideImageInner}>
                      <img
                        src={sanityImg("a0cc53073d2e2741323b19bcc392b9b3fc5ea888-1444x1700.jpg")}
                        alt="Leave city congestion behind and choose a stress-free commute through the clouds."
                        loading="eager"
                      />
                    </div>
                  </div>
                  <Link className={styles.slideContent} href="/experience">
                    <span className={styles.slideContentNumber}><span>1</span></span>
                    <p className={styles.slideText}>
                      Leave city congestion behind and choose a stress-free
                      commute through the clouds.
                    </p>
                    <span className={styles.slideLink}>Discover the Experience</span>
                  </Link>
                </div>

                {/* Slide 2 */}
                <div className={styles.slide} style={{ "--slide-index": 1 } as React.CSSProperties}>
                  <div className={styles.slideImage}>
                    <div className={styles.slideImageInner}>
                      <img
                        src={sanityImg("050c5279f4a679a956a0e3d341f45723e624a5a0-1444x1700.jpg")}
                        alt="Sit back and enjoy. Breathtaking views come standard with every seat."
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <Link className={styles.slideContent} href="/experience">
                    <span className={styles.slideContentNumber}><span>2</span></span>
                    <p className={styles.slideText}>
                      Sit back and enjoy.{"\n"}Breathtaking views come standard
                      with every seat.
                    </p>
                    <span className={styles.slideLink}>Discover the Experience</span>
                  </Link>
                </div>

                {/* Slide 3 */}
                <div className={styles.slide} style={{ "--slide-index": 2 } as React.CSSProperties}>
                  <div className={styles.slideImage}>
                    <div className={styles.slideImageInner}>
                      <img
                        src={sanityImg("7fe8973f1288a16f20520b22e08b67c5f5ac6e2b-1444x1700.jpg")}
                        alt="Enjoy seamless travel with a choreographed rideshare to the vertiport."
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <Link className={styles.slideContent} href="/experience">
                    <span className={styles.slideContentNumber}><span>3</span></span>
                    <p className={styles.slideText}>
                      Enjoy seamless travel with a choreographed rideshare to
                      the vertiport.
                    </p>
                    <span className={styles.slideLink}>Discover the Experience</span>
                  </Link>
                </div>
              </div>

              {/* Labels */}
              <div className={styles.experienceLabels}>
                <span className={styles.experienceLabel}>Experience Highlights</span>
                <span className={styles.experienceLabel}>Skip town, let&apos;s fly</span>
              </div>
            </div>
          </div>

          {/* End Section */}
          <div className={styles.experienceEndSection}>
            <div className={styles.experienceEndTitle}>
              Imagine looking forward to your commute. And forgetting what
              gridlock feels like. When flight is a part of everyday life,
              anything is possible.{" "}
            </div>
            <Link className={styles.experienceEndButton} href="/experience">
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
        <div className={styles.sectionApp}>
          {/* Left Media */}
          <div className={styles.appLeftMedia}>
            <div className={styles.appMediaInner}>
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

          {/* Right Content (desktop only) */}
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

          {/* Label */}
          <span className={styles.appLabel}>Coming soon</span>

          {/* End Section */}
          <div className={styles.appSectionEnd}>
            <div className={styles.appEndTitle}>
              Seamless door to door travel, all from a few taps on our app.
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: Technology Entry
          ================================================================ */}
      <section id="technology" className={`${styles.sectionWrapper} ${styles.sectionWrapperContain}`}>
        <div className={styles.sectionEntry}>
          {/* Background Media */}
          <div className={styles.entryMedia}>
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

          {/* Content */}
          <div className={styles.entryStickyWrapper}>
            <div className={styles.entryStickyElement}>
              <div className={styles.entryInner}>
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
                <div className={styles.entryFeatures}>
                  <span className={styles.entryFeature}>Vertical take-off and landing</span>
                  <span className={styles.entryFeature}>200 mph top speed</span>
                  <span className={styles.entryFeature}>Zero operating emissions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: News
          ================================================================ */}
      <section id="news" className={`${styles.sectionWrapper} ${styles.sectionWrapperContain}`}>
        <div className={styles.sectionNews}>
          <h2 className={styles.newsTitle}>News from above</h2>

          <div className={styles.newsButtonContainer}>
            <Link href="/news">
              <button className={`${styles.button} ${styles.buttonOutlined}`}>
                View all News
              </button>
            </Link>
          </div>

          <div className={styles.newsContainer}>
            {/* News Item 1 */}
            <Link
              className={styles.newsItem}
              href="/news/joby-completes-piloted-electric-air-taxi-flight-across-san-francisco-bay-and-around-the-golden"
            >
              <div className={styles.newsItemHeader}>
                <span className={styles.newsItemDate}>Mar 13, 2026</span>
                <p className={styles.newsItemTitle}>
                  Joby Completes Piloted Electric Air Taxi Flight Across San
                  Francisco Bay and Around the Golden Gate
                </p>
              </div>
              <div className={styles.newsItemImage}>
                <img
                  src={sanityImg("9d0764b417418fd1c74f84ceffb1197d861b40fa-6000x4000.jpg")}
                  alt="Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate"
                  loading="lazy"
                />
              </div>
            </Link>

            {/* News Item 2 */}
            <Link
              className={styles.newsItem}
              href="/news/joby-s-first-faa-conforming-aircraft-takes-flight"
            >
              <div className={styles.newsItemHeader}>
                <span className={styles.newsItemDate}>Mar 11, 2026</span>
                <p className={styles.newsItemTitle}>
                  {" "}Joby&apos;s First FAA-Conforming Aircraft Takes Flight
                </p>
              </div>
              <div className={styles.newsItemImage}>
                <img
                  src={sanityImg("6f800281b68a999fc7fac710d5abf199282530df-3000x2000.jpg")}
                  alt="Joby's First FAA-Conforming Aircraft Takes Flight"
                  loading="lazy"
                />
              </div>
            </Link>

            {/* News Item 3 */}
            <Link
              className={styles.newsItem}
              href="/news/joby-to-begin-u-s-operations-in-2026-under-white-house-air-taxi-program"
            >
              <div className={styles.newsItemHeader}>
                <span className={styles.newsItemDate}>Mar 9, 2026</span>
                <p className={styles.newsItemTitle}>
                  Joby to Begin U.S. Operations in 2026 Under White House Air
                  Taxi Program
                </p>
              </div>
              <div className={styles.newsItemImage}>
                <img
                  src={sanityImg("411a712308f1858194b3efd9368aa51dad54a599-6000x4000.jpg")}
                  alt="Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program"
                  loading="lazy"
                />
              </div>
            </Link>
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

          <div className={styles.partnersStickyWrapper}>
            <div className={styles.partnersStickyElement}>
              <div className={styles.partnersWrapper}>
                {/* Categories List */}
                <div className={styles.partnersCategories}>
                  <div className={styles.partnersCategoryName}>
                    <div className={styles.partnersCategoryDot} />
                    <p className={styles.partnersCategoryNameText}>Car Service</p>
                  </div>
                  <div className={styles.partnersCategoryName}>
                    <p className={styles.partnersCategoryNameText}>Airlines</p>
                  </div>
                  <div className={styles.partnersCategoryName}>
                    <p className={styles.partnersCategoryNameText}>Infrastructure</p>
                  </div>
                  <div className={styles.partnersCategoryName}>
                    <p className={styles.partnersCategoryNameText}>R&amp;D</p>
                  </div>
                  <div className={styles.partnersCategoryName}>
                    <p className={styles.partnersCategoryNameText}>Technology</p>
                  </div>
                  <div className={styles.partnersCategoryName}>
                    <p className={styles.partnersCategoryNameText}>Government</p>
                  </div>
                </div>

                {/* Images */}
                <div className={styles.partnersImagesWrapper}>
                  <div className={styles.partnersCategoryImage}>
                    <img
                      src={sanityImg("08c1cc4c2b2f84e81af5a811a077423dbf1a82d5-1500x1892.jpg")}
                      alt="Car Service"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Items */}
                <div className={styles.partnersContent}>
                  {/* Car Service */}
                  <div className={styles.partnersContentItem}>
                    <p className={styles.partnerDescription}>
                      We&apos;re partnering with global leaders in ground
                      transportation to seamlessly integrate air mobility into
                      the future of door-to-door travel.
                    </p>
                    <div className={styles.logoWrapper}>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("ae1c4e28f2e64113163a11688e9491eaced07734-76x45.svg")}
                            alt="Uber"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Airlines */}
                  <div className={styles.partnersContentItem}>
                    <p className={styles.partnerDescription}>
                      Our partnerships with leading global airlines will
                      integrate our air taxi service into existing aviation
                      networks.
                    </p>
                    <div className={styles.logoWrapper}>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("3668a86d6101741073f98b390a355183e6a7521a-480x180.png")}
                            alt="Delta"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("045aa354beeb7b18c26ecc75a71d274340c6da04-993x231.png")}
                            alt="Virgin Atlantic"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("5ba090dd2266b6ea85978ba2a62d482482a94740-92x45.svg")}
                            alt="ANA"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div className={styles.partnersContentItem}>
                    <p className={styles.partnerDescription}>
                      Together with key infrastructure partners, we&apos;re
                      building the physical backbone needed for convenient
                      everyday flight.
                    </p>
                    <div className={styles.logoWrapper}>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("703ef7455889d41a12b2750e5c0891426fa7b142-112x45.svg")}
                            alt="Skyports"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("52a92a0193c660628053cbfcb60c24a21bf14608-102x45.svg")}
                            alt="Vertiports by Atlantic"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("b01675566cfe8d9377f546874496f8b7afdd98b6-122x45.svg")}
                            alt="Signature Flight Support"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("f7e02666c110899b16a7df086f9b7daa1bb6e446-90x45.svg")}
                            alt="Jetex"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("c0a0a44e718ac7c11a58fc941ee54231367bf8b0-122x45.svg")}
                            alt="Clay Lacy"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("d3a3de92285f5ba0e49e504675e3475f63948e13-74x45.svg")}
                            alt="Helo Holdings, Inc."
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* R&D */}
                  <div className={styles.partnersContentItem}>
                    <p className={styles.partnerDescription}>
                      We collaborate with pioneers in manufacturing and
                      innovation to create a vertically integrated, world-class
                      production ecosystem.
                    </p>
                    <div className={styles.logoWrapper}>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("e2e469f991528ca2c648fd9455142a6388ea2e16-122x45.svg")}
                            alt="Toyota"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("fb4aa83f7c38f23fbc0fbbf56e0559534b9a9e7e-510x198.png")}
                            alt="NASA"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technology */}
                  <div className={styles.partnersContentItem}>
                    <p className={styles.partnerDescription}>
                      Our aviation technology partnerships power the systems that
                      support navigation, autonomy, pilot training, and
                      operational excellence.
                    </p>
                    <div className={styles.logoWrapper}>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("65c47bff04766eeb14a3e794cbfcf3939c3d0f23-112x45.svg")}
                            alt="Garmin"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.logo}>
                        <div className={styles.logoInner}>
                          <img
                            src={sanityImg("41e28c69c10d417477200ee5be7f29fa01429fc3-66x45.svg")}
                            alt="CAE"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Government */}
                  <div className={styles.partnersContentItem}>
                    <p className={styles.partnerDescription}>
                      We collaborate with forward-thinking government agencies to
                      shape policy, accelerate innovation, and enable the
                      introduction of advanced air mobility.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: Story Entry
          ================================================================ */}
      <section id="story" className={`${styles.sectionWrapper} ${styles.sectionWrapperContain}`}>
        <div className={styles.sectionEntry}>
          {/* Background Media */}
          <div className={styles.entryMedia}>
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

          {/* Content */}
          <div className={styles.entryStickyWrapper}>
            <div className={styles.entryStickyElement}>
              <div className={styles.entryInner}>
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
        </div>
      </section>

      {/* ================================================================
          SECTION 8: Illustration — Dream of Flight
          ================================================================ */}
      <section id="illustration" className={`${styles.sectionWrapper} ${styles.sectionWrapperContain}`}>
        <div className={styles.sectionIllustration}>
          {/* Header */}
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

          {/* Content + Parallax Layers */}
          <div className={styles.illustrationContentWrapper}>
            {/* Content Blocks */}
            <div className={styles.illustrationContent}>
              <span className={styles.illustrationPretitle}>Future Vision — 1</span>
              <div className={styles.illustrationText}>
                Imagine a world where every cross-town invitation is a definite
                &apos;yes&apos;.
              </div>
            </div>

            <div className={styles.illustrationContent}>
              <span className={styles.illustrationPretitle}>Future Vision — 2</span>
              <div className={styles.illustrationText}>
                Where game day is gridlock-free and every restaurant is local.
              </div>
            </div>

            <div className={styles.illustrationContent}>
              <span className={styles.illustrationPretitle}>Future Vision — 3</span>
              <div className={styles.illustrationText}>
                Where our cities are greener, more friendly places to be.
              </div>
            </div>

            {/* Parallax Background Layers */}
            <div className={styles.illustrationBackground}>
              {/* Layer 1 */}
              <div className={`${styles.illustrationLayer} ${styles.layer1}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("c87e7474a50bc61d572909da05aee1647cd8f082-2400x6045.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("0a69932fb2b24e757fa9d1704eea6fc29cee4870-563x3527.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 2 */}
              <div className={`${styles.illustrationLayer} ${styles.layer2}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("e5d6f302a057dc33abc3047e611edd9b8c74bcf0-2400x1518.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("e11f4b40ca3ec460076dfd86179082352303c8c5-563x600.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 3 */}
              <div className={`${styles.illustrationLayer} ${styles.layer3}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("dd2fb834986e5aace151c61fa2243743ba9d442b-2400x975.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("95884b5d5467b36a6da04505fe3ac615a7f01a4f-563x380.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 4 */}
              <div className={`${styles.illustrationLayer} ${styles.layer4}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("f534edec7bf7bc54afc1ece9f54f507eed0dcff1-2400x1616.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("712a9bdb835cf1beff518e2bac704dce0e1b68ce-563x735.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 5 */}
              <div className={`${styles.illustrationLayer} ${styles.layer5}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("b2ec77696825a0ef40f54f85f2ef75ec4905dcd5-2400x195.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("eda6bcbd653bedc6290bdbdba46d10da721b646c-563x83.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 6 */}
              <div className={`${styles.illustrationLayer} ${styles.layer6}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("7bf0b0a519093b043b8a870943a16fbc521eed5a-2400x407.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("0d5a8981595b62f8c583687d8934a963c87204fd-563x158.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 7 */}
              <div className={`${styles.illustrationLayer} ${styles.layer7}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("ee46d244254cb61608942005e383662740c383cb-2400x1811.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("d8429b57b9a567d4bc25915ac2156803e2f2710e-563x983.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 8 */}
              <div className={`${styles.illustrationLayer} ${styles.layer8}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("3c8db3fa82c0be25fa06d318f49c40bdeacba13e-2400x819.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("a5fc6f536db0c35bae0ebbcb1cd0598a7ad09f69-563x305.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 9 */}
              <div className={`${styles.illustrationLayer} ${styles.layer9}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("c29987660ed88a308e3daae091da628a4d0b1232-2400x1202.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("0c55594d3bd511382dca2eba0026203a76d410ec-563x653.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 10 */}
              <div className={`${styles.illustrationLayer} ${styles.layer10}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("237e8abbc506011492066bd3ac9a4e5390ea99f4-2400x1233.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("15c5e6df328a8621f9110ba5495c5019e845daf9-563x519.webp")} alt="" loading="lazy" />
                </div>
              </div>

              {/* Layer 11 */}
              <div className={`${styles.illustrationLayer} ${styles.layer11}`}>
                <div className={styles.illustrationLayerDesktop}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("786bb4bbf59d8b1866595d98f7db505cd2f9d456-2400x890.webp")} alt="" loading="lazy" />
                </div>
                <div className={styles.illustrationLayerMobile}>
                  <img className={styles.illustrationLayerImg} src={sanityImg("db3331bd1630601194a67a87c39482e2648c9fda-563x330.webp")} alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
