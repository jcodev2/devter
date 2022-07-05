import Image from 'next/image'
import useUser from '../hooks/useUser'
import Button from './Button'

function Auth() {
  const { user, singInWithGithub, logout } = useUser()

  console.log('user', user)

  return (
    <div className='logo'>
      <Image src='/logo.png' alt='Devter' width={80} height={80} />
      <h1>Devter</h1>
      <p>
        Talk about development <br></br>with developers 👨🏻‍💻👩🏻‍💻
      </p>

      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Button onClick={singInWithGithub}>Sign in with Github</Button>
      )}

      {user && (
        <div>
          <p>
            <strong>{user.name}</strong>
          </p>
          <p>
            <strong>{user.email}</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default Auth
