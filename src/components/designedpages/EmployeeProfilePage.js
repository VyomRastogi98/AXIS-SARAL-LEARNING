import "./EmployeeProfilePage.css"
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";

function EmployeeProfilePage(){
    const empId = sessionStorage.getItem('empId');
    const [empImage, setEmpImage] = useState(null);
    const [employee,setEmployee] = useState({});
    // console.log(empId);
    async function getDetails(){
        await axios
        .get("http://localhost:8200/employee/"+empId.toString())
        .then((response)=>{
            // console.log(response.data);
            setEmployee(response.data);          
        });
       await axios.get("http://localhost:8510/profile-image/"+empId.toString())
       .then((response) => {
        setEmpImage(response.data);
       })
    }
    // console.log(employee);
    useEffect(()=>{
        getDetails();
    }, []);
    if (empImage === null) {
        return <div></div>
    }
    return(
        <div> 
            <br/><br/>
            <div class="row">          
                <div class="col-3"></div>
                <div class="col-6">
                    <Container>      
                        <div class="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 position-relative
                            overflow-hidden">
                            <div class="banner"></div>
                            <img src={`data:image/jpeg;base64,${empImage['imgData']}`}
                                alt="" class="img-circle mx-auto mb-3">
                            </img>
                            <h2 class="mb-4 text-center">{employee.empName}</h2><hr/>
                            <div class="text-left mb-4">
                                <p class="mb-2 "><i class="bi bi-person-workspace"></i> Designation: {employee.empDesignation}</p>
                                <p class="mb-2"><i class="bi bi-bank"></i> Department: {employee.empDepartment}</p>
                                <p class="mb-2"><i class="bi bi-envelope"></i> Email Id: {employee.empEmail}</p>
                                {/* <p class="mb-2"><i class="bi bi-telephone-fill"></i> Mobile No: {employee.empMobileNo}</p> */}
                                <p class="mb-2"><i class="bi bi-house-fill"></i> Address: {employee.empAddress}</p>
                               <center> <a class="btn btn-outline-danger" href="/edit-profile" role="button">Edit Profile</a> </center></div>
                        </div>        
                    </Container>
                    <br/>
                </div>
            </div>
        </div>
    )

}
export default EmployeeProfilePage;



/**
 * return(
        <div>           
        <div className={classes.myprofile}>
            <div className={classes.myprofileback}>
                <h1><b>Profile Details</b></h1>
                

                <p>Employee Id : {employee.empId} </p>
                <p>Name : {employee.empName}</p>
                <p>Designation: {employee.empDesignation}</p>
                <p>Department: {employee.empDepartment}</p>
                <p>Project Name: {employee.empProjectName}</p>
                <p>Email Id: {employee.empEmail}</p>
                <p>Address: {employee.empAddress}</p>
            </div>
        </div>
</div>
    )
 */




<a class="btn btn-outline-danger" href="/edit-profile" role="button">Edit Profile</a>