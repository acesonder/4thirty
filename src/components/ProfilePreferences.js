import React, { useState } from 'react';

const ProfilePreferences = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    theme: 'light',
    fontSize: 'medium',
    language: 'en',
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile({
      ...profile,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const saveProfile = () => {
    // Save profile settings to the server or local storage
    console.log('Profile saved:', profile);
  };

  return (
    <div>
      <h2>Profile & Preferences</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Theme:
          <select
            name="theme"
            value={profile.theme}
            onChange={handleInputChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Font Size:
          <select
            name="fontSize"
            value={profile.fontSize}
            onChange={handleInputChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Language:
          <select
            name="language"
            value={profile.language}
            onChange={handleInputChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Consent:
          <input
            type="checkbox"
            name="consent"
            checked={profile.consent}
            onChange={handleInputChange}
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
};

export default ProfilePreferences;
