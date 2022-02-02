//import Robot from './Robot'
import Robot from '../utils/Robot'

describe('Test of Robot class', () => {

 
  it('case 1', () => {
    const robot = new Robot(1)
    robot.place(0,0,'NORTH')
    robot.move()
    expect(robot.report()).toEqual({x:0, y:1, facing:'NORTH'})
  })

  it('case 2', () => {
    const robot = new Robot(1)
    robot.place(0,0,'NORTH')
    robot.left()
    expect(robot.report()).toEqual({x:0, y:0, facing:'WEST'})
  })

  it('case 3', () => {
    const robot = new Robot(1)
    robot.place(1,2,'EAST')
    robot.move()
    robot.move()
    robot.left()
    robot.move()
    expect(robot.report()).toEqual({x:3, y:3, facing:'NORTH'})
  })

  it('case 4', () => {
    const robot = new Robot(1)
    robot.move()
    robot.move()
    robot.left()
    robot.move()
    expect(robot.report()).not.toEqual({x:0, y:0, facing:null})
  })

  it('case 5', () => {
    const robot = new Robot(1)
    robot.move()
    robot.move()
    robot.left()
    robot.move()
    expect(robot.report()).toBe('Robot not on the table')
  })

});
