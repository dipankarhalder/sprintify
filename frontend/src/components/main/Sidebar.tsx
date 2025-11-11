// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShortLogo } from '@/components/main/ShortLogo'
// import { Dropdown } from '@/shared/Dropdown'

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
  Notifications,
} from '@/icons'

import image1 from '/1.png'
import image2 from '/2.png'
import image3 from '/3.png'
import image4 from '/4.png'
import image5 from '/5.png'
import image6 from '/6.png'
import image7 from '/7.png'
import image8 from '/8.png'
import image9 from '/9.png'
import image10 from '/10.png'

export const Sidebar = () => {
  // const [selectedId, setSelectedId] = useState<string | undefined>()
  // const groups = [
  //   { id: '1', label: 'codename.com' },
  //   { id: '2', label: 'projectpath.com' },
  // ]

  const sideMenu = [
    { id: 1, icon: <Dashboard />, name: 'Dashboard', path: '/' },
    { id: 2, icon: <Notifications />, name: 'Notification', path: '/' },
    { id: 3, icon: <Settings />, name: 'Settings', path: '/' },
  ]

  const mainMenu = [
    {
      id: 1,
      label: 'Main Menu',
      icon: <Dashboard />,
      children: [{ id: 1, label: 'Dashboard', path: '/' }],
    },
    {
      id: 2,
      label: 'Manage Projects',
      icon: <Project />,
      children: [
        { id: 1, label: 'Tasks Board', path: '/' },
        { id: 2, label: 'Teams', path: '/' },
        { id: 3, label: 'Assets', path: '/' },
        { id: 4, label: 'Reports', path: '/' },
        { id: 5, label: 'Schedules', path: '/' },
        { id: 6, label: 'Clients', path: '/' },
        { id: 7, label: 'Invoices', path: '/' },
      ],
    },
    {
      id: 3,
      label: 'Manage Products',
      icon: <Erp />,
      children: [
        { id: 1, label: 'Products', path: '/' },
        { id: 2, label: 'Trackings', path: '/' },
        { id: 3, label: 'Returns', path: '/' },
        { id: 4, label: 'Billings', path: '/' },
        { id: 5, label: 'Vendors', path: '/' },
      ],
    },
    {
      id: 4,
      label: 'Manage Resources',
      icon: <Employee />,
      children: [
        { id: 1, label: 'Resources List', path: '/' },
        { id: 2, label: 'Teams', path: '/' },
        { id: 3, label: 'Assets', path: '/' },
        { id: 4, label: 'Reports', path: '/' },
        { id: 5, label: 'Schedules', path: '/' },
      ],
    },
    {
      id: 5,
      label: 'Manage Customers',
      icon: <Vendors />,
      children: [
        { id: 1, label: 'Contact', path: '/' },
        { id: 2, label: 'Companies', path: '/' },
        { id: 3, label: 'Deals', path: '/' },
        { id: 4, label: 'Analytics', path: '/' },
        { id: 5, label: 'Activities', path: '/' },
      ],
    },
    {
      id: 6,
      label: 'System Options',
      icon: <Reports />,
      children: [
        { id: 1, label: 'Notification', path: '/' },
        { id: 2, label: 'Settings', path: '/' },
        { id: 3, label: 'Subscription Plans', path: '/' },
      ],
    },
    { id: 7, label: 'Company Profile', icon: <User />, path: '/' },
  ]

  const assigneeUser = [
    { id: 1, name: 'Olivia Bennett', img: image1 },
    { id: 2, name: 'Ethan Carter', img: image2 },
    { id: 3, name: 'Sophia Ramirez', img: image3 },
    { id: 4, name: 'Liam Patel', img: image4 },
    { id: 5, name: 'Ava Thompson', img: image5 },
    { id: 6, name: 'Noah Williams', img: image6 },
    { id: 7, name: 'Isabella Nguyen', img: image7 },
    { id: 8, name: 'Mason Clark', img: image8 },
    { id: 9, name: 'Mia Robinson', img: image9 },
    { id: 10, name: 'James Anderson', img: image10 },
  ]

  return (
    <div className="app_sidebar">
      <div className="app_sidebar_column">
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
      <div className="app_sidebar_content">
        {/* <div className="app_select_project">
          <Dropdown
            groups={groups}
            selectedId={selectedId}
            searchOption={false}
            onSelect={item => setSelectedId(item.id)}
          />
        </div> */}
        <div className="app_sidebar_main_menu">
          <ul>
            {mainMenu.map(item => (
              <li key={item.id}>
                <p>
                  {item.icon} {item.label}
                </p>
                <ul>
                  {item.children &&
                    item.children.map(inItems => (
                      <li key={inItems.id}>
                        <Link to="/">{inItems.label}</Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="app_sidebar_assignee">
          <h5>Assignees</h5>
          <ul>
            {assigneeUser.map(user => (
              <li key={user.id}>
                <span>
                  <img src={user.img} alt={user.name} />
                </span>
                <p>{user.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
