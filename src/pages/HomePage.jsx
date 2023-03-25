import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "component/layout";

const StyleHome = styled.div``;
const HomePage = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/sign-in");
  };
  return (
    <StyleHome>
      <Header></Header>
    </StyleHome>
  );
};

export default HomePage;
