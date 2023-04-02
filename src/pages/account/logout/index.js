import { useRouter } from 'next/router'
import React, { useEffect, useLayoutEffect } from 'react'
import { useAuth } from 'src/hooks/useAuth'

const Logout = props => {
  const { logout } = useAuth()
  const router = useRouter();

  useLayoutEffect(() => {
    logout()
    router.reload();
  }, [])

  return <></>
}

export default Logout
