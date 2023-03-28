// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'
import fetch from 'cross-fetch'
import { BASE_URL } from 'src/configs'

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
      if (storedToken) {
        setLoading(true)
        fetch(BASE_URL + authConfig.meEndpoint, {
          mode: 'no-cors',
          headers: {
            'Authorization': storedToken,
            'Access-Control-Allow-Origin':'*',
          }
        })
          .then((response) => response.json())
          .then(async response => {
            setLoading(false)
            const user = { ...response.data }
            setUser({
              id: user._id,
              username: user.username,
              email: user.email,
              role: user.role ? user.role : "admin"
            })
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/login')
            }
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback, successCallback) => {
    const customHeaders = {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*',
    }
    fetch(BASE_URL + authConfig.loginEndpoint, { method: "POST", headers: customHeaders, mode: 'no-cors', body: JSON.stringify(params) })
      .then((res) => res.json())
      .then((data) => {
        successCallback()
        params.rememberMe
          ? window.localStorage.setItem(authConfig.storageTokenKeyName, data.token)
          : null
        const returnUrl = router.query.returnUrl
        const user = { ...data.user }
        setUser({
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role ? user.role : "admin"
        })
        params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(data.user)) : null
        const redirectURL = returnUrl && returnUrl !== '/' ? 'dashboards/library' : '/'
        router.replace(redirectURL)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback, successCallback) => {
    const customHeaders = {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*',
    }
    fetch(BASE_URL + authConfig.registerEndpoint, { method: "POST", headers: customHeaders, mode: 'no-cors', body: JSON.stringify(params) })
      .then((res) => res.json())
      .then(data => { 
        if (successCallback) successCallback()
        if (data._id == undefined) {
          if (errorCallback) errorCallback(data)
        } else {
          handleLogin({ email: data.email, password: data.password })
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
