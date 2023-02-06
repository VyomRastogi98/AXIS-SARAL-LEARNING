import "./WebsiteNavigation.css";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
function WebsiteNavigation(){
    return(
        <div>
            <div class="wbnav">
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
                                        <a class="nav-link active" aria-current="page" href="/">HOME</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact">CONTACT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/login">LOGIN</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link"></a>
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
export default WebsiteNavigation;

