import 'bootstrap/dist/css/bootstrap.min.css';
import commandRobot from './utils/commandRobot'
import Table from './utils/Table'


function renderLogs (commandsLog = [{}]) {
  const result = null || document.getElementById('result');
  result.innerHTML = ''

  for (const command of commandsLog) {
    if (typeof command.response === 'boolean') {
      result.innerHTML += `<tr class="${command.response ? 'table-success' : 'table-danger'}">
      <th scope="row">${new Date(command.time).toLocaleTimeString("en-US")}</th>
      <td>${command.command}</td>
    </tr>`
    } else {
      result.innerHTML += `<tr class="table-success">
      <th scope="row">${new Date(command.time).toLocaleTimeString("en-US")}</th>
      <td>${command.response}</td>
    </tr>`
    }
    
    console.log(command)
    console.log(typeof command.response)
  }

}


function cliRobot (instanceTable , stdInput, commandsLog) {
  const commands = stdInput.split('\n').filter(value => value !== '')
  for (const command of commands) {
    const response = commandRobot (instanceTable, command)
    commandsLog.push({
      command : command,
      response : response,
      time: Date.now()
    })
  }
  renderLogs(commandsLog)
}

(async function App() {
  let table = new Table()

  let commandsLog = []

  const text = null || document.getElementById('commands');

  const commands = null || document.getElementById('btn-send');
  commands.addEventListener('click', (e) => {
    e.preventDefault()
    if (text.value !== '') {
      cliRobot(table, text.value, commandsLog)
      text.value = ''
    }
  })

  const restBtn = null || document.getElementById('btn-reset')
  restBtn.addEventListener('click', () => {
    const result = null || document.getElementById('result');
    result.innerHTML = ''
    text.value = ''
    table = new Table()
    commandsLog = []
  })
})();