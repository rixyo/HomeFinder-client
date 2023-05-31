import Footer from './components/Footer'
import NavigationBar from './components/Navbar/page'
import './globals.css'




export const metadata = {
  title: 'Home Finder',
  description: 'Find your dream home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className=''>
        <NavigationBar/>
        </nav>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
