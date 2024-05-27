import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { addOrUpdateCart, getCart, removeFromCart } from '../apis/firebase';
import { useAuthContext } from '../context/AuthContext';
import { UpdateCartProduct } from '../service/types/type';

export default function useCart() {
  const {
    user: { uid },
  } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => getCart(uid),
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product: UpdateCartProduct) => addOrUpdateCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  const removeItem = useMutation({
    mutationFn: (id: string) => removeFromCart(uid, id),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
