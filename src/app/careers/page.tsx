import type { Metadata } from "next";
import styles from "./page.module.css";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Careers | Joby Aviation",
  description: "Careers Page",
};

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

/* Play icon SVG */
function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
    >
      <path
        d="M7.54286 3.70444C8.15238 4.05802 8.15238 4.94198 7.54286 5.29556L1.37143 8.87556C0.761905 9.22914 -3.07648e-08 8.78716 0 8.08L3.11494e-07 0.919999C3.42259e-07 0.212838 0.761905 -0.229137 1.37143 0.124443L7.54286 3.70444Z"
        fill="#F5F4DF"
      />
    </svg>
  );
}

/* Culture images */
const CULTURE_IMAGES = [
  {
    src: "86507b26b401089454fd19717fc63db49901838a-3008x3316.png",
    alt: "Careers culture image 1",
  },
  {
    src: "02f827aad02caab8a9d72656429a47c08ab4f0d8-1472x2060.png",
    alt: "Careers culture image 2",
  },
  {
    src: "fd35fd9d2281f043ee3927baa689fed39d6ccec7-3776x2576.png",
    alt: "Careers culture image 3",
  },
  {
    src: "80c28543a7250c3e047ada5b66e4a56b5327dfb1-1472x2060.png",
    alt: "Careers culture image 4",
  },
  {
    src: "da99b7ede2f107670d4719846ade7020d97be5c9-2240x1780.png",
    alt: "Careers culture image 5",
  },
];

/* ------------------------------------------------------------------ */
/*  Careers Page Component                                             */
/* ------------------------------------------------------------------ */

export default function CareersPage() {
  return (
    <div>
      {/* ============================================================
          Hero Section
          ============================================================ */}
      <section id="careers-hero" data-section="hero" className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              We&rsquo;re hiring. Makers, dreamers, doers. You.
            </h1>
            <h2 className={styles.heroTitleMobile}>
              We&rsquo;re hiring dreamers.
            </h2>
            <div className={styles.heroButton}>
              <a
                href="https://careers-jobyaviation.icims.com/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonFilledLight}`}
              >
                View open roles
                <ExternalArrow className={styles.externalArrow} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Media Section (full-width image)
          ============================================================ */}
      <section id="careers-media" className={styles.mediaSection}>
        <div className={styles.mediaContainer}>
          <img
            src={`${SANITY_CDN}/087abef241c0ba603848642229f212b723465b0a-6000x4000.jpg`}
            alt="Careers section media"
            loading="lazy"
          />
        </div>
      </section>

      {/* ============================================================
          Culture Section
          ============================================================ */}
      <section id="careers-culture" className={styles.cultureSection}>
        <div className={styles.cultureSticky}>
          <div className={styles.cultureContent}>
            <span className={styles.cultureTitleDesktop}>
              Bringing back the golden age of flight.
            </span>
            <span className={styles.cultureTitleMobile}>Join us.</span>
            <h2 className={styles.cultureSubtitle}>
              Aviation that inspires.
            </h2>
          </div>
        </div>

        {/* Culture Images */}
        <div className={styles.cultureImages}>
          {CULTURE_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`${styles.cultureImage} ${
                styles[
                  `cultureImage${i + 1}` as keyof typeof styles
                ] || ""
              }`}
            >
              <img
                src={`${SANITY_CDN}/${img.src}`}
                alt={img.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          Dreamer Section
          ============================================================ */}
      <section id="careers-dreamer" className={styles.dreamerSection}>
        <div className={styles.dreamerMedia}>
          <div className={styles.dreamerMediaDesktop}>
            <img
              src={`${SANITY_CDN}/e4f6f781caab8a622a8556a4d5e17282e54b3ef4-4096x2730.jpg`}
              alt="Become a dreamer"
              loading="lazy"
            />
          </div>
          <div className={styles.dreamerMediaMobile}>
            <img
              src={`${SANITY_CDN}/e96c6097981bf73cc8ed5cdfb4a5c003fbd12ba0-4096x3142.png`}
              alt="Become a dreamer"
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.dreamerSticky}>
          <div className={styles.dreamerInner}>
            <div className={styles.dreamerContent}>
              <span className={styles.dreamerTitle}>Become a dreamer</span>
              <p className={styles.dreamerDescription}>
                Our culture is grounded in real collaboration, where no one
                builds alone, and every voice helps to shape our process. We move
                fast, stay kind, and solve problems without ego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          People of Joby Section
          ============================================================ */}
      <section className={styles.peopleSection}>
        <div
          className={styles.peopleWrapper}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Technology slider"
        >
          <div className={styles.peopleThumbnail}>
            {/* Video placeholder — original uses Sanity file asset */}
            <video loop muted playsInline>
              <source
                src=""
                type="video/mp4"
              />
            </video>
          </div>
          <div className={styles.peopleFooter}>
            <span className={styles.watchText}>
              <PlayIcon />
              <span>Watch</span>
            </span>
            <span className={styles.peopleLabel}>People of Joby</span>
            <span className={styles.peopleDuration}>1:15</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          Page Entry (Bottom CTA)
          ============================================================ */}
      <div>
        <section id="page-entry" className={styles.pageEntry}>
          <div className={styles.pageEntryMedia}>
            <div className={styles.pageEntryMediaDesktop}>
              <img
                src={`${SANITY_CDN}/ee6945c66a763635ea66d7b8474372c5fb9ab778-4000x2250.jpg`}
                alt="Shape the future of aviation at Joby."
                loading="lazy"
              />
            </div>
            <div className={styles.pageEntryMediaMobile}>
              <img
                src={`${SANITY_CDN}/ee6945c66a763635ea66d7b8474372c5fb9ab778-4000x2250.jpg`}
                alt="Shape the future of aviation at Joby."
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.pageEntrySticky}>
            <div className={styles.pageEntryInner}>
              <div className={styles.pageEntryLeft}>
                <h3 className={styles.pageEntryTitle}>
                  Shape the future of aviation at Joby.
                </h3>
                <a
                  href="https://careers-jobyaviation.icims.com/jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.buttonFilledTransparent}`}
                >
                  View open roles
                  <ExternalArrow className={styles.externalArrow} />
                </a>
              </div>
              <div className={styles.pageEntryFeatures}>
                <span className={styles.pageEntryFeature}>
                  &lsquo;World&rsquo;s Most Innovative Company&rsquo;
                </span>
                <span className={styles.pageEntryFeature}>
                  Fast Company, 2021
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
