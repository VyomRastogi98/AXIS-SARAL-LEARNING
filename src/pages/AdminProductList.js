import AdminProductListPage from "../adminComponents/admindesignedpages/AdminProductListPage";
import AdminFooter from "../adminComponents/adminlayout/AdminFooter";
import AdminNavBar from "../adminComponents/adminlayout/AdminNavBar";

function AdminProductList(){
    return(
        <div>
            <AdminNavBar></AdminNavBar>
            <AdminProductListPage></AdminProductListPage>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminProductList;