import { Component } from "react";
import CorporateGovernancePage from "../components/designedpages/CorporateGovernancepage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class CorporateGovernance extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu> 
            <CorporateGovernancePage></CorporateGovernancePage>
            <Footer></Footer>
        </div>
    }
}
export default CorporateGovernance;