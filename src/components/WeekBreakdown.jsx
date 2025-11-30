import React from 'react';
import { motion } from 'framer-motion';
import './WeekBreakdown.css';

const WeekBreakdown = ({ weeks }) => {
    return (
        <div className="week-breakdown">
            {weeks.map((week, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="week-item glass-panel"
                >
                    <div className="week-header">
                        <h4>Week {index + 1}: {week.title}</h4>
                        <span className="text-accent">{week.progress}%</span>
                    </div>
                    <div className="progress-bar-container">
                        <motion.div
                            className="progress-bar"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${week.progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>
                    <p className="week-desc text-secondary">{week.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default WeekBreakdown;
