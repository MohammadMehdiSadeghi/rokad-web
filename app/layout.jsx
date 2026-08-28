import "../src/index.css";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import ScrollToHash from "../src/layout/ScrollToHash";

export const metadata = {
  title: "رکاد | هنرستان استارتاپی",
  description: "اولین هنرستان استارتاپی ایران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">
        <ScrollToHash />
        <Header />
        <main className="pt-4 sm:pt-5 lg:pt-6 xl:pt-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}