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
    let hourArray = this.hour.toString().split('');
    
    
    return hourArray.length < 2 ? `0${this.hour}:${this.minute || '00'}` : `${this.hour}:0${this.minute || '00'}`
  }

  plus() {
    
  }

  minus() {
    
  }

  equals() {
    
  }
}