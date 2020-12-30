import React from "react"
import { Card,Dropdown,Button,footer } from "react-bootstrap"
class Page1 extends React.Component {
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
               <Card className="text-center" border="light" style={{marginTop:"10%"}}>
                    <Card.Body>
                        <Card.Title>First, let’s get you set up.</Card.Title>
                        <Card.Text className="text-muted">
                        Pick a project category to connect with a specific community. You <br/>can always update this later.
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
                        </Dropdown>
                            <Button variant="secondary" size="lg" style={{float:"right",marginTop:"5%",marginRight:"26%"}}>
                                Button
                            </Button>
                    </Card.Body>
                <footer className="text-muted" style={{font:"12px Arial",margin:"8% 30%"}}>
                To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.
                </footer>
                </Card>
            </div>
        )
    }
}

export {Page1}