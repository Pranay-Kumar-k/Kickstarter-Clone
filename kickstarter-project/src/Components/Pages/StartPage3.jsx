import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { DataContext } from "../../Context/DataContextProvider";
import projects from "../../Context/db.json";
import styled from "styled-components";
import { ArrowLeft } from "react-bootstrap-icons";
import countries from "../../Context/data.json";
import { NavLink } from "react-router-dom";
const Select = styled.select`
  width: 50%;
  padding: 10px;
  margin: 1% 12%;
  color: gray;
  display: inline-block;
`;

class Page3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // countries: projects[projects.length - 1].countries,
      countries: countries.countries,
      country: "",
    };
  }

  handleSelect = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  render() {
    console.log(this.state.countries);
    const { isAuth } = this.context;
    console.log(isAuth);
    return (
      <div>
        <Card
          className="text-center"
          border="light"
          style={{ marginTop: "10%", overflow: "unset", fontSize: " x-large" }}
        >
          <Card.Body>
            <Card.Title>Finally, let’s confirm your eligibility.</Card.Title>

            <Card.Text className="text-muted">
              Tell us where you’re based and confirm a few other details before{" "}
              <br />
              we proceed.
            </Card.Text>

            <Select
              name="country"
              onChange={this.handleSelect}
              value={this.state.country}
            >
              <option value="">Select your country</option>
              {this.state.countries?.map((item, index) => {
                return (
                  <option key={index + 1} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </Card.Body>

          <Form style={{ width: "50%", textAlign: "start", marginLeft: "28%" }}>
            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">I am 18 years old.</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">
                I can verify an address and bank account.
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">
                I can verify a government issued ID.
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">I have debit and/or credit card.</label>
            </div>
          </Form>

          <Card.Body>
            <Card.Link style={{ color: "black" }}>
              <ArrowLeft className="mr-2" />
              Project Idea
            </Card.Link>
            {isAuth ? (
              <NavLink to="/projectCreated">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ float: "right", marginRight: "26%" }}
                  disabled={!this.state.country}
                >
                  Continue
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ float: "right", marginRight: "26%" }}
                  disabled={!this.state.country}
                >
                  Continue
                </Button>
              </NavLink>
            )}
          </Card.Body>
          <footer
            className="text-muted"
            style={{ font: "12px Arial", margin: "6% 30%" }}
          >
            To create a project, you're required to provide your location, age,
            national ID, banking and tax information, email, and mailing
            address. This information is necessary to prevent fraud, comply with
            the law, and — if your project is successful — to deliver funds.
            Please note: after launch, your ability to edit, hide, or delete a
            project is limited.
          </footer>
        </Card>
      </div>
    );
  }
}
Page3.contextType = DataContext;
export { Page3 };
