import CategoryCard from '../components/ui/CategoryCard';
import { itemCategories } from '../service/data';

export default function Home() {
  return (
    <div className='px-4 w-full flex flex-col'>
      <div className='w-full text-center'>
        <div className='w-full mt-4'>
          <img
            src='/images/banner-img.jpg'
            alt='banner image'
            className='w-full h-60 mx-auto object-cover rounded-md'
          />
        </div>

        <div className='w-full flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-10'>
          <h1>welcome!!</h1>
          <h1 className='hidden md:block'>we love music and music lovers!!</h1>
        </div>
        <div className=' text-lg font-bold mb-2'>Choose your Muzik!</div>
      </div>

      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 gap-y-10'>
        {Object.values(itemCategories).map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </ul>
    </div>
  );
}
