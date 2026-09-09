import EventsSingle from "../../../src/views/EventsSingle";
import { allEvents } from "../../../src/views/EventsSingle/data";

export function generateStaticParams() {
  return allEvents.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = allEvents.find((e) => e.slug === slug);
  return {
    title: entry
      ? `${entry.event.postMeta.title} | رویدادهای رکاد`
      : "رویداد | رکاد",
    description: entry
      ? entry.event.postMeta.subtitle.replace(/<[^>]*>/g, "")
      : "رویدادهای استارتاپی هنرستان رکاد.",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <EventsSingle slug={slug} />;
}
