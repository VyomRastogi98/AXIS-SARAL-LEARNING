import "./AdminNavBar.css";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
function AdminNavBar(){
    return(
        <div>
            <div class="adminnav">
                <div class="topnav">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <h2 class="navbar-brand">Axis Saral</h2>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/admindashboard">Dashboard</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Log Out</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link"><AdminPanelSettingsIcon/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="bottomnav">
                    <nav class="navbar navbar-expand-lg list-group-item-danger">
                        <div class="container-fluid">
                            
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarExampleOnHover">
                             <ul class="navbar-nav me-auto ps-lg-0">
                             <li class="nav-item dropdown dropdown-hover position-static">
                                    <a class="nav-link" 
                                        href="#" 
                                        id="navbarDropdown" 
                                        role="button"
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false">
                                        Employee
                                    </a>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div class="container">
                                            <div class="row my-4">
                                                <div class="col-md-6 col-lg-5 mb-3 mb-lg-0">
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Employee Manager</b></p>
                                                        <Link to="/addemployee" class="list-group-item list-group-item-action">Add Employee</Link>
                                                         <Link to="/adminemplist" class="list-group-item list-group-item-action">Employee List</Link>  
                                                    </div>
                                                    <div class="pt-2">
                                                        
                                                        {/* <div class="bg-image hover-overlay shadow-1-strong rounded ripple mb-4"
                                                            data-mdb-ripple-color="light">
                                                            <img src="https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" />
                                                        
                                                        </div> */}
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                    
                                </div>
                             </li>

        
                             <li class="nav-item dropdown dropdown-hover position-static">
                                    <a class="nav-link" 
                                        href="#" 
                                        id="navbarDropdown" 
                                        role="button"
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false">
                                        Documents
                                    </a>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                                        <div class="container">
                                            <div class="row my-4">
                                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0" id="data">
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Policies</b></p>
                                                        {/* <input type="text"  
                                                                placeholder="search" 
                                                                class="search text-center" 
                                                                
                                                                >
                                                        </input> */}
                                                        
                                                                        <a href="/csp" class="list-group-item list-group-item-action" id="data">Cyber Security Policy</a>
                                                                        <a href="/bcp" class="list-group-item list-group-item-action" id="data">Business Continuity Plan</a>
                                                                        <a href="/cce" class="list-group-item list-group-item-action" id="data">Code of Conduct & Ethics</a>
                                                                        <a href="/cg" class="list-group-item list-group-item-action" id="data">Corporate Governance</a>
                                                                        <a href="/dc" class="list-group-item list-group-item-action" id="data">Dress Code</a>
                                                                        <a href="" class="list-group-item list-group-item-action" id="data">Gifting Policy</a>
                                                                    
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                                    
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Specification Control Document</b></p>
                                                        {/* <input type="text"  
                                                                placeholder="search" 
                                                                class="search text-center" 
                                                                
                                                                >
                                                        </input> */}
                                                        <a href="" class="list-group-item list-group-item-action">Operating Systems</a>
                                                        <a href="" class="list-group-item list-group-item-action">Network Devices</a>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                                <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Departments</b></p>
                                                        <div class="dept">
                                                            <a class="list-group-item list-group-item-action dropdown-toggle"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                I.T.
                                                            </a>
                                                        
                                                            <ul class="dropdown-menu">
                                                            {/* <input type="text"  
                                                                placeholder="search" 
                                                                class="search text-center" 
                                                                
                                                                >
                                                        </input> */}
                                                                <li><a class="dropdown-item" href="#">Database</a></li>
                                                                <li><a class="dropdown-item" href="#">Incident Management</a></li>
                                                                <li><a class="dropdown-item" href="#">Project Management Team</a></li>
                                                                <li><a class="dropdown-item" href="#">Middleware</a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                                <li><a class="dropdown-item"></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="dept">
                                                            <a class="list-group-item list-group-item-action dropdown-toggle"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                Sales
                                                            </a>
                                                        
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                <li><a class="dropdown-item" href="#">Action two</a></li>
                                                                <li><a class="dropdown-item" href="#">Action three</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="dept">
                                                            <a class="list-group-item list-group-item-action dropdown-toggle"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                Financial
                                                            </a>
                                                        
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                <li><a class="dropdown-item" href="#">Action two</a></li>
                                                                <li><a class="dropdown-item" href="#">Action three</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="dept">
                                                            <a class="list-group-item list-group-item-action dropdown-toggle"
                                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                                HR
                                                            </a>
                                                        
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                <li><a class="dropdown-item" href="#">Action two</a></li>
                                                                <li><a class="dropdown-item" href="#">Action three</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-3">
                                                    <div class="list-group list-group-flush">
                                                    <a class="list-group-item list-group-item-action"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </li>
                                    <li class="nav-item dropdown dropdown-hover position-static">
                                    <a class="nav-link" 
                                        href="#" 
                                        id="navbarDropdown" 
                                        role="button"
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false">
                                        Product
                                    </a>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div class="container">
                                            <div class="row my-4">
                                                <div class="col-md-6 col-lg-5 mb-3 mb-lg-0">
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Product Manager</b></p>
                                                        <Link to="/addproduct" class="list-group-item list-group-item-action">Add product</Link>
                                                        <Link to="/adminproducts" class="list-group-item list-group-item-action">Product List</Link> 
                                                    </div>
                                                    <div class="pt-2">
                                                        
                                                        {/* <div class="bg-image hover-overlay shadow-1-strong rounded ripple mb-4"
                                                            data-mdb-ripple-color="light">
                                                            <img src="https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" />
                                                        
                                                        </div> */}
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                    
                                </div>
                             </li>

                            <li class="nav-item dropdown dropdown-hover position-static">
                                    <a class="nav-link"  
                                        id="navbarDropdown" 
                                        role="button"
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false">
                                        Project
                                    </a>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div class="container">
                                            <div class="row my-4">
                                                <div class="col-md-6 col-lg-5 mb-3 mb-lg-0">
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Project Manager</b></p>
                                                        <Link to="/addproject" class="list-group-item list-group-item-action">Add project</Link>
                                                        <Link to="/adminprojectlist" class="list-group-item list-group-item-action">Project List</Link> 
                                                    </div>
                                                    <div class="pt-2">
                                                        
                                                        {/* <div class="bg-image hover-overlay shadow-1-strong rounded ripple mb-4"
                                                            data-mdb-ripple-color="light">
                                                            <img src="https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" />
                                                        
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-5 mb-3 mb-lg-0">
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Stakeholder Manager</b></p>
                                                        <Link to="/addstakeholder" class="list-group-item list-group-item-action">Add Stakeholder</Link>
                                                        <Link to="/adminstakeholderlist" class="list-group-item list-group-item-action">Stakeholder List</Link> 
                                                    </div>
                                                    <div class="pt-2">
                                                        
                                                        {/* <div class="bg-image hover-overlay shadow-1-strong rounded ripple mb-4"
                                                            data-mdb-ripple-color="light">
                                                            <img src="https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" />
                                                        
                                                        </div> */}
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                    
                                </div>
                             </li>               


                                    <li class="nav-item dropdown dropdown-hover position-static">
                                    <a class="nav-link" 
                                        href="#" 
                                        id="navbarDropdown" 
                                        role="button"
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false">
                                        News
                                    </a>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div class="container">
                                            <div class="row my-4">
                                                <div class="col-md-6 col-lg-5 mb-3 mb-lg-0">
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>News Manager</b></p>
                                                    <Link to="/addnews" class="list-group-item list-group-item-action">Add News</Link>
                                                    <Link to="/admin-news-feed" class="list-group-item list-group-item-action">News List</Link>
                                                    </div>
                                                    <div class="pt-2">
                                                        
                                                        {/* <div class="bg-image hover-overlay shadow-1-strong rounded ripple mb-4"
                                                            data-mdb-ripple-color="light">
                                                            <img src="https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" />
                                                        
                                                        </div> */}
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                    
                                </div>
                             </li>

                             <li class="nav-item dropdown dropdown-hover position-static">
                                    <Link class="nav-link" 
                                        href="/sendMail" 
                                        id="navbarDropdown" 
                                        role="button"
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false">
                                        Send Mail
                                    </Link>
                              </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href=""></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default AdminNavBar;