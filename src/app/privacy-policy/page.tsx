import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Joby Aviation - Data Collection & Use | Joby Aviation",
  description:
    "Read Joby Aviation's Privacy Policy to learn how we collect, use, and protect information on our websites and online services.",
};

export default function PrivacyPolicyPage() {
  return (
    <section>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.separator} />
        <div className={styles.content}>
          <h5>
            <strong>Last revised on December 4, 2020</strong>
          </h5>

          <p>
            This privacy policy (this &ldquo;Privacy Policy&rdquo;) explains how
            Joby Aero, Inc. (&ldquo;Joby&rdquo;, &ldquo;we&rdquo; or
            &ldquo;us&rdquo;) collects, uses and discloses information related
            to the Joby website currently located at www.jobyaviation.com and
            www.joby.aero and its subdomains, including all data, content and
            functionality thereon (the &ldquo;Website&rdquo;). By accessing or
            using our Website, you confirm that you have read, understood and
            agree to the terms of this Privacy Policy and the Joby Terms of Use
            (the &ldquo;Terms of Use&rdquo;). If you do not agree to the terms
            of this Privacy Policy, do not access or use the Website.
          </p>

          <p>
            The Website can only be accessed and used subject to the Joby Terms
            of Use and this Privacy Policy. PLEASE READ THIS PRIVACY POLICY
            CAREFULLY. BY USING THE WEBSITE, YOU AGREE TO THE USE OF YOUR
            INFORMATION IT DESCRIBES AND TO THE OTHER TERMS OF THIS PRIVACY
            POLICY. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO NOT
            ACCESS OR USE THE WEBSITE.
          </p>

          <h3>
            <strong>1. Modifications of Privacy policy</strong>
          </h3>

          <p>
            We may modify or update the Privacy Policy from time to time in
            which case we will update the &ldquo;last revised&rdquo; date at the
            top of this Privacy Policy. When we change the Privacy Policy in a
            material manner, we will use reasonable efforts to attempt to notify
            you and, where required by applicable law, we will obtain your
            consent. However, it is your sole responsibility to review the
            Privacy Policy from time to time to view any such changes. The
            updated Privacy Policy will be effective as at the date of posting,
            or such later date as may be specified in the updated Privacy Policy.
            Your continued use of the Website after any change constitutes your
            acceptance of the new Privacy Policy. If you do not agree to any
            updates of this Privacy Policy, please do use or access (or continue
            to use or access) the Website.
          </p>

          <h3>
            <strong>2. Information we collect</strong>
          </h3>

          <p>
            In order to provide you with particular services, we may ask you to
            provide us with certain details or information about you. Information
            that you submit through our Website may include:
          </p>

          <ul>
            <li>
              Information we collect directly from you, such as your email
              address and any information you choose to include in a
              communication with us
            </li>
            <li>
              Job applicant details, including information included in your
              resume or CV, references and job history
            </li>
          </ul>

          <p>
            We also automatically collect certain information about your
            interactions with the Website (&ldquo;Usage Data&rdquo;) through the
            use of cookies and other tracking technologies. Usage Data may
            include:
          </p>

          <ul>
            <li>Network location and IP address</li>
            <li>Browser type</li>
            <li>
              Device type, such as your phone, computer, or tablet and type of
              operating system
            </li>
            <li>
              Flash version, JavaScript support, screen resolution, and screen
              color processing ability
            </li>
            <li>Referral sites</li>
            <li>
              Date and time stamps, such as the date and time you first accessed
              the Website
            </li>
          </ul>

          <h3>
            <strong>3. Cookies and other tracking technologies</strong>
          </h3>

          <p>
            We may use certain types of tracking technologies to analyze how
            users interact with our Website.
          </p>

          <p>
            You may control the way in which your devices permit the use of
            tracking technologies. If you so choose, you may block or delete our
            cookies from your browser; however, blocking or deleting cookies may
            cause some of the Website, including any general functionality, to
            work incorrectly.
          </p>

          <p>
            Most browsers accept cookies automatically. However, you may be able
            to configure your browser settings to use the Website without some
            cookie functionality. You can delete cookies manually or set your
            browser to automatically delete cookies on a pre-determined schedule.
            For example, in the Internet Explorer menu bar, select: Tools
            &rarr; Internet Options &rarr; Browsing History &rarr; Delete to
            view manual and automatic options.
          </p>

          <p>
            We use Google Analytics. More information about Google Analytics is
            available here.
          </p>

          <p>
            If you have questions regarding the specific information about you
            that we process or retain, as well as your choices regarding our
            collection and use practices, please contact us using the
            information listed below.
          </p>
        </div>
      </article>
    </section>
  );
}
