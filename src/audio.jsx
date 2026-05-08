import { useState, useRef, useEffect } from 'react';

export default function AmbientAudio() {
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  const start = async () => {
    if (ctxRef.current) {
      ctxRef.current.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0;
    master.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 3.5);
    master.connect(ctx.destination);

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1100;
    lp.Q.value = 0.6;
    lp.connect(master);

    const delay = ctx.createDelay(2.5);
    delay.delayTime.value = 0.55;
    const fb = ctx.createGain();
    fb.gain.value = 0.42;
    delay.connect(fb).connect(delay);
    delay.connect(lp);
    const dryWet = ctx.createGain();
    dryWet.gain.value = 0.35;
    dryWet.connect(delay);

    const baseFreqs = [55, 82.4, 110, 130.8, 164.8];
    const oscs = [];
    baseFreqs.forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i === 0 ? 'sine' : (i % 2 === 0 ? 'sine' : 'triangle');
      o.frequency.value = f;

      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.06 + Math.random() * 0.08;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 4 + Math.random() * 6;
      lfo.connect(lfoGain).connect(o.detune);

      const g = ctx.createGain();
      g.gain.value = 0;
      const target = 0.16 / baseFreqs.length * (i === 0 ? 2.4 : 1);
      g.gain.linearRampToValueAtTime(target, ctx.currentTime + 4 + i * 0.6);

      const trem = ctx.createOscillator();
      trem.frequency.value = 0.12 + Math.random() * 0.18;
      const tremGain = ctx.createGain();
      tremGain.gain.value = target * 0.35;
      trem.connect(tremGain).connect(g.gain);

      o.connect(g);
      g.connect(lp);
      g.connect(dryWet);

      o.start();
      lfo.start();
      trem.start();
      oscs.push({ o, lfo, trem, g });
    });

    const bellTick = () => {
      if (!ctxRef.current) return;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      const freqs = [440, 523, 659, 783];
      o.type = 'sine';
      o.frequency.value = freqs[Math.floor(Math.random() * freqs.length)] * (Math.random() < 0.4 ? 2 : 1);
      g.gain.value = 0;
      g.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.2);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.5);
      o.connect(g).connect(dryWet);
      o.start();
      o.stop(ctx.currentTime + 4.6);
      setTimeout(bellTick, 6000 + Math.random() * 14000);
    };
    setTimeout(bellTick, 5000);

    nodesRef.current = { master, oscs, lp, delay };
  };

  const stop = () => {
    const ctx = ctxRef.current;
    if (!ctx || !nodesRef.current) return;
    const { master } = nodesRef.current;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    setTimeout(() => { ctx.suspend(); }, 1500);
  };

  const toggle = () => {
    if (on) {
      stop();
      setOn(false);
    } else {
      start();
      setOn(true);
    }
  };

  if (!mounted) return null;

  return (
    <button
      className={'audio-toggle' + (on ? ' is-on' : '')}
      onClick={toggle}
      aria-label={on ? 'Mute ambient' : 'Play ambient'}
      data-cursor={on ? 'MUTE' : 'PLAY AMBIENT'}
    >
      <span className="audio-toggle__bars">
        {[0, 1, 2, 3].map(i => <span key={i} style={{ animationDelay: (i * 0.18) + 's' }} />)}
      </span>
      <span className="audio-toggle__label">{on ? 'AMBIENT · ON' : 'AMBIENT · OFF'}</span>
    </button>
  );
}
