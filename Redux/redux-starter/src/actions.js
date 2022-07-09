import * as action from './actiontypes';

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    };
}

export function bugResolved(id) {
    return {
        type: actions.RESOLVE_BUG,
        payload: {
            id: id
        }
    }
}