import { ItemCategories } from './types/type';

export const itemCategories: ItemCategories = {
  acousticGuitar: {
    item: 'Acoustic Guitar',
    imageSrc: '/images/categories/acoustic-guitars.webp',
    categoryId: 'acoustic-guitar',
  },
  bassGuitar: {
    item: 'Bass Guitar',
    imageSrc: '/images/categories/bass-guitars.webp',
    categoryId: 'bass-guitar',
  },
  electricGuitar: {
    item: 'Electric Guitar',
    imageSrc: '/images/categories/electric-guitars.webp',
    categoryId: 'elec-guitar',
  },
  piano: {
    item: 'Piano',
    imageSrc: '/images/categories/pianos.webp',
    categoryId: 'piano',
  },
  drum: {
    item: 'Drum',
    imageSrc: '/images/categories/drums.webp',
    categoryId: 'drum',
  },
  migrophone: {
    item: 'Microphone',
    imageSrc: '/images/categories/microphones.webp',
    categoryId: 'microphone',
  },
  empty: {
    item: undefined,
    imageSrc: '/images/categories/not-yet.webp',
    categoryId: undefined,
  },
};
