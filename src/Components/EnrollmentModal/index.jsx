// src/Components/EnrollmentModal/index.jsx
// ============================================================
// فرم پیش‌ثبت‌نام — دیتا رو مستقیم به POST /api/enrollment می‌فرسته
// ------------------------------------------------------------
// فیلدها دقیقاً مطابق اسکیمای Enrollment در بک‌اند Rokad:
// firstName, lastName, fatherName, motherName, nationalCode,
// birthDate{day,month,year}, mobileNumber, parentsMobileNumber,
// landlineNumber, grade, schoolType, major
// ============================================================
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEnrollment } from "../../lib/api";

const GRADES = ["دهم", "یازدهم"];
const SCHOOL_TYPES = ["هنرستان پسرانه رکاد", "هنرستان دخترانه رکاد"];
const MAJORS = [
  "تولید و توسعه پایگاه‌های اینترنتی (برنامه نویسی و طراحی سایت)",
  "تولید محتوای چندرسانه‌ای (طراحی گرافیک و تولید محتوای ویدئویی و صوتی)",
];

const EMPTY = {
  firstName: "",
  lastName: "",
  fatherName: "",
  motherName: "",
  nationalCode: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  mobileNumber: "",
  parentsMobileNumber: "",
  landlineNumber: "",
  grade: "",
  schoolType: "",
  major: "",
};

const inputClass = (error) =>
  `w-full border rounded-[0.625rem] px-4 py-2.5 outline-none transition-all text-[0.9375rem] bg-white ${
    error
      ? "border-red-400 focus:border-red-400"
      : "border-[#292827]/20 focus:border-teal"
  }`;

const labelClass = "text-[0.8125rem] font-bold text-[#292827] mb-1.5 block";

export default function EnrollmentModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  // ----------------------------------------------------------
  // اعتبارسنجی سمت کلاینت
  // ----------------------------------------------------------
  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "نام الزامی است";
    if (!form.lastName.trim()) errs.lastName = "نام خانوادگی الزامی است";
    if (!form.fatherName.trim()) errs.fatherName = "نام پدر الزامی است";
    if (!form.motherName.trim()) errs.motherName = "نام مادر الزامی است";
    if (!/^\d{10}$/.test(form.nationalCode.trim()))
      errs.nationalCode = "کد ملی باید ۱۰ رقم باشد";
    if (!form.birthDay || !form.birthMonth || !form.birthYear)
      errs.birthDate = "تاریخ تولد کامل وارد شود";
    if (!/^(\+98|0)?9\d{9}$/.test(form.mobileNumber.replace(/\s/g, "")))
      errs.mobileNumber = "شماره موبایل معتبر نیست";
    if (!/^(\+98|0)?9\d{9}$/.test(form.parentsMobileNumber.replace(/\s/g, "")))
      errs.parentsMobileNumber = "شماره موبایل والدین معتبر نیست";
    if (!form.grade) errs.grade = "پایه تحصیلی را انتخاب کنید";
    if (!form.schoolType) errs.schoolType = "شعبه را انتخاب کنید";
    if (!form.major) errs.major = "رشته را انتخاب کنید";
    return errs;
  };

  // ----------------------------------------------------------
  // ارسال به بک‌اند
  // ----------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("submitting");
    setServerMessage("");

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      fatherName: form.fatherName.trim(),
      motherName: form.motherName.trim(),
      nationalCode: form.nationalCode.trim(),
      birthDate: {
        day: form.birthDay,
        month: form.birthMonth,
        year: form.birthYear,
      },
      mobileNumber: form.mobileNumber.replace(/\s/g, ""),
      parentsMobileNumber: form.parentsMobileNumber.replace(/\s/g, ""),
      landlineNumber: form.landlineNumber.trim(),
      grade: form.grade,
      schoolType: form.schoolType,
      major: form.major,
    };

    try {
      await submitEnrollment(payload);
      setStatus("success");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setServerMessage(err.message);
    }
  };

  const close = () => {
    onClose();
    // بعد از بستن، حالت فرم برای باز شدن بعدی ریست می‌شه
    setTimeout(() => {
      setStatus("idle");
      setErrors({});
      setServerMessage("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#21295A]/60 backdrop-blur-sm overflow-y-auto"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative w-full max-w-3xl bg-white rounded-[1.5rem_0_1.5rem_0] [corner-shape:squircle] border-[0.125rem] border-[#292827] shadow-[0.5rem_0.5rem_0_#292827] overflow-hidden my-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* هدر مودال */}
            <div className="relative bg-teal px-6 sm:px-8 py-5 flex items-center justify-between">
              <div>
                <h3 className="font-black text-[1.25rem] sm:text-[1.5rem] text-white">
                  پیش‌ثبت‌نام در رکاد
                </h3>
                <p className="text-white/80 text-[0.8125rem] font-medium mt-1">
                  اطلاعات خود را وارد کنید تا همکاران ما با شما تماس بگیرند.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="بستن"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border-[0.125rem] border-white/40 text-white hover:bg-white hover:text-teal transition-all duration-300 hover:rotate-90"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* بدنه فرم */}
            {status === "success" ? (
              <div className="px-6 sm:px-10 py-14 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-teal/10 text-teal mb-5">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h4 className="font-black text-[1.375rem] text-[#292827] mb-2">
                  درخواست شما ثبت شد 🎉
                </h4>
                <p className="text-[0.9375rem] text-[#292827]/60 font-medium leading-7 max-w-md mx-auto">
                  به‌زودی کارشناسان ما برای هماهنگی و تکمیل ثبت‌نام با شما
                  تماس می‌گیرند.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-8 relative inline-flex items-center justify-center bg-navy text-white font-extrabold text-[0.9375rem] px-8 py-3 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] hover:brightness-110 transition-all"
                >
                  بستن
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 sm:py-8 max-h-[65vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* نام و نام خانوادگی */}
                  <div>
                    <label className={labelClass}>نام *</label>
                    <input className={inputClass(errors.firstName)} value={form.firstName} onChange={set("firstName")} placeholder="مثلاً علی" />
                    {errors.firstName && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>نام خانوادگی *</label>
                    <input className={inputClass(errors.lastName)} value={form.lastName} onChange={set("lastName")} placeholder="مثلاً رضایی" />
                    {errors.lastName && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.lastName}</p>}
                  </div>

                  {/* نام پدر و مادر */}
                  <div>
                    <label className={labelClass}>نام پدر *</label>
                    <input className={inputClass(errors.fatherName)} value={form.fatherName} onChange={set("fatherName")} placeholder="نام پدر" />
                    {errors.fatherName && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.fatherName}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>نام مادر *</label>
                    <input className={inputClass(errors.motherName)} value={form.motherName} onChange={set("motherName")} placeholder="نام مادر" />
                    {errors.motherName && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.motherName}</p>}
                  </div>

                  {/* کد ملی */}
                  <div>
                    <label className={labelClass}>کد ملی *</label>
                    <input className={inputClass(errors.nationalCode)} value={form.nationalCode} onChange={set("nationalCode")} placeholder="۱۰ رقم" dir="ltr" maxLength={10} inputMode="numeric" />
                    {errors.nationalCode && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.nationalCode}</p>}
                  </div>

                  {/* تاریخ تولد */}
                  <div>
                    <label className={labelClass}>تاریخ تولد *</label>
                    <div className="flex gap-2">
                      <input className={inputClass(errors.birthDate)} value={form.birthDay} onChange={set("birthDay")} placeholder="روز" inputMode="numeric" maxLength={2} />
                      <input className={inputClass(errors.birthDate)} value={form.birthMonth} onChange={set("birthMonth")} placeholder="ماه" inputMode="numeric" maxLength={2} />
                      <input className={inputClass(errors.birthDate)} value={form.birthYear} onChange={set("birthYear")} placeholder="سال" inputMode="numeric" maxLength={4} />
                    </div>
                    {errors.birthDate && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.birthDate}</p>}
                  </div>

                  {/* موبایل‌ها */}
                  <div>
                    <label className={labelClass}>موبایل دانش‌آموز *</label>
                    <input className={inputClass(errors.mobileNumber)} value={form.mobileNumber} onChange={set("mobileNumber")} placeholder="0912..." dir="ltr" inputMode="tel" />
                    {errors.mobileNumber && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.mobileNumber}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>موبایل والدین *</label>
                    <input className={inputClass(errors.parentsMobileNumber)} value={form.parentsMobileNumber} onChange={set("parentsMobileNumber")} placeholder="0912..." dir="ltr" inputMode="tel" />
                    {errors.parentsMobileNumber && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.parentsMobileNumber}</p>}
                  </div>

                  {/* تلفن ثابت (اختیاری) */}
                  <div>
                    <label className={labelClass}>تلفن ثابت (اختیاری)</label>
                    <input className={inputClass()} value={form.landlineNumber} onChange={set("landlineNumber")} placeholder="051..." dir="ltr" inputMode="tel" />
                  </div>

                  {/* پایه و شعبه */}
                  <div>
                    <label className={labelClass}>پایه تحصیلی *</label>
                    <select className={inputClass(errors.grade)} value={form.grade} onChange={set("grade")}>
                      <option value="">انتخاب کنید</option>
                      {GRADES.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                    {errors.grade && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.grade}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>شعبه *</label>
                    <select className={inputClass(errors.schoolType)} value={form.schoolType} onChange={set("schoolType")}>
                      <option value="">انتخاب کنید</option>
                      {SCHOOL_TYPES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.schoolType && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.schoolType}</p>}
                  </div>

                  {/* رشته */}
                  <div className="sm:col-span-2">
                    <label className={labelClass}>رشته *</label>
                    <select className={inputClass(errors.major)} value={form.major} onChange={set("major")}>
                      <option value="">انتخاب کنید</option>
                      {MAJORS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    {errors.major && <p className="text-red-500 text-[0.75rem] mt-1 font-medium">{errors.major}</p>}
                  </div>
                </div>

                {/* پیام خطای سرور */}
                {status === "error" && serverMessage && (
                  <div className="mt-5 bg-red-50 border border-red-200 rounded-[0.625rem] px-4 py-3 text-red-600 text-[0.875rem] font-medium">
                    {serverMessage}
                  </div>
                )}

                {/* دکمه ارسال */}
                <div className="mt-7 flex justify-end">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`relative inline-flex items-center justify-center text-white font-extrabold text-[0.9375rem] px-10 py-3.5 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] transition-all duration-300 ${
                      status === "submitting"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-navy hover:bg-[#15244a] hover:-translate-y-0.5 shadow-[0.25rem_0.25rem_0_#58bdaf]"
                    }`}
                  >
                    {status === "submitting" ? "در حال ارسال..." : "ثبت درخواست پیش‌ثبت‌نام"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
