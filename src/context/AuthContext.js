// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      console.log(storedToken)
      if (storedToken) {
      //   setLoading(true)
      //   await axios
      //     .get(process.env.NEXT_PUBLIC_JWT_BASE_URL + authConfig.meEndpoint, {
      //       headers: {
      //         Authorization: storedToken
      //       }
      //     })
      //     .then(async response => {
      //       setLoading(false)
      //       setUser({ ...response.data })
            
      //     })
      //     .catch(() => {
      //       localStorage.removeItem('userData')
      //       localStorage.removeItem('refreshToken')
      //       localStorage.removeItem('accessToken')
      //       setUser(null)
      //       setLoading(false)
      //       if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
      //         router.replace('/login')
      //       }
      //     })
      setLoading(false)
      setUser({
        id: 1,
        role: 'admin',
        password: 'admin',
        fullName: 'John Doe',
        username: 'johndoe',
        email: 'admin@vuexy.com'
      })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback, successCallback) => {
    // axios
    //   .post(process.env.NEXT_PUBLIC_JWT_BASE_URL + authConfig.loginEndpoint, params)
    //   .then(async response => {
    //     successCallback ()
    //     params.rememberMe
    //       ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.token)
    //       : null
    //     const returnUrl = router.query.returnUrl;console.log (returnUrl, "LLKKK")
    //     setUser({ ...response.data.user })
    //     params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.user)) : null
    //     const redirectURL = returnUrl && returnUrl !== '/' ? 'dashboards/library' : '/'
    //     router.replace(redirectURL)
    //   })
    //   .catch(err => {
    //     if (errorCallback) errorCallback(err)
    //   })
    localStorage.setItem('accessToken', 'ppp');
    setUser({
      id: 1,
      role: 'admin',
      password: 'admin',
      fullName: 'John Doe',
      username: 'johndoe',
      email: 'admin@vuexy.com'
    })
    const returnUrl = router.query.returnUrl;
    const redirectURL = returnUrl && returnUrl !== '/' ? 'dashboards/library' : '/'
        router.replace(redirectURL)
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback, successCallback) => {console.log (params)
    axios.post(process.env.NEXT_PUBLIC_JWT_BASE_URL + authConfig.registerEndpoint, params)
      .then(res => {
        if(successCallback) successCallback () 
        const user = res.data
        if (user.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          console.log ("success register")
          handleLogin({ email: user.email, password: user.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
