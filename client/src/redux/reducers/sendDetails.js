import ACTIONS from '../actions/'

const initialState = {
    sending: false,
    success: false,
    failure: false,
    payload: null
}

const fileReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.SEND_DETAILS:
            return {
                ...state,
                sending: true,
            }
        case ACTIONS.FORM_SEND_SUCCESS:
            return {
                ...state,
                sending: false,
                success: true,
                payload: action.payload
            }
        case ACTIONS.FORM_SEND_FAILURE:
            return {
                ...state, 
                sending: false,
                success: false,
                failure: true,
                payload: action.payload
            }
        default:
            return state
    }
}

export default fileReducer; 