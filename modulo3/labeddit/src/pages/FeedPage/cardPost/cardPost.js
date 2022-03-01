import useRequestData from "../../../hooks/useRequestData";
import LoadingDots from "../../../components/LoadingIcon/loadingIcon";
import UserIcon from '@mui/icons-material/AccountCircle';
import ArrowUp from '@mui/icons-material/ArrowUpward';
import ArrowDown from '@mui/icons-material/ArrowDownward';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/urls";
import { goToPostPage } from "../../../routes/coordinator";
import { deleteVotesPosts } from "../../../services/requestsTypeDelete";
import { firstVotePosts } from "../../../services/requestsTypePost";
import { useEffect, useState } from "react";
import { ContainerButtons, StyledCardPost, StylePost, ContainerPost } from './styledCardPost';
import { Zoom } from '@mui/material';
import { changeVotePosts } from "../../../services/requestsTypePut";


export const CardPost = ({ page, setSelectedPost }) => {
    const navigate = useNavigate();
    const [posts, loading] = useRequestData(`${BASE_URL}posts?page=${page}&size=20`);

    const onClickSetPostPage = (post, id) => {
        setSelectedPost(post)
        goToPostPage(navigate, id)
    }

    const onClickArrowDown = (id, userVote) => {
        const body = { direction: -1 }
        if (userVote === null) {
            firstVotePosts(id, body)
        } else if (userVote === -1) {
            deleteVotesPosts(id)
        } else {
            changeVotePosts(id, body)
        }
    }

    const onClickArrowUp = (id, userVote) => {
        const body = { direction: 1 }
        if (userVote === null) {
            firstVotePosts(id, body)
        } else if (userVote === 1) {
            deleteVotesPosts(id)
        } else {
            changeVotePosts(id, body)
        }
    }


    const Card = () => {
        const mapedCard = loading ? <LoadingDots /> : posts && posts.map((post) => {
            const colorDown = post.userVote < 0 && 'error' || 'secondary'
            const colorUp = post.userVote > 0 && 'success' || 'secondary'

            return (
                <Zoom key={post.id} in style={{ transitionDelay: post ? '300ms' : '0ms' }}>
                    <StyledCardPost>
                        <StylePost>
                            <ContainerButtons>
                                <ArrowDown
                                    color={colorDown}
                                    onClick={() => onClickArrowDown(post.id, post.userVote)} />
                                {post.voteSum || 0}
                                <ArrowUp
                                    color={colorUp}
                                    onClick={() => onClickArrowUp(post.id, post.userVote)} />
                            </ContainerButtons>



                            <ContainerPost onClick={() => onClickSetPostPage(post, post.id)}>
                                <p className="user"> <UserIcon color="success"/> {post.username}</p>
                                <h1 className="title">{post.title}</h1>
                                <h2 className="message">{post.body}</h2>
                                {post.commentCount < 1 ? <p className="comments">Nenhum comentário</p> :
                                    post.commentCount === '1' ?
                                        <p className="comments"> {post.commentCount} comentário</p> :
                                        <p className="comments"> {post.commentCount} comentários</p>}
                            </ContainerPost>
                        </StylePost>
                    </StyledCardPost>
                </Zoom >
            )
        })

        return <>{mapedCard}</>
    }
    return <Card />
}