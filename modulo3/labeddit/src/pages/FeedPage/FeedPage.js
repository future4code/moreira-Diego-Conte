import React, { useEffect, useState } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { NewPosts } from '../PostPage/PostForms';
import { useNavigate } from 'react-router-dom';
import { goToFeedPage, goToPostPage } from '../../routes/coordinator';
import { headers } from '../../services/headers';
import axios from 'axios';
// import Pagination from '../../pagination/pagination';

const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [posts, loading] = useRequestData(`${BASE_URL}posts?page=8`)
    // const [offset, setOffset] = useState(0);

    const votes = (idPost, body) => {
        axios.post(`${BASE_URL}posts/${idPost}/votes`, body, headers)
            .then((res) => {
                alert(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const deleteVotes = (idPost) => {
        axios.delete(`${BASE_URL}posts/${idPost}/votes`, headers)
        .then((res) => {
            alert('Voto deletado')
        })
        .catch((err) => {
            alert(`Houve um erro com sua requisição ${err.message}`)
        })
    }


    const post = loading ? <h1>Carregando....</h1> : posts && posts.map((post) => {
        return (
            <div key={post.id}>
                <div
                    onClick={() => goToPostPage(navigate, post.id)}>
                    <p>{post.username} - Criado em {post.createdAt}</p>
                    <h2>{post.title}</h2>
                    <h3>{post.body}</h3>
                    {post.commentCount < 1 ?
                        <p>Nenhum comentário</p> :
                        post.commentCount == 1 ?
                            <p>{post.commentCount} comentário</p> :
                            <p>{post.commentCount} comentários</p>}
                    <p>{post.voteSum}</p>
                </div>
                <button onClick={() => votes(post.id, { direction: -1 })}> Negativo</button>
                <button onClick={() => votes(post.id, { direction: 1 })}> Positivo</button>
                <button onClick={() => deleteVotes(post.id)}> Deletar voto</button>
                <hr></hr>
            </div>
        )
    })

    return (
        <div>
            <NewPosts navigate={navigate} />
            {post}
            {/* <Pagination
                limit={10}
                total={1600}
                offset={offset}
                setOffSet={setOffset} /> */}
        </div>
    )
}

export default FeedPage;