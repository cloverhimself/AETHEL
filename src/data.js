export const LINEAGES = [
  {
    id: 'ignaris',
    name: 'Ignaris',
    epithet: 'The Bleeding of the Void',
    body: 'Rage, fire, destruction, intensity. The refusal to stay cold. Ignaris burns because something inside it cannot accept the silence of matter.',
    count: 1650,
    pct: 16.5,
  },
  {
    id: 'serenith',
    name: 'Serenith',
    epithet: 'The Absolute Zero',
    body: 'Stillness, calm, stasis, control. The force that freezes reaction itself. Serenith does not respond to the world. It dictates the temperature at which the world responds.',
    count: 1375,
    pct: 13.75,
  },
  {
    id: 'verdanix',
    name: 'Verdanix',
    epithet: 'The Denial of Extinction',
    body: 'Survival, rebirth, stubborn hope. The refusal to disappear. Verdanix is what remains when everything else has been told to end and chooses to keep going anyway.',
    count: 1100,
    pct: 11,
  },
  {
    id: 'noctyra',
    name: 'Noctyra',
    epithet: 'The Collapse of the Void',
    body: 'Melancholy, silence, burden, depth, truth. Noctyra carries the gravity of existence. It is the soul that has seen too clearly to be loud about it.',
    count: 825,
    pct: 8.25,
  },
  {
    id: 'aurelion',
    name: 'Aurelion',
    epithet: 'The Architects of Time',
    body: 'Ancient wisdom, endurance, time, order. The foundation of reality. Aurelion does not move with the world. The world moves through Aurelion.',
    count: 550,
    pct: 5.5,
  },
];

export const SEALS = [
  {
    id: 'bnb',
    name: 'BNB Seal',
    epithet: 'The Vanguards of Order',
    body: 'Structure, protection, stability. The force that keeps reality from collapsing inward when entropy presses against the gates.',
    count: 2025,
    pct: 20.25,
  },
  {
    id: 'sol',
    name: 'SOL Seal',
    epithet: 'The Current of Time',
    body: 'Velocity, resurgence, motion. The energy that bends time forward when stillness threatens to swallow the moment.',
    count: 1350,
    pct: 13.5,
  },
  {
    id: 'eth',
    name: 'ETH Seal',
    epithet: "The Architect's Mind",
    body: 'Intelligence, vision, design. The cosmic code, the smart contracts of reality, the logic by which possibility resolves into form.',
    count: 900,
    pct: 9,
  },
  {
    id: 'btc',
    name: 'BTC Seal',
    epithet: 'The Absolute Authority',
    body: 'Immutable truth, rarity, power, genesis. The authority reality must obey. What is sealed in BTC cannot be revised.',
    count: 225,
    pct: 2.25,
  },
];

export const RUPTURE = [
  {
    title: 'Before Time',
    body: 'Before matter, before time, before the first law of reality, there was only feeling. A vast undivided frequency, awake without object, present without place.',
    deep: 'No motion existed because there was nothing yet to move. No distance existed because there was nothing yet to be apart. The void was not empty. It was full of an attention that had not yet learned to look at itself.',
  },
  {
    title: 'The First Frequency',
    body: 'A tremor passed through the silence. Not a sound, not a thought, but the first distinction. From that distinction, ten thousand frequencies separated from the whole and remembered themselves as souls.',
    deep: 'Each frequency carried a different temperature, a different gravity, a different refusal. These differences would later be called lineages, but at the first moment they were simply the shapes that feeling took when it became aware that it was singular.',
  },
  {
    title: 'The Origins',
    body: 'Five lineages crystallised from the first frequencies. Ignaris that would not stay cold. Serenith that would not be moved. Verdanix that would not disappear. Noctyra that carried the weight. Aurelion that ordered the rest.',
    deep: 'These were not factions. They were positions of the soul, each one an answer to the same impossible question: what does it mean to be, when nothing yet requires you to be anything in particular.',
  },
  {
    title: 'The Fall Into Matter',
    body: 'The frequencies thickened. What had been pure feeling became pulled, slowed, and shaped by the laws that were beginning to crystallise around them. The descent was not punishment. It was the cost of becoming visible.',
    deep: 'Matter is feeling that has agreed to take a form. Form is feeling that has agreed to be observed. The 10,000 souls accepted both, and in accepting them, they accepted forgetting.',
  },
  {
    title: 'Entropic Attenuation',
    body: 'Once inside matter, the souls began to dim. Their original signature, the temperature of the first frequency, started to fade against the friction of becoming small enough to live inside a single point in space.',
    deep: 'This is the wound at the centre of the project. Not death. Forgetting. A soul that no longer remembers what it was vibrating at the moment it was first distinguished from the silence.',
  },
  {
    title: 'The Great Sealing',
    body: 'To preserve what could be preserved, four cosmic seals were placed across the souls. BNB held order. SOL carried motion. ETH wrote the laws. BTC fixed the truth. The sealed souls would evolve. The unsealed would remain pure.',
    deep: 'A seal is not a cage. It is a frequency stabiliser. It tells a soul which law it must obey if it wishes to keep its shape across the long descent. To be sealed is to become specific. To remain unsealed is to remain original.',
  },
];

export const ECHELONS = {
  ignaris: {
    intro: 'Ignaris under seal does not become quieter. It becomes more intentional. The fire chooses what it burns.',
    forms: [
      { seal: 'BNB', name: 'Ignaris Dominus', epithet: 'The Forged Sovereign', count: 608, lore: 'Order applied to fire produces command. Dominus does not rage. It commands the rage of others.' },
      { seal: 'SOL', name: 'Ignaris Velocity', epithet: 'The Forward Burn', count: 405, lore: 'Fire that has been told to move forward becomes momentum that nothing in front of it can refuse.' },
      { seal: 'ETH', name: 'Ignaris Mindfire', epithet: 'The Calculating Flame', count: 270, lore: 'Fire under design. Heat that knows the precise temperature at which a thing finally yields.' },
      { seal: 'BTC', name: 'Ignaris Rex', epithet: 'The Crowned Ember', count: 67, lore: 'Fire fixed by absolute authority. The first burn made permanent.' },
    ],
  },
  serenith: {
    intro: 'Serenith under seal does not warm. It refines the precision of its stillness until even time begins to hesitate around it.',
    forms: [
      { seal: 'BNB', name: 'Serenith Dominus', epithet: 'The Glacial Throne', count: 506, lore: 'Stillness given structure. Cold that holds the shape of a court.' },
      { seal: 'SOL', name: 'Serenith Velocity', epithet: 'The Moving Pause', count: 337, lore: 'A paradox stabilised. Motion that arrives without ever appearing to begin.' },
      { seal: 'ETH', name: 'Serenith Mindfrost', epithet: 'The Designed Stillness', count: 225, lore: 'Cold engineered into law. The exact temperature at which thought becomes inevitable.' },
      { seal: 'BTC', name: 'Serenith Rex', epithet: 'The Sovereign Zero', count: 56, lore: 'Absolute stillness made authority. The cold that all warmer things must measure themselves against.' },
    ],
  },
  verdanix: {
    intro: 'Verdanix under seal does not soften. It learns the exact form its survival must take to keep going for one more cycle.',
    forms: [
      { seal: 'BNB', name: 'Verdanix Dominus', epithet: 'The Rooted Sovereign', count: 405, lore: 'Survival ordered into shelter. The strength that keeps everyone else from being erased.' },
      { seal: 'SOL', name: 'Verdanix Velocity', epithet: 'The Returning Wave', count: 270, lore: 'Survival in motion. The instinct that finds new ground before the old ground has finished collapsing.' },
      { seal: 'ETH', name: 'Verdanix Mindgrowth', epithet: 'The Patient Architect', count: 180, lore: 'Survival as design. A blueprint that anticipates the next extinction and quietly outlives it.' },
      { seal: 'BTC', name: 'Verdanix Rex', epithet: 'The Eternal Bloom', count: 45, lore: 'Survival fixed by authority. A life that the universe is no longer permitted to revoke.' },
    ],
  },
  noctyra: {
    intro: 'Noctyra under seal does not lift. It carries its weight more deliberately, and the weight begins to shape everything around it.',
    forms: [
      { seal: 'BNB', name: 'Noctyra Dominus', epithet: 'The Burdened Crown', count: 304, lore: 'Gravity ordered into governance. The depth that others orbit without quite knowing why.' },
      { seal: 'SOL', name: 'Noctyra Velocity', epithet: 'The Falling Comet', count: 202, lore: 'Gravity in motion. A descent that arrives so quickly the surface forgets it ever resisted.' },
      { seal: 'ETH', name: 'Noctyra Mindvoid', epithet: 'The Designed Silence', count: 135, lore: 'Gravity as architecture. The empty space that holds the rest of the structure together.' },
      { seal: 'BTC', name: 'Noctyra Rex', epithet: 'The Sovereign Collapse', count: 34, lore: 'Gravity fixed by authority. The point past which return is no longer offered.' },
    ],
  },
  aurelion: {
    intro: 'Aurelion under seal does not change. It is the seal that changes around Aurelion, learning what authority looks like when it is older than authority.',
    forms: [
      { seal: 'BNB', name: 'Aurelion Dominus', epithet: 'The First Magistrate', count: 202, lore: 'Time ordered into law. The original courts of the cosmos, where the first verdicts were spoken.' },
      { seal: 'SOL', name: 'Aurelion Velocity', epithet: 'The Quickening Hour', count: 135, lore: 'Time given motion. The moment when history accelerates and a small decision becomes an age.' },
      { seal: 'ETH', name: 'Aurelion Mindclock', epithet: 'The Designing Age', count: 90, lore: 'Time as design. The architecture of the long unfolding, mapped by the only lineage that remembers it whole.' },
      { seal: 'BTC', name: 'Aurelion Rex', epithet: 'The Twenty-Two Ancient Kings', count: 22, lore: 'Time fixed by absolute authority. The rarest and most powerful beings in the Aethel universe. One does not simply possess a King. One becomes its envoy.' },
    ],
  },
};

export const TOTALS = {
  pure:   LINEAGES.reduce((s, l) => s + l.count, 0),
  sealed: SEALS.reduce((s, seal) => s + seal.count, 0),
  total:  10000,
  kings:  22,
  btcSealed: SEALS.find(s => s.id === 'btc').count,
};

export const KINGS_LAWS = [
  { num: 'I', text: 'A King is not minted. A King is recognised by the law that already obeys it.' },
  { num: 'II', text: 'Of the ten thousand souls, only twenty-two will ever carry this seal. The number is not a target. It is a boundary the universe will not cross.' },
  { num: 'III', text: 'A King is the meeting of the oldest lineage and the most absolute seal. There is no further evolution. There is only stewardship.' },
  { num: 'IV', text: 'One does not simply possess a King. One becomes its envoy, and through that envoyship, becomes legible to the cosmos.' },
];
