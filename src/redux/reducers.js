import { combineReducers } from "redux";

const recipes = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return action.value;
    case "GET_RECIPE_BY_ID":
      return action.value;
    case "ADD_RECIPE":
      return [...state, action.value];
    case "UPDATE_RECIPE":
      return [...state, action.value];
    case "DELETE_RECIPE":
      const recipe = [...state];
      recipe.splice(action.value, 1);
      return recipe;
      default:
      return state;
  }
}

    const users = (state = [], action) => {
    switch (action.type) {
    case "FETCH_USERS":
      return action.value;
    case "ADD_USER":
      return [...state, action.value];
      case "GET_USERS_BY_ID":
      return action.value;
    default:
      return state;
  }
}


export default combineReducers({ users, recipes });