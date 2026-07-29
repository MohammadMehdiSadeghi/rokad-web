import PillarCard from "../PillarCard";
import { UserIcon, ProblemIcon, TeamIcon, DocumentIcon } from "../Icons";
import pattern from "../../assets/Pillars/WhyUs-Pattern.png"; // ایمپورت عکس

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

// حذف { pattern } از ورودی تابع
export default function Pillars() {
  return (
    <section className="relative py-[88px] bg-white overflow-hidden">
      {/* ── Background Pattern Layer ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src={pattern} // استفاده از متغیر ایمپورت شده
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-70" // شفافیت ۳۰ درصد
        />
      </div>

      {/* Content Container - 80% width */}
      <div className="relative z-10 max-w-[80%] mx-auto px-6">
        {/* Title with Rotations (-3, 2, -3, 2, ...) */}
        <h2 className="text-right font-black text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.3] mb-5 flex flex-wrap gap-x-2">
          <span className="inline-block -rotate-3">چرا</span>
          <span className="inline-block rotate-2">خانواده‌ها</span>
          <span className="inline-block -rotate-3">به</span>
          <span className="inline-block rotate-2">ما</span>
          <span className="inline-block -rotate-3 text-teal-wordmark">اعتماد</span>
          <span className="inline-block rotate-2 text-teal-wordmark">می‌کنن</span>
        </h2>

        <p className="text-right font-medium text-[14px] sm:text-[16px] leading-[1.9] text-navy/60 max-w-[620px] mb-16">
          هر دانش‌آموز یه مسیر شخصی داره. سیستم آموزشی ما براساس چهار ستون طراحی شده تا هرفرد بهترین نسخه از خودش بشه
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => {
            // ترتیب چرخش از راست به چپ: منفی دو، دو، منفی دو، دو
            // چون ایندکس ۰ سمت راست قرار می‌گیرد، زوج‌ها منفی ۲ و فرد‌ها ۲ درجه می‌چرخند.
            const rotation = i % 2 === 0 ? -2 : 2;

            return (
              <PillarCard key={p.index} {...p} rotation={rotation} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
