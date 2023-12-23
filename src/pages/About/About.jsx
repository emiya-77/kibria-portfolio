
import { skills } from '../../constants/index.js'

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
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill, idx) => (
                        <div key={idx} className='block-container w-20 h-20'>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About