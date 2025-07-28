import React, { useState } from 'react';
import { Leaf, Sun, Wind, Trees, Waves, Target, Users, Calendar } from 'lucide-react';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import Modal from '../components/Common/Modal';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: any;
  progress: number;
  target: string;
  raised: string;
  participants: number;
  deadline: string;
  details: string;
  impact: string;
  location: string;
}

const EcologyProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Solar Farm Initiative',
      description: 'Large-scale solar panel installation across Azerbaijan',
      icon: Sun,
      progress: 75,
      target: '$2.5M',
      raised: '$1.875M',
      participants: 1247,
      deadline: '2025-06-30',
      details: 'This ambitious solar farm project aims to install 50,000 solar panels across 500 hectares in the Gobustan region. The project will generate clean energy for over 25,000 households while creating 200+ permanent jobs.',
      impact: '150,000 tons CO2 reduction annually',
      location: 'Gobustan, Azerbaijan'
    },
    {
      id: 2,
      title: 'Wind Energy Expansion',
      description: 'Modern wind turbines for sustainable energy generation',
      icon: Wind,
      progress: 60,
      target: '$3.2M',
      raised: '$1.92M',
      participants: 892,
      deadline: '2025-09-15',
      details: 'Installation of 25 advanced wind turbines along the Caspian Sea coast. Each turbine can generate 3MW of clean energy, contributing significantly to Azerbaijan\'s renewable energy goals.',
      impact: '200,000 tons CO2 reduction annually',
      location: 'Caspian Sea Coast'
    },
    {
      id: 3,
      title: 'Forest Preservation',
      description: 'Protecting ancient forests and biodiversity',
      icon: Trees,
      progress: 45,
      target: '$1.8M',
      raised: '$810K',
      participants: 2156,
      deadline: '2025-12-31',
      details: 'Conservation of 10,000 hectares of ancient forest in the Greater Caucasus region. Includes wildlife protection, reforestation efforts, and sustainable tourism development.',
      impact: 'Protecting 500+ species, 80,000 tons CO2 storage',
      location: 'Greater Caucasus Mountains'
    },
    {
      id: 4,
      title: 'Carbon Offsetting Program',
      description: 'Advanced carbon capture and storage technology',
      icon: Leaf,
      progress: 30,
      target: '$4.5M',
      raised: '$1.35M',
      participants: 567,
      deadline: '2026-03-20',
      details: 'Deployment of cutting-edge carbon capture technology across industrial zones. This program will capture and store CO2 emissions from major industrial facilities.',
      impact: '500,000 tons CO2 captured annually',
      location: 'Industrial zones nationwide'
    },
    {
      id: 5,
      title: 'Ocean Cleanup Initiative',
      description: 'Cleaning and protecting Caspian Sea waters',
      icon: Waves,
      progress: 55,
      target: '$2.1M',
      raised: '$1.155M',
      participants: 1834,
      deadline: '2025-08-10',
      details: 'Comprehensive cleanup of Caspian Sea waters using advanced filtration systems and marine waste collection. Includes marine life protection and water quality monitoring.',
      impact: 'Clean 1000 km² of water, protect marine life',
      location: 'Caspian Sea'
    }
  ];

  const handleJoinProject = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gold-400 mb-4">
          Ecology & Environmental Projects
        </h1>
        <p className="text-gold-600 text-lg max-w-3xl mx-auto">
          Join our mission to create a sustainable future. Invest in renewable energy, 
          conservation, and environmental protection projects that make a real difference.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.id} glow className="h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Icon className="text-green-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gold-400">{project.title}</h3>
                  <p className="text-sm text-gold-600">{project.location}</p>
                </div>
              </div>

              <p className="text-gold-600 text-sm mb-4 flex-1">{project.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gold-600 mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-gold-400 mb-1">
                    <Target size={14} />
                    <span className="text-xs">Target</span>
                  </div>
                  <p className="text-sm font-semibold text-gold-600">{project.target}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-gold-400 mb-1">
                    <Users size={14} />
                    <span className="text-xs">Investors</span>
                  </div>
                  <p className="text-sm font-semibold text-gold-600">{project.participants}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gold-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                </div>
              </div>

              <Button 
                onClick={() => handleJoinProject(project)}
                className="w-full"
              >
                Join Project
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Project Details Modal */}
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center">
                <selectedProject.icon className="text-green-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold-400">{selectedProject.title}</h3>
                <p className="text-gold-600">{selectedProject.location}</p>
              </div>
            </div>

            <div className="bg-gold-600/10 rounded-lg p-4">
              <h4 className="text-gold-400 font-semibold mb-2">Environmental Impact</h4>
              <p className="text-gold-600">{selectedProject.impact}</p>
            </div>

            <div>
              <h4 className="text-gold-400 font-semibold mb-2">Project Details</h4>
              <p className="text-gold-600 text-sm leading-relaxed">{selectedProject.details}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-gold-400 font-semibold">{selectedProject.raised}</p>
                <p className="text-gold-600 text-xs">Raised</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-gold-400 font-semibold">{selectedProject.participants}</p>
                <p className="text-gold-600 text-xs">Investors</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-gold-400 font-semibold">{selectedProject.progress}%</p>
                <p className="text-gold-600 text-xs">Complete</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-gold-400 font-semibold">Investment Options</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="outline" size="sm">$100</Button>
                <Button variant="outline" size="sm">$500</Button>
                <Button variant="outline" size="sm">$1,000</Button>
              </div>
              <Button className="w-full">Invest Now</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EcologyProjects;