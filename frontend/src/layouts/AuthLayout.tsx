import { Outlet, Navigate } from 'react-router-dom'
import { paths } from '@/config/paths'
import { Logo } from '@/components/main/Logo'

export const AuthLayout = () => {
  const authTokenize = localStorage.getItem('authToken')

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
