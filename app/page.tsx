import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemContrast from "@/components/ProblemContrast";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ReportLayers from "@/components/ReportLayers";
import Sectors from "@/components/Sectors";
import Differentiator from "@/components/Differentiator";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemContrast />
        <Solution />
        <HowItWorks />
        <ReportLayers />
        <Sectors />
        <Differentiator />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
