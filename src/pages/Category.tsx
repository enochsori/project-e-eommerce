import { useLocation } from 'react-router-dom';
import useProducts from '../hooks/useProduct';
import { ItemCategoryMapping, ProductType } from '../service/types/type';
import ProductCard from '../components/ui/ProductCard';

export default function Category() {
  const {
    state: {
      category: { item, imageSrc },
    },
  } = useLocation();

  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <section className='p-4'>
      <div className='flex items-end gap-2 mb-6'>
        <img
          src={imageSrc}
          alt={`${item} image`}
          className='rounded-full h-10 w-10 object-cover'
        />
        <h1 className='text-2xl font-bold'>
          {item ? item : 'Comming soon..'}
          {/* <span className='text-brand'> Muzik</span> */}
        </h1>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2'>
        {products &&
          products.map(
            (product: ProductType) =>
              product.category === ItemCategoryMapping[item] && (
                <ProductCard key={product.id} product={product} />
              )
          )}
      </ul>
    </section>
  );
}
