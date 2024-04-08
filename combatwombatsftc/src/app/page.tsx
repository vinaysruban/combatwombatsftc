import Hero from "@/components/hero";
import Summary from "@/components/summary";
import Achievements from "@/components/achievements";
import Goals from "@/components/goals";
import Us from "@/components/us";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div>
        <Hero />
        <Summary />
        <Achievements />
        <Goals />
        <Us />
        <CTA />
    </div>
  );
}
