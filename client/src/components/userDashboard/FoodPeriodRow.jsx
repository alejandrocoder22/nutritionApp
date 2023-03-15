import { MdDeleteOutline } from 'react-icons/md'
const FoodPeriodRow = ({ food, setFoodDairy, foodDairy }) => {
  const addTransitionOnClick = (e) => {
    e.target.parentNode.classList.add('remove-animation')
  }

  const deleteFoodDairy = (e, foodId) => {
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

  const calculateMacrosOnGrams = (macro, grams) => {
    return Math.round(macro * (grams / 100))
  }

  const { kcal, grams, carbs, fats, proteins } = food

  return (
    <tr className='table__tr' onAnimationEnd={() => removeFoodInFrontend(food.dairy_id)}>
      <td className='table__td left capitalize'>{food.food_name}</td>
      <td className='table__td'>{food.grams}</td>
      <td className='table__td'>{calculateMacrosOnGrams(kcal, grams)}</td>
      <td className='table__td'>{calculateMacrosOnGrams(carbs, grams)}</td>
      <td className='table__td'>{calculateMacrosOnGrams(fats, grams)}</td>
      <td className='table__td'>{calculateMacrosOnGrams(proteins, grams)}</td>
      <td className='table__td table__td-delete' onClick={(e) => deleteFoodDairy(e, food.dairy_id)}> <MdDeleteOutline className='table__delete-icon' /></td>
    </tr>
  )
}

export default FoodPeriodRow
