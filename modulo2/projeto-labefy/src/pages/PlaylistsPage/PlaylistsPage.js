import React from 'react';
import axios from 'axios';
import { baseUrl } from '../../constants/urls';
import { headers } from '../../constants/inputsApi';

export default class PlaylistsPage extends React.Component{
    
    state = {
        inputUser: "",
        playlists: [],
    }

    onChangeInputUser = (e) => {
        this.setState({inputUser: e.target.value})
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    createPlaylists = () => {
        const body = {name: this.state.inputUser}

        axios.post(baseUrl, body, headers)
        .then((res) => {
            alert(`A playlist ${this.state.inputUser} foi criada`)
            this.setState({inputUser: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    getAllPlaylists = () => {
        axios.get(baseUrl, headers)
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }


    render(){
        const namePlaylist = this.state.playlists.map((playlist) => {
            return <li key={playlist.id}> {playlist.name} </li>
        }) 

        return(
            <div>
                <p>Página das playlists</p>
                <input
                type="text"
                placeholder='Crie uma playlist'
                value={this.state.inputUser}
                onChange={this.onChangeInputUser}
                />
                <button onClick={this.createPlaylists}>Criar</button>
            
                {namePlaylist}
            
            </div>
        )
    }
}