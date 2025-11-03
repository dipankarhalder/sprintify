/** node modules */
import { useState } from 'react'

/** components */
import { ShortLogo } from '@/components/main/ShortLogo'
import { Dropdown } from '@/shared/Dropdown'

/** icons */
import { Project, Erp, User } from '@/icons'

export const Sidebar = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>()
  const groups = [
    { id: '1', label: 'codename.com' },
    { id: '2', label: 'projectpath.com' },
  ]

  const mainMenu = [
    { id: 1, label: 'Dashboard' },
    { id: 2, label: 'Projects' },
    { id: 3, label: 'Items' },
    { id: 4, label: 'Employee' },
    { id: 5, label: 'Vendors' },
    { id: 6, label: 'Reports' },
    { id: 7, label: 'Timesheet' },
    { id: 8, label: 'Company Profile' },
  ]

  return (
    <div className="app_sidebar">
      <div className="app_sidebar_column">
        <div className="app_sidebar_logo">
          <ShortLogo />
        </div>
        <div className="app_product_links">
          <ul>
            <li className="app_active_link">
              <Project />
              <span>
                <p>Project Management</p>
              </span>
            </li>
            <li>
              <Erp />
              <span>
                <p>Enterprise Resource</p>
              </span>
            </li>
            <li>
              <User />
              <span>
                <p>Human Resource</p>
              </span>
            </li>
            <li>
              <Project />
              <span>
                <p>Billing Items</p>
              </span>
            </li>
          </ul>
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
        <ul>
          {mainMenu.map(item => (
            <li>{item.label}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
