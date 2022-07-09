import * as action from './actiontypes'

let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === action.ADD_BUG)
    return [
        ...state,
        {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }
    ]

    else if (action.type === action.REMOVE_BUG)
        return state.filter(bug => bug.id !== action.payload.id);

    else if (action.type === action.RESOLVE_BUG)
        return state.map(bug => bug.id !== action.payload.id ? bug: {...bug, resolved: true});
    
    return state;
}