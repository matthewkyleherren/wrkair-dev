import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Experience | Joby Aviation \u2013 Take the High Road with Electric Air Taxis",
  description:
    "Discover the Joby Aviation air taxi experience \u2014 panoramic views, spacious seating, seamless journeys, and all-electric flight.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
