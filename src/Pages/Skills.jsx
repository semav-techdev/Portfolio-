import React from 'react';

import php from '../assets/icons/web.png';
import html from '../assets/icons/html5.png';
import js from '../assets/icons/js.png';
import reactIcon from '../assets/icons/atom.png';
import bootstrap from '../assets/icons/bootstrap.png';
import mysql from '../assets/icons/programing.png';
import github from '../assets/icons/icons8-github-100.png';
import tailwind from '../assets/icons/tailwind.png';
import css from '../assets/icons/text.png';
import eslint from '../assets/icons/icons8-eslint-100.png'
import python from '../assets/icons/icons8-python-100.png'
import devops from '../assets/icons/icons8-devops-100.png'

export default function Skills() {

    const frontend = [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
        { name: "React", icon: reactIcon },
        { name: "Tailwind", icon: tailwind },
        { name: "Bootstrap", icon: bootstrap },
    ];

    const backend = [
        { name: "PHP", icon: php },
        { name: "MySQL", icon: mysql },
        { name: "Python" ,icon :python}
    ];

    const tools = [
        { name: "GitHub", icon: github },
        {name : "EsLint" ,icon :eslint},
        {name : "DevOps" ,icon : devops}
    ];

    const SkillGroup = ({ title, items }) => (
        <div className="mb-14">

            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-textColor">
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">

                {items.map((skill, index) => (
                    <div
                        key={index}
                        className='group w-24 h-24 flex flex-col items-center justify-center 
                                   rounded-2xl bg-white/5 backdrop-blur-md 
                                   border border-white/10 shadow-sm 
                                   hover:shadow-pink-400/20 
                                   hover:-translate-y-2 hover:scale-105 
                                   transition-all duration-300'
                    >
                        <img
                            className='w-12 h-12 object-contain group-hover:rotate-6 transition'
                            src={skill.icon}
                            alt={skill.name}
                        />

                        <span className="text-xs mt-2 text-textColor opacity-70 group-hover:opacity-100">
                            {skill.name}
                        </span>
                    </div>
                ))}

            </div>
        </div>
    );

    return (
        <div className='my-20 text-center border-b-2 pb-32'>

            <div className='gradient text-3xl md:text-4xl h-14 mb-8'>
                Technologies & Tools
            </div>

            <p className='text-2xl md:text-3xl text-textColor mb-12'>
                The skills, tools and technologies I use
            </p>

            <SkillGroup title="Frontend Development" items={frontend} />
            <SkillGroup title="Backend Development" items={backend} />
            <SkillGroup title="Tools" items={tools} />

        </div>
    );
}