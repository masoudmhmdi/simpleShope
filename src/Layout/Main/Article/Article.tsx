import { GetData } from '@/API/API';
import { Idata, useCart } from '@/CartContext/CartContext';
import Cart from '@/Components/Cart/Cart';
import { useProducts } from '@/store/productContext/ProductContext';

import { useEffect } from 'react';

export type IDataState = {
  data: [] | Idata[];
  setData: React.Dispatch<React.SetStateAction<[] | Idata[]>>;
};

const Article = () => {
  const { state, dispatch }: any = useCart();
  const { productState, productDispatch }: any = useProducts();

  useEffect(() => {
    const fetch = async () => {
      const data = await GetData('products');
      productDispatch({
        type: 'INITIAL-RENDER',
        payload: data,
      });
    };
    fetch();
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-x-7 gap-y-2 w-fit h-fit mt-7">
        {productState.map((item: Idata) => {
          const isExistInCart = state.find((i) => i.id === item.id);
          if (isExistInCart) {
            return <Cart key={item.id} item={item} isInCart={true} />;
          } else {
            return <Cart key={item.id} item={item} isInCart={false} />;
          }
        })}
      </div>
    </>
  );
};

export default Article;
