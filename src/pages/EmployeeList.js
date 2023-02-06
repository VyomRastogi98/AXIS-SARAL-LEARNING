import { Component } from "react";
import EmployeeListPage from "../components/designedpages/EmployeeListPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class EmployeeList extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu> 
            <EmployeeListPage></EmployeeListPage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeList;
