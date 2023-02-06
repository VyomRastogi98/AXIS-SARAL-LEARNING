import AdminStakeholderListPage from "../adminComponents/admindesignedpages/AdminStakeholderListPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

function AdminStakeholderList(){
    return(
        <div>
            <AdminNavBar></AdminNavBar>
            <AdminStakeholderListPage></AdminStakeholderListPage>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminStakeholderList;