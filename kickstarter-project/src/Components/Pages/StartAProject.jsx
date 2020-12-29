import React from "react"
import styles from "../Styles/Start_A_Project.module.css"
import {Container,Row,Col,Image} from "react-bootstrap"


class StartAProject extends React.Component { 
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleStartProject = () => {
        
    }

    render() {
            return(
                <div>
                    <div className={styles.heading}>
                        <h1>Build your creative project <br/> to life.</h1>
                        <button onClick={this.handleStartProject}>Start a project</button>
                    </div>
                        <Container>
                            <Row>
                                <Col md={7} xs={12}>
                                    <Image src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-1-6e68a182e1340ce87d9b3c9f9a25da52935d14be496a4e88085025ae54bb870d.jpg" fluid/>
                                </Col>
                                <Col>
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Image src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-2-8c80ae939629f8b10087e097c965990ff4b3eae72b90b51fc597c7f794420881.jpg" fluid/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <Image src="https://a.kickstarter.com/assets/projects/learn/refresh/feature-3-48fe9583f16524ea8412cbb862901b00af1aaf669fdcf43f466f34af5696fc08.jpg" fluid/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                </div>
            )
        }
}

export default StartAProject