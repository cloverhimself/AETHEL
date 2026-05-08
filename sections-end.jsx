/* AETHEL — Gallery, Final CTA, Footer, Tweaks */

function GallerySection() {
  // Masonry-style placeholders — varied heights, lineage-tinted gradients.
  const items = [
    { lineage: 'aurelion', label: 'Aurelion Rex · BTC', h: 360 },
    { lineage: 'noctyra',  label: 'Noctyra Mindvoid · ETH', h: 460 },
    { lineage: 'ignaris',  label: 'Ignaris Velocity · SOL', h: 320 },
    { lineage: 'serenith', label: 'Serenith Dominus · BNB', h: 400 },
    { lineage: 'verdanix', label: 'Verdanix Bloom · BTC', h: 480 },
    { lineage: 'aurelion', label: 'Aurelion Mindclock · ETH', h: 340 },
    { lineage: 'noctyra',  label: 'Noctyra Falling Comet · SOL', h: 420 },
    { lineage: 'ignaris',  label: 'Ignaris Mindfire · ETH', h: 360 },
    { lineage: 'serenith', label: 'Serenith Sovereign Zero · BTC', h: 440 },
    { lineage: 'verdanix', label: 'Verdanix Returning Wave · SOL', h: 320 },
    { lineage: 'aurelion', label: 'Aurelion Dominus · BNB', h: 400 },
    { lineage: 'ignaris',  label: 'Ignaris Crowned Ember · BTC', h: 380 },
  ];
  return (
    <section className="section" id="gallery" data-screen-label="10 Gallery">
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow reveal">Chapter VII · The Awakened Forms</div>
          <h2 className="section-head__title reveal" data-delay="1">The first portraits<br /><span className="serif-italic" style={{ color: 'var(--gold)' }}>of the descended.</span></h2>
          <p className="section-head__sub reveal" data-delay="2">
            A small selection from the awakened. Each soul is rendered at the moment its frequency stabilises against its seal. Drag your eye slowly. The world rewards patience.
          </p>
        </div>

        <div className="gallery reveal">
          {items.map((it, i) => (
            <div key={i} className={'gallery__item c-' + it.lineage} data-label={it.label}>
              <div className="gallery__item-inner placeholder-art" style={{ height: it.h, '--accent-deep': 'var(--' + it.lineage + '-deep)' }}>
                <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <radialGradient id={`g${i}`} cx="50%" cy="48%" r="42%">
                      <stop offset="0%" stopColor="rgba(245,236,214,0.5)" />
                      <stop offset="40%" stopColor={`var(--${it.lineage})`} stopOpacity="0.5" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                    </radialGradient>
                  </defs>
                  <rect x="0" y="0" width="200" height="260" fill={`var(--${it.lineage}-deep)`} opacity="0.4" />
                  <circle cx="100" cy="115" r="72" fill={`url(#g${i})`} />
                  <circle cx="100" cy="115" r="40" fill="none" stroke={`var(--${it.lineage})`} strokeOpacity="0.4" strokeWidth="0.6" strokeDasharray="2 4" />
                  <circle cx="100" cy="115" r="60" fill="none" stroke="rgba(217,184,122,0.18)" strokeWidth="0.4" />
                  <ellipse cx="100" cy="200" rx="60" ry="80" fill="rgba(0,0,0,0.5)" />
                </svg>
              </div>
              <div className="gallery__glow" />
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 32, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--fg-3)', textAlign: 'center' }}>
          Placeholder portraits · drop final art reference into <span style={{ color: 'var(--gold)' }}>/gallery/</span>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="cta" id="enter" data-screen-label="11 Final CTA">
      <div className="shell">
        <div className="eyebrow reveal" style={{ justifyContent: 'center', display: 'inline-flex', marginBottom: 32 }}>Closing Invocation</div>
        <h2 className="cta__title reveal" data-delay="1">The void has already begun<br /><span className="serif-italic">to observe you.</span></h2>
        <div className="cta__sub reveal" data-delay="2">
          Enter the world of Aethel and discover what your soul is becoming.
        </div>
        <div className="cta__buttons reveal" data-delay="3">
          <a className="btn btn--primary" href="#">Enter the World</a>
          <a className="btn btn--ghost" href="#">Read the Lore</a>
        </div>

        <div className="cta__socials reveal" data-delay="4">
          <a href="#" className="cta__social" aria-label="X">
            <SocialIcon kind="x" /><span>X / Twitter</span>
          </a>
          <a href="#" className="cta__social" aria-label="Telegram">
            <SocialIcon kind="tg" /><span>Telegram</span>
          </a>
          <a href="#" className="cta__social" aria-label="Discord">
            <SocialIcon kind="dc" /><span>Discord</span>
          </a>
        </div>

        <div className="reveal" data-delay="4" style={{ marginTop: 96, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', maxWidth: 920, margin: '96px auto 0' }}>
          {[
            { k: '10,000', v: 'Souls awakened' },
            { k: '5', v: 'Lineages of the void' },
            { k: '4', v: 'Cosmic seals' },
            { k: '22', v: 'Ancient Kings' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'var(--void)', padding: '28px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: 36, letterSpacing: '0.06em', color: 'var(--gold)', marginBottom: 6 }}>{s.k}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" data-screen-label="12 Footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <div className="footer__brand">AETHEL</div>
            <p className="footer__desc">A dark psychological universe of ten thousand souls, five lineages, four cosmic seals, and twenty-two ancient kings. A world about identity, not ownership.</p>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">The World</div>
            <a href="#souls">The 10,000 Souls</a>
            <a href="#lineages">The Five Lineages</a>
            <a href="#rupture">The Great Rupture</a>
            <a href="#seals">The Cosmic Seals</a>
            <a href="#echelons">Lineages and Echelons</a>
            <a href="#kings">The Ancient Kings</a>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Channels</div>
            <a href="#" className="footer__social-link"><SocialIcon kind="x" /> X / Twitter</a>
            <a href="#" className="footer__social-link"><SocialIcon kind="tg" /> Telegram</a>
            <a href="#" className="footer__social-link"><SocialIcon kind="dc" /> Discord</a>
            <a href="#">Lore Codex</a>
            <a href="#">Press</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© AETHEL · MMXXVI</span>
          <span>The void observes. So do we.</span>
          <span>v 0.1 · Awakening</span>
        </div>
      </div>
    </footer>
  );
}

function AethelTweaks() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "particleDensity": "subtle",
    "auraIntensity": 100,
    "displayFont": "Cinzel",
    "accent": "#d9b87a"
  }/*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply font swap
  useEffect(() => {
    const fonts = {
      Cinzel:    "'Cinzel', serif",
      Cormorant: "'Cormorant Garamond', serif",
      Italiana:  "'Italiana', serif",
      Tenor:     "'Tenor Sans', serif",
    };
    document.documentElement.style.setProperty('--display', fonts[t.displayFont] || fonts.Cinzel);
    if (t.displayFont !== 'Cinzel' && !document.getElementById('font-' + t.displayFont)) {
      const link = document.createElement('link');
      link.id = 'font-' + t.displayFont;
      link.rel = 'stylesheet';
      const map = {
        Cormorant: 'Cormorant+Garamond:wght@400;500;600',
        Italiana:  'Italiana',
        Tenor:     'Tenor+Sans',
      };
      link.href = `https://fonts.googleapis.com/css2?family=${map[t.displayFont]}&display=swap`;
      document.head.appendChild(link);
    }
  }, [t.displayFont]);

  // Apply accent swap (value is hex of the warm tone)
  useEffect(() => {
    const palette = {
      '#d9b87a': { soft: '#b89a5a', deep: '#6b5226' },  // gold
      '#e88a5a': { soft: '#b86a40', deep: '#5a2e15' },  // ember
      '#b496e6': { soft: '#8b6cd8', deep: '#3a2a6e' },  // violet
      '#a8d0f0': { soft: '#6fb5e8', deep: '#1d3f5a' },  // ice
    };
    const p = palette[t.accent] || palette['#d9b87a'];
    document.documentElement.style.setProperty('--gold', t.accent);
    document.documentElement.style.setProperty('--gold-soft', p.soft);
    document.documentElement.style.setProperty('--gold-deep', p.deep);
  }, [t.accent]);

  // Aura intensity (0–200, 100 = baseline)
  useEffect(() => {
    const m = (t.auraIntensity || 100) / 100;
    document.querySelectorAll('.hero__aura, .identity__visual-aura').forEach((el) => {
      el.style.opacity = String(0.55 * m);
    });
  }, [t.auraIntensity]);

  // Particle density
  useEffect(() => {
    const c = document.getElementById('particle-bg');
    if (c) c.style.opacity = t.particleDensity === 'off' ? 0 : (t.particleDensity === 'dense' ? 1 : 0.7);
  }, [t.particleDensity]);

  return (
    <TweaksPanel title="Aethel · Tweaks">
      <TweakSection label="Aesthetic">
        <TweakColor
          label="Primary accent"
          value={t.accent}
          onChange={(v) => setTweak('accent', v)}
          options={['#d9b87a', '#e88a5a', '#b496e6', '#a8d0f0']}
        />
        <TweakSelect
          label="Display font"
          value={t.displayFont}
          onChange={(v) => setTweak('displayFont', v)}
          options={['Cinzel', 'Cormorant', 'Italiana', 'Tenor']}
        />
      </TweakSection>
      <TweakSection label="Atmosphere">
        <TweakRadio
          label="Particles"
          value={t.particleDensity}
          onChange={(v) => setTweak('particleDensity', v)}
          options={['off', 'subtle', 'dense']}
        />
        <TweakSlider
          label="Aura"
          value={t.auraIntensity}
          onChange={(v) => setTweak('auraIntensity', v)}
          min={0} max={200} step={5} unit="%"
        />
      </TweakSection>
    </TweaksPanel>
  );
}

Object.assign(window, { GallerySection, FinalCTA, Footer, AethelTweaks });
