import axios from "axios";
import { useEffect, useState } from "react";
import {token} from '../services/token'


const useRequestData = (url, body) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const headers = { headers: { Authorization: token } }

    const getData = () => {
        setLoading(true)
        axios.get(url, headers)
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                alert(`Houve um erro com sua requisição: ${err.message}`)
                setLoading(false)
            })
    }

    useEffect(() => {
        getData();
    }, [url]);

    return [data, loading]
}

export default useRequestData 