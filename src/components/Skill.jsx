import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import react from '../assets/react.png';
import javascript from '../assets/javascript.png';
import bootstrap from '../assets/bootstrap.png';
import mysql from '../assets/mysql.png';
import PHPi from '../assets/PHPi.png';
import wordpress from '../assets/wordpress.png';
import tailwind from '../assets/tailwind.png';
import graphql from '../assets/graphql.png';
import node from '../assets/node.png';


const Skill = () => {
    const skills = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-cyan-500',
        },
        {
            id:3,
            src: wordpress,
            title: 'Wordpress',
            style: 'shadow-white',
        },
        {
            id:4,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500',
        },
        {
            id:5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-blue-500',
        },
        {
            id:6,
            src: react,
            title: 'REACT',
            style: 'shadow-cyan-900',
        },
        {
            id:7,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500',
        },
        {
            id:8,
            src: PHPi,
            title: 'PHP',
            style: 'shadow-blue-800',
        },
        {
            id:9,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600',
        },
        {
            id:10,
            src: mysql,
            title: 'MySql',
            style: 'shadow-yellow-500',
        },
        {
            id:11,
            src: graphql,
            title: 'Just Image',
            style: 'shadow-pink-500',
        },
        {
            id:12,
            src: node,
            title: 'Just Image',
            style: 'shadow-green-500',
        },
    ];
  return (
    <div name="SKILLS" className="bg-gradient-to-b from-black to-gray-900 w-full h-full  pt-[60px]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">My Skill's</p>
            <p className="py-6">My Experianced</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
                skills.map((skil) =>{
                    return(
                        <div key={skil.id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg"+" "+ skil.style}>
                <img src={skil.src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{skil.title}</p>
            </div>
                    )
                })
            }
            
        </div>
      </div>
    </div>
  )
}

export default Skill
