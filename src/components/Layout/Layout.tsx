import React, { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import LiveTicker from '../Common/LiveTicker';
import BackgroundAnimation from '../Common/BackgroundAnimation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <LiveTicker />
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;