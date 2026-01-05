import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar/page";
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
      </body>
    </html>
  );
}
