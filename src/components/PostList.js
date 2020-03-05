import React from 'react'

const PostList = (props) => {
    return (
        <div>
            <h1>Posts of {props.match.params.id}</h1>
        </div>
    )
}

export default PostList
