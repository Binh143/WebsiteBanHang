import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyleNotFoundPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -60px;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 6px;
    font-weight: 500;
  }
`;
const NotFoundPage = () => {
  return (
    <StyleNotFoundPage>
      <NavLink to="/">
        <img
          srcSet="/asset/images/husky1.png 2x"
          alt="husky-blogging"
          className="logo"
        />
      </NavLink>
      <h1>Oops! Page not found</h1>
      <Link to="/" className="back">
        Back to home
      </Link>
    </StyleNotFoundPage>
  );
};

export default NotFoundPage;
