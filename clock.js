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

    let minuteArray = this.minute ? this.minute.toString().split('') : ['0','0']
    let minute = minuteArray.length < 2 ? `0${this.minute}` : minuteArray.join('')
    
    if (hour === '24') {
      hour = '00'
    }
    if (minute === '60') {
      minute = '00'
    }

    if (parseInt(hour) > 24) {
      while(parseInt(hour) > 24) {
        hour = parseInt(hour) - 24
      }
     hour = hour.toString().split('').length < 2 ? `0${hour}` : this.hour.toString() || '00'
    }

   
    return `${hour}:${minute}`
  }

  plus() {
    
  }

  minus() {
    
  }

  equals() {
    
  }
}