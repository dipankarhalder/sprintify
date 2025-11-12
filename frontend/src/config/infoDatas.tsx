import {
  User,
  Home,
  Deals,
  Phone,
  Tasks,
  Teams,
  Notify,
  Search,
  Assets,
  Members,
  Configr,
  Clients,
  Vendors,
  Reports,
  Products,
  Invoice,
  Tracking,
  Settings,
  Rreturn,
  Companies,
  Resource,
  Billings,
  Anasysis,
  Activity,
  Schedules,
  Dashboard,
  Subscription,
  Notifications,
} from '@/icons'

export const groups = [
  { id: '1', label: 'codename.com' },
  { id: '2', label: 'projectpath.com' },
]

export const sideMenu = [
  { id: 1, icon: <Dashboard />, name: 'Dashboard', path: '/admin' },
  { id: 2, icon: <Search />, name: 'Search', path: '/' },
  { id: 3, icon: <Notifications />, name: 'Notification', path: '/' },
]

export const sideBottomMenu = [
  { id: 1, icon: <Settings />, name: 'Settings', path: '/' },
  { id: 2, icon: <User />, name: 'Profile', path: '/' },
]

export const mainMenu = [
  {
    id: 1,
    label: 'Main Menu',
    children: [{ id: 1, icon: <Home />, label: 'Dashboard', path: '/admin' }],
  },
  {
    id: 2,
    label: 'Manage Projects',
    children: [
      { id: 1, icon: <Tasks />, label: 'Tasks', path: '/', count: 24 },
      { id: 3, icon: <Assets />, label: 'Assets', path: '/', count: 3 },
      { id: 4, icon: <Reports />, label: 'Reports', path: '/' },
      { id: 5, icon: <Schedules />, label: 'Schedules', path: '/' },
      { id: 2, icon: <Teams />, label: 'Teams', path: '/', count: 7 },
      { id: 6, icon: <Clients />, label: 'Clients', path: '/', count: 10 },
      { id: 7, icon: <Invoice />, label: 'Invoices', path: '/' },
    ],
  },
  {
    id: 3,
    label: 'Manage Products',
    children: [
      { id: 1, icon: <Products />, label: 'Products', path: '/' },
      { id: 2, icon: <Tracking />, label: 'Trackings', path: '/' },
      { id: 3, icon: <Rreturn />, label: 'Returns', path: '/', count: 12 },
      { id: 4, icon: <Billings />, label: 'Billings', path: '/' },
      { id: 5, icon: <Vendors />, label: 'Vendors', path: '/' },
    ],
  },
  {
    id: 4,
    label: 'Manage Resources',
    children: [
      { id: 1, icon: <Resource />, label: 'Resources', path: '/' },
      { id: 2, icon: <Members />, label: 'Members', path: '/', count: 6 },
      { id: 3, icon: <Assets />, label: 'Assets', path: '/', count: 20 },
      { id: 4, icon: <Reports />, label: 'Reports', path: '/' },
      {
        id: 5,
        icon: <Schedules />,
        label: 'Schedules',
        path: '/',
        count: 10,
      },
    ],
  },
  {
    id: 5,
    label: 'Manage Customers',
    children: [
      { id: 1, icon: <Phone />, label: 'Contact', path: '/' },
      { id: 2, icon: <Companies />, label: 'Companies', path: '/' },
      { id: 3, icon: <Deals />, label: 'Deals', path: '/' },
      { id: 4, icon: <Anasysis />, label: 'Analytics', path: '/' },
      { id: 5, icon: <Activity />, label: 'Activities', path: '/' },
    ],
  },
  {
    id: 6,
    label: 'System Options',
    children: [
      { id: 1, icon: <Notify />, label: 'Notification', path: '/' },
      { id: 2, icon: <Configr />, label: 'Settings', path: '/' },
      {
        id: 3,
        icon: <Subscription />,
        label: 'Subscription',
        path: '/',
      },
    ],
  },
]
