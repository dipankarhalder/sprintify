import { Outlet } from 'react-router-dom'
import { Dashboard, Vendors } from '@/icons'
import { paths } from '@/config/paths'
import { Breadcrumb } from '@/shared/Breadcrumb'
import { useAuthStore } from '@/store/authStore'

export const VendorsPage = () => {
  const { isUsername } = useAuthStore()

  return (
    <div className="app_page_inside_cover">
      <Breadcrumb
        items={[
          {
            label: 'Dashboard',
            icon: <Dashboard />,
            to: `/${isUsername}`,
          },
          {
            label: 'Vendor informations',
            icon: <Vendors />,
            to: `/${isUsername}/${paths.vendors}`,
          },
        ]}
      />
      <Outlet />
    </div>
  )
}
