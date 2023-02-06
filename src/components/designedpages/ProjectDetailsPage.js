import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ProjectDetailsPage.css";
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import axios from "axios";
 
function ProjectDetailsPage(){
    let projectId = sessionStorage.getItem('projectId');
    let projectName = sessionStorage.getItem('projectName');
    let projectDescription = sessionStorage.getItem('projectDescription');
    let projectFlowChart = sessionStorage.getItem('projectFlowChart');
    const [employeeData, setEmployeeData]=useState([]);
    const [projectData, setProjectData]=useState([]);
    const [stakeholderData, setStakeholderData]=useState([]);
    const [jobsData, setJobsData]=useState([]);

    // **********GETTING EMPLOYEES**********
    useEffect(()=>{
        axios.get("http://localhost:8200/employees").then((response)=>{
            setEmployeeData(response.data);
        })
    },[])
    
    useEffect(()=>{
        axios.get("http://localhost:8300/stakeholders").then((response)=>{
            console.log("response",response.data);
            setStakeholderData(response.data);
            console.log("stakeholder: ",stakeholderData);   
        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:9400/jobs").then((response)=>{
            console.log("response",response.data);
            setJobsData(response.data);
            console.log("job: ",jobsData);        
        })
    },[])

    return(
        <div class="projectdetails"><br/>
            <Container><center><h1 class="projheading">Project Details</h1></center><hr/><br/></Container>
                <Container>
                    <div class="row">
                        <div class="col-3">
                            <center><h2 class="projteam">Team <Diversity3Icon fontSize="larger"/></h2></center>
                            {
                                employeeData.map((ele)=>{
                                    if (ele.projectId == projectId){
                                        return(
                                            <div> 
                                                <ul class="list-group">
                                                    <span class="d-inline-block " tabindex="0" data-toggle="tooltip" title={ele.empDesignation}>
                                                        <li class="list-group-item list-group-item-danger">{ele.empName}</li>
                                                    </span>
                                                </ul>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div class="col-6">
                            <div class="card border-white shadow-sm bg-body">
                                <div class="card-header border-white list-group-item-danger">
                                    <div class="badge bg-danger text-wrap"> Id: {projectId}</div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{projectName}</h5>
                                    <p>{projectDescription}</p>
                                </div>
                            </div><br/><hr/>
                            <h5><strong></strong>Flowchart:</h5>
                            <img class="card-img-top" src={projectFlowChart} alt="Card image cap"/> 
                        </div>
                        <div class="col-3">
                            <center><Container><h3 class="projstake">Stakeholders <GroupsIcon fontSize="larger"/></h3></Container></center>
                            {
                                stakeholderData.map((ele) => {
                                    if (ele.projectId == projectId){
                                        return (
                                            <div>
                                                <Container>
                                                    <ul class="list-group">
                                                        <li class="list-group-item list-group-item-danger">{ele.stakeholderName}</li>
                                                    </ul>  
                                                </Container>
                                            </div>
                                        );
                                    }
                                })
                            }<br/><br/><br/><br/>
                            <Container>
                                <center><h2 class="projjob">Jobs <CampaignIcon fontSize="larger"/></h2></center>
                                {
                                    jobsData.map((ele) => {
                                        if (ele.projectId == projectId){
                                            return(
                                                <div>
                                                    <div class="card border-danger mb-3"> 
                                                        <div class="card-header">{ele.jobName}</div>
                                                        <div class="card-body text-dark">
                                                            <p class="card-text">{ele.jobInfo}</p>
                                                            <p>Experience: {ele.jobExperience}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
        );
}
export default ProjectDetailsPage;