import { Component } from "react";
import BusinessContinuityPage from "../components/designedpages/BusinessContinuityPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class BusinessContinuity extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <BusinessContinuityPage></BusinessContinuityPage>
            <Footer></Footer>
        </div>
    }
}
export default BusinessContinuity;