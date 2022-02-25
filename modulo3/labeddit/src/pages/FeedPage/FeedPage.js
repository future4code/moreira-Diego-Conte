import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { NewPosts } from './postForm/PostForms';
import { useNavigate } from 'react-router-dom';
import { CardPost } from './cardPost/cardPost';
import { MainContainerFeedPage } from './styledFeedPage';

const FeedPage = () => {
    useProtectedPage();
    const navigate = useNavigate();

    return (
        <MainContainerFeedPage>
            <NewPosts navigate={navigate} />
            <CardPost />
        </MainContainerFeedPage>
    )
}

export default FeedPage;