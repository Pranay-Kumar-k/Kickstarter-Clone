import React from "react"
import { Card,Dropdown,Button,footer,Form,Nav } from "react-bootstrap"



class Page3 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories:[
                "Art","Theater","Technology","Publishing","Photography",
                "Music","Journalism","Games","Food","Film & Video","Fashion",
                "Design","Dance","Comics","Crafts"
            ]
        }
    }


    render() {
        return(
            <div>
               <Card className="text-center" border="light" style={{marginTop:"10%",overflow:"unset"}}>
                    <Card.Body>
                        <Card.Title>Finally, let’s confirm your eligibility.</Card.Title>
                        <Card.Text className="text-muted">
                        Tell us where you’re based and confirm a few other details before we proceed.
                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary light" id="dropdown-basic-button" size="lg" style={{width:"600px"}}>
                                           Select your category
                            </Dropdown.Toggle>

                            
                            <Dropdown.Menu>
                                {this.state.categories?.map((item) => {
                                    return (
                                        <Dropdown.Item href="#/action-" style={{width:"600px"}}>{item}</Dropdown.Item>
                                    )
                                })}
                            </Dropdown.Menu>
                                <Card.Text style={{margin:"1%",marginRight:"320px"}}>
                                What if my country isn’t listed?
                            </Card.Text>
                        </Dropdown>
                    </Card.Body>
                    <Card.Body>
                    <Card.Link href="#" variant="dark">{`<- Category`}</Card.Link>
                    <Button variant="secondary" size="lg" style={{float:"right",marginRight:"26%"}} disabled>
                        Button
                    </Button>
                    </Card.Body>
                <footer className="text-muted" style={{font:"12px Arial",margin:"6% 30%"}}>
                To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.
                </footer>
                </Card>
            </div>
        )
    }
}

export {Page3}