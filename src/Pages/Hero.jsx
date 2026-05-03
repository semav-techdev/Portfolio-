import React from 'react'
import { useEffect } from 'react';
import personal from '../assets/images/img1-removebg-preview.png'
import MainButton from '../component/Button';
import Services from './services';
import Skills from './Skills';
import ProjectsSection from '../component/ProjectCard';
import Projects from './Projects';
import About from './About';
import Footer from '../component/Footer';

export default function Hero() {
        useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
        const el = document.querySelector(hash);
        if (el) {
            setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
        }
    }, []);
    return (
        <div className=' md:my-40 md:mx-24' id='hero'>
            <div className='block md:flex md:items-center md:justify-between border-b-2 md:py-20 gap-10 ' id='home'>
                <div className='text-textColor text-center md:text-left mb-7 md:w-1/2'>
                    <div className='text-3xl my-11 md:text-6xl gradient md:mb-20 md:my-0 leading-relaxed '>
                        <p className='mb-7'>Software Developer</p>
                        <p>React & AI Applications</p>
                    </div>
                    <div className='px-5 md:px-0'>
                        <p className='text-2xl'>Hi there! I’m Simav Adnan Mohamed I build <span className='text-hoverColor '>Modern Web Applications </span>
                         and intelligent systems using React, Python, and computer vision technologies.</p>
                        <MainButton value='VIEW MY WORK' onClick={() => {
                            const section = document.getElementById('projects');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' })
                            }
                        }} />
                    </div>
                </div>
                <div className='relative w-full md:w-1/2 flex justify-center items-center'>
                    <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                  rounded-full blur-[100px] opacity-30 z-0 pointer-events-none" />
                    <img className='md:relative max-w-[65%] md:max-w-full z-10 max-h-[500px] object-contain -top-[9%]' src={personal} alt="myPhoto" />
                </div>
            </div>

            {/* the services  */}
            <section id="services">
                <Services />
            </section>
            {/*Skills*/}
            <section id=''>
                <Skills />
            </section>
            {/* Projects */}
             <section id='projects'>
                <Projects />
            </section>
            {/** About me*/}
             <section id='about'>
                <About />
            </section>
            <section id ='contact'>
                <Footer/>
            </section>
        </div >

    )
}
