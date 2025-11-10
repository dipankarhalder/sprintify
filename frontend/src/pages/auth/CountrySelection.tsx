import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '@tanstack/react-form'
import { paths } from '@/config/paths'
import { ToastContext } from '@/shared/Toast/ToastContext'
import { Dropdown } from '@/shared/Dropdown'

/** user default info */
const defaultRegisterUser: {
  reagion: string
} = {
  reagion: 'India',
}

export const CountrySelection = () => {
  const navigate = useNavigate()
  const toast = useContext(ToastContext)
  if (!toast) {
    throw new Error('SigninPage must be used within a ToastProvider')
  }
  const { showToast } = toast

  const [selectedId, setSelectedId] = useState<string | undefined>()
  const groups = [
    { id: '1', label: 'India' },
    { id: '2', label: 'Australia' },
    { id: '3', label: 'USA' },
    { id: '4', label: 'UK' },
    { id: '5', label: 'Japan' },
    { id: '6', label: 'Russia' },
  ]

  const form = useForm({
    defaultValues: defaultRegisterUser,
    onSubmit: async ({ value }) => {
      localStorage.removeItem('userEmail')
      localStorage.setItem('authToken', 'authenticated')
      showToast({
        type: 'success',
        title: 'Successfully registered',
        description: JSON.stringify(value),
      })
      navigate(paths.admin)
    },
  })

  return (
    <div className="app_auth_inside_cover">
      <h1>Choose your country</h1>
      <p>
        You're almost there! <br />
        Let's complete the final step
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
