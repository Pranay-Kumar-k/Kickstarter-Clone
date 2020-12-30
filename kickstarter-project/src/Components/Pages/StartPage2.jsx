import React from "react"
import { Card,Dropdown,Button,footer,Form,Nav } from "react-bootstrap"



class Page2 extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <div>
               <Card className="text-center" border="light" style={{marginTop:"10%"}}>
                    <Card.Body>
                        <Card.Title>Describe what you’ll be creating.</Card.Title>
                        <Card.Text className="text-muted">
                        And don’t worry, you can edit this later, too.
                        </Card.Text>
                       <Form>
                       <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} style={{width:"650px",margin:"1% 25%"}} placeholder="A documentary about history of shoes..."/>
                        </Form.Group>
                       </Form>
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

export {Page2}