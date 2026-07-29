import type { Metadata } from "next";
import GlassHero from "@/components/glass-hero";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Vishal Bhavar — Python Full Stack & AI Developer",
  description:
    "Portfolio of Vishal Bhavar — Python Full Stack Developer & AI Developer building scalable web applications, facial recognition systems, and modern software.",
};

export default function Home() {
  return (
    <main>
      {/* Dedicated Hero Landing Section */}
      <GlassHero />

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
