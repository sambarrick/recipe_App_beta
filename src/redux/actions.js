export const login = () => {
  return {
      type: 'LOG_IN',
      value: true
  }
}

export const logout = () => {
  return {
      type: 'LOG_OUT',
      value: false
  }
}

export const getAllRecipes = () => {
  return dispatch => {
    fetch("/recipes")
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "FETCH_RECIPES",
          value: response
        };
        dispatch(action);
      })
    .catch(error => console.log(error));
} 
}

export const getRecipeById = () => {
  return dispatch => {
    fetch("/recipes/:id")
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "GET_RECIPE_BY_ID",
          value: response
        };
        dispatch(action);
      })
    .catch(error => console.log(error));
} 
}

export const addRecipe = (recipe) => {
  return dispatch => {
    fetch("/recipes", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      recipe_name: recipe.recipe_name,
      cuisine_type: recipe.cuisine_type,
      total_cook_time: recipe.total_cook_time,
      ingredients: recipe.ingredients,
      directions: recipe.directions
      })})
      .then(response => {
      response.json()
      }).then(function(body) {
      console.log('clientside post: ' + body);
      })
      .catch(error => console.log(error))
      }
}

export const updateRecipe = (recipe) => {
  return dispatch => {
    fetch(`/recipes/${recipe.id}`, { 
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      recipe_name: recipe.recipe_name,
      cuisine_type: recipe.cuisine_type,
      total_cook_time: recipe.total_cook_time,
      ingredients: recipe.ingredients,
      directions: recipe.directions
      })})
      .then(response => {
          const action = {
            type: "UPDATE_RECIPE",
            value: response
          };
          dispatch(action);
      })
      .catch(error => console.log("put request failing", error))
      }
}

export const deleteRecipe = (recipe) => {
  return dispatch => {
    fetch(`/recipes/${recipe.id}`, { // backticks indicate you're creating a variable within a string. ${} indicates the variable you're referencing.
    method: 'DELETE',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      recipe_name: recipe.recipe_name,
      cuisine_type: recipe.cuisine_type,
      total_cook_time: recipe.total_cook_time,
      ingredients: recipe.ingredients,
      directions: recipe.directions
  })})
    .then(response => {
        const action = {
          type: "DELETE_RECIPE",
          value: response
        };
        dispatch(action);
    })
    .catch(error => console.log("delete request failing", error))
    }
  }

  export const getAllUsers = () => {
    return dispatch => {
      fetch("/users")
        .then(res => res.json())
        .then(response => {
          const action = {
            type: "FETCH_USERS",
            value: response
          };
          dispatch(action);
        })
      .catch(error => console.log(error));
  } 
  }

  export const addUser = (user) => {
    console.log(user);
    return dispatch => {
      fetch("/users", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password
        })})
        .then(response => {
        response.json()
        }).then(function(body) {
        console.log('clientside post: ' + body);
        })
        .catch(error => console.log(error))
        }
}

export const getUsersById = () => {
  return dispatch => {
    fetch("/users/:id")
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "GET_USERS_BY_ID",
          value: response
        };
        dispatch(action);
      })
    .catch(error => console.log(error));
} 
}