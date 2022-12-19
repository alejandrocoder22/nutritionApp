import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
const AddToDaityPopup = ({ pickedFood, foodToAdd, setPickedFood }) => {
  const [getParams] = useSearchParams()
  const [quantity, setQuantity] = useState(false)

  const addToFoodList = (e) => {
    e.preventDefault()
    setPickedFood(previousFood => [...previousFood, { ...foodToAdd, quantity, eat_at: getParams.get('period'), date_added: getParams.get('date') }])
  }

  return (
    <form onSubmit={addToFoodList} className='add-to-dairy__form'>
      <label>Quantity</label>
      <input onChange={(e) => setQuantity(e.target.value)} type='text' />
    </form>
  )
}

export default AddToDaityPopup
