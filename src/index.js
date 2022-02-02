import commandRobot from './utils/commandRobot'
import Table from './utils/Table'

function saveCommand(response) {
  const result = null || document.getElementById('result');
  result.innerHTML += `<p>${response}</p>`
}

function cliRobot (instanceTable , stdInput) {
  const commands = stdInput.split('\n')
  for (const command of commands) {
    const response = commandRobot (instanceTable, command)
    if (response) {
      if (response === true) {
        saveCommand(`${command}`)
      } else {
        saveCommand(`${response}`)
      }
    }
  }
}

(async function App() {
  const table = new Table()

  const text = null || document.getElementById('textValue');

  const commands = null || document.getElementById('commands');
  commands.addEventListener('click', (e) => {
    e.preventDefault()
    cliRobot(table, text.value)
  })
})();