import format from 'date-fns/format'
import parse from 'date-fns/parse'

import { getTimeDividedFromMs, getTimeFromMs, parseDateToCommon } from './date'

/**
 * Receives an array of sessions from a Firebase query consisting on sessions objects
 * { discordId, username, discriminator, startTime, endTime, timeSpent }
 *
 * Transforms the array into an Object with all sessions stacked into the workSessions array
 * @param {Array} sessions
 * @return {Object}
 */
export const formatSessionsFromFirebase = (sessions = []) =>
  sessions.reduce((acc, next) => {
    const { discordId, username, discriminator, startTime, endTime, timeSpent, subject } = next.data

    return {
      discordId: discordId,
      username: username,
      discriminator: discriminator,
      workSessions: [
        ...(acc.workSessions || []),
        {
          id: next.id,
          subject,
          startDay: format(startTime, 'dd-MM-yyyy'),
          startHour: format(startTime, 'HH:mm:ss'),
          endDay: format(endTime, 'dd-MM-yyyy'),
          endHour: format(endTime, 'HH:mm:ss'),
          timeSpent: getTimeFromMs(timeSpent),
          timeSpentInMs: timeSpent,
          startTimeInMs: startTime,
          endTimeInMs: endTime
        }
      ]
    }
  }, {})

export const getSessionsStackedByDay = (workSessions) => {
  const unifiedSessionsByDay = workSessions.reduce(
    (acc, { startDay, timeSpentInMs }) => ({
      ...acc,
      [startDay]: timeSpentInMs + (acc[startDay] || 0)
    }),
    {}
  )

  return [
    ...Object.keys(unifiedSessionsByDay).map((dayKey) => ({
      name: dayKey,
      time: getTimeFromMs(unifiedSessionsByDay[dayKey]),
      ...getTimeDividedFromMs(unifiedSessionsByDay[dayKey])
    }))
  ].sort((a, b) => parseDateToCommon(a.name) - parseDateToCommon(b.name))
}

export const getSessionsStackedBySubject = (workSessions) => {
  const unifiedSessionsBySubject = workSessions.reduce(
    (acc, { subject, timeSpentInMs }) => ({
      ...acc,
      [subject]: timeSpentInMs + (acc[subject] || 0)
    }),
    {}
  )

  return [
    ...Object.keys(unifiedSessionsBySubject).map((subjectKey) => ({
      name: subjectKey || 'Sin tema',
      time: getTimeFromMs(unifiedSessionsBySubject[subjectKey]),
      ...getTimeDividedFromMs(unifiedSessionsBySubject[subjectKey])
    }))
  ].sort((a, b) => parseDateToCommon(a.name) - parseDateToCommon(b.name))
}

export const sortWorkSessions = (workSessions) =>
  workSessions
    .sort((a, b) => parseDateToCommon(a.startDay) - parseDateToCommon(b.startDay))
    .sort((a, b) => a.startTimeInMs - b.startTimeInMs)
