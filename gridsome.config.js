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
    Food: '/content/food/:title/:categories/:type/:description/:price',
    Drinks: '/content/drinks/:title/:type/:description/:price',
    Dessert: '/content/dessert/:title/:type/:description/:price',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'content/food',
        pathPrefix: '/food',
        typeName: 'Food',
        path: '*.md',
        remark: {
          plugins: [
            //...local plugins
          ]
        }
      },
    },    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'content/drinks',
        pathPrefix: '/drinks',
        typeName: 'Drinks',
        path: '*.md',
        remark: {
          plugins: [
            //...local plugins
          ]
        }
      },
    },    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'content/dessert',
        pathPrefix: '/dessert',
        typeName: 'Dessert',
        path: '*.md',
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