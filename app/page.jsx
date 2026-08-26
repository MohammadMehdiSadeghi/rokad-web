import dynamic from "next/dynamic";

import Hero from "../src/views/Home/sections/Hero";
import Stats from "../src/views/Home/sections/Stats";

// Lazy-load everything below the fold
const DualSchool = dynamic(() => import("../src/views/Home/sections/DualSchool"));
const Story = dynamic(() => import("../src/views/Home/sections/Story"));
const Pillars = dynamic(() => import("../src/views/Home/sections/Pillars"));
const Ecosystem = dynamic(() => import("../src/views/Home/sections/Ecosystem"));
const RokadHierarchy = dynamic(() => import("../src/views/Home/sections/RokadHierarchy"));
const EventsCarousel = dynamic(() => import("../src/views/Home/sections/EventsCarousel"));
const Faq = dynamic(() => import("../src/views/Home/sections/Faq"));
const Honors = dynamic(() => import("../src/views/Home/sections/Honors"));
const Rokadians = dynamic(() => import("../src/views/Home/sections/Rokadians"));
const Comments = dynamic(() => import("../src/views/Home/sections/Comments"));
const Blogs = dynamic(() => import("../src/views/Home/sections/Blogs"));
const FinalCTA = dynamic(() => import("../src/views/Home/sections/FinalCTA"));

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
