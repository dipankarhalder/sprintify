/** node modules */
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '@tanstack/react-form'

/** config */
import { paths } from '@/config/paths'

/** type */
import type { AnyFieldApi } from '@tanstack/react-form'

/** components */
import { AuthFooter } from '@/components/auth/AuthFooter'
import { SocialAuth } from '@/components/auth/SocialAuth'
import { ToastContext } from '@/shared/Toast/ToastContext'

/** fields error */
const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  const { isTouched, isValid, isValidating, errors } = field.state.meta
  return (
    <>
      {isTouched && !isValid && <em>{errors.join(', ')}</em>}
      {isValidating && 'Validating...'}
    </>
  )
}

/** user default info */
const defaultLoginUser: {
  email: string
  password: string
} = {
  email: '',
  password: '',
}

export const SigninPage = () => {
  const navigate = useNavigate()
  const [isVerified, setIsVerified] = useState(false)
  const toast = useContext(ToastContext)
  if (!toast) {
    throw new Error('SigninPage must be used within a ToastProvider')
  }
  const { showToast } = toast

  const form = useForm({
    defaultValues: defaultLoginUser,
    onSubmit: async ({ value }) => {
      const { email, password } = value

      // STEP 1: Handle first submission (email check)
      if (!isVerified) {
        if (email === 'dipankar@gmail.com') {
          // valid email — show password field
          localStorage.removeItem('userEmail')
          setIsVerified(true)
          return
        } else {
          // any other email — redirect to register page
          localStorage.setItem('userEmail', email)
          navigate(paths.register)
          return
        }
      }

      // STEP 2: Handle actual login when verified
      if (isVerified) {
        if (!password) {
          showToast({
            type: 'error',
            title: 'Password Required',
            description: 'Please enter your password.',
          })
          return
        }

        localStorage.removeItem('userEmail')
        localStorage.setItem('authToken', 'authenticated')
        showToast({
          type: 'success',
          title: 'Successfully signed-in',
          description: JSON.stringify(value),
        })
        navigate(paths.admin)
      }
    },
  })

  return (
    <div className="app_auth_inside_cover">
      <h1>Welcome Back!</h1>
      <p>Log in to continue</p>
      <div className="app_auth_form">
        <form
          onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <div className="app_form_input">
            <form.Field
              name="email"
              validators={{
                onSubmit: ({ value }) => {
                  return !value ? 'Please enter a valid email address' : null
                },
              }}
              children={field => {
                return (
                  <>
                    <label htmlFor={field.name}>
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                      autoComplete="email"
                      disabled={isVerified}
                    />
                    <FieldInfo field={field} />
                  </>
                )
              }}
            />
          </div>
          {isVerified && (
            <div className="app_form_input">
              <form.Field
                name="password"
                validators={{
                  onSubmit: ({ value }) => {
                    return !value ? 'Please enter a valid password' : null
                  },
                }}
                children={field => (
                  <>
                    <label htmlFor={field.name}>Password</label>
                    <input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                      autoComplete="current-password"
                    />
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
          )}
          <div className="app_forgot_link">
            <Link to={paths.forgot}>Forgot password?</Link>
          </div>
          <div className="app_form_btn">
            <form.Subscribe
              selector={state => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button type="submit" disabled={!canSubmit}>
                  {isSubmitting
                    ? '...'
                    : isVerified
                      ? 'Login to access'
                      : 'Continue'}
                </button>
              )}
            />
          </div>
          <SocialAuth />
          <div className="app_register_link">
            <p>
              New to Sprintify?{' '}
              <Link to={paths.register}>Create an account</Link>
            </p>
          </div>
        </form>
        <AuthFooter />
      </div>
    </div>
  )
}
