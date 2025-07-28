import React, { useState } from 'react';
import { 
  Info as InfoIcon, 
  Target, 
  Users, 
  Briefcase, 
  HelpCircle, 
  Mail, 
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';

const Info: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const tabs = [
    { key: 'about', label: 'About Us', icon: InfoIcon },
    { key: 'services', label: 'Services', icon: Target },
    { key: 'projects', label: 'Projects', icon: Briefcase },
    { key: 'careers', label: 'Careers', icon: Users },
    { key: 'support', label: 'Support', icon: HelpCircle },
    { key: 'contact', label: 'Contact', icon: Mail }
  ];

  const services = [
    {
      title: 'Energy Trading Platform',
      description: 'Advanced trading platform for oil, renewable energy, and tokenized assets with real-time market data.',
      features: ['Real-time pricing', 'Advanced charts', 'Risk management', 'Mobile trading']
    },
    {
      title: 'Staking & Investment',
      description: 'Earn passive income by staking tokens in energy projects and renewable infrastructure.',
      features: ['High APY returns', 'Flexible terms', 'Compound interest', 'Risk diversification']
    },
    {
      title: 'Premium Banking Cards',
      description: 'Exclusive BLACK GOLD cards with GPS tracking, global recognition, and premium benefits.',
      features: ['GPS tracking', 'Global acceptance', 'Premium support', 'Exclusive rewards']
    },
    {
      title: 'AI Market Analysis',
      description: 'Cutting-edge AI algorithms provide accurate price predictions and market insights.',
      features: ['Price forecasting', 'Risk assessment', 'Market trends', 'Investment signals']
    }
  ];

  const projects = [
    {
      title: 'Caspian Solar Initiative',
      status: 'Active',
      investment: '$2.5M',
      description: 'Large-scale solar farm development along the Caspian Sea coast.',
      completion: 75
    },
    {
      title: 'Wind Energy Expansion',
      status: 'Active',
      investment: '$3.2M',
      description: 'Installation of modern wind turbines for sustainable energy generation.',
      completion: 60
    },
    {
      title: 'Smart Grid Infrastructure',
      status: 'Planning',
      investment: '$5.8M',
      description: 'Development of intelligent energy distribution networks.',
      completion: 25
    },
    {
      title: 'Carbon Capture Technology',
      status: 'Research',
      investment: '$4.5M',
      description: 'Advanced carbon capture and storage solutions for industrial applications.',
      completion: 15
    }
  ];

  const jobOpenings = [
    {
      title: 'Senior Blockchain Developer',
      department: 'Technology',
      location: 'Baku, Azerbaijan',
      type: 'Full-time',
      experience: '5+ years'
    },
    {
      title: 'Energy Market Analyst',
      department: 'Research',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Baku, Azerbaijan',
      type: 'Full-time',
      experience: '2+ years'
    },
    {
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2+ years'
    }
  ];

  const faqData = [
    {
      question: 'What is BLACK GOLD Platform?',
      answer: 'BLACK GOLD is a comprehensive financial platform focused on energy trading, renewable investments, and digital asset management. We combine traditional energy markets with modern blockchain technology.'
    },
    {
      question: 'How do I start trading on the platform?',
      answer: 'Simply create an account, complete the verification process, deposit funds, and start trading. Our platform supports cryptocurrency, tokenized stocks, and energy assets.'
    },
    {
      question: 'What are the staking rewards?',
      answer: 'Staking rewards vary by asset and duration. Our energy staking plans offer APY rates from 8% to 18%, depending on the lock period and investment amount.'
    },
    {
      question: 'How secure is my investment?',
      answer: 'We use bank-level security, including 2FA, cold storage for digital assets, and comprehensive insurance coverage. All transactions are secured by blockchain technology.'
    },
    {
      question: 'Can I withdraw my funds anytime?',
      answer: 'Yes, you can withdraw available funds anytime. Staked tokens have specific lock periods, but you can unstake after the commitment period ends.'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Information & Contact
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Learn more about BLACK GOLD Platform, our services, ongoing projects, 
          and how to get in touch with our team.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 bg-black/50 rounded-lg p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
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

      {/* About Us Tab */}
      {activeTab === 'about' && (
        <div className="space-y-8">
          <Card glow>
            <h2 className="text-2xl font-semibold text-gold-400 mb-6">About BLACK GOLD Platform</h2>
            <div className="space-y-4 text-gold-600">
              <p className="leading-relaxed">
                BLACK GOLD Platform represents the future of energy trading and sustainable investment. 
                Founded with the vision of bridging traditional energy markets with cutting-edge blockchain technology, 
                we provide a comprehensive ecosystem for traders, investors, and institutions.
              </p>
              <p className="leading-relaxed">
                Our platform combines the stability of energy commodities with the innovation of digital assets, 
                offering unique opportunities in oil futures, renewable energy projects, and tokenized investments. 
                We are committed to supporting the global transition to sustainable energy while providing 
                exceptional returns for our community.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card glow className="text-center">
              <Target className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gold-400 mb-3">Our Mission</h3>
              <p className="text-gold-600 text-sm">
                To democratize energy trading and accelerate the adoption of renewable energy 
                through innovative financial technology.
              </p>
            </Card>

            <Card glow className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gold-400 mb-3">Our Vision</h3>
              <p className="text-gold-600 text-sm">
                To become the leading global platform for sustainable energy investments 
                and digital asset management.
              </p>
            </Card>

            <Card glow className="text-center">
              <Briefcase className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gold-400 mb-3">Our Values</h3>
              <p className="text-gold-600 text-sm">
                Transparency, innovation, sustainability, and community-driven growth 
                guide everything we do.
              </p>
            </Card>
          </div>
        </div>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gold-400 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} glow>
                <h3 className="text-xl font-semibold text-gold-400 mb-4">{service.title}</h3>
                <p className="text-gold-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-gold-400 font-medium">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gold-600 text-sm flex items-center space-x-2">
                        <span className="text-gold-400">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gold-400 text-center">Our Projects</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} glow>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gold-400">{project.title}</h3>
                    <p className="text-gold-600 text-sm">Investment: {project.investment}</p>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    project.status === 'Active' ? 'bg-green-600/20 text-green-400' :
                    project.status === 'Planning' ? 'bg-blue-600/20 text-blue-400' :
                    'bg-orange-600/20 text-orange-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gold-600 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gold-600">Progress</span>
                    <span className="text-gold-400">{project.completion}%</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gold-600 to-gold-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Careers Tab */}
      {activeTab === 'careers' && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gold-400 mb-4">Join Our Team</h2>
            <p className="text-gold-600 max-w-2xl mx-auto">
              We're looking for talented individuals who share our passion for innovation, 
              sustainability, and financial technology. Join us in shaping the future of energy trading.
            </p>
          </div>
          
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <Card key={index} glow>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">{job.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gold-600">
                      <div>
                        <span className="block text-gold-400">Department</span>
                        <span>{job.department}</span>
                      </div>
                      <div>
                        <span className="block text-gold-400">Location</span>
                        <span>{job.location}</span>
                      </div>
                      <div>
                        <span className="block text-gold-400">Type</span>
                        <span>{job.type}</span>
                      </div>
                      <div>
                        <span className="block text-gold-400">Experience</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="ml-4">Apply Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Support Tab */}
      {activeTab === 'support' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gold-400 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} glow>
                <h3 className="text-lg font-semibold text-gold-400 mb-3">{faq.question}</h3>
                <p className="text-gold-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <Card glow className="text-center">
            <h3 className="text-xl font-semibold text-gold-400 mb-4">Need More Help?</h3>
            <p className="text-gold-600 mb-6">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Live Chat Support</Button>
              <Button variant="outline">Email Support</Button>
              <Button variant="outline">Call Support</Button>
            </div>
          </Card>
        </div>
      )}

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-gold-400 w-6 h-6" />
                <div>
                  <h3 className="text-gold-400 font-medium">Phone</h3>
                  <p className="text-gold-600">+994 55 552 57 47</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-gold-400 w-6 h-6" />
                <div>
                  <h3 className="text-gold-400 font-medium">Email</h3>
                  <p className="text-gold-600">blackgoldcoinoffice@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-gold-400 w-6 h-6" />
                <div>
                  <h3 className="text-gold-400 font-medium">Address</h3>
                  <p className="text-gold-600">
                    Baku, Azerbaijan<br />
                    Financial District
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-gold-400 font-medium mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm text-gold-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card glow>
            <h2 className="text-xl font-semibold text-gold-400 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">Subject</label>
                <select
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-gold-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none h-32"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Info;