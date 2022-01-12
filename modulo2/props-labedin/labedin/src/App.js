import React from 'react';
import './App.css';
import iconeMinisterioFr from './img/Min.png';
import iconeDiego from './img/Diego.png';
import iconeArrow from './img/arrow.png';
import iconeFacebook from './img/facebook.png';
import iconeTwitter from './img/twitter.png';
import iconeMail from './img/mail.png';
import iconeEndereco from './img/adress.png';
import iconeUfsc from './img/UFSC.png';
import iconeUniasselvi from './img/Uniasselvi.png';
import iconeLabenu from './img/Labenu.gif';
import iconeWhats from './img/whatsapp.png'
import ButtonImage from './components/ImagemButton'
import CardPequeno from './components/CardPequeno'
import CardGrande from './components/CardGrande';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={iconeDiego}
          nome="Diego Conte"
          descricao="A comunicação e o foco na resolução de problemas me são caros. Neste contexto e sendo 
          programador em formação, busco desenvolver programas que atendam aos requisitos dos usuários 
          com eficiência, eficácia, segurança e satisfação."
        />

        <ButtonImage
          imagem={iconeArrow}
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem={iconeMail}
        informacao="diegocomte@gmail.com"
      />

      <CardPequeno
        imagem={iconeWhats}
        informacao="49 9 8400 0593"
      />

      <CardPequeno
        imagem={iconeEndereco}
        informacao="Rua Florianópolis 815D, Apartamento 102, Bloco B. Bairro Jardim Itália, Chapecó - Santa Catarina - CEP 89814-045"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={iconeLabenu}
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem={iconeUniasselvi}
          nome="UNIASELVI"
          descricao="Analise e Desenvolvimento de Sistemas"
        />

        <CardGrande
          imagem={iconeUfsc}
          nome="UFSC"
          descricao="Letras e Literatura Francesa"
        />

        <CardGrande
          imagem={iconeMinisterioFr}
          nome="Ministère de l'Éducation Nationale"
          descricao="Professor de Língua, Cultura e História Lusófona."
        />
      </div>

      <div ImagemButton>
        <h2>Minhas redes sociais</h2>
        <ButtonImage
          imagem={iconeFacebook}
          texto="Facebook"
        />

        <ButtonImage
          imagem={iconeTwitter}
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
