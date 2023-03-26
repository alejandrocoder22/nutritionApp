import lineSvg from '../assets/images/line-home.svg'
import { Link } from 'react-router-dom'
import Nav from '../components/ui/Nav'
export const Home = () => {
  return (
    <main className='home'>
      <Nav />
      <div className='home__intro-text wrapper'>
        <h1 className='intro-text__h1'>No <span className='intro-text__red-bg'> Pierdas peso </span><br /> Gana hábitos</h1>
        <img className='intro-text__line' src={lineSvg} />
        <Link to='/dashboard'>
          <button className='home__button radius pointer'>Comienza aquí</button>
        </Link>
      </div>
    </main>
  )
}
