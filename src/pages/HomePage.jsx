import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeBanner from "module/home/HomeBanner";
import { Layout } from "component/layout";
import HomeFeature from "module/home/HomeFeature";
import HomeNewest from "module/home/HomeNewest";

const StyleHome = styled.div``;
const HomePage = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/sign-in");
  };
  return (
    <StyleHome>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </StyleHome>
  );
};

export default HomePage;
