import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import BranchManagementForm from "./components/BranchManagementForm/BranchManagementForm";
import BranchTable from "./components/BranchTable/BranchTable";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branchtable" element={<BranchTable />} />
        <Route path="/branchmanagementform" element={<BranchManagementForm/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
