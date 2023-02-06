import { Component } from "react";
import AdminAddStakeholderPage from "../adminComponents/admindesignedpages/AdminAddStakeholderPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

class AdminAddStakeholder extends Component{
    render(){
        return <div>
            <AdminNavBar></AdminNavBar>
            <AdminAddStakeholderPage></AdminAddStakeholderPage>
            <AdminFooter></AdminFooter>
        </div>
    }
}
export default AdminAddStakeholder;