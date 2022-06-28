import Member from './pages/Member';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import ThemePlanning from './pages/ThemePlanning';
import SignupLogin from './components/SignupLogin/SignupLogin';
import PwdChanging from './pages/PwdChanging';

import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import Cart from './pages/Cart';

import { CartProvider } from './utils/useCart';
import { useState, createContext } from 'react';

// 傳遞 checkList 使用
export const CheckListContext = createContext(null);

function App() {
  // const { items, addItem, clearCart } = useCart();

  // 加選購物車商品的清單
  const [checkList, setCheckList] = useState([]);

  // 購物車勾選的商品總金額
  const calcCheckListTotal = () =>
    checkList.reduce((total, item) => total + item.price * item.quantity, 0);

  // 購物車勾選的商品總數量
  const calcCheckListItems = () =>
    checkList.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CheckListContext.Provider
      value={{
        checkList,
        setCheckList,
        checkListTotal: calcCheckListTotal(),
        checkListItems: calcCheckListItems(),
      }}
    >
      <CartProvider localStorageKey="Cart">
        <Router>
          <>
            <Header />
            <ScrollToTop>
              <Switch>
                <Route path="/member">
                  <Member />
                </Route>
                <Route path="/themeplanning">
                  <ThemePlanning />
                </Route>
                <Route path="/pwdchanging">
                  <PwdChanging />
                </Route>
                <Route path="/product/detail">
                  <ProductDetail />
                </Route>
                <Route path="/product">
                  <Products />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
              </Switch>
            </ScrollToTop>
            <Footer />
          </>
        </Router>
      </CartProvider>
    </CheckListContext.Provider>
  );
}

export default App;
