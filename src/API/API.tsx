import { Idata } from '@/CartContext/CartContext';
import axios from 'axios';

export async function GetData(data: string) {
  const { data: cartProduct } = await axios(`http://localhost:3000/${data}`);
  return cartProduct;
}

export async function SendData(data: Idata) {
  const { data: cartProduct } = await axios.post(
    'http://localhost:3000/cart',
    data
  );
  return cartProduct;
}

export async function DeleteData(id: number) {
  axios.delete(`http://localhost:3000/cart/${id}`);
}

export async function SearchProduct(value: string) {
  const res: any = axios(`http://localhost:3000/products?q=${value}`);

  return res;
}
