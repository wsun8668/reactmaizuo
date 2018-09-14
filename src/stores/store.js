import {createStore, combineReducers} from 'redux';

function isNavShow(state = false, action) {
	if(action.type === 'CHANGE_NAVSHOW') {
		return action.payload;
	}
	return state;
}

var reducers = combineReducers({
	isShow: isNavShow
})


var store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;