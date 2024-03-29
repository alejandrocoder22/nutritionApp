import { useEffect, useState } from 'react'
import Nav from '../components/ui/Nav'
import { UserDashboardDate, UserDashboardGraph, UserDashboardTable } from '../components/userDashboard'

export const UserDashboard = () => {
  const [date, setDate] = useState(new Date())
  const [foodDairy, setFoodDairy] = useState([])

  const getFoodDairyByDate = () => {
    return fetch(`${import.meta.env.VITE_BASE_URL}/api/food/dairy/${date}`, {
      method: 'GET',
      headers: {
        token: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  useEffect(() => {
    getFoodDairyByDate()
      .then(response => response.json())
      .then(foodData => setFoodDairy(foodData.data))
  }, [date])

  return (
    <section className='user-dashboard'>
      <section className='user-dashboard__section wrapper'>
        <UserDashboardDate setDate={setDate} date={date} />
        <UserDashboardTable date={date} foodDairy={foodDairy} setFoodDairy={setFoodDairy} />
        <UserDashboardGraph foodDairy={foodDairy} />
      </section>
    </section>
  )
}
