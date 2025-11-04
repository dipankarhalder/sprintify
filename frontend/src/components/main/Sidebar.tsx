/** node modules */
// import { useState } from 'react'

/** components */
import { ShortLogo } from '@/components/main/ShortLogo'
// import { Dropdown } from '@/shared/Dropdown'

/** icons */
import {
  Project,
  Erp,
  User,
  Dashboard,
  Folder,
  Employee,
  Vendors,
  Reports,
  Timesheets,
} from '@/icons'

/** images */
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

  const mainProducts = [
    { id: 1, icon: <Project />, name: 'Project Management' },
    { id: 2, icon: <Erp />, name: 'Enterprise Resource' },
    { id: 3, icon: <User />, name: 'Human Resource' },
    { id: 4, icon: <Project />, name: 'Billing Items' },
  ]

  const mainMenu = [
    { id: 1, label: 'Dashboard', icon: <Dashboard /> },
    { id: 3, label: 'Tasks Board', icon: <Folder /> },
    { id: 4, label: 'Employee', icon: <Employee /> },
    { id: 5, label: 'Vendors', icon: <Vendors /> },
    { id: 6, label: 'Reports', icon: <Reports /> },
    { id: 7, label: 'Timesheet', icon: <Timesheets /> },
    { id: 8, label: 'Company Profile', icon: <User /> },
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
            {mainProducts.map(item => (
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
                {item.icon} {item.label}
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
