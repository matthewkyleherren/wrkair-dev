import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title:
    "Joby\u2019s First FAA-Conforming Aircraft Takes Flight | Joby Aviation",
  description:
    "Joby Aviation today announced it has begun flight testing its first FAA-conforming aircraft for Type Inspection Authorization (TIA), a major step on the path to type certification.",
};

const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";

const RELATED_ARTICLES = [
  {
    href: "/news/joby-completes-piloted-electric-air-taxi-flight-across-san-francisco-bay-and-around-the-golden",
    date: "Mar 13, 2026",
    title:
      "Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate",
    imageSrc: `${SANITY_CDN}/9d0764b417418fd1c74f84ceffb1197d861b40fa-6000x4000.jpg`,
    imageAlt:
      "Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate",
  },
  {
    href: "/news/joby-to-begin-u-s-operations-in-2026-under-white-house-air-taxi-program",
    date: "Mar 9, 2026",
    title:
      "Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program",
    imageSrc: `${SANITY_CDN}/411a712308f1858194b3efd9368aa51dad54a599-6000x4000.jpg`,
    imageAlt:
      "Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program",
  },
];

export default function FAAConformingFlightPage() {
  return (
    <ArticleLayout
      title="Joby&#x2019;s First FAA-Conforming Aircraft Takes Flight"
      publishedDate="March 11 2026"
      heroImageSrc={`${SANITY_CDN}/6f800281b68a999fc7fac710d5abf199282530df-3000x2000.jpg`}
      heroImageAlt="Joby's First FAA-Conforming Aircraft Takes Flight"
      imageCaption="Joby's first FAA-conforming aircraft for TIA in flight at the Company's test facility in Marina, CA (Credit: Joby Aviation)"
      articlePath="/news/joby-s-first-faa-conforming-aircraft-takes-flight"
      summary={[
        {
          text: "Flight marks a major step in the final stage of FAA Type Certification",
        },
        {
          text: "Aircraft is first of a fleet being built for Type Inspection Authorization (TIA)",
        },
        {
          text: "FAA pilots expected to begin \u2018for credit\u2019 TIA flight testing later this year",
        },
      ]}
      relatedArticles={RELATED_ARTICLES}
      footnote={
        <>
          <p>
            <strong>About Joby</strong>
          </p>
          <p>
            Joby Aviation, Inc. (NYSE:JOBY) is a California-based transportation
            company developing an all-electric, vertical take-off and landing air
            taxi. Joby intends to both operate its fast, quiet, and convenient
            air taxi service in cities around the world and sell its aircraft to
            other operators and partners. To learn more, visit{" "}
            <a href="http://www.jobyaviation.com/">www.jobyaviation.com</a>.
          </p>
          <p>
            <strong>Forward-Looking Statements</strong>
          </p>
          <p>
            This release contains &ldquo;forward-looking statements&rdquo;
            within the meaning of the &ldquo;safe harbor&rdquo; provisions of
            the Private Securities Litigation Reform Act of 1995, including but
            not limited to, statements regarding the development and performance
            of our aircraft, the growth of our manufacturing capabilities, our
            regulatory outlook, progress and timing, the expected timing of FAA
            &ldquo;for credit&rdquo; flights, and expected timing and benefits of
            the eIPP; manufacturing plans and targets, including plans to double
            production to four aircraft per month in 2027 and plans for our
            Dayton facilities to be capable of supporting the delivery of up to
            500 aircraft per year; our business plan, objectives, goals and
            market opportunity; and our current expectations relating to our
            business, financial condition, results of operations, prospects,
            capital needs and growth of our operations, including the expected
            benefits of our vertically-integrated business model. You can
            identify forward-looking statements by the fact that they do not
            relate strictly to historical or current facts. These statements may
            include words such as &ldquo;anticipate&rdquo;,
            &ldquo;estimate&rdquo;, &ldquo;expect&rdquo;,
            &ldquo;project&rdquo;, &ldquo;plan&rdquo;, &ldquo;intend&rdquo;,
            &ldquo;believe&rdquo;, &ldquo;may&rdquo;, &ldquo;will&rdquo;,
            &ldquo;should&rdquo;, &ldquo;can have&rdquo;, &ldquo;likely&rdquo;
            and other words and terms of similar meaning in connection with any
            discussion of the timing or nature of future operating or financial
            performance or other events. All forward looking statements are
            subject to risks and uncertainties that may cause actual results to
            differ materially, including: our ability to launch our air taxi
            service and the growth of the urban air mobility market generally;
            our ability to produce aircraft that meet our performance
            expectations in the volumes and on the timelines that we project;
            complexities related to obtaining certification and operating in
            foreign markets; participation in eIPP projects is subject to the
            finalization of OTA contracts; the competitive environment in which
            we operate; our future capital needs; our ability to adequately
            protect and enforce our intellectual property rights; our ability to
            effectively respond to evolving regulations and standards relating to
            our aircraft; our reliance on third-party suppliers and service
            partners; uncertainties related to our estimates of the size of the
            market for our service and future revenue opportunities; and other
            important factors discussed in the section titled &ldquo;Risk
            Factors&rdquo; in our Annual Report on Form 10-K, filed with the
            Securities and Exchange Commission (the &ldquo;SEC&rdquo;) on
            February 27, 2026, and in future filings and other reports we file
            with or furnish to the SEC. Any such forward-looking statements
            represent management&rsquo;s estimates and beliefs as of the date of
            this release. While we may elect to update such forward-looking
            statements at some point in the future, we disclaim any obligation to
            do so, even if subsequent events cause our views to change.
          </p>
          <p>
            <strong>Media:</strong>
          </p>
          <p>Christine Theodorou</p>
          <p>press@jobyaviation.com</p>
          <p>
            <strong>Investors:</strong>
          </p>
          <p>
            <a href="mailto:investors@jobyaviation.com">
              investors@jobyaviation.com
            </a>
          </p>
        </>
      }
    >
      <p>
        Santa Cruz, CA&mdash;March 11, 2026&mdash; Joby Aviation, Inc.
        (NYSE:JOBY), a company developing electric air taxis for commercial
        passenger service, today announced it has begun flight testing its first
        FAA-conforming aircraft for Type Inspection Authorization (TIA), a major
        step on the path to type certification. Initial testing by Joby pilots
        will pave the way for FAA pilots to visit Joby&rsquo;s Marina, CA,
        facility later this year to conduct the rigorous TIA testing required to
        validate the aircraft for commercial service.
      </p>
      <p>
        Today&rsquo;s announcement comes just days after the U.S. government
        cleared the way for mature aircraft designs like Joby&rsquo;s to begin
        early operations across the U.S. this year, as part of the White
        House-backed eVTOL Integration Pilot Program (eIPP). Through the
        program, Joby has the opportunity to fly in Arizona, Florida, Idaho, New
        Jersey, New York, North Carolina, Oklahoma, Oregon, Texas and Utah,
        marking a major milestone for the U.S. air taxi industry with the
        potential to significantly accelerate Joby&rsquo;s path to commercial
        service.
      </p>
      <p>
        &ldquo;Seeing this aircraft fly means everything to our team. It&rsquo;s
        the validation of years of hard work and marks our entry into the final
        phase of bringing this aircraft to market,&rdquo; said Didier
        Papadopoulos, President of Aircraft OEM at Joby. &ldquo;After focusing
        on &lsquo;for credit&rsquo; testing at both the equipment and system
        levels, we&rsquo;re now moving into the final phase of aircraft-level
        evaluations. This is evidence that our rigorous design and certification
        process is paying off, and we look forward to welcoming FAA pilots to
        Marina in due course.&rdquo;
      </p>
      <p>
        The aircraft (N547JX) is the first of a fleet currently in production to
        support TIA testing, and has been assembled using an airframe and
        components built to FAA Designated Engineering
        Representative-approved designs and signed off by FAA Designated
        Airworthiness Representatives, as specified in Joby&rsquo;s
        FAA-approved test plans.
      </p>
      <p>
        The pace at which Joby has been able to move from prototype to conforming
        aircraft is rooted in its vertically integrated approach, a strategy that
        is redefining the industry&rsquo;s path to certification. The vast
        majority of the Joby&rsquo;s aircraft components are designed,
        engineered, tested and manufactured in-house, reducing reliance on third
        party suppliers, improving quality control, and shortening lead times.
      </p>
      <p>
        In 2025, Joby celebrated the completion of an expanded manufacturing
        facility in Marina, CA and confirmed the start of propeller blade
        production in Ohio. Additionally, Joby recently acquired a new 700,000
        square-foot facility in Dayton, Ohio to support its plans to double
        production to four aircraft per month in 2027. Over time, Joby&rsquo;s
        Dayton facilities are expected to be capable of supporting the delivery
        of up to 500 aircraft per year.
      </p>
    </ArticleLayout>
  );
}
