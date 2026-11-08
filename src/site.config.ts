// Everything you are likely to change about the site, in one place.
// The About text lives in src/content/about.md, the photos in src/assets/home/.

export const site = {
  name: 'Barış Taşın',
  eyebrow: 'Game developer · Researcher · Köln',
  tagline:
    'A research-oriented engineer at Cologne Game Lab who loves making games as much as playing them and is always open to new challenges.',
  now: 'MA Game Development and Research, Cologne Game Lab (TH Köln) · Research assistant on HistoVeaR',
  description: 'Portfolio of Barış Taşın, game developer and researcher in Köln.',
};

// The photo band at the top of the home page.
// To use your own photo, replace src/assets/home/hero.jpg and keep the file name.
export const hero = {
  // Which part of the photo stays visible when the band crops it. '50% 50%' is the center;
  // a larger second number (like '50% 70%') shows more of the lower part.
  photoPosition: '50% 55%',
  // Shown small in the corner, for example 'Lofoten, Norway · 2023'. Leave empty to hide it.
  photoCaption: '',
  // A line you like, shown over the photo. Leave empty to hide it.
  quote: '',
  quoteAuthor: '',
};

// The photo band between About and the career map.
// To use your own photo, replace src/assets/home/band.jpg and keep the file name.
export const band = {
  photoPosition: '50% 70%',
  photoCaption: '',
};

// Links shown in the About section and the footer (GitHub, LinkedIn, itch.io…).
// Example: { label: 'itch.io', url: 'https://your-name.itch.io' }
export const profileLinks: { label: string; url: string }[] = [];

// Chapters of the career map, newest first. Each career level names its chapter by number.
export const chapters = [
  { number: 3, title: 'Back at school', meta: 'Cologne Game Lab · 2026–', mapLabel: 'Back at school' },
  { number: 2, title: 'Before I went back to school', meta: 'Before 2026', mapLabel: 'Before school' },
  { number: 1, title: 'Before I launched my sole proprietorship', meta: 'Mobile game studios', mapLabel: 'Mobile studios' },
];

// Small tabs in the header, next to the Work button, for visitors who want more than the portfolio.
// A tab with a `collection` stays hidden on the live site until that collection has a published (non-draft) entry.
type Tab = { label: string; href: string; collection?: 'reading' | 'history' };

export const moreTabs: Tab[] = [
  { label: 'Reading Journal', href: '/reading/', collection: 'reading' },
  { label: 'History & Money', href: '/history/', collection: 'history' },
];

// Impressum (legal notice). Fill these in before the site goes live.
export const legal = {
  fullName: 'Barış Taşın',
  addressLines: [] as string[],
  email: '',
  phone: '',
};
