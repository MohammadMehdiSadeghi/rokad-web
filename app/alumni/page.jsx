import AlumniPage from "../../src/views/Alumni";
import { pageMeta } from "../../src/lib/seo";

export const metadata = pageMeta({
  title: "دانش‌آموختگان | رکاد",
  description: "دانش‌آموختگان رکاداسکول — همه‌ی کسانی که راه رکاد را طی کرده‌اند.",
  path: "/alumni",
});

export default function Page() {
  return <AlumniPage />;
}
