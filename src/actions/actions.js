import { GET_USER } from './Types'
import axios from 'axios'

export const getUser = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .then(users => dispatch({
            type: GET_USER,
            users
        }))
}