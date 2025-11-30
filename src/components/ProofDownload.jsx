import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './ProofDownload.css';

const ProofDownload = ({ title, fileUrl }) => {
    return (
        <motion.a
            href={fileUrl}
            download
            className="proof-download glass-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="proof-icon">
                <Download size={24} color="var(--spring-green)" />
            </div>
            <div className="proof-info">
                <span className="proof-title">{title}</span>
                <span className="proof-action text-secondary">Download Proof</span>
            </div>
            <motion.div
                className="download-glow"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            />
        </motion.a>
    );
};

export default ProofDownload;
