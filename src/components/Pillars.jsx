import PillarCard from "./PillarCard.jsx";
import { UserIcon, ProblemIcon, TeamIcon, DocumentIcon } from "./icons.jsx";

const pillars = [
  {
    index: "01",
    icon: <UserIcon />,
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه.",
  },
  {
    index: "02",
    icon: <ProblemIcon />,
    title: "یادگیری مسئله‌محور",
    body: "به‌جای تئوری خشک، روی چالش‌های واقعی دنیای کسب و کار کار می‌کنی و تجربه‌ی زنده می‌گیری.",
  },
  {
    index: "03",
    icon: <TeamIcon />,
    title: "یادگیری مشارکتی",
    body: "کار تیمی روی پروژه‌های واقعی. یاد می‌گیری چطور با دیگران بسازی، رهبری کنی و اعتماد بسازی.",
  },
  {
    index: "04",
    icon: <DocumentIcon />,
    title: "آموزش پروژه‌محور",
    body: "خروجی هر دوره یه نمونه‌کار واقعی می‌شه که توی رزومه‌ی حرفه‌ای‌ت می‌درخشه.",
  },
];

export default function Pillars() {
  return (
    <section className="py-[88px] px-6">
      <h2 className="text-center font-black text-[28px] sm:text-4xl lg:text-[44px] mb-5">
        چرا خانواده‌ها به ما اعتماد می‌کنن؟
      </h2>
      <p className="text-center font-semibold text-base leading-[1.8] text-navy max-w-[820px] mx-auto mb-14">
        هر دانش‌آموز یه مسیر شخصی داره. سیستم آموزشی ما براساس چهار ستون
        طراحی شده تا هرفرد بهترین نسخه از خودش بشه.
      </p>
      <div className="max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <PillarCard key={p.index} {...p} />
        ))}
      </div>
    </section>
  );
}
