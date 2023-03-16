
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const UserDashboardDate = ({ setDate, date }) => {
  const changeDate = (e) => {
    setDate(e)
  }
  return (
    <div className='date'>
      <DatePicker
        selected={date}
        onChange={changeDate}
        dateFormat='yyyy/MM/dd'
      />

    </div>
  )
}
