import React, { useState } from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('skills');

    const renderContent = () => {
        switch (activeTab) {
            case 'skills':
                return <Skills />;
            case 'projects':
                return <Projects />;
            case 'resume':
                return <Resume />;
            default:
                return <Skills />;
        }
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>
                    Skills
                </button>
                <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
                    Projects
                </button>
                <button className={activeTab === 'resume' ? 'active' : ''} onClick={() => setActiveTab('resume')}>
                    Resume
                </button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
}
