import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar/page";
import Footer from "./component/Footer/footerLayout/page";
import "./globals.css";
import Link from "next/link";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        
        {/* Navbar */}

        <div className=""> <Navbar /></div>
       

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
