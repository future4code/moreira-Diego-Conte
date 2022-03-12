import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goToFeedPage } from "../routes/coordinator";


const useUnprotectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const tokenLabEddit = localStorage.getItem('tokenLabEddit')
        if (tokenLabEddit) {
            goToFeedPage(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage;