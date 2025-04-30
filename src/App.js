import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import CaseManagement from './components/CaseManagement';
import ResourceHub from './components/ResourceHub';
import SupportCommunication from './components/SupportCommunication';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import NotificationCenter from './components/NotificationCenter';
import ProfilePreferences from './components/ProfilePreferences';
import AdminPanel from './components/AdminPanel';
import IntakeAssessment from './components/IntakeAssessment';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
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
      </div>
    </Router>
  );
};

export default App;
