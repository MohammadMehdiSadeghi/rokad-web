import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import DualSchool from "./sections/DualSchool";
import Story from "./sections/Story";
import Pillars from "./sections/Pillars";
import Ecosystem from "./sections/Ecosystem";
import RokadHierarchy from "./sections/RokadHierarchy";
import EventsCarousel from "./sections/EventsCarousel";
import Faq from "./sections/Faq";
import Honors from "./sections/Honors";
import Rokadians from "./sections/Rokadians";
import Comments from "./sections/Comments";
import Blogs from "./sections/Blogs";
import FinalCTA from "./sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <DualSchool />
      <Story />
      <Pillars />
      <Ecosystem />
      <RokadHierarchy />
      <EventsCarousel />
      <Faq />
      <Honors />
      <Rokadians />
      <Comments />
      <Blogs />
      <FinalCTA />
    </>
  );
}
