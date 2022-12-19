
const UserDashboardDate = ({ setDate, date }) => {
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
