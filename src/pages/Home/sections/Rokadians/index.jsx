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
  "w-[152px] h-[216px] sm:w-[178px] sm:h-[253px] md:w-[200px] md:h-[284px] lg:w-[225px] lg:h-[320px] 2xl:w-[252px] 2xl:h-[358px]";

const HEADER_SIZE =
  "h-[81px] sm:h-[95px] md:h-[106px] lg:h-[120px] 2xl:h-[134px]";

const HEADER_TOP =
  "top-[81px] sm:top-[95px] md:top-[106px] lg:top-[120px] 2xl:top-[134px]";

const AVATAR_WRAP_POS =
  "top-[40px] sm:top-[47px] md:top-[54px] lg:top-[60px] 2xl:top-[67px]";

const AVATAR_SIZE =
  "w-[60px] h-[60px] sm:w-[71px] sm:h-[71px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] 2xl:w-[101px] 2xl:h-[101px]";

const AVATAR_BORDER_OFFSET = "top-[2px] left-[2px] lg:top-[3px] lg:left-[3px]";

const CARD_CONTENT_PAD =
  "px-3 pt-[38px] pb-3 sm:px-3.5 sm:pt-[45px] sm:pb-3.5 md:px-4 md:pt-[51px] lg:pt-[57px] lg:pb-4 2xl:pt-[64px]";

const NAME_SIZE = "text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[18px]";

const DESC_SIZE =
  "text-[10px] sm:text-[11px] md:text-[11.5px] lg:text-[12px] 2xl:text-[13px] max-w-[135px] sm:max-w-[158px] md:max-w-[178px] lg:max-w-[190px] 2xl:max-w-[212px]";

const BADGE_SIZE =
  "text-[8.5px] sm:text-[9px] md:text-[9.5px] lg:text-[10px] 2xl:text-[11px] px-[10px] py-[3px] sm:px-[11px] lg:px-[13px] lg:py-[4px]";

const BADGE_OFFSET_POS = "top-[1.5px] left-[1.5px] lg:top-[2px] lg:left-[2px]";

const FOOTER_ICON_SIZE = "w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]";

const FOOTER_EXP_SIZE = "text-[8px] sm:text-[9px] lg:text-[10px] 2xl:text-[11px]";

// Cumulative left-shift for each stacked "ghost" card behind the last real card.
// Only the lg value changed (22px -> 14px): the cards container is narrowest relative
// to viewport at lg (1024-1279px), so the untouched mask's fade zone covers less raw
// pixel width there. A shorter tail at that breakpoint keeps every ghost layer tucked
// under the existing mask instead of poking out past its fade edge. sm/md/2xl are
// exactly as before.
const STACK_OFFSET_VAR =
  "[--stack-unit:6px] sm:[--stack-unit:8px] md:[--stack-unit:10px] lg:[--stack-unit:4px] xl:[--stack-unit:8px] 2xl:[--stack-unit:12px]";

function LinkedinIcon() {
  return (
    <span
      className={`inline-flex items-center justify-center ${FOOTER_ICON_SIZE} bg-[#eef7ff] border border-[#70b8e8] text-[#0a78b5] rounded-[2px] shrink-0`}
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
      className={`absolute top-0 left-0 ${CARD_SIZE} ${STACK_OFFSET_VAR} bg-white border-[2px] border-[#292827] rounded-[0_14px_0_14px] overflow-hidden pointer-events-none`}
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
      <div className="absolute left-[8px] right-[8px] sm:left-[10px] sm:right-[10px] bottom-[32px] sm:bottom-[38px] lg:bottom-[42px] border-t-[1.5px] border-dashed border-[#292827]/20" />

      <div className="absolute left-[8px] sm:left-[10px] bottom-[8px] sm:bottom-[10px] flex gap-[4px] sm:gap-[5px]">
        <span className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[2px]`} />
        <span className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[2px]`} />
        <span className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[2px]`} />
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
        className="absolute top-[3px] left-[3px] sm:top-[4px] sm:left-[4px] lg:top-[5px] lg:left-[5px] w-full h-full bg-[#292827] rounded-[0_14px_0_14px] z-[5]"
      />

      <div className={`relative z-[10] w-full h-full bg-white rounded-[0_14px_0_14px] overflow-hidden border-[2px] border-[#292827] flex flex-col`}>
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
            className={`relative z-[10] ${AVATAR_SIZE} rounded-full object-cover border-[1.5px] border-[#292827]`}
          />
        </div>

        <div className={`flex-1 min-h-0 flex flex-col items-center ${CARD_CONTENT_PAD} text-center`}>
          <h4 className={`font-black ${NAME_SIZE} leading-[1.3] text-[#292827] whitespace-nowrap`}>{student.name}</h4>
          <p className={`${DESC_SIZE} text-[#777777] font-medium mt-[5px] sm:mt-[6px] lg:mt-[7px] leading-[1.5]`}>
            {student.desc}
          </p>

          <div className="relative inline-flex items-center justify-center mt-2.5 sm:mt-3 lg:mt-4">
            <div aria-hidden="true" className={`absolute ${BADGE_OFFSET_POS} w-full h-full bg-[#292827] rounded-[0_6px_0_6px]`} />
            <button
              className={`relative z-10 ${BADGE_SIZE} bg-white border-[1.5px] border-[#292827] text-[#292827] font-bold rounded-[0_6px_0_6px] whitespace-nowrap hover:bg-[#292827] hover:text-white transition-colors`}
            >
              نسل پنجم رکاد
            </button>
          </div>
        </div>

        <div className="mt-auto shrink-0 border-t-[1.5px] border-dashed border-[#292827]/35">
          <div dir="ltr" className="flex items-center justify-between px-[8px] sm:px-[9px] lg:px-[10px] pt-[6px] sm:pt-[7px] lg:pt-[8px] pb-[7px] sm:pb-[8px] lg:pb-[9px]">
            <div className="flex items-center gap-[4px] sm:gap-[5px]">
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
      className="relative overflow-hidden bg-[#f2faf9] pt-[56px] sm:pt-[72px] md:pt-[84px] lg:pt-[90px] 2xl:pt-[100px] pb-14 sm:pb-20 md:pb-24 lg:pb-[100px] 2xl:pb-[112px] px-3 sm:px-6 lg:px-0"
    >
      {/* hides the scrollbar on the mobile/tablet horizontal card rail */}
      <style>{`
        .rokadians-rail::-webkit-scrollbar { display: none; }
        .rokadians-rail { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Container className="relative z-10">
        <div className="w-full lg:w-[94%] lg:mx-auto 2xl:w-[86%] 2xl:max-w-[1760px]">
          <div className="text-center max-w-[800px] mx-auto mb-[40px] sm:mb-[56px] md:mb-[72px] lg:mb-[95px] 2xl:mb-[110px]">
            <h2 className="flex flex-wrap justify-center items-center gap-x-[7px] gap-y-[4px] font-black text-[22px] sm:text-[28px] md:text-[34px] lg:text-[42px] 2xl:text-[46px] leading-[1.4] text-[#292827]">
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

            <p className="font-medium text-[#292827] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.9] sm:leading-[2] max-w-[520px] sm:max-w-[580px] lg:max-w-[620px] mx-auto mt-4 sm:mt-5 lg:mt-6">
              فارغ‌التحصیلان ما در بهترین تیم‌های فنی کشور و به‌عنوان بنیان‌گذار استارتاپ‌های خودشون فعال هستن.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-4">
            <div className="relative w-full lg:w-[76%] xl:w-[78%] 2xl:w-[80%] order-1 overflow-visible">
              {/* MASK — untouched, exactly as original */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute -top-[25px] -bottom-[25px] left-0 w-full z-[30] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, #f2faf9 18%, rgba(242,250,249,0.92) 23%, rgba(242,250,249,0.58) 35%, rgba(242,250,249,0.25) 55%, rgba(242,250,249,0) 70%)",
                }}
              />

              {/* CARD ROW — below lg this is now a horizontal scroll-snap rail instead of
                  flex-wrap, so cards no longer break into an awkward 2-then-1 layout on
                  phones/tablets. At lg and up it's the same static flex row as before. */}
              <div className="rokadians-rail relative z-[10] flex flex-nowrap lg:flex-nowrap justify-start lg:justify-start items-center gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] xl:gap-[28px] 2xl:gap-[36px] overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none py-3 sm:py-4 lg:py-0 -mx-3 px-3 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pl-[10px] 2xl:pl-[16px]">
                {students.map((student, index) => (
                  <StudentCard key={index} student={student} index={index} stacked={index === students.length - 1} />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[24%] xl:w-[22%] 2xl:w-[20%] flex-shrink-0 flex flex-col justify-center text-center lg:text-right order-2 lg:pr-[25px] 2xl:pr-[32px]">
              <div className="rotate-[2deg] items-center justify-center flex flex-col mx-auto lg:mx-0">
                <p className="font-black text-[44px] sm:text-[52px] md:text-[58px] lg:text-[64px] 2xl:text-[72px] leading-[1] text-[#21295a]">
                  ۳۰۰+
                </p>
                <p className="font-black text-[17px] sm:text-[19px] md:text-[22px] lg:text-[24px] 2xl:text-[27px] text-[#21295a] mt-[10px] sm:mt-[12px]">
                  دانش‌آموز
                </p>
                <p className="font-bold text-[12px] sm:text-[13px] lg:text-[14px] 2xl:text-[15px] text-[#21295a]/80 mt-[7px] sm:mt-[8px]">
                  در مسیر ساخت آینده
                </p>

                <a
                  href="#"
                  className="relative inline-flex items-center justify-center w-fit bg-white border-[2px] border-[#21295a] text-[#21295a] font-black text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] px-5 sm:px-7 py-2 sm:py-2.5 rounded-[0_10px_0_10px] hover:rotate-0 transition-transform duration-300 whitespace-nowrap mt-6 sm:mt-8"
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