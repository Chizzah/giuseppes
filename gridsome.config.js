// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Mango's Restaurant & Bar",
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  
  templates: {
    Food: '/content/food/:title/:price',
    Drinks: '/content/drinks/:title/:price'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/food/*.md',
        typeName: 'Food',
        remark: {
          plugins: [
            //...local plugins
          ]
        }
      },
    },    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/drinks/*.md',
        typeName: 'Drinks',
        remark: {
          plugins: [
            //...local plugins
          ]
        }
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
  ]
}