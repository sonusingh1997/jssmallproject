
const inc = { type: 'increment', payload: 10 };
const dec = { type: 'decrement', payload: 1 };
const todo = { type: 'todo', payload: { id: 1, name: "sonu singh", vill: "aurangabad" } };

class Store {
    constructor(reducer, init) {
        this.state = init;
        this.reducer = reducer;
    }

    dispatch(action) {
        return this.state = reducer(action, this.state)
    }

    //     getState(){
    //         return this.state;
    //     }

}

const reducer = (action, state) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + action.payload }
            break;
        case "decrement":
            return { ...state, count: state.count - action.payload }
            break;
        case "todo":
            return { ...state, todo: [...state.todo, action.payload] };

            break;
        default:
            return state;

    }
}

const init = { count: 0, todo: [] };
const store = new Store(reducer, init);
store.dispatch(inc);
store.dispatch(inc);
store.dispatch(dec);
console.log(store.dispatch({ type: 'todo', payload: { id: 1, name: "sonu singh", vill: "aurangabad" } }));
console.log(store.dispatch({ type: 'todo', payload: { id: 2, name: "vishal verma", vill: "gaya" } }));

