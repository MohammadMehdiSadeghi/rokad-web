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
      <main className="pt-[95px] lg:pt-[120px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
