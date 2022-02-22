import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls'

const FeedPage = () => {
    useProtectedPage()

    const [posts, loading] = useRequestData(`${BASE_URL}posts`)

    const post = posts && posts.map((post) => {
        return (
            <div key={post.id}>
                <ul>
                    <li>{post.username}</li>
                    <li>{post.title}</li>
                    <li>{post.commentCount}</li>
                    <li>{post.createdAt}</li>
                    <li>{post.userVote}</li>
                    <li>{post.voteSum}</li>
                    <hr></hr>
                </ul>
            </div>
        )
    })

    return (
        <div>
            FeedPage
            {post}
        </div>
    )
}

export default FeedPage;