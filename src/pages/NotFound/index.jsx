import { Link } from "react-router-dom";
import Container from "../../layout/Container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 bg-white" dir="rtl">
      <Container className="text-center">
        <h1 className="font-black text-[64px] sm:text-[96px] leading-none text-navy-alt mb-4">
          ۴۰۴
        </h1>
        <p className="font-semibold text-[16px] sm:text-[20px] text-ink/70 mb-8">
          صفحه‌ای که دنبالش بودی پیدا نشد.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-pill-md bg-teal px-6 py-3 text-base2 font-extrabold text-white transition-colors duration-300 hover:bg-teal-dark"
        >
          بازگشت به صفحه‌ی اصلی
        </Link>
      </Container>
    </section>
  );
}
