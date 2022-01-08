import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-starwars.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
`;

const Wrap = styled.div`
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid rgba(249, 249, 249, 0.1);
  box-shadow: inset 0 0 0 1px rgba(249, 249, 249, 0.1);
  transition: all 250ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0/ 80%) 0px 4rem 5.8rem -1.6rem,
      rgb(0 0 0 / 72%) 0rem 3rem 2.2rem -1rem;
  }
`;
