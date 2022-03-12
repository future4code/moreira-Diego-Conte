

export const goToFeedPage = (navigate) => {
    navigate('/')
};

export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
};

export const goToLoginPage = (navigate) => {
    navigate('/login')
};

export const goToSignUpPage = (navigate) => {
    navigate('/cadastro')
};