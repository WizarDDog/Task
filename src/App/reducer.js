import { SAVE_DATA } from './consts';

const initialState = {
    Values: {},
  }

function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_DATA:
                return Object.assign({}, state, {
                    Values: {
                        val3: action.payload.val3,
                        val5: action.payload.val5,
                    }
                })
        default:
            return state
    } 
}

export default reducer;