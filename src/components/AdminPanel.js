import React, { useState } from 'react';
import UserManagement from './UserManagement';
import CaseManagement from './CaseManagement';
import NotificationCenter from './NotificationCenter';
import AnalyticsDashboard from './AnalyticsDashboard';
import ProfilePreferences from './ProfilePreferences';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('userManagement');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'userManagement':
        return <UserManagement />;
      case 'caseManagement':
        return <CaseManagement />;
      case 'notificationCenter':
        return <NotificationCenter />;
      case 'analyticsDashboard':
        return <AnalyticsDashboard />;
      case 'profilePreferences':
        return <ProfilePreferences />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <button onClick={() => setActiveTab('userManagement')}>User Management</button>
        <button onClick={() => setActiveTab('caseManagement')}>Case Management</button>
        <button onClick={() => setActiveTab('notificationCenter')}>Notification Center</button>
        <button onClick={() => setActiveTab('analyticsDashboard')}>Analytics Dashboard</button>
        <button onClick={() => setActiveTab('profilePreferences')}>Profile & Preferences</button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default AdminPanel;
