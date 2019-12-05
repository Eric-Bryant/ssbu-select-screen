var deferredPrompt

window.addEventListener('beforeinstallprompt', function(e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e

  showAddToHomeScreen()
})

function showAddToHomeScreen() {
  var installBtn = document.querySelector('.install-prompt')

  installBtn.style.display = 'block'

  installBtn.addEventListener('click', addToHomeScreen)
}

function addToHomeScreen() {
  var installBtn = document.querySelector('.install-prompt') // hide our user interface that shows our A2HS button
  installBtn.style.display = 'none' // Show the prompt
  deferredPrompt.prompt() // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(function(choiceResult) {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt')
    } else {
      console.log('User dismissed the A2HS prompt')
    }

    deferredPrompt = null
  })
}
