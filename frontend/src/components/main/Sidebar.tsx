import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShortLogo } from '@/components/main/ShortLogo'
import { Dropdown } from '@/shared/Dropdown'
import { groups, sideMenu, sideBottomMenu, mainMenu } from '@/config/infoDatas'

export const Sidebar = () => {
  const location = useLocation()
  const [selectedId, setSelectedId] = useState<string | undefined>()

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
                <li key={item.id}>
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
                      <li
                        key={inItems.id}
                        className={
                          location.pathname === inItems.path ? 'activeLink' : ''
                        }
                      >
                        <Link to="/">
                          {inItems.icon} {inItems.label}
                          {inItems.count && <span>{inItems.count}</span>}
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
