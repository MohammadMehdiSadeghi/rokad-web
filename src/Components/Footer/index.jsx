import React from "react";

export default function Footer() {
  return (
    <footer className="rk-footer" dir="rtl">
      <style>{`
        .rk-footer {
          --bg: #21295a;
          --heading: #58bdaf;
          --text: #eceef4;
          --text-muted: #9599b4;
          --divider: rgba(255,255,255,0.14);
          --icon-bg: #2e3664;
          --icon-bg-hover: #3a4278;

          background: var(--bg);
          color: var(--text);
          padding: 54px 8.6% 24px;
          box-sizing: border-box;
        }
        .rk-footer *{ box-sizing: border-box; }

        .rk-footer__top{
          display: flex; 
          justify-content: space-between;
          gap: 24px;
          flex-wrap: nowrap;
        }

        .rk-footer__brand{
          max-width: 320px; /* افزایش عرض برای اینکه متن بشه ۲ خط */
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: right;
        }

        .rk-footer__logo{
          margin-bottom: 14px;
          text-align: center;
          direction: rtl;
        }
        .rk-footer__logo-fa{
          font-size: 22px;
          font-weight: 500;
          color: #f4f5f9;
          line-height: 1.3;
          letter-spacing: 1px;
        }
        .rk-footer__logo-en{
          font-size: 11px;
          font-weight: 600;
          color: #f4f5f9;
          letter-spacing: 5px;
          margin-top: 2px;
        }

        .rk-footer__desc{
          font-size: 14px; /* سایز ۱۴ */
          font-weight: 600; /* وزن ۶۰۰ */
          line-height: 2;
          color: var(--text-muted);
          margin: 0;
        }

        .rk-footer__col{
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-width: 130px;
          flex-shrink: 0;
        }
        .rk-footer__col h4{
          margin: 0 0 4px;
          color: var(--heading);
          font-size: 20px; /* سایز ۲۰ */
          font-weight: 700;
        }
        .rk-footer__col ul{
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .rk-footer__col a{
          color: var(--text);
          text-decoration: none;
          font-size: 14px; /* سایز ۱۴ */
          line-height: 1.6;
          opacity: 0.95;
          transition: opacity .2s ease;
        }
        .rk-footer__col a:hover{ opacity: 1; text-decoration: underline; }

        .rk-footer__bottom{
          margin-top: 40px;
          padding-top: 18px;
          border-top: 1px solid var(--divider);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .rk-footer__copy{
          font-size: 12px;
          color: var(--text-muted);
        }
        .rk-footer__socials{
          display: flex;
          gap: 8px;
        }
        .rk-footer__socials button{
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: var(--icon-bg);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background .2s ease;
        }
        .rk-footer__socials button:hover{ background: var(--icon-bg-hover); }

        @media (max-width: 760px){
          .rk-footer{ padding: 32px 6% 20px; }
          .rk-footer__top{ flex-wrap: wrap; align-items: flex-end; }
          .rk-footer__brand{ max-width: 100%; align-items: flex-start; }
          .rk-footer__bottom{ flex-direction: column-reverse; align-items: flex-end; }
        }
      `}</style>

      <div className="rk-footer__top">
        {/* برند / لوگو */}
        <div className="rk-footer__brand">
          <div className="rk-footer__logo">
            <div className="rk-footer__logo-fa">رکاد</div>
            <div className="rk-footer__logo-en">ROKAD</div>
          </div>
          <p className="rk-footer__desc">
            مدرسه و هنرستان استارتاپی رکاد، جایی که مهارت واقعی، تجربه‌ی کسب و
            کار و آینده‌سازی زیر یک سقف جمع می‌شن.
          </p>
        </div>

        {/* رکاد */}
        <div className="rk-footer__col">
          <h4>رکاد</h4>
          <ul>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تیم ما</a>
            </li>
            <li>
              <a href="#">اکوسیستم</a>
            </li>
            <li>
              <a href="#">همکاری با ما</a>
            </li>
          </ul>
        </div>

        {/* مدارس */}
        <div className="rk-footer__col">
          <h4>مدارس</h4>
          <ul>
            <li>
              <a href="#">هنرستان پسرانه</a>
            </li>
            <li>
              <a href="#">هنرستان دخترانه</a>
            </li>
            <li>
              <a href="#">پیش‌ثبت‌نام</a>
            </li>
            <li>
              <a href="#">شرایط پذیرش</a>
            </li>
          </ul>
        </div>

        {/* ارتباط */}
        <div className="rk-footer__col">
          <h4>ارتباط</h4>
          <ul>
            <li>
              <a href="#">مشهد، فرامرز عباسی۳۳</a>
            </li>
            <li>
              <a href="#">۰۲۱-۱۲۳۴۵۶۷۸</a>
            </li>
            <li>
              <a href="#">info@rokad.school</a>
            </li>
            <li>
              <a href="#">فرم تماس</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rk-footer__bottom">
        {/* در RTL اولین فرزند سمت راست می‌افته؛ کپی‌رایت باید همون‌جا باشه */}
        <div className="rk-footer__copy">
          © ۱۴۰۵ رکاد اسکول. همه‌ی حقوق محفوظ است.
        </div>
        <div className="rk-footer__socials">
          <button aria-label="اینستاگرام" />
          <button aria-label="تلگرام" />
          <button aria-label="لینکدین" />
          <button aria-label="واتساپ" />
        </div>
      </div>
    </footer>
  );
}
