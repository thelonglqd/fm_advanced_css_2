const checkbox = document.getElementById('hamburger-icon')

checkbox?.addEventListener('change', () => {
  document.body.classList.toggle(
    'menu-open',
    checkbox.checked,
  )
})

const navElement = document.querySelector('.nav--header')
const desktopQuery = window.matchMedia(
  '(min-width: 1440px)',
)

function handleDesktopChange(e) {
  if (e.matches) {
    navElement?.classList?.remove('full-width')
  } else {
    navElement?.classList?.add('full-width')
  }
}

desktopQuery.addEventListener('change', handleDesktopChange)

handleDesktopChange(desktopQuery)
