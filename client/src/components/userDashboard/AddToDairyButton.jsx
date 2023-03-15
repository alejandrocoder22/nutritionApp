import { Link } from 'react-router-dom'

const AddToDairyButton = ({ date, period }) => {
  return (
    <td className='table__section-add'><Link className='table__add-link' to={`/add-dairy?date=${date}&period=${period}`}>Añadir...</Link></td>
  )
}

export default AddToDairyButton
