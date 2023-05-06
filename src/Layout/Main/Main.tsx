import { Idata } from '@/CartContext/CartContext';
import Article from '@/Layout/Main/Article/Article';
import Sidebar from '@/Layout/Main/SideBar/Sidebar';
import ProductContext from '@/store/productContext/ProductContext';
import { useState, useRef } from 'react';

const Main = () => {
  return (
    <>
      <div className="flex mt-5 gap-12">
        <Sidebar />
        <Article />
      </div>
    </>
  );
};

export default Main;
