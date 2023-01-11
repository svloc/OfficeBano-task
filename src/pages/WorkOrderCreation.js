import React,{useState} from "react";
import './WorkOrderCreation.css';
import Overview from "./Overview";
import SideBar from "./SideBar";
export default function WorkOrderCreation(){
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
  <div className="main">
    <div className="header">
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}>Overview
        </div>
        <div
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}>Other
        </div>
      </div>
    </div>
    <div><SideBar/></div>
    </div>
    <div className="tab-content">
        {activeTab === "tab1" &&<Overview/> }
        {activeTab === "tab2" && <p>Hello world</p>}
    </div>
  </div>
  );
};


