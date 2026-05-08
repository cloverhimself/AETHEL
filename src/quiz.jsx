import { useState, useEffect, useRef } from 'react';
import { LINEAGES, SEALS, ECHELONS } from './data';
import { LineageSigil, Typer } from './atoms';

const QUIZ_QUESTIONS = [
  {
    q: 'When the world demands a response, you tend to',
    a: [
      { t: 'Burn through it. Movement settles me.',                lin: 'ignaris',  seal: 'sol' },
      { t: 'Hold absolutely still until the pressure passes.',     lin: 'serenith', seal: 'btc' },
      { t: 'Find a way to keep going, no matter how small.',       lin: 'verdanix', seal: 'bnb' },
      { t: 'Sit with the weight of it before saying anything.',    lin: 'noctyra',  seal: 'eth' },
      { t: 'Take the long view and let the moment pass.',          lin: 'aurelion', seal: 'btc' },
    ],
  },
  {
    q: 'What unsettles you most',
    a: [
      { t: 'Being misread, especially when it is intentional.',    lin: 'ignaris',  seal: 'btc' },
      { t: 'Loud rooms and people who decide too quickly.',        lin: 'serenith', seal: 'eth' },
      { t: 'Endings I was not given a chance to refuse.',          lin: 'verdanix', seal: 'bnb' },
      { t: 'Pretending I do not see what I see.',                  lin: 'noctyra',  seal: 'eth' },
      { t: 'Disorder pretending it is freedom.',                   lin: 'aurelion', seal: 'bnb' },
    ],
  },
  {
    q: 'Pick the moment that feels most like you',
    a: [
      { t: 'A struck match in a long dark hallway.',               lin: 'ignaris',  seal: 'sol' },
      { t: 'A glass surface no one has touched yet.',              lin: 'serenith', seal: 'btc' },
      { t: 'A green shoot pushing through cracked stone.',         lin: 'verdanix', seal: 'sol' },
      { t: 'A single dark bell at the far end of a valley.',       lin: 'noctyra',  seal: 'btc' },
      { t: 'A library that has been kept lit for a thousand years.', lin: 'aurelion', seal: 'eth' },
    ],
  },
  {
    q: 'In a group, you are usually the one who',
    a: [
      { t: 'Says the thing nobody else will say first.',           lin: 'ignaris',  seal: 'bnb' },
      { t: 'Lowers the temperature when it gets too hot.',         lin: 'serenith', seal: 'bnb' },
      { t: 'Makes sure no one is quietly being left behind.',      lin: 'verdanix', seal: 'eth' },
      { t: 'Notices what everyone else is pretending not to see.', lin: 'noctyra',  seal: 'sol' },
      { t: 'Reminds everyone how the long arc actually works.',    lin: 'aurelion', seal: 'eth' },
    ],
  },
  {
    q: 'Your relationship to time is best described as',
    a: [
      { t: 'I want it to move. Stillness feels like decay.',       lin: 'ignaris',  seal: 'sol' },
      { t: 'I want it to pause. Speed feels like noise.',          lin: 'serenith', seal: 'btc' },
      { t: 'I want one more cycle. Always one more.',              lin: 'verdanix', seal: 'sol' },
      { t: 'It moves through me. I do not chase it.',              lin: 'noctyra',  seal: 'btc' },
      { t: 'I belong to it. It does not belong to me.',            lin: 'aurelion', seal: 'btc' },
    ],
  },
  {
    q: 'If a stranger could see one true thing about you, you would want it to be',
    a: [
      { t: 'That I am still capable of caring this much.',         lin: 'ignaris',  seal: 'bnb' },
      { t: 'That my calm is not absence. It is precision.',        lin: 'serenith', seal: 'eth' },
      { t: 'That I have already survived what they fear.',         lin: 'verdanix', seal: 'btc' },
      { t: 'That my silence is a form of attention.',              lin: 'noctyra',  seal: 'eth' },
      { t: 'That I have been here longer than the question.',      lin: 'aurelion', seal: 'btc' },
    ],
  },
];

function pickWinner(scores) {
  let best = null, max = -1;
  Object.entries(scores).forEach(([k, v]) => { if (v > max) { max = v; best = k; } });
  return best;
}

export default function FindYourSoul() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState(() => ({
    ignaris: 0, serenith: 0, verdanix: 0, noctyra: 0, aurelion: 0,
    bnb: 0, sol: 0, eth: 0, btc: 0,
  }));
  const [done, setDone] = useState(false);
  const [revealText, setRevealText] = useState(false);
  const overlayRef = useRef(null);
  const triggerRef = useRef(null);

  const reset = () => {
    setStep(0);
    setScores({ ignaris: 0, serenith: 0, verdanix: 0, noctyra: 0, aurelion: 0, bnb: 0, sol: 0, eth: 0, btc: 0 });
    setDone(false);
    setRevealText(false);
  };

  const choose = (a) => {
    const next = { ...scores };
    next[a.lin] += 2;
    next[a.seal] += 1;
    setScores(next);
    if (step + 1 < QUIZ_QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setDone(true);
      setTimeout(() => setRevealText(true), 1200);
    }
  };

  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus();
      return;
    }
    const overlay = overlayRef.current;
    if (!overlay) return;
    const focusable = () => Array.from(
      overlay.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.disabled);
    const first = focusable()[0];
    first?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key !== 'Tab') return;
      const els = focusable();
      if (!els.length) return;
      const last = els[els.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === els[0]) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); els[0].focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const lineageId = pickWinner({
    ignaris: scores.ignaris, serenith: scores.serenith, verdanix: scores.verdanix, noctyra: scores.noctyra, aurelion: scores.aurelion,
  });
  const sealId = pickWinner({ bnb: scores.bnb, sol: scores.sol, eth: scores.eth, btc: scores.btc });
  const lineage = LINEAGES.find(l => l.id === lineageId);
  const seal = SEALS.find(s => s.id === sealId);
  const echelon = (ECHELONS[lineageId]?.forms || []).find(f => f.seal.toLowerCase() === sealId);

  return (
    <>
      <div className="quiz-cta reveal">
        <div className="quiz-cta__inner">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>The Mirror Protocol</div>
            <h3 style={{ marginBottom: 14 }}>Find which soul recognises you.</h3>
            <p style={{ color: 'var(--fg-2)', maxWidth: '52ch' }}>
              Six questions. No registration. The system maps your answers to one of the twenty echelons and tells you which form of soul you most resemble. Take it as ritual, not as judgement.
            </p>
          </div>
          <button ref={triggerRef} className="btn btn--primary" onClick={() => { reset(); setOpen(true); }} data-cursor="BEGIN">
            Begin the Mirror
          </button>
        </div>
      </div>

      {open && (
        <div ref={overlayRef} className="quiz-overlay" role="dialog" aria-modal="true" aria-label="Find your soul">
          <button className="quiz-overlay__close" onClick={() => setOpen(false)} data-cursor="CLOSE">×</button>

          {!done && (
            <div className="quiz-stage">
              <div className="quiz-progress">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <span key={i} className={'quiz-progress__bar' + (i <= step ? ' is-on' : '')} />
                ))}
              </div>
              <div className="quiz-step-num">Question {String(step + 1).padStart(2, '0')} of {String(QUIZ_QUESTIONS.length).padStart(2, '0')}</div>
              <h2 className="quiz-question">{QUIZ_QUESTIONS[step].q}</h2>
              <div className="quiz-answers">
                {QUIZ_QUESTIONS[step].a.map((a, i) => (
                  <button
                    key={i}
                    className="quiz-answer"
                    onClick={() => choose(a)}
                    data-cursor="CHOOSE"
                    style={{ animationDelay: (i * 0.08) + 's' }}
                  >
                    <span className="quiz-answer__index">{String.fromCharCode(65 + i)}</span>
                    <span className="quiz-answer__text">{a.t}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {done && lineage && seal && echelon && (
            <div className={'quiz-result c-' + lineageId}>
              <div className={'quiz-result__halo' + (revealText ? ' is-on' : '')} />
              <div className="quiz-result__inner">
                <div className="eyebrow">A Soul Has Recognised You</div>
                <div className="quiz-result__sigil">
                  <svg viewBox="0 0 100 100" style={{ color: 'var(--accent)', width: 120, height: 120 }}>
                    <LineageSigil id={lineageId} />
                  </svg>
                </div>
                <h2 className="quiz-result__name" style={{ color: 'var(--accent)' }}>
                  {echelon.name}
                </h2>
                <div className="quiz-result__epithet">{echelon.epithet}</div>
                {revealText && (
                  <p className="quiz-result__lore">
                    <Typer text={echelon.lore} speed={26} startDelay={300} caret={true} />
                  </p>
                )}
                <div className="quiz-result__meta">
                  <div>
                    <span>Lineage</span>
                    <strong style={{ color: 'var(--accent)' }}>{lineage.name}</strong>
                    <em>{lineage.epithet}</em>
                  </div>
                  <div>
                    <span>Seal</span>
                    <strong style={{ color: 'var(--' + sealId + ')' }}>{seal.name}</strong>
                    <em>{seal.epithet}</em>
                  </div>
                  <div>
                    <span>Population</span>
                    <strong>{echelon.count}</strong>
                    <em>of 10,000 souls</em>
                  </div>
                </div>
                <div className="quiz-result__cta">
                  <button className="btn btn--primary" onClick={() => { reset(); }} data-cursor="AGAIN">Take it again</button>
                  <a className="btn btn--ghost" href="#echelons" onClick={() => setOpen(false)}>See all echelons</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
