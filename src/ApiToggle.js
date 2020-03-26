// Please don't review this 😅
// Exists to support the DEV API toggles
export default () => {
  const errorToggle = document.createElement('button')
  const toggleState = document.createElement('div')
  const message = document.createElement('div')

  const failAPI = window.localStorage.getItem('failAPI')

  if (failAPI === 'true') {
    // 🤠
    const fetch = window.fetch
    window.fetch = (options) => {
      return new Promise((res, rej) => {
        fetch(options).then(rej).catch(rej)
      })
    }
  }

  toggleState.textContent =
    failAPI === 'true' ? 'API will FAIL' : 'API will PASS'
  message.textContent = 'Click to toggle and then refresh.'

  Object.assign(errorToggle.style, {
    position: 'fixed',
    width: '400px',
    height: '50px',
    left: 'calc(50% - 200px)',
    bottom: 0,
    background: 'red',
    zIndex: 100,
    color: '#fff',
    border: 'none'
  })

  errorToggle.appendChild(message)
  errorToggle.appendChild(toggleState)

  errorToggle.addEventListener('click', () => {
    const failAPI = window.localStorage.getItem('failAPI')
    if (failAPI === 'true') {
      window.localStorage.setItem('failAPI', 'false')
      toggleState.textContent = 'API will PASS'
    } else {
      window.localStorage.setItem('failAPI', 'true')
      toggleState.textContent = 'API will FAIL'
    }
  })
  document.body.appendChild(errorToggle)
}
