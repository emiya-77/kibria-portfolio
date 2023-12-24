import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../../constants/index.js'
import DownloadResumeButton from '../../components/DownloadResumeButton.jsx';

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I&apos;m <span className="brown-gradient_text font-semibold drop-shadow">Golam Kibria</span>
            </h1>

            <div>
                <p className="mt-5 flex flex-col gap-3 text-slate-500 text-lg">
                    Front-end developer based in Bangladesh, specializing in developing MERN stack applications.
                </p>
                <p className="mt-5 flex flex-col gap-3 text-slate-500 text-lg">
                    I&apos;m passionate about building beautiful interfaces. I gravitate towards creating designs that feel immersive and 3D. My highest priority is to make the application smooth and visually stunning so that the eyes never get tired of it.
                </p>
                <div className='flex gap-2'>
                    <button className='btn btn-ghost my-4 text-base border-gray-500 border-2'>
                        <a href="https://github.com/emiya-77" target='_blank' rel='noopener noreferrer'>
                            Github
                        </a>
                    </button>
                    <DownloadResumeButton />
                </div>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill, idx) => (
                        <div key={idx} className='block-container w-20 h-20' title={skill.name}>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Education and Achievements</h3>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={index}
                                date={experience.date}
                                iconStyle={{ background: experience.iconBg }}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p
                                        className='text-black-500 font-medium text-base'
                                        style={{ margin: 0 }}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-black-500/50 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className='border-slate-200' />

        </section>
    )
}

export default About