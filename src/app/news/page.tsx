import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Newsroom | Joby Aviation - News, Press Releases & Media Resources | Joby Aviation",
  description:
    "Read the latest Joby Aviation news, press releases, announcements, and media resources on electric air taxi, manufacturing, partnerships, and certification milestones.",
};

/* ---------------------------------------------------------------------------
   Sanity CDN helper
   --------------------------------------------------------------------------- */
const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";

function sanityImg(filename: string) {
  return `${SANITY_CDN}/${filename}`;
}

/* ---------------------------------------------------------------------------
   Static article data (ported verbatim from jobyaviation.com)
   --------------------------------------------------------------------------- */
interface Article {
  title: string;
  slug: string;
  date: string;
  dateFormatted: string;
  category: string;
  image: string;
}

const articles: Article[] = [
  {
    title:
      "Joby and Air Space Intelligence Partner to Prepare U.S. Airspace for Scaled Electric Flight",
    slug: "joby-and-air-space-intelligence-partner-to-prepare-u-s-airspace-for-scaled-electric-flight",
    date: "2026-04-07T12:00:00.000Z",
    dateFormatted: "Apr 7 2026",
    category: "Press Releases",
    image: "a8da2584c957e4666009d1d78a5a105a3e25bd9c-1920x1080.png",
  },
  {
    title:
      "Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate",
    slug: "joby-completes-piloted-electric-air-taxi-flight-across-san-francisco-bay-and-around-the-golden",
    date: "2026-03-13T10:37:27.886Z",
    dateFormatted: "Mar 13 2026",
    category: "Press Releases",
    image: "9d0764b417418fd1c74f84ceffb1197d861b40fa-6000x4000.jpg",
  },
  {
    title: "Joby\u2019s First FAA-Conforming Aircraft Takes Flight",
    slug: "joby-s-first-faa-conforming-aircraft-takes-flight",
    date: "2026-03-11T20:13:25.826Z",
    dateFormatted: "Mar 11 2026",
    category: "Press Releases",
    image: "6f800281b68a999fc7fac710d5abf199282530df-3000x2000.jpg",
  },
  {
    title:
      "Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program",
    slug: "joby-to-begin-u-s-operations-in-2026-under-white-house-air-taxi-program",
    date: "2026-03-09T20:06:19.308Z",
    dateFormatted: "Mar 9 2026",
    category: "Press Releases",
    image: "411a712308f1858194b3efd9368aa51dad54a599-6000x4000.jpg",
  },
  {
    title: "Joby Reports Fourth Quarter 2025 Financial Results",
    slug: "joby-reports-fourth-quarter-2025-financial-results",
    date: "2026-02-25T21:05:00.000Z",
    dateFormatted: "Feb 25 2026",
    category: "Press Releases",
    image: "ef41ae53d927de54cd496c76d733772b52923477-5734x3576.png",
  },
  {
    title: "Get ready for takeoff with Uber and Joby",
    slug: "get-ready-for-takeoff-with-uber-and-joby",
    date: "2026-02-25T12:33:34.529Z",
    dateFormatted: "Feb 25 2026",
    category: "Press Releases",
    image: "6aa36d295820756ebf2426aca6482c1bb553f7ce-11520x7500.png",
  },
  {
    title: "Preparing Joby for the Next Golden Age of Aviation",
    slug: "preparing-joby-for-the-next-golden-age-of-aviation",
    date: "2026-02-13T02:17:07.163Z",
    dateFormatted: "Feb 13 2026",
    category: "Blog Posts",
    image: "5a0f810ae1ef6e098d1297ee3cb13d2052544a0d-800x450.gif",
  },
  {
    title:
      "Joby Aviation to Report Fourth Quarter and Full Year 2025 Financial Results",
    slug: "joby-aviation-to-report-fourth-quarter-and-full-year-2025-financial-results",
    date: "2026-02-11T21:15:00.000Z",
    dateFormatted: "Feb 11 2026",
    category: "Press Releases",
    image: "d02bb4586b920152002396caa6fc355e1344158d-6000x4000.png",
  },
  {
    title:
      "Joby Aviation Prices Upsized Offering of Primary Common Stock and Upsized Offering of Convertible Senior Notes",
    slug: "joby-aviation-prices-upsized-offering-of-primary-common-stock-and-upsized-offering-of",
    date: "2026-01-29T08:48:00.000Z",
    dateFormatted: "Jan 29 2026",
    category: "Press Releases",
    image: "7540d3dbf904fbef08876b568e2ae8f08309a545-4749x3164.jpg",
  },
  {
    title:
      "Joby Aviation Announces Proposed Offerings of Common Stock and Convertible Senior Notes",
    slug: "joby-aviation-announces-proposed-offerings-of-common-stock-and-convertible-senior-notes",
    date: "2026-01-28T21:42:00.000Z",
    dateFormatted: "Jan 28 2026",
    category: "Press Releases",
    image: "d0ab1f30395ff8127f845b821bb3c14b22376902-6000x4000.jpg",
  },
  {
    title:
      "Joby to Expand Manufacturing Footprint with Acquisition of Second Ohio Facility",
    slug: "joby-to-expand-manufacturing-footprint-with-acquisition-of-second-ohio-facility",
    date: "2026-01-07T19:41:00.000Z",
    dateFormatted: "Jan 7 2026",
    category: "Press Releases",
    image: "6b5f118fcd5a17619c570d636e77e0b58d52fcba-3840x2500.png",
  },
  {
    title:
      "Joby Prepares for First Wave of Air Taxi Pilot Training with CAE Flight Simulators",
    slug: "joby-prepares-for-first-wave-of-air-taxi-pilot-training-with-cae-flight-simulators",
    date: "2026-01-06T20:02:00.000Z",
    dateFormatted: "Jan 6 2026",
    category: "Press Releases",
    image: "e5edee049d0291134be308cae42eb907316ac1c5-3840x2500.png",
  },
];

const categories = [
  { name: "All", slug: "all" },
  { name: "Blog Posts", slug: "blog-posts" },
  { name: "Press Releases", slug: "press-releases" },
];

/* ---------------------------------------------------------------------------
   Category Filter UI
   --------------------------------------------------------------------------- */
function CategoryFilters() {
  return (
    <div className={styles.categories}>
      {categories.map((cat, i) => {
        const isSelected = cat.slug === "all";
        const linkClass = `${styles.categoryLink}${isSelected ? ` ${styles.categoryLinkSelected}` : ""}`;

        if (cat.slug === "all") {
          return (
            <div key={cat.slug} className={linkClass} style={{ "--index": i + 1 } as React.CSSProperties}>
              <div className={styles.categoryDot} />
              <p className={styles.categoryName}>{cat.name}</p>
            </div>
          );
        }

        return (
          <Link
            key={cat.slug}
            href={`/news/category/${cat.slug}`}
            className={linkClass}
            style={{ "--index": i + 1 } as React.CSSProperties}
          >
            <div className={styles.categoryDot} />
            <p className={styles.categoryName}>{cat.name}</p>
          </Link>
        );
      })}
      <div className={styles.categoryLink} style={{ "--index": 4 } as React.CSSProperties}>
        <div className={styles.categoryDot} />
        <p className={styles.categoryName}>Media Kit</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Page Component
   --------------------------------------------------------------------------- */
export default function NewsPage() {
  const featured = articles[0];
  const regular = articles.slice(1);

  return (
    <div>
      {/* ----------------------------------------------------------------
          Hero
          ---------------------------------------------------------------- */}
      <section id="news-hero" className={styles.heroSection}>
        <div>
          <h1 className={styles.heroTitle}>
            <span role="text">Newsroom</span>
          </h1>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          News Lists
          ---------------------------------------------------------------- */}
      <section id="news-lists">
        {/* Mobile categories */}
        <div className={styles.categoriesMobile}>
          <CategoryFilters />
        </div>

        <div className={styles.listsSection}>
          {/* Desktop categories sidebar */}
          <div className={styles.categoriesDesktop}>
            <CategoryFilters />
            <span className={styles.contactUs}>
              For Press inquiries
              <br />
              Contact us at press@jobyaviation.com
              <br />
            </span>
          </div>

          {/* News list */}
          <div className={styles.newsListContainer}>
            <div className={styles.articlesGrid}>
              {/* Featured article */}
              <Link
                href={`/news/${featured.slug}`}
                className={styles.featuredItem}
              >
                <article className={styles.featuredContent}>
                  <div className={styles.featuredImageContainer}>
                    <Image
                      src={sanityImg(featured.image)}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className={styles.featuredImage}
                      priority
                    />
                  </div>
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredDate}>
                      {featured.dateFormatted}
                    </span>
                  </div>
                  <h5 className={styles.featuredTitle}>{featured.title}</h5>
                </article>
              </Link>

              {/* Regular articles */}
              {regular.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className={styles.regularItem}
                >
                  <div className={styles.borderLine} />
                  <article className={styles.regularContent}>
                    <span className={styles.dateDesktop}>
                      {article.dateFormatted}
                    </span>
                    <div className={styles.regularImage}>
                      {/* Use unoptimized for .gif images */}
                      <Image
                        src={sanityImg(article.image)}
                        alt={article.title}
                        width={280}
                        height={175}
                        unoptimized={article.image.endsWith(".gif")}
                      />
                    </div>
                    <p className={styles.regularTitleDesktop}>
                      {article.title}
                    </p>
                    <span className={styles.categoryTextDesktop}>
                      {article.category}
                    </span>
                    <div className={styles.textContentMobile}>
                      <p className={styles.regularTitleMobile}>
                        {article.title}
                      </p>
                      <span className={styles.dateMobile}>
                        {article.dateFormatted}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Load more */}
            <div className={styles.loadMoreContainer}>
              <button
                type="button"
                className={styles.loadMoreButton}
                aria-label="Load more news"
              >
                <p>Load more news</p>
                <svg
                  viewBox="0 0 17 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.814 1L10.1572 6.65685C9.37617 7.4379 8.10984 7.4379 7.32879 6.65685L1.67194 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          Media Kit Section
          ---------------------------------------------------------------- */}
      <section id="news-mediakit" className={styles.mediaKitSection}>
        <div className={styles.mediaKitBg}>
          <div className={styles.mediaKitBgDesktop}>
            <Image
              src={sanityImg(
                "169f9f1d3430a3e60919d37a8ba58a91a56fb8d7-3200x1800.jpg"
              )}
              alt="Get the Joby Media Kit"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.mediaKitBgMobile}>
            <Image
              src={sanityImg(
                "e303b04bf05202d7cd45dc818cc20df244c53cc4-1125x2250.jpg"
              )}
              alt="Get the Joby Media Kit"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.mediaKitInner}>
          <div className={styles.mediaKitContent}>
            <h3 className={styles.mediaKitTitle}>Get the Joby Media Kit</h3>
            <div className={styles.mediaKitDescription}>
              <p>
                Includes press material, photography, videos and brand assets
                for media and non-commercial purposes only. Read the license{" "}
                <a
                  href="https://drive.google.com/file/d/1EO85rl6OXarHl-NbAKjCD83F2J3cLEuD/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1uUBNCv_IuBaJoZYdtQ980qOGjmuDmvLY?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mediaKitButton}
            >
              <span>Our Media Kit</span>
              <svg
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
