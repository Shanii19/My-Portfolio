import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="glass-card project-card"
            onClick={() => onClick(project)}
        >
            <div className="project-image-container">
                {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                    <div className="project-image-placeholder" style={{ background: project.color || 'var(--granite)' }} />
                )}
                <div className="project-overlay">
                    <span className="view-details">View Details</span>
                </div>
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p className="text-secondary">{project.category}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
