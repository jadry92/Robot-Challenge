import commandRobot from "../utils/commandRobot"
import Table from "../utils/Table"


describe('Test of CLI Robot', () => {
  let table = new Table()
  
  it('case 1', () => {
    commandRobot(table,'PLACE 0,0,NORTH')
    commandRobot(table,'MOVE')
    
    expect(commandRobot(table,'REPORT')).toBe("--| Active: Robot-1 | Total Robots: 1 | (0,1) - NORTH |--")
  })

  it('case 2', () => {
    commandRobot(table,'PLACE 0,1,NORTH')
    commandRobot(table,'MOVE')
    
    expect(commandRobot(table,'REPORT')).toBe("--| Active: Robot-1 | Total Robots: 1 | (0,2) - NORTH |--")
  })

  it('case 3', () => {
    commandRobot(table,'PLACE 1,0,NORTH')
    commandRobot(table,'LEFT')
    
    expect(commandRobot(table,'REPORT')).toBe("--| Active: Robot-2 | Total Robots: 2 | (1,0) - WEST |--")
  })

  it('case 4', () => {
    commandRobot(table,'PLACE 1,2,EAST')
    commandRobot(table,'MOVE')
    commandRobot(table,'MOVE')
    commandRobot(table,'LEFT')
    commandRobot(table,'MOVE')  
    
    expect(commandRobot(table,'REPORT')).toBe("--| Active: Robot-3 | Total Robots: 3 | (3,3) - NORTH |--")
  })

  it('case 5', () => {
    commandRobot(table,'ROBOT 1')
    commandRobot(table,'MOVE')
    commandRobot(table,'MOVE')
    commandRobot(table,'MOVE')
    commandRobot(table,'MOVE')
    commandRobot(table,'RIGHT')
    commandRobot(table,'MOVE')  
    
    expect(commandRobot(table,'REPORT')).toBe("--| Active: Robot-1 | Total Robots: 3 | (1,5) - EAST |--")
  })
})