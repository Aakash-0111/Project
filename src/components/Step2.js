import React from 'react';

const Step2 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <div>
        <label>Address Line 1</label>
        <input
          type="text"
          name="address1"
          value={data.address1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address Line 2</label>
        <input
          type="text"
          name="address2"
          value={data.address2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          name="state"
          value={data.state}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          value={data.zip}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default Step2;
