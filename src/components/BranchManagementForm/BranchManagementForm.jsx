
import Sidebar from "../Sidebar/Sidebar";
import "./BranchManagementForm.css";

const BranchManagementForm = () => {
  return (
    <div className="container">
      <Sidebar/>
      <div className="form-container">
        <h2>Manage Branch</h2>
        <form className="branch-form">
          {/* Branch Details Section */}
          <section className="section">
            <h3>1. Branch Details</h3>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                placeholder="Branch Code *"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Branch Name *"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Branch Short Name *"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Pincode *"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Door/Flat/House No"
              />
              <input className="input-field" type="text" placeholder="Street" />
              <input
                className="input-field"
                type="text"
                placeholder="Locality *"
              />
              <input className="input-field" type="text" placeholder="City *" />
              <select>
                <option  value="" disabled selected>
                  State *
                </option>
              </select>
              <input className="input-field" type="text" placeholder="PAN No" />
              <input className="input-field" type="text" placeholder="GSTIN" />
              <select>
                <option value="" disabled selected>
                  Branch Type *
                </option>
                {/* Add branch type options */}
              </select>
              <select>
                <option value="" disabled selected>
                  Vehicle Type *
                </option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
              </select>
            </div>
          </section>

          {/* Branch Contact Details */}
          <section className="section">
            <h3>2. Branch Contact Details</h3>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                placeholder="Contact No"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Alternate Contact No"
              />
              <input
                className="input-field"
                type="email"
                placeholder="Email ID"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Whatsapp Number"
              />
            </div>
          </section>

          {/* Branch Incharge Details */}
          <section className="section">
            <h3>3. Branch Incharge Details</h3>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                placeholder="Branch Incharge Name"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Contact No"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Alternate Contact No"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Whatsapp Number"
              />
              <input
                className="input-field"
                type="email"
                placeholder="Email ID"
              />
            </div>
          </section>

          {/* Contact Person Details */}
          <section className="section">
            <h3>4. Contact Person Details</h3>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                placeholder="Contact Person Name"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Contact No"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Alternate Contact No"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Whatsapp Number"
              />
              <input
                className="input-field"
                type="email"
                placeholder="Email ID"
              />
            </div>
          </section>

          {/* Opening Details */}
          <section className="section">
            <h3>5. Opening Details</h3>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                placeholder="Opening Balance"
              />
              <input
                className="input-field"
                type="date"
                placeholder="Opening Date"
              />
            </div>
          </section>

          {/* Advance Request Details */}
          <section className="section">
            <h3>6. Advance Request Details</h3>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                placeholder="Minimum Amount"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Maximum Amount"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Maximum Unallocated Amount"
              />
              <input
                className="input-field"
                type="date"
                placeholder="Effective Date"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Monthly Maximum Amount"
              />
            </div>
          </section>

          {/* Bank Details */}
          <section className="section">
            <h3>7. Bank Details</h3>
            <div className="form-grid">
              <input
                className="input-field"
                type="text"
                placeholder="Account Number"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Account Holder Name"
              />
              <input
                className="input-field"
                type="text"
                placeholder="IFSC Code"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Branch Name"
              />
            </div>
          </section>

          {/* Form Footer */}
          <div className="form-footer">
            <input type="checkbox"  className="switch" />
            <label className="label">Status</label>

            <button type="button" className="discard-btn">
              Discard
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BranchManagementForm;
