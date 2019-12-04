const placeholderHandler = workbox.strategies.cacheFirst({
  cacheName: 'placeholder-cache'
})

workbox.routing.registerRoute(
  'https://ssbu-character-select.firebaseio.com/fighters.json',
  args => {
    return placeholderHandler
      .handle(args)
      .then(response => {
        console.log('Online: Fetch was called successful')
        return response
      })
      .catch(err => {
        console.log('no cache data')
      })
  }
)
