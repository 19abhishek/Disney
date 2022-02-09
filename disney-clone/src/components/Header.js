import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { selectUserName, selectUserPhoto } from "../user/userSlice";
import { useSelector } from "react-redux";

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <Nav>
      <Logo src="images/logo.svg" />
      {userName ? (
        <LoginContainer>
          <Login>Login</Login>
        </LoginContainer>
      ) : (
        <>
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
        </>
      )}
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
  position: sticky;
  top: 0;
  z-index: 100;
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

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 0.4rem 1.2rem;
  height: 3rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 250ms;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
