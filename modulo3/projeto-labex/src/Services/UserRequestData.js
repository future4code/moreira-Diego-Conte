import axios from "axios";
import { useEffect, useState } from "react";


export function UserRequestData(url) {

    const [data, setData] = useState()
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
    }, [url])

    return [data, error]
}