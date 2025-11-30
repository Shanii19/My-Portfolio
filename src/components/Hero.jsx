import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const contactRef = useRef(null);
    const [highlightContact, setHighlightContact] = useState(false);

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setHighlightContact(true);
            setTimeout(() => setHighlightContact(false), 2000);
        }
    };

    return (
        <div className="hero-wrapper">
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1 className="hero-title">
                        Software <span className="text-accent">Engineer</span>
                    </h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-name"
                    >
                        Shayan Hassan
                    </motion.h2>
                    <p className="hero-subtitle text-secondary">
                        Building dynamic, interactive experiences with precision and passion.
                    </p>
                    <div className="hero-actions">
                        <Link
                            to="/portfolio"
                            className="btn-primary-outline"
                        >
                            View Projects
                        </Link>
                        <button className="btn-glass" onClick={scrollToContact}>Contact Me</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-visual"
                >
                    <motion.div
                        className="glass-card quote-card"
                        animate={{
                            y: [0, -15, 0],
                            rotateX: [0, 5, 0, -5, 0],
                            rotateY: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="card-content">
                            <h3 className="quote-text">
                                "Shaping technology that enhances productivity."
                            </h3>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <motion.div
                ref={contactRef}
                className={`contact-section ${highlightContact ? 'highlight' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div className="glass-panel contact-panel">
                    <div className="contact-item">
                        <Mail size={20} className="text-accent" />
                        <span>hassanshayan190331@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={20} className="text-accent" />
                        <span>+923149714515</span>
                    </div>
                    <div className="contact-links">
                        <a href="https://www.linkedin.com/in/shayan-hassan19033/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/Shanii19" target="_blank" rel="noopener noreferrer">
                            <Github size={24} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
