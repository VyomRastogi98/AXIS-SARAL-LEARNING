import AdminNewsfeedPage from "../adminComponents/admindesignedpages/AdminNewsfeedPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

function AdminNewsfeed(){
    return(
        <div>
            <AdminNavBar></AdminNavBar>
            <AdminNewsfeedPage></AdminNewsfeedPage>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminNewsfeed;