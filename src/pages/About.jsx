
import SkillCard from '../components/SkillCard';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import js from '../assets/skills/js.png';
import bootstrap from '../assets/skills/bootstrap.png';
import tailwind from '../assets/skills/tailwind.png';
import sass from '../assets/skills/sass.png';
import less from '../assets/skills/less.png';
import react from '../assets/skills/reactjs.png';
import node from '../assets/skills/nodejs.png';
import express from '../assets/skills/expressjs.png';
import mongodb from '../assets/skills/mongodb.png';
import next from '../assets/skills/nextjs.png';
import jquery from '../assets/skills/jquery.svg';
import sql from '../assets/skills/sql.png';
import figma from '../assets/skills/figma.png';
import firebase from '../assets/skills/firebase.png';
import c from '../assets/skills/c.png';
import java from '../assets/skills/java.png';
import babel from '../assets/skills/babel.png';


const About = () => {

  const skillsData = [
    {
      title: 'HTML',
      logo: html, 
    },
    {
      title: 'CSS',
      logo: css, 
    },
    {
      title: 'JavaScript',
      logo: js, 
    },
    {
      title: 'Jquery',
      logo: jquery, 
    },
    {
      title: 'Babel',
      logo: babel, 
    },
    {
      title: 'Bootstrap',
      logo: bootstrap,  
    },
    {
      title: 'Sass',
      logo: sass, 
    },
    {
      title: 'Less',
      logo: less, 
    },
    {
      title: 'Tailwind',
      logo: tailwind,  
    },
    {
      title: 'ReactJs',
      logo: react, 
    },
    {
      title: 'Node.js',
      logo: node, 
    },
    {
      title: 'expressjs',
      logo: express, 
    },
    {
      title: 'mongodb',
      logo: mongodb, 
    },
    {
      title: 'next.js',
      logo: next, 
    },
    {
      title: 'Firebase',
      logo: firebase,  
    },
    {
      title: 'Rest API',
      logo: 'css-logo.png', 
    },
    {
      title: 'Graphql',
      logo: 'html-logo.png', 
    },
    {
      title: 'c programming',
      logo: c, 
    },
    {
      title: 'Java',
      logo: java, 
    },
    {
      title: 'Sql',
      logo: sql, 
    },
    {
      title: 'Git',
      logo: 'git', 
    },
    {
      title: 'Figma',
      logo: figma, 
    },
    {
      title: 'Web3',
      logo: 'web3', 
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          I'm a passionate Full Stack Developer with expertise in various web technologies. Here are some of my key skills:
        </p>
        <div className="skill-cards">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} title={skill.title} logo={skill.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About