import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTripsPage, goToLoginPage } from "../Route/NavFunctions";
import { MainContainer, TextContainer, LoginButton } from '../Components/StyleHomePage';
import Button from '@mui/material/Button';
import { Header } from "../Components/Header";

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header />
      <TextContainer>
        <p>Viagem pra lá de outro mundo.</p>
        <p>Preço nada estratosférico.</p>
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => goToTripsPage(navigate)}>
          VIAJAR JÁ
        </Button>
      </TextContainer>
      <LoginButton>
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => goToLoginPage(navigate)}>
          Login
        </Button>
      </LoginButton>
    </MainContainer>
  );
}

export default Home;