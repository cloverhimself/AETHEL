import { useReveal, ParticleBg, ScrollProgress } from './atoms';
import CustomCursor from './cursor';
import AmbientAudio from './audio';
import FindYourSoul from './quiz';
import { Nav, Hero, QuickExplanation, SoulsSupply } from './sections-top';
import { LineagesSection, RuptureSection, SealsSection } from './sections-lore';
import { EchelonsSection, KingsSection, IdentitySection } from './sections-deep';
import { ChronicleGate, FinalCTA, Footer, AethelTweaks } from './sections-end';

export default function App() {
  useReveal();
  return (
    <>
      <CustomCursor />
      <ParticleBg />
      <ScrollProgress />
      <Nav />
      <Hero />
      <QuickExplanation />
      <IdentitySection />
      <LineagesSection />
      <RuptureSection />
      <SealsSection />
      <EchelonsSection />
      <SoulsSupply />
      <KingsSection />
      <ChronicleGate />
      <section className="section section-tight" id="quiz" data-screen-label="11 Find Your Soul">
        <div className="shell"><FindYourSoul /></div>
      </section>
      <FinalCTA />
      <Footer />
      <AethelTweaks />
      <AmbientAudio />
    </>
  );
}
