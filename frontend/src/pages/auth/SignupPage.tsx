/** node modules */
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '@tanstack/react-form'

/** config */
import { paths } from '@/config/paths'

/** type */
import type { AnyFieldApi } from '@tanstack/react-form'

/** components */
import { ToastContext } from '@/shared/Toast/ToastContext'
import { Dropdown } from '@/shared/Dropdown'

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
const defaultRegisterUser: {
  firstName: string
  lastName: string
  username: string
  reagion: string
  email: string
  password: string
} = {
  firstName: '',
  lastName: '',
  username: '',
  reagion: 'India',
  email: '',
  password: '',
}

export const SignupPage = () => {
  const toast = useContext(ToastContext)
  if (!toast) {
    throw new Error('SigninPage must be used within a ToastProvider')
  }
  const { showToast } = toast

  const [selectedId, setSelectedId] = useState<string | undefined>()
  const groups = [
    {
      group: 'Fruits',
      items: [
        { id: '1', label: 'Apple' },
        { id: '2', label: 'Banana' },
      ],
    },
    {
      group: 'Vegetables',
      items: [
        { id: '3', label: 'Carrot' },
        { id: '4', label: 'Broccoli' },
      ],
    },
    {
      group: 'Seafood',
      items: [
        { id: '5', label: 'Salmon' },
        { id: '6', label: 'Tuna' },
      ],
    },
  ]

  const form = useForm({
    defaultValues: defaultRegisterUser,
    onSubmit: async ({ value }) => {
      showToast({
        type: 'success',
        title: 'Successfully registered',
        description: JSON.stringify(value),
      })
    },
  })

  return (
    <div className="app_auth_inside_cover">
      <h1>Create an account</h1>
      <p>Please create an account to continue</p>
      <div className="app_auth_form">
        <form
          onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <div className="app_form_input_row">
            <div className="app_form_input">
              <form.Field
                name="firstName"
                validators={{
                  onSubmit: ({ value }) => {
                    return !value ? 'Please enter a first name' : null
                  },
                }}
                children={field => {
                  return (
                    <>
                      <label htmlFor={field.name}>First Name:</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={e => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  )
                }}
              />
            </div>
            <div className="app_form_input">
              <form.Field
                name="lastName"
                validators={{
                  onSubmit: ({ value }) => {
                    return !value ? 'Please enter a last name' : null
                  },
                }}
                children={field => {
                  return (
                    <>
                      <label htmlFor={field.name}>Last Name:</label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={e => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  )
                }}
              />
            </div>
          </div>
          <div className="app_form_input">
            <form.Field
              name="username"
              validators={{
                onSubmit: ({ value }) => {
                  return !value ? 'Please enter a username' : null
                },
              }}
              children={field => {
                return (
                  <>
                    <label htmlFor={field.name}>Username:</label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                    <p>
                      Username may only contain alphanumeric characters or
                      single hyphens, and cannot begin or end with a hyphen.
                    </p>
                  </>
                )
              }}
            />
          </div>
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
                    <label htmlFor={field.name}>Email:</label>
                    <input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                      autoComplete="email"
                    />
                    <FieldInfo field={field} />
                  </>
                )
              }}
            />
          </div>
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
                  <label htmlFor={field.name}>Password:</label>
                  <input
                    type="password"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    autoComplete="password"
                  />
                  <FieldInfo field={field} />
                  <p>
                    Password should be at least 15 characters OR at least 8
                    characters including a number and a lowercase letter.
                  </p>
                </>
              )}
            />
          </div>
          <div className="app_form_input">
            <form.Field
              name="reagion"
              validators={{
                onSubmit: ({ value }) => {
                  return !value ? 'Please enter a reagion' : null
                },
              }}
              children={() => {
                return (
                  <>
                    <label>Country/Region:</label>
                    <Dropdown
                      groups={groups}
                      selectedId={selectedId}
                      onSelect={item => setSelectedId(item.id)}
                    />
                  </>
                )
              }}
            />
          </div>
          <div className="app_form_btn">
            <form.Subscribe
              selector={state => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? '...' : 'Create account'}
                </button>
              )}
            />
          </div>
          <div className="app_register_link">
            <p>
              Already have an account? <Link to={paths.login}>Login now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
