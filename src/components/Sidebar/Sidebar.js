import "./sideBar.css";
import logo from "../../images/logo.png";

function SideBar({ sideBarOpen, closeSideBar }) {
  return (
    <div className={sideBarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <i
        className="fa fa-times sidebar__close-button"
        id="sidebarIcon"
        onClick={() => closeSideBar()}
      />
      <div className="tractian__logo-side-container">
        <img className="tractian__image-settings" src={logo} />
        <div className="tractian__column-container">
          <h3>tractian</h3>
          <p className="tractian__subtitle">Dashboard</p>
        </div>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-home fa-fw"></i>
          <a href="/home">Home</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-o fa-fw"></i>
          <a href="/users">Users</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o fa-fw"></i>
          <a href="/companies">Companies</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench fa-fw"></i>
          <a href="/assets">Assets</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-address-book fa-fw"></i>
          <a href="/units">Units</a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
