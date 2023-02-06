import { Component } from "react";
import AddProjectPage from "../adminComponents/admindesignedpages/AddProjectPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

class AdminAddProject extends Component{
    render(){
        return <div>
            <AdminNavBar></AdminNavBar>
            <AddProjectPage></AddProjectPage>
            <AdminFooter></AdminFooter>
        </div>
    }
}
export default AdminAddProject;