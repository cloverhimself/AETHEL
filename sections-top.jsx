/* AETHEL — Top sections: Nav, Hero, Quick Explanation, 10,000 Souls */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={'nav' + (scrolled ? ' is-scrolled' : '')}>
      <a href="#top" className="nav__brand">AETHEL</a>
      <div className="nav__links">
        <a href="#souls">Souls</a>
        <a href="#lineages">Lineages</a>
        <a href="#rupture">Rupture</a>
        <a href="#seals">Seals</a>
        <a href="#kings">Kings</a>
      </div>
      <a href="#enter" className="nav__cta">Enter ↗</a>
    </nav>
  );
}

function Hero() {
  const auraRef = useRef(null);
  const ringRef = useRef(null);
  const torchRef = useRef(null);
  // Parallax on hero visuals + cursor torch
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (auraRef.current) auraRef.current.style.transform = `translate(-50%, calc(-50% + ${y * 0.18}px)) scale(${1 + y * 0.0003})`;
      if (ringRef.current) ringRef.current.style.transform = `translateY(${y * 0.32}px) rotate(${y * 0.05}deg)`;
    };
    const onMove = (e) => {
      if (!torchRef.current) return;
      const r = torchRef.current.parentElement.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      torchRef.current.style.setProperty('--mx', x + '%');
      torchRef.current.style.setProperty('--my', y + '%');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero__torch" ref={torchRef} aria-hidden="true" />
      <div className="hero__aura" ref={auraRef} aria-hidden="true" />
      <div ref={ringRef} className="hero__ring-wrap"><CosmicRing /></div>
      <div className="shell hero__content">
        <div className="hero__brand reveal">
          <Typer text="A DARK COSMIC NFT UNIVERSE · 10,000 SOULS" speed={32} startDelay={400} caret={true} />
        </div>
        <h1 className="hero__title reveal" data-delay="1">AETHEL</h1>
        <div className="hero__sub reveal" data-delay="2">The Awakening of 10,000 Souls</div>
        <p className="hero__desc reveal" data-delay="3">
          A dark psychological NFT universe where identity, lore, and evolution decide what your soul becomes.
        </p>
        <div className="hero__cta reveal" data-delay="4">
          <a className="btn btn--primary" href="#enter">Enter the World</a>
          <a className="btn btn--ghost" href="#lineages">Discover the Lineages</a>
        </div>
        <div className="hero__meta reveal" data-delay="4">
          <span><strong>10,000</strong> &nbsp; SOULS</span>
          <span><strong>5</strong> &nbsp; LINEAGES</span>
          <span><strong>4</strong> &nbsp; SEALS</span>
          <span><strong>22</strong> &nbsp; ANCIENT KINGS</span>
        </div>
        <div className="hero__socials reveal" data-delay="4">
          <span className="hero__socials-label">FOLLOW THE AWAKENING</span>
          <a href="#" className="hero__social" aria-label="X"><SocialIcon kind="x" /></a>
          <a href="#" className="hero__social" aria-label="Telegram"><SocialIcon kind="tg" /></a>
          <a href="#" className="hero__social" aria-label="Discord"><SocialIcon kind="dc" /></a>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span>SCROLL TO AWAKEN</span>
          <span className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}

function QuickExplanation() {
  return (
    <section className="section section-tight" id="about" data-screen-label="02 About">
      <div className="shell">
        <div className="divider-glyph reveal">Chapter I · The First Frequency</div>
        <div style={{ height: 'clamp(40px, 6vw, 80px)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: 940, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="reveal" style={{ marginBottom: 36 }}>
            <Typer text="Before matter, before time," speed={50} startDelay={200} caret={false} />
            <br />
            <span className="serif-italic" style={{ color: 'var(--gold)' }}>
              <Typer text="there was only feeling." speed={60} startDelay={1300} caret={true} />
            </span>
          </h2>
          <p className="reveal" data-delay="1" style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 'none', margin: '0 auto 20px' }}>
            From the void came ten thousand souls, each shaped by emotion, sealed by cosmic law, and pulled toward evolution.
          </p>
          <p className="reveal" data-delay="2" style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 'none', margin: '0 auto' }}>
            Aethel is not just a collection. It is a world where holders discover what kind of soul they are becoming.
          </p>
        </div>
      </div>
    </section>
  );
}

function SoulsSupply() {
  const total = 10000;
  return (
    <section className="section" id="souls" data-screen-label="03 Souls">
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow reveal">Chapter I · Census of the Awakening</div>
          <h2 className="section-head__title reveal" data-delay="1">Ten thousand souls.<br /><span className="serif-italic" style={{ color: 'var(--gold)' }}>Two states of being.</span></h2>
          <p className="section-head__sub reveal" data-delay="2">
            Of the souls that crossed into matter, five thousand five hundred remain pure, carrying the original frequency of their lineage. Four thousand five hundred have been sealed, bound to one of four cosmic laws and pulled into evolution.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(28px, 4vw, 64px)' }}>
          {/* Pure souls block */}
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Pure Souls</div>
                <h3>The Origins</h3>
              </div>
              <Counter to={5500} />
            </div>
            <p style={{ color: 'var(--fg-3)', fontSize: 14, marginBottom: 28 }}>Souls that retained their original frequency. Unevolved, undivided, faithful to the first distinction of the void.</p>
            {LINEAGES.map((l, i) => (
              <div key={l.id} className={'c-' + l.id} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
                  <span style={{ color: 'var(--accent)' }}>{l.name}</span>
                  <span style={{ color: 'var(--fg-3)' }}>{l.count.toLocaleString()} · {l.pct}%</span>
                </div>
                <div className="supply-bar">
                  <div className="supply-bar__fill" style={{ width: (l.count / 1650 * 100) + '%', background: 'linear-gradient(90deg, transparent, var(--accent))', color: 'var(--accent)', transitionDelay: (i * 120) + 'ms' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Evolved souls block */}
          <div className="reveal" data-delay="2">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Evolved Souls</div>
                <h3>The Sealed</h3>
              </div>
              <Counter to={4500} />
            </div>
            <p style={{ color: 'var(--fg-3)', fontSize: 14, marginBottom: 28 }}>Souls bound to a cosmic seal. Each seal is a frequency stabiliser, dictating the law by which the soul will evolve through the long descent.</p>
            {SEALS.map((s, i) => (
              <div key={s.id} className={'c-' + s.id} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
                  <span style={{ color: 'var(--accent)' }}>{s.name}</span>
                  <span style={{ color: 'var(--fg-3)' }}>{s.count.toLocaleString()} · {s.pct}%</span>
                </div>
                <div className="supply-bar">
                  <div className="supply-bar__fill" style={{ width: (s.count / 2025 * 100) + '%', background: 'linear-gradient(90deg, transparent, var(--accent))', color: 'var(--accent)', transitionDelay: (i * 120) + 'ms' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(64px, 8vw, 96px)', borderTop: '1px solid var(--line)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--fg-3)' }} className="reveal">
          <span>Total Awakened · <span style={{ color: 'var(--gold)' }}>{total.toLocaleString()}</span></span>
          <span>Pure / Evolved · 55 / 45</span>
          <span>Sealed of the rarest law (BTC) · 225</span>
          <span>Aurelion Rex · <span style={{ color: 'var(--gold)' }}>22</span></span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, QuickExplanation, SoulsSupply });
