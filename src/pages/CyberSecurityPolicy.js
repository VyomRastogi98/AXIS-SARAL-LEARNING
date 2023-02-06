import { Component } from "react";
import CyberSecurityPolicyPage from "../components/designedpages/CyberSecurityPolicyPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class CyberSecurityPolicy extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <CyberSecurityPolicyPage></CyberSecurityPolicyPage>
            <Footer></Footer>
        </div>
    }
}
export default CyberSecurityPolicy;