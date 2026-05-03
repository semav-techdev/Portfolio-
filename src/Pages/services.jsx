import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop,faRobot,faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export default function services() {
    return (
        <div>
            <div className="mySrevices my-20 text-center border-b-2 pb-32 " id='services'>
                <div className='gradient text-3xl md:text-5xl mb-8'>
                    MY SERVICES
                </div>
                <div className='flex-col flex   '>
                    <motion.div className="cardAnimate"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='flex '>
                            <div className='relative top-4 mr-3  md:mr-5'>
                                <FontAwesomeIcon icon={faCode} className='text-xl md:text-2xl' />
                            </div>
                            <h2 className='text-xl md:text-3xl  py-3'>Website Development</h2>
                        </div>
                        <p>build responsive websites based on your design, whether it's a landing page or a business website. I focus on clean code, performance, and making sure everything works smoothly across all devices.</p>
                    </motion.div>
                    <motion.div className="cardAnimate"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                        <div className='flex '>
                            <div className='relative top-4 mr-3  md:mr-5'>
                                <FontAwesomeIcon icon={faDesktop} fade className='text-xl md:text-2xl' />
                            </div>
                            <h2 className='text-xl md:text-3xl  py-3'>Web Design</h2>
                        </div>

                        <p>I design modern, simple, and user-friendly interfaces from scratch, tailored to your brand and goals. My focus is on usability, clarity, and a clean visual experience.</p>
                    </motion.div>
                    <motion.div className="cardAnimate"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                        <div className='flex '>
                            <div className='relative top-4 mr-3  md:mr-5'>
                                <FontAwesomeIcon icon={faRobot} fade className='text-xl md:text-2xl' />
                            </div>
                            <h2 className='text-xl md:text-3xl  py-3'>AI & Computer Vision Solutions</h2>
                        </div>
                        <p>I design modern, simple, and user-friendly interfaces from scratch, tailored to your brand and goals. My focus is on usability, clarity, and a clean visual experience.</p>
                    </motion.div>
                    <motion.div className="cardAnimate"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                        <div className='flex '>
                            <div className='relative top-4 mr-3  md:mr-5'>
                                <FontAwesomeIcon icon={faCodeBranch} fade className='text-xl md:text-2xl' />
                            </div>
                            <h2 className='text-xl md:text-3xl  py-3'>Open Source & Continuous Learning</h2>
                        </div>
                        <p>I actively learn from and contribute to open-source projects. I enjoy exploring new technologies and improving my skills through real-world projects and community collaboration.</p>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}
