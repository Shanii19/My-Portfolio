import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
            style={{ perspective: '1000px' }}
        >
            <div className="about-grid">
                <div className="about-content" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 className="section-title">About <span className="text-accent">Me</span></h2>

                    <motion.div
                        className="glass-panel p-8 text-left"
                        initial={{ rotateX: 10, opacity: 0, y: 50 }}
                        whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.02,
                            rotateX: 2,
                            boxShadow: "0 20px 40px rgba(32, 252, 143, 0.15)"
                        }}
                        transition={{ duration: 0.6, type: "spring" }}
                        style={{
                            transformStyle: 'preserve-3d',
                            cursor: 'default',
                            padding: '3rem'
                        }}
                    >
                        <p style={{
                            fontSize: '1.25rem',
                            lineHeight: '1.8',
                            fontFamily: '"Outfit", sans-serif',
                            fontWeight: 300,
                            color: 'var(--text-primary)'
                        }}>
                            A seventh semester BS Software Engineering student with practical experience in full stack development and data analysis. Skilled in building complete applications from planning to deployment. Comfortable with automation, AI driven workflows, and modern development platforms.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
