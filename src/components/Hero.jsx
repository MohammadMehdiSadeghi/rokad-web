import heroIllustration from "../assets/images/hero-illustration.png";
import doodleShape from "../assets/images/doodle-shape.svg";
import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/avatar-3.png";
import avatar4 from "../assets/images/avatar-4.png";
import avatar5 from "../assets/images/avatar-5.png";
import yarnillustration from "../assets/images/yarn-illustration.png";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

export default function Hero() {
  return (
    <section id="top" className="container-page pt-2 pb-10 md:pt-6 md:pb-16">
      <div
        className="
            relative overflow-hidden
            rounded-tl-[36px]
            rounded-tr-[36px]
            rounded-bl-[36px]
            bg-cover bg-center
            min-h-[480px]
          "
        style={{ backgroundImage: `url(${yarnillustration})` }}
      >
        <div className="relative grid grid-cols-1 items-end gap-6 px-6 pt-10 md:grid-cols-2 md:px-14 md:pt-2 lg:px-16">
          {/* Text */}
          <div className="order-2 flex flex-col items-start pb-10 md:order-1 md:pb-16">
            <h1 className="text-3xl font-extrabold leading-[1.35] text-white sm:text-4xl md:text-[2.6rem]">
              آینده
              <br />
              از اینجا شروع میشه !
            </h1>

            <p className="mt-5 max-w-md text-sm leading-8 text-white/90 md:text-[15px]">
              اولین هنرستان استارتاپی ایران؛ جایی که مهارت، تجربه و بازارکار به
              هم می‌خورن.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#interview"
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition-transform hover:-translate-y-0.5"
              >
                ثبت‌نام و رزرو مصاحبه
              </a>

              <a
                href="#consult"
                className="rounded-xl border border-white/70 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                درخواست مشاوره
              </a>
            </div>

            <div className="absolute top-[80%] flex items-center gap-3 ">
              <div className="flex -space-x-3 space-x-reverse">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-teal-light object-cover md:h-10 md:w-10"
                  />
                ))}
              </div>

              <div className="leading-tight">
                <p className="text-lg font-extrabold text-black md:text-xl">
                  ۹۰۰+ دانش‌آموز
                </p>
                <p className="text-xs text-black">در سطح سالانه کشور</p>
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative flex items-end justify-center">
              <img
                src={doodleShape}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 right-1/2 w-[160px] translate-x-1/2 opacity-25 mix-blend-soft-light sm:w-[200px] md:w-[240px]"
              />

              <img
                src={heroIllustration}
                alt="دانش‌آموز رکاد"
                className="relative h-auto w-[220px] object-contain sm:w-[280px] md:w-[340px] lg:w-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
