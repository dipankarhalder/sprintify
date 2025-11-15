/** node modules */
import { Outlet, Navigate } from 'react-router-dom'

/** configs */
import { paths } from '@/config/paths'

/** stores */
import { useAuthStore } from '@/store/authStore'

/** components */
import { Sidebar } from '@/components/main/Sidebar'

export const AdminLayout = () => {
  /** localstorage */
  const authTokenize = localStorage.getItem('authToken')

  /** store methods */
  const { isUsername } = useAuthStore()

  /** check the token and username available or not */
  if (!authTokenize || !isUsername) {
    return <Navigate to={paths.login} replace />
  }

  return (
    <div className="app_admin_wrapper">
      <Sidebar />
      <div className="app_admin_cover_wrapper">
        <Outlet />
      </div>
    </div>
  )
}
