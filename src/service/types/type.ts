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
