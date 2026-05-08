import { useEffect, useRef, useState } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export function Counter({ to, duration = 1800, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const fired = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(eased * to));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref} className="counter">{prefix}{val.toLocaleString()}{suffix}</span>
  );
}

export function ParticleBg() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let raf, w, h, particles;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      const count = Math.min(140, Math.floor(window.innerWidth / 12));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 * dpr + 0.3 * dpr,
        vx: (Math.random() - 0.5) * 0.12 * dpr,
        vy: (Math.random() - 0.5) * 0.12 * dpr,
        a: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.15 ? 'gold' : (Math.random() < 0.3 ? 'violet' : 'white'),
      }));
    };

    const step = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.phase += p.twinkle;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        const alpha = p.a * (0.5 + 0.5 * Math.sin(p.phase));
        let col = `rgba(245, 236, 214, ${alpha})`;
        if (p.hue === 'gold')   col = `rgba(217, 184, 122, ${alpha})`;
        if (p.hue === 'violet') col = `rgba(180, 150, 230, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    };

    resize();
    step();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas id="particle-bg" ref={ref} aria-hidden="true" />;
}

export function LineageSigil({ id }) {
  const map = {
    ignaris: (
      <g>
        <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
      </g>
    ),
    serenith: (
      <g>
        <polygon points="50,8 88,30 88,70 50,92 12,70 12,30" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <polygon points="50,28 70,40 70,60 50,72 30,60 30,40" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </g>
    ),
    verdanix: (
      <g>
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M50 14 V86 M14 50 H86 M24 24 L76 76 M76 24 L24 76" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </g>
    ),
    noctyra: (
      <g>
        <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="22" fill="currentColor" opacity="0.18" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
      </g>
    ),
    aurelion: (
      <g>
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.2" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = 50 + Math.cos(a) * 30, y1 = 50 + Math.sin(a) * 30;
          const x2 = 50 + Math.cos(a) * 40, y2 = 50 + Math.sin(a) * 40;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
        })}
        <polygon points="50,28 60,50 50,72 40,50" fill="currentColor" opacity="0.6" />
      </g>
    ),
  };
  return (
    <svg viewBox="0 0 100 100" style={{ color: 'var(--accent)' }} className="lineage-card__sigil">
      {map[id]}
    </svg>
  );
}

export function SealSigil({ id }) {
  const map = {
    bnb: (
      <g>
        <polygon points="50,10 75,35 50,60 25,35" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="50,40 75,65 50,90 25,65" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
      </g>
    ),
    sol: (
      <g>
        <path d="M20 30 H75 L80 35 L75 40 H25 L20 35 Z" fill="currentColor" opacity="0.9" />
        <path d="M20 50 L25 45 H75 L80 50 L75 55 H25 Z" fill="currentColor" opacity="0.7" />
        <path d="M20 65 H75 L80 70 L75 75 H25 L20 70 Z" fill="currentColor" />
      </g>
    ),
    eth: (
      <g>
        <polygon points="50,8 80,52 50,68 20,52" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="50,8 80,52 50,42 20,52" fill="currentColor" opacity="0.4" />
        <polygon points="50,72 80,56 50,92 20,56" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>
    ),
    btc: (
      <g>
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="currentColor" opacity="0.08" />
        <text x="50" y="62" textAnchor="middle" fontFamily="'OCR A Extended', 'OCR-A', monospace" fontSize="32" fill="currentColor" fontWeight="600">B</text>
        <line x1="42" y1="22" x2="42" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="20" x2="50" y2="28" stroke="currentColor" strokeWidth="2" />
        <line x1="42" y1="70" x2="42" y2="78" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="72" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
      </g>
    ),
  };
  return (
    <svg viewBox="0 0 100 100" className="seal-card__sigil" style={{ color: 'var(--accent)' }}>
      {map[id]}
    </svg>
  );
}

export function CosmicRing() {
  return (
    <svg className="hero__sigil" viewBox="0 0 800 800" aria-hidden="true">
      <defs>
        <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(217,184,122,0)" />
          <stop offset="80%" stopColor="rgba(217,184,122,0.4)" />
          <stop offset="100%" stopColor="rgba(217,184,122,0)" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="380" fill="none" stroke="url(#ringGlow)" strokeWidth="1" />
      <circle cx="400" cy="400" r="320" fill="none" stroke="rgba(217,184,122,0.15)" strokeWidth="0.5" strokeDasharray="2 8" />
      <circle cx="400" cy="400" r="260" fill="none" stroke="rgba(180,150,230,0.18)" strokeWidth="0.5" />
      <circle cx="400" cy="400" r="200" fill="none" stroke="rgba(217,184,122,0.2)" strokeWidth="0.5" strokeDasharray="1 4" />
      {Array.from({ length: 22 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 22;
        const r = 380;
        const x = 400 + Math.cos(a) * r, y = 400 + Math.sin(a) * r;
        return <circle key={i} cx={x} cy={y} r="2" fill="rgba(217,184,122,0.6)" />;
      })}
      <g stroke="rgba(245,236,214,0.25)" strokeWidth="0.5" fill="none">
        <line x1="20" y1="400" x2="780" y2="400" />
        <line x1="400" y1="20" x2="400" y2="780" />
      </g>
    </svg>
  );
}

export function CrownSigil() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <linearGradient id="crownGold" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f5ecd6" />
          <stop offset="60%" stopColor="#d9b87a" />
          <stop offset="100%" stopColor="#6b5226" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke="url(#crownGold)" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(217,184,122,0.4)" strokeWidth="0.4" strokeDasharray="2 6" />
      {Array.from({ length: 22 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 22 - Math.PI / 2;
        const x1 = 100 + Math.cos(a) * 76, y1 = 100 + Math.sin(a) * 76;
        const x2 = 100 + Math.cos(a) * 92, y2 = 100 + Math.sin(a) * 92;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#crownGold)" strokeWidth="0.8" />;
      })}
      <polygon points="100,38 120,86 100,76 80,86" fill="url(#crownGold)" />
      <polygon points="100,50 110,80 100,74 90,80" fill="rgba(0,0,0,0.3)" />
      <text x="100" y="130" textAnchor="middle" fontFamily="'OCR A Extended', 'OCR-A', monospace" fontSize="32" fontWeight="600" fill="url(#crownGold)" letterSpacing="4">XXII</text>
    </svg>
  );
}

export function Typer({ text, speed = 38, startDelay = 200, className, caret = true, onDone }) {
  const ref = useRef(null);
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);
  const fired = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          let i = 0;
          const start = () => {
            const tick = () => {
              i++;
              setOut(text.slice(0, i));
              if (i < text.length) {
                setTimeout(tick, speed + (Math.random() * 30 - 15));
              } else {
                setDone(true);
                onDone && onDone();
              }
            };
            tick();
          };
          setTimeout(start, startDelay);
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <span ref={ref} className={className}>
      {out}
      {caret && !done && <span className="typer-caret" aria-hidden="true">▍</span>}
    </span>
  );
}

export function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (bar) bar.style.transform = `scaleX(${pct})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div id="scroll-progress" />;
}

export function useParallax(ref, factor = 0.3) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      ref.current.style.transform = `translate(-50%, calc(-50% + ${center * -factor}px))`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

export function SocialIcon({ kind }) {
  const paths = {
    x: 'M14.2 10.6 22.5 1h-2L13.4 9.3 7.7 1H1l8.7 12.7L1 23h2l7.6-8.8 6 8.8h6.7l-9-13.4Zm-2.7 3.1-.9-1.3L3.7 2.5h3.1l5.7 8.2.9 1.3 7.4 10.6h-3.1l-6.1-8.7Z',
    tg: 'M22.4 4.4 2.7 12.1c-.9.4-.9 1 0 1.3l5 1.6 1.9 5.8c.2.6.5.7 1 .4l3.1-2.4 5 3.7c.9.5 1.6.2 1.8-.8L24 5.4c.3-1.2-.4-1.7-1.6-1ZM10 17l-.5-3.4 9.6-8.7L10 17Z',
    dc: 'M20.3 4.4A19.6 19.6 0 0 0 15.5 3l-.2.4c1.7.4 3.1 1 4.5 1.9a17 17 0 0 0-15.6 0c1.4-.9 2.8-1.5 4.5-1.9L8.5 3a19 19 0 0 0-4.8 1.4C.7 9 0 13.4.3 17.7a19.7 19.7 0 0 0 6 3l1.2-1.6a13 13 0 0 1-2-1c.2-.1.3-.2.4-.4 3.9 1.8 8.1 1.8 11.9 0l.5.3-2 1.1 1.2 1.6a19.7 19.7 0 0 0 6-3c.5-5-.7-9.4-3.2-13.3ZM8.6 15.4c-1.2 0-2.1-1.1-2.1-2.4 0-1.3.9-2.4 2.1-2.4 1.2 0 2.2 1 2.1 2.4 0 1.3-.9 2.4-2.1 2.4Zm6.8 0c-1.1 0-2.1-1.1-2.1-2.4 0-1.3 1-2.4 2.1-2.4 1.2 0 2.2 1 2.1 2.4 0 1.3-.9 2.4-2.1 2.4Z',
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}
