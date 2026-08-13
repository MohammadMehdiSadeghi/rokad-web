import Container from "../../../../layout/Container";

const imgBoy = "/assets/finalCTA/boy.png";
const pattern = "/assets/unassigned/pattern-boxes.png";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-teal pt-[100px] pb-[100px] px-4 sm:px-6"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-100"
        />
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10">
          {/* Boy Image */}
          <div className="order-2 lg:order-2 shrink-0 pointer-events-none select-none">
            <img
              src={imgBoy}
              alt=""
              aria-hidden="true"
              className="h-[280px] sm:h-[360px] lg:h-[566px] w-auto object-contain object-bottom"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-right w-full lg:w-auto">
            <h2 className="font-black text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[77px] leading-[1.5] text-white mb-6 sm:mb-7">
              <span className="inline-block rotate-[3deg]">برای</span>{" "}
              <span className="inline-block rotate-[-3deg]">ساختن</span>{" "}
              <span className="inline-block rotate-[3deg]">آینده</span>
              <br />
              <span className="inline-block rotate-[-3deg]">همین</span>{" "}
              <span className="inline-block rotate-[3deg]">امروز</span>{" "}
              <span className="inline-block rotate-[-3deg]">اقدام</span>{" "}
              <span className="inline-block rotate-[3deg]">کن</span>
            </h2>

            <p className="text-[14px] sm:text-[25px] font-semibold leading-[1.9] text-white max-w-[540px] mb-8 sm:mb-9">
              مصاحبه‌ی رایگان و تعیین سطح برای همه‌ی متقاضی‌ها. کافیه فرم رو پر
              کنی، بقیه‌ش با ماست.
            </p>

            {/* CTA Button with Solid Offset Shadow */}
            <div className="relative inline-flex items-center justify-center rotate-[2deg]">
              <div className="absolute top-[3px] left-[3px] w-full h-full rounded-[0_12px_0_12px] bg-white" />
              <a
                href="#"
                className="relative z-10 inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] sm:min-w-[300px] h-[56px] sm:h-[68px] 
                 px-8 bg-[#242424] text-white font-extrabold text-[16px] sm:text-[20px] rounded-[0_12px_0_12px] 
                 border-[3px] border-white hover:opacity-90 transition-opacity duration-300"
              >
                تکمیل فرم پیش ثبت نام
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}