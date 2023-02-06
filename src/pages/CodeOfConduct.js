import { Component } from "react";
import CodeOfConductPage from "../components/designedpages/CodeOfConductPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class CodeOfConduct extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <CodeOfConductPage></CodeOfConductPage>
            <Footer></Footer>
        </div>
    }
}
export default CodeOfConduct;