import LoadingDots from '../../components/LoadingIcon/loadingIcon';
import useRequestData from '../../hooks/useRequestData';
import UserIcon from '@mui/icons-material/AccountCircle';
import ArrowUp from '@mui/icons-material/ArrowUpward';
import ArrowDown from '@mui/icons-material/ArrowDownward';
import React, { useState } from 'react';
import { BASE_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import { ContainerButtons, ContainerPost, StyledCardPost, StylePost } from '../FeedPage/cardPost/styledCardPost';
import { firstVoteComments } from '../../services/requestsTypePost';
import { deleteVotesComments } from '../../services/requestsTypeDelete';
import { changeVoteComments } from '../../services/requestsTypePut';
import {ContainerComment} from './styled'


export const CardComment = ({ page }) => {
    const { id } = useParams();
    const [reload, setReload] = useState(false);
    const [comments, loading] = useRequestData(`${BASE_URL}posts/${id}/comments?page=${page}&size=1`);
    let comment; comments && comments.map((c) => { comment = c })


    const onClickArrowDown = (id, userVote) => {
        const body = { direction: -1 }
        if (userVote === null) {
            firstVoteComments(id, body)
            comment.userVote = -1
            setReload(!reload)
        } else if (userVote === -1) {
            deleteVotesComments(id)
            comment.userVote = null
            setReload(!reload)
        } else {
            changeVoteComments(id, body)
            comment.userVote = -1
            setReload(!reload)
        }
    }

    const onClickArrowUp = (id, userVote) => {
        const body = { direction: 1 }
        if (userVote === null) {
            firstVoteComments(id, body)
            comment.userVote = 1
            setReload(!reload)
        } else if (userVote === 1) {
            deleteVotesComments(id)
            comment.userVote = null
            setReload(!reload)
        } else {
            changeVoteComments(id, body)
            comment.userVote = 1
            setReload(!reload)
        }
    }

    const Comment = () => {
        const Comment = loading ? <LoadingDots /> : comment &&
            <div key={comment.id}>
                <ContainerComment>
                    <StylePost>
                        <ContainerButtons>
                            <ArrowDown
                                color={comment.userVote === -1 && 'error' || 'secondary'}
                                onClick={() => onClickArrowDown(comment.id, comment.userVote)} />
                            {comment.voteSum || 0}
                            <ArrowUp
                                color={comment.userVote === 1 && 'success' || 'secondary'}
                                onClick={() => onClickArrowUp(comment.id, comment.userVote)} />
                        </ContainerButtons>

                        <ContainerPost key={comment.id}>
                            <p className='user'> <UserIcon /> {comment.username}</p>
                            <h3 className='message'>{comment.body}</h3>
                        </ContainerPost>
                    </StylePost>
                </ContainerComment>
            </div>
        return <>{Comment}</>
    }
    return <Comment />
}