import React from 'react';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import PlaylistsDetailsPage from './pages/PlaylistDetailsPage/PlaylistDetailsPage';

class App extends React.Component {

  state = {
    currentPage: "PlaylistsPage",
    idPlaylistClicked: "",
    playlistName: "",
  }

  goToDetailsPlaylistPage = (id, name) => {
    this.setState({currentPage: "PlaylistsDetailsPage", idPlaylistClicked: id, playlistName: name})
  }

  gotToPlaylistsPage = () => {
    this.setState({currentPage: "PlaylistsPage", idPlaylistClicked: "", playlistName: ""})
  }

  changePages = () => {
    switch (this.state.currentPage) {
      case "PlaylistsPage":
        return <PlaylistsPage goToDetailsPlaylistPage={this.goToDetailsPlaylistPage} />
      case "PlaylistsDetailsPage":
        return <PlaylistsDetailsPage gotToPlaylistsPage={this.gotToPlaylistsPage} id={this.state.idPlaylistClicked} name={this.state.playlistName}/>
      default:
        <PlaylistsPage goToDetailsPlaylistPage={this.goToDetailsPlaylistPage} />
    }
  }

  render() {

    return (
      <div>
        {this.changePages()}
      </div>

    )
  }
}

export default App