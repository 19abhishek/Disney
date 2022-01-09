import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1622816691848-81646fbecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  h4 {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  border: 0.3rem solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: color(249, 249, 249, 0.9);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
