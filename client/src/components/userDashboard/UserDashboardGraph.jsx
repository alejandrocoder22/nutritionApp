import PieChartDashboard from './PieChartDashboard'

const UserDashboardGraph = ({ foodDairy }) => {
  return (
    <div className='graph'>

      {foodDairy.length > 0 && <PieChartDashboard foodDairy={foodDairy} />}

    </div>
  )
}

export default UserDashboardGraph
