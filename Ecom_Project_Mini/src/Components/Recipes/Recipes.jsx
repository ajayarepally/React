
import React from 'react'
import "./Recipes.css"
import { recipes } from './RecipesData'
import Recipe from './Recipe'
const Recipes = () => {
  return (
    <div className='recipesAll'>
        <div className='recipesHeading'>
        {recipes.recipes.map((recipe,index)=>{
           return (
            <> 
                <Recipe singleR={recipe}/>
            </>
           )
        })}
        </div>
    </div>
  )
}

export default Recipes
