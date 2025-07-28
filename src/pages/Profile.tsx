import React, { useState } from 'react';
import { User, Settings, Shield, Bell, Globe, Moon, Sun, Smartphone, Key, History } from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import { useApp } from '../context/AppContext';

const Profile: React.FC = () => {
  const { state, updateUser, setLanguage, toggleTheme, toggleNotifications } = useApp();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: state.user.name,
    phone: state.user.phone,
    country: state.user.country
  });

  const handleSaveProfile = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const securityLogs = [
    { date: '2025-01-05 14:30', action: 'Login', device: 'Chrome on Windows', location: 'Baku, Azerbaijan' },
    { date: '2025-01-04 09:15', action: 'Password Changed', device: 'Mobile App', location: 'Baku, Azerbaijan' },
    { date: '2025-01-03 16:45', action: 'Login', device: 'Safari on iPhone', location: 'Baku, Azerbaijan' },
    { date: '2025-01-02 11:20', action: '2FA Enabled', device: 'Chrome on Windows', location: 'Baku, Azerbaijan' }
  ];

  const tabs = [
    { key: 'profile', label: 'Profile', icon: User },
    { key: 'settings', label: 'Settings', icon: Settings },
    { key: 'security', label: 'Security', icon: Shield }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Profile & Settings
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Manage your account information, preferences, and security settings.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-black/50 rounded-lg p-1 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all flex-1 justify-center ${
                activeTab === tab.key
                  ? 'bg-gold-600/20 text-gold-400'
                  : 'text-gold-600 hover:text-gold-400 hover:bg-gold-600/10'
              }`}
            >
              <Icon size={16} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <Card glow>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gold-400">Personal Information</h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  />
                ) : (
                  <p className="text-gold-600 bg-black/30 rounded-lg px-4 py-2">{state.user.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  />
                ) : (
                  <p className="text-gold-600 bg-black/30 rounded-lg px-4 py-2">{state.user.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">Country</label>
                {isEditing ? (
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  >
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Russia">Russia</option>
                  </select>
                ) : (
                  <p className="text-gold-600 bg-black/30 rounded-lg px-4 py-2">{state.user.country}</p>
                )}
              </div>

              {isEditing && (
                <Button onClick={handleSaveProfile} className="w-full">
                  Save Changes
                </Button>
              )}
            </div>
          </Card>

          {/* Account Overview */}
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Account Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gold-600">Account Balance:</span>
                  <span className="text-gold-400 font-semibold">${state.user.balance.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gold-600">Staked Tokens:</span>
                  <span className="text-green-400 font-semibold">{state.user.stakedTokens.toLocaleString()} BGC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gold-600">Account Type:</span>
                  <span className="text-blue-400 font-semibold">Premium</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gold-600">Member Since:</span>
                  <span className="text-gold-400">January 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gold-600">Total Trades:</span>
                  <span className="text-gold-400">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gold-600">Verification:</span>
                  <span className="text-green-400">✓ Verified</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Preferences</h2>
            
            <div className="space-y-6">
              {/* Language Settings */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="text-gold-400 w-5 h-5" />
                  <div>
                    <h3 className="text-gold-400 font-medium">Language</h3>
                    <p className="text-gold-600 text-sm">Choose your preferred language</p>
                  </div>
                </div>
                <select
                  value={state.selectedLanguage}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-black/50 border border-gold-600/30 rounded-lg px-3 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                >
                  <option value="en">English</option>
                  <option value="az">Azərbaycan</option>
                  <option value="tr">Türkçe</option>
                  <option value="ru">Русский</option>
                </select>
              </div>

              {/* Theme Settings */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {state.theme === 'dark' ? (
                    <Moon className="text-gold-400 w-5 h-5" />
                  ) : (
                    <Sun className="text-gold-400 w-5 h-5" />
                  )}
                  <div>
                    <h3 className="text-gold-400 font-medium">Theme</h3>
                    <p className="text-gold-600 text-sm">Switch between light and dark mode</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={toggleTheme}>
                  {state.theme === 'dark' ? 'Dark' : 'Light'} Mode
                </Button>
              </div>

              {/* Notification Settings */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="text-gold-400 w-5 h-5" />
                  <div>
                    <h3 className="text-gold-400 font-medium">Notifications</h3>
                    <p className="text-gold-600 text-sm">Receive alerts and updates</p>
                  </div>
                </div>
                <Button 
                  variant={state.notifications ? "primary" : "outline"} 
                  size="sm" 
                  onClick={toggleNotifications}
                >
                  {state.notifications ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
            </div>
          </Card>

          {/* Notification Preferences */}
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Notification Preferences</h2>
            
            <div className="space-y-4">
              {[
                { label: 'Price Alerts', description: 'Get notified when prices reach your targets' },
                { label: 'Trade Confirmations', description: 'Receive confirmations for all trades' },
                { label: 'Market News', description: 'Stay updated with market developments' },
                { label: 'Account Security', description: 'Security alerts and login notifications' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gold-400 font-medium">{item.label}</h3>
                    <p className="text-gold-600 text-sm">{item.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={index < 2}
                    className="w-4 h-4 text-gold-400 bg-black border-gold-600 rounded focus:ring-gold-400"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Security Settings</h2>
            
            <div className="space-y-6">
              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Smartphone className="text-green-400 w-5 h-5" />
                  <div>
                    <h3 className="text-gold-400 font-medium">Two-Factor Authentication</h3>
                    <p className="text-gold-600 text-sm">Add an extra layer of security to your account</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded text-sm font-medium">
                  Enabled
                </span>
              </div>

              {/* Change Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Key className="text-gold-400 w-5 h-5" />
                  <div>
                    <h3 className="text-gold-400 font-medium">Password</h3>
                    <p className="text-gold-600 text-sm">Last changed 30 days ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </div>

              {/* Login Sessions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <History className="text-gold-400 w-5 h-5" />
                  <div>
                    <h3 className="text-gold-400 font-medium">Active Sessions</h3>
                    <p className="text-gold-600 text-sm">Manage your active login sessions</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Sessions
                </Button>
              </div>
            </div>
          </Card>

          {/* Security Logs */}
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Recent Security Activity</h2>
            
            <div className="space-y-3">
              {securityLogs.map((log, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-400 font-medium">{log.action}</span>
                      <span className="text-gold-600 text-sm">•</span>
                      <span className="text-gold-600 text-sm">{log.device}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gold-600 mt-1">
                      <span>{log.date}</span>
                      <span>•</span>
                      <span>{log.location}</span>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </Card>

          {/* Account Actions */}
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Account Actions</h2>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                Download Account Data
              </Button>
              <Button variant="outline" className="w-full">
                Export Transaction History
              </Button>
              <Button variant="secondary" className="w-full text-red-400 border-red-600/30 hover:bg-red-600/10">
                Deactivate Account
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Profile;