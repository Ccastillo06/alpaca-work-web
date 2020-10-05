import { BarChart, Bar, XAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts'

import styles from './HoursChart.module.scss'

export default function HoursChart({ graphSessions }) {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer>
        <BarChart data={graphSessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" name="Horas invertidas 🐂" fill="#8884d8" />
          <Bar dataKey="minutes" name="Minutos invertidos ⏰" fill="#E59500" />
          <Bar dataKey="seconds" name="Segundos invertidos 🎯" fill="#002642" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
