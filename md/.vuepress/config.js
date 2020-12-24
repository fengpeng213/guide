const { zh } = require('./sidebar/convention');
const webpack = require('webpack');
const path = require('path')
module.exports = {
  title: 'Coding Style Guide',
  dest: path.resolve(__dirname, '../../docs'),
  port: 9527,
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/mayueyue-32.png"}],
    ['meta', { name: "keywords", content: "代码规范前端团队，代码规范，前端代码规范，代码风格，代码约定，代码风格指引，前端编码风格指引" }]
  ],
  description: '前端团队代码规范',
  docsDir: 'md',
  smoothScroll: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '',
      description: ''
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    'vuepress-plugin-dehydrate',
    {
      noSSR: [
        '*.html'
      ]
    }
  ],
  themeConfig: {
    logo: '/images/mayueyue.png',
    locales: {
      '/': {
        label: '简体中文',
        nav: require('./nav/zh'),
        sidebar: {
          '/': zh
        }
      },
    }
  },
  extraWatchFiles: [
    './sidebar/*.js'
  ],
  configureWebpack: {
    output: {
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ]
    }
  }
}