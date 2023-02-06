import { Component } from "react";
import Footer from "../components/layout/Footer";
import EmployeeProfilePage from "../components/designedpages/EmployeeProfilePage";
import MegaMenu from "../components/layout/MegaMenu";

class EmployeeProfile extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <EmployeeProfilePage></EmployeeProfilePage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeProfile;
