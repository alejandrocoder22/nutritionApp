import { useEffect, useState } from 'react'

import Nav from '../components/Nav'
import UserDashboardDate from '../components/UserDashboardDate'
import UserDashboardGraph from '../components/UserDashboardGraph'
import UserDashboardTable from '../components/UserDashboardTable'

const UserDashboard = () => {
  const [date, setDate] = useState(new Date())
  const [foodDairy, setFoodDairy] = useState([])

  const getFoodDairyByDate = () => {
    return fetch(`http://localhost:3001/api/food/dairy/1/${date}`)
  }

  useEffect(() => {
    getFoodDairyByDate()
      .then(response => response.json())
      .then(foodData => setFoodDairy(foodData.data))
  }, [date])

  return (
    <main className='user-dashboard'>
      <Nav />
      <section className='user-dashboard__section wrapper'>
        <UserDashboardDate setDate={setDate} date={date} />
        <UserDashboardTable date={date} foodDairy={foodDairy} />
        <UserDashboardGraph foodDairy={foodDairy} />
      </section>
    </main>
  )
}

export default UserDashboard
