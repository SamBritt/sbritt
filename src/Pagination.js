import React, { useState, useEffect } from 'react';
import './App.css';
import imageData from './data/imageData';
import { motion } from 'framer-motion'

export const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item px-2 pt-5"  >
                        <motion.a
                            whileTap={{ scale: 0.9}}
                            whileHover={{ scale: 1.1, backgroundColor : '#95e3e9d0'}}
                            onClick={() => paginate(number)} 
                            className="page-link" 
                            >
                            {number}
                        </motion.a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}