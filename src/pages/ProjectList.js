import ProjectListPage from "../components/designedpages/ProjectListPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

function ProjectList(){
    return(
        <div>
            <MegaMenu></MegaMenu>
            <ProjectListPage></ProjectListPage>
            <Footer></Footer>
        </div>
    )
}
export default ProjectList;