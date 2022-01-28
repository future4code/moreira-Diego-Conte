import React from 'react';
import { ContainerPlaylistDetails } from './Style';

export default class PlaylistsDetailsPage extends React.Component{
    state = {

    }

    render(){
        return(
            <ContainerPlaylistDetails>
                <li>{this.props.name}</li>
                <button onClick={this.props.gotToPlaylistsPage}>Voltar às playlists</button>
            </ContainerPlaylistDetails>
        )
    }
}