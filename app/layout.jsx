import "../src/index.css";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import ScrollToHash from "../src/layout/ScrollToHash";
import { EnrollmentProvider } from "../src/lib/EnrollmentContext";
import { pageMeta, SITE_URL } from "../src/lib/seo";

export const metadata = {
  ...pageMeta({
    title: "رکاد | هنرستان استارتاپی",
    description:
      "رُکاد‌اسکول — اولین هنرستان استارتاپی ایران از ۱۳۹۵. اکوسیستم آموزشی نوجوان کارآفرین: هنرستان، کالج، کلوپ و مدرسه دخترانه در مشهد.",
    path: "/",
  }),
  metadataBase: new URL(SITE_URL),
  applicationName: "رُکاد‌اسکول",
  authors: [{ name: "رُکاد‌اسکول" }],
  creator: "رُکاد‌اسکول",
  publisher: "رُکاد‌اسکول",
  formatDetection: { telephone: false },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-iransans">
        <EnrollmentProvider>
          <ScrollToHash />
          <Header />
          <main className="pt-12 sm:pt-[4.25rem] lg:pt-[7.4375rem] xl:pt-[7.9375rem]">
            {children}
          </main>
          <Footer />
        </EnrollmentProvider>
      </body>
    </html>
  );
}
