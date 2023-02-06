import { Component } from "react";
import ProjectDetailsPage from "../components/designedpages/ProjectDetailsPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class ProjectDetails extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <ProjectDetailsPage></ProjectDetailsPage>
            <Footer></Footer>
        </div>
    }
}
export default ProjectDetails;
