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
    const [reload, setReload] = useState(false);
    const [posts, loading] = useRequestData(`${BASE_URL}posts?page=${page}&size=1`);
    let post; posts && posts.map((p) => {post = p})       

    const onClickSetPostPage = (post, id) => {
        setSelectedPost(post)
        goToPostPage(navigate, id)
    }

    const onClickArrowDown = (id, userVote) => {
        const body = { direction: -1 }
        if (userVote === null) {
            firstVotePosts(id, body)
            post.userVote = -1
            setReload(!reload)
        } else if (userVote === -1) {
            deleteVotesPosts(id)
            post.userVote = null
            setReload(!reload)
        } else {
            changeVotePosts(id, body)
            post.userVote = -1
            setReload(!reload)
        }
    }

    const onClickArrowUp = (id, userVote) => {
        const body = { direction: 1 }
        if (userVote === null) {
            firstVotePosts(id, body)
            post.userVote = 1
            setReload(!reload)
        } else if (userVote === 1) {
            deleteVotesPosts(id)
            post.userVote = null
            setReload(!reload)
        } else {
            changeVotePosts(id, body)
            post.userVote = 1
            setReload(!reload)
        }
    }


    const Card = () => {
        const mapedCard = loading ? <LoadingDots /> : post && 
            
                <Zoom key={post.id} in style={{ transitionDelay: post ? '300ms' : '0ms' }}>
                    <StyledCardPost>
                        <StylePost>
                            <ContainerButtons>
                                <ArrowDown
                                    color={post.userVote === -1 && 'error' || 'secondary'}
                                    onClick={() => onClickArrowDown(post.id, post.userVote)} />
                                {post.voteSum || 0}
                                <ArrowUp
                                    color={post.userVote === 1 && 'success' || 'secondary'}
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
            
        

        return <>{mapedCard}</>
    }

    useEffect(()=>{
        Card()
    },[Card, reload])
    
    return <Card />
}