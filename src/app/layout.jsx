import '../index.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from '../pages/Home'

export const metadata = {
  title: 'رکاد | هنرستان استارتاپی',
  description: 'اولین هنرستان استارتاپی ایران',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-iransans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
