import React, { Component } from "react";
import styled from "styled-components";

//Images
import Applelogo from '../img/apple-logo.png';
import Mlogo from '../img/m-logo.png';
import Youtubelogo from '../img/youtube-logo.png';
import Instragramlogo from '../img/instagram-logo.png';

const Wrapper = styled.section`
  padding-top: 2%;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 50px;
    transition: 0.3s;
    border-radius: 100%;

    &:hover {
      will-change: transform;
      transform: scale(1.2, 1.2);
      padding: 10px;
    }
  }
`;


const Apple = styled.img`
  margin-bottom: 2.5%;
`;
const Medium = styled.img`
  margin-bottom: 2.5%;
  margin-left: 50px;
`;
const Youtube = styled.img`
  margin-left: -50px;
`;
const Instagram = styled.img`
`;




class App extends Component {
  render() {
    return (
      <section>
        
        
        <Wrapper>
          <ul>
            <li><Apple src={Applelogo} alt="apple-logo" /></li>
            <li><Medium src={Mlogo} alt="m-logo" /></li>
            <li><Youtube src={Youtubelogo} alt="youtube-logo" /></li>
            <li><Instagram src={Instragramlogo} alt="instagram-logo" /></li>
          </ul>
        </Wrapper>
        
        
      </section>
      
    )
  }
}

export default App;
