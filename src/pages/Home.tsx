import Banner from '../components/ui/Banner';
import CategoryCard from '../components/ui/CategoryCard';
import { itemCategories } from '../service/data';
import Product from './Product';

export default function Home() {
  return (
    <main>
      <Banner />
      <h1 className='text-4xl font-bold text-center mt-6 mb-4'>Cateogies</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 gap-y-10 mb-6'>
        {Object.values(itemCategories).map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </ul>

      <h1 className='text-4xl font-bold text-center mt-6 mb-4'>All products</h1>
      <Product />
    </main>

    // </div>
  );
}
