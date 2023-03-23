const navigation = () => {
   return [
     {
       title: 'Dashboards',
       children: [
         {
           title: 'Library',
           path: '/dashboards/library'
         },
         {
           title: 'History',
           path: '/dashboards/history'
         }
       ]
     },
     {
       title: 'Blog tools',
       children: [
         {
           title: 'Blog ideas',
           path: '/tools/blog-tools/blog-ideas'
         },
         {
           title: 'Blog intro',
           path: '/tools/blog-tools/blog-intro'
         },
         {
           title: 'Keyword generator',
           path: '/tools/blog-tools/keyword-generator'
         },
         {
           title: 'Test Adir',
           path: '/tools/blog-tools/test-adir'
         },
         {
           title: 'Full article writing',
           path: '/tools/blog-tools/full-article-writing'
         }
       ]
     },
     {
       title: 'E-commerce',
       children: [
         {
           title: 'Product description',
           path: '/tools/eCommerce/product-description'
         },
         {
           title: 'Short text hook',
           path: '/tools/eCommerce/short-text-hook'
         }
       ]
     },
     {
       title: 'Social media tools',
       children: [
         {
           title: 'YouTube video ideas',
           path: '/tools/social-media-tools/youTube-video-ideas'
         },
         {
           title: 'Instagram captions',
           path: '/tools/social-media-tools/instagram-captions'
         },
         {
           title: 'Hashtag generator',
           path: '/tools/social-media-tools/hashtag-generator'
         }
       ]
     },
     {
       title: 'Digital Ad copy',
       children: [
         {
           title: 'Ad copy variants',
           path: '/tools/digital-ad-copy/ad-copy-variants'
         },
         {
           title: 'General Ad copy',
           path: '/tools/digital-ad-copy/general-ad-copy'
         }
       ]
     },
     {
       title: 'Brainstorming tools',
       children: [
         {
           title: 'Name generator',
           path: '/tools/brainstorming-tools/name-generator'
         },
         {
           title: 'Startup ideas',
           path: '/tools/brainstorming-tools/startup-ideas'
         }
       ]
     },
     {
       title: 'Personal tools',
       icon: 'tabler:dots',
       children: [
         {
           title: 'Love letter',
           path: '/tools/personal-tools/love-letter'
         },
         {
           title: 'Cover letter',
           path: '/tools/personal-tools/cover-letter'
         }
       ]
     },
     {
       title: 'Images',
       icon: 'tabler:dots',
       badgeContent: 'new',
       badgeColor: 'primary',
       children: [
         {
           title: 'Oil painting',
           path: '/tools/images/oil-painting'
         },
         {
           title: 'Watercolor',
           path: '/tools/images/watercolor'
         },
         {
           title: 'Sketch',
           path: '/tools/images/sketch'
         },
         {
           title: 'Pop art',
           path: '/tools/images/pop-art'
         }
       ]
     },
     {
       title: 'Profile',
       icon: 'tabler:dots',
       path: '/account/profile'
     },
     {
       title: 'Subscription',
       icon: 'tabler:dots',
       path: '/account/subscription'
     },
     {
       title: 'Payments',
       icon: 'tabler:dots',
       path: '/account/payments'
     },
     {
       title: 'Settings',
       icon: 'tabler:dots',
       path: '/account/settings'
     },
     {
       title: 'Logout',
       icon: 'tabler:dots',
       path: '/account/logout'
     }
   ]
 }
 
 export default navigation
 