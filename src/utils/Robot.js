class Robot {

  constructor (index) {
    this.x = 0 // [0,5]
    this.y = 0 // [0,5]
    this.facing = null// [NORTH, SOUTH, EAST, WEST]
    this.isReady = false
    this.name = `Robot-${index}` 
  }
  //private methods
  
  isAValidPosition = (x, y, locationsUsed) => {
    if ((x >= 0 && x <= 5) && (y >= 0 && y <= 5)) {
      if (locationsUsed) {
        return !locationsUsed.includes([x,y])
      } else {
        return true
      }
    }
    return false
  } 

  validFacing = (facing) => {
    const validDirections = ['NORTH', 'SOUTH', 'EAST', 'WEST']
    return validDirections.includes(facing.toUpperCase())
  }

  // public methods
  // Place put the robot in X,Y and facing [NORTH, SOUTH, EAST, WEST]
  place = (x, y, facing, locationsUsed = []) => {
    if (this.isAValidPosition(x,y, locationsUsed) && this.validFacing(facing)) {
      this.x = x
      this.y = y
      this.facing = facing.toUpperCase()
      this.isReady = true
      return true
    } else {
      return false
    }
  }

  move = (locationsUsed = []) => {
    let new_x = this.x
    let new_y = this.y
    if (this.isReady) {
      if (this.facing ===  'NORTH'){
        new_y = this.y + 1 
      } else if (this.facing ===  'SOUTH') {
        new_y = this.y - 1
      } else if (this.facing ===  'EAST') {
        new_x = this.x + 1
      } else if (this.facing ===  'WEST') {
        new_x = this.x - 1
      }

      if (this.isAValidPosition(new_x, new_y, locationsUsed)){
        this.x = new_x
        this.y = new_y
        return true
      }
    } 
    return false
  }

  left = () => {
    if (this.isReady) {
      if (this.facing ===  'NORTH'){
        this.facing = 'WEST'
      } else if (this.facing ===  'SOUTH') {
        this.facing = 'EAST'
      } else if (this.facing ===  'EAST') {
        this.facing = 'NORTH'
      } else if (this.facing ===  'WEST') {
        this.facing = 'SOUTH'
      }
      return true
    }
    return false
  }

  right = () => {
    if (this.isReady) {
      if (this.facing ===  'NORTH'){
        this.facing = 'EAST'
      } else if (this.facing ===  'SOUTH') {
        this.facing = 'WEST'
      } else if (this.facing ===  'EAST') {
        this.facing = 'SOUTH'
      } else if (this.facing ===  'WEST') {
        this.facing = 'NORTH'
      }
      return true
    }
    return false
  }

  report = () => {
    if (this.isReady) {
      return {
        x: this.x,
        y: this.y,
        facing: this.facing
      }
    } else {
      return 'Robot not on the table'
    }
  }
}


export default Robot;