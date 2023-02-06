import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer(){
    return(
        <div>
            <div class="empfoot">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="https://www.facebook.com/axisbank" target="_blank"><FacebookIcon/></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="https://twitter.com/axisbank" target="_blank"><TwitterIcon/></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="https://www.linkedin.com/company/axis-bank/?trk=top_nav_home" target="_blank"><LinkedInIcon/></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="https://www.instagram.com/axis_bank/" target="_blank"><InstagramIcon/></a>
                                </li>
                            </ul>
                            <span class="navbar-text text-light">
                                Copyright © 2023 Axis Saral
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Footer;

/**
 * <div>
            <footer className={classes.footer}>
                <div className={classes.social}>
                    <ul>  
                        <li>
                            <a href="https://www.facebook.com/axisbank" target="_blank"><FacebookIcon/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/axisbank" target="_blank"><TwitterIcon/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/axis-bank/?trk=top_nav_home" target="_blank"><LinkedInIcon/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/axis_bank/" target="_blank"><InstagramIcon/></a>
                        </li>
                    </ul>
                </div>
                <div className={classes.para}>
                <p>
                    <Link to="/privacy">Privacy Policy </Link>
                    | Copyright © 2023 Axis Saral
                    </p>                    
                </div>
            </footer>
        </div>
 */