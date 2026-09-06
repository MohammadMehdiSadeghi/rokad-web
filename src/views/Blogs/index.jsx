"use client";
/* ============================================================
   رکاد — صفحهٔ همهٔ بلاگ‌ها (Blog Index)
   ساختار: برگرفته از صفحهٔ Blog Index پروژهٔ رکاد کالج
   دیزاین: سیستم رکاد (تیل اصلی + سرمه‌ای/مجنتا/نارنجی/بنفش)
   قواعد: سایهٔ سخت = رنگ حاشیه، چرخش‌های متناوب ±۱.۵ درجه
   ============================================================ */
import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "../../layout/Container";
import fallbackBlogs from "../../lib/fallback/blog";

/* تبدیل اعداد لاتین به فارسی */
const FA = "۰۱۲۳۴۵۶۷۸۹";
const toFa = (n) => String(n).replace(/\d/g, (d) => FA[d]);

/* ---------- پالت رکاد ---------- */
const TONES = {
  teal:    { solid: "#58bdaf", dark: "#2e7068", tint: "#f2faf9", darker: "#1f413d", light: "#7ed3c6" },
  navy:    { solid: "#21295a", dark: "#0f1430", tint: "#f4f5fb", darker: "#0f1430", light: "#3b4b8f" },
  magenta: { solid: "#e0195b", dark: "#a81344", tint: "#fefafb", darker: "#a81344", light: "#e699b5" },
  orange:  { solid: "#f4971f", dark: "#a8641a", tint: "#fef6e8", darker: "#a8641a", light: "#ffd641" },
  purple:  { solid: "#4f215a", dark: "#2b1236", tint: "#f3eef7", darker: "#2b1236", light: "#8654b3" },
};

/* پرسونای هر پست → تن رنگی */
const PERSONA_TONE = {
  eco: "teal",
  male: "navy",
  female: "magenta",
  college: "orange",
  club: "purple",
};

/* گرادیان کاور: برای تیل از روشن‌ترین درجه استفاده می‌شود تا تیره نشود */
const coverBg = (tone, deg = 135) => {
  const c = TONES[tone] || TONES.teal;
  if (tone === "teal") {
    return `linear-gradient(${deg}deg, ${c.light} 0%, ${c.solid} 50%, ${c.dark} 100%)`;
  }
  return `linear-gradient(${deg}deg, ${c.light} 0%, ${c.solid} 55%, ${c.dark} 100%)`;
};

/* ---------- آیکون‌ها ---------- */
const S = { fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" };
const I = {
  Search: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>,
  Arrow: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><path d="M19 12H5M12 5l-7 7 7 7" /></svg>,
  ArrowLeft: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
  Clock: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  Eye: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>,
  Bookmark: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l7-4 7 4z" /></svg>,
  Chat: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  Flame: (p) => <svg viewBox="0 0 24 24" {...S} {...p}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>,
  Rocket: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
  Book: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
  Sparkle: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z" /></svg>,
};

/* ---------- داده‌ها از fallback سایت ---------- */
/* بازدیدهای (مجازی) هر پست برای متا و پرخواننده‌ها */
const READS = {
  "eco-1": "۴.۲K", "eco-2": "۳.۸K",
  "male-1": "۶.۷K", "male-2": "۳.۲K", "male-3": "۴.۵K",
  "female-1": "۵.۱K", "female-2": "۸.۳K", "female-3": "۲.۹K",
  "college-1": "۷.۱K", "college-2": "۴.۹K", "college-3": "۹.۲K",
  "club-1": "۵.۸K", "club-2": "۳.۴K", "club-3": "۶.۰K",
};

/* اندازهٔ کارت‌ها در گرید (الگوی مرجع کالج) */
const SIZES = ["lg", "sm", "sm", "md", "md", "sm", "sm", "md", "lg", "sm", "sm", "md", "sm"];

/* چرخش یکدست: همه یک درجه‌چرخش (۱.۵) با علامت متناوب */
const ROT = (i) => (i % 2 === 0 ? "-1.5deg" : "1.5deg");

/* دسته‌بندی‌ها = پرسوناهای رکاد */
const CATEGORIES = [
  { id: "all", label: "همه", tone: null },
  { id: "eco", label: "اکوسیستم", tone: "teal" },
  { id: "male", label: "هنرجویان", tone: "navy" },
  { id: "female", label: "دخترها", tone: "magenta" },
  { id: "college", label: "کالج", tone: "orange" },
  { id: "club", label: "کلوپ", tone: "purple" },
];

/* ============================================================
   هیرو
   ============================================================ */
function Hero({ query, setQuery }) {
  /* همهٔ کلمات هیرو یک درجه‌چرخش یکسان (۲) با علامت‌های متناوب */
  const line1 = [
    { text: "قصه‌ها,", rot: "-2deg" },
    { text: "ایده‌ها", rot: "2deg" },
    { text: "و", rot: "-2deg" },
    { text: "تجربه‌های", rot: "2deg" },
  ];
  const line2 = [
    { text: "یک", rot: "-2deg" },
    { text: "نسل", rot: "2deg", hl: true },
    { text: "کارآفرین", rot: "-2deg", hl: true },
  ];

  return (
    <section className="bi-hero">
      {/* اشکال تزئینی */}
      <div className="bi-hero-deco bi-hero-deco-1" style={{ background: "var(--bi-magenta)" }} />
      <div className="bi-hero-deco bi-hero-deco-2" style={{ background: "var(--bi-navy)" }} />

      <Container className="relative z-[2] px-4 sm:px-6 lg:px-8">
        <Link className="bi-back" href="/">
          <I.ArrowLeft style={{ width: 14, height: 14 }} /> بازگشت به خانه
        </Link>

        {/* پیل بردکرامب */}
        <div className="mb-8 flex justify-center">
          <div className="bi-pill">
            <I.Sparkle style={{ width: 16, height: 16, color: "var(--bi-primary-dark)" }} />
            <span>مجلهٔ رکاد</span>
            <span style={{ color: "var(--bi-ink-subtle)" }}>·</span>
            <span style={{ color: "var(--bi-primary-dark)", fontWeight: 900 }}>شماره ۱۴۰۵</span>
          </div>
        </div>

        {/* تیتر */}
        <h1 className="bi-title">
          <span className="bi-line">
            {line1.map((w, i) => (
              <span key={i} className="bi-w" style={{ transform: `rotate(${w.rot})` }}>{w.text}</span>
            ))}
          </span>
          <span className="bi-line">
            {line2.map((w, i) => (
              <span key={i} className={`bi-w${w.hl ? " hl" : ""}`} style={{ transform: `rotate(${w.rot})` }}>{w.text}</span>
            ))}
          </span>
        </h1>

        {/* زیرتیتر */}
        <p className="bi-sub">
          هر هفته با مقاله‌های تازه، مصاحبه‌ها و تجربه‌های واقعی از دنیای استارتاپ‌های نوجوان همراه شما هستیم.
        </p>

        {/* جست‌وجو */}
        <form className="bi-search" onSubmit={(e) => e.preventDefault()}>
          <div className="bi-search-sh" />
          <div className="bi-search-box">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="دنبال چی می‌گردی؟ مثلاً «استارتاپ» یا «کلوپ»"
            />
            <button type="submit">
              <I.Search style={{ width: 18, height: 18 }} />
              <span className="bi-hide-mobile">جست‌وجو</span>
            </button>
          </div>
        </form>

        {/* تگ‌های پرطرفدار */}
        <div className="bi-poptags">
          <span>جست‌وجوهای پرطرفدار:</span>
          {["اکوسیستم", "کلوپ AI", "مسیر شغلی", "دخترها", "هنرستان"].map((t, i) => (
            <button key={i} onClick={() => setQuery(t)}>{t}</button>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   مقالهٔ ویژه (Featured)
   ============================================================ */
function Featured({ featured }) {
  const initials = featured.author.trim().split(/\s+/).map((w) => w[0]).join(".");
  return (
    <section className="bi-featured">
      <Container className="px-4 sm:px-6 lg:px-8">
        {/* هدر سکشن */}
        <div className="bi-sec-head">
          <div className="flex items-center gap-3">
            <span className="bi-dot-ring" />
            <h2 className="bi-h2">
              <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>مقاله</span>{" "}
              <span className="inline-block" style={{ transform: "rotate(1.5deg)", color: "var(--bi-magenta)" }}>ویژه</span>{" "}
              <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>این هفته</span>
            </h2>
          </div>
          <a className="bi-more-link" href="#blog-grid">همه مقالات ویژه <I.Arrow style={{ width: 16, height: 16 }} /></a>
        </div>

        {/* کارت ویژه */}
        <div className="bi-featured-card">
          <div className="bi-featured-sh" />
          <div className="bi-featured-grid">
            {/* سمت تصویر */}
            <div className="bi-featured-media" style={{ background: coverBg("teal") }}>
              <div className="bi-feat-shape bi-feat-shape-1" style={{ background: "var(--bi-navy)" }} />
              <div className="bi-feat-shape bi-feat-shape-2" style={{ background: "var(--bi-magenta)" }} />
              <div className="bi-feat-rocket">
                <I.Rocket style={{ color: "var(--bi-navy)", width: 32, height: 32, transform: "rotate(-20deg)" }} />
              </div>

              <div className="bi-feat-top">
                <span className="bi-feat-hot">
                  <I.Flame style={{ width: 14, height: 14, color: "var(--bi-primary)" }} />
                  داغ‌ترین مقاله هفته
                </span>
              </div>
              <div className="bi-feat-chips">
                <span className="chip white">اکوسیستم</span>
                <span className="chip navy">راهنمای پروژه</span>
              </div>
            </div>

            {/* سمت محتوا */}
            <div className="bi-featured-body">
              <div>
                <div className="bi-feat-meta">
                  <span><I.Clock style={{ width: 14, height: 14 }} /> {featured.date}</span>
                  <span className="sep" />
                  <span><I.Eye style={{ width: 14, height: 14 }} /> ۱۲.۴K بازدید</span>
                  <span className="sep bi-hide-mob-inline" />
                  <span className="bi-hide-mob-inline"><I.Chat style={{ width: 14, height: 14 }} /> ۴۸ نظر</span>
                </div>

                <h3 className="bi-feat-title">{featured.title}</h3>
                <p className="bi-feat-desc">{featured.body}</p>

                <div className="bi-progress">
                  <span> {featured.readTime}</span>
                  <div className="track"><div className="fill" style={{ width: "35%" }} /></div>
                  <span>۳۵٪</span>
                </div>
              </div>

              <div className="bi-feat-foot">
                <div className="bi-author-mini">
                  <span className="avatar">{initials}</span>
                  <span>
                    <strong>{featured.author}</strong>
                    <small>سردبیر مجلهٔ رکاد</small>
                  </span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="bi-read-btn">
                  خواندن مقاله <I.ArrowLeft style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   فیلتر دسته‌بندی
   ============================================================ */
function Categories({ active, setActive, counts }) {
  return (
    <section className="bi-cats">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="bi-chip-row">
          {CATEGORIES.map((c, i) => {
            const isActive = active === c.id;
            const t = c.tone ? TONES[c.tone] : { solid: "var(--bi-ink)", tint: "#fff" };
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                style={{
                  background: isActive ? t.solid : t.tint,
                  color: isActive ? "#fff" : c.tone ? t.dark : "var(--bi-ink)",
                  borderColor: isActive ? "var(--bi-ink)" : "rgba(41,40,39,.15)",
                  transform: isActive ? "rotate(0deg) scale(1.05)" : `rotate(${ROT(i)})`,
                  boxShadow: isActive ? "3px 3px 0 var(--bi-ink)" : "none",
                }}
              >
                {c.label}
                <span
                  className="bi-chip-count"
                  style={{ background: isActive ? "rgba(255,255,255,.25)" : "#fff", color: isActive ? "#fff" : c.tone ? t.dark : "var(--bi-ink)" }}
                >
                  {toFa(counts[c.id] || 0)}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   گرید مقاله‌ها
   ============================================================ */
function BlogCard({ post, index }) {
  const tone = PERSONA_TONE[post.persona] || "teal";
  const c = TONES[tone];
  const size = SIZES[index % SIZES.length];

  return (
    <div className={`bi-card bi-card-${size}`} style={{ transform: `rotate(${ROT(index)})` }}>
      <div className="bi-card-sh" />
      <Link href={`/blog/${post.slug}`} className="bi-card-body">
        {/* هدر رنگی */}
        <div className="bi-card-media" style={{ background: coverBg(tone) }}>
          <div className="bi-card-circle" style={{ background: "rgba(255,255,255,.25)" }} />
          <div className="bi-card-square" />
          <span className="bi-card-tag" style={{ color: c.dark }}>#{post.tag || CATEGORIES.find((x) => x.id === post.persona)?.label}</span>

          <button
            className="bi-card-bookmark"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); e.currentTarget.style.background = c.solid; }}
            aria-label="ذخیره"
          >
            <I.Bookmark style={{ width: 15, height: 15 }} />
          </button>
        </div>

        {/* محتوا */}
        <div className="bi-card-info">
          <div className="bi-card-meta">
            <span><I.Clock style={{ width: 12, height: 12 }} /> {post.readTime}</span>
            <span className="dot" />
            <span>{post.date}</span>
            <span className="dot" />
            <span style={{ color: c.dark, fontWeight: 900 }}><I.Eye style={{ width: 12, height: 12 }} /> {READS[post.id]}</span>
          </div>
          <h3 className={`bi-card-title${size === "lg" ? " lg" : ""}`}>{post.title}</h3>
          <p className="bi-card-excerpt">{post.body}</p>

          <div className="bi-card-foot">
            <span className="bi-card-author">
              <span className="avatar" style={{ background: coverBg(tone) }}>{post.author.charAt(0)}</span>
              {post.author}
            </span>
            <span className="bi-card-arr" style={{ background: c.solid }}>
              <I.ArrowLeft style={{ width: 14, height: 14 }} />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function BlogGrid({ posts }) {
  return (
    <section className="bi-grid-sec" id="blog-grid">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="bi-sec-head">
          <h2 className="bi-h2">
            <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>همه‌ی</span>{" "}
            <span className="inline-block" style={{ transform: "rotate(1.5deg)", color: "var(--bi-primary-dark)" }}>مقاله‌ها</span>
          </h2>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--bi-ink-subtle)" }}>مرتب‌سازی:</span>
            <button className="bi-sort">جدیدترین <span style={{ fontSize: 10 }}>▼</span></button>
          </div>
        </div>

        <div className="bi-blog-grid">
          {posts.map((p, i) => <BlogCard key={p.id} post={p} index={i} />)}
        </div>

        {posts.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--bi-ink-subtle)", fontWeight: 700, padding: "2rem 0" }}>
            مقاله‌ای در این دسته پیدا نشد.
          </p>
        )}

        <div className="mt-14 flex justify-center">
          <div className="bi-loadmore">
            <div className="bi-loadmore-sh" />
            <button>
              مقاله‌های بیشتر
              <span className="bi-loadmore-num">{toFa(posts.length)}</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   پرخواننده‌ترین‌های ماه
   ============================================================ */
function Trending({ posts }) {
  const ids = ["college-3", "female-2", "male-1"];
  const items = ids
    .map((id, i) => {
      const p = posts.find((x) => x.id === id);
      return p ? { rank: i + 1, post: p } : null;
    })
    .filter(Boolean);

  return (
    <section className="bi-trending">
      <Container className="relative z-[1] px-4 sm:px-6 lg:px-8">
        <div className="bi-sec-head">
          <div className="flex items-center gap-3">
            <span className="bi-trend-ic">
              <I.Flame style={{ color: "#fff", width: 22, height: 22, transform: "rotate(4deg)" }} />
            </span>
            <h2 className="bi-h2">
              <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>پرخواننده‌ترین‌های</span>{" "}
              <span className="inline-block" style={{ transform: "rotate(1.5deg)", color: "var(--bi-magenta)" }}>ماه</span>
            </h2>
          </div>
          <span className="bi-update">به‌روزرسانی هر یکشنبه</span>
        </div>

        <div className="bi-trend-grid">
          {items.map(({ rank, post }) => {
            const c = TONES[PERSONA_TONE[post.persona]];
            return (
              <div key={post.id} className="bi-trend-cell" style={{ transform: `rotate(${ROT(rank)})` }}>
                <div className="bi-trend-sh" />
                <article className="bi-trend-card">
                  <span className="bi-trend-rank" style={{ color: c.solid }}>#{toFa(rank)}</span>
                  <div className="bi-trend-top">
                    <span className="bi-trend-badge" style={{ background: c.solid }}>رتبه {toFa(rank)}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <div className="bi-trend-foot">
                    <span>{post.author}</span>
                    <span style={{ color: c.solid, fontWeight: 900 }}>{READS[post.id]}</span>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   نویسنده‌ها
   ============================================================ */
function Authors() {
  const authors = [
    { name: "تیم محتوای رکاد", role: "سردبیر مجله", tone: "teal", initials: "ت.ر" },
    { name: "پریسا صادقی", role: "راوی داستان‌های دخترها", tone: "magenta", initials: "پ.ص" },
    { name: "آرش کاظمی", role: "مسئول کلوپ AI", tone: "purple", initials: "آ.ک" },
    { name: "نازنین مقدم", role: "مربی راهنمای تحصیلی", tone: "orange", initials: "ن.م" },
  ];
  const postsCount = (name) => fallbackBlogs.filter((p) => p.author === name).length;

  return (
    <section className="bi-authors">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="bi-sec-head">
          <h2 className="bi-h2">
            <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>قلم‌های</span>{" "}
            <span className="inline-block" style={{ transform: "rotate(1.5deg)", color: "var(--bi-primary-dark)" }}>پشت</span>{" "}
            <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>مقاله‌ها</span>
          </h2>
          <a className="bi-more-link" href="#blog-grid">همه نویسنده‌ها <I.Arrow style={{ width: 16, height: 16 }} /></a>
        </div>

        <div className="bi-author-grid">
          {authors.map((a, i) => {
            const c = TONES[a.tone];
            return (
              <div key={a.name} className="bi-author-cell" style={{ transform: `rotate(${ROT(i)})` }}>
                <div className="bi-author-sh" />
                <div className="bi-author-card">
                  <div className="bi-author-strip" style={{ background: coverBg(a.tone) }} />
                  <span className="bi-author-avatar" style={{ background: c.tint, color: c.solid }}>{a.initials}</span>
                  <h4>{a.name}</h4>
                  <p>{a.role}</p>
                  <span className="bi-author-posts" style={{ background: c.tint, color: c.solid, borderColor: c.solid }}>
                    <I.Book style={{ width: 12, height: 12 }} />
                    {toFa(postsCount(a.name))} مقاله
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   کامپوننت اصلی
   ============================================================ */
export default function BlogsView() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const featured = fallbackBlogs[0]; // eco-1 — مقالهٔ ویژه

  const counts = useMemo(() => {
    const c = { all: fallbackBlogs.length - 1 };
    fallbackBlogs.slice(1).forEach((p) => { c[p.persona] = (c[p.persona] || 0) + 1; });
    return c;
  }, []);

  const gridPosts = useMemo(() => {
    const rest = fallbackBlogs.slice(1);
    const byCat = activeCategory === "all" ? rest : rest.filter((p) => p.persona === activeCategory);
    const q = query.trim();
    if (!q) return byCat;
    return byCat.filter((p) => (p.title + p.body).includes(q));
  }, [activeCategory, query]);

  return (
    <main className="rk-bi overflow-hidden bg-white" dir="rtl">
      <Hero query={query} setQuery={setQuery} />
      <Featured featured={featured} />
      <Categories active={activeCategory} setActive={setActiveCategory} counts={counts} />
      <BlogGrid posts={gridPosts} />
      <Trending posts={fallbackBlogs} />
      <Authors />
    </main>
  );
}
