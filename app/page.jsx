import Hero from "../../src/pages/Home/sections/Hero";
import Stats from "../../src/pages/Home/sections/Stats";
import DualSchool from "../../src/pages/Home/sections/DualSchool";
import Story from "../../src/pages/Home/sections/Story";
import Pillars from "../../src/pages/Home/sections/Pillars";
import Ecosystem from "../../src/pages/Home/sections/Ecosystem";
import EventsCarousel from "../../src/pages/Home/sections/EventsCarousel";
import Faq from "../../src/pages/Home/sections/Faq";
import Honors from "../../src/pages/Home/sections/Honors";
import Rokadians from "../../src/pages/Home/sections/Rokadians";
import Comments from "../../src/pages/Home/sections/Comments";
import Blogs from "../../src/pages/Home/sections/Blogs";
import FinalCTA from "../../src/pages/Home/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <DualSchool />
      <Story />
      <Pillars />
      <Ecosystem />
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