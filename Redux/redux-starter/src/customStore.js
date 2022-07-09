function createStore(reducer) {
    let state;
    function getState() {
        return state;
    }

    function dispatch(action) {

    }

    
    return {
        getState,
        dispatch
    }
}

export default createStore();