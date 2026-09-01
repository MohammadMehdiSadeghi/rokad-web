// src/lib/useRokadData.js
// ============================================================
// هوک دیتای سکشن‌ها — فقط از بک‌اند
// ------------------------------------------------------------
// - خالی شروع می‌شه (بدون fallback)
// - اگه بک‌اند روشن باشه و جواب بده، دیتا رو می‌گیره
// - اگه بک‌اند خاموش باشه، محتوا خالی میمونه
// ============================================================
"use client";

import { useEffect, useState } from "react";

export default function useRokadData(fetcher, fallback) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let active = true;

    fetcher()
      .then((result) => {
        if (active && Array.isArray(result) && result.length) {
          setData(result);
        }
      })
      .catch(() => {
        // بک‌اند در دسترس نیست — محتوا خالی میمونه
      });

    return () => {
      active = false;
    };
  }, [fetcher]);

  return data;
}