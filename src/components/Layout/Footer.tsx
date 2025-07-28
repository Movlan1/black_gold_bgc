import React from 'react';
import { Phone, Mail, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 border-t border-gold-600/20 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-gold-400 font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gold-600">
                <Phone size={16} />
                <span>+994 55 552 57 47</span>
              </div>
              <div className="flex items-center space-x-3 text-gold-600">
                <Mail size={16} />
                <span>blackgoldcoinoffice@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gold-400 font-semibold text-lg mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/bgorium" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gold-600 hover:text-gold-400 transition-colors"
              >
                <Instagram size={16} />
                <span>@bgorium</span>
              </a>
              <a 
                href="https://youtube.com/@blackgoldcoin?si=c7P3x1CfcVVIn-N4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gold-600 hover:text-gold-400 transition-colors"
              >
                <Youtube size={16} />
                <span>@blackgoldcoin</span>
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-gold-400 font-semibold text-lg mb-4">BLACK GOLD</h3>
            <p className="text-gold-600 text-sm leading-relaxed">
              Powered by Nature, Backed by Industry. The premier platform for energy trading, 
              ecological investments, and digital asset management.
            </p>
          </div>
        </div>

        <div className="border-t border-gold-600/20 mt-8 pt-8 text-center">
          <p className="text-gold-600 text-sm">
            © 2025 BLACK GOLD Platform. All rights reserved. Licensed financial technology provider.
          </p>
          
          {/* Bolt Hackathon Badge */}
          <div className="mt-6">
            <img 
              src="/black_circle_360x360.png" 
              alt="Powered by Bolt.new" 
              className="w-24 mx-auto mb-2 opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-gold-600 text-sm">This project was built for Bolt Hackathon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;