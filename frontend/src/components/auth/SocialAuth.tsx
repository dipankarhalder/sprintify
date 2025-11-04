/** icon */
import { Google, Microsoft, Apple } from '@/icons'

export const SocialAuth = () => {
  return (
    <>
      <div className="app_or_text">
        <p>Or continue with:</p>
      </div>
      <div className="app_social_login_register">
        <ul>
          <li>
            <Google />
            <p>Google</p>
          </li>
          <li>
            <Microsoft />
            <p>Microsoft</p>
          </li>
          <li>
            <Apple />
            <p>Apple</p>
          </li>
        </ul>
      </div>
    </>
  )
}
