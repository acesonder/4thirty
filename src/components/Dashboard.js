import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserManagement from './UserManagement';
import CaseManagement from './CaseManagement';
import ResourceHub from './ResourceHub';
import SupportCommunication from './SupportCommunication';
import AnalyticsDashboard from './AnalyticsDashboard';
import NotificationCenter from './NotificationCenter';
import ProfilePreferences from './ProfilePreferences';
import AdminPanel from './AdminPanel';
import IntakeAssessment from './IntakeAssessment';

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard">
        <nav>
          <ul>
            <li><Link to="/user-management">User Management</Link></li>
            <li><Link to="/case-management">Case Management</Link></li>
            <li><Link to="/resource-hub">Resource Hub</Link></li>
            <li><Link to="/support-communication">Support & Communication</Link></li>
            <li><Link to="/analytics-dashboard">Analytics Dashboard</Link></li>
            <li><Link to="/notification-center">Notification Center</Link></li>
            <li><Link to="/profile-preferences">Profile & Preferences</Link></li>
            <li><Link to="/admin-panel">Admin Panel</Link></li>
            <li><Link to="/intake-assessment">Intake & Assessment</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/user-management" component={UserManagement} />
            <Route path="/case-management" component={CaseManagement} />
            <Route path="/resource-hub" component={ResourceHub} />
            <Route path="/support-communication" component={SupportCommunication} />
            <Route path="/analytics-dashboard" component={AnalyticsDashboard} />
            <Route path="/notification-center" component={NotificationCenter} />
            <Route path="/profile-preferences" component={ProfilePreferences} />
            <Route path="/admin-panel" component={AdminPanel} />
            <Route path="/intake-assessment" component={IntakeAssessment} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Dashboard;
