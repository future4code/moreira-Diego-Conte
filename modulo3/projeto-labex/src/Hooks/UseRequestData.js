import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (url, body) => {

    const [data, setData] = useState()
    const [error, setError] = useState("")

    const getData = () => {
        axios.get(url, body)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
    }

    useEffect(() => {
        getData();
    }, [url]);

    return [data, error]
}

export default useRequestData