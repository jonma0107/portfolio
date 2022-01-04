// ====================== DARK THEME ==========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validatin the dark theme class
const getCurrentTheme = ()  => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = ()  => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

// We need to validate if the userhas previouly chosen a topic
if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// add or remove the dark/light icon -- icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// we save the theme and the curent icon that the user has chosen
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon()) 
})
console.log("THEME SETTING WORKING")
