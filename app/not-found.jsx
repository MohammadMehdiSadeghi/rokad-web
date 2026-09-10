import NotFound from "../src/views/NotFound";

export const metadata = {
  title: "صفحه پیدا نشد | رکاد",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return <NotFound />;
}
