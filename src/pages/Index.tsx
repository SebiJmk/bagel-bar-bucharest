import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import IntroLoader from "@/components/IntroLoader";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <IntroLoader onComplete={onComplete} />}
      <CustomCursor />
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}>
        <Header />
        <main>
          <HeroSection />
          <MenuSection />
          <AboutSection />
          <LocationSection />
        </main>
      </div>
    </>
  );
};

export default Index;
