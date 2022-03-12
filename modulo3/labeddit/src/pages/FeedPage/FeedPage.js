import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { NewPosts } from './postForm/PostForms';
import { useNavigate } from 'react-router-dom';
import { CardPost } from './cardPost/cardPost';
import { MainContainerFeedPage } from './styledFeedPage';
import { Pagination, Box } from '@mui/material';
import {useState} from 'react';


const FeedPage = ({setSelectedPost}) => {
    useProtectedPage();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const onChangePage = (event, value) => {
        setPage(value)
    }

    return (
        <MainContainerFeedPage>
            <NewPosts navigate={navigate} />
            <CardPost page={page} setSelectedPost ={setSelectedPost} />

            <Box m={5} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Pagination count={1730} variant="outlined" color="secondary" onChange={onChangePage} />
            </Box>
        </MainContainerFeedPage>
    )
}

export default FeedPage;