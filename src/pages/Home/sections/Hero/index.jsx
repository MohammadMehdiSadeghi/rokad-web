import Container from "../../../../layout/Container";

const patternBg = "/assets/Hero/Hero-Pattern.png";

export default function Hero() {
  return (
    <section className="pt-9 pb-20 sm:pb-24 relative" dir="rtl">
      {/* استایل CSS برای Shape گوشه پایین-راست */}
      <style>{`
        .hero-inverted-radius {
          --r: 36px; /* شعاع انحنا */
          --s: 50px; /* اندازه برش منحنی */
          --x: 600px; /* فاصله افقی (0 برای قرارگیری دقیق در گوشه راست) */
          --y: 0px; /* فاصله عمودی */
          
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask:
            calc(100% - var(--_d) - var(--x)) 100% var(--_m),
            100% calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) 
             calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
            var(--_g) calc(-1*var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(-1*var(--_d) - var(--y));
          -webkit-mask:
            calc(100% - var(--_d) - var(--x)) 100% var(--_m),
            100% calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) 
             calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
            var(--_g) calc(-1*var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>

      {/* پترن پس‌زمینه کل سکشن */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none 
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] 
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-70 rotate-180"
        />
      </div>

      <Container className="relative z-10">
        {/* کانتینر اصلی - ارتفاع ثابت برای لایه‌بندی */}
        <div className="relative min-h-[600px]">
          
          {/* ── 1. لایه دکمه‌ها (زیر کارت سبز) ── */}
          {/* z-10 قرار دادیم تا زیر کارت سبز (z-20) باشد. کارت سبز با ماسک خود، سوراخ را شفاف می‌کند و این دکمه‌ها از زیر دیده می‌شوند */}
          {/* rounded-br-[36px] برای هم‌راستا شدن با گوشه بیرونی کارت سبز */}
          {/* h-[160px] ارتفاع کافی برای پوشش دادن کل فضای خالی برش */}
          <div className="absolute bottom-0 right-0 w-[47%] h-[120px] z-10 rounded-br-[36px] bg-white flex items- shadow-lg overflow-hidden">
            {/* بخش سرمه‌ای (سمت راست در نمای RTL) */}
            <div
              className="bg-[#21295A] flex-1 py-6 px-6 sm:px-10 flex items-center justify-center"
              style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <a
                href="#"
                className="font-extrabold text-base sm:text-lg text-white whitespace-nowrap cursor-pointer transition-opacity hover:opacity-80"
              >
                ثبت‌نام و رزرو مصاحبه
              </a>
            </div>

            {/* بخش سفید (سمت چپ در نمای RTL) */}
            <div className="py-6 border-b-2 border-r-0 border-[#21295A] px-6 sm:px-10 flex items-center justify-center">
              <button className="font-extrabold text-base sm:text-lg text-[#21295A] whitespace-nowrap cursor-pointer transition-opacity hover:opacity-80">
                درخواست مشاوره
              </button>
            </div>
          </div>

          {/* ── 2. لایه کارت سبز (با برش) ── */}
          {/* z-20 قرار دادیم تا روی دکمه‌ها باشد. ماسک باعث می‌شود دکمه‌ها از فضای خالی بیرون بزنند و لبه منحنی داشته باشند */}
          <div className="absolute inset-0 z-20 bg-[#57BCAF] rounded-[36px] overflow-hidden hero-inverted-radius">
            {/* پترن داخل کارت سبز */}
            <div className="absolute inset-0 w-full h-full pointer-events-none 
                    [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] 
                    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
              <img
                src={patternBg}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-70 rotate-180"
              />
            </div>
          </div>

          {/* ── 3. لایه متن اصلی هیرو ── */}
          {/* بالاترین لایه (z-30) تا روی همه چیز قرار بگیرد */}
          <div className="absolute top-0 inset-x-0 z-30 h-full px-8 sm:px-14 pt-14 sm:pt-20 text-right flex flex-col">
            <h1 className="font-extrabold text-white text-4xl sm:text-6xl leading-[1.35]">
              آینده
              <br />
              از اینجا شروع میشه !
            </h1>
            <p className="font-extrabold text-[#21295A] text-2xl sm:text-3xl mt-8 sm:mt-10">
              اولین هنرستان استارتاپ ایران ...
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
