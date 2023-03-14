import { MdDeleteOutline } from 'react-icons/md'
const FoodPeriodRow = ({ food, setFoodDairy, foodDairy }) => {
  const addTransitionOnClick = (e) => {
    e.target.parentNode.classList.add('remove-animation')
  }

  const deleteFoodDairy = (e, foodId) => {
    console.log(e.target.parentNode)
    return fetch(`http://localhost:3001/api/food/dairy/${foodId}`, {
      method: 'DELETE',
      headers: {
        token: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      if (response.status === 200) {
        addTransitionOnClick(e)
      }
    })
  }

  const removeFoodInFrontend = (foodId) => {
    return setFoodDairy(foodDairy.filter(singleFood => singleFood.dairy_id !== foodId))
  }

  return (
    <tr className='table__tr' onAnimationEnd={() => removeFoodInFrontend(food.dairy_id)}>
      <td className='table__td left'>{food.food_name}</td>
      <td className='table__td'>{food.grams}</td>
      <td className='table__td'>{Number(food.kcal) * Number(food.grams / 100)}</td>
      <td className='table__td'>{food.carbs}</td>
      <td className='table__td'>{food.fats}</td>
      <td className='table__td'>{food.proteins}</td>

      <MdDeleteOutline className='table__delete-icon' onClick={(e) => deleteFoodDairy(e, food.dairy_id)} />
    </tr>
  )
}

export default FoodPeriodRow
