import logo from './logo.svg';
import './App.css';
import logoYouTube from './img/youtube.png';
import loupe from './img/loupe.png';
import voice from './img/voice.png';
import camera from './img/camera.png';
import dotsMenu from './img/dots-menu.png';
import bell from './img/bell.png';
import user from './img/user.png';
import inicio from './img/Inicio.png';
import explorar from './img/Explorar.png';
import abonnements from './img/abonnements.png';
import biblioteca from './img/biblioteca.png';
import historico from './img/historico.png';

function App() {

  const titulos = "Título do vídeo"
  const subtitulos = "Descrição: en attendant Godot."
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="App">
      <div className="tela-inteira">
        <header>
          <div className="logoETitulo">
            <img className="logoYouTube" src={logoYouTube} alt="Logo Youtube" />
            <h1>LabTube</h1>
          </div>
          <div className="inputLoupe">
            <input type="text" placeholder="Buscar" id="campoDeBusca" />
            <button className="lupa"> <img className="icones-header" src={loupe} alt="Ícone de lupa" /> </button>
          </div>
          <button className="voice"> <img className="icones-header" src={voice} alt="Ícone de microfone" /> </button>
          <div className="containerIconesDireitaMic">
            <button className="conjuntoDireitaMic"> <img className="icones-header" src={camera} alt="Ícone de câmera" /> </button>
            <button className="conjuntoDireitaMic"> <img className="icones-header" src={dotsMenu} alt="Ícone de menu" /> </button>
            <button className="conjuntoDireitaMic"> <img className="icones-header" src={bell} alt="Ícone de sininho" /> </button>
            <button className="conjuntoDireitaMic"> <img className="icones-header" src={user} alt="Ícone de usuário" /> </button>
          </div>
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical"> <img className="icones-lateral" src={inicio} alt="Ícone de casa" /> Início</li>
              <li className="botoes-meunu-vertical"> <img className="icones-lateral" src={explorar} alt="Ícone de casa" />Explorar</li>
              <li className="botoes-meunu-vertical"> <img className="icones-lateral" src={abonnements} alt="Ícone de casa" />Inscrições</li>
              <li className="botoes-meunu-vertical"> <img className="icones-lateral" src={biblioteca} alt="Ícone de casa" />Biblioteca</li>
              <li className="botoes-meunu-vertical"> <img className="icones-lateral" src={historico} alt="Ícone de casa" />Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="Balão erguendo-se ao céu" />
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="Flores vermelhas" />
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="Pai carrega filho na praia" />
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="Deck sob o lago em dia de neblina com montanha ao fundo" />
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="Frames dispostos um sob os outros"></img>
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="Montanhas com neve" />
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="Golden Gate Bridge, São Francisco - EUA" />
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="Caminho coberto de folhas vermelhas em outuno com neblina" />
              <h4>{titulos}</h4>
              <h6>{subtitulos}</h6>
            </div>
          </section>
        </main>

        {/* <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer> */}
      </div>
    </div>
  );
}

export default App;
