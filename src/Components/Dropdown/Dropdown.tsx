import { Popover } from '@headlessui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import EmptyCart from '@/Components/EmptyCart/EmpttyCart';
import { Idata, useCart } from '@/CartContext/CartContext';
import MiniCard from '../miniCard/miniCard';
function MyPopover() {
  const { state, dispatch } = useCart();
  return (
    <Popover className="relative bg-[#1E7E34] px-2 py-1 rounded-md">
      <Popover.Button className="outline-none">
        <div className="text-white flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <FaShoppingCart size={30} />
            <p>{state.length}</p>
          </div>
          <AiFillCaretDown />
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 right-0 top-12 bg-white rounded-md">
        <div className="flex flex-col">
          {state.length ? (
            state.map((item: Idata) => {
              return <MiniCard item={item} key={item.id} />;
            })
          ) : (
            <EmptyCart />
          )}
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
}
export default MyPopover;
