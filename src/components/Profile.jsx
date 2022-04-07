import React from "react";
import { cardStyle } from "./ReusableStyles";
import styled from "styled-components";
import image from "../assests/Moamin.png";

import { HiOutlineLocationMarker } from "react-icons/hi";

const Profile = () => {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Moamin Abuewaida</h2>
        <h5>
          <HiOutlineLocationMarker />
          Brussels, Belgium
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>28</h3>
        </div>
        <div className="container">
          <h5>Rides</h5>
          <h3>234</h3>
        </div>
        <div className="container">
          <h5>Hours</h5>
          <h3>23</h3>
        </div>
      </div>
    </Section>
  );
};

export default Profile;

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 8rem;
      width: 8rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: var(--main-color);
      font-family: "Oswald", sans-serif;
      letter-spacing: 0.2rem;
    }
    h5 {
      letter-spacing: 0.1rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
