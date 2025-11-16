/** node modules */
import { useState } from 'react'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'

/** types */
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table'
import type { DataTableProps } from './types'

/** icons */
import { Rarrow, Larrow, Search } from '@/icons'

export const DataTable = <T,>({ columns, data }: DataTableProps<T>) => {
  /** states */
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  /** table config */
  const table = useReactTable({
    data,
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
        pageSize: 15,
      },
    },
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  return (
    <div className="app_data_table_cover">
      <div className="app_heading_info">
        <h2>
          List of vendors{' '}
          <span>({table.getFilteredRowModel().rows.length} items)</span>
        </h2>
        <div className="app_right_search_sorting">
          <div className="app_header_search">
            <Search />
            <input
              placeholder={`Search vendors here...`}
              value={
                (table.getColumn('name')?.getFilterValue() as string) ?? ''
              }
              onChange={(event: { target: { value: any } }) =>
                table.getColumn('name')?.setFilterValue(event.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="app_data_table_main_cover">
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
      </div>
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
  )
}
