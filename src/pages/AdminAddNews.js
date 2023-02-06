import { Component } from "react";
import AdminAddNewsPage from "../adminComponents/admindesignedpages/AdminAddNewsPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

class AdminAddNews extends Component{
    render(){
        return <div>
            <AdminNavBar></AdminNavBar>
            <AdminAddNewsPage></AdminAddNewsPage>
            <AdminFooter></AdminFooter>
        </div>
    }
}
export default AdminAddNews;