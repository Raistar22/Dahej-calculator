// src/App.js
import React, { useState } from 'react';
import DowryForm from './components/DowryForm';
import DowryResult from './components/DowryResult';
import './App.css';

const App = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    brideAge: '',
    groomAge: '',
    brideProfession: '',
    groomProfession: '',
    brideSalary: '',
    groomSalary: '',
    residentialType: '',
    location: '',
  });

  // State to store the calculated dowry
  const [dowry, setDowry] = useState(null);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to determine profession multiplier
  const getProfessionMultiplier = (profession) => {
    switch (profession) {
      case 'doctor':
        return 3;
      case 'engineer':
        return 2.5;
      case 'teacher':
        return 2;
      case 'other':
        return 1.5;
      default:
        return 1;
    }
  };

  // Function to determine residential factor
  const getResidentialFactor = (type) => {
    switch (type) {
      case 'owned':
        return 3000;
      case 'rented':
        return 2000;
      case 'mortgage':
        return 2500;
      default:
        return 0;
    }
  };

  // Function to determine location factor
  const getLocationFactor = (location) => {
    switch (location) {
      case 'urban':
        return 4000;
      case 'semi-urban':
        return 2500;
      case 'rural':
        return 1500;
      default:
        return 0;
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize dowry with a base amount
    let calculatedDowry = 5000;

    // Calculate average age factor
    const brideAge = Number(formData.brideAge);
    const groomAge = Number(formData.groomAge);
    const averageAge = (brideAge + groomAge) / 2;
    calculatedDowry += averageAge * 100;

    // Calculate profession factor
    const brideProfessionMultiplier = getProfessionMultiplier(formData.brideProfession);
    const groomProfessionMultiplier = getProfessionMultiplier(formData.groomProfession);
    const totalProfessionMultiplier = brideProfessionMultiplier + groomProfessionMultiplier;
    calculatedDowry += totalProfessionMultiplier * 500;

    // Calculate salary factor
    const brideSalary = Number(formData.brideSalary);
    const groomSalary = Number(formData.groomSalary);
    const totalSalary = brideSalary + groomSalary;
    calculatedDowry += totalSalary * 2;

    // Add residential factor
    calculatedDowry += getResidentialFactor(formData.residentialType);

    // Add location factor
    calculatedDowry += getLocationFactor(formData.location);

    // Update the dowry state with the calculated value
    setDowry(calculatedDowry);
  };

  return (
    <div className="App">
      <DowryForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {dowry !== null && <DowryResult dowry={dowry} />}
    </div>
  );
};

export default App;
