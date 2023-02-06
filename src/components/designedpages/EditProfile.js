import { Container } from "@mui/system";
import WebsiteNavigation from "../layout/WebsiteNavigation";
import { useState, useEffect } from "react";
import axios from "axios";

function EditProfile() {
  let projectId = sessionStorage.getItem('projectId');

  let eId = sessionStorage.getItem('empId');
  let empName = sessionStorage.getItem('empName');
  let empProjectName = sessionStorage.getItem('empProjectName');
  let empDepartment = sessionStorage.getItem('empDepartment');
  let empDesignation = sessionStorage.getItem('empDesignation');
  let supervisorName = sessionStorage.getItem('supervisorName');
  let empPassword = sessionStorage.getItem('empPassword');





  const [empEmail, setEmpEmail] = useState("");
  const [empAddress, setEmpAddress] = useState("");


  const [empId, setEmpId] = useState("");
  var singleFileUploadInput = document.querySelector('#file');
  var singleFileUploadStatus = document.querySelector('#status');

  function submitHandler() {
    // event.preventDefault();
    var files = singleFileUploadInput.files;
    if (files.length === 0) {
      singleFileUploadStatus.innerHTML = "Please select a file";
      singleFileUploadStatus.style.display = "block";
    }
    var formData = new FormData();
    formData.append("empId", empId);
    formData.append("file", files[0]);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8510/upload-image");
    xhr.onload = function () {
      console.log(xhr.responseText);

      if (xhr.status === 200) {
        singleFileUploadStatus.innerHTML = `<p> uploaded successfully</p>`;
        singleFileUploadStatus.style.display = "block";
      } else {
        singleFileUploadStatus.innerHTML = "Some Error Occurred";
        singleFileUploadStatus.style.display = "block";
      }
    }
    xhr.send(formData);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler();
    let empData = { empName, empDepartment, empProjectName, empDesignation, empEmail, supervisorName, empAddress, empPassword, projectId };
    // console.log("emp data: ", empData);
    axios.put(`http://localhost:8200/employee/${eId}`, empData).then((response) => {
      // console.log(response.data);
      alert("Details Updated");
      // window.location.assign("/expense-list");

    })
    
  }


  return (
    <div>
      <WebsiteNavigation></WebsiteNavigation>
      <br />
      <Container>
        <center>
          <h1>Add Employee</h1>
        </center>
        <hr /><br />
        <div class="shadow p-3 mb-5 bg-white rounded">
          <form onSubmit={handleSubmit} class="row g-3" >
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="emp123@gmail.com"
                value={empEmail} onChange={(e) => setEmpEmail(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">

            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                value={empAddress} onChange={(e) => setEmpAddress(e.target.value)}
              ></input>
            </div>
            <div>
              
             
              <label for="empId" class="form-label">Employee Id:</label>
              <input id='empId' type='text' name='empId' onChange={(e) => setEmpId(e.target.value)} required />
              <br />
              <br/>
              <label for="inputAddress" class="form-label">
                Add Profile Photo:
              </label>
           
              <input id="file" type="file" name="file" required />
          
              <br />
              <button class="btn btn-secondary bg-gradient btn-sm" type="submit">upload</button>
              <br />


              <div>
                <div id="status"></div>
              </div>
            </div>


            <div class="col-12 text-center">
              <button type="submit" class="btn btn-danger bg-gradient text-centre">
                Save
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
export default EditProfile;