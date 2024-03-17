import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const roboto = Roboto({ subsets: ["latin"] , weight : ["400"]});

export const metadata = {
  title: "CryptoRaise | Home",
  description: "Blockchain powered Crowdfunding Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
