import LoadingDots from '../../components/LoadingIcon/loadingIcon';
import useRequestData from '../../hooks/useRequestData';
import UserIcon from '@mui/icons-material/AccountCircle';
import ArrowUp from '@mui/icons-material/ArrowUpward';
import ArrowDown from '@mui/icons-material/ArrowDownward';
import { BASE_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import { ContainerButtons, ContainerPost, StyledCardPost, StylePost } from '../FeedPage/cardPost/styledCardPost';
import { firstVoteComments } from '../../services/requestsTypePost';
import { deleteVotesComments } from '../../services/requestsTypeDelete';
import { changeVoteComments } from '../../services/requestsTypePut';


export const CardComment = () => {
    const { id } = useParams();
    const [comments, loading] = useRequestData(`${BASE_URL}posts/${id}/comments?size=100`);

    const onClickArrowDown = (id, userVote) => {
        const body = { direction: -1 }
        if (userVote === null) {
            firstVoteComments(id, body)
        } else if (userVote === -1) {
            deleteVotesComments(id)
        } else {
            changeVoteComments(id, body)
        }
    }

    const onClickArrowUp = (id, userVote) => {
        const body = { direction: 1 }
        if (userVote === null) {
            firstVoteComments(id, body)
        } else if (userVote === 1) {
            deleteVotesComments(id)
        } else {
            changeVoteComments(id, body)
        }
    }

    const FuncaoComment = () => {
        const comment = comments && comments.length > 0 ?
            comments.map((comment) => {
                const colorDown = comment.userVote < 0 && 'error' || 'secondary'
                const colorUp = comment.userVote > 0 && 'success' || 'secondary'
                return (
                    <div key={comment.id}>
                        <StyledCardPost>
                            <StylePost>
                                <ContainerButtons>
                                    <ArrowDown
                                        color={colorDown}
                                        onClick={() => onClickArrowDown(comment.id, comment.userVote)} />
                                    {comment.voteSum || 0}
                                    <ArrowUp
                                        color={colorUp}
                                        onClick={() => onClickArrowUp(comment.id, comment.userVote)} />
                                </ContainerButtons>

                                <ContainerPost key={comment.id}>
                                    <p className='user'> <UserIcon /> {comment.username}</p>
                                    <h3 className='message'>{comment.body}</h3>
                                </ContainerPost>
                            </StylePost>
                        </StyledCardPost>
                    </div>
                )
            }) : loading ? <LoadingDots /> : <h1>Nenhum comentário ainda. Inicie a discussão!</h1>
        return comment
    }
    return <FuncaoComment />
}