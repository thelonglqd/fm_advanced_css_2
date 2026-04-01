const checkbox = document.getElementById('hamburger-icon')
checkbox.addEventListener('change', () => {
  document.body.classList.toggle(
    'menu-open',
    checkbox.checked,
  )
})
