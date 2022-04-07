import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Moamin</h4>
        <h1>
          Welcome to <span>MY TAXI DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: var(--main-color);
        letter-spacing: 0.2rem;
        font-family: "Oswald", sans-serif;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: var(--main-color);
    }
    input {
      background-color: transparent;
      border: none;
      color: var(--main-color);
      font-family: "Oswald", sans-serif;
      letter-spacing: 0.2rem;
      &::placeholder {
        color: var(--main-color);
      }
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: var(--main-color);
        font-family: "Oswald", sans-serif;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
