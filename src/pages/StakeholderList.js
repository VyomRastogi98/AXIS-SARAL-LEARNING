import { Component } from "react";
import StakeholderListPage from "../components/designedpages/StakeholderListPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class StakeholderList extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu> 
            <StakeholderListPage></StakeholderListPage>
            <Footer></Footer>
        </div>
    }
}
export default StakeholderList;