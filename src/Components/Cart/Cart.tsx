import FixedRating from '@/Components/FixedRating/FixedRating';
import { Idata, useCart } from '@/CartContext/CartContext';
import Button from '../Button/Button';
const Cart = ({ item, isInCart }: { item: Idata; isInCart: boolean }) => {
  // console.log(state);

  const { image, name, price, fastDelivery, ratings } = item;
  return (
    <>
      <div className="max-w-[220px] border rounded-md">
        <img className="rounded-t-md" src={image} alt="cat" />
        <div className="p-5 flex flex-col gap-2">
          <div className="text-xl font-bold">
            <p>{name}</p>
          </div>
          <div className="flex flex-col font-bold">
            <span>${price}</span>
            <span>{fastDelivery ? 'fastDelivery' : '4 days delivery'}</span>
          </div>
          <div>
            <FixedRating rating={ratings} />
          </div>
          <div>
            <Button isInCart={isInCart} item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
