import createStore from 'redux';
import rootReducer from './reducers/categoryReducer';

const store = createStore(rootReducer);

export default store;
