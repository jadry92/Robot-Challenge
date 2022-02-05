import Table from './Table'

function commandRobot (instanceTable = new Table(), command = '') {
  if (command !== '') {
    if (command.includes('PLACE')) {
      let rex_place = /^PLACE\s(\d),(\d),(NORTH|WEST|EAST|SOUTH)$/
      const match = command.match(rex_place)
      if (match) {
        const x = parseInt(match[1])
        const y = parseInt(match[2])
        const facing = match[3]
        return instanceTable.robotPlace(x,y,facing)
      }
    } else if (command === 'MOVE') {
    
      return instanceTable.robotMove()
    
    } else if (command === 'LEFT') {
    
      return instanceTable.robotLeft()
    
    } else if (command === 'RIGHT') {
    
      return instanceTable.robotRight()
    
    } else if (command === 'REPORT') {
    
      const response = instanceTable.robotReport()
      console.log(response)
      if (typeof response === 'object') {
        return `Active: ${response.active} | Total Robots: ${response.number_robots} | (${response.x},${response.y}) - ${response.facing}`
      }
      return response

    } else if (command.includes('ROBOT')) {
      let rex_robot = /^ROBOT\s(\d{1,3})$/
      const match = command.match(rex_robot)
      if (match) {
        const index = parseInt(match[1])
        return instanceTable.selectRobot(index)
      }
    }
  }
  return false
}


export default commandRobot;