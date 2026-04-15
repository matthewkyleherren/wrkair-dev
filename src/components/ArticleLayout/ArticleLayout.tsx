"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./ArticleLayout.module.css";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SummaryItem {
  text: string;
}

export interface RelatedArticle {
  href: string;
  date: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ArticleLayoutProps {
  title: string;
  publishedDate: string;
  heroImageSrc: string;
  heroImageAlt: string;
  imageCaption: string;
  summary: SummaryItem[];
  /** The article's canonical URL path, e.g. "/news/joby-..." */
  articlePath: string;
  /** Main body content — rendered as children */
  children: React.ReactNode;
  /** Footnote / boilerplate content */
  footnote: React.ReactNode;
  /** Related articles shown in "Read next" section */
  relatedArticles?: RelatedArticle[];
}

/* ------------------------------------------------------------------ */
/*  SVG Icons                                                          */
/* ------------------------------------------------------------------ */

function BackArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 1L1.5 7L7.5 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 7H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1V8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M3 4L6 1L9 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 8V10C1 10.5523 1.44772 11 2 11H10C10.5523 11 11 10.5523 11 10V8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Share URL helpers                                                   */
/* ------------------------------------------------------------------ */

const BASE_URL = "https://www.jobyaviation.com";

function buildShareUrls(articlePath: string, title: string) {
  const encodedUrl = encodeURIComponent(`${BASE_URL}${articlePath}`);
  const encodedTitle = encodeURIComponent(title);

  return {
    facebook: `https://www.facebook.com/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}&mini=1`,
    x: `https://x.com/intent/post?url=${encodedUrl}&text=${encodedTitle}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodedTitle}%20${encodedUrl}`,
  };
}

/* ------------------------------------------------------------------ */
/*  ArticleLayout Component                                            */
/* ------------------------------------------------------------------ */

export default function ArticleLayout({
  title,
  publishedDate,
  heroImageSrc,
  heroImageAlt,
  imageCaption,
  summary,
  articlePath,
  children,
  footnote,
  relatedArticles,
}: ArticleLayoutProps) {
  const [mobileShareOpen, setMobileShareOpen] = useState(false);
  const shareUrls = buildShareUrls(articlePath, title);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(`${BASE_URL}${articlePath}`);
  }, [articlePath]);

  const toggleMobileShare = useCallback(() => {
    setMobileShareOpen((prev) => !prev);
  }, []);

  const closeMobileShare = useCallback(() => {
    setMobileShareOpen(false);
  }, []);

  return (
    <article>
      {/* ---- Hero Section ---- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{title}</h1>
          </div>
          <span className={styles.backLink}>
            <Link href="/news">
              <span className={styles.backLinkArrow}>
                <BackArrowIcon />
              </span>
              Newsroom
            </Link>
          </span>
          <div className={styles.rightWrapper}>
            <div className={styles.dateTextWrapper}>
              <span className={styles.publishedText}>Published</span>
              <span className={styles.dateText}>{publishedDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Featured Image ---- */}
      <section className={styles.mediaSection}>
        <div className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.featuredImage}
            src={heroImageSrc}
            alt={heroImageAlt}
          />
        </div>
      </section>

      {/* ---- Image Caption + Summary ---- */}
      <div className={styles.articleBody}>
        <div className={styles.leftSideContainer} />
        <div className={styles.rightSideContainer}>
          <span className={styles.imageCaption}>{imageCaption}</span>
          <div className={styles.summaryList}>
            {summary.map((item, index) => (
              <div className={styles.summaryItem} key={index}>
                <p className={styles.summaryNumber}>{index + 1}</p>
                <p className={styles.summaryText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Content Section with Sidebar ---- */}
      <div className={styles.contentSectionWrapper}>
        <div className={styles.contentSection}>
          {/* Sticky sidebar */}
          <div className={styles.sideSectionContainer}>
            <div className={styles.sideSection}>
              <div className={styles.sideWrapper}>
                <span className={styles.sideLightText}>Published</span>
                <span className={styles.sideDate}>{publishedDate}</span>
              </div>
              <div className={styles.sideWrapper}>
                <span className={styles.sideLightText}>Share</span>
                <div className={styles.shareList}>
                  <button
                    className={styles.shareItem}
                    onClick={handleCopyLink}
                    type="button"
                  >
                    <span className={styles.shareText}>Copy Link</span>
                  </button>
                  <a
                    className={styles.shareItem}
                    href={shareUrls.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.shareText}>Facebook</span>
                  </a>
                  <a
                    className={styles.shareItem}
                    href={shareUrls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.shareText}>LinkedIn</span>
                  </a>
                  <a
                    className={styles.shareItem}
                    href={shareUrls.x}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.shareText}>X</span>
                  </a>
                  <a
                    className={styles.shareItem}
                    href={shareUrls.bluesky}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.shareText}>Bluesky</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className={styles.content}>
            <div className={styles.mainContent}>{children}</div>
            <div className={styles.hr} />
            <div className={styles.footnote}>{footnote}</div>
          </div>
        </div>
      </div>

      {/* ---- Read Next Section ---- */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className={styles.readNext}>
          <h2 className={styles.readNextTitle}>Read next</h2>
          <div className={styles.readNextButton}>
            <Link href="/news">
              <span className={styles.readNextButtonInner}>View all News</span>
            </Link>
          </div>
          <div className={styles.newsContainer}>
            {relatedArticles.map((article, index) => (
              <Link
                href={article.href}
                key={index}
                className={styles.newsItem}
              >
                <div className={styles.newsItemHeader}>
                  <span className={styles.newsItemDate}>{article.date}</span>
                  <p className={styles.newsItemTitle}>{article.title}</p>
                </div>
                <div className={styles.newsItemImage}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.imageSrc} alt={article.imageAlt} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---- Mobile Share Button ---- */}
      <div
        className={`${styles.mobileShareOverlay} ${
          mobileShareOpen ? styles.mobileShareOverlayOpen : ""
        }`}
        onClick={closeMobileShare}
        aria-hidden="true"
      />
      <div
        className={`${styles.mobileShareList} ${
          mobileShareOpen ? styles.mobileShareListOpen : ""
        }`}
      >
        <button
          className={styles.mobileShareItem}
          onClick={handleCopyLink}
          type="button"
        >
          Copy Link
        </button>
        <a
          className={styles.mobileShareItem}
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className={styles.mobileShareItem}
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={styles.mobileShareItem}
          href={shareUrls.x}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
        <a
          className={styles.mobileShareItem}
          href={shareUrls.bluesky}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bluesky
        </a>
      </div>
      <button
        className={styles.mobileShareButton}
        onClick={toggleMobileShare}
        type="button"
        aria-label="Share this article"
      >
        <ShareIcon />
        <span> Share</span>
      </button>
    </article>
  );
}
