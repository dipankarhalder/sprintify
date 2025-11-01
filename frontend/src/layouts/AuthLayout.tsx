/** node modules */
import { Outlet, Navigate } from 'react-router-dom'

/** config */
import { paths } from '@/config/paths'

/** components */
import { Logo } from '@/shared/Logo'

export const AuthLayout = () => {
  const authTokenize = localStorage.getItem('authToken')

  if (authTokenize) {
    return <Navigate to={paths.admin} replace />
  }

  return (
    <div>
      <div>
        <div>
          <a href="#">
            <Logo />
          </a>
        </div>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
