import { User } from 'firebase/auth';

type Categories =
  | 'Acoustic Guitar'
  | 'Bass Guitar'
  | 'Electric Guitar'
  | 'Piano'
  | 'Drum'
  | 'Microphone'
  | undefined;

export type Item = {
  item: Categories;
  categoryId: string | undefined;
  imageSrc: string;
};

export type ItemCategories = { [key: string]: Item };

export interface ExtendedUser extends User {
  isAdmin?: string;
}

export type NewProduct = {
  name: string;
  price: number;
  category: string;
  description: string;
  sort: string;
};
