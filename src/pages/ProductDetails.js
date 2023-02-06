import { Component } from "react";
import ProductDetailsPage from "../components/designedpages/ProductDetailsPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class ProductDetails extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu> 
            <ProductDetailsPage></ProductDetailsPage>
            <Footer></Footer>
        </div>
    }
}
export default ProductDetails;
