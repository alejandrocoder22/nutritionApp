import { Link } from 'react-router-dom'

const UserDashboardTable = ({ date, foodDairy, setFoodDairy }) => {
  const addTransitionOnClick = (e) => {
    e.target.parentNode.classList.add('testing')
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
    return setFoodDairy(foodDairy.filter(food => food.id === foodId))
  }

  return (
    <table className='table'>
      <thead className='table__thead'>
        <tr className='table__th'>
          <td className='table__td left' />
          <td className='table__td'>Cantidad</td>
          <td className='table__td'>Kcal</td>
          <td className='table__td'>Carbohidratos (g)</td>
          <td className='table__td'>Grasas (g)</td>
          <td className='table__td'>Proteínas (g)</td>
          <td className='table__td' />
        </tr>
      </thead>
      <tbody className='table__tbody' tbody>
        <tr className='table__tr'>
          <td className='table__td  table__period left'>Desayuno</td>
        </tr>
        {
            foodDairy?.map(food => {
              if (food.eat_time === 'breakfast') {
                return (
                  <tr className='table__tr' key={food.dairy_id} onAnimationEnd={() => removeFoodInFrontend(food.dairy_id)}>
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
                return (
                  <tr className='table__tr' key={food.dairy_id}>
                    <td className='table__td left'>{food.food_name}</td>
                    <td className='table__td'>{food.grams}</td>
                    <td className='table__td'>kcal</td>
                    <td className='table__td'>{food.carbs}</td>
                    <td className='table__td'>{food.fats}</td>
                    <td className='table__td'>{food.proteins}</td>
                    <td className='table__td'>x</td>
                  </tr>
                )
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
                return (
                  <tr className='table__tr' key={food.dairy_id}>
                    <td className='table__td left'>{food.food_name}</td>
                    <td className='table__td'>{food.grams}</td>
                    <td className='table__td'>kcal</td>
                    <td className='table__td'>{food.carbs}</td>
                    <td className='table__td'>{food.fats}</td>
                    <td className='table__td'>{food.proteins}</td>
                    <td className='table__td'>x</td>
                  </tr>
                )
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
                return (
                  <tr className='table__tr left' key={food.dairy_id}>
                    <td className='table__td left'>{food.food_name}</td>
                    <td className='table__td'>{food.grams}</td>
                    <td className='table__td'>kcal</td>
                    <td className='table__td'>{food.carbs}</td>
                    <td className='table__td'>{food.fats}</td>
                    <td className='table__td'>{food.proteins}</td>
                    <td className='table__td'>x</td>
                  </tr>
                )
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
