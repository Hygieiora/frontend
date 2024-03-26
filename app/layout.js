"use client";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./(components)/Header";
// import Footer from "./(components)/Footer";
// import { InriaRegular } from "./(fonts)/font";
import { usePathname } from "next/navigation";
import SplashScreen from "./(components)/splashScreen";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Hygieiora",
//   description: "Conversations that heal",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <html lang="en">
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
