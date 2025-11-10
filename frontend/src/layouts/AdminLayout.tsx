import { Outlet, Navigate } from 'react-router-dom'
import { paths } from '@/config/paths'
import { Sidebar } from '@/components/main/Sidebar'

export const AdminLayout = () => {
  const authTokenize = localStorage.getItem('authToken')

  if (!authTokenize) {
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
