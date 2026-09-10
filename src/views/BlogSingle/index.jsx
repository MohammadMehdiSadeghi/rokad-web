"use client";
import Container from "../../layout/Container";
import { useEnrollment } from "../../lib/EnrollmentContext";
import { post, blocks, related } from "./data.js";

// ── رنگ‌های تم تیل (هم‌خانواده) ──
const C = {
  accent: "#59bbaf",
  dark: "#2e7068",
  tint: "#f2faf9",
  ink: "#292827",
  navy: "#202a5a",
  navyDark: "#0f1430",
  magenta: "#e0195b",
  magentaDark: "#a81344",
  magentaTint: "#fdf2f6",
};

// ── بلوک‌های محتوا ──
function Block({ b }) {
  if (b.type === "h2") {
    const hc = [C.accent, C.navy, C.magenta][parseInt(String(b.id || "s0").slice(1)) % 3];
    return (
      <h2 id={b.id} className="mb-4 mt-10 flex items-center gap-3 text-[1.375rem] sm:text-[1.625rem] font-black" style={{ color: hc }}>
        <span className="inline-block h-7 w-2 rounded-full" style={{ background: hc }} />
        {b.text}
      </h2>
    );
  }
  if (b.type === "quote")
    return (
      <div className="relative my-8 rounded-[0_1.5rem_0_1.5rem] border-2 bg-[#f2faf9] p-6 sm:p-8" style={{ borderColor: C.accent, boxShadow: `5px 5px 0 0 ${C.accent}` }}>
        <span className="absolute -top-5 right-6 text-[4rem] leading-[1] font-black select-none" style={{ color: C.accent }}>”</span>
        <p className="text-[1.0625rem] sm:text-[1.1875rem] font-bold leading-[1.9] text-ink">{b.text}</p>
      </div>
    );
  if (b.type === "info")
    return (
      <div className="my-8 overflow-hidden rounded-[0_1.25rem_0_1.25rem] border-2" style={{ borderColor: C.magenta, boxShadow: `4px 4px 0 0 ${C.magenta}` }}>
        <div className="px-6 py-2.5 text-white text-[0.875rem] font-black" style={{ background: C.magenta }}>{b.label}</div>
        <div className="px-6 py-5 text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.9] text-ink" style={{ background: C.magentaTint }}>{b.text}</div>
      </div>
    );
  return (
    <p className="mb-6 text-[1rem] sm:text-[1.0625rem] leading-[2.1] text-ink/85 font-medium">{b.text}</p>
  );
}

export default function BlogSingle() {
  const { openEnrollment } = useEnrollment();

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* پترن پس‌زمینه */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.3]"
        style={{ backgroundImage: "url(/assets/Pattern/layout-pattern.png)", backgroundSize: "22rem" }}
      />

      <Container className="relative z-10 pt-[2.5rem] sm:pt-[3.5rem]">
        {/* بریدکرامب */}
        <nav className="mb-8 flex items-center gap-2 text-[0.8125rem] font-bold text-ink/50" aria-label="مسیر">
          <a href="/" className="hover:text-teal transition-colors">خانه</a>
          <span>/</span>
          <a href="/blog" className="hover:text-teal transition-colors">وبلاگ</a>
          <span>/</span>
          <span className="text-ink/80">چطور یک نوجوان را عاشق کد کنیم؟</span>
        </nav>

        {/* گرید اصلی: مقاله + سایدبار */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-10 lg:gap-12 items-start">

          {/* ══════ مقاله ══════ */}
          <article className="min-w-0">
            {/* تگ‌ها */}
            <div className="mb-5 flex flex-wrap gap-2">
              {post.tags.map((t, i) => (
                <span
                  key={i}
                  className={`rounded-full border-2 px-4 py-1.5 text-[0.8125rem] font-extrabold ${i === 2 ? "bg-white text-ink" : "text-white"}`}
                  style={i === 0
                    ? { background: C.accent, borderColor: C.dark, boxShadow: `3px 3px 0 0 ${C.dark}` }
                    : i === 1
                    ? { background: C.navy, borderColor: C.navyDark, boxShadow: `3px 3px 0 0 ${C.navyDark}` }
                    : { borderColor: C.ink }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* تیتر */}
            <h1 className="mb-6 flex flex-wrap gap-x-3 gap-y-2 text-[2rem] sm:text-[2.75rem] font-black leading-[1.4] text-ink">
              {post.titleWords.map((w, i) => (
                <span key={i} className="inline-block" style={w.accent ? { color: w.accent === "navy" ? C.navy : C.magenta } : undefined}>
                  {w.t}
                </span>
              ))}
            </h1>

            {/* متا */}
            <div className="mb-7 flex flex-wrap items-center gap-3 text-[0.875rem] font-bold text-ink/50">
              {post.meta.map((m, i) => (
                <span key={i} className="flex items-center gap-3">
                  {i > 0 && <span className="text-[0.5rem]" style={{ color: i % 2 ? C.magenta : C.accent }}>●</span>}
                  {m}
                </span>
              ))}
            </div>

            {/* کاور */}
            <div
              className="relative mb-10 grid h-64 sm:h-80 place-items-center overflow-hidden rounded-[0_2rem_0_2rem] border-2"
              style={{ borderColor: C.ink, boxShadow: `6px 6px 0 0 ${C.ink}`, background: "linear-gradient(135deg, #7ed3c6 0%, #59bbaf 45%, #202a5a 100%)" }}
            >
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border-2 bg-white px-4 py-1.5 text-[0.75rem] font-extrabold text-ink whitespace-nowrap" style={{ borderColor: C.dark, boxShadow: `2px 2px 0 0 ${C.dark}` }}>
                {post.coverCaption}
              </span>
            </div>

            {/* بدنه */}
            <div>
              {blocks.map((b, i) => <Block key={i} b={b} />)}
            </div>

            {/* نویسنده پایین مقاله */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 rounded-[0_1.75rem_0_1.75rem] border-2 bg-white p-6" style={{ borderColor: C.ink, boxShadow: `5px 5px 0 0 ${C.ink}` }}>
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[0_1rem_0_1rem] border-2 text-[1.25rem] font-black text-white" style={{ background: C.accent, borderColor: C.ink }}>
                {post.author.initials}
              </div>
              <div className="text-center sm:text-right">
                <div className="text-[1.0625rem] font-black text-ink">{post.author.name}</div>
                <div className="mb-1.5 text-[0.8125rem] font-bold" style={{ color: C.dark }}>{post.author.role}</div>
                <p className="text-[0.875rem] leading-[1.9] text-ink/60">{post.author.bio}</p>
              </div>
            </div>

            {/* مطالب مرتبط */}
            <section className="mt-14 mb-16">
              <h2 className="mb-6 flex items-center gap-3 text-[1.375rem] font-black text-ink">
                <span className="inline-block h-7 w-2 rounded-full" style={{ background: C.magenta }} />
                مطالب مرتبط
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r, i) => (
                  <a key={i} href="/blog" className="group block overflow-hidden rounded-[0_1.5rem_0_1.5rem] border-2 bg-white transition-all duration-300 hover:-translate-y-1.5" style={{ borderColor: C.ink, boxShadow: `4px 4px 0 0 ${C.ink}` }}>
                    <div className="h-24" style={{ background: r.tone === "teal" ? "linear-gradient(135deg,#7ed3c6,#2e7068)" : r.tone === "magenta" ? "linear-gradient(135deg,#e699b5,#a81344)" : "linear-gradient(135deg,#3b4b8f,#202a5a)" }} />
                    <div className="p-4">
                      <span className="mb-2 inline-block rounded-full border-2 px-3 py-0.5 text-[0.6875rem] font-black text-ink" style={{ borderColor: C.ink }}>{r.tag}</span>
                      <div className="text-[0.9375rem] font-black leading-[1.8] text-ink group-hover:text-teal transition-colors">{r.title}</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </article>

          {/* ══════ سایدبار (sticky) ══════ */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            {/* نویسنده */}
            <div className="rounded-[0_1.5rem_0_1.5rem] border-2 bg-white p-5" style={{ borderColor: C.ink, boxShadow: `4px 4px 0 0 ${C.ink}` }}>
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-[0_0.875rem_0_0.875rem] border-2 text-[1rem] font-black text-white" style={{ background: C.navy, borderColor: C.ink }}>
                  {post.author.initials}
                </div>
                <div>
                  <div className="text-[0.9375rem] font-black text-ink">{post.author.name}</div>
                  <div className="text-[0.75rem] font-bold" style={{ color: C.dark }}>{post.author.role}</div>
                </div>
              </div>
              <p className="text-[0.8125rem] leading-[1.9] text-ink/60">{post.author.bio}</p>
            </div>

            {/* فهرست مطالب */}
            <div className="rounded-[0_1.5rem_0_1.5rem] border-2 bg-white p-5" style={{ borderColor: C.ink, boxShadow: `4px 4px 0 0 ${C.ink}` }}>
              <div className="mb-3 text-[1rem] font-black text-ink">فهرست مطالب</div>
              <ul className="space-y-1">
                {post.toc.map((t, i) => (
                  <li key={i}>
                    <a href={`#${t.num === "۰۱" ? "s1" : t.num === "۰۲" ? "s2" : t.num === "۰۳" ? "s3" : t.num === "۰۴" ? "s4" : "s5"}`} className="flex items-start gap-2.5 py-1.5 text-[0.8125rem] font-bold text-ink/70 hover:text-teal transition-colors">
                      <span className="font-black" style={{ color: C.accent }}>{t.num}</span>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* اشتراک‌گذاری */}
            <div className="rounded-[0_1.5rem_0_1.5rem] border-2 bg-white p-5" style={{ borderColor: C.ink, boxShadow: `4px 4px 0 0 ${C.ink}` }}>
              <div className="mb-3 text-[0.9375rem] font-black text-ink">این مطلب رو به اشتراک بذار!</div>
              <div className="flex flex-wrap gap-2">
                {post.share.map((s, i) => (
                  <button key={i} className="rounded-[0_0.625rem_0_0.625rem] border-2 bg-white px-4 py-2 text-[0.8125rem] font-extrabold text-ink transition-all hover:-translate-y-0.5" style={{ borderColor: C.ink, boxShadow: `3px 3px 0 0 ${C.ink}` }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
