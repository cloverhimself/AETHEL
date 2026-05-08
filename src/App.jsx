import { useReveal, ParticleBg, ScrollProgress } from './atoms';
import CustomCursor from './cursor';
import AmbientAudio from './audio';
import FindYourSoul from './quiz';
import { Nav, Hero, QuickExplanation, SoulsSupply } from './sections-top';
import { LineagesSection, RuptureSection, SealsSection } from './sections-lore';
import { EchelonsSection, KingsSection, IdentitySection } from './sections-deep';
import { GallerySection, FinalCTA, Footer, AethelTweaks } from './sections-end';

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
      <SoulsSupply />
      <LineagesSection />
      <RuptureSection />
      <SealsSection />
      <EchelonsSection />
      <KingsSection />
      <IdentitySection />
      <section className="section section-tight" id="quiz" data-screen-label="09b Find Your Soul">
        <div className="shell"><FindYourSoul /></div>
      </section>
      <GallerySection />
      <FinalCTA />
      <Footer />
      <AethelTweaks />
      <AmbientAudio />
    </>
  );
}
