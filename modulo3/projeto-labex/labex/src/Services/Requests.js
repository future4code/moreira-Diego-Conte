import axios from "axios";
import { useEffect, useState } from "react";


export const sendApplication = (x,x,x) => {
    axios.post(url)
        .then((res) => {
            setData(res.data.trips)
        })
        .catch((err) => {
            setError(err)
        })
}
