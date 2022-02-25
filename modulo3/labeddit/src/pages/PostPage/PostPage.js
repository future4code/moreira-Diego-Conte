import React from 'react';
import { useParams } from "react-router-dom";
import useProtectedPage from '../../hooks/useProtectedPage';
import { CommentsForm } from './CommentsForm';
import { CardComment } from './cardComment';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

const PostPage = () => {
    useProtectedPage()
    const { id } = useParams();
    const [comments, loading] = useRequestData(`${BASE_URL}posts/${id}/comments?size=100`)

    return (
        <div>
            <CommentsForm id={id} />
            <CardComment/>
        </div>
    )
}

export default PostPage;