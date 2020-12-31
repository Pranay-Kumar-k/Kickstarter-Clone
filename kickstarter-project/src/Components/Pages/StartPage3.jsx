import React from "react"
import { Card,Dropdown,Button,Form } from "react-bootstrap"
import styles from "../Styles/StartPage3.module.css"


class Page3 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            countries:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
            "Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
            "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda",
            "Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands",
            "Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands",
            "Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia",
            "Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
            "Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands",
            "Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany",
            "Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea",
            "Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia",
            "Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan",
            "Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia",
            "Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia",
            "Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro",
            "Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia",
            "New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea",
            "Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania",
            "Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia",
            "Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa",
            "South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan",
            "Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand",
            "Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos",
            "Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam",
            "Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
        }
    }


    render() {
        return(
            <div>
               <Card className="text-center" border="light" style={{marginTop:"10%",overflow:"unset",fontSize:" x-large"}}>
                    <Card.Body>
                        <Card.Title>Finally, let’s confirm your eligibility.</Card.Title>
                       
                        <Card.Text className="text-muted">
                            Tell us where you’re based and confirm a few other details before <br/>we proceed.
                        </Card.Text>

                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary light" id="dropdown-basic-button" size="lg" style={{width:"600px"}}>
                                           Select your category
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.countries?.map((item) => {
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
                    
                    <Form style={{width:"50%",textAlign:'start',marginLeft:"28%"}}> 
                        <div>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox">Iam 18 years old.</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox">I can verify an address and bank account.</label>
                        </div><div>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox">I can verify a government issued ID.</label>
                        </div><div>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox">I have debit and/or credit card.</label>
                        </div>
                    </Form>

                    <Card.Body>
                        <Card.Link href="#" variant="dark">{`<- Project Idea`}</Card.Link>
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