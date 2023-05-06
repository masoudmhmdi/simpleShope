import { Idata, useCart } from '@/CartContext/CartContext';
import { FaTrash } from 'react-icons/fa';
const MiniCard = ({ item }: { item: Idata }) => {
  const { image, name, price, id } = item;
  const { state, dispatch }: any = useCart();

  return (
    <div className="flex w-96 items-center justify-between px-3 py-6">
      <div className="flex gap-5">
        <img src={`${image}`} alt="" className="w-14 h-14 rounded-full" />
        <div>
          <p>{name}</p>
          <p>₹ {price}</p>
        </div>
      </div>
      <div>
        <FaTrash
          className="cursor-pointer"
          id={id}
          onClick={() => {
            dispatch({
              type: 'remove',
              payload: id,
            });
          }}
        />
      </div>
    </div>
  );
};

export default MiniCard;
