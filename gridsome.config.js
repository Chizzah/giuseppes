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
    Pasta: '/content/food/pasta/:title/:description/:price',
    Pizza: '/content/food/pizza/:title/:description/:price',
    Beer: '/content/drinks/beer/:title/:description/:price',
    Whiskey: '/content/drinks/whiskey/:title/:description/:price'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/food/pasta/*.md',
        typeName: 'Pasta',
        remark: {
          plugins: [
            //...local plugins
          ]
        }
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/food/pizza/*.md',
        typeName: 'Pizza',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/drinks/beer/*.md',
        typeName: 'Beer',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/drinks/whiskey/*.md',
        typeName: 'Whiskey',
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