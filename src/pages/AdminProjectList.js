import AdminProjectListPage from "../adminComponents/admindesignedpages/AdminProjectListPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

function AdminProjectList(){
    return(
        <div>
            <AdminNavBar></AdminNavBar>
            <AdminProjectListPage></AdminProjectListPage>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminProjectList;