
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import { sumAllMacroData } from '../../utils/sumAllMacroData'

const PieChartDashboard = ({ foodDairy }) => {
  const data = [
    { name: 'Proteinas', value: sumAllMacroData(foodDairy, 'proteins') },
    { name: 'Grasas', value: sumAllMacroData(foodDairy, 'fats') },
    { name: 'Carbohidratos', value: sumAllMacroData(foodDairy, 'carbs') }
  ]
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']
  return (
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        cx={175}
        cy={200}
        innerRadius={50}
        outerRadius={80}
        fill='#8884d8'
        paddingAngle={5}
        dataKey='value'
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />

    </PieChart>
  )
}

export default PieChartDashboard
