// import './globals.css'
import '../styles/output.css'
import Footer from './components/footer'
import Navbar from './components/nav-bar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
