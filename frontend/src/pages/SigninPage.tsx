import { useContext } from 'react'
import { ToastContext } from '@/shared/Toast/ToastContext'

export const SigninPage = () => {
  const toast = useContext(ToastContext)

  if (!toast) {
    throw new Error('SigninPage must be used within a ToastProvider')
  }

  const { showToast } = toast

  const addItem = () => {
    showToast({
      type: 'success',
      title: 'Success',
      description: 'adkjfgjhdsf dkgfhkjwe fiuwe fweofhiwe fiouweh f wue fw',
    })
  }

  return <div onClick={addItem}>SigninPage</div>
}
