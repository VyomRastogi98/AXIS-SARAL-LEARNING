import AddCommentPage from "../components/designedpages/AddCommentPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

function AddComment(){
    return(
        <div>
            <MegaMenu></MegaMenu>
            <AddCommentPage></AddCommentPage>
            <Footer></Footer>
        </div>
    )
}
export default AddComment;