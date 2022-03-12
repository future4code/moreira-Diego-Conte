import React from 'react';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { Route, Routes } from "react-router-dom";


const Router = ({ setRightButtonText, selectedPost, setSelectedPost }) => {
    return (
        <Routes>
            <Route path='/' element={<FeedPage setSelectedPost={setSelectedPost}/>} />
            <Route path='/post/:id' element={<PostPage selectedPost={selectedPost}/>} />
            <Route path='/login' element={<LoginPage setRightButtonText={setRightButtonText} />} />
            <Route path='/cadastro' element={<SignUpPage setRightButtonText={setRightButtonText} />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default Router;