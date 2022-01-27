import React from 'react';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import PlaylistsDetailsPage from './pages/PlaylistDetailsPage/PlaylistDetailsPage';

class App extends React.Component {

  state = {
    currentPage: "PlaylistsPage"
  }

  changePages = () => {
    switch (this.state.currentPage) {
      case "PlaylistsPage":
        return <PlaylistsPage/>
      case "PlaylistsDetailsPage":
        return <PlaylistsDetailsPage/>
      default:
        <PlaylistsPage/>
    }
  }

  // clickToSwipePages = () => {
  //   if()
  // }

  render() {

    return (
      <div>
        {this.changePages()}

        <button>Navegar</button>

      </div>

    )
  }
}

export default App