import React from 'react';

const Step3 = ({ data }) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Address Line 1: {data.address1}</p>
        <p>Address Line 2: {data.address2}</p>
        <p>City: {data.city}</p>
        <p>State: {data.state}</p>
        <p>Zip Code: {data.zip}</p>
      </div>
    </div>
  );
};

export default Step3;
