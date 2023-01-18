import PieChartDashboard from './PieChartDashboard'

const UserDashboardGraph = ({ foodDairy }) => {
  return (
    <div className='graph'>
      <div className='user-dashboard__info'>
        Total
      </div>
      <PieChartDashboard foodDairy={foodDairy} />
    </div>
  )
}

export default UserDashboardGraph
