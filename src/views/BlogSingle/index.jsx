"use client";
import Link from "next/link";
import Container from "../../layout/Container";
import { useEnrollment } from "../../lib/EnrollmentContext";

export default function BlogSingle() {
  const { openEnrollment } = useEnrollment();

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* پترن پس‌زمینه */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "url(/assets/Pattern/layout-pattern.png)",
          backgroundSize: "22rem",
        }}
      />

      <Container className="relative z-10">
        <div className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          {/* آیکون */}
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[0_1.75rem_0_1.75rem] border-2 border-ink bg-teal shadow-[5px_5px_0_0_#292827] rotate-2">
            <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
          </div>

          {/* تگ «به‌زودی» */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#F5A623] px-5 py-1.5 text-[0.8125rem] font-black text-ink shadow-[3px_3px_0_0_#292827] -rotate-1">
            ✦ به‌زودی
          </span>

          <h1 className="max-w-3xl text-[2rem] sm:text-[3rem] font-black leading-[1.35] text-ink">
            وبلاگ <span className="inline-block text-teal -rotate-2">در حال</span>{" "}
            <span className="inline-block text-magenta rotate-1">توسعه</span> است
          </h1>

          <p className="mt-6 max-w-xl text-[1rem] sm:text-[1.125rem] font-bold leading-[2] text-ink/60">
            داریم روی مقالات، راهنماها و داستان‌های اکوسیستم استارتاپی رکاد کار
            می‌کنیم. به‌زودی اینجا منتظرتونه — تا اون موقع، رویدادها رو از دست نده!
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-[0_0.84375rem_0_0.84375rem] bg-ink px-7 py-3.5 text-[1rem] font-black text-white shadow-[4px_4px_0_0_rgba(41,40,39,0.25)] hover:-translate-y-1 transition-all"
            >
              📅 دیدن ایونت‌ها
            </Link>
            <button
              onClick={openEnrollment}
              className="inline-flex items-center gap-2 rounded-[0_0.84375rem_0_0.84375rem] bg-white px-7 py-3.5 text-[1rem] font-black text-navy-alt border-2 border-ink shadow-[4px_4px_0_0_#292827] hover:-translate-y-1 hover:-rotate-1 transition-all"
            >
              پیش‌ثبت‌نام
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
