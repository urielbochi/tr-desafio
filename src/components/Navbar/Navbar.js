import "./Navbar.css";
import avatar from "../../images/avatar.png";
import { useState } from "react";

function NavBar({ sideBarOpen, openSideBar }) {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSideBar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <a
          className={clicked ? "active_link" : ""}
          onClick={() => {
            setClicked(true);
          }}
        >
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
