module.exports = {
  publicPath:
    // process.env.NODE_ENV === 'production' ? '/ssbu-character-select/' : '/',
    '/',
  pwa: {
    name: 'SSBU Select',
    themeColor: '#FF3737',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
}
