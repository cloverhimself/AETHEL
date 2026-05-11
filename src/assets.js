import imgIgnaris from '../Assets/IGNARIS.webp';
import imgSerenith from '../Assets/serenith.webp';
import imgVerdanix from '../Assets/VERDANIX.webp';
import imgNoctyra from '../Assets/NOCTYRA.webp';
import imgAurelion from '../Assets/AURELION.webp';

import heroIgnaris  from '../Assets/hero-ignaris.webp';
import heroAurelion from '../Assets/hero-aurelion.webp';
import heroNoctyra  from '../Assets/hero-noctyra.webp';
import heroVerdanix from '../Assets/hero-verdanix.webp';
import heroSerenith from '../Assets/hero-serenith.webp';

import bustIgnaris   from '../Assets/bust-ignaris.webp';
import bustSerenith  from '../Assets/bust-serenith.webp';
import bustVerdanix  from '../Assets/bust-verdanix.webp';
import bustNoctyra   from '../Assets/bust-noctyra.webp';
import bustAurelion  from '../Assets/bust-aurelion.webp';

import kingFinalReveal from '../Assets/king-final-reveal.webp';
import kingScale1      from '../Assets/king-scale-1.webp';
import kingCloseup1    from '../Assets/king-closeup-1.webp';
import kingThrone1     from '../Assets/king-throne-1.webp';
import kingManVisual   from '../Assets/king-man.webp';
import aurelionRexKings from '../Assets/cinematic-aurelion-rex.webp';

import sealBnb from '../Assets/seal-bnb.webp';
import sealSol from '../Assets/seal-sol.webp';
import sealEth from '../Assets/seal-eth.webp';
import sealBtc from '../Assets/seal-btc.webp';

import mayaStudioLogo from '../Assets/maya-logo.webp';

import bgVoid1 from '../Assets/bg-void-1.webp';
import bgVoid2 from '../Assets/bg-void-2.webp';

const onLoad = (e) => e.currentTarget.classList.add('is-loaded');

export const lineageImages = {
  ignaris:  imgIgnaris,
  serenith: imgSerenith,
  verdanix: imgVerdanix,
  noctyra:  imgNoctyra,
  aurelion: imgAurelion,
};

export const heroImages = {
  ignaris:  heroIgnaris,
  aurelion: heroAurelion,
  noctyra:  heroNoctyra,
  verdanix: heroVerdanix,
  serenith: heroSerenith,
};

export const bustImages = {
  ignaris:  bustIgnaris,
  serenith: bustSerenith,
  verdanix: bustVerdanix,
  noctyra:  bustNoctyra,
  aurelion: bustAurelion,
};

export const kingImages = {
  finalReveal: kingFinalReveal,
  scale1:      kingScale1,
  closeup1:    kingCloseup1,
  throne1:     kingThrone1,
  manVisual:   kingManVisual,
  aurelionRex: aurelionRexKings,
};

export const sealImages = {
  bnb: sealBnb,
  sol: sealSol,
  eth: sealEth,
  btc: sealBtc,
};

export const mayaLogo = mayaStudioLogo;

export const bgImages = {
  void1: bgVoid1,
  void2: bgVoid2,
};

export { onLoad };
