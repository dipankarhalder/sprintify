/** node modules */
import { useContext } from 'react' //useState
import { Link } from 'react-router-dom'
import { useForm } from '@tanstack/react-form'

/** icon */
import { Alink } from '@/icons'

/** config */
import { paths } from '@/config/paths'

/** type */
import type { AnyFieldApi } from '@tanstack/react-form'

/** components */
import { ToastContext } from '@/shared/Toast/ToastContext'
// import { Dropdown } from '@/shared/Dropdown'

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
} = {
  firstName: '',
  lastName: '',
  username: '',
  reagion: 'India',
}

export const VerifiedEmailPage = () => {
  const toast = useContext(ToastContext)
  if (!toast) {
    throw new Error('SigninPage must be used within a ToastProvider')
  }
  const { showToast } = toast

  // const [selectedId, setSelectedId] = useState<string | undefined>()
  // const groups = [
  //   {
  //     group: 'Fruits',
  //     items: [
  //       { id: '1', label: 'Apple' },
  //       { id: '2', label: 'Banana' },
  //     ],
  //   },
  //   {
  //     group: 'Vegetables',
  //     items: [
  //       { id: '3', label: 'Carrot' },
  //       { id: '4', label: 'Broccoli' },
  //     ],
  //   },
  //   {
  //     group: 'Seafood',
  //     items: [
  //       { id: '5', label: 'Salmon' },
  //       { id: '6', label: 'Tuna' },
  //     ],
  //   },
  // ]

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
      <h1>Create a Username</h1>
      <p>
        You're almost there! <br />
        Let's finish setting up your account
      </p>
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
          {/* <div className="app_form_input">
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
          </div> */}
          <div className="app_acknowledge">
            <p>
              By signing up, I accept the Sprintify{' '}
              <Link to="/">
                Cloud Terms of Service &nbsp;
                <Alink />
              </Link>{' '}
              and acknowledge the{' '}
              <Link to="/">
                Privacy Policy &nbsp;
                <Alink />
              </Link>
              .
            </p>
          </div>
          <div className="app_form_btn">
            <form.Subscribe
              selector={state => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? '...' : 'Continue'}
                </button>
              )}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
