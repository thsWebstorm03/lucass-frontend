export const PUBLIC_URL = process.env.NODE_ENV == "development" ? "http://localhost:3003/" : "https://coral-app-u2dte.ondigitalocean.app/"

export const BASE_URL = process.env.NODE_ENV == "development" ? "http://localhost:5001" : "https://shark-app-lke5e.ondigitalocean.app"

export const particle_options = {
   background: {
      color: {
            value: "#DDDDDD",
      },
      opacity:0.1
   },
   
   fpsLimit: 18,
   interactivity: {
      events: {
            onClick: {
               enable: true,
               mode: "push",
            },
            onHover: {
               enable: true,
               mode: "repulse",
            },
            resize: true,
      },
      modes: {
            push: {
               quantity: 8,
            },
            repulse: {
               distance: 200,
               duration: 3,
            },
      },
   },
   particles: {
      color: {
            value: "#ffffff",
      },
      links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
      },
      collisions: {
            enable: true,
      },
      move: {
            directions: "none",
            enable: true,
            outModes: {
               default: "bounce",
            },
            random: false,
            speed: 5,
            straight: false,
      },
      number: {
            density: {
               enable: true,
               area: 800,
            },
            value: 80,
      },
      opacity: {
            value: 0.2,
      },
      shape: {
            type: "circle",
      },
      size: {
            value: { min: 1, max: 5 },
      },
   },
   detectRetina: false,
}