import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

function AdminProjectListPage() {
    const [projectData, setProjectData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8189/projects").then((response)=>{
            console.log(response);
            setProjectData(response.data);
            console.log("data",projectData);

             
            
        })
    },[])
  return (
    <div>
      <Container>
        <br />
        <center>
          <h1>Project List</h1>
        </center>
        <hr />
      </Container>
      <br />
      
      <div class="row">
        
          {
            projectData.map((ele)=>{
                console.log("ele: ",ele);
                function myFunction() {
                    sessionStorage.setItem("projectId", ele.projectId);
                    sessionStorage.setItem("projectName", ele.projectName);
                    sessionStorage.setItem("projectDescription", ele.projectDescription);
                    sessionStorage.setItem("projectFlowChart", ele.projectFlowChart);
                    window.location.assign("/admin-project-details");
                }

                return(
                  <div class="col-4">
                <Container><Container>
<Container>
<div class="card text-dark bg-light mb-3 shadow border-white">
  <div class="card-header list-group-item-danger border-white"> <p class="badge bg-danger text-wrap">Id: {ele.projectId}</p></div>
  <div class="card-body border-white">
    <h5 class="card-title">{ele.projectName}</h5>
    <p class="card-text">{ele.projectDescription}</p><br/>
    <a  class="btn list-group-item-danger text-danger shadow-sm btn-sm" onClick={myFunction}>Explore </a>
   

  </div>
</div>

                    {/* <div class="card shadow-lg bg-body">
                                <h5 class="card-header bg-dark text-light">{ele.projectName}</h5>
                                    <div class="card-body bg-danger text-light bg-gradient">
                                        <h5 class="card-title">{ele.projectDescription}</h5>
                                        
                                        <a href="/project-details" class="btn btn-danger bg-dark text-light " onClick={myFunction}>Explore </a>
                                    </div>
                            </div><br/> */}
                </Container></Container></Container>
                </div>
                );
            })
          }
       </div>
        
      </div>
    
  );
}
export default AdminProjectListPage;
