
import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './art.css';
import { pageTransition, pageVariants } from './animations/animations.js';
import imageData from './data/imageData.js'
import { AnimatePresence } from 'framer-motion'
import { Pagination } from './Pagination';
import { cardVariants } from './animations/animations.js'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function ProjectCard({ image }) {
    const [toggled, setToggled] = useState(false);
    const [scaled, setScaled] = useState(1)
    const item = {
        hidden: { opacity: 0, y: 5 },
        show: { opacity: 1, y: 0 }

    }


    return (
        <Fragment>
            <Col md={4} style={{ padding: 0 }}>

                <motion.div
                    
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 1.04 }}
                    className="projectCard"
                    onClick={() => setToggled(toggled => !toggled)}>
                    <LazyLoadImage 
                        alt={image.title}
                        src={image.src}
                        effect="blur"
                        placeholder={<FontAwesomeIcon icon={faBrush} />}
                    />

                    {/*<img variants={item}

                        src={image.src}
    alt={image.title} />*/}
                </motion.div>



            </Col>
            <Modal image={image} setToggled={setToggled} toggled={toggled} />
        </Fragment>
    )
}

export function Modal({ image, toggled, setToggled, children }) {
    return (
        <div>

            <AnimatePresence>
                {
                    toggled && (

                        <motion.div
                            className="projectModal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ display: 'flex' }}>
                            <motion.img initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -100 }}
                                onClick={() => setToggled(toggled => !toggled)}

                                className="projectModalImage"
                                src={image.src}
                                alt={image.title} />
                        </motion.div>


                    )
                }
            </AnimatePresence>
        </div>
    );
}
export const QuickArt = () => {

    return (
        <motion.div variants={cardVariants}>

            <Row className="justify-content-center">
                <Col lg={10} className="mainContentHeader">
                    <h1>Artwork</h1>
                    <motion.hr style={{ border: '1px solid #47748b' }}
                        initial={{ width: 0, marginRight: '100%' }}
                        animate={{ width: '100%', marginRight: 0, transition: { duration: 0.6 } }} />
                    <div className="cardTextOutline">
                        <p>
                            Creating art has always been more than just a hobby of mine. It's something I simply have to do.
                        Below is a short list of selected sketches and ideas that I've created over the years.</p>

                        <p>I'm showing this gallery to show my artistic skillset.
                        I have never sold or accepted work for a piece of art. Though, if you would like to be the first, you can reach me at the link below.
                        </p>
                    </div>
                    <div>
                        <motion.button className="linkButton"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>Contact Me</motion.button>
                    </div>
                </Col>
            </Row>
        </motion.div>
    );
}

const Art = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(6);

    useEffect(() => {
        const getImages = () => {
            setLoading(true);
            let results = imageData;
            setImages(results);
            setLoading(false);
        }

        getImages();
    }, []);

    const grid = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: { when: "beforeChildren" }
        }
    }

    const indexOfLast = currentPage * imagesPerPage;
    const indexOfFirst = indexOfLast - imagesPerPage;
    const currentImages = images.slice(indexOfFirst, indexOfLast);

    const paginate = (event, pageNumber) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    }

    return (

        <Container fluid>

            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>

                <QuickArt />
                <Row className="justify-content-center">
                    <Col lg={10} className="p-0">
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                className="py-5"
                                id="portfolioGrid"
                                variants={grid}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0 }}>
                                <Row>
                                    {currentImages.map((image, idx) => {
                                        return <ProjectCard key={image.src} image={image} />
                                    })}
                                </Row>
                            </motion.div>
                        </AnimatePresence>
                    </Col>
                </Row>

            </motion.div>
            <Pagination
                imagesPerPage={imagesPerPage}
                totalImages={images.length}
                paginate={paginate}
            />
        </Container>
    );
}
export default Art;
