module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/ssbu-character-select/' : '/',
  pwa: {
    name: 'SSBU Character Select Screen',
    themeColor: '#FF3737',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}
