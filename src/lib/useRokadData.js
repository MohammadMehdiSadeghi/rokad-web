// src/lib/useRokadData.js
// ============================================================
// هوک داینامیک‌سازی سکشن‌ها
// ------------------------------------------------------------
// - همیشه با دیتای fallback (محتوای هاردکد قبلی) رندر شروع می‌شه
//   که سایت هیچ‌وقت خالی به نظر نرسه.
// - به محض اینکه API جواب بده، دیتای واقعی جایگزین می‌شه.
// - اگه API خطا بده، همون fallback می‌مونه (بدون ارور به کاربر).
// ============================================================
"use client";

import { useEffect, useState } from "react";

export default function useRokadData(fetcher, fallback) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let active = true;

    fetcher().then((result) => {
      if (active && Array.isArray(result) && result.length) {
        setData(result);
      }
    });

    return () => {
      active = false;
    };
  }, [fetcher]);

  return data;
}
