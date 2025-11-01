/** node modules */
import { Outlet, Navigate } from 'react-router-dom'

/** config */
import { paths } from '@/config/paths'

export const AdminLayout = () => {
  const authTokenize = localStorage.getItem('authToken')

  if (!authTokenize) {
    return <Navigate to={paths.login} replace />
  }

  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
