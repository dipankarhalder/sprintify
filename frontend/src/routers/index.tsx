/** node modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** config */
import { paths } from '@/config/paths'

/** layouts */
import { AuthLayout } from '@/layouts/AuthLayout'
import { AdminLayout } from '@/layouts/AdminLayout'

/** pages */
import { ErrorPage } from '@/pages/ErrorPage'
import { SigninPage } from '@/pages/auth/SigninPage'
import { SignupPage } from '@/pages/auth/SignupPage'
import { ForgotPage } from '@/pages/ForgotPage'
import { DashboardPage } from '@/pages/DashboardPage'

/** routes path */
const routes = createBrowserRouter([
  {
    path: paths.login,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SigninPage /> },
      { path: paths.register, element: <SignupPage /> },
      { path: paths.forgot, element: <ForgotPage /> },
    ],
  },
  {
    path: paths.admin,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
])

export const AppRouters = () => {
  return <RouterProvider router={routes} />
}
