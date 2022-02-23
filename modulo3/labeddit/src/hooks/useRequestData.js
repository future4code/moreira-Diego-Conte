import axios from "axios";
import { useEffect, useState } from "react";
import {headers} from '../services/headers';


const useRequestData = (url) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

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