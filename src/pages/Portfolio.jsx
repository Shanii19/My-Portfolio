import React, { useState } from 'react';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import WeekBreakdown from '../components/WeekBreakdown';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import taskflowImg from '../assets/taskflow.png';
import aiCodeExplainerImg from '../assets/ai_code_explainer.png';
import paralegalAiImg from '../assets/paralegal_ai.png';
import appointmentAutomationImg from '../assets/appointment_automation.png';
import chatTriggerImg from '../assets/chat_trigger_automation.png';

const projectsData = [
    { id: 1, title: 'TaskFlow---Team-Task-Management-Application', category: 'Web App', color: '#3f5e5a', Github: 'https://github.com/Shanii19/TaskFlow---Team-Task-Management-Application', live_link: 'https://taskflowbyshayan.lovable.app/dashboard', image: taskflowImg },
    { id: 2, title: 'AI_CODE_EXPLAINER', category: 'Web app', color: '#353831', Github: 'https://github.com/Shanii19/AI_CODE_EXPLAINER', live_link: 'https://ai-code-explainer-black.vercel.app/', image: aiCodeExplainerImg },
    { id: 3, title: 'Paralegal AI', category: 'AI', color: '#20fc8f', Github: 'https://github.com/Shanii19/-Paralegal-AI', live_link: 'https://paralegal-ai.streamlit.app/', image: paralegalAiImg },
    { id: 4, title: 'Appointment automation agent in N8n', category: 'AI', color: '#38423b', link: 'https://shanny19ai.app.n8n.cloud/webhook/df909810-db3f-4317-8b2d-daa781a5b7b6/chat', image: appointmentAutomationImg },
    { id: 5, title: 'Chat Trigger Image Fetch Automation in n8n', category: 'AI', color: '#2d2d2a', link: 'https://shanny19ai.app.n8n.cloud/webhook/fbfb15c9-80ea-42fd-b625-4c785b2eb4ac/chat', image: chatTriggerImg }
];

const weeksData = [
    {
        title: 'Week 1: Collaborative App (Lovable.dev)',
        progress: 100,
        description: 'Covered the design and deployment of a collaborative app using Lovable.dev, Supabase, GitHub, and Figma. Delivered authentication, team management, task operations, filters, and a full deployment pipeline.'
    },
    {
        title: 'Week 2: AI Web App (Cursor AI)',
        progress: 100,
        description: 'Focused on Cursor AI. Designed prompts, built a working web application, integrated APIs, fetched live data, tested features, and deployed the final build.'
    },
    {
        title: 'Week 3: AI Agents (N8N)',
        progress: 100,
        description: 'Centered on N8N. Built a planner, note taker, and task refiner agent. Integrated Google Calendar, automated summaries, refined tasks, and created a routing system for user commands.'
    },
    {
        title: 'Week 4: Automation Workflows (Make.com)',
        progress: 100,
        description: 'Used Make.com to automate supplier research and communication. Set up data validation, automated searches, sent Gmail inquiries, and created an end to end workflow for approval processes.'
    }
];

const categories = ['All', 'Web App', 'AI'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
        >
            <h2 className="section-title">My <span className="text-accent">Work</span></h2>

            <ProjectFilter
                categories={categories}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
            />

            <motion.div layout className="projects-grid">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            <div style={{ marginTop: '4rem' }}>
                <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>My <span className="text-accent">Learning</span></h3>
                <WeekBreakdown weeks={weeksData} />
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(4px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="frosted-modal"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                padding: '2.5rem',
                                maxWidth: '500px',
                                width: '90%',
                                borderRadius: '24px',
                                position: 'relative',
                                textAlign: 'left'
                            }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'rgba(255,255,255,0.6)',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--spring-green)'}
                                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                            >
                                <X size={24} />
                            </button>

                            {selectedProject.image && (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        marginBottom: '1.5rem'
                                    }}
                                />
                            )}

                            <h2 style={{ marginTop: 0, fontSize: '2rem', marginBottom: '0.5rem' }}>{selectedProject.title}</h2>
                            <span className="text-accent" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', fontWeight: 600 }}>
                                {selectedProject.category}
                            </span>

                            <p className="text-secondary" style={{ marginTop: '1.5rem', lineHeight: 1.6 }}>
                                This is a detailed view of the <strong>{selectedProject.title}</strong> project.
                                It demonstrates the use of the frosted glass modal effect with smooth entrance animations.
                            </p>

                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                                {(selectedProject.live_link || selectedProject.link) && (
                                    <a
                                        href={selectedProject.live_link || selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ textDecoration: 'none', display: 'inline-block' }}
                                    >
                                        View Live
                                    </a>
                                )}
                                {selectedProject.Github && (
                                    <a
                                        href={selectedProject.Github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-glass"
                                        style={{ textDecoration: 'none', display: 'inline-block' }}
                                    >
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Portfolio;
