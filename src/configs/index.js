export const PUBLIC_URL = process.env.NODE_ENV == "development"
   ? "http://localhost:3003/"
   : "https://coral-app-u2dte.ondigitalocean.app/"

export const BASE_URL = process.env.NODE_ENV == "development"
   ? "http://localhost:5001"
   : "https://shark-app-lke5e.ondigitalocean.app"

export const particle_options = {
   background: {
      color: {
         value: "#DDDDDD"
      },
      opacity: 0.1
   },

   fpsLimit: 18,
   interactivity: {
      events: {
         onClick: {
            enable: true,
            mode: "push"
         },
         onHover: {
            enable: true,
            mode: "repulse"
         },
         resize: true
      },
      modes: {
         push: {
            quantity: 8
         },
         repulse: {
            distance: 200,
            duration: 3
         }
      }
   },
   particles: {
      color: {
         value: "#ffffff"
      },
      links: {
         color: "#ffffff",
         distance: 150,
         enable: true,
         opacity: 0.5,
         width: 1
      },
      collisions: {
         enable: true
      },
      move: {
         directions: "none",
         enable: true,
         outModes: {
            default: "bounce"
         },
         random: false,
         speed: 5,
         straight: false
      },
      number: {
         density: {
            enable: true,
            area: 800
         },
         value: 80
      },
      opacity: {
         value: 0.2
      },
      shape: {
         type: "circle"
      },
      size: {
         value: {
            min: 1,
            max: 5
         }
      }
   },
   detectRetina: false
}

export const library = [
   {
      key : 1,
      section : "BLOG TOOLS",
      title : "Blog ideas",
      description : "Get inspiration for your next blog post with a collection of creative blog ideas. Write engaging content with ease.",
      path : "/tools/blog-tools/blog-ideas"
   },
   {
      key : 2,
      section : "BLOG TOOLS",
      title : "Blog intro",
      description : "Craft a captivating introduction for your blog that sets the tone and hooks your readers.",
      path : "/tools/blog-tools/blog-intro"
   },
   {
      key : 3,
      section : "BLOG TOOLS",
      title : "Keyword generator",
      description : "Boost your search engine optimization (SEO) by discovering keywords that are relevant to your content.",
      path : "/tools/blog-tools/keyword-generator"
   },
   {
      key : 4,
      section : "E-COMMERCE",
      title : "Product description",
      description : "Create compelling product descriptions that highlight the features and benefits of your offerings.",
      path : "/tools/eCommerce/product-description"
   },
   {
      key : 5,
      section : "E-COMMERCE",
      title : "Short text hook",
      description : "Write attention-grabbing text hooks that grab the reader's attention and make them want to read on.",
      path : "/tools/eCommerce/short-text-hook"
   },
   {
      key : 6,
      section : "SOCIAL MEDIA TOOLS",
      title : "YouTube video ideas",
      description : "Generate ideas for your next YouTube video, from vlogs to tutorials to unboxings.",
      path : "/tools/social-media-tools/youTube-video-ideas"
   },
   {
      key : 7,
      section : "SOCIAL MEDIA TOOLS",
      title : "Instagram captions",
      description : "Write eye-catching captions for your Instagram posts that engage your followers and improve your visibility.",
      path : "/tools/social-media-tools/instagram-captions"
   },
   {
      key : 8,
      section : "SOCIAL MEDIA TOOLS",
      title : "Hashtag generator",
      description : "Discover popular hashtags related to your niche to help your content reach a wider audience.",
      path : "/tools/social-media-tools/hashtag-generator"
   },
   {
      key : 9,
      section : "DIGITAL AD COPY",
      title : "Ad copy variants",
      description : "Create multiple variations of your ad copy to test and optimize the performance of your advertising campaigns.",
      path : "/tools/digital-ad-copy/ad-copy-variants"
   },
   {
      key : 10,
      section : "DIGITAL AD COPY",
      title : "General Ad copy",
      description : "Write persuasive ad copy that converts potential customers into paying customers.",
      path : "/tools/digital-ad-copy/general-ad-copy"
   },
   {
      key : 11,
      section : "BRAINSTORMING TOOLS",
      title : "Name generator",
      description : "Find unique and memorable names for your business, product, or brand.",
      path : "/tools/brainstorming-tools/name-generator"
   },
   {
      key : 12,
      section : "BRAINSTORMING TOOLS",
      title : "Startup ideas",
      description : "Get inspired and explore new business opportunities with a collection of innovative startup ideas.",
      path : "/tools/brainstorming-tools/startup-ideas"
   },
   {
      key : 13,
      section : "PERSONAL TOOLS",
      title : "Love letter",
      description : "Write a heartfelt love letter to express your feelings to your significant other.",
      path : "/tools/personal-tools/love-letter"
   },
   {
      key : 14,
      section : "PERSONAL TOOLS",
      title : "Cover letter",
      description : "Write a compelling cover letter that showcases your skills and lands you your dream job.",
      path : "/tools/personal-tools/cover-letter"
   },
   {
      key : 15,
      section : "IMAGES",
      title : "Oil painting",
      description : "Replicate the look of a traditional oil painting on any image.",
      path : "/tools/images/oil-painting"
   },
   {
      key : 16,
      section : "IMAGES",
      title : "Watercolor",
      description : "Add a watercolor effect to give images a dreamy, whimsical look.",
      path : "/tools/images/watercolor"
   },
   {
      key : 17,
      section : "IMAGES",
      title : "Sketch",
      description : "Create a sketch-like effect to make images appear hand-drawn.",
      path : "/tools/images/sketch"
   },
   {
      key : 18,
      section : "IMAGES",
      title : "Pop art",
      description : "Add a pop art twist to images with bold colors and patterns.",
      path : "/tools/images/pop-art"
   }
]