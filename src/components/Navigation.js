import React from 'react';

const Navigation = ({ step, handleNext, handleBack, handleSubmit }) => {
  return (
    <div>
      {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
      {step < 3 && <button type="button" onClick={handleNext}>Next</button>}
      {step === 3 && <button type="submit">Submit</button>}
    </div>
  );
};

export default Navigation;
