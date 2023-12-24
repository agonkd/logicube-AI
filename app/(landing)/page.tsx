import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <header className="h-full">
      <LandingNavbar />
      <LandingHero />
    </header>
  );
};

export default LandingPage;
