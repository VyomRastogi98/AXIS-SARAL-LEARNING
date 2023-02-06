import AdminProductDetailsPage from "../adminComponents/admindesignedpages/AdminProductDetailsPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

function AdminProductDetails(){
    return(
        <div>
            <AdminNavBar></AdminNavBar>
            <AdminProductDetailsPage></AdminProductDetailsPage>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminProductDetails;