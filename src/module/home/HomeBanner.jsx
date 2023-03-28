import { Button } from "component/button";
import React from "react";
import styled from "styled-components";

const StyleHomeBanner = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`;

const HomeBanner = () => {
  return (
    <StyleHomeBanner>
      <div className="container">
        <div className="banner">
          <div className="banner-content ">
            <h1 className="banner-heading">Husky Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              molestiae eligendi? Iure iusto molestiae laudantium deleniti, nisi
              culpa sequi aliquid perferendis dolorum illo dolorem! Distinctio
              impedit esse iusto quia pariatur.
            </p>
            <Button href="/sign-up" kind="secondary">
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/asset/images/banner/image-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </StyleHomeBanner>
  );
};

export default HomeBanner;
