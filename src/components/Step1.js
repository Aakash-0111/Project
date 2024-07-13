import React from 'react';

const Step1 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default Step1;
