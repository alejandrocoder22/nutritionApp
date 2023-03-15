import { Link } from 'react-router-dom'
import AddToDairyButton from './AddToDairyButton'
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
                return <FoodPeriodRow key={food.dairy_id} food={food} foodDairy={foodDairy} setFoodDairy={setFoodDairy} />
              }
            }
            )
          }

        <tr className='table__section-start'>
          <AddToDairyButton period='breakfast' date={date} />
        </tr>
        <tr className='table__tr'>
          <td className='table__td table__period left'>Comida</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'launch') {
                return <FoodPeriodRow key={food.dairy_id} food={food} foodDairy={foodDairy} setFoodDairy={setFoodDairy} />
              }
            }
            )
          }
        <tr className='table__section-start'>
          <AddToDairyButton period='launch' date={date} />
        </tr>
        <tr className='table__separate-bar' />
        <tr className='table__tr'>
          <td className='table__td table__period left'>Cena</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'dinner') {
                return <FoodPeriodRow key={food.dairy_id} food={food} setFoodDairy={setFoodDairy} foodDairy={foodDairy} />
              }
            }
            )
          }
        <tr className='table__section-start'>
          <AddToDairyButton period='dinner' date={date} />
        </tr>
        <tr className='table__separate-bar' />
        <tr className='table__tr'>
          <td className='table__td table__period left'>Otros</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'other') {
                return <FoodPeriodRow key={food.dairy_id} food={food} setFoodDairy={setFoodDairy} foodDairy={foodDairy} />
              }
            }
            )
          }
        <tr className=' table__section-start'>
          <AddToDairyButton period='other' date={date} />
        </tr>
        <tr className='table__separate-bar' />
      </tbody>
    </table>
  )
}

export default UserDashboardTable
