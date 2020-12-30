import React, { Component } from "react";
import axios from "axios";
import projects from "./db.json";

const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      isLoading: false,
      error: false,
      token: "",
      projects: [...projects],
    };
  }

  // makes axios call and update local state (product) of the component with products database
  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   axios
  //     .get(`http://localhost:3004/products`)
  //     .then((res) => {
  //       this.setState({
  //         products: [...res.data],
  //         isLoading: false,
  //         error: false
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         error: true,
  //         isLoading: false
  //       });
  //     });
  // }

  authenticateUser = ({ email, password }) => {
    this.setState({
      isLoading: true,
    });

    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        this.setState({
          isAuth: true,
          isLoading: false,
          token: res.data.token,
        });
        return true;
      })
      .catch((err) => {
        this.setState({
          isAuth: false,
          error: true,
          isLoading: false,
        });
      });
  };

  getProjects = () => {
    return this.state.projects;
  };

  getProjectById = (id) => {
    const { projects } = this.state;
    return projects?.find((prod) => prod.id === id);
  };

  render() {
    const { isAuth, isLoading, error, projects } = this.state;
    const { authenticateUser, getProjects, getProjectById } = this;
    const value = {
      authenticateUser,
      getProjects,
      getProjectById,
      isAuth,
      isLoading,
      error,
      projects,
    };
    // console.log(this.state.projects);
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export { DataContext, DataContextProvider };
