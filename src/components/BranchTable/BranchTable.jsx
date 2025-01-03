import { useState } from "react";
import { Link } from "react-router-dom";
import "./BranchTable.css";
import Sidebar from "../Sidebar/Sidebar";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { MdFullscreen } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";
import { MdViewColumn } from "react-icons/md";




const BranchTable = () => {
  const [data] = useState([
    {
      id: 1,
      branchName: "SPL - CORPORATE",
      branchCode: "C001",
      branchShortName: "SPL",
      locality: "chennaiii",
      city: "CHENNAI",
      state: "TAMIL NADU",
      contactPerson: "S SRINIVASAN",
      contactPersonPhone: "9940093856",
      panNo:"AAACS4949P",
      gstNo:"33AAACS4949P1ZU",
      status:"Active",
      action:""
      
    },
    {
      id: 2,
      branchName: "CHENNAI",
      branchCode: "B001",
      branchShortName: "CHN",
      locality: "Alandur(Reopened W.E.F.6.6.05) S.O",
      city: "CHENNAI",
      state: "TAMIL NADU",
      contactPerson: "",
      contactPersonPhone: "",
      panNo:"AAACS4949P",
      gstNo:"33AAACS4949P1ZU",
      status:"Active",
      action:""
    },
  ]);

  return (
    <div className="branch-table-container">
      <Sidebar/>
    <div className="branch-container">
      {/* Header */}
      <div className="branch-header">
        <h2>Branch</h2>
        <div className="view-controls">
          <button className="icon-button">
            <span className="material-icons"><MdFileUpload/></span>
          </button>
          <button className="icon-button">
            <span className="material-icons"><PiMicrosoftExcelLogo/></span>
          </button>
          <button className="icon-button">
            <span className="material-icons"><MdViewColumn/></span>
          </button>
          <button className="icon-button">
            <span className="material-icons"><MdFullscreen/></span>
          </button>
        </div>
      </div>

      {/* Search and Add Bar */}
      <div className="search-bar">
        <Link to="/branchmanagementform">
          <button className="add-button">
            <span className="material-icons">add</span>
          </button>
        </Link>
        <div className="search-input-container">
         
          <input type="search" placeholder="Search" className="search-input" />
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Branch Name</th>
              <th>Branch Code</th>
              <th>Branch Short Name</th>
              <th>Locality</th>
              <th>City</th>
              <th>State</th>
              <th>Contact Person</th>
              <th>Contact Person Phone</th>
              <th>Pan No</th>
              <th>GSTIN</th>
              <th>Status</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.branchName}</td>
                <td>{row.branchCode}</td>
                <td>{row.branchShortName}</td>
                <td>{row.locality}</td>
                <td>{row.city}</td>
                <td>{row.state}</td>
                <td>{row.contactPerson}</td>
                <td>{row.contactPersonPhone}</td>
                <td>{row.panNo}</td>
                <td>{row.gstNo}</td>
                <td>{row.status}</td>
                <td>{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <div className="rows-per-page">
          <span>Rows per page</span>
          <select defaultValue="10">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="page-controls">
          <span>1-2 of 2</span>
          <div className="page-buttons">
            <button disabled>&lt;</button>
            <button disabled>&gt;</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BranchTable;
