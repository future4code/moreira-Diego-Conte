import LoadingDots from '../../components/LoadingIcon/loadingIcon';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { useParams } from 'react-router-dom';


export const CardComment = () => {
    const { id } = useParams();
    const [comments, loading] = useRequestData(`${BASE_URL}posts/${id}/comments?size=100`)

    const comment = comments && comments.length > 0 ?
        comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h1>{comment.username}</h1>
                    <p>{comment.body}</p>
                </div>
            )
        }) : loading ? <LoadingDots /> : <h1>Sem comentários</h1>

    return comment
}