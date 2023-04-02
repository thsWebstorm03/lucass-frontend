// ** React Imports
import {useEffect} from 'react'

// ** Next Import
import {useRouter} from 'next/router'

// ** Hooks Import
import {useAuth} from 'src/hooks/useAuth'

const AuthGuard = props => {
   const {children, fallback} = props
   const auth = useAuth()
   const router = useRouter()

   useEffect(() => {
      if (!router.isReady) {
         return
      }
      if (auth.user === null && !window.localStorage.getItem('userData')) {
         if (router.asPath !== '/' || router.asPath !== '/login') {
            router.replace({
               pathname: '/login',
               query: {
                  returnUrl: router.pathname
               }
            })
         } else {
            router.replace('/login')
         }
      } else {
         if (router.pathname.indexOf('login') != -1) {
            router.replace({pathname: '/dashboards/library'})
         } else {
            router.replace({pathname: router.pathname,query : router.query})
         }
      }
   }, [router.route])

   if (auth.loading) {
      return fallback
   }

   return <> {children} </>
}

export default AuthGuard