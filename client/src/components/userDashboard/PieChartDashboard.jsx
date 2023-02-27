
import { PieChart, Pie } from 'recharts'
import { sumAllMacroData } from '../../utils/sumAllMacroData'

const PieChartDashboard = ({ foodDairy }) => {
  const data = [
    { name: 'Proteinas', value: sumAllMacroData(foodDairy, 'proteins') },
    { name: 'Fats', value: sumAllMacroData(foodDairy, 'fats') },
    { name: 'Carbs', value: sumAllMacroData(foodDairy, 'carbs') }
  ]
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey='value'
        startAngle={180}
        endAngle={0}
        data={data}
        cx='50%'
        cy='50%'
        outerRadius={80}
        fill='#8884d8'
        label
      />
    </PieChart>
  )
}
export default PieChartDashboard
