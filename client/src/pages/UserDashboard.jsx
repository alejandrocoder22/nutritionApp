import Nav from '../components/Nav'
import UserDashboardDate from '../components/UserDashboardDate'
import UserDashboardGraph from '../components/UserDashboardGraph'
import UserDashboardTable from '../components/UserDashboardTable'

const UserDashboard = () => {
  return (
    <main className='user-dashboard'>
      <Nav />
      <section className='user-dashboard__section wrapper'>
        <UserDashboardDate />
        <UserDashboardTable />
        <UserDashboardGraph />
      </section>
    </main>
  )
}

export default UserDashboard
