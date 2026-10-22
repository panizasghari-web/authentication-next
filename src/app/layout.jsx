import Bootstrap from "@/components/Bootstrap";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Karla } from "next/font/google";
import Header from "@/components/Header";
import Toastify from "@/components/Toastify";
import { AuthProvider } from "@/context/AuthContext";

const KarlaFont = Karla({
  subsets: ["latin"],
  style: ["normal"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={KarlaFont.className}>
        <AuthProvider>
          <Header />
          {children}
          <Toastify />
          <Bootstrap />
        </AuthProvider>
      </body>
    </html>
  );
}
