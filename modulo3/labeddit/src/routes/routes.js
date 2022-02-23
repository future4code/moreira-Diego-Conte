import React from 'react';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { Route, Routes } from "react-router-dom";


const Router = ({ setRightButtonText }) => {
    return (
        <Routes>
            <Route path='/' element={<FeedPage />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='/login' element={<LoginPage setRightButtonText={setRightButtonText} />} />
            <Route path='/cadastro' element={<SignUpPage setRightButtonText={setRightButtonText} />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default Router;