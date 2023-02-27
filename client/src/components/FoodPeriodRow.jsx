
const FoodPeriodRow = ({ food }) => {
  return (
    <tr className='table__tr' onAnimationEnd={() => removeFoodInFrontend(food.dairy_id)}>
      <td className='table__td left'>{food.food_name}</td>
      <td className='table__td'>{food.grams}</td>
      <td className='table__td'>{Number(food.kcal) * Number(food.grams / 100)}</td>
      <td className='table__td'>{food.carbs}</td>
      <td className='table__td'>{food.fats}</td>
      <td className='table__td'>{food.proteins}</td>
      <td className='table__td' onClick={(e) => deleteFoodDairy(e, food.dairy_id)}>x</td>
    </tr>
  )
}

export default FoodPeriodRow
