import { Component } from "react";
import EmployeeLoginPage from "../components/designedpages/EmployeeLoginPage";
import Footer from "../components/layout/Footer";
import LoginNavBar from "../components/layout/LoginNavBar";

class EmployeeLogin extends Component{
    render(){
        return <div>
            <LoginNavBar></LoginNavBar>
            <EmployeeLoginPage></EmployeeLoginPage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeLogin;
