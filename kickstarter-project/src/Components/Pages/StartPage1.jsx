import React from "react"
import { Card,Button,footer } from "react-bootstrap"
import styled from "styled-components"

const Select = styled.select `
    width:50%;
    padding:10px;
    margin:1% 12%;
    color:gray;
    display:inline-block
`

class Page1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories:[
                "Art","Theater","Technology","Publishing","Photography",
                "Music","Journalism","Games","Food","Film & Video","Fashion",
                "Design","Dance","Comics","Crafts"
            ],
            category:""
        }
    }

    handleChange = (e) => {
        this.setState({
            category:e.target.value
        })
    }

    render() {
        console.log(this.state.category);
        return(
            <div>
               <Card className="text-center" border="light" style={{marginTop:"10%"}}>
                    <Card.Body>
                        <Card.Title>First, let’s get you set up.</Card.Title>
                            <Card.Text className="text-muted">
                            Pick a project category to connect with a specific community. You <br/>can always update this later.
                            </Card.Text>
                            <Select name="category" onChange={this.handleChange} value={this.state.category}>
                                <option value="">Select your category</option>
                                {this.state.categories?.map((item,index) => {
                                    return(
                                        <option key={index+1} value={item}>{item}</option>
                                    )
                                })}
                            </Select>
                            <Button href="/2" variant="secondary"
                                size="lg" 
                                style={{float:"right",marginTop:"5%",marginRight:"26%"}} disabled={!this.state.category}>
                                Next:Project idea
                            </Button>
                    </Card.Body>

                    <footer className="text-muted" 
                        style={{font:"12px Arial",margin:"8% 30%"}}>
                            To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.
                    </footer>
                </Card>
            </div>
        )
    }
}

export {Page1}