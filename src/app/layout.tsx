import type { Metadata } from "next";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Joby Aviation",
  description:
    "Joby Aviation is building an all-electric air taxi to save you time on your everyday commute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
