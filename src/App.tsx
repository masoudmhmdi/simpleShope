import Header from '@/Layout/Header/Header';
import Main from '@/Layout/Main/Main';

import CartProvider from './CartContext/CartContext';
import ProductContext from './store/productContext/ProductContext';

function App() {
  return (
    <>
      <CartProvider>
        <ProductContext>
          <Header />
          <Main />
        </ProductContext>
      </CartProvider>
    </>
  );
}

export default App;
