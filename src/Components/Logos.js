import React, { Component } from "react";
import styled, { css } from "styled-components";

//Images
import Applelogo from '../img/apple-logo.png';
import Mlogo from '../img/m-logo.png';
import Youtubelogo from '../img/youtube-logo.png';
import Instragramlogo from '../img/instagram-logo.png';

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    padding-top: 2%;

  img {
    width: 50px;
    transition: 0.3s;
    border-radius: 100%;

    &:hover {
      transform: scale(1.2, 1.2);
      padding: 20px;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <ul>
          <li><img src={Applelogo} alt="apple-logo" /></li>
          <li><img src={Mlogo} alt="m-logo" /></li>
          <li><img src={Youtubelogo} alt="youtube-logo" /></li>
          <li><img src={Instragramlogo} alt="instagram-logo" /></li>
        </ul>
        {/* <img src={Applelogo} alt="apple-logo"/>
        <img src={Mlogo} alt="m-logo"/>
        <img src={Youtubelogo} alt="youtube-logo"/>
        <img src={Instragramlogo} alt="instagram-logo"/>
        <img src={Applelogo} alt="apple-logo"/>
        <img src={Mlogo} alt="m-logo"/>
        <img src={Youtubelogo} alt="youtube-logo"/>
        <img src={Instragramlogo} alt="instagram-logo"/>
        <img src={Applelogo} alt="apple-logo"/>
        <img src={Mlogo} alt="m-logo"/>
        <img src={Youtubelogo} alt="youtube-logo"/>
        <img src={Instragramlogo} alt="instagram-logo"/>
        <img src={Applelogo} alt="apple-logo"/>
        <img src={Mlogo} alt="m-logo"/>
        <img src={Youtubelogo} alt="youtube-logo"/>
        <img src={Instragramlogo} alt="instagram-logo"/>
        <img src={Applelogo} alt="apple-logo"/>
        <img src={Mlogo} alt="m-logo"/>
        <img src={Youtubelogo} alt="youtube-logo"/>
        <img src={Instragramlogo} alt="instagram-logo"/> */}
      </Wrapper>
    )
  }
}

export default App;
