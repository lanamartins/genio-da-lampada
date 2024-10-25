import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  
}

body{
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
      background-image: url(" url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/imagem%20do%20palacio.png?raw=true")
  }

}

`;
const Titulo = styled.h1`
  color: white;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-style: normal;
  text-align: center;

  @media (max-width: 600px);
`;

const Button = styled.button`
  height: 8vh;
  color: white;
  font-size: 30px;
  font-family: "Sevillana", cursive;
  background-color: #007bff;
  border-radius: 30px;
  text-align: center;
  display: flex;
  position: relative;
  align-items: center;
  margin: 20px auto;
  padding: 10px 20px;

  @media (width: 600px);
  background-color: #b74794;
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
      />
      <Button onClick={trocarLampada}>Clique aqui</Button>
    </main>
  );
}
