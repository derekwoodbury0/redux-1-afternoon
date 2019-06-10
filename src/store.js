import { createStore } from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_FIRST = 'UPDATE_FIRST'
export const UPDATE_LAST = 'UPDATE_LAST'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.payload }
        case UPDATE_CATEGORY:
            return { ...state, category: action.payload }
        case UPDATE_FIRST:
            return { ...state, authorFirst: action.payload }
        case UPDATE_LAST:
            return { ...state, authorLast: action.payload }
        case ADD_INGREDIENT:
            let newIngredients = [...state.ingredients, action.payload]
            return { ...state, ingredients: newIngredients };
        case ADD_INSTRUCTIONS:
            return {...state, instructions: [...state.instructions, action.payload]} 
        case ADD_RECIPE:
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state
            const recipe = {name, category, authorFirst, authorLast, ingredients, instructions}
            return {...state, recipes: [...state.recipes, recipe]}       
        default:
            return state
    }
};

export default createStore(reducer)