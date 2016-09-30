const remote = require('electron').remote
const main = remote.require('./main.js')


var button = document.createElement('button')
button.textContent= 'Open Window'
document.body.appendChild(button) //Tests out creating a button on a window
button.addEventListener('click', () => {
	
	main.openWindow()
}, false )