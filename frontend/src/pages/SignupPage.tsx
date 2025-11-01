/** node modules */
import { useContext } from 'react'
import { useForm } from '@tanstack/react-form'

/** type */
import type { AnyFieldApi } from '@tanstack/react-form'

/** components */
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
  firstName: string
  lastName: string
  email: string
  password: string
} = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export const SignupPage = () => {
  const toast = useContext(ToastContext)
  if (!toast) {
    throw new Error('SigninPage must be used within a ToastProvider')
  }
  const { showToast } = toast

  const form = useForm({
    defaultValues: defaultLoginUser,
    onSubmit: async ({ value }) => {
      console.log(value)
      showToast({
        type: 'success',
        title: 'Success',
        description: 'You have successfully signed in!',
      })
    },
  })

  return (
    <div>
      <div>
        <h1>Simple Form Example</h1>
        <form
          onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <div>
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
          <div>
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
          <div>
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
                    />
                    <FieldInfo field={field} />
                  </>
                )
              }}
            />
          </div>
          <div>
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
                  />
                  <FieldInfo field={field} />
                </>
              )}
            />
          </div>
          <form.Subscribe
            selector={state => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <>
                <button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? '...' : 'Submit'}
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    form.reset()
                  }}
                >
                  Reset
                </button>
              </>
            )}
          />
        </form>
      </div>
    </div>
  )
}
