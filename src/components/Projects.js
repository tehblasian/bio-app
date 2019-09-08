import React from 'react'
import Emoji from 'react-emoji-render';

import Container from './Container';
import ProjectList from './ProjectList';

import UberSante from '../assets/santelogo.png';
import BlockStory from '../assets/blockstory.png';
import PayAR from '../assets/vuforia-logo.png';
import RUDating from '../assets/rudating.png';

const projects = [
    {
        thumbnail: UberSante,
        name: 'Uber Santé',
        summary: 'An appointment scheduling system for clinics',
        tech: ['React', 'Flask', 'SQLite'],
        date: 'February - March 2019',
        source: 'https://github.com/chriskfwoo/big-uber-sante',
    },  
    {
        thumbnail: BlockStory,
        name: 'BlockStory',
        summary: 'Collaborative storytelling on the Ethereum blockchain',
        tech: ['React', 'Ethereum Smart Contracts', 'Solidity', 'Truffle', 'Metamask'],
        date: 'HackCU V | February 23-24, 2019',
        source: 'https://github.com/tehblasian/blockstory',
        devpost: 'https://devpost.com/software/blockstory',
    },  
    {
        thumbnail: PayAR,
        name: 'PayAR',
        summary: 'An augmented reality self-checkout system',
        tech: ['Unity', 'Vuforia', 'Flask'],
        date: 'McHacks 6 | February 2-3, 2019',
        source: 'https://github.com/ZacharyBys/PayAR',
        devpost: 'https://devpost.com/software/pay-ar',
    },  
    {
        thumbnail: RUDating,
        name: 'RU Dating?',
        summary: 'A speed dating app with human interaction in mind. No more mindless swiping!',
        tech: ['React', 'Flask', 'Socket.io', 'Google Cloud Storage'],
        date: 'HackRU | October 6-7, 2018',
        source: 'https://github.com/ZacharyBys/rudating',
        devpost: 'https://devpost.com/software/rudating',
    },  
];

const Projects = () => (
    <Container>
        <h1 className="header-large" style={{ margin: '0 0 1.5em 0' }}><Emoji text=":computer: { Recent projects } :computer: "/></h1>
        <div style={{padding: '0 4em', width: '80%' }}>
            <ProjectList projects={projects} />
        </div>
    </Container>
)

export default Projects;
