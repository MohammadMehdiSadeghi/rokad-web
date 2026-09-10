import FactorsPage from "../../src/views/Factors";
import { pageMeta } from "../../src/lib/seo";

export const metadata = pageMeta({
  title: "عوامل رکاد | رکاد",
  description:
    "کادر و عوامل انسانی رکاد — مدیریت، راهبران و معاونان هنرستان‌های پسرانه و دخترانه رکاد در مشهد.",
  path: "/factors",
});

export default function Page() {
  return <FactorsPage />;
}
