import React from "react"
import {Popover,OverlayTrigger, Container, Row, Col } from "react-bootstrap"

const popover = (
    <Popover id="popover-basic" >
          <Container>
              <Row >
                <Col>YOUR ACCOUNT</Col>
                <Col> CREATED PROJECTS</Col>
              </Row>
          </Container>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="left" overlay={popover} id="popover-contained">
          <img src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-2.1.0&w=160&h=160&fit=crop&v=&auto=format&frame=1&q=92&s=dcbf8315c895755eb38c778c1414f508" alt="img" width="50px" style={{borderRadius:"50%"}}/>
    </OverlayTrigger>
  );

  export default Example