// ابزار مشترک سئو: متادیتای هر صفحه + Open Graph + Twitter + canonical
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rokadschool.ir";
export const SITE_NAME = "رکاد";

export function pageMeta({ title, description, path = "/", type = "website", image = "/assets/Shared/Logos/logo.png" }) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: "رُکاد‌اسکول",
      title,
      description,
      locale: "fa_IR",
      images: [{ url: `${SITE_URL}${image}`, width: 512, height: 400, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },
  };
}
