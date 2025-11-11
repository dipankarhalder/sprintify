import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShortLogo } from '@/components/main/ShortLogo'
import { Dropdown } from '@/shared/Dropdown'

/** icons */
import {
  Project,
  Erp,
  User,
  Dashboard,
  Employee,
  Vendors,
  Reports,
  Settings,
  Search,
  Notifications,
} from '@/icons'

export const Sidebar = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>()
  const groups = [
    { id: '1', label: 'codename.com' },
    { id: '2', label: 'projectpath.com' },
  ]

  const sideMenu = [
    { id: 1, icon: <Dashboard />, name: 'Dashboard', path: '/' },
    { id: 2, icon: <Search />, name: 'Search', path: '/' },
    { id: 3, icon: <Notifications />, name: 'Notification', path: '/' },
  ]

  const sideBottomMenu = [
    { id: 1, icon: <Settings />, name: 'Settings', path: '/' },
    { id: 2, icon: <User />, name: 'Profile', path: '/' },
  ]

  const mainMenu = [
    {
      id: 1,
      label: 'Main Menu',
      children: [{ id: 1, icon: <Dashboard />, label: 'Dashboard', path: '/' }],
    },
    {
      id: 2,
      label: 'Manage Projects',
      children: [
        { id: 1, icon: <Project />, label: 'Tasks', path: '/' },
        { id: 3, icon: <Project />, label: 'Assets', path: '/' },
        { id: 4, icon: <Project />, label: 'Reports', path: '/' },
        { id: 5, icon: <Project />, label: 'Schedules', path: '/' },
        { id: 2, icon: <Project />, label: 'Teams', path: '/' },
        { id: 6, icon: <Project />, label: 'Clients', path: '/' },
        { id: 7, icon: <Project />, label: 'Invoices', path: '/' },
      ],
    },
    {
      id: 3,
      label: 'Manage Products',
      children: [
        { id: 1, icon: <Erp />, label: 'Products', path: '/' },
        { id: 2, icon: <Erp />, label: 'Trackings', path: '/' },
        { id: 3, icon: <Erp />, label: 'Returns', path: '/' },
        { id: 4, icon: <Erp />, label: 'Billings', path: '/' },
        { id: 5, icon: <Erp />, label: 'Vendors', path: '/' },
      ],
    },
    {
      id: 4,
      label: 'Manage Resources',
      children: [
        { id: 1, icon: <Employee />, label: 'Resources List', path: '/' },
        { id: 2, icon: <Employee />, label: 'Teams', path: '/' },
        { id: 3, icon: <Employee />, label: 'Assets', path: '/' },
        { id: 4, icon: <Employee />, label: 'Reports', path: '/' },
        { id: 5, icon: <Employee />, label: 'Schedules', path: '/' },
      ],
    },
    {
      id: 5,
      label: 'Manage Customers',
      children: [
        { id: 1, icon: <Vendors />, label: 'Contact', path: '/' },
        { id: 2, icon: <Vendors />, label: 'Companies', path: '/' },
        { id: 3, icon: <Vendors />, label: 'Deals', path: '/' },
        { id: 4, icon: <Vendors />, label: 'Analytics', path: '/' },
        { id: 5, icon: <Vendors />, label: 'Activities', path: '/' },
      ],
    },
    {
      id: 6,
      label: 'System Options',
      children: [
        { id: 1, icon: <Reports />, label: 'Notification', path: '/' },
        { id: 2, icon: <Reports />, label: 'Settings', path: '/' },
        { id: 3, icon: <Reports />, label: 'Subscription Plans', path: '/' },
      ],
    },
    { id: 7, label: 'Company Profile', icon: <User />, path: '/' },
  ]

  return (
    <div className="app_sidebar">
      <div className="app_sidebar_column">
        <div className="app_sidebar_col">
          <div className="app_sidebar_logo">
            <ShortLogo />
          </div>
          <div className="app_product_links">
            <ul>
              {sideMenu.map(item => (
                <li
                  key={item.id}
                  className={item.id === 1 ? 'app_active_link' : ''}
                >
                  {item.icon}
                  <span>
                    <p> {item.name}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="app_sidebar_col_bottom">
          <div className="app_product_links">
            <ul>
              {sideBottomMenu.map(item => (
                <li
                  key={item.id}
                  className={item.id === 1 ? 'app_active_link' : ''}
                >
                  {item.icon}
                  <span>
                    <p> {item.name}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="app_sidebar_content">
        <div className="app_select_project">
          <Dropdown
            groups={groups}
            selectedId={selectedId}
            searchOption={false}
            onSelect={item => setSelectedId(item.id)}
          />
        </div>
        <div className="app_sidebar_main_menu">
          <ul>
            {mainMenu.map(item => (
              <li key={item.id}>
                <p>{item.label}</p>
                <ul>
                  {item.children &&
                    item.children.map(inItems => (
                      <li key={inItems.id}>
                        <Link to="/">
                          {inItems.icon} {inItems.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
