import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Safety Policy | Joby Aviation - Safety-First Culture for Electric Air Taxi | Joby Aviation",
  description:
    "Read Joby Aviation's Safety Policy outlining our safety-first culture, shared responsibility, just culture principles, and high standards for new technology.",
};

export default function SafetyPolicyPage() {
  return (
    <section>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>Safety Policy</h1>
        <div className={styles.separator} />
        <div className={styles.content}>
          <p>
            Absolutely everything that we do is grounded by our principal value
            of safety. We believe that new technology should be held to a higher
            standard than what has come before it.
          </p>

          <p>
            We are proactive and collaborative in establishing guiding safety
            principles, processes, and systems, and continuously seek
            opportunities to improve.
          </p>

          <p>
            To guide us in our vision of changing the world, we adhere to the
            following principles:
          </p>

          <ul>
            <li>
              All activities are conducted with safety as the first
              consideration
            </li>
            <li>Safety is a shared responsibility</li>
            <li>
              We strive to uphold a Just Culture which encourages all teammates
              to openly report any unsafe condition or act via Joby&apos;s
              voluntary reporting system, reporting teammates will receive full
              confidentiality
            </li>
            <li>
              No actions will be taken against any teammate unless it involves
              illegal acts, intentional regulatory violations, or a willful
              disregard for safety
            </li>
            <li>
              We will equip all teammates with the proper skills and expertise
              to exercise their safety oversight and management responsibilities
              competently
            </li>
            <li>
              All safety data will be afforded appropriate protection and
              confidentiality and used in a manner that strives for continuous
              improvement
            </li>
            <li>
              All externally supplied services shall comply with the appropriate
              safety standards
            </li>
            <li>
              Thank you for your thoughtful attention to these principles.
            </li>
          </ul>

          <p>
            <strong>JoeBen Bevirt</strong>
            <br />
            Chief Executive Officer
            <br />
            <em>Joby Aviation</em>
            <br />
            <em>Joby Elevate</em>
          </p>
        </div>
      </article>
    </section>
  );
}
