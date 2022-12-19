import { useEffect, useState } from 'react'

import Nav from '../components/Nav'
import UserDashboardDate from '../components/UserDashboardDate'
import UserDashboardGraph from '../components/UserDashboardGraph'
import UserDashboardTable from '../components/UserDashboardTable'

const todayDate = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

const UserDashboard = () => {
  const [date, setDate] = useState('')
  const [foodDairy, setFoodDairy] = useState([])

  const getFoodDairyByDate = () => {
    return fetch(`http://localhost:3001/api/food/dairy/1/${date || todayDate()}`)
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
        <UserDashboardGraph />
      </section>
    </main>
  )
}

export default UserDashboard
