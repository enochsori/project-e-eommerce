import { User } from 'firebase/auth';

export type Categories =
  | 'Acoustic Guitar'
  | 'Bass Guitar'
  | 'Electric Guitar'
  | 'Piano'
  | 'Drum'
  | 'Microphone'
  | 'undefined';

export const ItemCategoryMapping = {
  'Acoustic Guitar': 'acoustic-guitar',
  'Bass Guitar': 'bass-guitar',
  'Electric Guitar': 'elec-guitar',
  Piano: 'piano',
  Drum: 'drum',
  Microphone: 'microphone',
  undefined: undefined,
};

export type Item = {
  item: Categories;
  categoryId: string | undefined;
  imageSrc: string;
};

export type ItemCategories = { [key: string]: Item };

export interface ExtendedUser extends User {
  isAdmin?: boolean;
}

export type NewProductFormData = {
  name: string;
  price: number;
  category: string;
  description: string;
  sort: string;
};

export type ProductType = NewProductFormData & {
  id: string;
  image: string;
};

export type UpdateCartProduct = {
  id: string;
  image: string;
  price: number;
  quantity: number;
  name: string;
};

export const SHIPPING = 20;

export type UseProductHookProps = {
  data: ProductType | NewProductFormData;
  url: string;
};
