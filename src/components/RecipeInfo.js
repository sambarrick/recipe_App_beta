import React from "react";
import { Container, TextField, Tooltip, Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import { Link } from "react-router-dom";

const RecipeInfo = (props) => {

  const [state, setState] = React.useState({
    ingredients: "",
    directions: "",
  });

  props.recipes.length === 0 ? props.getAllRecipes() :  
  //changed it to > 0 since === 0 was console logging "data already exists for recipe" infinitely
  console.log(state.ingredients);

  const id = props.match.params.id
  const recipez = props.recipes.find(c => c.id == id);

  if(props.recipes.length > 0){

  return (
    
<Container className="recipe-container">
<br/>
<Link to="/recipes">
  <Button className="back-to-recipes">
    Back to Recipes
  </Button>
</Link>

 <h2> { recipez.recipe_name } </h2>
 <h4> <span className="recipe-description-span">Cuisine Type: </span>{ recipez.cuisine_type }</h4>
 <h4> <span className="recipe-description-span">Cook Time: </span>{ recipez.total_cook_time }</h4>
 <h4> <span className="recipe-description-span-ingredients">Ingredients: </span> { recipez.ingredients }</h4>
 <h4> <span className="recipe-description-span-ingredients">Directions: </span> { recipez.directions }</h4>
 <br /> <br />
 {/* <form> onSubmit={this.newIngredient}> 
 <TextField
 id="outlined-textarea"
 placeholder="Edit ingredients"
 multiline
 variant="outlined"
 value={state.ingredients}
 onChange={ (e) => { setState({
      ingredients: e.target.value
 })
 console.log(state.ingredients)
 } 
}
/>
</form>
<Tooltip title="Save">
<Button onClick={() => props.updateRecipe(recipez.ingredients)}><SaveIcon className="edit-recipe-icon" 
/></Button>
</Tooltip>
</h4>

 {/* <h4> <span className="recipe-description-span-directions">Directions: </span>
 <br /> <br />
  <TextField
 id="outlined-textarea"
 placeholder="Edit directions"
 multiline
 variant="outlined"
 value={state.directions}
 onChange={ (e) => { setState({
    directions: e.target.value
 })
 } }
/>
<Tooltip title="Save">
<Button onClick={() => props.updateRecipe(recipez.id)}><SaveIcon className="edit-recipe-icon" 
/></Button>
</Tooltip></h4> */}

</Container>
  );
  } else {
    return <div></div> //dummy placeholder
  }
};


export default RecipeInfo;