import { useEffect, useState } from 'react'
import supabase from '../supabase/client'

const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    checkUser()
    window.addEventListener('hashchange', () => {
      checkUser()
    })
  }, [])

  const checkUser = () => {
    const user = supabase.auth.user()
    setUser(user)
  }

  const singInWithGithub = async () => {
    await supabase.auth.signIn({ provider: 'github' })
  }

  const logout = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return { user, singInWithGithub, logout }
}

export default useUser
