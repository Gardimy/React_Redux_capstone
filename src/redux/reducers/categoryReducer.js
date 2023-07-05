import { combineReducers } from 'redux';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
