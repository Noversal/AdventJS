export default function daysToXmas(date) {
    const xmas_date = new Date('Dec 25 2021')
    const xmas_miliseconds = Date.parse(xmas_date)
    const milisecond_date = Date.parse(date)
    const diffrent_days_miliseconds = xmas_miliseconds - milisecond_date
    const miliseconds_day = 8.64e+7
    const days_with_decimal = diffrent_days_miliseconds / miliseconds_day
    const days = Math.ceil(days_with_decimal)
    return days
}