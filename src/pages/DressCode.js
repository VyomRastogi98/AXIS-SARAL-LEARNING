import { Component } from "react";
import DressCodePage from "../components/designedpages/DressCodePage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class DressCode extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu> 
            <DressCodePage></DressCodePage>
            <Footer></Footer>
        </div>
    }
}
export default DressCode;