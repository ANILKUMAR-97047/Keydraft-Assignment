import { useState } from 'react';

const BranchDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('All');
  
  const branches = ['All', 'SPL - CORPORATE', 'CHENNAI'];

  return (
    <div className="branch-wrapper">
      <span className="branch-label">Branch</span>
      <div className="branch-select">
        <div className="selected-branch" onClick={() => setIsOpen(!isOpen)}>
          {selected}
          <span className="arrow">▼</span>
        </div>
        {isOpen && (
          <div className="options">
            {branches.map(branch => (
              <div 
                key={branch}
                className={`option ${selected === branch ? 'active' : ''}`}
                onClick={() => {
                  setSelected(branch);
                  setIsOpen(false);
                }}
              >
                {branch}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BranchDropdown;