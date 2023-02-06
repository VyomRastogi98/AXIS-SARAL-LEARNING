import { Component } from "react";
import AddEmployeePage from "../adminComponents/admindesignedpages/AddEmployeePage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

class AdminAddEmployee extends Component{
    render(){
        return <div>
            <AdminNavBar></AdminNavBar>
            <AddEmployeePage></AddEmployeePage>
            <AdminFooter></AdminFooter>
        </div>
    }
}
export default AdminAddEmployee;

