import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CryptoRaise | Home",
  description: "Blockchain powered Crowdfunding Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "rgb(247 242 242)" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
