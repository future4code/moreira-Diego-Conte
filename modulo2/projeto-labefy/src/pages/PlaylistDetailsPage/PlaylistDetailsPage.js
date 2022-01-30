import axios from 'axios';
import React from 'react';
import { ContainerPlaylistDetails } from './StylePlaylistDetails';
import { baseUrl } from '../../constants/urls';
import { headers } from '../../constants/inputsApi';
import {
    ContainerIndividualTracks,
    ContainerTracksRender,
    InputsPlayslistDetailsPage,
    PlaylistNameDetailPage
} from './StylePlaylistDetails';

export default class PlaylistsDetailsPage extends React.Component {
    state = {
        inputNameSong: "",
        inputNameArtist: "",
        inputUrlSong: "",
        playlistTracks: [],
    }

    onChangeInputNameSong = (e) => {
        this.setState({ inputNameSong: e.target.value })
    }

    onChangeInputNameArtist = (e) => {
        this.setState({ inputNameArtist: e.target.value })
    }

    onChangeInputUrlSong = (e) => {
        this.setState({ inputUrlSong: e.target.value })
    }

    enterToSubmit = (e) => {
        if (e.key === "Enter") {
            this.addTrackToPlaylist()
        }
    }

    componentDidMount = () => {
        this.getPlaylistTracks()
    }

    componentDidUpdate = (prevPros, prevState) => {
        if (this.state.playlistTracks !== prevState) {
            this.getPlaylistTracks()
        }
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.inputNameSong,
            artist: this.state.inputNameArtist,
            url: this.state.inputUrlSong
        }

        axios.post(`${baseUrl}${this.props.id}/tracks`, body, headers)
            .then((res) => {
                alert(`${this.state.inputNameSong} adicionada à playlist.`)
                this.setState({ inputNameSong: "", inputNameArtist: "", inputUrlSong: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    getPlaylistTracks = () => {
        axios
            .get(`${baseUrl}${this.props.id}/tracks`, headers)
            .then((res) => {
                this.setState({ playlistTracks: res.data.result.tracks })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    deleteTrack = (name, id) => {
        if (window.confirm(`Deseja exluir '${name}' definitivamente?`)) {
            axios
                .delete(`${baseUrl}${this.props.id}/tracks/${id}`, headers)
                .then((res) => {
                    this.getPlaylistTracks()
                    alert("Música apagada com sucesso.")
                })
                .catch((err) => {
                    alert(err.response.data)
                })
        } else {
            alert("Nenhuma playlist foi apagada.")
        }
    }

    render() {
        const tracks = this.state.playlistTracks.map((track) => {
            return <ContainerTracksRender key={track.id}>
                <li>
                    <h1>
                        <p onClick={() => this.deleteTrack(track.name, track.id)}> ... </p>
                        Música: {track.name} |
                        Artista: {track.artist}
                    </h1>
                    <audio src={track.url} controls loop></audio>
                </li>
            </ContainerTracksRender>
        })

        return (
            <ContainerPlaylistDetails>
                <PlaylistNameDetailPage>{this.props.name}</PlaylistNameDetailPage>
                <ContainerIndividualTracks>
                    {tracks}
                </ContainerIndividualTracks>
                <InputsPlayslistDetailsPage>
                    <details>
                        <summary>Adicionar músicas à playlist</summary>
                        <input
                            type="text"
                            placeholder='Nome da música'
                            value={this.state.inputNameSong}
                            onChange={this.onChangeInputNameSong}
                            onKeyDown={this.enterToSubmit}
                        />

                        <input
                            type="text"
                            placeholder='Artista'
                            value={this.state.inputNameArtist}
                            onChange={this.onChangeInputNameArtist}
                            onKeyDown={this.enterToSubmit}
                        />

                        <input
                            type="text"
                            placeholder='Link'
                            value={this.state.inputUrlSong}
                            onChange={this.onChangeInputUrlSong}
                            onKeyDown={this.enterToSubmit}
                        />
                        <button onClick={this.addTrackToPlaylist}>▶</button>
                    </details>
                </InputsPlayslistDetailsPage>
                <button onClick={this.props.gotToPlaylistsPage}>
                    ◀ Playlists
                </button>
            </ContainerPlaylistDetails >
        )
    }
}