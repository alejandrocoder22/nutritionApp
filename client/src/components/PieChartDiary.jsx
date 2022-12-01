
import { PieChart, Pie } from 'recharts'

const PieChartDiary = ({ proteins, fats, carbs }) => {
  const data = [
    { name: 'Proteinas', value: Number(proteins) },
    { name: 'Fats', value: Number(fats) },
    { name: 'Carbs', value: Number(carbs) }
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
export default PieChartDiary
