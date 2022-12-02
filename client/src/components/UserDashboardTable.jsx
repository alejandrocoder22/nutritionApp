import { Link } from 'react-router-dom'

const UserDashboardTable = () => {
  return (
    <table className='table'>
      <thead className='table__thead'>
        <tr className='table__th'>
          <td className='table__td left'>Periodo</td>
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
        <tr className='table__tr'>
          <td className='table__td'>Huevos revueltos</td>
          <td className='table__td'>100</td>
          <td className='table__td'>500</td>
          <td className='table__td'>12</td>
          <td className='table__td'>0</td>
          <td className='table__td'>5</td>
          <td className='table__td'>x</td>
        </tr>
        <tr className='table__section-start'>

          <td className='table__section-add'><Link to='/add-dairy?date="22/10/1994"&period=launch'>Añadir...</Link></td>
        </tr>
        <tr className='table__tr'>
          <td className='table__td table__period left'>Comida</td>
        </tr>
        <tr className='table__tr'>
          <td className='table__td '>Huevos revueltos</td>
          <td className='table__td'>100</td>
          <td className='table__td'>500</td>
          <td className='table__td'>12</td>
          <td className='table__td'>0</td>
          <td className='table__td'>5</td>
          <td className='table__td'>x</td>
        </tr>
        <tr className='table__section-start'>
          <td className='table__section-add'>Añadir...</td>
        </tr>
        <tr className='table__separate-bar' />
        <tr className='table__tr'>
          <td className='table__td table__period left'>Cena</td>
        </tr>
        <tr className='table__tr'>
          <td className='table__td'>Huevos revueltos</td>
          <td className='table__td'>100</td>
          <td className='table__td'>500</td>
          <td className='table__td'>12</td>
          <td className='table__td'>0</td>
          <td className='table__td'>5</td>
          <td className='table__td'>x</td>
        </tr>
        <tr className='table__section-start'>
          <td className='table__section-add'>Añadir...</td>
        </tr>
        <tr className='table__separate-bar' />
        <tr className='table__tr'>
          <td className='table__td table__period left'>Otros</td>
        </tr>
        <tr className='table__tr'>
          <td className='table__td'>Huevos revueltos</td>
          <td className='table__td'>100</td>
          <td className='table__td'>500</td>
          <td className='table__td'>12</td>
          <td className='table__td'>0</td>
          <td className='table__td'>5</td>
          <td className='table__td'>x</td>
        </tr>
        <tr className=' table__section-start'>
          <td className='table__section-add'>Añadir...</td>
        </tr>
        <tr className='table__separate-bar' />
      </tbody>
    </table>
  )
}

export default UserDashboardTable
