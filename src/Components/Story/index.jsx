import yarnIllustration from "../../assets/Story/yarn-illustration.png";
import vectorIcon from "../../assets/Story/Vector.svg";

const pills = [
  {
    label: "اکوسیستم استارتاپی",
    back: "bg-navy-alt",
    border: "border-navy-alt",
    text: "text-navy-alt",
    rotate: "rotate-[2deg]",
    bg: "bg-[#F4F5FB]",
  },
  {
    label: "بازار کار واقعی",
    back: "bg-magenta",
    border: "border-magenta",
    text: "text-magenta",
    rotate: "rotate-[-2deg]",
    bg: "bg-[#FCE8EF]",
  },
  ,
  {
    label: "هنرستان رسمی",
    back: "bg-teal-alt",
    border: "border-teal",
    text: "text-teal-text",
    rotate: "rotate-[2deg]",
    bg: "bg-[#E4F4F2]",
  },
];

export default function Story() {
  return (
    <section className="py-[88px] w-full px-6 bg-[#F3F3F1]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-40 items-center">
        {/* ── ستون راست: تصویر ── */}
        <div className="relative flex items-start justify-center lg:justify-start -mt-2">
          <div className="relative w-full max-w-[560px]">
            <img
              src={yarnIllustration}
              alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-2xl -translate-x-[4%] -translate-y-[2%]"
            />

            {/* برچسب شناور روی عکس (کج -3 درجه) */}
            <span
              className="absolute bottom-[15%] right-[20%] inline-block rotate-3 bg-[#FFD641] border-2 border-black font-bold text-[14px] text-black rounded-tl-[10px]
             rounded-tr-none rounded-br-[10px] rounded-bl-none px-5 py-2 shadow-[3px_3px_0_0_#000] "
            >
              رکاد یعنی متفاوت بودن...
            </span>
          </div>
        </div>

        {/* ── ستون چپ: متن ── */}
        <div className="max-w-[500px]">
          <h2 className="font-black text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.35] mb-5">
            <span className="inline-block rotate-3">چرا</span>{" "}
            <span className="inline-block text-teal-wordmark -rotate-3">
              رکاد
            </span>{" "}
            <span className="inline-block rotate-3">یه</span>{" "}
            <span className="inline-block -rotate-3">مدرسه</span>{" "}
            <span className="inline-block rotate-3">معمولی</span>{" "}
            <span className="inline-block -rotate-3">نیست؟</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[2] text-navy/70 max-w-[460px] mb-8">
            ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم.
            اینجا فقط کتاب نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با منتورهای
            متخصص همراهی می‌شی و توی محیطی امن، جرأت شکست خوردن و دوباره پاشدن
            رو یاد می‌گیری.
          </p>

          {/* Pills با زاویه کج برای متن‌ها و سایه استیکری */}
          <div className="flex flex-wrap gap-4 mb-9">
            {pills.map((p) => (
              <span
                key={p.label}
                className={`relative ${p.bg}  inline-block ${p.rotate}`}
              >
                {/* لایه سایه پشت استیکر */}
                <span
                  className={`absolute inset-0 translate-x-[3px]  translate-y-[3px] rounded-[10px] ${p.back}`}
                />
                {/* لایه اصلی و متن استیکر */}
                <span
                  className={`relative block ${p.bg} border-2 rounded-[10px] px-5 py-2.5 font-bold text-sm ${p.border} ${p.text}`}
                >
                  {p.label}
                </span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center items-center w-[90%]">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 w-[240px] h-[52px] bg-[#61C4BC] text-white font-extrabold text-[18px] 
              rounded-tl-none rounded-br-none rounded-tr-[10px] rounded-bl-[10px] transition-all hover:rounded-tl-[10px] hover:rounded-br-[10px]
               hover:rounded-tr-none hover:rounded-bl-none border border-white duration-300 hover:border-teal-text"
            >
              <img src={vectorIcon} alt="" className="w-7.5 shrink-0 " />
              <span>ادامه داستان رکاد</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
