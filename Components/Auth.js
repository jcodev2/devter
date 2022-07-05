import Image from 'next/image'
import signInWithGithub from '../firebase/client'
import GitHub from '../icons/Github'
import Button from './Button'

function Auth() {
  const handleClick = () => {
    signInWithGithub()
  }

  return (
    <div className='logo'>
      <Image src='/logo.png' alt='Devter' width={80} height={80} />
      <h1>Devter</h1>
      <p>
        Talk about development <br></br>with developers 👨🏻‍💻👩🏻‍💻
      </p>

      <Button onClick={handleClick}>
        <GitHub fill='#fff' width={24} height={24} />
        Log in with GitHub
      </Button>
    </div>
  )
}

export default Auth
