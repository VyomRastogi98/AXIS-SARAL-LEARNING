import { Component } from "react";
import AddProduct from "../adminComponents/admindesignedpages/AddProduct";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

class AdminAddProduct extends Component{
    render(){
        return <div>
            <AdminNavBar></AdminNavBar>
            <AddProduct></AddProduct>
            <AdminFooter></AdminFooter>
        </div>
    }
}
export default AdminAddProduct;