import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title:
    "Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate | Joby Aviation",
  description:
    "Joby Aviation today announced the completion of a series of demonstration flights across the San Francisco Bay Area, showcasing its operational readiness in a region defined by traffic congestion.",
};

const SANITY_CDN = "https://cdn.sanity.io/images/h5mp19kq/production";

const RELATED_ARTICLES = [
  {
    href: "/news/joby-s-first-faa-conforming-aircraft-takes-flight",
    date: "Mar 11, 2026",
    title: "Joby\u2019s First FAA-Conforming Aircraft Takes Flight",
    imageSrc: `${SANITY_CDN}/6f800281b68a999fc7fac710d5abf199282530df-3000x2000.jpg`,
    imageAlt: "Joby\u2019s First FAA-Conforming Aircraft Takes Flight",
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

export default function GoldenGateFlightPage() {
  return (
    <ArticleLayout
      title="Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate"
      publishedDate="March 13 2026"
      heroImageSrc={`${SANITY_CDN}/9d0764b417418fd1c74f84ceffb1197d861b40fa-6000x4000.jpg`}
      heroImageAlt="Joby Completes Piloted Electric Air Taxi Flight Across San Francisco Bay and Around the Golden Gate"
      imageCaption="Joby's aircraft flying past the Golden Gate Bridge - San Francisco, CA (Photo: Joby Aviation)"
      articlePath="/news/joby-completes-piloted-electric-air-taxi-flight-across-san-francisco-bay-and-around-the-golden"
      summary={[
        {
          text: "Joby demonstrates operational readiness in one of America\u2019s most congested cities",
        },
        {
          text: "Joby selected for early operations as part of White House-backed eIPP program",
        },
        {
          text: "Bay Area flight marks the kickoff of Joby\u2019s 2026 Electric Skies Tour",
        },
      ]}
      relatedArticles={RELATED_ARTICLES}
      footnote={
        <>
          <p>
            <strong>About Joby Aviation</strong>
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
            regulatory outlook, progress and timing, including our expectation to
            begin early operations under the eIPP in 2026; expectations to scale
            manufacturing to four aircraft per month in 2027 and that our Ohio
            facilities will be capable of supporting the production of up to 500
            aircraft per year over time; our business plan, objectives, goals and
            market opportunity; plans for, and potential benefits of, our
            strategic partnerships; and our current expectations relating to our
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
            participation in eIPP projects is subject to the finalization of OTA
            contracts; the competitive environment in which we operate; our
            future capital needs; our ability to adequately protect and enforce
            our intellectual property rights; our ability to effectively respond
            to evolving regulations and standards relating to our aircraft; our
            reliance on third-party suppliers and service partners; uncertainties
            related to our estimates of the size of the market for our service
            and future revenue opportunities; and other important factors
            discussed in the section titled &ldquo;Risk Factors&rdquo; in our
            Annual Report on Form 10-K, filed with the Securities and Exchange
            Commission (the &ldquo;SEC&rdquo;) on February 27, 2026, and in
            future filings and other reports we file with or furnish to the SEC.
            Any such forward-looking statements represent management&rsquo;s
            estimates and beliefs as of the date of this release. While we may
            elect to update such forward-looking statements at some point in the
            future, we disclaim any obligation to do so, even if subsequent
            events cause our views to change.
          </p>
          <p>
            <strong>Media:</strong>
          </p>
          <p>Christine Theodorou</p>
          <p>press@jobyaviation.com</p>
          <p>
            <strong>Investors:</strong>
          </p>
          <p>investors@jobyaviation.com</p>
        </>
      }
    >
      <p>
        San Francisco, CA&mdash;March 13, 2026&mdash; Joby Aviation, Inc.
        (NYSE:JOBY), a company developing electric air taxis for commercial
        passenger service, today announced the completion of a series of
        demonstration flights across the San Francisco Bay Area. With one of the
        world&rsquo;s most recognizable skylines as a backdrop, the company
        showcased its operational readiness in a region defined by traffic
        congestion, demonstrating that the future of quiet, emissions-free
        flight, is not just a concept, but nearing commercial readiness.
      </p>
      <p>
        With an operational foundation built on thousands of test flights and
        more than 50,000 miles logged across its fleet, the company is now ready
        to scale its presence across the U.S.
      </p>
      <p>
        Joby was selected as a partner in multiple winning applications under the
        White House-backed eVTOL Integration Pilot Program (eIPP), giving the
        company the opportunity to begin early operations across 10 states:
        Arizona, Florida, Idaho, New Jersey, New York, North Carolina, Oklahoma,
        Oregon, Texas, and Utah. The selection marks a significant milestone not
        just for Joby, but for the broader U.S. air taxi industry, with the
        potential to meaningfully accelerate the path to commercial service.
      </p>
      <p>
        The flight marks the kickoff of Joby&rsquo;s 2026 Electric Skies Tour, a
        national showcase timed to celebrate the United States&rsquo; 250th
        anniversary. After departing Oakland International Airport,
        Joby&rsquo;s (N545JX) aircraft, piloted by Andrea Pingitore, soared
        quietly across the Bay toward the Golden Gate Bridge and turned above
        the Marin Headlands, set against one of the world&rsquo;s most
        recognizable skylines.
      </p>
      <p>
        The iconic backdrop is the first stop in a journey to introduce Americans
        to a future where a daily commute will take minutes, not hours. Joby
        expects to fly and present its aircraft in cities across the country as
        part of the tour, building on a heritage of American innovation and
        proving the real-world promise that air taxis are a faster, quieter way
        to connect our communities.
      </p>
      <p>
        &ldquo;The Bay Area is home to the world&rsquo;s most innovative
        companies, including Joby, but it&rsquo;s also an area with significant
        traffic and unique geographical barriers,&rdquo; said JoeBen Bevirt,
        founder and CEO of Joby. &ldquo;Our technology provides an opportunity
        to build on the immense potential of this region while protecting it for
        the next generation. By providing clean, quiet service with minimal
        infrastructure investment we are making flight an everyday reality for
        the community.&rdquo;
      </p>
      <p>
        The company continues to make progress towards certification, marked by
        the successful flight of its first FAA-conforming aircraft for TIA,
        which paves the way for FAA pilots to carry out &lsquo;for
        credit&rsquo; tests later this year. The aircraft is designed with
        safety, acoustics and performance in mind - all critical characteristics
        to unlocking the urban aerial ridesharing market.
      </p>
      <p>
        Population growth and urbanization is stretching ground transportation to
        its limits, making the Bay Area a natural early market for air taxis. San
        Francisco drivers lost an average of 112 hours to traffic in 2025,
        ranking it the third most congested city in the nation. Joby&rsquo;s goal
        is to reclaim these hours by turning long commutes into seamless,
        minutes-long journeys. Backed by strategic partnerships with Uber and
        Delta Air Lines, the company is building an integrated ecosystem to
        streamline every leg of the trip.
      </p>
      <p>
        To meet demand for its revolutionary technology, Joby is rapidly scaling
        its manufacturing footprint. This growth is supported by a newly acquired
        700,000-square-foot facility in Dayton, Ohio, which alongside
        Joby&rsquo;s expanded production site in Marina, California and
        specialized powertrain facility in San Carlos, California, is designed to
        support Joby&rsquo;s plans to increase its production rate to up to four
        aircraft per month in 2027. Over time, Joby&rsquo;s Dayton facilities
        are expected to be capable of supporting the delivery of up to 500
        aircraft per year.
      </p>
    </ArticleLayout>
  );
}
