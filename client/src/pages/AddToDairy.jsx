import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { fetchAllFood } from '../services/foodServices'
import PieChartDiary from '../components/PieChartDiary'
import AddToDaityPopup from '../components/AddToDaityPopup'

const AddToDairy = () => {
  const pickFood = (e) => {
    setPopup(true)
    setFoodToAdd(food.find(singleFood => singleFood.food_id == e.target.id))
  }
  const [food, setFood] = useState([])
  const [pickedFood, setPickedFood] = useState([])
  const [foodToAdd, setFoodToAdd] = useState({})
  const [searchFood, setSearchFood] = useState(food)
  const [popup, setPopup] = useState(false)

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
      body: JSON.stringify(pickedFood)
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
          <button className='add-to-dairy__button radius pointer'>Añadir a comida</button>
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
                <td className='add-to-dairy__td'>{foodToAdd?.proteins}</td>
                <td className='add-to-dairy__td'>{foodToAdd?.fats}</td>
                <td className='add-to-dairy__td'>{foodToAdd?.carbs}</td>
              </tbody>
            </table>
            <div className='add-to-dairy__graph-container'>
              <PieChartDiary carbs={foodToAdd?.carbs} proteins={foodToAdd?.proteins} fats={foodToAdd?.fats} />
            </div>
          </div>
        </div>
      </div>
      {popup && <AddToDaityPopup foodToAdd={foodToAdd} setPickedFood={setPickedFood} />}
    </main>
  )
}

export default AddToDairy
