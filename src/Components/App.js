import React, { Component } from "react";
import styled from "styled-components";

import Microlinkcard from "./Microlinkcard";
import Microlinkdata from "./Microlinkdata";
import Logos from "./Logos";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
`

class App extends Component {
  render() {
    return (
      <section>
        <Wrapper>
          <Microlinkcard />
          <Microlinkdata />
        </Wrapper>
        <Logos />

      </section>
    
    )
  }
}

export default App;
