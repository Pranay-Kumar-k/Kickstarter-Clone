import React from "react"
import styles from "../Styles/Start_A_Project.module.css"
import {Container,Row,Col,Image, ResponsiveEmbed} from "react-bootstrap"
import { NavLink } from "react-router-dom"


class StartAProject extends React.Component { 
    constructor(props) {
        super(props)
    }

    render() {
            return(
                <div>
                    <div className={styles.heading}>
                        <h1>Build your creative project <br/> to life.</h1>
                        
                        <NavLink to="/1">
                        <button className={styles.btn}>Start a project</button>
                        </NavLink>
                    
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
                        <div className={styles.blue}>
                            <div>
                            "
                                We see Kickstarter as a home for creative minds and a wonderful platform; where people who believe, respect, and see the vision can support an idea and make it a reality. <br/><br></br>
                                <p> - DE LA SOUL</p>
                            </div>
                        </div>
                        <div className={styles.middle}>
                            <Container>
                                <Row className="mb-5">
                                    <Col>
                                    <h1>
                                        A Kickstarter project does more than raise money. It builds community around your work.
                                        </h1>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col md={6} >
                                        <h2>What can I use Kickstarter to fund?</h2>
                                    </Col>
                                    <Col md={6}>
                                        <p>
                                        Kickstarter is specifically for creative projects in the following categories: Art, Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music, Photography, Publishing, Technology, and Theater. Make an album, write a book, create an immersive theater experience, score a film — you name it. Read more about our project guidelines.
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col>
                                        <h2>Who can I get pledges from?</h2>
                                    </Col>
                                    <Col>
                                        <p>
                                        Millions of people visit Kickstarter every week, but support always begins with people you know. Friends, fans, and the communities you’re a part of will likely be some of your earliest supporters, not to mention your biggest resources for spreading the word about your project.
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col>
                                        <h2>
                                        How much work is it to run a project?
                                        </h2>
                                    </Col>
                                    <Col>
                                        <p>
                                        Every Kickstarter project has its share of exhilarating and challenging moments, but the amount of work generally depends on the size and complexity of the project.<br/>
                                        Expect the first few days after launch to be very busy as you spread the word to your community, answer questions from potential backers, and more. You may need to spend the last few days rallying your social networks in order to reach your funding goal.<br/>
                                        Projects sometimes take on a life of their own, and in that case you should expect to spend more time creating and fulfilling rewards.
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col>
                                        <h2>How do I get in touch with questions?</h2>
                                    </Col>
                                    <Col>
                                        <p>
                                        You can reach out with your questions through this contact form. We also recommend taking a look at our FAQs for more detailed information, along with the creator handbook for guidance on starting and running a project.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className={styles.video}>
                            <div style={{ width: 1000, height: 'auto',padding:"50px",margin:"0 12%"}}>
                            <ResponsiveEmbed aspectRatio="16by9" >
                                <embed src="https://d3mlfyygrfdi2i.cloudfront.net/4600/startpage_20130916_supercut_mobile.mp4" />
                            </ResponsiveEmbed>
                            </div>
                        </div>
                        <div style={{background:"whitesmoke",padding:20,borderBottom:"1px solid black"}}>
                            
                        <div className={styles.middle}>
                            <Container>
                                <Row className="mb-5">
                                    <Col>
                                    <h1>
                                        Why Kickstarter?
                                        </h1>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col md={6} >
                                        1
                                        <h2>Kickstarter is just for creative projects.</h2>
                                    </Col>
                                    <Col md={6}>
                                        
                                        <p>
                                        We built Kickstarter as a tool for artists, designers, makers, musicians, and creative people everywhere. We’re proud to be the only platform that’s fully dedicated to building community around creative projects.
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col>2
                                        <h2>All-or-nothing funding works.</h2>
                                    </Col>
                                    <Col>
                                        <p>
                                        Kickstarter’s all-or-nothing model allows you to choose a funding goal and a set number of days to reach that goal. This way, you don’t get stuck without enough funds to realize your project. It also gives backers incentive to pledge more to help you reach your goal.
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col>3
                                        <h2>
                                        Our community wants to support you.
                                        </h2>
                                    </Col>
                                    <Col>
                                        <p>
                                        Millions of backers agree — helping to create something new is exciting. People love peeking behind the creative curtain and directly supporting the creative process. In fact, 13.9 million people have pledged more than $3.39 billion to bring Kickstarter projects to life over the years.
                                        </p>
                                    </Col>
                                </Row>
                                
                                </Container>
                            </div>
                        </div>
                        <div className={styles.middle} style={{width:"90%",marginLeft:"4%"}}>
                            <Container>
                                <Row className="mb-3">
                                    <Col>
                                        <h1>
                                        Create a project in any of the <br/>following categories
                                        </h1>
                                    </Col>
                                </Row>
                                    <Row style={{background:"whitesmoke"}} className="mb-5">
                                        <Col>Arts</Col>
                                        <Col>Comics & Illustration</Col>
                                        <Col>Design & Tech</Col>
                                        <Col>Film</Col>
                                        <Col>Food & Craft</Col>
                                        <Col>Games</Col>
                                        <Col>Music</Col>
                                        <Col>Publishing</Col>
                                    </Row>
                                <Row className="mb-2">
                                    <Col md={6} >
                                        1
                                        <h4>From backyard performances to large public murals, thousands of arts projects have broken new ground, sparked meaningful dialogue, and given people the opportunity to share their work with the world.</h4>
                                    </Col>
                                    <Col md={6}>
                                        <div style={{border:"1px solid black",padding:15}}>
                                            <h2>Interested?</h2>
                                            <p>Click start and get sketching. See how it looks. Then share it with your friends!</p>
                                            <button className = {styles.btn} onClick={this.handleStartProject}>Start a project</button>
                                            <p>We're here for you! Our Community Managers know all about running projects in each of our categories. Drop us a line about your project idea: art@kickstarter.com. Got questions about something else? Visit our Help center.</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <h5>EXAMPLE ARTS PROJECTS</h5>
                                </Row>
                                <Row>
                                    
                                    <Col md={3}>
                                        <div>
                                        <img src="https://ksr-ugc.imgix.net/assets/011/536/188/8f61f3b115b209d585bfa98902aa9cf4_original.jpeg?ixlib=rb-2.1.0&crop=faces&w=608&h=342&fit=crop&v=1463684144&auto=format&frame=1&q=92&s=539d24c7181801a75071e94aa4225795" alt="img" width="250px"/>
                                        <p><a style={{font:"12px Arial"}} href="google.com">Touching Strangers: Photographs by Richard Renaldi</a></p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                    <div>
                                        <img src="https://ksr-ugc.imgix.net/assets/011/536/188/8f61f3b115b209d585bfa98902aa9cf4_original.jpeg?ixlib=rb-2.1.0&crop=faces&w=608&h=342&fit=crop&v=1463684144&auto=format&frame=1&q=92&s=539d24c7181801a75071e94aa4225795" alt="img" width="250px"/>
                                        <p><a style={{font:"12px Arial"}} href="google.com">Touching Strangers: Photographs by Richard Renaldi</a></p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                    <div>
                                        <img src="https://ksr-ugc.imgix.net/assets/011/536/188/8f61f3b115b209d585bfa98902aa9cf4_original.jpeg?ixlib=rb-2.1.0&crop=faces&w=608&h=342&fit=crop&v=1463684144&auto=format&frame=1&q=92&s=539d24c7181801a75071e94aa4225795" alt="img" width="250px"/>
                                        <p><a style={{font:"12px Arial"}} href="google.com">Touching Strangers: Photographs by Richard Renaldi</a></p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                    <div>
                                        <img src="https://ksr-ugc.imgix.net/assets/011/536/188/8f61f3b115b209d585bfa98902aa9cf4_original.jpeg?ixlib=rb-2.1.0&crop=faces&w=608&h=342&fit=crop&v=1463684144&auto=format&frame=1&q=92&s=539d24c7181801a75071e94aa4225795" alt="img" width="250px"/>
                                        <p><a style={{font:"12px Arial"}} href="google.com">Touching Strangers: Photographs by Richard Renaldi</a></p>
                                        </div>
                                    </Col>
                                </Row>
                                
                                </Container>
                            </div>
                            <div style={{marginTop:"100px",borderTop:"1px solid black",borderBottom:"1px solid gray",background:"darksalmon",height:"auto"}}>
                                <div className={styles.middle}>
                                    <h1>
                                    “A way for every creative person to control their destiny.”
                                    </h1>
                                    <p>— Brian Fargo, successful Kickstarter project creator</p>
                                    <button onClick={this.handleStartProject} className={styles.btn}>Start a project</button>

                                </div>
                            </div>
                           
                </div>
            )
        }
}

export {StartAProject}