//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minute) {
    this.hour = hour,
    this.minute = minute
  }

  toString() {
    let array = this.hour.toString().split()
    console.log('array', array)
    if(array.length < 2) {
      return `0${this.hour}:${this.minute || '00'}`
    }
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
