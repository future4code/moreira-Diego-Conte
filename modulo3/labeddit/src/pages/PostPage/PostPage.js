import React, { useState } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import UserIcon from '@mui/icons-material/AccountCircle';
import { useParams } from "react-router-dom";
import { CommentsForm } from './CommentsForm';
import { CardComment } from './cardComment';
import {ContainerPost, Post} from './styled';
import { Pagination, Box } from '@mui/material';

const PostPage = ({ selectedPost }) => {
    useProtectedPage()
    const { id } = useParams();
    const [page, setPage] = useState(1);

    const onChangePage = (event, value) => {
        setPage(value)
    }

    return (
        <ContainerPost>
            {selectedPost &&
            <Post>
                <p className='user'> <UserIcon color='success'/> {selectedPost.username}</p>
                <h1 className='title'>{selectedPost.title}</h1>
                <h2 className='message'>{selectedPost.body}</h2>
                {selectedPost.commentCount < 1 ? <p className="comments">Nenhum comentário</p> :
                    selectedPost.commentCount == 1 ?
                        <p className="comments"> {selectedPost.commentCount} comentário</p> :
                        <p className="comments"> {selectedPost.commentCount} comentários</p>}
            </Post>}
            <CommentsForm id={id} />
            <CardComment page={page}/>

            <Box m={5} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Pagination count={100} variant="outlined" color="secondary" onChange={onChangePage} />
            </Box>

        </ContainerPost>
    )
}

export default PostPage;