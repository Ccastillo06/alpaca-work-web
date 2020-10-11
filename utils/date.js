import parse from 'date-fns/parse'

export const getSeconds = (ms) => Math.floor((ms / 1000) % 60)
export const getMinutes = (ms) => Math.floor((ms / (1000 * 60)) % 60)
export const getHours = (ms) => Math.floor((ms / (1000 * 60 * 60)) % 24)

const getInDoubleDigits = (time) => (`${time}`.length === 1 ? `0${time}` : time)

export const getTimeFromMs = (ms) =>
  `${getInDoubleDigits(getHours(ms))}:${getInDoubleDigits(getMinutes(ms))}:${getInDoubleDigits(
    getSeconds(ms)
  )}`

export const getTimeDividedFromMs = (ms) => ({
  hours: getHours(ms),
  minutes: getMinutes(ms),
  seconds: getSeconds(ms)
})

export const parseDateToCommon = (date) => parse(date, 'dd-MM-yyyy', new Date())
