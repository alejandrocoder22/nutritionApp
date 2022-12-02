import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { fetchAllFood } from '../services/foodServices'
import PieChartDiary from '../components/PieChartDiary'
import { useSearchParams } from 'react-router-dom'

const AddToDairy = () => {
  const pickFood = (e) => {
    setPickedFood(food.filter(singleFood => singleFood.food_id == e.target.id))
  }
  const [food, setFood] = useState([])
  const [pickedFood, setPickedFood] = useState({})
  const [searchFood, setSearchFood] = useState(food)

  const [getParams, setGetParams] = useSearchParams()

  useEffect(() => {
    fetchAllFood()
      .then(response => response.json())
      .then(foodList => setFood(foodList.data))
  }, [])

  const onAddFood = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/api/food/dairy/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grams: 23,
        eatTime: getParams.get('period'),
        private_food_id: 1,
        createdAt: getParams.get('date'),
        foodId: pickedFood[0].food_id
      })
    })
  }

  const onSearchFood = (e) => {
    setSearchFood(food.filter(singleFood => singleFood.food_name.includes(e.target.value)))
  }
  return (
    <main className='add-to-dairy'>
      <Nav />
      <div className='add-to-dairy__container wrapper'>
        <form onSubmit={onAddFood} className='add-to-dairy__form'>
          <input onChange={onSearchFood} className='add-to-dairy__input radius ' placeholder='Buscar...' />
          <button className='add-to-dairy__button radius pointer' type='submit'>Añadir a comida</button>
        </form>
        <div className='add-to-dairy__two-columns'>
          <div className='add-to-dairy__column-left'>
            <ul className='add-to-dairy__ul'>
              {
                searchFood.length > 0
                  ? searchFood?.map(singleFood => <li className='add-to-dairy__li pointer' id={singleFood.food_id} onClick={pickFood} key={singleFood.food_id}>{singleFood.food_name}</li>)
                  : food?.map(singleFood => <li className='add-to-dairy__li pointer' id={singleFood.food_id} onClick={pickFood} key={singleFood.food_id}>{singleFood.food_name}</li>)

            }

            </ul>
          </div>
          <div className='add-to-dairy__column-right'>
            <table className='add-to-dairy__table'>
              <thead className='add-to-dairy__thead'>
                <th className='add-to-dairy__th'>Proteínas</th>
                <th className='add-to-dairy__th'>Grasas</th>
                <th className='add-to-dairy__th'>Hidratos</th>
              </thead>
              <tbody>
                <td className='add-to-dairy__td'>{pickedFood[0]?.proteins}</td>
                <td className='add-to-dairy__td'>{pickedFood[0]?.fats}</td>
                <td className='add-to-dairy__td'>{pickedFood[0]?.carbs}</td>
              </tbody>
            </table>
            <div className='add-to-dairy__graph-container'>
              <PieChartDiary carbs={pickedFood[0]?.carbs} proteins={pickedFood[0]?.proteins} fats={pickedFood[0]?.fats} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddToDairy