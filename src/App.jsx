import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
 import Login from './pages/login';
import withLayout from './component/layout';
import Signup from './component/signup';
import CartPage from './pages/cartpage';
import PlaceOrder from './pages/porder';

const HomeWithLayout = withLayout(Home);
 const LoginWithLayout = withLayout(Login, { hideOnPaths: ['/login'] });
   const SignupWithLayout = withLayout(Signup,{hideOnPaths:['/signup']});
const CartPageWithLayout =withLayout(CartPage,{hideOnPaths: ['/cartpage']})
const PlaceOrderWithLayout = withLayout(PlaceOrder,{hideOnPaths : ['/porder']})
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeWithLayout />} />
            <Route path="/home" element={<HomeWithLayout />} /> {/* Added */}
      <Route path="/login" element={<LoginWithLayout />} />
      <Route path="/signup" element={<SignupWithLayout/>}/>
      <Route path="/cartpage" element={<CartPageWithLayout/>}/>
      <Route path="/porder" element={<PlaceOrderWithLayout/>}/>
    </Routes>
  );
}
export default App;