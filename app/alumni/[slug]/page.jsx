import AlumniProfileView from "../../../src/views/AlumniProfile";
import { alumni } from "../../../src/views/Alumni/data";

export function generateStaticParams() {
  return alumni.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = alumni.find((a) => a.slug === slug);
  return {
    title: m ? `${m.name} | دانش‌آموختگان رکاد` : "دانش‌آموخته | رکاد",
    description: m ? `${m.name} — ${m.role}` : "پروفایل دانش‌آموخته رُکاداسکول",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <AlumniProfileView slug={slug} />;
}
