import { Link } from 'react-router-dom'
import FoodPeriodRow from './FoodPeriodRow'
import UserDashboardTableHeader from './UserDashboardTableHeader'

const UserDashboardTable = ({ date, foodDairy, setFoodDairy }) => {
  return (
    <table className='table'>
      <UserDashboardTableHeader />
      <tbody className='table__tbody'>
        <tr className='table__tr'>
          <td className='table__td  table__period left'>Desayuno</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'breakfast') {
                return <FoodPeriodRow key={food.dairy_id} food={food} />
              }
            }
            )
          }

        <tr className='table__section-start'>
          <td className='table__section-add'><Link to={`/add-dairy?date=${date}&period=breakfast`}>Añadir...</Link></td>
        </tr>
        <tr className='table__tr'>
          <td className='table__td table__period left'>Comida</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'launch') {
                return <FoodPeriodRow key={food.dairy_id} food={food} />
              }
            }
            )
          }
        <tr className='table__section-start'>
          <td className='table__section-add'><Link to={`/add-dairy?date=${date}&period=launch`}>Añadir...</Link></td>
        </tr>
        <tr className='table__separate-bar' />
        <tr className='table__tr'>
          <td className='table__td table__period left'>Cena</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'dinner') {
                return <FoodPeriodRow key={food.dairy_id} food={food} />
              }
            }
            )
          }
        <tr className='table__section-start'>
          <td className='table__section-add'><Link to={`/add-dairy?date=${date}&period=dinner`}>Añadir...</Link></td>
        </tr>
        <tr className='table__separate-bar' />
        <tr className='table__tr'>
          <td className='table__td table__period left'>Otros</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'other') {
                return <FoodPeriodRow key={food.dairy_id} food={food} />
              }
            }
            )
          }
        <tr className=' table__section-start'>
          <td className='table__section-add'><Link to={`/add-dairy?date=${date}&period=other`}>Añadir...</Link></td>
        </tr>
        <tr className='table__separate-bar' />
      </tbody>
    </table>
  )
}

export default UserDashboardTable
