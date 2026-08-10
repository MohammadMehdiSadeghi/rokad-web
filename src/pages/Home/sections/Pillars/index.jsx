import Container from "../../../../layout/Container";
import PillarCard from "./PillarCard";
import {
  UserIcon,
  ProblemIcon,
  TeamIcon,
  DocumentIcon,
} from "../../../../common/Icons";

const pattern = "/assets/Pillars/WhyUs-Pattern.png";

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
    <section className="relative py-12 sm:py-14 lg:py-[88px] bg-white overflow-hidden">
      {/* ── Background Pattern Layer ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <Container className="relative z-10">
        {/* Title with Rotations (-3, 2, -3, 2, ...) — موبایل 20px (فیگما)، دسکتاپ 46px */}
        <h2 className="text-right font-black text-[22px] xs:text-[24px] sm:text-[38px] lg:text-[46px] leading-[1.3] mb-4 sm:mb-5 flex flex-wrap gap-x-2">
          <span className="inline-block -rotate-3">چرا</span>
          <span className="inline-block rotate-2">خانواده‌ها</span>
          <span className="inline-block -rotate-3">به</span>
          <span className="inline-block rotate-2">ما</span>
          <span className="inline-block -rotate-3 text-teal-wordmark">
            اعتماد
          </span>
          <span className="inline-block rotate-2 text-teal-wordmark">
            می‌کنن
          </span>
        </h2>

        <p className="text-right font-medium text-[12px] xs:text-[13px] sm:text-[16px] leading-[1.9] text-navy/60 max-w-[620px] mb-6 sm:mb-16">
          هر دانش‌آموز یه مسیر شخصی داره. سیستم آموزشی ما براساس چهار ستون طراحی
          شده تا هرفرد بهترین نسخه از خودش بشه
        </p>

        {/* موبایل: گرید ۲×۲ فشرده (فیگما 412px)؛ دسکتاپ: ۴ ستون */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((p, i) => {
            // ترتیب چرخش از راست به چپ: منفی دو، دو، منفی دو، دو
            const rotation = i % 2 === 0 ? -2 : 2;

            return <PillarCard key={p.index} {...p} rotation={rotation} />;
          })}
        </div>
      </Container>
    </section>
  );
}
