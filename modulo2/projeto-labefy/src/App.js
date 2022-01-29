import React from 'react';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import PlaylistsDetailsPage from './pages/PlaylistDetailsPage/PlaylistDetailsPage';
import { ContainerApp, MainCardApp, MainImage, ContainerLogo } from './StyleApp';
import Music from './assets/Music.gif';

class App extends React.Component {

  state = {
    currentPage: "PlaylistsPage",
    idPlaylistClicked: "",
    playlistName: "",
  }

  goToDetailsPlaylistPage = (id, name) => {
    this.setState({ currentPage: "PlaylistsDetailsPage", idPlaylistClicked: id, playlistName: name })
  }

  gotToPlaylistsPage = () => {
    this.setState({ currentPage: "PlaylistsPage", idPlaylistClicked: "", playlistName: "" })
  }

  changePages = () => {
    switch (this.state.currentPage) {
      case "PlaylistsPage":
        return <PlaylistsPage goToDetailsPlaylistPage={this.goToDetailsPlaylistPage} />
      case "PlaylistsDetailsPage":
        return <PlaylistsDetailsPage gotToPlaylistsPage={this.gotToPlaylistsPage} id={this.state.idPlaylistClicked} name={this.state.playlistName} />
      default:
        <PlaylistsPage goToDetailsPlaylistPage={this.goToDetailsPlaylistPage} />
    }
  }

  render() {

    return (
      <ContainerApp>
        <MainCardApp>{this.changePages()}</MainCardApp>
        <MainImage><img src={Music} alt='Imagem de partitura em movimento'></img></MainImage>
      </ContainerApp>

    )
  }
}

export default App