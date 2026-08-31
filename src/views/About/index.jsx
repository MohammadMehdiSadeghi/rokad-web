import AboutHero from "./sections/Hero";
import AboutStory from "./sections/Story";
import AboutStats from "./sections/StatsSection";
import AboutMission from "./sections/Mission";
import AboutPillars from "./sections/PillarsAbout";
import AboutComparison from "./sections/Comparison";
import AboutFounder from "./sections/Founder";
import AboutTeam from "./sections/Team";
import AboutAwards from "./sections/Awards";
import AboutTestimonials from "./sections/Testimonials";
import AboutSchools from "./sections/Schools";
import AboutFinalCTA from "./sections/FinalCTA";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutMission />
      <AboutPillars />
      <AboutComparison />
      <AboutFounder />
      <AboutTeam />
      <AboutAwards />
      <AboutTestimonials />
      <AboutSchools />
      <AboutFinalCTA />
    </>
  );
}