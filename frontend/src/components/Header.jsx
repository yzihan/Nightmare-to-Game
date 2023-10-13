// MyComponent.js
import React from 'react';
import "./css/header.css";
import SampleProfile from "../assets/imgs/sampleprofile.png";
import IconProfile from "../assets/icons/header_user_lock.svg";
import IconPlayers from "../assets/icons/header_users.svg";
import IconFavorites from "../assets/icons/header_star.svg";
import IconUpload from "../assets/icons/header_cloud.svg";
import IconSetting from "../assets/icons/header_setiing.svg";
import IconLogout from "../assets/icons/header_sign.svg";


function Header({logout}) {
  // Your component code here
  return (
    <div className='header'>
        <div className='header-img'>
          <img src={SampleProfile} alt="sample profile"></img>
        </div>
        <div className='header-table'>
            <div className='header-table-content'>
              <img src={IconProfile} alt="icon profile"></img>
              <button className='header-button'>My Profile</button>
            </div>

            <div className='header-table-content'>
              <img src={IconPlayers} alt="icon find players"></img>
              <button className='header-button'>Find Players</button>
            </div>

            <div className='header-table-content'>
              <img src={IconFavorites} alt="icon favorites"></img>
              <button className='header-button'>Favorites</button>
            </div>

            <div className='header-table-content'>
              <img src={IconUpload} alt="icon upload"></img>
              <button className='header-button'>Upload</button>
            </div>

            {/* for empty space */}
            <div className='header-table-empty'></div>

            <div className='header-table-content'>
              <img src={IconSetting} alt="icon setting"></img>
              <button className='header-button'>Settings</button>
            </div>

            <div className='header-table-content'>
              <img src={IconLogout} alt="icon logout"></img>
               <button className='header-button'>Log Out</button>
            </div>
        </div>
    </div>
  );
}

export default Header;
