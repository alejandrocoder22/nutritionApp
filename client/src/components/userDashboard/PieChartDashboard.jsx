
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { sumAllMacroData } from '../../utils/sumAllMacroData'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.50
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
const PieChartDashboard = ({ foodDairy }) => {
  const data = [
    { name: 'Proteinas', value: sumAllMacroData(foodDairy, 'proteins') },
    { name: 'Fats', value: sumAllMacroData(foodDairy, 'fats') },
    { name: 'Carbs', value: sumAllMacroData(foodDairy, 'carbs') }
  ]

  return (
    <PieChart width={300} height={250}>
      <Pie
        data={data}
        cx='50%'
        cy='50%'
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill='#8884d8'
        dataKey='value'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  )
}

export default PieChartDashboard
