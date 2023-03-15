import { useEffect, useState, lazy, Suspense } from 'react'
import { fetchAllFood } from '../services/foodServices'
import { pickFood } from '../utils/general'
import Nav from '../components/ui/Nav'
import PieChartDiary from '../components/PieChartDiary'
import { GrReturn } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
const AddDairyPopup = lazy(() => import('../components/addToDairy/AddDairyPopup'))

export const AddToDairy = () => {
  const [food, setFood] = useState([])
  const [pickedFood, setPickedFood] = useState({})
  const [foodToAdd, setFoodToAdd] = useState({})
  const [searchFood, setSearchFood] = useState(food)
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    fetchAllFood()
      .then(response => response.json())
      .then(foodList => setFood(foodList.data))
  }, [])

  const navigate = useNavigate()
  const onSearchFood = (e) => {
    setSearchFood(food.filter(singleFood => singleFood.food_name.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <main className='add-to-dairy'>
      <Nav />
      <div className='add-to-dairy__container wrapper'>

        <button className='add-to-dairy__back-button' onClick={() => navigate('/dashboard')}><GrReturn className='add-to-dairy__back-icon' /></button>
        <form className='add-to-dairy__form'>
          <input onChange={onSearchFood} className='add-to-dairy__input radius ' placeholder='Buscar...' />
        </form>
        <div className='add-to-dairy__two-columns'>
          <div className='add-to-dairy__column-left'>
            <ul className='add-to-dairy__ul'>
              {
                searchFood.length > 0
                  ? searchFood?.map(singleFood => <li className='add-to-dairy__li pointer capitalize' id={singleFood.food_id} onClick={(e) => pickFood(e, setPopup, setFoodToAdd, food)} key={singleFood.food_id}>{singleFood.food_name}</li>)
                  : food?.map(singleFood => <li className='add-to-dairy__li pointer capitalize' id={singleFood.food_id} onClick={(e) => pickFood(e, setPopup, setFoodToAdd, food)} key={singleFood.food_id}>{singleFood.food_name}</li>)
            }
            </ul>
          </div>
          <div className='add-to-dairy__column-right'>
            <table className='add-to-dairy__table'>
              <thead className='add-to-dairy__thead'>
                <tr>
                  <th className='add-to-dairy__th'>Proteínas</th>
                  <th className='add-to-dairy__th'>Grasas</th>
                  <th className='add-to-dairy__th'>Hidratos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='add-to-dairy__td'>{foodToAdd?.proteins}</td>
                  <td className='add-to-dairy__td'>{foodToAdd?.fats}</td>
                  <td className='add-to-dairy__td'>{foodToAdd?.carbs}</td>
                </tr>
              </tbody>
            </table>
            <div className='add-to-dairy__graph-container'>
              <PieChartDiary carbs={foodToAdd?.carbs} proteins={foodToAdd?.proteins} fats={foodToAdd?.fats} />
            </div>
          </div>
        </div>
      </div>
      {popup &&
        <Suspense>
          <AddDairyPopup pickedFood={pickedFood} setPickedFood={setPickedFood} setPopup={setPopup} foodToAdd={foodToAdd} />
        </Suspense>}
    </main>
  )
}
