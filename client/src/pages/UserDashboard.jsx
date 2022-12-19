import { useState } from 'react'
import Nav from '../components/Nav'
import UserDashboardDate from '../components/UserDashboardDate'
import UserDashboardGraph from '../components/UserDashboardGraph'
import UserDashboardTable from '../components/UserDashboardTable'

const UserDashboard = () => {
  const [date, setDate] = useState('')
  return (
    <main className='user-dashboard'>
      <Nav />
      <section className='user-dashboard__section wrapper'>
        <UserDashboardDate setDate={setDate} date={date} />
        <UserDashboardTable date={date} />
        <UserDashboardGraph />
      </section>
    </main>
  )
}

export default UserDashboard
