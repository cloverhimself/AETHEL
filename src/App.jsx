import { useReveal, ParticleBg, ScrollProgress } from './atoms';
import CustomCursor from './cursor';
import AmbientAudio from './audio';
import FindYourSoul from './quiz';
import { Nav, Hero, QuickExplanation, SoulsSupply } from './sections-top';
import { LineagesSection, RuptureSection, SealsSection } from './sections-lore';
import { EchelonsSection, KingsSection, IdentitySection } from './sections-deep';
import { ChronicleGate, FinalCTA, Footer, AethelTweaks } from './sections-end';

function ChapterDivider({ label }) {
  return (
    <div className="chapter-divider reveal" aria-hidden="true">
      <span className="chapter-divider__line" />
      <span className="chapter-divider__glyph">◈</span>
      {label && <span className="chapter-divider__label">{label}</span>}
      <span className="chapter-divider__glyph">◈</span>
      <span className="chapter-divider__line" />
    </div>
  );
}

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
      <ChapterDivider label="The Inner Layer" />
      <IdentitySection />
      <ChapterDivider label="The Five Origins" />
      <LineagesSection />
      <ChapterDivider label="The Great Rupture" />
      <RuptureSection />
      <ChapterDivider label="The Cosmic Seals" />
      <SealsSection />
      <ChapterDivider label="Lineages and Echelons" />
      <EchelonsSection />
      <ChapterDivider label="The Census" />
      <SoulsSupply />
      <ChapterDivider label="The Ancient Kings" />
      <KingsSection />
      <ChapterDivider label="The Archive" />
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
