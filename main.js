window.onload = function () {
  let screen = document.getElementById('screen')
  let currentValue = screen.innerHTML

  document.getElementById('digits').addEventListener('click', function (event) {
    const target = event.target
    let i = currentValue.length

    // Check if the clicked element is a div
    if (target.tagName.toLowerCase() === 'div') {
      let value = target.innerText

      if (value == 'C') {
        currentValue = '0'
        screen.innerHTML = currentValue
      }
      // Do whatever you want with the value here
      if (value >= 1 && value <= 9) {
        let i = currentValue.length
        if (i == 1 && currentValue[0] == 0) {
          currentValue = value
          screen.innerHTML = currentValue
          return
        }
        currentValue += value
        screen.innerHTML = currentValue
      }

      if (
        value == '^' ||
        value == '÷' ||
        value == 'x' ||
        value == '+' ||
        value == '-'
      ) {
        let i = currentValue.length
        if (i == 1 && currentValue[0] == 0) {
          currentValue = '-'
          screen.innerHTML = currentValue
          return
        }
        if (
          currentValue[i - 1] == '÷' ||
          currentValue[i - 1] == 'x' ||
          currentValue[i - 1] == '-' ||
          currentValue[i - 1] == '+' ||
          currentValue[i - 1] == '^' ||
          currentValue[i - 1] == '.'
        ) {
          return
        }
        if (i == 1 && currentValue[0] == 0) {
          currentValue = '0'
          screen.innerHTML = currentValue
          return
        }
        currentValue += value
        screen.innerHTML = currentValue
      }

      if (value == '«') {
        let i = currentValue.length
        if (i == 1) {
          currentValue = '0'
          screen.innerHTML = currentValue
          return
        }
        currentValue = currentValue.slice(0, -1)
        screen.innerHTML = currentValue
      }

      if (value == '.') {
        let i = currentValue.length
        if (
          currentValue[i - 1] == '÷' ||
          currentValue[i - 1] == 'x' ||
          currentValue[i - 1] == '-' ||
          currentValue[i - 1] == '+' ||
          currentValue[i - 1] == '^' ||
          currentValue[i - 1] == '.'
        ) {
          return
        }
        currentValue += value
        screen.innerHTML = currentValue
      }

      if (value == '=') {
        currentValue = currentValue.replace('^', '**')
        currentValue = currentValue.replace('÷', '/')
        currentValue = currentValue.replace('x', '*')
        currentValue = '' + eval(currentValue)
        screen.innerHTML = currentValue
      }

      if (value == '0') {
        let i = currentValue.length
        if (i == 1 && currentValue[0] == 0) {
          currentValue = '0'
          screen.innerHTML = currentValue
          return
        }
        currentValue += value
        screen.innerHTML = currentValue
      }

      if (value == '00') {
        let i = currentValue.length
        if (i == 1 && currentValue[0] == 0) {
          currentValue = value
          screen.innerHTML = currentValue
          return
        }
        currentValue += value
        screen.innerHTML = currentValue
      }
    }
  })
}
