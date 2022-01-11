import React from "react";
import styled from "styled-components";
import { selectMovies } from "../movie/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setMovies } from "../movie/movieSlice";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  const [movieList, setMovieList] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      const result = data.results;
      setMovieList(data.results);
      dispatch(setMovies(result));
    };
    getMovie();
  }, []);
  // const val = {
  //   if (movieList === undefined) {
  //     return null;
  //   } else {
  //     console.log(movieList);
  //     dispatch(setMovies.set(movieList));
  //   }
  //   return null;
  // }

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movieList &&
          movieList.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img
                  src={`${IMG_PATH + movie.poster_path}`}
                  alt={`${movie.title}`}
                />
              </Link>
            </Wrap>
          ))}
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
