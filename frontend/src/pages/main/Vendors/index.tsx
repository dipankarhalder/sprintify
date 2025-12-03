/** node modules */
import { Outlet } from 'react-router-dom'

/** icons */
import { Dashboard, Vendors, Search, Diamond } from '@/icons'

/** components */
import { paths } from '@/config/paths'
import { Breadcrumb } from '@/shared/Breadcrumb'
import { useAuthStore } from '@/store/authStore'

export const VendorsPage = () => {
  const { isUsername } = useAuthStore()

  return (
    <div className="app_page_inside_cover">
      <div className="app_inside_top_area">
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
        <div className="app_search_top_area">
          <div className="app_header_search">
            <Search />
            <p>Search...</p>
          </div>
        </div>
        <div className="app_notify_top_area">
          <div className="app_upgrade_btn">
            <Diamond />
            <p>Upgrade</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
