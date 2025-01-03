import { useState } from "react";
import "./Sidebar.css";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdLiveHelp } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isMastersOpen, setIsMastersOpen] = useState(false);

  const toggleMasters = () => {
    setIsMastersOpen(!isMastersOpen);
  };

  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <img
          src="http://digitrac.keydraft.com/images/logos/digitrac_full_logo.png"
          alt="DigiTree Logo"
          className="logo-image"
        />
      </div>

      {/* Navigation Items */}
      <ul className="sidebar-menu">
        <li className="menu-item">
          <span className="menu-icon">
            <BsDatabaseFillAdd />
          </span>{" "}
          Home
        </li>
        <li className={`menu-item ${isMastersOpen ? "active" : ""}`}>
          <div className="menu-item-header" onClick={toggleMasters}>
            <span className="menu-icon">📋</span>
            <span className="menu-text">Masters</span>
            <span className="arrow-icon">
              {isMastersOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </span>
          </div>
        </li>
        {isMastersOpen && (
       
            <Link to="/branchtable">
              <p className="submenu-item">Branch</p>
            </Link>
        
        )}
        <li className="menu-item">
          <span className="menu-item-header">
            <MdLiveHelp className="arroe-icon" />
          </span>{" "}
          Help
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
