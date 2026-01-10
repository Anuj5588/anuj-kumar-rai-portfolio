import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar/page";
import Footer from "./component/Footer/footerLayout/page";
import "./globals.css";
import Link from "next/link";



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        
      >
        <nav className="bg-white">
          <Link href={`./component/about/page`}>About</Link>
        </nav>

        <div>
          <Navbar/>
          
        </div>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
