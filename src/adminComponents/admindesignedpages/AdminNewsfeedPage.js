import { useState, useEffect } from "react";

import axios from "axios";

import { Container } from "@mui/system";
// import WebsiteNavigation from "../layout/WebsiteNavigation";
// import EmployeeNavigation from "../layout/EmployeeNavigation";
// import Footer from "../layout/Footer";

function AdminNewsFeed(){
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8003/allnews").then((response) => {
          console.log(response.data);
    
          setNewsData(response.data);
    
          console.log("data", newsData);
    
          for (var i = 0; i < response.data.length; i++) {}
        });
      }, []);
    
      const [message, setMessage] = useState("");
    return(
        <div>
            <Container>
        <br />
        <center>
          <h1>News Feed</h1>
        </center>
        <hr />
      </Container>
      <br />

      {newsData.map((ele) => {
        // console.log("ele:", ele.title);
        // console.log(ele);
        // console.log("comments",ele.comments);
        let comData = ele.comments;
        // console.log("ele.comments.msg:",ele.comments.message);
        
        function myFunction() {
          sessionStorage.setItem("newsId", ele.newsId);
          sessionStorage.setItem("newsName", ele.newsName);
          
          window.location.assign("/add-comment");
        }
        function deleteNewsFunction() {
            sessionStorage.setItem("newsId", ele.newsId);
            sessionStorage.setItem("newsName", ele.newsName);
            let newsId = sessionStorage.getItem('newsId'); 
            axios.delete(`http://localhost:8003/delete-news/${newsId}`).then((response) =>{
                console.log(response);
                alert("News Deleted");
                window.location.assign("/admin-news");
              });

            // window.location.assign("/edit-news");

        }
        
        return (
          <div>
           
            <Container>


            <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
          <div class="card mb-3">
            <div class="bg-image hover-zoom">
  <img class="card-img-top w-100" src={ele.url} alt="Card image cap"/></div>
  <div class="card-body">
    <h5 class="card-title">{ele.newsName} &nbsp;&nbsp;&nbsp;<a class="btn btn-warning btn-sm bg-gradient rounded-pill" onClick={deleteNewsFunction} role="button">Delete</a></h5>
    <p class="card-text">{ele.content}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a class="btn btn-danger btn-sm bg-gradient rounded-pill" onClick={myFunction} role="button">Comment</a>
    {/* &nbsp;&nbsp;&nbsp;<a class="btn btn-warning btn-sm bg-gradient rounded-pill" onClick={editFunction} role="button">&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;</a> */}
    {
                    comData.map((j)=>{
                      console.log("j",j);
                      function deleteCommentFunction(){
                        sessionStorage.setItem("commentId", j.commentId);
                        let commentId = sessionStorage.getItem('commentId');
                        axios.delete(`http://localhost:8003/delete-comment/${commentId}`).then((response) =>{
                        console.log(response);
                        alert("Comment Deleted");
                        window.location.assign("/news-feed");
                        }); 
                        }
                      return(
                        <div>

                          <p><strong>{j.empName}:</strong> {j.message} &nbsp;&nbsp;&nbsp;<a class="btn btn-warning btn-sm bg-gradient rounded-pill" onClick={deleteCommentFunction} role="button">Delete</a></p>
                        </div>
                      );
                    }
                    
                    )
                  }
  </div>
 
</div>
              <br />
          </div>
          <div class="col-3"></div>
        </div>
              {/* ************************** */}

              
            </Container></div>
          
        );
      })}
      {/* <Footer></Footer> */}
        </div>
    );
}
export default AdminNewsFeed;