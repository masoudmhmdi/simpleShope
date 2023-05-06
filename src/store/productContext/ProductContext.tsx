/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import { GetData } from '@/API/API';
import { Idata } from '@/CartContext/CartContext';
import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
  useEffect,
} from 'react';

const productContext = createContext<Idata[] | []>([]);

type Action = {
  type: string;
  payload: any;
};

const PruductReducer = (state: [] | Idata[], action: Action) => {
  switch (action.type) {
    case 'INITIAL-RENDER':
      return [...(action.payload as Idata[])];

    case 'SORT-PRICE':
      if (action.payload === 'Ascending') {
        const filteredArr = state.sort((a, b) => +a.price - +b.price);
        return [...filteredArr];
      } else {
        const filteredArr = state.sort((a, b) => +b.price - +a.price);
        return [...filteredArr];
      }
    case 'FILTER-DELIVERY':
      // eslint-disable-next-line no-case-declarations

      if (action.payload.IsCheck) {
        const filteredArr = state.filter((item) => item.fastDelivery === true);
        return [...filteredArr];
      } else {
        return action.payload.data;
        break;
      }

    case 'FILTER-OUT-OF-STUCK':
      if (action.payload.IsCheck) {
        return action.payload.data;
      } else {
        const filterArr = state.filter((i) => i.inStock !== 0);
        console.log(filterArr);
        return [...filterArr];
      }

      break;

    case 'FILTER-RATING':
      console.log('run');
      console.log(action.payload);
      console.log(state);
      const filterArr = state.filter((item) => {
        return item.ratings === +action.payload;
      });
      console.log();
      return [...filterArr];
    default:
      return state;
      break;
  }
};

function ProductContext({ children }: { children: ReactNode }) {
  const [productState, productDispatch] = useReducer<any>(PruductReducer, []);
  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {children}
    </productContext.Provider>
  );
}

export const useProducts = () => useContext(productContext);
export default ProductContext;
