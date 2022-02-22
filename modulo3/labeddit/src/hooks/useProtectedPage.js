import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../routes/coordinator";


const useProtectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const tokenLabEddit = localStorage.getItem('tokenLabEddit')
        if (!tokenLabEddit) {
            goToLoginPage(navigate)
        }
    }, [navigate])
}

export default useProtectedPage;