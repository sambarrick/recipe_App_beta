import { connect } from 'react-redux';
import RecipeInfo from '../components/RecipeInfo'
import { getAllRecipes, updateRecipe } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getAllRecipes: () => dispatch(getAllRecipes()),
      updateRecipe: recipe => dispatch(updateRecipe(recipe))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInfo)