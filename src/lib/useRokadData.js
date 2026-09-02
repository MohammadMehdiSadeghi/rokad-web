// src/lib/useRokadData.js
// ============================================================
// هوک دیتای سکشن‌ها — با fallback امن
// ------------------------------------------------------------
// - خالی شروع می‌شه و اول fallback رو نشون می‌ده
// - اگه بک‌اند پاسخ بده و دیتای واقعی داشته باشه، جایگزین می‌شه
// - اگه بک‌اند خالی یا در دسترس نباشه، fallback می‌مونه
// ============================================================
"use client";

import { useEffect, useState } from "react";

export default function useRokadData(fetcher, fallback = []) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let active = true;

    fetcher()
      .then((result) => {
        if (active && Array.isArray(result) && result.length) {
          setData(result);
        }
      })
      .catch(() => {
        // بک‌اند در دسترس نیست — fallback فعلی می‌مونه
      });

    return () => {
      active = false;
    };
  }, [fetcher]);

  return data;
}
