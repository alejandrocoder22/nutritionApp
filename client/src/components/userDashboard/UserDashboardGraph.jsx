import PieChartDashboard from './PieChartDashboard'

export const UserDashboardGraph = ({ foodDairy }) => {
  return (
    <div className='graph'>

      {foodDairy.length > 0 && <PieChartDashboard foodDairy={foodDairy} />}

    </div>
  )
}
