import Nav from '../components/ui/Nav'

const Register = () => {
  return (
    <main className='auth'>
      <Nav />
      <form className='auth__form wrapper'>
        <label className='auth__label'>Username</label>
        <input className='auth__input' />
        <label className='auth__label '>Password</label>
        <input className='auth__input' />
        <button className='auth__button pointer '>Register</button>
      </form>
    </main>
  )
}

export default Register
