import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

function Detail() {
  const { id } = useParams();
  const [currMovie, setCurrMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      const result = data.results;
      console.log(result);
      if (result) {
        // console.log(result[0].id + " " + id);
        // console.log(+result[0].id === +id);
        setCurrMovie(result.filter((movie) => movie.id === +id));
      }
    };
    getMovie();
  }, []);
  console.log(currMovie);

  return (
    <Container>
      {currMovie && (
        <div>
          <Background>
            <img src={`${IMG_PATH + currMovie.backdrop_path}`} />
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
          </Background>
          <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>Play</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>2018 7m Family, Fantasy, Fiction</SubTitle>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            magnam eligendi porro voluptatibus maxime laudantium ea excepturi
            officia praesentium iusto, vero fugit earum alias, assumenda
            facilis, autem accusamus eaque quia.
          </Description>
        </div>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.9;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 17rem;
  width: 35vw;
  min-width: 20rem;
  margin-top: 6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 2.4rem;
  padding: 0 2.4rem;
  margin-right: 2.2rem;
  letter-spacing: 1.3px;
  display: flex;
  align-items: center;
  height: 5.6rem;
  background: rgb(249, 249, 249);
  border: none;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 4.4rem;
  height: 4.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.6rem;
  border-radius: 50%;
  border 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    font-size: 3rem;
    color:white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  backfround: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 2.4rem;
  min-height: 2rem;
  margin-top: 2.6rem;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 2rem;
  margin-top: 1.6rem;
  color: rgb(249, 249, 249);
`;
