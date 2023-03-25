import React from "react";
import styled from "styled-components";
import { Input } from "component/input";
import { SearchIcon } from "component/icon";
import { useForm } from "react-hook-form";
import { Button } from "component/button";
import { Link, NavLink } from "react-router-dom";

const StyleHeader = styled.header`
  padding: 20px 0;
  .header-main {
    display: flex;
    align-items: center;

    .logo {
      display: block;
      max-width: 50px;
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-left: 40px;
      list-style: none;
      font-weight: 500;
    }
    .header-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
        & input {
          background-color: white;
          padding: 10px 60px 10px 10px;
          border: solid 1px ${(props) => props.theme.icon};
          border-radius: 6px;
          font-size: inherit;
          width: 100%;
        }
      }
      & > button {
        max-width: 200px;
        height: 46px;
        font-size: inherit;
        margin: 0;
      }
    }
  }
`;
const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
const Header = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });
  return (
    <StyleHeader>
      <div className="container">
        <div className="header-main">
          <Link to="/">
            <img
              srcSet="/asset/images/husky1.png 4x"
              alt="husky-blogging"
              className="logo"
            />
          </Link>
          <ul className="menu">
            {menuLinks.map((item, index) => (
              <li className="menu-item" key={index}>
                <NavLink to={item.url} className="menu-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="header-group">
            <div className="search">
              <Input
                type="text"
                name="search"
                placeholder="Search posts..."
                control={control}
              >
                <SearchIcon className="input-icon"></SearchIcon>
              </Input>
            </div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </StyleHeader>
  );
};

export default Header;
