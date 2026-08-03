import imgBoy from "../../assets/finalCTA/boy.png";
import imgGirl from "../../assets/finalCTA/girl.png";
import pattern from "../../assets/_unassigned/Group 1000006377.png";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-teal py-14 sm:py-20 px-4 sm:px-6"
      dir="rtl"
    >
      {/* پترن پس‌زمینه */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-100"
        />
      </div>

      {/* تصویر دختر — سمت راست */}
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none select-none h-full flex items-end">
        <img
          src={imgGirl}
          alt=""
          aria-hidden="true"
          className="h-[85%] max-h-[420px] sm:max-h-[500px] lg:max-h-[560px] w-auto object-contain object-bottom"
        />
      </div>

      {/* تصویر پسر — سمت چپ */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none select-none h-full flex items-end">
        <img
          src={imgBoy}
          alt=""
          aria-hidden="true"
          className="h-[85%] max-h-[420px] sm:max-h-[500px] lg:max-h-[560px] w-auto object-contain object-bottom"
        />
      </div>

      {/* محتوای مرکزی */}
      <div className="relative z-20 w-[80%] mx-auto flex flex-col items-center text-center">
        <h2 className="font-black text-[32px] xs:text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.4] sm:leading-[2.2] mb-6 sm:mb-8">
          <span className="inline-block rotate-[4deg] text-white">برای</span>{" "}
          <span className="inline-block rotate-[-4deg] text-white">ساختن</span>{" "}
          <span className="bg-white rounded-lg px-3 pt-4 pb-3 leading-none inline-block rotate-[4deg] text-navy">
            آینده
          </span>
          <br />
          <span className="inline-block rotate-[-4deg] text-white">
            همین
          </span>{" "}
          <span className="inline-block rotate-[4deg] text-white">امروز</span>{" "}
          <span className="inline-block rotate-[-4deg] text-white">اقدام</span>{" "}
          <span className="inline-block rotate-[4deg] text-white">کن!</span>
        </h2>

        <p className="text-[14px] sm:text-[18px] font-semibold leading-[1.8] sm:leading-[1.9] text-white max-w-[480px] mb-8 sm:mb-10">
          مصاحبه‌ی رایگان و تعیین سطح برای همه‌ی متقاضی‌ها. کافیه فرم رو پر کنی،
          بقیه‌ش با ماست.
        </p>

        {/* دکمه */}
        <div className="flex justify-center items-center w-full">
          <div className="relative group inline-flex items-center justify-center">
            {/* لایه سایه */}
            <div
              className="absolute top-[3px] left-[3px] w-full h-full rounded-tl-[10px] rounded-br-[10px]
      rounded-tr-none rounded-bl-none bg-white transition-colors duration-300 ease-out"
            />
            <a
              href="#"
              className="relative z-10 inline-flex items-center justify-center
               gap-3 w-full min-w-[240px] sm:min-w-[280px] h-[48px] sm:h-[56px] bg-navy
               text-white font-extrabold text-[16px] sm:text-[18px]
                transition-all rounded-tl-[10px] rounded-br-[10px]
                rounded-tr-none rounded-bl-none border-2 border-white duration-300"
            >
              تکمیل فرم پیش ثبت نام
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
