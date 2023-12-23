import Particles from 'react-particles-js';

const SnowParticle = () => {
    const particleParams = {
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000',
                },
            },
            size: {
                value: 5,
                random: true,
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.1,
                    opacity_min: 0.1,
                },
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'bottom',
                straight: false,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
    };

    return (
        <Particles
            params={particleParams}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
    );
};

export default SnowParticle;
