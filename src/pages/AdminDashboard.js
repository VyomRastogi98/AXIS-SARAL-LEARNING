import { Component } from "react";
import AdminDashboardPage from "../adminComponents/admindesignedpages/AdminDashboardPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";
import Footer from "../components/layout/Footer";

class AdminDashboard extends Component{
    render(){
        return <div>
            <AdminNavBar></AdminNavBar>
            <AdminDashboardPage></AdminDashboardPage>
            <AdminFooter></AdminFooter>
        </div>
    }
}
export default AdminDashboard;