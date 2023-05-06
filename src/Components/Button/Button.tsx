import { Idata, useCart } from '@/CartContext/CartContext';

function Button({ isInCart, item }: { isInCart: boolean; item: Idata }) {
  const { state, dispatch }: any = useCart();
  return (
    <button
      className={`rounded-md ${
        isInCart ? 'bg-red-500' : 'bg-[#007BFF]'
      }  text-white px-3 py-2 transition-all duration-500 `}
      onClick={
        isInCart
          ? () => {
              dispatch({
                type: 'remove',
                payload: item.id,
              });
            }
          : () => {
              dispatch({
                type: 'add',
                payload: { ...item },
              });
            }
      }
    >
      {isInCart ? 'Remove from cart' : ' Add to Cart'}
    </button>
  );
}

export default Button;
