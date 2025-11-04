/** node modules */
import { Link } from 'react-router-dom'

/** icon */
import { Alink } from '@/icons'

export const AuthFooter = () => {
  return (
    <div className="app_policy_info">
      <p>
        Login one time for access PMS, CRM, ERP and&nbsp;
        <Link to="/">
          more <Alink />
        </Link>
      </p>
      <ul>
        <li>
          <Link to="/">
            Privacy Policy <Alink />
          </Link>
        </li>
        <li>
          <Link to="/">
            Terms of Services <Alink />
          </Link>
        </li>
      </ul>
      <p>This site is protected by reCAPTCHA</p>
    </div>
  )
}
