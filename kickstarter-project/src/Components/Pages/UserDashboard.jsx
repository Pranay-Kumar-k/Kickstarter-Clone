import React from "react"
import { DashboardNavbar } from "./Dashboard_Navbar"

class UserDashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <DashboardNavbar />
                <div style={{marginTop:"100px"}}>
                    
                </div>
            </div>
        )
    }
}

export {UserDashboard}