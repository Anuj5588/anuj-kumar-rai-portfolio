import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar/page";
import Footer from "./component/Footer/footerLayout/page";
import "./globals.css";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        
      >
        <div>
          <Navbar/>
          
        </div>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
