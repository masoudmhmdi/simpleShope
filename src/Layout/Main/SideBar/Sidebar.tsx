import { GetData } from '@/API/API';
import { Idata } from '@/CartContext/CartContext';
import Rating from '@/Components/Rating/Rating';
import { useProducts } from '@/store/productContext/ProductContext';
import { useState, useEffect, useRef } from 'react';

const Sidebar = () => {
  const { productState, productDispatch }: any = useProducts();
  const [data, setData] = useState('');
  const [rating, setRating] = useState(-1);
  const [form, setForm] = useState({
    Ascending: false,
    Descending: false,
    Stock: false,
    Fast: false,
  });

  const handleChange = (e: any) => {
    if (e.target.type === 'radio') {
      if (e.target.id === 'Ascending') {
        setForm((prev) => {
          return {
            ...prev,
            [e.target.id]: e.target.checked,
            Descending: false,
          };
        });
      } else {
        setForm((prev) => {
          return {
            ...prev,
            [e.target.id]: e.target.checked,
            Ascending: false,
          };
        });
      }
    }
    console.log(e.target.type);
    if (e.target.type === 'checkbox') {
      setForm((prev) => {
        return { ...prev, [e.target.id]: e.target.checked };
      });
    }
  };

  useEffect(() => {
    async function x() {
      const res = await GetData('products');
      setData(res);
    }
    x();
  }, []);
  return (
    <>
      <div className=" bg-[#343A40] text-white px-5 py-7 pb-20 flex flex-col gap-10">
        <span className="text-2xl">Filter Products</span>
        <div>
          <input
            onClick={(e) =>
              productDispatch({
                type: 'SORT-PRICE',
                payload: (e.target as HTMLInputElement).id,
              })
            }
            onChange={handleChange}
            checked={form.Ascending}
            name="group1"
            type="radio"
            id="Ascending"
          />
          <label htmlFor="Ascending">Ascending</label>
        </div>
        <div>
          <input
            onClick={(e) =>
              productDispatch({
                type: 'SORT-PRICE',
                payload: (e.target as HTMLInputElement).id,
              })
            }
            onChange={handleChange}
            checked={form.Descending}
            name="group1"
            type="radio"
            id="Descending"
          />
          <label htmlFor="Descending">Descending</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Stock"
            checked={form.Stock}
            onChange={(e) => {
              productDispatch({
                type: 'FILTER-OUT-OF-STUCK',
                payload: {
                  IsCheck: e.target.checked,
                  data: data,
                },
              });
              handleChange(e);
            }}
          />
          <label htmlFor="Stock">Include Out of Stock</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Fast"
            checked={form.Fast}
            onChange={(e) => {
              productDispatch({
                type: 'FILTER-DELIVERY',
                payload: {
                  IsCheck: e.target.checked,
                  data: data,
                },
              });
              handleChange(e);
            }}
          />
          <label htmlFor="Fast">Fast Delivery Only</label>
        </div>
        <Rating rating={rating} setRating={setRating} data={data} />
        <button
          className="bg-[#F8F9FA] text-black rounded-md py-2"
          onClick={() => {
            setForm({
              Ascending: false,
              Descending: false,
              Stock: false,
              Fast: false,
            });
            setRating(-1);
            productDispatch({
              type: 'INITIAL-RENDER',
              payload: data,
            });
          }}
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default Sidebar;
