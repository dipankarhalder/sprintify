/** node modules */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

/** types */
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from '@tanstack/react-table'

/** icons */
import { Dashboard, Vendors, Rarrow, Larrow } from '@/icons'

/** stores */
import { useAuthStore } from '@/store/authStore'

/** config */
import { paths } from '@/config/paths'

/** initial data */
import vendorData from '@/data/vendors.json'

/** type declearation */
type VendorTypes = {
  _id?: string
  name: string
  contactPerson: string
  email: string
  phone: string
  category: string
  status: string
}

const columns: ColumnDef<VendorTypes>[] = [
  { accessorKey: 'name', header: 'Vendor Name' },
  { accessorKey: 'contactPerson', header: 'Contact Person' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'phone', header: 'Phone' },
  { accessorKey: 'category', header: 'Category' },
  { accessorKey: 'status', header: 'Status' },
  {
    accessorKey: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const customerId = row.original._id
      return (
        <div className="text-right font-medium">
          <div className="font-medium flex justify-start items-center w-auto">
            <Link to={'/'} className="">
              <Vendors />
              <p className="text-[12px]">View</p>
            </Link>
            <Link to={`${customerId}/update`} className="">
              <Vendors />
              <p className="text-[12px]">Edit</p>
            </Link>
          </div>
        </div>
      )
    },
  },
]

export const VendorsPage = () => {
  /** states */
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  /** hooks */
  const { isUsername } = useAuthStore()

  /** table config */
  const table = useReactTable({
    data: vendorData.vendors,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  return (
    <div className="app_page_inside_cover">
      <div className="app_top_page_information">
        <div className="app_top_breadcumb">
          <Link to={`/${isUsername}`}>
            <Dashboard /> Dashboard
          </Link>
          <span>/</span>
          <Link to={`/${isUsername}/${paths.vendors}`}>
            <Vendors /> Vendor informations
          </Link>
        </div>
      </div>
      <div className="app_data_table_cover">
        <p>{table.getFilteredRowModel().rows.length}</p>
        <div className="">
          <input
            placeholder={`Filter vendor name...`}
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(event: { target: { value: any } }) =>
              table.getColumn('name')?.setFilterValue(event.target.value)
            }
            className=""
          />
        </div>
        <table>
          <thead>
            {table.getHeaderGroups().map(information => (
              <tr key={information.id}>
                {information.headers.map(info => (
                  <th key={info.id}>
                    {info.isPlaceholder
                      ? null
                      : flexRender(
                          info.column.columnDef.header,
                          info.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center mr-4">
            <p className="text-sm font-medium mr-2">Go to page</p>
            <input
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
              className="border p-1 rounded h-8 w-14 text-center"
            />
          </span>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <Larrow />
          </button>
          <button
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Larrow />
          </button>
          <button
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <Rarrow />
          </button>
          <button
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <Rarrow />
          </button>
        </div>
      </div>
    </div>
  )
}
