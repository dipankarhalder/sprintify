import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { paths } from '@/config/paths'
import { AuthLayout } from '@/layouts/AuthLayout'
import { AdminLayout } from '@/layouts/AdminLayout'

import { ErrorPage } from '@/pages/error/ErrorPage'
import { SigninPage } from '@/pages/auth/SigninPage'
import { SignupPage } from '@/pages/auth/SignupPage'
import { VerifiedEmailPage } from '@/pages/auth/VerifiedEmailPage'
import { CountrySelection } from '@/pages/auth/CountrySelection'
import { ForgotPage } from '@/pages/auth/ForgotPage'

import { DashboardPage } from '@/pages/main/DashboardPage'
import { ReportsPage } from '@/pages/main/ReportsPage'
import { VendorsPage } from '@/pages/main/VendorsPage'

/** routes path */
const routes = createBrowserRouter([
  {
    path: paths.login,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SigninPage /> },
      { path: paths.register, element: <SignupPage /> },
      { path: paths.finduser, element: <VerifiedEmailPage /> },
      { path: paths.selCountry, element: <CountrySelection /> },
      { path: paths.forgot, element: <ForgotPage /> },
    ],
  },
  {
    path: paths.admin,
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: paths.reports, element: <ReportsPage /> },
      { path: paths.vendors, element: <VendorsPage /> },
    ],
  },
])

export const AppRouters = () => {
  return <RouterProvider router={routes} />
}
