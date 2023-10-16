export default function daysToXmas(date) {
    const xmas = new Date('Dec 25, 2021').getTime()
    const day = date.getTime()
    const diffTime = xmas - day
    const miliseconds_day = 86_400_000
    const diffDay = diffTime / (miliseconds_day)  
    return Math.ceil(diffDay)
  }