import React, { useState } from 'react';
import { 
  Building2, 
  CreditCard, 
  DollarSign, 
  Plus, 
  Smartphone,
  Globe,
  Satellite,
  QrCode,
  MapPin
} from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import Modal from '../components/Common/Modal';

const BankCards: React.FC = () => {
  const [activeTab, setActiveTab] = useState('accounts');
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [showOrderCardModal, setShowOrderCardModal] = useState(false);
  const [selectedCardType, setSelectedCardType] = useState('classic');
  const [cardFormData, setCardFormData] = useState({
    name: '',
    phone: '',
    address: '',
    cardType: 'classic'
  });

  const bankAccounts = [
    {
      bank: 'International Bank of Azerbaijan',
      logo: '🏦',
      iban: 'AZ21NABZ00000000137010001944',
      balance: 15420.50,
      type: 'Current Account'
    },
    {
      bank: 'Kapital Bank',
      logo: '💳',
      iban: 'AZ64AIIB37190000010000000001',
      balance: 8750.25,
      type: 'Savings Account'
    }
  ];

  const loans = [
    {
      bank: 'International Bank of Azerbaijan',
      amount: 25000,
      interest: 12.5,
      duration: '36 months',
      monthlyPayment: 832.67,
      status: 'Active'
    },
    {
      bank: 'Kapital Bank',
      amount: 15000,
      interest: 14.2,
      duration: '24 months',
      monthlyPayment: 722.45,
      status: 'Completed'
    }
  ];

  const cardTypes = [
    {
      type: 'classic',
      name: 'Classic Card',
      design: 'Black background, gold text, barcode',
      features: [
        'Normal bank interest and commissions',
        'Barcode scanning support',
        'Cardholder Name + Phone Number',
        'Local bank recognition'
      ],
      recognition: 'Local banks only',
      price: 'Free'
    },
    {
      type: 'world',
      name: 'World Card',
      design: 'Black + dark gold tones, barcode',
      features: [
        'Lower fees, higher limits',
        'International transaction support',
        'Cardholder Name + Phone Number',
        'Enhanced security features'
      ],
      recognition: 'Local + integrated international banks',
      price: '$25 annually'
    },
    {
      type: 'premium',
      name: 'World Premium Card',
      design: 'Matte black, gold border, barcode',
      features: [
        'Premium banking privileges',
        'Solar-powered GPS tracking chip',
        'Track card via Black Gold App',
        'Cardholder Name + Phone Number',
        'Concierge services'
      ],
      recognition: 'Local + international integrated banks',
      price: '$100 annually'
    }
  ];

  const handleOrderCard = () => {
    setShowOrderCardModal(true);
  };

  const handleCardFormSubmit = () => {
    console.log('Card order submitted:', cardFormData);
    setShowOrderCardModal(false);
    // Reset form
    setCardFormData({
      name: '',
      phone: '',
      address: '',
      cardType: 'classic'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Banking & Payment Cards
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Manage your bank accounts, apply for loans, and order premium BLACK GOLD cards 
          with advanced features and global recognition.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-black/50 rounded-lg p-1 max-w-md mx-auto">
        {[
          { key: 'accounts', label: 'Bank Accounts', icon: Building2 },
          { key: 'loans', label: 'Loans', icon: DollarSign },
          { key: 'cards', label: 'Cards', icon: CreditCard }
        ].map((tab) => {
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

      {/* Bank Accounts Tab */}
      {activeTab === 'accounts' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gold-400">Your Bank Accounts</h2>
            <Button onClick={() => setShowAddAccountModal(true)}>
              <Plus size={16} className="mr-2" />
              Add Account
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bankAccounts.map((account, index) => (
              <Card key={index} glow>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{account.logo}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400">{account.bank}</h3>
                    <p className="text-sm text-gold-600">{account.type}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gold-600">IBAN:</span>
                    <span className="text-gold-400 font-mono text-sm">{account.iban}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gold-600">Balance:</span>
                    <span className="text-gold-400 font-semibold">${account.balance.toFixed(2)}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Loans Tab */}
      {activeTab === 'loans' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gold-400">Your Loans</h2>
            <Button onClick={() => setShowLoanModal(true)}>
              <Plus size={16} className="mr-2" />
              Apply for Loan
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {loans.map((loan, index) => (
              <Card key={index} glow>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gold-400">{loan.bank}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    loan.status === 'Active' 
                      ? 'bg-green-600/20 text-green-400' 
                      : 'bg-gray-600/20 text-gray-400'
                  }`}>
                    {loan.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gold-600">Amount:</span>
                    <p className="text-gold-400 font-semibold">${loan.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gold-600">Interest:</span>
                    <p className="text-gold-400 font-semibold">{loan.interest}%</p>
                  </div>
                  <div>
                    <span className="text-gold-600">Duration:</span>
                    <p className="text-gold-400 font-semibold">{loan.duration}</p>
                  </div>
                  <div>
                    <span className="text-gold-600">Monthly:</span>
                    <p className="text-gold-400 font-semibold">${loan.monthlyPayment}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Cards Tab */}
      {activeTab === 'cards' && (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gold-400 mb-4">BLACK GOLD Premium Cards</h2>
            <p className="text-gold-600">Choose from our exclusive card collection with advanced features</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cardTypes.map((card) => (
              <Card key={card.type} glow className={`relative ${
                selectedCardType === card.type ? 'ring-2 ring-gold-400' : ''
              }`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-600 to-gold-400 rounded-lg flex items-center justify-center">
                    {card.type === 'classic' && <CreditCard className="text-black w-8 h-8" />}
                    {card.type === 'world' && <Globe className="text-black w-8 h-8" />}
                    {card.type === 'premium' && <Satellite className="text-black w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gold-400 mb-2">{card.name}</h3>
                  <p className="text-gold-600 text-sm mb-4">{card.design}</p>
                  <p className="text-gold-400 font-semibold">{card.price}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-gold-400 font-medium">Features:</h4>
                  <ul className="space-y-2">
                    {card.features.map((feature, index) => (
                      <li key={index} className="text-gold-600 text-sm flex items-start space-x-2">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-gold-400 font-medium mb-2">Recognition:</h4>
                  <p className="text-gold-600 text-sm">{card.recognition}</p>
                </div>

                <Button 
                  onClick={() => {
                    setSelectedCardType(card.type);
                    setCardFormData({ ...cardFormData, cardType: card.type });
                    handleOrderCard();
                  }}
                  className="w-full"
                  variant={selectedCardType === card.type ? 'primary' : 'secondary'}
                >
                  Order {card.name}
                </Button>

                {card.type === 'premium' && (
                  <div className="mt-4 p-3 bg-gold-600/10 rounded-lg">
                    <div className="flex items-center space-x-2 text-gold-400 text-sm">
                      <MapPin size={14} />
                      <span>GPS Tracking Available</span>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Add Account Modal */}
      <Modal
        isOpen={showAddAccountModal}
        onClose={() => setShowAddAccountModal(false)}
        title="Add New Bank Account"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gold-400 text-sm font-medium mb-2">Bank Name</label>
            <input
              type="text"
              className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
              placeholder="Enter bank name"
            />
          </div>
          <div>
            <label className="block text-gold-400 text-sm font-medium mb-2">IBAN</label>
            <input
              type="text"
              className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
              placeholder="AZ21NABZ00000000137010001944"
            />
          </div>
          <div>
            <label className="block text-gold-400 text-sm font-medium mb-2">Account Type</label>
            <select className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none">
              <option value="current">Current Account</option>
              <option value="savings">Savings Account</option>
              <option value="business">Business Account</option>
            </select>
          </div>
          <Button className="w-full">Add Account</Button>
        </div>
      </Modal>

      {/* Loan Application Modal */}
      <Modal
        isOpen={showLoanModal}
        onClose={() => setShowLoanModal(false)}
        title="Apply for Loan"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gold-400 text-sm font-medium mb-2">Loan Amount</label>
            <input
              type="number"
              className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
              placeholder="25000"
            />
          </div>
          <div>
            <label className="block text-gold-400 text-sm font-medium mb-2">Purpose</label>
            <select className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none">
              <option value="business">Business Investment</option>
              <option value="personal">Personal Use</option>
              <option value="property">Property Purchase</option>
              <option value="education">Education</option>
            </select>
          </div>
          <div>
            <label className="block text-gold-400 text-sm font-medium mb-2">Loan Term</label>
            <select className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none">
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
            </select>
          </div>
          <div className="bg-gold-600/10 rounded-lg p-4">
            <p className="text-gold-400 text-sm">
              <strong>Estimated Interest:</strong> 12.5% APR<br/>
              <strong>Monthly Payment:</strong> ~$832.67<br/>
              <strong>Total Cost:</strong> ~$29,976
            </p>
          </div>
          <Button className="w-full">Submit Application</Button>
        </div>
      </Modal>

      {/* Order Card Modal */}
      <Modal
        isOpen={showOrderCardModal}
        onClose={() => setShowOrderCardModal(false)}
        title={`Order ${cardTypes.find(c => c.type === selectedCardType)?.name}`}
      >
        <div className="space-y-6">
          {/* Card Preview */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-6 border border-gold-600/30">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-gold-400 font-bold text-lg">BLACK GOLD</h3>
                <p className="text-gold-600 text-sm">
                  {cardTypes.find(c => c.type === selectedCardType)?.name}
                </p>
              </div>
              <QrCode className="text-gold-400 w-8 h-8" />
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-gold-400 font-mono">**** **** **** 1234</p>
              <div className="flex justify-between text-sm">
                <span className="text-gold-600">VALID THRU</span>
                <span className="text-gold-400">12/28</span>
              </div>
            </div>
            <div className="border-t border-gold-600/20 pt-4">
              <p className="text-gold-400 text-sm">{cardFormData.name || 'CARD HOLDER NAME'}</p>
              <p className="text-gold-600 text-xs">{cardFormData.phone || '+994 XX XXX XX XX'}</p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-gold-400 text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={cardFormData.name}
                onChange={(e) => setCardFormData({ ...cardFormData, name: e.target.value })}
                className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gold-400 text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={cardFormData.phone}
                onChange={(e) => setCardFormData({ ...cardFormData, phone: e.target.value })}
                className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                placeholder="+994 XX XXX XX XX"
              />
            </div>
            <div>
              <label className="block text-gold-400 text-sm font-medium mb-2">Delivery Address</label>
              <textarea
                value={cardFormData.address}
                onChange={(e) => setCardFormData({ ...cardFormData, address: e.target.value })}
                className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none h-20"
                placeholder="Enter your full address for card delivery"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <Button variant="outline" onClick={() => setShowOrderCardModal(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleCardFormSubmit} className="flex-1">
              Order Card
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BankCards;