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
    securitySettings: {
      twoFactorAuth: false,
      loginHistory: [],
    },
    personalization: {
      colorScheme: 'default',
      notificationPreferences: {
        email: true,
        sms: false,
      },
    },
    accessibility: {
      screenReader: false,
      highContrast: false,
    },
    privacy: {
      dataSharing: false,
      activityLog: [],
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const keys = name.split('.');
    if (keys.length > 1) {
      setProfile((prevProfile) => {
        const updatedProfile = { ...prevProfile };
        let current = updatedProfile;
        for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = type === 'checkbox' ? checked : value;
        return updatedProfile;
      });
    } else {
      setProfile({
        ...profile,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
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
      <div>
        <h3>Security Settings</h3>
        <label>
          Two-Factor Authentication:
          <input
            type="checkbox"
            name="securitySettings.twoFactorAuth"
            checked={profile.securitySettings.twoFactorAuth}
            onChange={handleInputChange}
          />
        </label>
        <div>
          <h4>Login History</h4>
          <ul>
            {profile.securitySettings.loginHistory.map((login, index) => (
              <li key={index}>{login}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Personalization</h3>
        <label>
          Color Scheme:
          <select
            name="personalization.colorScheme"
            value={profile.personalization.colorScheme}
            onChange={handleInputChange}
          >
            <option value="default">Default</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
        <div>
          <h4>Notification Preferences</h4>
          <label>
            Email Notifications:
            <input
              type="checkbox"
              name="personalization.notificationPreferences.email"
              checked={profile.personalization.notificationPreferences.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            SMS Notifications:
            <input
              type="checkbox"
              name="personalization.notificationPreferences.sms"
              checked={profile.personalization.notificationPreferences.sms}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
      <div>
        <h3>Accessibility</h3>
        <label>
          Screen Reader:
          <input
            type="checkbox"
            name="accessibility.screenReader"
            checked={profile.accessibility.screenReader}
            onChange={handleInputChange}
          />
        </label>
        <label>
          High Contrast:
          <input
            type="checkbox"
            name="accessibility.highContrast"
            checked={profile.accessibility.highContrast}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <h3>Privacy</h3>
        <label>
          Data Sharing:
          <input
            type="checkbox"
            name="privacy.dataSharing"
            checked={profile.privacy.dataSharing}
            onChange={handleInputChange}
          />
        </label>
        <div>
          <h4>Activity Log</h4>
          <ul>
            {profile.privacy.activityLog.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
};

export default ProfilePreferences;
