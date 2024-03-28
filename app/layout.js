import "./globals.css";
import { Roboto, New_Rocker, Mr_De_Haviland } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const rocker = New_Rocker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--New_Rocker",
});
const haviland = Mr_De_Haviland({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--Mr_De_Haviland",
});

export const metadata = {
  title: "CryptoRaise | Home",
  description: "Blockchain powered Crowdfunding Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(roboto.variable, rocker.variable, haviland.variable)}>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
