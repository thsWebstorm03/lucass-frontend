import React, { useEffect, useLayoutEffect } from 'react'
import { useAuth } from 'src/hooks/useAuth'

const Logout = props => {
  const { logout } = useAuth()
  useLayoutEffect(() => {
    logout()
  }, [])

  return <></>
}

export default Logout
