import { Inter } from "next/font/google";

import "./globals.css";
import Navebar from "./(components)/navebar/page";
import Footer from "./(components)/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
