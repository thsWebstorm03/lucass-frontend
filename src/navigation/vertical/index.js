const navigation = () => {
  return [
    {
      sectionTitle: 'Dashboard'
    },
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
      sectionTitle: 'TOOLS'
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
          title: 'Content Rewriter',
          path: '/tools/blog-tools/content-rewriter'
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
        },
        {
          title: 'etsy product title',
          path: '/tools/eCommerce/etsy-product-title'
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
      title: 'Video Script Generator',
      path: '/tools/video-script-generator'
    },
    {
      title: 'Writing Tools',
      children: [
        {
          title: 'SEO content',
          path: '/tools/writing-tools/seo-content'
        }
      ]
    },
    {
      sectionTitle: 'ACCOUNT'
    },
    {
      title: 'Profile',
      path: '/account/profile'
    },
    {
      title: 'Subscription',
      path: '/account/subscription'
    },
    {
      title: 'Payments',
      path: '/account/payments'
    },
    {
      title: 'Settings',
      path: '/account/settings'
    },
    {
      title: 'Logout',
      path: '/account/logout'
    }
  ]
}

export default navigation
