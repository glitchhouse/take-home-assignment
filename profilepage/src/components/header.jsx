import image from "../assets/image.png"; 
import share from "../assets/share.svg"; 
import settings from "../assets/settings.svg"; 
import "../styles/header.css";
import "@fontsource/cooper-hewitt";
import verified from '../assets/verified.svg'


export default function Header() {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profilepic">
          <img src={image} alt="Profile Picture" />
        </div>
        <div className="share">
          <img src={share} alt="" style={{ width: "20px", height: "20px" }} />
          <img src={settings} alt="" style={{ width: "20px", height: "20px" }} />

        </div>
        <div className="user">
          <button className="edit">Edit Profile</button>
        </div>
        <div className="details">
          <h2>@theo_from_hsr <img src={verified} style={{
            height:"20px",
            width:"20px"
          }} alt="" /></h2>
          <div className="country">
          

            <p>
            India</p>
            
          </div>

        </div>
        <div className="bio">
          <p>18 y/o with high ambitions. want to build cool stuff!</p>       </div>
      </div>
      
      
    </div>

  );
}
