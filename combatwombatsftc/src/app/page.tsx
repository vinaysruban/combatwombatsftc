"use client"
import Hero from "@/components/hero";
import RobotSummary from "@/components/summary";
import Achievements from "@/components/achievements";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
        <Hero />
        <RobotSummary />
        <Achievements />
    </div>
  );
}
