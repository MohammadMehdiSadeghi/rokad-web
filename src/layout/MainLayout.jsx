// src/layout/MainLayout.jsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// وقتی روت عوض میشه: اگه هش داره (مثلا /#schools) بره سراغ همون سکشن،
// وگرنه اسکرول رو ببره بالای صفحه (رفتار عادی SPA).
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

// لایه‌ی مشترک همه‌ی صفحه‌ها: هدر بالا، فوتر پایین، محتوای هر صفحه وسط.
// کامپوننت‌های Header/Footer تنها جایی هستن که قرار بود داخل components
// بمونن؛ باقی بخش‌های صفحه‌ها به pages منتقل شدن.
export default function MainLayout() {
  return (
    <>
      <ScrollManager />
      <Header />
      {/* اسپیسر = فوت‌پرینت کامل هدر فیکس (پدینگ wrapper + ارتفاع نوار) تا
          هیچ سکشنی زیر هدر نره؛ فاصله‌ی بصری خود سکشن‌ها با pt خودشون کنترل میشه */}
      <main className="pt-12 sm:pt-[4.25rem] lg:pt-[7.4375rem] xl:pt-[7.9375rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
