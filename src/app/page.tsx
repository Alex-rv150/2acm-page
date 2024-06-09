"use client";

import Navbar from "@/components/Home/Navbar";
import Header from "@/components/Home/Header";
import About from "@/components/Home/About";
import { Explore } from "@/components/Home/explore";
import Statistics from "@/components/Home/Statistics";

export default function Home() {
  const headerHeight = 80; // Height in vh

  return (
    <main className="">
      <Navbar className="fixed" headerHeight={headerHeight} />
      <Header height={headerHeight} />
      <Explore headerHeight={headerHeight} />
      <About />
      <Statistics />
    </main>
  );
}
