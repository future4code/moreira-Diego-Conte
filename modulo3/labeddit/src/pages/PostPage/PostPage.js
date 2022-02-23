import React from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {CommentsForm} from './CommentsForm';

const PostPage = () => {
    useProtectedPage()
    const { id } = useParams();
    const [comments, loading] = useRequestData(`${BASE_URL}posts/${id}/comments`)

    const comment = comments && comments.length > 0 ?
        comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h1>{comment.username}</h1>
                    <p>{comment.body}</p>
                </div>
            )
        }) : loading ? <h1>Carregando...</h1> : <h1>Sem comentários</h1>

    return (
        <div>
            <CommentsForm id={id}/>
            {comment}
        </div>
    )
}

export default PostPage;