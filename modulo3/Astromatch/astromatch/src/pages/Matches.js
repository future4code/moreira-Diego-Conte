import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL_Base } from "../Constants/URL_Base";
import styled from "styled-components";

const MatchContainer = styled.div` 
display: flex;
align-items: center;
width: 380px;
height: 65px;
margin: 10px 0px;
border: 1px solid white;
border-radius: 10px;
:hover{border: 1px solid lightgray; background-color: #f1f1f1; cursor: pointer;}
:active{border: 1px solid gray; background-color: #bebebe; cursor: pointer;}
`
const ContainerImage = styled.div` 
margin: 0px 10px;
width: 50px;
height: 50px;
border-radius: 50%;
background-size: 50px;
border: 1px solid black;
`


function Matches() {

    const [matches, setMatches] = useState([])
    console.log(matches)
    useEffect(() => {
        GetAllMatches()
    }, [])

    const GetAllMatches = () => {
        axios.get(`${URL_Base}matches`)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const match = matches.map((match) => {
        return (
            <MatchContainer key={match.id}>
                <ContainerImage
                    style={{
                        backgroundImage: `url(${match.photo})`
                    }}/>
                    <p>{match.name}</p>
            </MatchContainer>
        )
    })

    return (
        <div>
            {match}
        </div>
    )
}

export default Matches;