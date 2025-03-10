particlesJS('particles-js', {
    particles: {
        number: {
            value: 50, 
            density: {
                enable: true,
                value_area: 1000  
            }
        },
        color: {
            value: "#06d3e6"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.7, 
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150, 
            color: "#06d3e6",
            opacity: 0.3,  
            width: 0.8  
        },
        move: {
            enable: true,
            speed: 1.5,  
            direction: "none",
            out_mode: "out" 
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
                distance: 100  
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100, 
                duration: 0.5
            },
            bubble: {
                distance: 400,
                size: 20, 
                duration: 1.5,
                opacity: 5,
                speed: 2
            },
            push: {
                particles_nb: 2
            },
            remove: {
                particles_nb: 1
            }
        }
    },
    retina_detect: true
});
