import React from 'react';
import { motion } from 'framer-motion';
import './ProjectFilter.css';

const ProjectFilter = ({ categories, activeCategory, onSelect }) => {
    return (
        <div className="filter-container glass-panel">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeFilter"
                            className="filter-active-bg"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="filter-label">{category}</span>
                </button>
            ))}
        </div>
    );
};

export default ProjectFilter;
