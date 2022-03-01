import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import UserIcon from '@mui/icons-material/AccountCircle';
import { useParams } from "react-router-dom";
import { CommentsForm } from './CommentsForm';
import { CardComment } from './cardComment';
import {ContainerPost, Post} from './styled';

const PostPage = ({ selectedPost }) => {
    useProtectedPage()
    const { id } = useParams();

    return (
        <ContainerPost>
            <Post>
                <p className='user'> <UserIcon color='success'/> {selectedPost.username}</p>
                <h1 className='title'>{selectedPost.title}</h1>
                <h2 className='message'>{selectedPost.body}</h2>
                {selectedPost.commentCount < 1 ? <p className="comments">Nenhum comentário</p> :
                    selectedPost.commentCount == 1 ?
                        <p className="comments"> {selectedPost.commentCount} comentário</p> :
                        <p className="comments"> {selectedPost.commentCount} comentários</p>}
            </Post>
            <CommentsForm id={id} />
            <CardComment />
        </ContainerPost>
    )
}

export default PostPage;