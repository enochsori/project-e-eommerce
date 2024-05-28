import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts as fetchProducts, addNewProduct } from '../apis/firebase';
import { ProductType, UseProductHookProps } from '../service/types/type';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery<ProductType[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const addProduct = useMutation({
    mutationFn: ({ data, url }: UseProductHookProps) => {
      return addNewProduct(data, url);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });

  return { productsQuery, addProduct };
}
