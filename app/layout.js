import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./(components)/Header";
// import Footer from "./(components)/Footer";
// import { InriaRegular } from "./(fonts)/font";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hygieiora",
  description: "Conversations that heal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
