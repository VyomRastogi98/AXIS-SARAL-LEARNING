import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeLogin from './pages/EmployeeLogin';
import About from './pages/About';
import Contact from './pages/Contact';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeList from './pages/EmployeeList';
import AdminAddEmployee from './pages/AdminAddEmployee';
import CurrentProjectList from './pages/CurrentProjectList';
import StakeholderList from './pages/StakeholderList';
import ProjectDetails from './pages/ProjectDetails';
import ProductList from './pages/ProductList';
import CyberSecurityPolicy from './pages/CyberSecurityPolicy';
import AdminAddProduct from './pages/AdminAddProduct';
import ProductDetails from './pages/ProductDetails';
import BusinessContinuity from './pages/BusinessContinuity';
import CodeOfConduct from './pages/CodeOfConduct';
import DressCode from './pages/DressCode';
import PdfLoader from './components/designedpages/PdfLoader';
import CorporateGovernance from './pages/CorporateGovernance';
import MegaMenu from './components/layout/MegaMenu';
import NewsFeed from './pages/NewsFeed';
import DocumentList from './components/designedpages/DocumentListPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminEmployeeList from './pages/AdminEmployeeList';
import AdminProductList from './pages/AdminProductList';
import AdminProductDetails from './pages/AdminProductDetails';
import AdminAddProject from './pages/AdminAddProject';
import AdminProjectList from './pages/AdminProjectList';
import AdminProjectDetails from './pages/AdminProjectDetails';
import AdminAddNews from './pages/AdminAddNews';
import AdminNewsfeed from './pages/AdminNewsfeed';
import AdminAddStakeholder from './pages/AdminAddStakeholder';
import AdminStakeholderList from './pages/AdminStakeholderList';
import AddComment from './pages/AddComment';
import ProjectList from './pages/ProjectList';
import EditProfile from './components/designedpages/EditProfile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<EmployeeLogin/>}/>
        <Route path="/aboutUs" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>
        <Route path="/myprofile" element={<EmployeeProfile/>}/>
        <Route path="/bankemployees" element={<EmployeeList/>}/>
        <Route path="/cp" element={<CurrentProjectList/>}/>
        <Route path="/stake" element={<StakeholderList/>}/>
        <Route path="/project-details" element={<ProjectDetails/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product-details" element={<ProductDetails/>}/>
        <Route path="/csp" element={<CyberSecurityPolicy/>}/>
        <Route path="/bcp" element={<BusinessContinuity/>}/>
        <Route path="/cce" element={<CodeOfConduct/>}/>
        <Route path="/dc" element={<DressCode/>}/>
        <Route path="/cg" element={<CorporateGovernance/>}/>
        <Route path="/addemployee" element={<AdminAddEmployee/>}/>
        <Route path="/addproduct" element={<AdminAddProduct/>}/>
        <Route path="/addproject" element={<AdminAddProject/>}/>
        <Route path="/addnews" element={<AdminAddNews/>}/>
        <Route path="/addstakeholder" element={<AdminAddStakeholder/>}/>
        <Route path="/newsfeed" element={<NewsFeed/>}/>
        <Route path="/pdf" element={<PdfLoader/>}/>
        <Route path="/megamenu" element={<MegaMenu/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/documentlist" element={<DocumentList/>}/>
        <Route path="/adminemplist" element={<AdminEmployeeList/>}/>
        <Route path="/adminproducts" element={<AdminProductList/>}/>
        <Route path="/admin-product-details" element={<AdminProductDetails/>}/>
        <Route path="/adminprojectlist" element={<AdminProjectList/>}/>
        <Route path="/adminstakeholderlist" element={<AdminStakeholderList/>}/>
        <Route path="/admin-project-details" element={<AdminProjectDetails/>}/>
        <Route path="/admin-news-feed" element={<AdminNewsfeed/>}/>
        <Route path="/add-comment" element={<AddComment/>}/>
        <Route path="/projectlist" element={<ProjectList/>}/>
        <Route path="/edit-profile" element={<EditProfile/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
