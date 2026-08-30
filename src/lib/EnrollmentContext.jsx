// src/lib/EnrollmentContext.jsx
// ============================================================
// کانتکست سراسری برای باز کردن مودال پیش‌ثبت‌نام از هر دکمه‌ای
// ------------------------------------------------------------
// هر دکمه‌ی «پیش‌ثبت‌نام» در سایت از useEnrollment() استفاده می‌کنه:
//   const { openEnrollment } = useEnrollment();
//   <button onClick={openEnrollment}>پیش‌ثبت‌نام</button>
// مودال و state اش فقط یک‌بار در Provider رندر می‌شه.
// ============================================================
"use client";

import { createContext, useCallback, useContext, useState } from "react";
import EnrollmentModal from "../Components/EnrollmentModal";

const EnrollmentContext = createContext({ openEnrollment: () => {} });

export function EnrollmentProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openEnrollment = useCallback(() => setOpen(true), []);
  const closeEnrollment = useCallback(() => setOpen(false), []);

  return (
    <EnrollmentContext.Provider value={{ openEnrollment }}>
      {children}
      <EnrollmentModal open={open} onClose={closeEnrollment} />
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  return useContext(EnrollmentContext);
}
