import { SearchProduct } from '@/API/API';
import { useProducts } from '@/store/productContext/ProductContext';
import { useState, useEffect } from 'react';

const SearchInput = () => {
  const { productState, productDispatch }: any = useProducts();
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    console.log(searchVal);
    SearchProduct(searchVal).then((res) => {
      productDispatch({
        type: 'INITIAL-RENDER',
        payload: res.data,
      });
    });
  }, [searchVal]);
  return (
    <>
      <input
        value={searchVal}
        type="text"
        className="outline-none rounded-md w-[35%] py-2 px-3 focus:outline-blue-400"
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
    </>
  );
};

export default SearchInput;
