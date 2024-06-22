import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simrit Kaul",
  description: "Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[12rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[64rem]"></div>
        <div
          className="bg-[#dbd7fd] absolute top-[-6rem] left-[-36rem] h-[32rem] w-[50rem] -z-10 rounded-full blur-[10rem] 
        sm:w-[64rem] md:left-[-30rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-7rem]"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
