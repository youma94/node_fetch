import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    return (
        <div style={{border: "1px solid red", padding:"5px"}}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
            <Link to={`/user/${user.id}`}><button>See Posts</button></Link>
        </div>
    )
}

export default User
