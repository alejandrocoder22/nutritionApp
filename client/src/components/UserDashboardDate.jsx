import { useState } from 'react'

const UserDashboardDate = () => {
  const [date, setDate] = useState('')
  const changeDate = (e) => {
    setDate(e.target.value)
  }
  return (
    <div className='date'>
      <input onChange={changeDate} type='date' />
      <p>Día seleccionado: {date}</p>

    </div>
  )
}

export default UserDashboardDate
