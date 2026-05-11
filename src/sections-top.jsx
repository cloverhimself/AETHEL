import { useState, useEffect, useRef } from 'react';
import { LINEAGES, SEALS, TOTALS } from './data';
import { Counter, CosmicRing, Typer, SocialIcon } from './atoms';
import { heroImages, onLoad } from './assets';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);
  const close = () => setMenuOpen(false);
  return (
    <nav className={'nav' + (scrolled ? ' is-scrolled' : '') + (menuOpen ? ' is-open' : '')}>
      <a href="#top" className="nav__brand">AETHEL</a>
      <div className="nav__links">
        <a href="#identity" onClick={close}>Identity</a>
        <a href="#lineages" onClick={close}>Lineages</a>
        <a href="#seals" onClick={close}>Seals</a>
        <a href="#kings" onClick={close}>Kings</a>
        <a href="#chronicle" onClick={close}>Archive</a>
      </div>
      <div className="nav__right">
        <a href="#quiz" className="nav__cta">Discover ↗</a>
        <button
          className={'nav__burger' + (menuOpen ? ' is-open' : '')}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export function Hero() {
  const auraRef = useRef(null);
  const ringRef = useRef(null);
  const torchRef = useRef(null);

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
      <div className="hero__visual" aria-hidden="true">
        <img src={heroImages.ignaris} alt="" loading="eager" decoding="async" onLoad={onLoad} />
      </div>
      <div className="shell hero__content">
        <div className="hero__brand reveal">
          <Typer text="A DARK COSMIC UNIVERSE · 10,000 SOULS" speed={32} startDelay={400} caret={true} />
        </div>
        <h1 className="hero__title reveal" data-delay="1">AETHEL</h1>
        <div className="hero__sub reveal" data-delay="2">The Awakening of 10,000 Souls</div>
        <p className="hero__desc reveal" data-delay="3">
          A cosmic mythology of ten thousand souls. Identity before ownership. Atmosphere before explanation.
        </p>
        <div className="hero__cta reveal" data-delay="4">
          <a className="btn btn--primary" href="#quiz">Discover Your Soul</a>
          <a className="btn btn--ghost" href="#lineages">Enter the Lineages</a>
        </div>
        <div className="hero__socials reveal" data-delay="4">
          <span className="hero__socials-label">FOLLOW THE AWAKENING</span>
          <a href="https://x.com/AethelNFT" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="X"><SocialIcon kind="x" /></a>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span>SCROLL TO AWAKEN</span>
          <span className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}

export function QuickExplanation() {
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
            Aethel is not a collection. It is a world where those who enter discover what kind of soul they are becoming.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SoulsSupply() {
  const total = TOTALS.total;
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
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Pure Souls</div>
                <h3>The Origins</h3>
              </div>
              <Counter to={TOTALS.pure} />
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

          <div className="reveal" data-delay="2">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Evolved Souls</div>
                <h3>The Sealed</h3>
              </div>
              <Counter to={TOTALS.sealed} />
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
          <span>Sealed of the rarest law (BTC) · {TOTALS.btcSealed}</span>
          <span>Aurelion Rex · <span style={{ color: 'var(--gold)' }}>{TOTALS.kings}</span></span>
        </div>
      </div>
    </section>
  );
}
