import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu>
        <a>
          <img src="images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="images/user-image.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 7rem;
  background: #090b13;
  display: flex;
  align-items: centre;
  padding: 0 3.6rem;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 8rem;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2.5rem;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 1.3rem;
      letter-spacing: 1.42;
      position: relative;

      &:after {
        content: "";
        height: 0.2rem;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.6rem;
        opacity: 0;
        transform-origin: left right;
        transform: scaleX(0);
        transition: all 0.5s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  cursor: pointer;
  margin: auto;
`;
