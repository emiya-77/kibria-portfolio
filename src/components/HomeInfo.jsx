import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowForward } from "react-icons/io5";

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <IoArrowForward size={20} />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Golam Kibria</span>
            <br />
            A MERN Stack Developer from Bangladesh
        </h1>
    ),
    2: (
        <InfoBox
            text='Worked on many personal projects and picked up many skills along the way'
            link='/about'
            btnText='Learn More'
        />
    ),
    3: (
        <InfoBox
            text='Led multiple projects to success. Curious about the work?'
            link='/projects'
            btnText='Visit my portfolio'
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link='/contact'
            btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[(currentStage % 4) + 1] || null;
}

export default HomeInfo