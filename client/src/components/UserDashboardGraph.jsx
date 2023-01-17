import PieChartDashboard from './PieChartDashboard'

const UserDashboardGraph = ({ foodDairy }) => {
  return (
    <div className='graph'>
      <PieChartDashboard foodDairy={foodDairy} />
    </div>
  )
}

export default UserDashboardGraph
