
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const UserDashboardDate = ({ setDate, date }) => {
  const changeDate = (e) => {
    setDate(e)
  }
  return (
    <div className='date'>
      <DatePicker selected={date} onChange={changeDate} />
      <input onChange={changeDate} type='date' />
    </div>
  )
}

export default UserDashboardDate
