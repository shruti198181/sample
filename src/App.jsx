import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
//  import Login from './pages/login';
import withLayout from './component/layout';

const HomeWithLayout = withLayout(Home);
//  const LoginWithLayout = withLayout(Login); // or add hideOnPaths if needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeWithLayout />} />
            <Route path="/home" element={<HomeWithLayout />} /> {/* Added */}
      {/* <Route path="/login" element={<LoginWithLayout />} /> */}
    </Routes>
  );
}
export default App;