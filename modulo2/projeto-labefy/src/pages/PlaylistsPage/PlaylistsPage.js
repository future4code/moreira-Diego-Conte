import React from 'react';
import axios from 'axios';
import { baseUrl } from '../../constants/urls';
import { headers } from '../../constants/inputsApi';
import { PlaylistRaw } from './StylePlaylistPage';
import Logo from '../../assets/Logo.png'
import { ContainerInputAddNewPlaylists, ContainerLogo } from './StylePlaylistPage';
import { ContainerPlaylistsRender, MainContainerPlaylistPage } from './StylePlaylistPage';

export default class PlaylistsPage extends React.Component {

    state = {
        inputUser: "",
        playlists: [],
    }

    onChangeInputUser = (e) => {
        this.setState({ inputUser: e.target.value })
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    componentDidUpdate = (prevPros, prevState) => {
        if (this.state.playlists !== prevState) {
            this.getAllPlaylists()
        }
    }

    createPlaylists = () => {
        const body = { name: this.state.inputUser }
        axios.post(baseUrl, body, headers)
            .then((res) => {
                alert(`A playlist '${this.state.inputUser}' foi criada.`)
                this.setState({ inputUser: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    getAllPlaylists = () => {
        axios.get(baseUrl, headers)
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    deletePlaylist = (name, id) => {
        if (window.confirm(`Deseja exluir a playlist '${name}' definitivamente?`)) {
            axios
                .delete(baseUrl + id, headers)
                .then((res) => {
                    this.getAllPlaylists()
                    alert("Playlist apagada com sucesso.")
                })
                .catch((err) => {
                    alert(err.response)
                })
        } else {
            alert("Nenhuma playlist foi apagada.")
        }
    }

    enterToSubmit = (e) => {
        if (e.key === "Enter") {
            this.createPlaylists()
        }
    }

    render() {
        const namePlaylist = this.state.playlists.map((playlist) => {
            return <ContainerPlaylistsRender key={playlist.id}>
                <button onClick={() => this.deletePlaylist(playlist.name, playlist.id)}>
                    ✘
                </button>
                <PlaylistRaw
                    onClick={() => this.props.goToDetailsPlaylistPage(playlist.id, playlist.name)}
                >
                    {playlist.name}
                </PlaylistRaw>
            </ContainerPlaylistsRender>
        })

        return (
            <MainContainerPlaylistPage>
                <ContainerLogo src={Logo}></ContainerLogo>

                <p>PLAYLISTS</p>

                {namePlaylist}

                <ContainerInputAddNewPlaylists>
                    <input
                        type="text"
                        placeholder='Crie uma playlist'
                        value={this.state.inputUser}
                        onChange={this.onChangeInputUser}
                        onKeyDown={this.enterToSubmit}
                    />
                    <button onClick={this.createPlaylists}>
                        Criar
                    </button>
                </ContainerInputAddNewPlaylists>
            </MainContainerPlaylistPage>
        )
    }
}