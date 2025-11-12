import { Link, useLocation } from 'react-router-dom'
import { ShortLogo } from '@/components/main/ShortLogo'
import { sideMenu, sideBottomMenu, mainMenu } from '@/config/infoDatas'
import { avatar } from '@/config/image'
import { Logout } from '@/icons'

export const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="app_sidebar">
      <div className="app_sidebar_colum_cover">
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
                <li className="app_logout_btn">
                  <Logout />
                  <span>
                    <p>Logout</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="app_sidebar_content">
          <div className="app_select_project">
            <span></span>
            <div className="app_selected_project">
              <p>Selected Project:</p>
              <h5>Project Path</h5>
            </div>
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
                            location.pathname === inItems.path
                              ? 'activeLink'
                              : ''
                          }
                        >
                          <Link to="/">
                            {inItems.icon} {inItems.label}
                            {inItems.count && <span></span>}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="app_upgrade_section">
            <span>
              <img src={avatar} alt="dipankar" />
            </span>
            <div className="app_user_info">
              <h2>Dipankar Halder</h2>
              <p>dipankar@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
