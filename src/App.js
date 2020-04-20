import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Quote from "./components/Quote";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background: -moz-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [quote, setQuote] = useState({});

  const getQuote = () => {
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then((response) => response.json())
      .then((content) => setQuote(content[0]));
  };

  useEffect(() => {
    getQuote();
  }, [])
  return (
    <Container>

      <Quote quote={quote} />
      <Button onClick={() => getQuote()}>Obtener frase</Button>
    </Container>
  );
}

export default App;
