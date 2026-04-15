import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Impact Reporting | Joby Aviation \u2013 Safety, Sustainability & Community | Joby Aviation",
  description:
    "Explore Joby Aviation\u2019s most recent Impact Report, highlighting safety, environmental progress, people & community initiatives, and corporate governance.",
};

export default function ImpactReportingPage() {
  return (
    <section>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>Impact Reporting</h1>
        <div className={styles.separator} />
        <div className={styles.content}>
          <p>
            The skies are changing. Around the globe, cities are grappling with
            gridlock, sustainability demands are increasing, and people are
            dreaming of faster, cleaner, and more enjoyable ways to move around.
            At Joby, we&rsquo;re not just dreaming; we&rsquo;re building that
            future. Our vision is to redefine flight itself, making it genuinely
            clean, whisper-quiet, and more available.
          </p>

          <p>
            <br />
            This isn&rsquo;t just about revolutionary technology&ndash;it&rsquo;s
            about a profound commitment to our planet, our people, and the
            communities we serve. That&rsquo;s why we&rsquo;re thrilled to
            unveil our 2024 Impact Report, a testament to our relentless
            progress across critical areas: Safety, Environment, People &amp;
            Community, and Corporate Governance. These milestones aren&rsquo;t
            just numbers; they&rsquo;re proof points of our global impact.
          </p>

          <p></p>

          <p>
            <strong>
              Safety: The Unshakeable Foundation for Global Operations
            </strong>
          </p>

          <p>
            In an era where trust in new technologies is paramount, safety
            remains the bedrock of everything we do. In 2024, as our workforce
            surged by 11%, we simultaneously drove down employee incidents,
            achieving a remarkable{" "}
            <strong>
              34% reduction in our Total Incident Rate (TRIR)
            </strong>{" "}
            and a{" "}
            <strong>
              45% decrease in our Days Away, Restricted, or Transferred (DART)
              rate.
            </strong>{" "}
            This relentless focus ensures our teams build with unwavering
            precision.{" "}
          </p>

          <p>
            <br />
            Beyond the factory floor, our aircraft logged{" "}
            <strong>hundreds of rigorous flight tests</strong>, making headlines
            from <strong>South Korea to Japan</strong> and soaring through
            critical demonstrations at{" "}
            <strong>Edwards Air Force Base</strong> in the U.S. Achieving{" "}
            <strong>Stage 2 IS-BAO Certification</strong> in our Part 135 Air
            Operations further underscores our commitment to exceeding global
            aviation safety standards, preparing us for a future where Joby
            aircraft become routine sights in skylines worldwide.{" "}
          </p>

          <p>
            <br />
            <strong>
              Environment: Leading the Charge for Zero-Emission Flight
            </strong>
            <br />
            The world is hungry for sustainable solutions, and aviation is
            answering the call. Joby is leading the way. In 2024, even as we
            dramatically ramped up our manufacturing capacity, we boosted our{" "}
            <strong>
              renewable electricity procurement by an impressive 19%.
            </strong>
          </p>

          <p>
            <br />
            We also championed circularity, recycling nearly{" "}
            <strong>50,000 pounds of manufacturing waste,</strong> turning what
            could be landfill into resources. But perhaps most thrilling was our
            groundbreaking{" "}
            <strong>561-mile hydrogen-electric flight,</strong> a monumental
            achievement that didn&rsquo;t just set records&ndash;it demonstrated
            the potential for{" "}
            <em>truly zero-emission regional travel,</em> connecting communities
            without a carbon footprint. Think about that: a future of flight,
            cleaner than ever.{" "}
          </p>

          <p>
            <br />
            And the numbers speak volumes: on a modeled flight in the bustling{" "}
            <strong>Los Angeles region,</strong> our electric aircraft is
            projected to use a staggering{" "}
            <strong>
              37% less energy per passenger trip than a gas-powered car.
            </strong>{" "}
            For us, this is a blueprint for a sustainable transportation
            ecosystem that can help decarbonize urban mobility globally.{" "}
          </p>

          <p>
            <br />
            <strong>
              People &amp; Community: Building a Diverse, Global Workforce
            </strong>
            <br />
            Our impact extends far beyond the aircraft itself. As we grew to{" "}
            <strong>over 2,000 employees worldwide,</strong> Joby is actively
            cultivating the diverse talent pipeline needed for this revolutionary
            industry. Our expanded <strong>apprenticeship program</strong> has
            trained <strong>64 local community members</strong> in cutting-edge
            advanced manufacturing, creating high-skill jobs right where we
            operate. And our{" "}
            <strong>FAA-certified pilot training academy</strong> is busy shaping
            the next generation of aviators who will pilot our future fleet.{" "}
          </p>

          <p></p>

          <p>
            Globally, we&rsquo;re sparking excitement and educating communities.
            Our initiatives reached <strong>thousands,</strong> engaging{" "}
            <strong>over 6,500 students at STEM events</strong> to inspire
            tomorrow&rsquo;s innovators. We&rsquo;ve forged strategic
            partnerships across the U.S. and captivated audiences at
            high-visibility events in{" "}
            <strong>New York, Los Angeles, the UAE,</strong> and at major global
            forums&ndash;showing the world what urban air mobility truly
            means.{" "}
          </p>

          <p>
            <br />
            <strong>
              Corporate Governance: The Compass for Our Journey
            </strong>
          </p>

          <p>
            Strong leadership is key to navigating this exciting, complex
            future. Our robust corporate governance framework ensures strategic
            oversight, unwavering transparency, and consistent accountability.
            The addition of{" "}
            <strong>
              Michael Thompson, Co-founder and Managing Partner of Reinvent
              Capital
            </strong>
            , to our experienced board strengthens our strategic
            decision-making. His deep expertise in disruptive technologies and
            capital markets ensures we are well-positioned to meet the demands of
            a rapidly evolving global market.
          </p>

          <p></p>

          <p>
            At Joby, we&rsquo;re not just engineering an aircraft; we&rsquo;re
            cultivating a future where innovation and sustainability converge to
            transform daily life. The journey has begun, and our{" "}
            <strong>2024 Impact Report</strong> is another powerful step toward a
            better, cleaner, and more connected tomorrow for everyone.{" "}
          </p>

          <p></p>

          <p>
            <strong>
              Explore the full impact&ndash;dive into our 2024 Impact Report
            </strong>{" "}
            <strong>
              <a
                href="https://drive.google.com/file/d/1I8RpYE5f7lMjnovtKNiw-XOguCVv4UI5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </strong>
            <strong>.</strong>
          </p>
        </div>
      </article>
    </section>
  );
}
