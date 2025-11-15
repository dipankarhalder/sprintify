/** node modules */
import { Outlet, Navigate } from 'react-router-dom'

/** configs */
import { paths } from '@/config/paths'

/** components */
import { Logo } from '@/components/main/Logo'

export const AuthLayout = () => {
  /** localstorage */
  const authTokenize = localStorage.getItem('authToken')

  /** check the token available or not */
  if (authTokenize) {
    return <Navigate to={paths.admin} replace />
  }

  return (
    <div className="app_auth_wrapper">
      <div className="app_auth_wrapper_sidebar">
        <div className="app_auth_form_cover">
          <div className="app_auth_form_inside">
            <div className="app_auth_logo">
              <Logo />
            </div>
            <Outlet />
          </div>
        </div>
        <div className="app_background_content"></div>
      </div>
    </div>
  )
}
