/** node modules */
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

/** icons */
import { Logout, Close, Diamond } from '@/icons'

/** configs */
import { sideMenu, sideBottomMenu, mainMenu } from '@/config/infoDatas'
import { avatar } from '@/config/image'

/** components */
import { ShortLogo } from '@/components/main/ShortLogo'

export const Sidebar = () => {
  /** states */
  const [isClosed, setIsClosed] = useState(true)

  /** hooks */
  const location = useLocation()

  /** methods */
  const handleClose = () => setIsClosed(false)

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
          <div className="app_project_selection_side">
            <ul>
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
            </ul>
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
        {isClosed && (
          <div className="app_side_subscription">
            <div className="app_sub_heading">
              <Diamond />
              <p>Premium plans</p>
              <span className="app_sub_close" onClick={() => handleClose()}>
                <Close />
              </span>
            </div>
            <div className="app_sub_bodytext">
              <p>Unlock exclusive features and enjoy an enhanced experience.</p>
            </div>
            <div className="app_sub_footer_btn">
              <span>Subscribe today</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
