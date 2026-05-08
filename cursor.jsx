/* AETHEL — Custom cursor (pointer-fine only) */

function CustomCursor() {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const labelRef = React.useRef(null);
  const state = React.useRef({ x: 0, y: 0, rx: 0, ry: 0, hover: false, label: '' });

  React.useEffect(() => {
    // Skip on touch / coarse pointers
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.documentElement.classList.add('has-custom-cursor');

    const onMove = (e) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    let raf;
    const loop = () => {
      const s = state.current;
      s.rx += (s.x - s.rx) * 0.18;
      s.ry += (s.y - s.ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${s.rx}px, ${s.ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    const updateHover = (e) => {
      const t = e.target.closest('[data-cursor], a, button, .lineage-card, .seal-card, .echelon-row, .gallery__item, input, textarea, select, label');
      if (t) {
        const label = t.dataset.cursor || t.getAttribute('aria-label') || '';
        document.documentElement.classList.add('cursor-hover');
        if (labelRef.current && label) {
          labelRef.current.textContent = label;
          labelRef.current.classList.add('is-on');
        } else if (labelRef.current) {
          labelRef.current.classList.remove('is-on');
        }
      } else {
        document.documentElement.classList.remove('cursor-hover');
        if (labelRef.current) labelRef.current.classList.remove('is-on');
      }
    };

    const onDown = () => document.documentElement.classList.add('cursor-down');
    const onUp = () => document.documentElement.classList.remove('cursor-down');
    const onLeave = () => document.documentElement.classList.add('cursor-out');
    const onEnter = () => document.documentElement.classList.remove('cursor-out');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', updateHover);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', updateHover);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.documentElement.classList.remove('has-custom-cursor', 'cursor-hover', 'cursor-down', 'cursor-out');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-ring__label" />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

window.CustomCursor = CustomCursor;
