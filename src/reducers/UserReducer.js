import { GET_USER } from '../actions/Types'

const UserReducer = (state = [], action) => {
    switch(action.type){
        case GET_USER:
            return [
            ...state,
            ...action.users
            ]
        default:
            return state
    }
}

export default UserReducer