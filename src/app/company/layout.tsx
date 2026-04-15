import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Company | Joby Aviation \u2013 Building the Future of Electric Air Taxi Travel",
  description:
    "Learn how Joby Aviation is building an all\u2011electric air taxi company to save people time and cut emissions in cities around the world.",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
