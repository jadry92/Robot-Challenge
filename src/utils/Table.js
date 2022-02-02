import Robot from "./Robot"

class Table {
  constructor () { 
    this.robots = [] // [Robot_1 , ...]
    this.index = 0
    this.locationsUsed = [] // [[x_1, y_1], [x_2, y_2], ...]
  }

  emptyLocation = (x,y) => {
    let response = true 
    if (this.locationsUsed.length !== 0) {
      for (const location of this.locationsUsed) {
        response = response && !(location[0] === x && location[1] === y)
      }
      return response
    }
    return response
  }

  selectRobot = (index) => {
    if (this.robots[index - 1]) {
      this.index = index - 1
      return true
    }
    return false
  }

  robotPlace = (x,y,facing) => {
    if (this.robots.length === 0) {
      this.robots.push(new Robot(this.index + 1))
      this.locationsUsed.push([x,y])
      return this.robots[this.index].place(x,y,facing, this.locationsUsed)
    } else if (this.emptyLocation(x,y)) {
      this.index += 1
      this.robots.push(new Robot(this.index + 1))
      this.locationsUsed.push([x,y])
      return this.robots[this.index].place(x,y,facing, this.locationsUsed)
    }
  }

  robotMove = () => {
    const response = this.robots[this.index].move(this.locationsUsed)
    if (response) {
      this.locationsUsed[this.index] = [this.robots[this.index].x, this.robots[this.index].y]
    }
    return response;
  }

  robotLeft = () => {
    return this.robots[this.index].left()
  }

  robotRight = () => {
    return this.robots[this.index].right()
  }

  robotReport = () => {
    const response = this.robots[this.index].report()
    return {
      number_robots: this.robots.length,
      active: this.robots[this.index].name,
      ...response
    }
  }
}


export default Table