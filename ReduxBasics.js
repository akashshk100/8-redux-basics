const redux = require('redux')
const createStore = redux.createStore


const initialState = {
    name: 'Akash',
    count: 0
}

// reducer

const reducer = (state = initialState, action) => {
    if(action.type === 'ICREMENT'){
        return {
            ...state,
            count: state.count + 1
        }
    }
    if(action.type === 'ADD'){
        return {
            ...state,
            count: state.count + action.value
        }
    }
}

// store

const store = createStore(reducer)
console.log('[program]', store.getState())

//subscription to the store

store.subscribe( () => {
    console.log('[subscription]', store.getState())
})

// dispatching actions

store.dispatch({type: 'ADD', value: 20})
