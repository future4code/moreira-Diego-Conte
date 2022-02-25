import useRequestData from "../../../hooks/useRequestData";
import LoadingDots from "../../../components/LoadingIcon/loadingIcon";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/urls";
import { goToPostPage } from "../../../routes/coordinator";
import { deleteVotesPosts } from "../../../services/requestsTypeDelete";
import { firstVotePosts } from "../../../services/requestsTypePost";
import { Arrow, ContainerButtons, StyledCardPost } from './styledCardPost';

export const CardPost = () => {

    const [posts, loading] = useRequestData(`${BASE_URL}posts?size=200`)
    const navigate = useNavigate();

    const card = loading ? <LoadingDots /> : posts && posts.map((post) => {
        return (
            <StyledCardPost key={post.id}>
                <ContainerButtons>
                    <Arrow onClick={() => firstVotePosts(post.id, { direction: -1 })}> ⬇ </Arrow>
                    {post.voteSum}
                    <Arrow onClick={() => firstVotePosts(post.id, { direction: 1 })}> ⬆ </Arrow>
                    {/* <button onClick={() => deleteVotesPosts(post.id)}> Deletar voto</button> */}
                </ContainerButtons>

                <div onClick={() => goToPostPage(navigate, post.id)}>
                    <p>{post.username} - Criado em {post.createdAt}</p>
                    <h2>{post.title}</h2>
                    <h3>{post.body}</h3>
                    {post.commentCount < 1 ? <p>Nenhum comentário</p> :
                        post.commentCount == 1 ?
                            <p>{post.commentCount} comentário</p> :
                            <p>{post.commentCount} comentários</p>}
                </div>
            </StyledCardPost>
        )
    })
    return <>{card}</>
}