import React, { Component } from "react";
import styled from "styled-components";

import Microlinkcard from "./Microlinkcard";
import Microlinkdata from "./Microlinkdata";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
`

class App extends Component {
  render() {
    return (
    <Wrapper>
      <Microlinkcard />
      <Microlinkdata />
    </Wrapper>
    )
  }
}

export default App;
