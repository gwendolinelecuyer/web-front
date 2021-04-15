import React, { Component } from "react";
import { Container } from "react-bootstrap";

import TestApp from "../components/Test/Test"

class Home extends Component {
  render() {
    return (
      <>
        <div className="content2">
          <Container>
              <TestApp/>
          </Container>
        </div>
      </>
    );
  }
}

export default Home;