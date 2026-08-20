import Container from "../../../../layout/Container";

const students = [
  {
    name: "امیرعلی شفاهی",
    desc: "فریلنسر و برنامه‌نویس گریپ‌وب",
    experience: "+۴ سال تجربه تخصصی",
  },
  {
    name: "امیرعلی شفاهی",
    desc: "فریلنسر و برنامه‌نویس گریپ‌وب",
    experience: "+۴ سال تجربه تخصصی",
  },
  {
    name: "امیرعلی شفاهی",
    desc: "طراح و توسعه‌دهنده‌ی محصولات دیجیتال",
    experience: "+۴ سال تجربه تخصصی",
  },
];

// Card sizing per breakpoint. lg == the original/desired desktop design (unchanged).
// base/sm/md scale it down for phones & tablets, 2xl scales it up for very large monitors.
const CARD_SIZE =
  "w-[9.5rem] h-[13.5rem] sm:w-[11.125rem] sm:h-[15.8125rem] md:w-[12.5rem] md:h-[17.75rem] lg:w-[14.0625rem] lg:h-[20rem] 2xl:w-[15.75rem] 2xl:h-[22.375rem]";

const HEADER_SIZE =
  "h-[5.0625rem] sm:h-[5.9375rem] md:h-[6.625rem] lg:h-[7.5rem] 2xl:h-[8.375rem]";

const HEADER_TOP =
  "top-[5.0625rem] sm:top-[5.9375rem] md:top-[6.625rem] lg:top-[7.5rem] 2xl:top-[8.375rem]";

const AVATAR_WRAP_POS =
  "top-[2.5rem] sm:top-[2.9375rem] md:top-[3.375rem] lg:top-[3.75rem] 2xl:top-[4.1875rem]";

const AVATAR_SIZE =
  "w-[3.75rem] h-[3.75rem] sm:w-[4.4375rem] sm:h-[4.4375rem] md:w-[5rem] md:h-[5rem] lg:w-[5.625rem] lg:h-[5.625rem] 2xl:w-[6.3125rem] 2xl:h-[6.3125rem]";

const AVATAR_BORDER_OFFSET = "top-[0.125rem] left-[0.125rem] lg:top-[0.1875rem] lg:left-[0.1875rem]";

const CARD_CONTENT_PAD =
  "px-3 pt-[2.375rem] pb-3 sm:px-3.5 sm:pt-[2.8125rem] sm:pb-3.5 md:px-4 md:pt-[3.1875rem] lg:pt-[3.5625rem] lg:pb-4 2xl:pt-[4rem]";

const NAME_SIZE = "text-[0.8125rem] sm:text-[0.875rem] md:text-[0.9375rem] lg:text-[1rem] 2xl:text-[1.125rem]";

const DESC_SIZE =
  "text-[0.625rem] sm:text-[0.6875rem] md:text-[0.71875rem] lg:text-[0.75rem] 2xl:text-[0.8125rem] max-w-[8.4375rem] sm:max-w-[9.875rem] md:max-w-[11.125rem] lg:max-w-[11.875rem] 2xl:max-w-[13.25rem]";

const BADGE_SIZE =
  "text-[0.53125rem] sm:text-[0.5625rem] md:text-[0.59375rem] lg:text-[0.625rem] 2xl:text-[0.6875rem] px-[0.625rem] py-[0.1875rem] sm:px-[0.6875rem] lg:px-[0.8125rem] lg:py-[0.25rem]";

const BADGE_OFFSET_POS = "top-[0.09375rem] left-[0.09375rem] lg:top-[0.125rem] lg:left-[0.125rem]";

const FOOTER_ICON_SIZE = "w-[1rem] h-[1rem] sm:w-[1.125rem] sm:h-[1.125rem] lg:w-[1.25rem] lg:h-[1.25rem]";

const FOOTER_EXP_SIZE = "text-[0.5rem] sm:text-[0.5625rem] lg:text-[0.625rem] 2xl:text-[0.6875rem]";

// Cumulative left-shift for each stacked "ghost" card behind the last real card.
// Increased for visible gap at all breakpoints, especially xl/2xl where container is wider.
// lg is tightest (Container 80% at 1024-1279px), so offset smallest there.
// xl/2xl get progressively more offset since mask extends to 98%.
const STACK_OFFSET_VAR =
  "[--stack-unit:0.375rem] sm:[--stack-unit:0.5rem] md:[--stack-unit:0.625rem] lg:[--stack-unit:0.375rem] xl:[--stack-unit:0.75rem] 2xl:[--stack-unit:1rem]";

function LinkedinIcon() {
  return (
    <span
      className={`inline-flex items-center justify-center ${FOOTER_ICON_SIZE} bg-[#eef7ff] border border-[#70b8e8] text-[#0a78b5] rounded-[0.125rem] shrink-0`}
    >
      <svg width="55%" height="55%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 3 3.72 3 4.65S3.65 6.3 4.72 6.3h.03c1.1 0 1.75-.73 1.75-1.65C6.47 3.72 5.83 3 4.75 3ZM21 13.85c0-3.77-2.01-5.52-4.7-5.52-2.16 0-3.13 1.19-3.67 2.02V8.5H9.13V21h3.5v-6.97c0-1.84.35-3.62 2.63-3.62 2.25 0 2.28 2.1 2.28 3.74V21H21v-7.15Z" />
      </svg>
    </span>
  );
}

function StackCard({ layer, rotation }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 left-0 ${CARD_SIZE} ${STACK_OFFSET_VAR} bg-white border-[0.125rem] border-[#292827] rounded-[0_0.875rem_0_0.875rem] overflow-hidden pointer-events-none`}
      style={{
        transform: `translateX(calc(var(--stack-unit) * -${layer})) rotate(${rotation}deg)`,
        transformOrigin: "center center",
      }}
    >
      <div className={`relative w-full ${HEADER_SIZE} bg-gradient-to-l from-[#59bbaf] to-[#58bdaf] overflow-hidden`}>
        <img
          src="/public/assets/Rokadians/Frame 1000006407.png"
          alt=""
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className={`absolute ${HEADER_TOP} left-0 right-0 bottom-0 bg-white`} />
      <div className="absolute left-[0.5rem] right-[0.5rem] sm:left-[0.625rem] sm:right-[0.625rem] bottom-[2rem] sm:bottom-[2.375rem] lg:bottom-[2.625rem] border-t-[0.09375rem] border-dashed border-[#292827]/20" />

      <div className="absolute left-[0.5rem] sm:left-[0.625rem] bottom-[0.5rem] sm:bottom-[0.625rem] flex gap-[0.25rem] sm:gap-[0.3125rem]">
        <span className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[0.125rem]`} />
        <span className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[0.125rem]`} />
        <span className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[0.125rem]`} />
      </div>
    </div>
  );
}

function StudentCard({ student, index, stacked }) {
  const rotation = index % 2 === 0 ? 1 : -1;

  return (
    <div
      className={`relative ${CARD_SIZE} flex-shrink-0 snap-center`}
      style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center center" }}
    >
      {stacked && (
        <div aria-hidden="true" className={`absolute top-0 left-0 ${CARD_SIZE} pointer-events-none z-[1]`}>
          <StackCard layer={5} rotation={1} />
          <StackCard layer={4} rotation={-1} />
          <StackCard layer={3} rotation={1} />
          <StackCard layer={2} rotation={-1} />
          <StackCard layer={1} rotation={1} />
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute top-[0.1875rem] left-[0.1875rem] sm:top-[0.25rem] sm:left-[0.25rem] lg:top-[0.3125rem] lg:left-[0.3125rem] w-full h-full bg-[#292827] rounded-[0_0.875rem_0_0.875rem] z-[5]"
      />

      <div className={`relative z-[10] w-full h-full bg-white rounded-[0_0.875rem_0_0.875rem] overflow-hidden border-[0.125rem] border-[#292827] flex flex-col`}>
        <div className={`relative w-full ${HEADER_SIZE} shrink-0 overflow-hidden bg-gradient-to-l from-[#59bbaf] to-[#58bdaf]`}>
          <img
            src="/public/assets/Rokadians/Frame 1000006407.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
        </div>

        <div className={`absolute ${AVATAR_WRAP_POS} left-1/2 -translate-x-1/2 z-[30]`}>
          <div aria-hidden="true" className={`absolute ${AVATAR_BORDER_OFFSET} ${AVATAR_SIZE} bg-[#292827] rounded-full`} />
          <img
            src="/assets/Rokadians/Ellipse 83.png"
            alt={student.name}
            className={`relative z-[10] ${AVATAR_SIZE} rounded-full object-cover border-[0.09375rem] border-[#292827]`}
          />
        </div>

        <div className={`flex-1 min-h-0 flex flex-col items-center ${CARD_CONTENT_PAD} text-center`}>
          <h4 className={`font-black ${NAME_SIZE} leading-[1.3] text-[#292827] whitespace-nowrap`}>{student.name}</h4>
          <p className={`${DESC_SIZE} text-[#777777] font-medium mt-[5px] sm:mt-[6px] lg:mt-[7px] leading-[1.5]`}>
            {student.desc}
          </p>

          <div className="relative inline-flex items-center justify-center mt-2.5 sm:mt-3 lg:mt-4">
            <div aria-hidden="true" className={`absolute ${BADGE_OFFSET_POS} w-full h-full bg-[#292827] rounded-[0_0.375rem_0_0.375rem]`} />
            <button
              className={`relative z-10 ${BADGE_SIZE} bg-white border-[0.09375rem] border-[#292827] text-[#292827] font-bold rounded-[0_0.375rem_0_0.375rem] whitespace-nowrap hover:bg-[#292827] hover:text-white transition-colors`}
            >
              نسل پنجم رکاد
            </button>
          </div>
        </div>

        <div className="mt-auto shrink-0 border-t-[0.09375rem] border-dashed border-[#292827]/35">
          <div dir="ltr" className="flex items-center justify-between px-[0.5rem] sm:px-[0.5625rem] lg:px-[0.625rem] pt-[0.375rem] sm:pt-[0.4375rem] lg:pt-[0.5rem] pb-[0.4375rem] sm:pb-[0.5rem] lg:pb-[0.5625rem]">
            <div className="flex items-center gap-[0.25rem] sm:gap-[0.3125rem]">
              <LinkedinIcon />
              <LinkedinIcon />
              <LinkedinIcon />
            </div>

            <span dir="rtl" className={`${FOOTER_EXP_SIZE} text-[#292827]/45 font-medium whitespace-nowrap`}>
              {student.experience}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Rokadians() {
  return (
    <section
      id="rokadians"
      dir="rtl"
      className="relative overflow-hidden bg-[#f2faf9] pt-[3rem] sm:pt-[4rem] lg:pt-[5rem] pb-[3rem] sm:pb-[4rem] lg:pb-[5rem] px-4 sm:px-6 lg:px-0"
    >
      {/* hides the scrollbar on the mobile/tablet horizontal card rail */}
      <style>{`
        .rokadians-rail::-webkit-scrollbar { display: none; }
        .rokadians-rail { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Container className="relative z-10 px-4 sm:px-6 lg:px-0">
        <div className="w-full">
          <div className="text-center max-w-[50rem] mx-auto mb-[1.5rem] sm:mb-[2rem] lg:mb-[3rem]">
            <h2 className="flex flex-wrap justify-center items-center gap-x-[0.4375rem] gap-y-[0.25rem] font-black text-[1.25rem] sm:text-[1.75rem] lg:text-[2.25rem] xl:text-[2.625rem] leading-[1.4] text-[#292827]">
              <span className="inline-block" style={{ transform: "rotate(-3deg)" }}>
                ببین
              </span>
              <span className="inline-block" style={{ transform: "rotate(3deg)" }}>
                رکادی‌ها
              </span>
              <span className="inline-block" style={{ transform: "rotate(-3deg)" }}>
                الان
              </span>
              <span className="inline-block text-[#4bb5a8]" style={{ transform: "rotate(3deg)" }}>
                کجان
              </span>
              <span className="inline-block" style={{ transform: "rotate(-3deg)" }}>
                ؟
              </span>
            </h2>

            <p className="font-medium text-[#292827] text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.125rem] leading-[1.9] sm:leading-[2] max-w-[32.5rem] sm:max-w-[36.25rem] lg:max-w-[38.75rem] mx-auto mt-3 sm:mt-4 lg:mt-6">
              فارغ‌التحصیلان ما در بهترین تیم‌های فنی کشور و به‌عنوان بنیان‌گذار استارتاپ‌های خودشون فعال هستن.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-8">
            <div className="relative w-full lg:w-[70%] order-1 overflow-visible">
                          {/* MASK — extended leftwards to cover full stack tail */}
                          <div
                            aria-hidden="true"
                            className="hidden lg:block absolute -top-[1.5625rem] -bottom-[1.5625rem] left-[-12%] w-[112%] z-[30] pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(to right, #f2faf9 0%, rgba(242,250,249,0.95) 5%, rgba(242,250,249,0.55) 20%, rgba(242,250,249,0.2) 45%, rgba(242,250,249,0.05) 70%, rgba(242,250,249,0) 95%)",
                            }}
                          />

              {/* CARD ROW — below lg this is now a horizontal scroll-snap rail instead of
                  flex-wrap, so cards no longer break into an awkward 2-then-1 layout on
                  phones/tablets. At lg and up it's the same static flex row as before. */}
              <div className="rokadians-rail relative z-[10] flex flex-nowrap lg:flex-nowrap justify-start lg:justify-start items-center gap-4 sm:gap-5 md:gap-6 lg:gap-[1.5rem] xl:gap-[1.75rem] 2xl:gap-[2.25rem] overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none py-3 sm:py-4 lg:py-0 -mx-3 px-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pl-[0.3125rem] 2xl:pl-[0.5rem] pr-16 lg:pr-0">
                {students.map((student, index) => (
                  <StudentCard key={index} student={student} index={index} stacked={index === students.length - 1} />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[30%] flex-shrink-0 flex flex-col justify-center text-center lg:text-right order-2 lg:pt-8">
              <div className="rotate-[2deg] items-center justify-center flex flex-col mx-auto lg:mx-0">
                <p className="font-black text-[2.75rem] sm:text-[3.25rem] md:text-[3.625rem] lg:text-[4rem] 2xl:text-[4.5rem] leading-[1] text-[#21295a]">
                  ۳۰۰+
                </p>
                <p className="font-black text-[1.0625rem] sm:text-[1.1875rem] md:text-[1.375rem] lg:text-[1.5rem] 2xl:text-[1.6875rem] text-[#21295a] mt-[0.625rem] sm:mt-[0.75rem]">
                  دانش‌آموز
                </p>
                <p className="font-bold text-[0.75rem] sm:text-[0.8125rem] lg:text-[0.875rem] 2xl:text-[0.9375rem] text-[#21295a]/80 mt-[0.4375rem] sm:mt-[0.5rem]">
                  در مسیر ساخت آینده
                </p>

                <a
                  href="#"
                  className="relative inline-flex items-center justify-center w-fit bg-white border-[0.125rem] border-[#21295a] text-[#21295a] font-black text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] 2xl:text-[1.25rem] px-5 sm:px-7 py-2 sm:py-2.5 rounded-[0_0.625rem_0_0.625rem] hover:rotate-0 transition-transform duration-300 whitespace-nowrap mt-6 sm:mt-8"
                >
                  مشاهده همه
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}