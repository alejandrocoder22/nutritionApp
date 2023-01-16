import Nav from '../components/Nav'
import lineSvg from '../images/line-home.svg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <main className='home'>
      <Nav />
      <div className='home__intro-text wrapper'>
        <h1 className='intro-text__h1'>Don't <span className='intro-text__red-bg'> lose weight </span><br /> Gain habits</h1>
        <img className='intro-text__line' src={lineSvg} />
        <Link to='/dashboard'>
          <button className='home__button radius pointer'>Start Here</button>
        </Link>
      </div>
    </main>
  )
}

export default Home
