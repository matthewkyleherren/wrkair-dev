import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Transparency | Joby Aviation",
  description: "Transparency",
};

export default function TransparencyPage() {
  return (
    <section>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>Health Plan Transparency</h1>
        <div className={styles.separator} />
        <div className={styles.content}>
          <p>
            Joby Aviation complies with Federal Transparency in Coverage
            regulations by providing this link to machine readable files related
            to the health plans offered to our employees.The machine-readable
            files are formatted to allow researchers, regulators, and
            application developers to more easily access and analyze data
            including negotiated service rates, and out-of-network allowed
            amounts between health plans and healthcare providers.
          </p>

          <p>
            Kaiser Permanente Machine Readable Files are available{" "}
            <a
              href="https://healthy.kaiserpermanente.org/front-door/machine-readable"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>

          <p>
            Anthem Machine Readable Files are available{" "}
            <a
              href="https://www.anthem.com/machine-readable-file/search/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </article>
    </section>
  );
}
