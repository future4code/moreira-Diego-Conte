import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../Constants/Header';
import { URL_Base } from "../Constants/URL_Base";
import styled from 'styled-components';

const MainContainer = styled.div` 
display: flex;
flex-direction: column;
margin-top: 20px;
width: 360px;
height: 430px;
justify-content: flex-end;
align-items: center;
background-size: 360px;
background-position: center;
background-repeat: repeat-y;
box-shadow: 0 0 10px black;
`
const ProfileIntro = styled.h1`
color: white;
margin: 0px 0px;
`
const ProfileBio = styled.p`
color: white;
margin: 10px 10px;
text-align: center;
`


function Home() {
    const [profiles, setProfiles] = useState([])
    const [myChoices, setMyChoices] = useState([])


    useEffect(() => {
        GetProfileToChose()
    }, [])

    console.log(profiles)

    const GetProfileToChose = () => {
        axios.get(`${URL_Base}person`)
            .then((res) => {
                setProfiles(res.data.profile)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    // const ChoosePerson =() => {
    //     axios.post(`${URL_Base}choose-person`, body, header)
    //     .then((res) => {
    //         setMyChoices(res.data)
    //     })
    //     .catch((err)=> {
    //         alert(err.response.data.message)
    //     })
    // }

    // const ClearMatches = () => {
    //     axios.put(`${URL_Base}clear`, Header)
    // }

    return (
        <MainContainer
        className='Img'
            style={{
                backgroundImage: `url(${profiles.photo})`,
                borderRadius: 6,
            }}>
            <ProfileIntro>{profiles.name}, {profiles.age}</ProfileIntro>
            <ProfileBio>{profiles.bio}</ProfileBio>
        </MainContainer>

    )
}

export default Home