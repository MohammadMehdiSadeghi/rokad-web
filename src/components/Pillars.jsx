import PillarCard from "./PillarCard.jsx";
import { UserIcon, ProblemIcon, TeamIcon, DocumentIcon } from "./icons.jsx";

// RTL grid: first DOM item → rightmost column.
// Figma shows: ۰۱ right → ۰۴ left, so ۰۱ goes first.
const pillars = [
  {
    index: "۰۱",
    iconBg: "bg-[#e0195b]",
    icon: <UserIcon />,
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه.",
  },
  {
    index: "۰۲",
    iconBg: "bg-[#58bdaf]",
    icon: <ProblemIcon />,
    title: "یادگیری مسئله‌محور",
    body: "به‌جای تئوری خشک، روی چالش‌های واقعی دنیای کسب و کار کار می‌کنی و تجربه‌ی زنده می‌گیری.",
  },
  {
    index: "۰۳",
    iconBg: "bg-[#21295a]",
    icon: <TeamIcon />,
    title: "یادگیری مشارکتی",
    body: "کار تیمی روی پروژه‌های واقعی. یاد می‌گیری چطور با دیگران بسازی، رهبری کنی و اعتماد سازی.",
  },
  {
    index: "۰۴",
    iconBg: "bg-[#f4971f]",
    icon: <DocumentIcon />,
    title: "آموزش پروژه‌محور",
    body: "خروجی هر دوره یه نمونه‌کار واقعی می‌شه که توی رزومه‌ی حرفه‌ای‌ت می‌درخشه.",
  },
];

export default function Pillars() {
  return (
    <section className="max-w-[80%] mx-auto py-[88px] px-6 bg-white">
      <h2 className="text-right font-black text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.3] mb-5">
        چرا خانواده‌ها به ما{" "}
        <span className="text-teal-wordmark">اعتماد می‌کنن</span>
      </h2>
      <p className="text-right font-medium text-[14px] sm:text-[16px] leading-[1.9] text-navy/60 max-w-[620px]  mb-16">
        هر دانش‌آموز یه مسیر شخصی داره. سیستم آموزشی ما براساس چهار ستون طراحی شده تا هرفرد بهترین نسخه از خودش بشه
      </p>

      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((p, i) => {
          // ترتیب چرخش از راست به چپ: منفی دو، دو، منفی دو، دو
          // چون ایندکس ۰ سمت راست قرار می‌گیرد، زوج‌ها منفی ۲ و فرد‌ها ۲ درجه می‌چرخند.
          const rotation = i % 2 === 0 ? -2 : 2;
          
          return (
            <PillarCard key={p.index} {...p} rotation={rotation} />
          );
        })}
      </div>
    </section>
  );
}