import "./navbar.scss";
import HomeIcon from '@mui/icons-material/Home';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import { DarkModeContext } from "../../context/viewModeContext";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

// import 


function Navbar() {

    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);
    return (  
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                <span>Ragav</span>
                </Link>
                <HomeIcon />
                {darkMode ? <LightModeOutlinedIcon  onClick={toggle}/> :  <NightlightOutlinedIcon onClick={toggle}/>}
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className='right'>
                <PersonOutlineIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                <img
                    src={currentUser.profilePic}
                    alt=""
                />
                <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
        );
}

export default Navbar;