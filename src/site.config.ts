// Everything you are likely to change about the site, in one place.

export const site = {
  name: 'Barış Taşın',
  eyebrow: 'Game developer · Researcher · Köln',
  tagline: 'From mobile games with millions of players to markerless motion capture research at Cologne Game Lab.',
  now: 'MA Game Development and Research, Cologne Game Lab (TH Köln) · Research assistant on HistoVeaR',
  description: 'Portfolio of Barış Taşın, game developer and researcher in Köln.',
};

// Links shown under the introduction on the career page (GitHub, LinkedIn, itch.io, email…).
// Example: { label: 'itch.io', url: 'https://your-name.itch.io' }
export const profileLinks: { label: string; url: string }[] = [];

// Chapters of the career map, newest first. Each career level names its chapter by number.
export const chapters = [
  { number: 3, title: 'Back at school', meta: 'Cologne Game Lab · 2026–', mapLabel: 'Back at school' },
  { number: 2, title: 'Before I went back to school', meta: 'Before 2026', mapLabel: 'Before school' },
  { number: 1, title: 'Before I launched my sole proprietorship', meta: 'Mobile game studios', mapLabel: 'Mobile studios' },
];

// Tabs in the top bar. A tab that has a `collection` stays hidden on the live site
// until that collection has at least one published (non-draft) entry.
type NavItem = { label: string; href: string; collection?: 'reading' | 'history' };

export const navItems: NavItem[] = [
  { label: 'Career', href: '/' },
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
