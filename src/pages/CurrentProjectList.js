import { Component } from "react";
import CurrentProjectListPage from "../components/designedpages/CurrentProjectListPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class CurrentProjectList extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <CurrentProjectListPage></CurrentProjectListPage>
            <Footer></Footer>
        </div>
    }
}
export default CurrentProjectList;
