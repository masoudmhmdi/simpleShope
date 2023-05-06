import { useProducts } from '@/store/productContext/ProductContext';
import { useState, forwardRef } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
const Rating = ({ rating, setRating, data }: any) => {
  const { productState, productDispatch }: any = useProducts();

  const array = [0, 1, 2, 3, 4];
  return (
    <>
      <div className="flex items-center gap-1">
        <label>Rating:</label>
        {array.map((item) => {
          if (item <= rating) {
            return (
              <AiFillStar
                key={item}
                onClick={() => {
                  setRating(item);
                  productDispatch({
                    type: 'INITIAL-RENDER',
                    payload: data,
                  });
                  productDispatch({
                    type: 'FILTER-RATING',
                    payload: item,
                  });
                }}
              />
            );
          } else {
            return (
              <AiOutlineStar
                key={item}
                onClick={() => {
                  setRating(item);
                  productDispatch({
                    type: 'INITIAL-RENDER',
                    payload: data,
                  });
                  productDispatch({
                    type: 'FILTER-RATING',
                    payload: item,
                  });
                }}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Rating;
