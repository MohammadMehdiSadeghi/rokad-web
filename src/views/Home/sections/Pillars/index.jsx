import Container from "../../../../layout/Container";
import PillarCard from "./PillarCard";
import {
  UserIcon,
  ProblemIcon,
  TeamIcon,
  DocumentIcon,
} from "../../../../common/Icons";

const pattern = "/assets/home/Pillars/WhyUs-Pattern.png";

const pillars = [
  {
    index: "۱",
    iconBg: "bg-[#e0195b]",
    icon: <UserIcon />,
    title: "مسیر رشد شخصی",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه.",
  },
  {
    index: "۲",
    iconBg: "bg-[#58bdaf]",
    icon: <ProblemIcon />,
    title: "یادگیری مسئله‌محور",
    body: "به‌جای تئوری خشک، روی چالش‌های واقعی دنیای کسب و کار کار می‌کنی و تجربه‌ی زنده می‌گیری.",
  },
  {
    index: "۳",
    iconBg: "bg-[#21295a]",
    icon: <TeamIcon />,
    title: "یادگیری مشارکتی",
    body: "کار تیمی روی پروژه‌های واقعی. یاد می‌گیری چطور با دیگران بسازی، رهبری کنی و اعتماد سازی.",
  },
  {
    index: "۴",
    iconBg: "bg-[#f4971f]",
    icon: <DocumentIcon />,
    title: "آموزش پروژه‌محور",
    body: "خروجی هر دوره یه نمونه‌کار واقعی می‌شه که توی رزومه‌ی حرفه‌ای‌ت می‌درخشه.",
  },
];

export default function Pillars() {
  return (
    <section className="relative py-[2.5rem] sm:py-[3.5rem] lg:py-[4rem] px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* ── Background Pattern Layer — همون ماسک گرادیانی هیرو/دوئال‌اسکول:
          بالا و پایین سکشن محو میشه که لبه‌ها بریده به نظر نرسن ── */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="w-full h-full object-cover opacity-60 select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* Title */}
        <h2 className="text-right font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.4] mb-[1.5rem] sm:mb-[2rem] flex flex-wrap justify-start items-center gap-x-2 sm:gap-x-3">
          <span className="inline-block -rotate-[0.5deg] sm:-rotate-3">چرا</span>
          <span className="inline-block rotate-[0.5deg] sm:rotate-2">خانواده‌ها</span>
          <span className="inline-block -rotate-[0.5deg] sm:-rotate-3">به</span>
          <span className="inline-block rotate-[0.5deg] sm:rotate-2">ما</span>
          <span className="inline-block -rotate-[0.5deg] sm:-rotate-3 text-teal-wordmark">
            اعتماد
          </span>
          <span className="inline-block rotate-[0.5deg] sm:rotate-2 text-teal-wordmark">
            می‌کنن
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-right font-medium text-[0.875rem] sm:text-[1rem] leading-[1.9] text-navy/60 max-w-[38.75rem] mb-[1.5rem] sm:mb-[2rem] lg:mb-[2.5rem]">
          هر دانش‌آموز یه مسیر شخصی داره. سیستم آموزشی ما براساس چهار ستون طراحی
          شده تا هرفرد بهترین نسخه از خودش بشه
        </p>

        {/* اضافه شدن [grid-auto-rows:1fr] برای هم‌تراز شدن ارتفاع کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 [grid-auto-rows:1fr]">
                  {pillars.map((p, i) => {
                    // ترتیب روتیشن از چپ به راست: -2، 2، -2، 2
                    // در RTL اولین آیتم آرایه (i=0) سمت راست نمایش داده میشه
                    const fromLeft = pillars.length - 1 - i;
                    const rotationLg = fromLeft % 2 === 0 ? -2 : 2;
                    return <PillarCard key={p.index} {...p} rotationLg={rotationLg} />;
                  })}
                </div>
      </Container>
    </section>
  );
}
