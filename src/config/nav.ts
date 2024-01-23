export const sidebar = [
  { label: "Introduction", link: "/introduction" },
  {
    label: 'Start Here',
    autogenerate: { directory: 'start-here' }
  },
  {
    label: 'Guides',
    autogenerate: { directory: 'guides' }
  },
  {
    label: "Tutorials",
    translations: {
      fr: "Tutoriels",
    },
    collapsed: false,
    autogenerate: {
      directory: "tutorials",
    },
  },
  {
    label: 'Reference',
    autogenerate: { directory: 'reference' },
  },
  {
    label: 'F.A.Q',
    autogenerate: { directory: 'faq' }
  },
  {
    label: 'Release Notes',
    autogenerate: { directory: 'release-notes' },
  },
  {
    label: 'History',
    autogenerate: { directory: 'history' },
  },
];
