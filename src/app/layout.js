import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Navbar";
import { Foot } from "../components/Footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Syntalix Consultancy Services",
  description: "Syntalix Consultancy Services official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Foot />
      </body>
    </html>
  );
}
