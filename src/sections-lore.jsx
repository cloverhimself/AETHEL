import { useState, useEffect, useRef } from 'react';
import { LINEAGES, SEALS, RUPTURE } from './data';
import { SealSigil } from './atoms';
import { lineageImages } from './assets';

export function LineagesSection() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const autoplay = useRef(null);

  const goTo = (i) => {
    const idx = (i + LINEAGES.length) % LINEAGES.length;
    setActive(idx);
    const track = trackRef.current;
    if (track) {
      const card = track.children[idx];
      if (card) {
        const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
        track.scrollTo({ left, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    autoplay.current = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % LINEAGES.length;
        const track = trackRef.current;
        if (track) {
          const card = track.children[next];
          if (card) {
            const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
            track.scrollTo({ left, behavior: 'smooth' });
          }
        }
        return next;
      });
    }, 5200);
    return () => clearInterval(autoplay.current);
  }, []);

  const pause = () => clearInterval(autoplay.current);
  const resume = () => {
    pause();
    autoplay.current = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % LINEAGES.length;
        const track = trackRef.current;
        if (track) {
          const card = track.children[next];
          if (card) {
            const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
            track.scrollTo({ left, behavior: 'smooth' });
          }
        }
        return next;
      });
    }, 5200);
  };

  return (
    <section className="section" id="lineages" data-screen-label="04 Lineages">
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow reveal">Chapter II · The Five Origins</div>
          <h2 className="section-head__title reveal" data-delay="1">Five lineages of the<br /><span className="serif-italic" style={{ color: 'var(--gold)' }}>first frequency.</span></h2>
          <p className="section-head__sub reveal" data-delay="2">
            Each lineage is a position of the soul, not a faction. A way of refusing the silence, holding the cold, surviving extinction, carrying the weight, or ordering the rest.
          </p>
        </div>

        <div className="carousel reveal" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="carousel__track" ref={trackRef}>
            {LINEAGES.map((l, i) => (
              <article
                key={l.id}
                className={'glass lineage-card c-' + l.id + (active === i ? ' is-active' : '')}
                onClick={() => goTo(i)}
              >
                <div className="lineage-card__glow" />
                <div className="lineage-card__visual">
                  <img src={lineageImages[l.id]} alt={l.name} className="lineage-card__img" loading="lazy" decoding="async" onLoad={(e) => e.currentTarget.classList.add('is-loaded')} />
                </div>
                <div className="lineage-card__name">{l.name}</div>
                <div className="lineage-card__epithet">{l.epithet}</div>
                <p className="lineage-card__body">{l.body}</p>
                <div className="lineage-card__foot">
                  <span>{l.count.toLocaleString()} pure souls</span>
                  <span className="lineage-card__count">{l.pct}%</span>
                </div>
              </article>
            ))}
          </div>

          <div className="carousel__controls">
            <button className="carousel__btn" onClick={() => goTo(active - 1)} aria-label="Previous lineage">←</button>
            <div className="carousel__dots" role="tablist">
              {LINEAGES.map((l, i) => (
                <button
                  key={l.id}
                  className={'carousel__dot c-' + l.id + (active === i ? ' is-active' : '')}
                  onClick={() => goTo(i)}
                  aria-label={l.name}
                  aria-selected={active === i}
                >
                  <span className="carousel__dot-label">{l.name}</span>
                </button>
              ))}
            </div>
            <button className="carousel__btn" onClick={() => goTo(active + 1)} aria-label="Next lineage">→</button>
          </div>
        </div>

        <div className="lineage-marquee reveal" aria-hidden="true">
          <div className="lineage-marquee__track">
            {[...LINEAGES, ...LINEAGES, ...LINEAGES].map((l, i) => (
              <span key={i} className={'c-' + l.id} style={{ color: 'var(--accent)' }}>
                {l.name} <span style={{ color: 'var(--fg-4)' }}>· {l.epithet} ·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RuptureSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" id="rupture" data-screen-label="05 Rupture">
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow reveal">Chapter II · The Great Rupture</div>
          <h2 className="section-head__title reveal" data-delay="1">From silence to matter.<br /><span className="serif-italic" style={{ color: 'var(--gold)' }}>From feeling to form.</span></h2>
          <p className="section-head__sub reveal" data-delay="2">
            The descent of the ten thousand, in six movements. Each movement is a moment the universe became more specific, and the souls became more forgetful.
          </p>
        </div>

        <div className="rupture">
          {RUPTURE.map((r, i) => (
            <div key={i} className="rupture__step reveal" data-delay={(i % 4)}>
              <div className="rupture__dot" style={{ background: i === 5 ? 'var(--noctyra)' : 'var(--gold)' }} />
              <div className="rupture__num">Movement {String(i + 1).padStart(2, '0')}</div>
              <div className="rupture__title">{r.title}</div>
              <p className="rupture__body">{r.body}</p>
              <button className="rupture__expand" onClick={() => setOpen(open === i ? null : i)}>
                {open === i ? '— Close passage' : '+ Read deeper passage'}
              </button>
              {open === i && (
                <div className="rupture__expand-body">{r.deep}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SealsSection() {
  return (
    <section className="section" id="seals" data-screen-label="06 Seals">
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow reveal">Chapter III · The Cosmic Operating Systems</div>
          <h2 className="section-head__title reveal" data-delay="1">Four seals.<br /><span className="serif-italic" style={{ color: 'var(--gold)' }}>Four laws of becoming.</span></h2>
          <p className="section-head__sub reveal" data-delay="2">
            A seal is not ownership. It is a frequency stabiliser, the law a soul must obey to keep its shape across the descent. Each seal evolves the soul that bears it, and rarer seals carry harder laws.
          </p>
        </div>

        <div className="seal-grid reveal">
          {SEALS.map((s) => (
            <article key={s.id} className={'seal-card c-' + s.id}>
              <div className="seal-card__radar" />
              <div className="seal-card__chip">{s.name}</div>
              <SealSigil id={s.id} />
              <div className="seal-card__name">{s.epithet.split(' ').slice(0, 2).join(' ')}</div>
              <div className="seal-card__epithet">{s.epithet}</div>
              <p className="seal-card__body">{s.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
                <span>{s.count.toLocaleString()} sealed</span>
                <span style={{ color: 'var(--accent)' }}>{s.pct}% of supply</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
