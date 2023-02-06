import { Container } from "@mui/system";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from 'react-avatar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';


function AdminEmployeeListPage(){
    const [employeeData, setEmployeeData]=useState([]);
    
    const [query,setQuery]=useState("");
    console.log(query);
   
    useEffect(()=>{
        axios.get("http://localhost:8200/employees").then((response)=>{
            setEmployeeData(response.data);
            console.log("data",employeeData);

            for(var i=0; i<response.data.length; i++){
            }    
        })
    },[])

    return(
        <div>
            <Container><br/>
                <div class="empsearch">
                    <center>
                        <input type="text"  
                                placeholder="Search Employee Name[Format: abcdefg]" 
                                class="search text-center" 
                                onChange={(e)=> setQuery(e.target.value)}>
                        </input>
                    </center>
                </div>
            </Container><br/><br/>
            <Container>
                <div class="row">
                {
                    employeeData.filter((ele)=>ele.empName.toLowerCase().includes(query)).map((ele)=>{
                        <li key={ele.empId}></li>
                        console.log("ele:",ele.empName);
                        function editEmployee(){
                            sessionStorage.setItem("editempId", ele.empId);
                            window.location.assign("/update-emp")
                        }
                        return(
                            <div class="col-3">
                                <Container>
                                <div class="emplst">        
                                    <div class="card shadow-lg bg-body">
                                        <div class="card-header col-sm-2">   
                                            <center><Avatar name= {ele.empName} 
                                                class="avatar"
                                                 colour={'primary'}
                                                  size='80' round
                                            /></center>
                                        </div>
                                        
                                        <div class="card-body text-dark bg-gradient">                                   
                                            <center><p class="card-title fw-normal fw-bold">{ele.empName}<a onClick={editEmployee} href="#" role="button"> <BorderColorIcon fontSize="small" color="secondary"/></a></p></center>
                                            <center><p class="card-des">{ele.empDesignation}</p></center> 
                                            <p class="card-text"><EmailOutlinedIcon class="icon"/> {ele.empEmail}</p> 
                                            <p class="card-text"><WorkOutlineIcon class="icon"/> {ele.empProjectName} </p>
                                            <p class="card-text"> <PersonOutlineIcon class="icon"/> {ele.supervisorName} </p>
                                            <p class="card-text"><LocationOnOutlinedIcon class="icon"/> {ele.empAddress} </p>         
                                        </div>
                                        </div>
                                    </div>
                                    <br/>
                                </Container>
                                
                            </div>
                           
                        )
                    })
                }
            </div>
            <br/><br/><br/><br/>
        </Container>
    </div>
    )
}
export default AdminEmployeeListPage;