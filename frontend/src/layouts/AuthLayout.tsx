/** node modules */
import { Link } from 'react-router-dom'
import { Outlet, Navigate } from 'react-router-dom'

/** config */
import { paths } from '@/config/paths'

/** components */
import { Logo } from '@/components/main/Logo'

export const AuthLayout = () => {
  const authTokenize = localStorage.getItem('authToken')

  if (authTokenize) {
    return <Navigate to={paths.admin} replace />
  }

  return (
    <div className="app_auth_wrapper">
      <div className="app_auth_wrapper_sidebar">
        <div className="app_auth_logo">
          <Link to={paths.login}>
            <Logo />
          </Link>
        </div>
        <div className="app_auth_form_cover">
          <div className="app_auth_form_inside">
            <Outlet />
          </div>
        </div>
        <div className="app_background_content"></div>
      </div>
      <div className="app_auth_wrapper_background"></div>
    </div>
  )
}
