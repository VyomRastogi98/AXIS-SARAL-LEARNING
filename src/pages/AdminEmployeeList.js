import AdminEmployeeListPage from "../adminComponents/admindesignedpages/AdminEmployeeListPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

function AdminEmployeeList(){
    return(
        <div>
            <AdminNavBar></AdminNavBar>
            <AdminEmployeeListPage></AdminEmployeeListPage>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminEmployeeList;