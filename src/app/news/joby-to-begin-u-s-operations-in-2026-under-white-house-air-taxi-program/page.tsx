import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title:
    "Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program | Joby Aviation",
  description:
    "Joby Aviation today announced it has been selected as a partner in multiple winning applications under the White House-backed eVTOL Integration Pilot Program (eIPP).",
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
    href: "/news/joby-s-first-faa-conforming-aircraft-takes-flight",
    date: "Mar 11, 2026",
    title: "Joby\u2019s First FAA-Conforming Aircraft Takes Flight",
    imageSrc: `${SANITY_CDN}/6f800281b68a999fc7fac710d5abf199282530df-3000x2000.jpg`,
    imageAlt: "Joby\u2019s First FAA-Conforming Aircraft Takes Flight",
  },
];

export default function WhiteHouseProgramPage() {
  return (
    <ArticleLayout
      title="Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program"
      publishedDate="March 9 2026"
      heroImageSrc={`${SANITY_CDN}/411a712308f1858194b3efd9368aa51dad54a599-6000x4000.jpg`}
      heroImageAlt="Joby to Begin U.S. Operations in 2026 Under White House Air Taxi Program"
      imageCaption="A piloted Joby electric air taxi flying over Santa Cruz, California earlier this year. (Photo: Joby Aviation)"
      articlePath="/news/joby-to-begin-u-s-operations-in-2026-under-white-house-air-taxi-program"
      summary={[
        {
          text: "Joby selected for early operations covering 10 U.S. states as part of White House-backed program",
        },
        {
          text: "Announcement marks major milestone for U.S. air taxi industry with the potential to significantly accelerate Joby\u2019s path to commercial service",
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
            regulatory outlook, progress and timing; expected benefits of and
            operations under the eIPP, including the expected timing and location
            of such operations; expectations to scale manufacturing to four
            aircraft per month in 2027; our business plan, objectives, goals and
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
          <p>press@jobyaviation.com</p>
          <p>
            <strong>Investors:</strong>
          </p>
          <p>investors@jobyaviation.com</p>
        </>
      }
    >
      <p>
        Santa Cruz, CA&mdash;March 9, 2026&mdash; Joby Aviation, Inc.
        (NYSE:JOBY), a company developing electric air taxis for commercial
        passenger service, today announced it has been selected as a partner in
        multiple winning applications under the White House-backed Electric
        Vertical Takeoff and Landing (eVTOL) Integration Pilot Program (eIPP).
        Through the program, Joby has the opportunity to begin early operations
        this year in Arizona, Florida, Idaho, New Jersey, New York, North
        Carolina, Oklahoma, Oregon, Texas and Utah, marking a major milestone
        for the U.S. air taxi industry with the potential to significantly
        accelerate Joby&rsquo;s path to commercial service.
      </p>
      <p>
        The eIPP program, established by Presidential Executive Order, paves the
        way for Joby to bring its technology directly to U.S. communities ahead
        of FAA type certification. It is expected to accelerate regulatory
        coordination by bringing the FAA and DOT together with local authorities
        to streamline approvals for airspace integration and the development of
        relevant infrastructure - advancing the safe integration of this new
        technology into the national airspace.
      </p>
      <p>
        &ldquo;This is a defining moment for American innovation,&rdquo; said
        JoeBen Bevirt, Founder and CEO of Joby Aviation. &ldquo;Instead of just
        reading about the future of flight, communities across America are going
        to be able to see it in the skies above their own cities this
        year.&rdquo;
      </p>
      <p>
        &ldquo;Quiet, electric air taxis flying real routes are a powerful
        demonstration of American leadership in action, and proof that
        we&rsquo;re building the next golden age of aviation right here in the
        U.S,&rdquo; he added.
      </p>
      <p>
        &ldquo;America has set the pace and the standard in aerospace innovation
        since the Wright Brothers first took to the skies,&rdquo; said Greg
        Bowles, Chief Policy Officer at Joby. &ldquo;This is how our country has
        always led &mdash; by bringing people together to turn breakthrough
        technology into real-world progress. From President Trump and Secretary
        Duffy to the state and local leaders who helped drive these applications
        forward, this kind of coordination is what will ensure America continues
        to lead. We&rsquo;re grateful to our partners at every level who stepped
        up to make this possible, and we&rsquo;re excited to see communities
        witness this next chapter of aviation take flight.&rdquo;
      </p>
      <p>
        In addition to its air taxi aircraft, Joby was also selected for
        applications that include Joby&rsquo;s Superpilot&trade; autonomous
        flight technology platform. Designed to enable highly automated
        operations over time, Superpilot&trade; has the potential to further
        expand the range of use cases partner states can explore under the
        program.
      </p>
      <p>
        Joby is participating in the following programs that have been selected
        as part of the eIPP:
      </p>
      <ul>
        <li>
          Florida: A statewide effort that will include three phases of
          operations focused on cargo delivery, passenger transportation,
          automation, and medical response, supported by significant public and
          private investment.
        </li>
        <li>
          Port Authority of New York and New Jersey: Joby will collaborate on
          multiple operational concepts across New England, including air taxi
          passenger operations at the Manhattan heliport.
        </li>
        <li>
          Texas Department of Transportation: This application will support
          operations connecting Dallas, Austin, San Antonio, and eventually
          Houston, with air taxi networks expanding from each city to extend
          regional reach.
        </li>
        <li>
          North Carolina Department of Transportation: This application will work
          with industry partners to establish piloted medical and regional
          operations across the state while also developing an autonomous flight
          operation extending into Virginia.
        </li>
        <li>
          Utah Department of Transportation: This application covers four states
          spanning the Pacific Northwest, the Rocky Mountains, and the Plains of
          Oklahoma and will test a wide range of next-generation aircraft and
          operational concepts.
        </li>
      </ul>
      <p>
        The applications selected today will now progress into an Other
        Transaction Authority (OTA) stage, where agreements and operational
        details will be finalized. Flights are expected to commence within 90
        days of OTA contracts being finalized.
      </p>
      <p>
        Joby&rsquo;s first FAA-conforming aircraft for Type Inspection
        Authorization (TIA) is set to fly shortly, marking a major step on the
        path toward Type Certification. The company regularly flies piloted,
        full-transition flights&mdash;taking off vertically, transitioning to
        wingborne cruise, and returning to vertical landing&mdash;as part of a
        comprehensive real-world flight test program, demonstrating the
        operational maturity required to participate in the eIPP program.
      </p>
      <p>
        Joby recently announced plans to scale production to four aircraft per
        month in 2027, supported by expanded facilities in Marina, CA and
        Dayton, OH, in order to meet unprecedented global demand for its
        technology.
      </p>
    </ArticleLayout>
  );
}
