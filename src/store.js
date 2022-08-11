import { combineReducers, createStore } from 'redux'
import {currentUserReducer,initalCurrentuser} from "./features/currentUSer/currentUserSlice"
import {todosReducer,initalTodos} from './features/todos/todosSlice'


const Store = createStore(combineReducers({
    currentUSer: currentUserReducer,
    todos:todosReducer
    
})

    , {
        currentUSer: initalCurrentuser,
        todos: initalTodos,
        
    }


)
export default Store