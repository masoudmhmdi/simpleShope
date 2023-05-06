/* eslint-disable indent */
import { DeleteData, GetData, SendData } from '@/API/API';
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  Dispatch,
} from 'react';

export type Idata = {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock?: number;
  ratings?: number;
  fastDelivery?: boolean;
};
type CartContext = {
  state: Idata[];
  dispatch: any;
};
type action = {
  type: 'add' | 'init' | 'remove';
  payload: any;
};
// /.......................
const reducer = (state: Idata[], action: action) => {
  switch (action.type) {
    case 'add':
      SendData(action.payload);
      return [...state, action.payload];

    case 'init':
      return action.payload;
    case 'remove':
      DeleteData(action.payload);
      // eslint-disable-next-line no-case-declarations
      const filteredItem = state.filter((item) => item.id !== action.payload);
      return [...filteredItem];
    default:
      return state;
  }
};
export const useCart = () => useContext(CartContext);

// const data = GetData('')
export const CartContext = createContext<[] | CartContext>([]);
// ..................................................
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const fetchProduct = async () => {
      const cartProduct = await GetData('cart');
      dispatch({
        type: 'init',
        payload: cartProduct,
      });
    };
    fetchProduct();
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
// ..................................................
