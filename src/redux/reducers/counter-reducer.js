
const initialState = { value: 0 }

const counterReducer = (state = initialState, action) =>{

    switch(action.type){
        case "ADD":
            return {...state, value: state.value + action.payload}
        case "DELETE":
            return {...state, value: state.value - action.payload}
        default:
            return state;
    }
}

export default counterReducer;
