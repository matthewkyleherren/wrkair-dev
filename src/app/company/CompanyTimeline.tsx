"use client";

import { useState, useCallback } from "react";
import styles from "./page.module.css";

/* ------------------------------------------------------------------ */
/*  Timeline data                                                      */
/* ------------------------------------------------------------------ */

interface TimelineMonth {
  month: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title?: string;
  description?: string;
  months?: TimelineMonth[];
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2009",
    title: "The Beginning",
    description:
      "Day and night, a small team of seven engineers work out of \u201cThe Barn,\u201d our workshop in the redwoods above Santa Cruz. We explore the frontiers of technologies like electric motors, flight software, and lithium-ion batteries, engineering almost every component from the ground up.",
  },
  {
    year: "2015",
    title: "Subscale Demonstrator",
    description:
      "After many years of subscale testing and analysis, our subscale technology demonstrator flies for the first time.",
  },
  {
    year: "2017",
    title: "Full-Scale Demonstrator",
    description:
      "After countless hours of engineering, our first full-scale demonstrator takes to the skies.",
  },
  {
    year: "2019",
    months: [
      {
        month: "Jan",
        title: "Partnership with Toyota",
        description:
          "As well as becoming a strategic investor in Joby, Toyota deploys dozens of engineers to work alongside our team, lending their expertise on factory layout, manufacturing process development and production.",
      },
      {
        month: "Feb",
        title: "Pre-Production Prototype",
        description:
          "Our pre-production prototype begins a rigorous flight testing program.",
      },
    ],
  },
  {
    year: "2020",
    title: "Expanded Partnership with Uber",
    description:
      "We expand our partnership with Uber to integrate our aerial ridesharing service into the Uber app across U.S. launch markets. Uber increases its investment in Joby, and we acquire Elevate, bringing its software and launch expertise in-house.",
  },
  {
    year: "2021",
    months: [
      {
        month: "Jul",
        title: "Single Charge Flight Milestone",
        description:
          "Over the course of the year, our pre-production prototype flies more than 5,300 miles, including a flight of 154.6 miles on a single charge.",
      },
      {
        month: "Aug",
        title: "Joby Goes Public",
        description:
          "Joby lists on the New York Stock Exchange (NYSE:JOBY).",
      },
      {
        month: "Dec",
        title: "First FAA Production Inspection",
        description:
          "We build a second pre-production prototype, completing our first FAA production conformity inspection and officially begin our journey to become the first certified eVTOL airline.",
      },
    ],
  },
  {
    year: "2022",
    months: [
      {
        month: "May",
        title: "Part 135",
        description:
          "We receive our Part 135 Air Carrier Certificate, which allows Joby to operate a commercial air taxi service.",
      },
      {
        month: "Oct",
        title: "Partnership with Delta",
        description:
          "We sign a multi-year, multi-city partnership with Delta Air Lines to deliver a home-to-airport air taxi service designed to seamlessly integrate Joby flights into the Delta customer experience.",
      },
    ],
  },
  {
    year: "2023",
    months: [
      {
        month: "Jun",
        title: "First Aircraft Off the Line",
        description:
          "We launch production at our Pilot Production Plant in Marina, CA, with the first aircraft rolling off the line in June to begin flight testing.",
      },
      {
        month: "Nov",
        title: "First Flight in NYC",
        description:
          "We complete the first-ever electric air taxi demonstration flight in New York City, marking our first urban flight and a major step toward bringing clean, quiet air travel to one of the world\u2019s busiest cities.",
      },
    ],
  },
  {
    year: "2024",
    title: "Hydrogen-Electric Demo Flight",
    description:
      "We successfully fly a first-of-its-kind hydrogen-electric air taxi demonstrator 523 miles, marking a major step toward zero-emission regional flight with water as the only by-product.",
  },
  {
    year: "2025",
    months: [
      {
        month: "Apr",
        title: "First Inhabited Transition",
        description:
          "We successfully complete our first full transition flight with a pilot onboard, marking a major step toward FAA flight testing and bringing us closer to commercial operations.",
      },
      {
        month: "May",
        title: "Investment from Toyota",
        description:
          "We deepen our partnership with Toyota through the successful close of the first $250 million tranche of their strategic investment, accelerating certification, production, and our shared goal of transforming how the world moves.",
      },
      {
        month: "Jul",
        title: "Scaled Production",
        description:
          "We expand our Marina, CA site to double our aircraft production capacity and open our scaled production site in Dayton, OH to manufacture and test components, marking a major step toward scaled production.",
      },
      {
        month: "Aug",
        title: "Acquisition of Blade",
        description:
          "We complete our acquisition of Blade Air Mobility\u2019s passenger business, gaining access to its established terminals and loyal flyers in key markets like New York and Southern Europe, positioning Joby for faster entry into commercial service.",
      },
      {
        month: "Nov",
        title: "50,000 Miles of Flight",
        description:
          "We surpass 50,000 miles of flight across our fleet, affirming Joby\u2019s leadership in eVTOL flight testing and development.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  CompanyTimeline Component                                          */
/* ------------------------------------------------------------------ */

export default function CompanyTimeline() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);

  const activeItem = TIMELINE_ITEMS[activeYearIndex];
  const activeMonth = activeItem.months?.[activeMonthIndex];

  const handleYearClick = useCallback((index: number) => {
    setActiveYearIndex(index);
    setActiveMonthIndex(0);
  }, []);

  const handleMonthClick = useCallback((index: number) => {
    setActiveMonthIndex(index);
  }, []);

  return (
    <div className={styles.breakthroughsSection}>
      <div className={styles.breakthroughsSticky}>
        {/* Breakthroughs header with years */}
        <div className={styles.breakthroughsHeader}>
          <div className={styles.breakthroughsLabel}>
            <span className={styles.headerLabel}>Breakthroughs</span>
          </div>
          <div className={styles.yearItems}>
            {TIMELINE_ITEMS.map((item, i) => (
              <h6
                key={item.year}
                className={`${styles.yearItem} ${
                  i === activeYearIndex ? styles.yearItemActive : ""
                }`}
                onClick={() => handleYearClick(i)}
              >
                {item.year}
              </h6>
            ))}
          </div>
        </div>

        {/* Months row (if applicable) */}
        {activeItem.months && activeItem.months.length > 0 && (
          <div className={styles.breakthroughsHeader}>
            <div className={styles.breakthroughsLabel} />
            <div className={styles.monthsRow}>
              {activeItem.months.map((m, i) => (
                <span
                  key={m.month}
                  className={`${styles.monthItem} ${
                    i === activeMonthIndex ? styles.monthItemActive : ""
                  }`}
                  onClick={() => handleMonthClick(i)}
                >
                  {m.month}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Timeline item content */}
        <div className={styles.timelineItemContent}>
          <h3 className={styles.timelineItemTitle}>
            {activeMonth ? activeMonth.title : activeItem.title}
          </h3>
          <div className={styles.timelineItemDescription}>
            <p>
              {activeMonth
                ? activeMonth.description
                : activeItem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
