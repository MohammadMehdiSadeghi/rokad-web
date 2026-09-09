// src/views/EventsSingle/index.jsx
"use client";
import Container from "../../layout/Container";
import { useEnrollment } from "../../lib/EnrollmentContext";
import { ChevronLeftIcon, ChevronRightIcon } from "../../common/Icons";
import {
  allEvents,
  author,
  newsletter,
  finalCta,
  relatedPosts,
  getRelatedQuick,
} from "./data.js";

// ── پترن‌های رسمی رکاد ──
const eventPattern = "/assets/home/Events/Event-Pattern.png";
const sectionPattern = "/assets/Pattern/layout-pattern.png";

// ── رنگ تم‌ها ──
const tones = {
  teal: { bg: "#58bdaf", deep: "#347e75" },
  magenta: { bg: "#e0195b", deep: "#a80f42" },
  navy: { bg: "#202a5a", deep: "#0d1636" },
  orange: { bg: "#F8A41D", deep: "#BA7B16" },
};

const toneText = {
  teal: "text-teal",
  magenta: "text-magenta-text",
  navy: "text-navy-alt",
  orange: "text-orange",
};

// ═══════════════ بخش‌های مقاله ═══════════════

function SectionHeading({ words, id }) {
  return (
    <h2
      id={id}
      className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] mb-6 mt-4 flex flex-wrap items-baseline gap-x-2"
    >
      {words.map((w, i) => (
        <span
          key={i}
          className={`inline-block ${w.color || "text-ink"}`}
          style={{ transform: `rotate(${w.rotate})` }}
        >
          {w.text}
        </span>
      ))}
    </h2>
  );
}

function PullQuote({ text, attr, accent }) {
  return (
    <div className={`relative my-8 sm:my-10 ${accent ? "bg-bg-blush" : "bg-bg-mint"} rounded-[0_1.5rem_0_1.5rem] p-6 sm:p-8 border-2 ${accent ? "border-magenta" : "border-teal"}`}>
      <div className="flex items-start gap-4">
        <span className={`text-[4rem] leading-[0.6] font-black select-none ${accent ? "text-magenta" : "text-teal"}`}>
          ”
        </span>
        <div>
          <p className="text-[1.0625rem] sm:text-[1.25rem] font-bold text-ink leading-[1.9]">{text}</p>
          <div className={`mt-4 text-[0.875rem] font-extrabold ${accent ? "text-magenta-text" : "text-teal-text"}`}>
            {attr}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ label, items, tone }) {
  const t = tones[tone] || tones.teal;
  return (
    <div className="relative my-8 overflow-hidden rounded-[0_1.25rem_0_1.25rem] border-2 border-ink">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundColor: t.bg }} />
      <div className="relative p-6 sm:p-7">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white text-[0.8125rem] font-extrabold" style={{ backgroundColor: t.bg }}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          {label}
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 list-none p-0 m-0">
          {items.map(([k, v], i) => (
            <li key={i} className="text-[0.9375rem] sm:text-[1rem] leading-[1.8] text-ink flex gap-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[0.65rem]" style={{ backgroundColor: t.bg }} />
              <span><strong className="font-extrabold">{k}</strong> {v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PersonCard({ person, tone }) {
  const t = tones[tone] || tones.teal;
  return (
    <div className="relative flex flex-col items-center text-center bg-white rounded-[0_1rem_0_1rem] border-2 border-ink px-3 py-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-[0.9375rem] mb-2.5"
        style={{ backgroundColor: t.bg }}
      >
        {person.initials}
      </div>
      <div className="text-[0.875rem] font-extrabold text-ink leading-snug">{person.name}</div>
      <div className="text-[0.75rem] font-semibold text-ink/50 mt-1">{person.role}</div>
      {person.badge && (
        <span className="mt-2 text-[0.625rem] font-bold text-white rounded px-2 py-0.5" style={{ backgroundColor: t.bg }}>
          {person.badge}
        </span>
      )}
    </div>
  );
}

function PeopleGrid({ items, accentItems }) {
  return (
    <div className="my-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {items.map((p, i) => (
          <PersonCard key={i} person={p} tone="teal" />
        ))}
      </div>
      {accentItems.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
          {accentItems.map((p, i) => (
            <PersonCard key={i} person={p} tone="magenta" />
          ))}
        </div>
      )}
    </div>
  );
}

// آیکون‌های گالری
function GalleryIcon({ name, className }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "team":
      return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>);
    case "pencil":
      return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>);
    case "wrench":
      return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>);
    case "screen":
      return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="m8 21 4-4 4 4M12 17v4" /></svg>);
    case "trophy":
      return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z" /></svg>);
    case "users":
      return (<svg viewBox="0 0 24 24" className={className} {...c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
    default:
      return (<svg viewBox="0 0 24 24" className={className} {...c}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="10.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>);
  }
}

function Gallery({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8">
      {items.map((g, i) => {
        const t = tones[g.tone] || tones.teal;
        return (
          <div key={i} className="relative">
            <div className="absolute top-[5px] left-[5px] w-full h-full rounded-[0_0.875rem_0_0.875rem] bg-ink" />
            <div
              className="relative flex flex-col items-center justify-center aspect-[4/3] rounded-[0_0.875rem_0_0.875rem] border-2 border-ink overflow-hidden"
              style={{ backgroundColor: t.bg }}
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img src={eventPattern} alt="" draggable="false" className="w-full h-full object-cover select-none" />
              </div>
              <div className="absolute top-2 right-2 text-[0.625rem] font-black text-white bg-ink/85 rounded px-1.5 py-0.5">{g.num}</div>
              <GalleryIcon name={g.icon} className="w-8 h-8 sm:w-9 sm:h-9 text-white relative z-10" />
              <div className="relative z-10 mt-1.5 text-[0.6875rem] sm:text-[0.75rem] font-extrabold text-white">{g.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Podium({ items }) {
  const podiumTone = { gold: "#f8a41d", silver: "#9aa0ad", bronze: "#a56216" };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
      {items.map((p, i) => (
        <div key={i} className={`relative ${i === 1 ? "sm:-mt-4 sm:scale-[1.04]" : ""}`}>
          <div className="absolute top-[6px] left-[6px] w-full h-full rounded-[0_1.25rem_0_1.25rem] bg-ink" />
          <div
            className="relative flex flex-col items-center text-center rounded-[0_1.25rem_0_1.25rem] border-2 border-ink px-5 py-6 h-full bg-white"
          >
            <div className="text-[2.25rem] leading-none mb-2">{p.medal}</div>
            <div className="text-[0.75rem] font-black text-white rounded-full px-3 py-1 mb-2" style={{ backgroundColor: podiumTone[p.tone] }}>
              {p.rank}
            </div>
            <div className="text-[1rem] font-black text-ink mb-1">{p.team}</div>
            <div className="text-[0.8125rem] font-semibold text-ink/60 leading-relaxed mb-3">{p.project}</div>
            <div className="mt-auto text-[0.75rem] font-extrabold text-teal-text">{p.members}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative my-8 pr-6 sm:pr-7">
      <div className="absolute right-[7px] top-1 bottom-1 w-[3px] rounded-full bg-navy-alt" />
      <div className="space-y-6">
        {items.map((t, i) => (
          <div key={i} className="relative">
            <span className="absolute -right-[0.85rem] top-[0.4rem] w-[13px] h-[13px] rounded-full border-2 border-navy-alt bg-teal" />
            <div className="bg-bg-mint rounded-[0_1rem_0_1rem] border border-teal/40 p-4 sm:p-5 mr-4">
              <div className="text-[0.75rem] font-black text-teal-text mb-1">{t.date}</div>
              <div className="text-[1rem] font-extrabold text-navy-alt mb-1.5">{t.title}</div>
              <div className="text-[0.875rem] text-ink/70 leading-[1.9]">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════ بلوک‌رندر ═══════════════
function ArticleBlocks({ blocks }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "lead":
            return (
              <div key={i} className="mb-8">
                <p className="text-[1.0625rem] sm:text-[1.1875rem] font-bold text-ink leading-[2]">{b.text}</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  {b.stats.map((s, j) => (
                    <div key={j} className="flex items-center gap-3 rounded-[0_0.875rem_0_0.875rem] border-2 border-ink bg-white px-4 py-2.5">
                      <span className="text-[1.375rem] font-black text-teal">{s.value}</span>
                      <span className="text-[0.8125rem] font-bold text-ink/70 max-w-[8rem] leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          case "h2":
            return <SectionHeading key={i} words={b.words} id={b.id} />;
          case "h3":
            return (
              <h3 key={i} className="font-black text-[1.25rem] sm:text-[1.5rem] text-navy-alt mb-4 mt-8 flex items-center gap-2.5">
                <span className="inline-block w-2 h-6 rounded-full bg-teal" />
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[0.9375rem] sm:text-[1.0625rem] text-ink/85 leading-[2.1] mb-5 whitespace-pre-line">
                {b.text.replace(/<strong>(.*?)<\/strong>/g, "«$1»").replace(/<em>(.*?)<\/em>/g, "$1").replace(/<a[^>]*>(.*?)<\/a>/g, "$1")}
              </p>
            );
          case "pullquote":
            return <PullQuote key={i} text={b.text} attr={b.attr} accent={b.accent} />;
          case "infobox":
            return <InfoBox key={i} label={b.label} items={b.items} tone={b.tone} />;
          case "people":
            return <PeopleGrid key={i} items={b.items} accentItems={b.accentItems} />;
          case "gallery":
            return <Gallery key={i} items={b.items} />;
          case "podium":
            return <Podium key={i} items={b.items} />;
          case "timeline":
            return <Timeline key={i} items={b.items} />;
          case "lesson":
            return (
              <div key={i} className="relative mb-5 rounded-[0_1rem_0_1rem] border-2 border-ink/10 bg-white p-5 sm:p-6 pr-16 sm:pr-20">
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-[0_0.75rem_0_0.75rem] bg-navy-alt text-white font-black text-[0.9375rem]">
                  {b.num}
                </div>
                <h4 className="font-black text-[1.0625rem] sm:text-[1.1875rem] text-navy-alt mb-2">{b.title}</h4>
                <p className="text-[0.875rem] sm:text-[0.9375rem] text-ink/80 leading-[2]">{b.text}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

// ═══════════════ آیکون‌های متا ═══════════════
function MetaIcon({ name }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "clock":
      return <svg viewBox="0 0 24 24" width="16" height="16" {...c}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
    case "calendar":
      return <svg viewBox="0 0 24 24" width="16" height="16" {...c}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
    case "user":
      return <svg viewBox="0 0 24 24" width="16" height="16" {...c}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
    default:
      return <svg viewBox="0 0 24 24" width="16" height="16" {...c}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
  }
}

// ═══════════════ هدر مقاله ═══════════════
function PostHero({ postMeta }) {
  return (
    <section className="relative overflow-hidden bg-bg-mint">
      <div className="absolute inset-0 pointer-events-none opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <img src={sectionPattern} alt="" draggable="false" className="w-full h-full object-cover select-none" />
      </div>
      <Container className="relative z-10 py-10 sm:py-14 lg:py-16">
        {/* خرده‌نان */}
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-[0.8125rem] font-bold text-ink/50" aria-label="مسیر">
          <a href="/" className="hover:text-teal transition-colors">خانه</a>
          <ChevronLeftIcon className="w-3.5 h-3.5 text-ink/30" />
          <a href="/events" className="hover:text-teal transition-colors">ایونت‌ها</a>
          <ChevronLeftIcon className="w-3.5 h-3.5 text-ink/30" />
          <span className="text-ink/40">سه روایت از رویدادهای رکاد</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          {/* متن */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-ink px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-[0.8125rem] font-extrabold text-ink">{postMeta.eyebrow}</span>
            </div>
            <h1 className="font-black text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] leading-[1.25] flex flex-wrap gap-x-2.5 mb-6">
              {postMeta.titleWords.map((w, i) => (
                <span key={i} className={`inline-block ${w.color}`} style={{ transform: `rotate(${w.rotate})` }}>
                  {w.text}
                </span>
              ))}
            </h1>
            <p
              className="text-[0.9375rem] sm:text-[1.0625rem] text-ink/75 leading-[2] mb-7 max-w-xl"
              dangerouslySetInnerHTML={{ __html: postMeta.subtitle }}
            />
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {postMeta.meta.map((m, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-ink/60">
                  <span className="text-teal"><MetaIcon name={m.icon} /></span>
                  <span>{m.text}</span>
                  {m.strong && <strong className="font-extrabold text-navy-alt">{m.strong}</strong>}
                </div>
              ))}
            </div>
          </div>

          {/* کاور */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 rotate-[2deg] bg-magenta text-white text-[0.8125rem] font-black px-4 py-1.5 rounded-[0.5rem] border-2 border-ink shadow-[2.75px_2.75px_0_#292827] z-20">
              {postMeta.sticker}
            </div>
            <div className="absolute top-[10px] left-[10px] w-full h-full rounded-[0_2rem_0_2rem] bg-navy-alt" />
            <div className="relative flex flex-col items-center justify-center aspect-[16/10] rounded-[0_2rem_0_2rem] border-[3px] border-ink bg-gradient-to-br from-teal/85 via-teal to-teal-text overflow-hidden">
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <img src={eventPattern} alt="" draggable="false" className="w-full h-full object-cover select-none" />
              </div>
              <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 opacity-90">
                <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="10.5" r="1.5" /><path d="m21 15-5-5L5 21" />
              </svg>
              <div className="relative z-10 mt-3 text-white font-black text-[0.9375rem]">{postMeta.coverLabel}</div>
              <div className="relative z-10 text-white/80 text-[0.75rem] font-semibold mt-1">{postMeta.coverCaption}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ═══════════════ سایدبار ═══════════════
function Sidebar({ onCta, toc, relatedQuick }) {
  return (
    <aside className="lg:sticky lg:top-28 self-start space-y-5">
      {/* فهرست مطالب */}
      <div className="relative">
        <div className="absolute top-[6px] left-[6px] w-full h-full rounded-[0_1.25rem_0_1.25rem] bg-navy-alt" />
        <nav className="relative bg-white rounded-[0_1.25rem_0_1.25rem] border-2 border-ink p-5 sm:p-6" aria-label="فهرست مطالب">
          <div className="flex items-center gap-2 text-[1rem] font-black text-navy-alt mb-4">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
            فهرست مطالب
          </div>
          <ol className="list-none p-0 m-0 space-y-1">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="flex items-start gap-2.5 py-1.5 text-[0.8125rem] font-bold text-ink/70 hover:text-teal transition-colors leading-relaxed">
                  <span className="flex-shrink-0 text-[0.6875rem] font-black text-teal mt-[2px]">{t.num}</span>
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* CTA سایدبار */}
      <div className="relative">
        <div className="absolute top-[6px] left-[6px] w-full h-full rounded-[0_1.25rem_0_1.25rem] bg-ink" />
        <div className="relative rounded-[0_1.25rem_0_1.25rem] border-2 border-ink bg-orange px-5 py-6">
          <div className="text-[1.125rem] font-black text-white mb-2.5">آماده‌ای بپیوندی؟</div>
          <p className="text-[0.8125rem] font-semibold text-white/90 leading-[1.9] mb-4">
            پیش‌ثبت‌نام هنرستان دخترانه و پسرانه رکاد باز شده. یه ایمیل بذار تا از رویداد بعدی خبردار بشی.
          </p>
          <div className="relative inline-flex items-center justify-center rotate-[-1.55deg] hover:rotate-0 transition-all duration-300 flex-shrink-0">
            <div
              aria-hidden="true"
              className="absolute top-[0.125rem] left-[0.125rem] w-full h-full rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] bg-navy-alt"
            />
            <button
              onClick={onCta}
              className="relative z-10 inline-flex items-center gap-1.5 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] bg-white px-3.5 py-2 text-xs font-extrabold text-navy-alt cursor-pointer whitespace-nowrap border-2 border-[#202A5A] [background-image:linear-gradient(to_right,#202A5A,#202A5A)] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] hover:text-white transition-all duration-300 ease-out"
            >
              پیش‌ثبت‌نام
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* مطالب مرتبط */}
      <div className="relative">
        <div className="absolute top-[6px] left-[6px] w-full h-full rounded-[0_1.25rem_0_1.25rem] bg-teal" />
        <div className="relative bg-white rounded-[0_1.25rem_0_1.25rem] border-2 border-ink p-5 sm:p-6">
          <div className="text-[1rem] font-black text-navy-alt mb-3">مطالب مرتبط</div>
          <ul className="list-none p-0 m-0 space-y-1">
            {relatedQuick.map((r, i) => (
              <li key={i}>
                <a href={r.href || "#"} className="flex items-start gap-2.5 py-2 text-[0.8125rem] font-bold text-ink/75 hover:text-teal transition-colors leading-relaxed border-b border-ink/5 last:border-0">
                  <span className="flex-shrink-0 w-4 h-4 text-teal mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </span>
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

// ═══════════════ نویسنده ═══════════════
function AuthorCard() {
  return (
    <div className="relative mt-10">
      <div className="absolute top-[6px] left-[6px] w-full h-full rounded-[0_1.25rem_0_1.25rem] bg-teal" />
      <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:items-center rounded-[0_1.25rem_0_1.25rem] border-2 border-ink bg-white p-5 sm:p-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-navy-alt text-white font-black text-[1.25rem] flex-shrink-0">
          {author.initials}
        </div>
        <div className="flex-1">
          <div className="text-[0.75rem] font-bold text-teal-text mb-0.5">{author.label}</div>
          <div className="text-[1.0625rem] font-black text-navy-alt mb-1.5">{author.name}</div>
          <p className="text-[0.8125rem] text-ink/70 leading-[1.9]">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════ نظرات ═══════════════
function Comments({ comments }) {
  return (
    <section className="py-12 sm:py-16 bg-bg-neutral">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] flex items-center gap-3">
            <span className="inline-block -rotate-1 text-ink">نظرت</span>
            <span className="inline-block rotate-2 text-magenta">چیه؟</span>
          </h2>
          <p className="text-[0.8125rem] font-bold text-ink/50">{comments.count}</p>
        </div>

        <form className="mb-10 rounded-[0_1.25rem_0_1.25rem] border-2 border-ink bg-white p-5 sm:p-7" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="نام تو" required className="w-full rounded-[0.75rem] border-2 border-ink/15 bg-bg-mint px-4 py-3 text-[0.875rem] font-semibold text-ink outline-none focus:border-teal transition-colors placeholder:text-ink/40" />
            <input type="email" placeholder="ایمیل (نمایش داده نمی‌شه)" required className="w-full rounded-[0.75rem] border-2 border-ink/15 bg-bg-mint px-4 py-3 text-[0.875rem] font-semibold text-ink outline-none focus:border-teal transition-colors placeholder:text-ink/40" />
          </div>
          <textarea rows={4} placeholder="نظرت رو بنویس..." required className="w-full rounded-[0.75rem] border-2 border-ink/15 bg-bg-mint px-4 py-3 text-[0.875rem] font-semibold text-ink outline-none focus:border-teal transition-colors placeholder:text-ink/40 mb-4 resize-none" />
          <button type="submit" className="inline-flex items-center gap-2 rounded-[0.6rem] bg-navy-alt px-5 py-2.5 text-[0.875rem] font-extrabold text-white border-2 border-ink shadow-[2.75px_2.75px_0_#292827] hover:-translate-y-0.5 transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
            ارسال نظر
          </button>
        </form>

        <div className="space-y-5">
          {comments.list.map((c, i) => (
            <div key={i} className="flex items-start gap-4 rounded-[0_1rem_0_1rem] border-2 border-ink/10 bg-white p-5">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-teal text-white font-black text-[0.875rem]">
                {c.initials}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                  <span className="text-[0.9375rem] font-black text-navy-alt">{c.name}</span>
                  <span className="text-[0.75rem] font-semibold text-ink/40">{c.date}</span>
                </div>
                <p className="text-[0.875rem] text-ink/80 leading-[1.95]">{c.text}</p>
                <a href="#" className="inline-flex items-center gap-1.5 mt-2.5 text-[0.8125rem] font-extrabold text-teal-text hover:text-teal transition-colors">
                  پاسخ
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 17l-5-5 5-5M4 12h16" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ═══════════════ خبرنامه ═══════════════
function Newsletter() {
  return (
    <section id="newsletter" className="relative overflow-hidden bg-navy-alt py-12 sm:py-16">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <img src={sectionPattern} alt="" draggable="false" className="w-full h-full object-cover select-none" />
      </div>
      <Container className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] text-white flex flex-wrap gap-x-2">
            {newsletter.words.map((w, i) => (
              <span key={i} className="inline-block" style={{ transform: `rotate(${i % 2 ? "1deg" : "-1deg"})` }}>{w}</span>
            ))}
          </h2>
          <p className="text-[0.875rem] text-white/70 leading-[1.9] mt-3 max-w-md">{newsletter.desc}</p>
        </div>
        <form className="flex w-full max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="ایمیل تو" required className="flex-1 rounded-[0.75rem] border-2 border-white/20 bg-white/10 px-4 py-3 text-[0.875rem] font-semibold text-white outline-none focus:border-teal transition-colors placeholder:text-white/40 backdrop-blur-sm" />
          <button type="submit" className="rounded-[0.6rem] bg-teal px-6 py-3 text-[0.875rem] font-extrabold text-white border-2 border-ink shadow-[2.75px_2.75px_0_#292827] hover:-translate-y-0.5 transition-all cursor-pointer">
            عضویت
          </button>
        </form>
      </Container>
    </section>
  );
}

// ═══════════════ CTA پایانی ═══════════════
function FinalCta({ onCta }) {
  return (
    <section className="relative overflow-hidden bg-teal-light py-14 sm:py-20">
      <Container className="relative z-10 text-center">
        <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.3] text-navy-alt flex flex-wrap justify-center gap-x-3 mb-6">
          {finalCta.words.map((w, i) => (
            <span key={i} className="inline-block" style={{ transform: `rotate(${i % 2 ? "-1.5deg" : "1.5deg"})`, color: i === 3 ? "var(--tw-ink,#292827)" : undefined }}>
              {w}
            </span>
          ))}
        </h2>
        <p className="text-[0.9375rem] sm:text-[1.0625rem] text-ink/75 leading-[2] max-w-2xl mx-auto mb-9">{finalCta.desc}</p>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="relative inline-flex items-center justify-center rotate-[-1.55deg] hover:rotate-0 transition-all duration-300 flex-shrink-0">
            <div
              aria-hidden="true"
              className="absolute top-[0.125rem] left-[0.125rem] w-full h-full rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] bg-ink"
            />
            <button onClick={onCta} className="relative z-10 inline-flex items-center gap-2 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] bg-navy-alt border-2 border-ink px-3.5 xs:px-4 sm:px-6 py-2 sm:py-2.5 text-xs xs:text-sm sm:text-base font-extrabold text-white cursor-pointer whitespace-nowrap [background-image:linear-gradient(to_right,#292827,#292827)] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] transition-all duration-300 ease-out">
              پیش‌ثبت‌نام کن
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            </button>
          </div>
          <div className="relative inline-flex items-center justify-center rotate-[-1.55deg] hover:rotate-0 transition-all duration-300 flex-shrink-0">
            <div
              aria-hidden="true"
              className="absolute top-[0.125rem] left-[0.125rem] w-full h-full rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] bg-ink"
            />
            <a href="/about" className="relative z-10 inline-flex items-center gap-2 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] bg-white border-2 border-ink px-3.5 xs:px-4 sm:px-6 py-2 sm:py-2.5 text-xs xs:text-sm sm:text-base font-extrabold text-navy-alt cursor-pointer whitespace-nowrap [background-image:linear-gradient(to_right,#292827,#292827)] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] hover:text-white transition-all duration-300 ease-out">
              درباره رکاد بیشتر بدون
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ═══════════════ کامپوننت اصلی ═══════════════
export default function EventsSingle({ slug }) {
  const { openEnrollment } = useEnrollment();

  // رویداد مربوط به این slug — پیش‌فرض: رویداد اول
  const entry = allEvents.find((e) => e.slug === slug) || allEvents[0];
  const { postMeta, toc, blocks, tags, comments } = entry.event;
  const relatedQuick = getRelatedQuick(entry.slug);

  return (
    <>
      <PostHero postMeta={postMeta} />

      {/* مقاله + سایدبار */}
      <section className="py-10 sm:py-14 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-12">
          <article className="min-w-0">
            <ArticleBlocks blocks={blocks} />

            {/* تگ‌ها */}
            <div className="flex flex-wrap gap-2.5 mt-9 pt-7 border-t border-ink/10">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className={`rounded-full px-3.5 py-1.5 text-[0.8125rem] font-bold border-2 transition-colors ${
                    t.tone === "magenta"
                      ? "border-magenta text-magenta-text bg-bg-blush"
                      : t.tone === "navy"
                      ? "border-navy-alt text-navy-alt bg-bg-lavender"
                      : t.tone === "orange"
                      ? "border-[#F8A41D] text-[#BA7B16] bg-[#FEF6E8]"
                      : "border-ink/20 text-ink/70 bg-bg-neutral"
                  }`}
                >
                  {t.text}
                </span>
              ))}
            </div>

            {/* اشتراک */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span className="text-[0.875rem] font-extrabold text-ink/70">این مقاله رو با دوستات به اشتراک بذار:</span>
              <button aria-label="تلگرام" className="w-9 h-9 flex items-center justify-center rounded-[0.5rem] bg-[#0a78b5] text-white border-2 border-ink transition-transform hover:-translate-y-0.5 cursor-pointer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg>
              </button>
              <button aria-label="توییتر/X" className="w-9 h-9 flex items-center justify-center rounded-[0.5rem] bg-ink text-white border-2 border-ink transition-transform hover:-translate-y-0.5 cursor-pointer">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </button>
              <button aria-label="لینکدین" className="w-9 h-9 flex items-center justify-center rounded-[0.5rem] bg-[#0a66c2] text-white border-2 border-ink transition-transform hover:-translate-y-0.5 cursor-pointer">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </button>
              <button aria-label="کپی لینک" className="w-9 h-9 flex items-center justify-center rounded-[0.5rem] bg-teal text-white border-2 border-ink transition-transform hover:-translate-y-0.5 cursor-pointer">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              </button>
            </div>

            <AuthorCard />
          </article>

          <Sidebar onCta={openEnrollment} toc={toc} relatedQuick={relatedQuick} />
        </Container>
      </section>

      {/* مقالات مرتبط */}
      <section className="py-12 sm:py-16 bg-bg-mint/60">
        <Container>
          <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] flex flex-wrap gap-x-2 mb-9">
            <span className="inline-block -rotate-1 text-ink">این‌ها</span>
            <span className="inline-block rotate-1 text-ink">رو</span>
            <span className="inline-block -rotate-2 text-ink">هم</span>
            <span className="inline-block rotate-2 text-teal">بخون</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((p, i) => {
              const t = tones[p.tone] || tones.teal;
              return (
                <a key={i} href={p.href || "#"} className="group relative block">
                  <div className="absolute top-[7px] left-[7px] w-full h-full rounded-[0_1.25rem_0_1.25rem] bg-ink" />
                  <div className="relative rounded-[0_1.25rem_0_1.25rem] border-2 border-ink bg-white overflow-hidden transition-transform group-hover:-translate-y-1">
                    <div className="relative flex flex-col items-center justify-center aspect-[16/9] border-b-2 border-ink overflow-hidden" style={{ backgroundColor: t.bg }}>
                      <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <img src={eventPattern} alt="" draggable="false" className="w-full h-full object-cover select-none" />
                      </div>
                      <span className="absolute top-2.5 right-2.5 text-[0.6875rem] font-black text-white bg-ink/85 rounded px-2 py-1">{p.cat}</span>
                      <GalleryIcon name={p.icon} className="w-10 h-10 text-white relative z-10" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-black text-[1.0625rem] text-navy-alt leading-[1.5] mb-2 group-hover:text-teal transition-colors">{p.title}</h3>
                      <p className="text-[0.8125rem] text-ink/65 leading-[1.9] mb-4">{p.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[0.75rem] font-bold text-ink/45">{p.date}</span>
                        <span className="inline-flex items-center gap-1 text-[0.8125rem] font-extrabold text-teal-text">
                          مطالعه
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <Comments comments={comments} />
      <Newsletter />
      <FinalCta onCta={openEnrollment} />
    </>
  );
}
