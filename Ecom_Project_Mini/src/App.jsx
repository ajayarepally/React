import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Recipes from './Components/Recipes/Recipes'
import CartItems from './Components/CartItems/CartItems'
import FavItems from './Components/FavItems/FavItems'
import RecipeSingleDetails from './Components/Recipes/RecipeSingleDetails'
import ProductSingleDetails from './Components/Products/ProductSingleDetails'
import NotFound from './NotFound'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/recipes" element={<Recipes />}/>
        <Route path="/cartItems" element={<CartItems />}/>
        <Route path='/recipes/:id' element={<RecipeSingleDetails/>}/>
        <Route path='/products/:id' element={<ProductSingleDetails/>}/>
        <Route path="/favItems" element={<FavItems />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App