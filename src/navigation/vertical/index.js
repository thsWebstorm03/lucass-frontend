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
          action: 'read',
          subject: 'acl-page',
          path: '/dashboards/library',
        },
        {
          title: 'History',
          action: 'read',
          subject: 'acl-page',
          path: '/dashboards/history',
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
          action: 'read',
          subject: 'acl-page',
          path: '/tools/blog-tools/blog-ideas'
        },
        {
          title: 'Blog intro',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/blog-tools/blog-intro'
        },
        {
          title: 'Keyword generator',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/blog-tools/keyword-generator'
        }
      ]
    },
    {
      title: 'E-commerce',
      children: [
        {
          title: 'Product description',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/eCommerce/product-description'
        },
        {
          title: 'Short text hook',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/eCommerce/short-text-hook'
        }
      ]
    },
    {
      title: 'Social media tools',
      children: [
        {
          title: 'YouTube video ideas',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/social-media-tools/youTube-video-ideas'
        },
        {
          title: 'Instagram captions',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/social-media-tools/instagram-captions'
        },
        {
          title: 'Hashtag generator',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/social-media-tools/hashtag-generator'
        }
      ]
    },
    {
      title: 'Digital Ad copy',
      children: [
        {
          title: 'Ad copy variants',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/digital-ad-copy/ad-copy-variants'
        },
        {
          title: 'General Ad copy',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/digital-ad-copy/general-ad-copy'
        }
      ]
    },
    {
      title: 'Brainstorming tools',
      children: [
        {
          title: 'Name generator',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/brainstorming-tools/name-generator'
        },
        {
          title: 'Startup ideas',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/brainstorming-tools/startup-ideas'
        }
      ]
    },
    {
      title: 'Personal tools',

      children: [
        {
          title: 'Love letter',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/personal-tools/love-letter'
        },
        {
          title: 'Cover letter',
          action: 'read',
          subject: 'acl-page',
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
          action: 'read',
          subject: 'acl-page',
          path: '/tools/images/oil-painting'
        },
        {
          title: 'Watercolor',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/images/watercolor'
        },
        {
          title: 'Sketch',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/images/sketch'
        },
        {
          title: 'Pop art',
          action: 'read',
          subject: 'acl-page',
          path: '/tools/images/pop-art'
        }
      ]
    },
    {
      sectionTitle: 'ACCOUNT'
    },
    {
      title: 'Profile',
      action: 'read',
      subject: 'acl-page',
      path: '/account/profile'
    },
    {
      title: 'Subscription',
      action: 'read',
      subject: 'acl-page',
      path: '/account/subscription'
    },
    {
      title: 'Payments',
      action: 'read',
      subject: 'acl-page',
      path: '/account/payments'
    },
    {
      title: 'Settings',
      action: 'read',
      subject: 'acl-page',
      path: '/account/settings'
    },
    {
      title: 'Logout',
      action: 'read',
      subject: 'acl-page',
      path: '/account/logout'
    }
  ]
}

export default navigation
