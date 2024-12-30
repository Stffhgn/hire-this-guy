import React, { useState, useEffect } from 'react';
import './Projects.css';

const projectData = [
    {
        title: 'Dart Server Framework Setup',
        description: (
            <div className="project-description">
                <h4>Overview</h4>
                <p>
                    Built a scalable framework for a Dart-based backend-as-a-service (BaaS) application.
                    Developed efficient API endpoints to streamline data handling and enhance client communication.
                </p>
            </div>
        ),
    },
    {
        title: 'Unified Automation Platform',
        description: (
            <div className="project-description">
                <h4>Overview</h4>
                <p>
                    Merged AuditAutomator 2.0 and Unified Automation Tool into one cohesive platform.
                    Simplified test workflows with an intuitive UI and backend APIs, improving automation efficiency.
                </p>
            </div>
        ),
    },
    {
        title: 'Future Streak Projects',
        description: (
            <div className="project-description">
                <h4>Upcoming UI Enhancements</h4>
                <ul>
                    <li>
                        <strong>Responsive Mobile Interface:</strong> Develop a mobile-friendly Streak app with
                        full pipeline and task management, ensuring seamless functionality across devices.
                    </li>
                    <li>
                        <strong>Interactive Pipeline Dashboard:</strong> Implement drag-and-drop customization
                        and dynamic visualizations, allowing users to create personalized views and reports directly
                        within the Streak UI.
                    </li>
                </ul>
            </div>
        )
    }
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const nextProject = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
                setTransitioning(false);
            }, 400);  // Matches CSS transition duration
        }
    };

    const prevProject = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
                setTransitioning(false);
            }, 400);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextProject();
            if (e.key === 'ArrowLeft') prevProject();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="carousel-container">
            <div className="project-card">
                <h3>{projectData[currentIndex].title}</h3>
                {projectData[currentIndex].description}
            </div>

            <div className="controls">
                <button className="arrow left" onClick={prevProject}>&#9664;</button>
                <button className="arrow right" onClick={nextProject}>&#9654;</button>
            </div>
        </div>
    );
}
