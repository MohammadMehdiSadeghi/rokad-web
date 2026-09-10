import About from "../../src/views/About";
import { pageMeta } from "../../src/lib/seo";

export const metadata = pageMeta({
  title: "درباره رکاد | هنرستان استارتاپی",
  description:
    "داستان رکاد از ۱۳۹۵ تا امروز: مأموریت، ارزش‌ها، عوامل انسانی و افتخارات اولین هنرستان استارتاپی ایران.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
