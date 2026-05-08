import { useState } from 'react';
import { LINEAGES, ECHELONS, KINGS_LAWS } from './data';
import { CrownSigil } from './atoms';

export function EchelonsSection() {
  const [active, setActive] = useState('ignaris');
  const [open, setOpen] = useState(null);
  const data = ECHELONS[active];
  return (
    <section className="section" id="echelons" data-screen-label="07 Echelons">
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow reveal">Chapter IV · Lineages and Echelons</div>
          <h2 className="section-head__title reveal" data-delay="1">When seal meets lineage,<br /><span className="serif-italic" style={{ color: 'var(--gold)' }}>a new form is born.</span></h2>
          <p className="section-head__sub reveal" data-delay="2">
            Each pure lineage, when bound to one of the four seals, evolves into a distinct echelon. Twenty forms, each one a specific answer to the question of how a soul might survive becoming visible.
          </p>
        </div>

        <div className={'echelons c-' + active}>
          <div className="echelons__tabs" role="tablist">
            {LINEAGES.map((l) => (
              <button
                key={l.id}
                role="tab"
                aria-selected={active === l.id}
                className={'echelons__tab' + (active === l.id ? ' is-active' : '') + ' c-' + l.id}
                onClick={() => { setActive(l.id); setOpen(null); }}
                style={active === l.id ? { color: 'var(--' + l.id + ')' } : {}}
              >
                {l.name}
              </button>
            ))}
          </div>
          <div className="echelons__panel">
            <div className="echelons__intro">
              <div className="eyebrow" style={{ marginBottom: 14 }}>{LINEAGES.find(l => l.id === active).name} Echelons</div>
              <h3>{LINEAGES.find(l => l.id === active).epithet}</h3>
              <p style={{ marginTop: 18 }}>{data.intro}</p>
              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
                <span>Pure souls · {LINEAGES.find(l => l.id === active).count.toLocaleString()}</span>
                <span>Sealed forms · 4</span>
                <span style={{ color: 'var(--accent)' }}>Total evolutions · {data.forms.reduce((a, b) => a + b.count, 0).toLocaleString()}</span>
              </div>
            </div>
            <div className="echelon-rows">
              {data.forms.map((f, i) => (
                <div key={i} className="echelon-row" onClick={() => setOpen(open === i ? null : i)} style={{ '--seal': 'var(--' + f.seal.toLowerCase() + ')' }}>
                  <div className="echelon-row__seal" style={{ color: 'var(--' + f.seal.toLowerCase() + ')' }}>{f.seal}</div>
                  <div>
                    <div className="echelon-row__name">{f.name}</div>
                    <div className="echelon-row__epithet">{f.epithet}</div>
                    {open === i && (
                      <div style={{ marginTop: 14, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.7, maxWidth: '60ch', borderTop: '1px dashed var(--line)', paddingTop: 14 }}>
                        {f.lore}
                      </div>
                    )}
                  </div>
                  <div className="echelon-row__count">{f.count} · {open === i ? '−' : '+'}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function KingsSection() {
  return (
    <section className="kings" id="kings" data-screen-label="08 Kings">
      <div className="kings__rays" aria-hidden="true" />
      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold-soft)', marginBottom: 24 }}>
          Chapter V · Aurelion Rex
        </div>

        <div className="kings__crown reveal" data-delay="1">
          <CrownSigil />
        </div>

        <h2 className="kings__title reveal" data-delay="1">The Twenty-Two<br /><span className="serif-italic">Ancient Kings</span></h2>

        <div className="kings__sub reveal" data-delay="2">
          When Aurelion, the ancient lineage of time, collided with BTC, the seal of immutable authority, it did not create a rank. It created a law.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }} className="reveal" data-delay="3">
          <a className="btn btn--primary" href="#enter">Enter the Court</a>
          <a className="btn btn--ghost" href="#echelons">Read the Lineage</a>
        </div>

        <div className="kings__laws">
          {KINGS_LAWS.map((law, i) => (
            <div key={i} className="kings__law reveal" data-delay={(i % 4)}>
              <div className="kings__law-num">Law {law.num}</div>
              <div className="kings__law-text">{law.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IdentitySection() {
  return (
    <section className="section" id="identity" data-screen-label="09 Identity">
      <div className="shell">
        <div className="identity">
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 24 }}>Chapter VI · The Inner Layer</div>
            <h2 style={{ marginBottom: 28 }}>You do not choose a soul.<br /><span className="serif-italic" style={{ color: 'var(--gold)' }}>You recognise one.</span></h2>
            <p style={{ fontSize: 17, marginBottom: 22 }}>
              Aethel is built around psychological attachment. The goal is not for people to simply own an NFT, but to slowly recognise themselves in a soul type, a path, or an evolution.
            </p>
            <p style={{ fontSize: 17, marginBottom: 36 }}>
              Through lore, visuals, language, behaviour, and community interaction, each person begins to discover where they naturally belong inside the system. The world is not a marketplace of pictures. It is a slow mirror.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
              {[
                { label: 'Identity', text: 'A soul type that fits the temperature of how you actually move through the world.' },
                { label: 'Lore', text: 'A long unfolding text you can read at the speed of your own attention.' },
                { label: 'Evolution', text: 'A path that changes shape as your understanding of yourself changes.' },
                { label: 'Recognition', text: 'A moment when the system stops feeling external and starts feeling familiar.' },
              ].map((t, i) => (
                <div key={i} style={{ background: 'var(--void)', padding: '22px 20px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--gold-soft)', marginBottom: 10 }}>{t.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }}>{t.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="identity__visual reveal" data-delay="2">
            <div className="identity__visual-inner" />
            <div className="identity__visual-aura" />
            <svg viewBox="0 0 400 500" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7 }}>
              <defs>
                <radialGradient id="figureGlow" cx="50%" cy="55%" r="40%">
                  <stop offset="0%" stopColor="rgba(245,236,214,0.4)" />
                  <stop offset="50%" stopColor="rgba(180,150,230,0.18)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
              </defs>
              <ellipse cx="200" cy="280" rx="120" ry="180" fill="url(#figureGlow)" />
              <circle cx="200" cy="180" r="56" fill="rgba(245,236,214,0.12)" stroke="rgba(217,184,122,0.4)" strokeWidth="0.6" />
              <path d="M120 250 Q200 240 280 250 L300 460 L100 460 Z" fill="rgba(0,0,0,0.4)" stroke="rgba(217,184,122,0.3)" strokeWidth="0.5" />
              <circle cx="200" cy="180" r="80" fill="none" stroke="rgba(217,184,122,0.2)" strokeWidth="0.4" strokeDasharray="2 6" />
              <circle cx="200" cy="180" r="100" fill="none" stroke="rgba(217,184,122,0.12)" strokeWidth="0.4" />
            </svg>
            <div className="identity__placeholder">Figure · Soul portrait reference</div>
          </div>
        </div>
      </div>
    </section>
  );
}
