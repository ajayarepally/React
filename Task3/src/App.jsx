import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import RecipesDetails from "./Components/Recipes/RecipesDetails";
import ProductsDetails from './Components/Products/ProductsDetails';
import UserDetails from './Components/Users/UserDetails';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/RecipesData" element={<RecipesDetails />} />
        <Route path="/ProductsData" element={<ProductsDetails />} />
        <Route path="/UsersData" element={<UserDetails />} />
      </Routes>
    </>
  );
}
export default App;