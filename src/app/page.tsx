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

export default function Home() {
  const headerHeight = 80; // Height in vh

  return (
    <main className="">
      <Navbar className="fixed" headerHeight={headerHeight} />
      <Header height={headerHeight} />
      <Explore headerHeight={headerHeight} />
      <About />
      <Statistics />
      <Board />
      <Departments />
      <Events />
      <Contact />
    </main>
  );
}
