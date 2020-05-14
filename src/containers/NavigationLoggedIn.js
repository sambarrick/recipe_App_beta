import { connect } from 'react-redux'
import NavigationLoggedIn from '../components/NavigationLoggedIn'
import { addRecipe, getRecipeById, updateRecipe, getAllRecipes, deleteRecipe } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: () => dispatch(addRecipe()),
        updateRecipe: () => dispatch(updateRecipe()),
        getAllRecipes: () => dispatch(getAllRecipes()),
        getRecipeById: () => dispatch(getRecipeById()),
        deleteRecipe: () => dispatch(deleteRecipe())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLoggedIn);