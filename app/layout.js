import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar/page";
import Footer from "./component/Footer/footerLayout/page";
import "./globals.css";
import Link from "next/link";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" flex flex-col ">
        
        {/* Navbar */}
        <Navbar />

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
