import React, { useState } from "react";
import bgImage from './Images/DALLRobo-Chef-ezgif.com-reverse-removebg-preview.png'
import bgImageFliped from './Images/DALLRobo-Chef-ezgif.com-reverse-removebg-preview - Copy.png'
import RoboRecipe from "./RoboRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai"



export default function MainContent() {

    const [ingredients, setIngredients] = useState([]);

    const [loading, setLoading] = useState(false);
  

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient").trim();
        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients([newIngredient, ...ingredients]); 
        }
    }

    function removeIngredients() {
        setIngredients([]);
        setGeneratedRecipe("");
    }

    const [generatedRecipe, setGeneratedRecipe] = useState("")

    async function getRecipe() {
        setLoading(true);
        try {
            const recipe = await getRecipeFromMistral(ingredients);
            setGeneratedRecipe(recipe);
        } catch (error) {
            console.error("Error fetching recipe:", error);
        }
        setLoading(false);
    }

    const recipeSection = React.useRef(null)
    const depend = (generatedRecipe !== "") && (recipeSection.current !== null)


    React.useEffect(function(){
        if(depend){
            recipeSection.current.scrollIntoView({behavior:"smooth"})

            // const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            // window.scroll({
            //     top: yCoord,
            //     behavior: "smooth"
            // })

        }
            }, [generatedRecipe]
    )



  
    return (
        <main>  
            <div className="background-blur">
                <img src={bgImage} alt="robo chef"/>  
                <img src={bgImageFliped} alt="fliped robot chef" />
            </div>
              <label>what are the ingrideients you have?</label>
            <form className="addIngredientForm" action={addIngredient}>
                <input name="ingredient" type="text" placeholder="e.g oregano" aria-label="Add ingredient" />
                <button type="submit" className="btn1">Add ingredient</button>
                {!(ingredients.length === 0) &&<button type="button" className="btn2" onClick={removeIngredients}> CLEAR </button>}
            </form>     

            {!(ingredients.length === 0) && <IngredientsList recipeSection={recipeSection} getRecipe= {getRecipe} Ingredients = {ingredients}/> }

                {loading && (
                <div className="flipping-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}

            { generatedRecipe && <RoboRecipe id="roboReciped"generatedRecipe={generatedRecipe}/>}    

            
            
        </main>
    );
}






