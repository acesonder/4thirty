import React, { useState } from 'react';

const IntakeAssessment = () => {
  const [consentForm, setConsentForm] = useState({ name: '', consent: false });
  const [generalIntakeForm, setGeneralIntakeForm] = useState({ name: '', age: '', needs: '' });
  const [specificAssessmentForms, setSpecificAssessmentForms] = useState({
    housing: { status: '', needs: '' },
    mentalHealth: { status: '', needs: '' },
  });

  const handleInputChange = (e, formType, field) => {
    const { value } = e.target;
    if (formType === 'consent') {
      setConsentForm({ ...consentForm, [field]: value });
    } else if (formType === 'general') {
      setGeneralIntakeForm({ ...generalIntakeForm, [field]: value });
    } else {
      setSpecificAssessmentForms({
        ...specificAssessmentForms,
        [formType]: { ...specificAssessmentForms[formType], [field]: value },
      });
    }
  };

  const handleCheckboxChange = (e) => {
    setConsentForm({ ...consentForm, consent: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h2>Intake & Assessment</h2>
      <form onSubmit={handleSubmit}>
        <h3>Consent Form</h3>
        <input
          type="text"
          value={consentForm.name}
          onChange={(e) => handleInputChange(e, 'consent', 'name')}
          placeholder="Name"
        />
        <label>
          <input
            type="checkbox"
            checked={consentForm.consent}
            onChange={handleCheckboxChange}
          />
          I consent
        </label>

        <h3>General Intake Form</h3>
        <input
          type="text"
          value={generalIntakeForm.name}
          onChange={(e) => handleInputChange(e, 'general', 'name')}
          placeholder="Name"
        />
        <input
          type="text"
          value={generalIntakeForm.age}
          onChange={(e) => handleInputChange(e, 'general', 'age')}
          placeholder="Age"
        />
        <input
          type="text"
          value={generalIntakeForm.needs}
          onChange={(e) => handleInputChange(e, 'general', 'needs')}
          placeholder="Needs"
        />

        <h3>Housing Assessment Form</h3>
        <input
          type="text"
          value={specificAssessmentForms.housing.status}
          onChange={(e) => handleInputChange(e, 'housing', 'status')}
          placeholder="Housing Status"
        />
        <input
          type="text"
          value={specificAssessmentForms.housing.needs}
          onChange={(e) => handleInputChange(e, 'housing', 'needs')}
          placeholder="Housing Needs"
        />

        <h3>Mental Health Assessment Form</h3>
        <input
          type="text"
          value={specificAssessmentForms.mentalHealth.status}
          onChange={(e) => handleInputChange(e, 'mentalHealth', 'status')}
          placeholder="Mental Health Status"
        />
        <input
          type="text"
          value={specificAssessmentForms.mentalHealth.needs}
          onChange={(e) => handleInputChange(e, 'mentalHealth', 'needs')}
          placeholder="Mental Health Needs"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IntakeAssessment;
