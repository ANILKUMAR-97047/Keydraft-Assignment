//import React from 'react';
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import BranchDropdown from "../BranchDropdown/BranchDropdown";
const Home = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="dashboard">
        {/* Header Section */}
        <div className="header">
          <div className="logo-section">
            <BranchDropdown />
          </div>

          <div className="date-picker">
            <div className="date-input">
              <span>From Date</span>
              <input type="date" defaultValue="2025-01-01" />
            </div>
            <div className="date-input">
              <span>To Date</span>
              <input type="date" defaultValue="2025-02-01" />
            </div>
          </div>
        </div>

        {/* First Row Cards */}
        <div className="cards-row">
          <div className="card blue">
            <div className="card-header">
              <span className="icon">🎟️</span>
              <span className="count">0</span>
            </div>
            <div className="card-label">Coupon Requested</div>
          </div>

          <div className="card green">
            <div className="card-header">
              <span className="icon">📝</span>
              <span className="count">0</span>
            </div>
            <div className="card-label">Coupon Approved</div>
          </div>

          <div className="card teal">
            <div className="card-header">
              <span className="icon">🎫</span>
              <span className="count">0</span>
            </div>
            <div className="card-label">Coupon Generated</div>
          </div>

          <div className="card lime">
            <div className="card-header">
              <span className="icon">💉</span>
              <span className="count">0</span>
            </div>
            <div className="card-label">Coupon Utilized</div>
          </div>
        </div>

        {/* Second Row Cards */}
        <div className="cards-row">
          <div className="card gray">
            <div className="card-header">
              <span className="icon">⏱️</span>
              <span className="count">0</span>
            </div>
            <div className="card-label">Coupon InProgress</div>
          </div>

          <div className="card red">
            <div className="card-header">
              <span className="icon">⛔</span>
              <span className="count">0</span>
            </div>
            <div className="card-label">Coupon Cancelled</div>
          </div>

          <div className="card amber">
            <div className="card-header">
              <span className="icon">🚛</span>
              <span className="count">0</span>
            </div>
            <div className="card-label">Vehicles</div>
          </div>
        </div>

        {/* PFS Section */}
        <div className="pfs-section">
          <h2>PFS Wise Consumption</h2>
          <div className="pfs-content">
            <div className="no-data">
              PFS Wise Consumption (0 Ltrs)
              <div className="sub-text">No data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
