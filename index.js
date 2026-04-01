const checkbox = document.getElementById('hamburger-icon')
console.log('??????')
checkbox.addEventListener('change', () => {
  document.body.classList.toggle(
    'menu-open',
    checkbox.checked,
  )
})
