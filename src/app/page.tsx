import { Hero } from "@/components/hero";
import { HeroAlternate } from '@/components/hero-alternate'
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroAlternate />
      <ModeToggle />
    </>
  );
}
