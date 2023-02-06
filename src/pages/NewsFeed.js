import { Component } from "react";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";
import NewsFeedPage from "../components/designedpages/NewsfeedPage";

class NewsFeed extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <NewsFeedPage></NewsFeedPage>
            <Footer></Footer>
        </div>
    }
}
export default NewsFeed;
