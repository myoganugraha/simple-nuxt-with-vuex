
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
    // {
    //   src: 'ant-design-vue/dist/antd.less',
    //   lang: 'less'
    // }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // babel: {
    //   plugins: [
    //     [
    //       'import',
    //       {
    //         libraryName: 'ant-design-vue'
    //         // libraryDirectory: 'es'
    //         // style: true
    //       },
    //       'ant-design-vue'
    //     ]
    //   ]
    // },
    // loaders: {
    //   less: { javascriptEnabled: true }
    // }
  }
}
