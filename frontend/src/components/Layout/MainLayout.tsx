import React from 'react';
import Sidebar from './Sidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  activeSection, 
  onSectionChange 
}) => {
  return (
    <div className="main-layout">
      <Sidebar activeSection={activeSection} onSectionChange={onSectionChange} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;