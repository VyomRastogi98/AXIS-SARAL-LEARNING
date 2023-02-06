import AdminProjectDetailsPage from "../adminComponents/admindesignedpages/AdminProjectDetailsPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

function AdminProjectDetails(){
    return(
        <div>
            <AdminNavBar></AdminNavBar>
            <AdminProjectDetailsPage></AdminProjectDetailsPage>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminProjectDetails;