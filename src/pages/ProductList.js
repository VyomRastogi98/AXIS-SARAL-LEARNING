import { Component } from "react";
import ProductListPage from "../components/designedpages/ProductListPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class ProductList extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <ProductListPage></ProductListPage>
            <Footer></Footer>
        </div>
    }
}
export default ProductList;
