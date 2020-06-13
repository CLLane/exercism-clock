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
    let hour = hourArray.length < 2 ? `0${this.hour}` : this.hour.toString() || '00'

    let minuteArray = this.minute ? this.minute.toString().split('') : '00'
    let minute = minuteArray.length < 2 ? `0${this.minute}` : this.minute.toString() || '00'
    
   
    // return hourArray.length < 2 ? `0${this.hour}:${this.minute || '00'}` : `${this.hour}:0${this.minute || '00'}`
  }

  plus() {
    
  }

  minus() {
    
  }

  equals() {
    
  }
}