import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = (url) => {

    const [data, setData] = useState()
    const [error, setError] = useState("")

    const getData = () => {
        axios.get(url)
            .then((res) => {
                setData(res.data.trips)
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