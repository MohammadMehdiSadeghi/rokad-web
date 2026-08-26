import Hero from "../../src/views/Home/sections/Hero";
import Stats from "../../src/views/Home/sections/Stats";
import DualSchool from "../../src/views/Home/sections/DualSchool";
import Story from "../../src/views/Home/sections/Story";
import Pillars from "../../src/views/Home/sections/Pillars";
import Ecosystem from "../../src/views/Home/sections/Ecosystem";
import EventsCarousel from "../../src/views/Home/sections/EventsCarousel";
import Faq from "../../src/views/Home/sections/Faq";
import Honors from "../../src/views/Home/sections/Honors";
import Rokadians from "../../src/views/Home/sections/Rokadians";
import Comments from "../../src/views/Home/sections/Comments";
import Blogs from "../../src/views/Home/sections/Blogs";
import FinalCTA from "../../src/views/Home/sections/FinalCTA";
import RokadHierarchy from "../../src/views/Home/sections/RokadHierarchy";

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