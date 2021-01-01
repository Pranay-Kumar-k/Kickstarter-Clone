import React from "react"
import styles from "../Styles/PopOver.module.css"
import {Popover,OverlayTrigger, Container, Row, Col, Button } from "react-bootstrap"

const popover = (
    <Popover id="popover-basic" style={{maxWidth:"1000px"}}>
      <Popover.Content>
          <Container className="cont">
              <Row style={{marginBottom:"50px",marginTop:"30px",marginLeft:"5px"}}>
                <Col style={{fontSize:"14px",fontWeight:"bold",width:"300px"}}>YOUR ACCOUNT</Col>
                <Col style={{fontSize:"14px",fontWeight:"bold",width:"300px"}}> CREATED PROJECTS</Col>
              </Row>
              <Row>
                <Col style={{marginLeft:"30px"}}>
                  <Row>Saved projects</Row>
                  <Row>Recommended for you</Row>
                  <Row>Following</Row>
                </Col>

                <Col>
                  <Row>
                    <Col>
                      <img src="https://ksr-ugc.imgix.net/missing_project_photo.png?ixlib=rb-2.1.0&crop=faces&w=48&h=27&fit=crop&v=&auto=format&frame=1&q=92&s=8dac54b2ccc16b91cebe1bbad9f81b29" alt="img" style={{marginRight:"20px"}}/>
                      Art Project
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <Button variant="light" block>+ New</Button>
                </Col>
              </Row>
              <Row>
                <Col style={{marginLeft:"30px"}}>
                  <Row>Profile</Row>
                  <Row>Settings</Row>
                  <Row>Messages</Row>
                  <Row>Activity</Row>
                </Col>
              </Row>
              <Row style={{marginTop:"100px",marginLeft:"20px",marginBottom:"30px"}}>
                <a href="/login">Log out</a>
              </Row>
          </Container>
      </Popover.Content>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="left" overlay={popover} id="popover-contained">
          <img src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-2.1.0&w=160&h=160&fit=crop&v=&auto=format&frame=1&q=92&s=dcbf8315c895755eb38c778c1414f508" alt="img" width="50px" style={{borderRadius:"50%"}}/>
    </OverlayTrigger>
  );

  export default Example