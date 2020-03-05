import React, { Component } from 'react'
import { getUser } from '../actions/actions'
import { connect } from 'react-redux'
import User from './User'

class UserList extends Component {
    componentDidMount() {
        this.props.getUser()
    }
    render() {
        const { users } = this.props
        return (
            <div>
                {users.map(user => <User user={user} key={user.id}/>)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        users: state.UserReducer
    }
}
export default connect(mapStateToProps, { getUser })(UserList)
