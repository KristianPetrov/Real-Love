import CandleImage from "@/components/CandleImage";
import AboutSection from "@/components/sections/AboutSection";
import CoreMissionSection from "@/components/sections/CoreMissionSection";
import PillarsSection from "@/components/sections/PillarsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-5xl flex flex-col items-center text-center">
        <CandleImage
          src="/real-love-logo.png"
          alt="Real Love logo"
          width={1200}
          height={600}
          priority
          className="w-full max-w-[820px] h-auto"
        />

        <AboutSection />
        <CoreMissionSection />
        <PillarsSection />
        <ContactSection />
      </div>
    </main>
  );
}
