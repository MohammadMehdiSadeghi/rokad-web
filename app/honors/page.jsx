import HonorsPage from "../../src/views/Honors";
import { pageMeta } from "../../src/lib/seo";

export const metadata = pageMeta({
  title: "افتخارات | رکاد",
  description: "آرشیو افتخارات رکاد — تقدیرها، لیگ‌ها و رکوردهای اولین هنرستان استارتاپی ایران.",
  path: "/honors",
});

export default function Page() {
  return <HonorsPage />;
}
