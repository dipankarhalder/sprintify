/** node modules */
import { Outlet, Navigate } from 'react-router-dom'

/** configs */
import { paths } from '@/config/paths'

/** stores */
import { useAuthStore } from '@/store/authStore'

/** components */
import { Sidebar } from '@/components/main/Sidebar'

export const AdminLayout = () => {
  /** hooks */
  const { isAuthenticated, isUsername } = useAuthStore()

  /** check the token and username available or not */
  if (!isAuthenticated || !isUsername) {
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
