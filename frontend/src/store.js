import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { prodcutListReducer, prodcutDetailsReducer } from './reducers/productReducer'

const reducer = combineReducers({
	productList: prodcutListReducer,
	productDetails: prodcutDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
