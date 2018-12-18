import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 450px;
  height: 250px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;


class Microlinkcard extends Component {
  render() {
    return <Wrapper>import MicrolinkCard from 'react-microlink'</Wrapper>;
  }
}

export default Microlinkcard