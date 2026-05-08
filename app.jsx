/* AETHEL — main app composition */

function App() {
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

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
