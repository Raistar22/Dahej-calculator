// src/components/DowryForm.js
import React from 'react';
import './DowryForm.css'; // Ensure this import is present

const DowryForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="dowry-form">
      <h2>Dahej Calculator</h2>

      {/* Grouping Age and Profession */}
      <div className="form-row">
        {/* Bride's Age */}
        <div className="form-group">
          <label>
            <i className="fas fa-user-circle"></i> Dulhan ki Age:
          </label>
          <input
            type="number"
            name="brideAge"
            value={formData.brideAge}
            onChange={handleChange}
            required
            className="styled-input"
          />
        </div>

        {/* Groom's Age */}
        <div className="form-group">
          <label>
            <i className="fas fa-user-circle"></i> Dulhe ka Age:
          </label>
          <input
            type="number"
            name="groomAge"
            value={formData.groomAge}
            onChange={handleChange}
            required
            className="styled-input"
          />
        </div>
      </div>

      {/* Grouping Professions */}
      <div className="form-row">
        {/* Bride's Profession */}
        <div className="form-group">
          <label>
            <i className="fas fa-briefcase"></i> Dulhan ka  Profession:
          </label>
          <div className="select-wrapper">
            <select
              name="brideProfession"
              value={formData.brideProfession}
              onChange={handleChange}
              required
              className="styled-select"
            >
              <option value="">Select Profession</option>
              <option value="doctor">Doctor</option>
              <option value="engineer">Engineer</option>
              <option value="teacher">Teacher</option>
              <option value="advocate">Advocate</option>
              <option value="watchman">Watchman</option>
              <option value="fireworker">Fireworker</option>
              <option value="truckdriver">Truck Driver</option>
              <option value="businessman">Businessman</option>
              <option value="Berozgaar">Muft ki roti todte ho</option>
              <option value="baap ka paisa">Ghar oe bojh ho</option>
              <option value="other">Other</option>
            </select>
            <span className="arrow"></span>
          </div>
        </div>

        {/* Groom's Profession */}
        <div className="form-group">
          <label>
            <i className="fas fa-briefcase"></i> Dulhe ka Profession:
          </label>
          <div className="select-wrapper">
            <select
              name="groomProfession"
              value={formData.groomProfession}
              onChange={handleChange}
              required
              className="styled-select"
            >
              <option value="">Select Profession</option>
              <option value="doctor">Doctor</option>
              <option value="engineer">Engineer</option>
              <option value="teacher">Teacher</option>
              <option value="advocate">Advocate</option>
              <option value="watchman">Watchman</option>
              <option value="fireworker">Fireworker</option>
              <option value="truckdriver">Truck Driver</option>
              <option value="businessman">Businessman</option>
              <option value="Berozgaar">Muft ki roti todte ho</option>
              <option value="baap ka paisa">Ghar oe bojh ho</option>
              <option value="other">Other</option>
            </select>
            <span className="arrow"></span>
          </div>
        </div>
      </div>

      {/* Grouping Salaries */}
      <div className="form-row">
        {/* Bride's Monthly Salary */}
        <div className="form-group">
          <label>
            <i className="fas fa-dollar-sign"></i> Dulhan ki Monthly Salary ($):
          </label>
          <input
            type="number"
            name="brideSalary"
            value={formData.brideSalary}
            onChange={handleChange}
            required
            className="styled-input"
          />
        </div>

        {/* Groom's Monthly Salary */}
        <div className="form-group">
          <label>
            <i className="fas fa-dollar-sign"></i> Dulhe ki Monthly Salary ($):
          </label>
          <input
            type="number"
            name="groomSalary"
            value={formData.groomSalary}
            onChange={handleChange}
            required
            className="styled-input"
          />
        </div>
      </div>

      {/* Grouping Residential Type and Location */}
      <div className="form-row">
        {/* Residential Type */}
        <div className="form-group">
          <label>
            <i className="fas fa-home"></i> Residential Type:
          </label>
          <div className="select-wrapper">
            <select
              name="residentialType"
              value={formData.residentialType}
              onChange={handleChange}
              required
              className="styled-select"
            >
              <option value="">Select Type</option>
              <option value="owned">Owned</option>
              <option value="rented">Rented</option>
              <option value="mortgage">Mortgage</option>
            </select>
            <span className="arrow"></span>
          </div>
        </div>

        {/* Location */}
        <div className="form-group">
          <label>
            <i className="fas fa-map-marker-alt"></i> Location:
          </label>
          <div className="select-wrapper">
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="styled-select"
            >
              <option value="">Select Location</option>
              <option value="urban">Urban</option>
              <option value="semi-urban">Semi-Urban</option>
              <option value="rural">Rural</option>
            </select>
            <span className="arrow"></span>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button">
        Calculate Dowry
      </button>
    </form>
  );
};

export default DowryForm;
