"use client";

import Navbar from "@/components/Home/Navbar";
import Header from "@/components/Home/Header";
import About from "@/components/Home/About";
import { Explore } from "@/components/Home/explore";
import Statistics from "@/components/Home/Statistics";
import Board from "@/components/Home/Board";
import Departments from "@/components/Home/Departments";
import Events from "@/components/Home/Events";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";

export default function Home() {
  const headerHeight = 80; // Height in vh

  return (
    <main className="flex flex-col w-full justify-center items-center bg-[#FBFCFF] dark:bg-[#020817]">
      <div className="flex flex-col w-full h-[80vh] md:h-[100vh]">
        <div className="flex w-full md:fixed z-50">
          <Navbar headerHeight={headerHeight} />
        </div>
        <div className="absolute w-full md:bottom-0 md:left-0 z-10">
        <Header height={headerHeight} />
        </div>
      </div>
      {/* <Explore headerHeight={headerHeight} /> */}
      <About />
      <Statistics />
      <Board />
      <Departments />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
