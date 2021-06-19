
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAlignLeft } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {


  return (
    <>
      <div className="col-md-2 col-sm-6 col-12">
        <div
          className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
          style={{ height: "100vh" }}
        >
          <ul className="list-unstyled">
                <li>
                  <Link to="/repairList" className="text-white">
                    <FontAwesomeIcon icon={faAlignLeft} />{" "}
                    <span>Repair List</span>
                  </Link>
                </li>
                <li>
                  <Link to="/addService" className="text-white">
                    <FontAwesomeIcon icon={faAlignLeft} />{" "}
                    <span>Add Service</span>
                  </Link>
                </li>
                <li>
                  
                </li>
                <li>
                  <Link to="/manageService" className="text-white">
                    <FontAwesomeIcon icon={faAlignLeft} />{" "}
                    <span>Manage Services</span>
                  </Link>
                </li>
            
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
