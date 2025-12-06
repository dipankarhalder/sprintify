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
import type { ColumnFiltersState } from '@tanstack/react-table'
import type { DataTableProps } from './types'

/** icons */
import { Rarrow, Larrow, Search } from '@/icons'

export const DataTable = <T,>({
  columns,
  data,
  sorting,
  setSorting,
  pageSize,
}: DataTableProps<T>) => {
  /** states */
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  /** table config */
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })

  return (
    <div className="app_data_table_cover">
      <div className="app_heading_info">
        <div className="app_header_search">
          <Search />
          <input
            placeholder={`Search here...`}
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(event: { target: { value: any } }) =>
              table.getColumn('name')?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>
      <div className="app_data_table_inside">
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="app_table_footer_bottom">
          <div className="app_table_footer_left_side">
            <div className="app_table_data_count">
              <p>
                <span>{table.getFilteredSelectedRowModel().rows.length}</span>{' '}
                of <span>{table.getFilteredRowModel().rows.length} row(s)</span>{' '}
                selected.
              </p>
            </div>
            <div className="app_footer_spcl_info">
              <div className="app_got_page">
                <p>Go to page</p>
                <input
                  type="number"
                  min="1"
                  max={table.getPageCount()}
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    table.setPageIndex(page)
                  }}
                />
              </div>
              <div>
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value))
                  }}
                >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
                {table.getRowCount().toLocaleString()} Rows
              </div>
            </div>
          </div>
          <div className="app_footer_btn_group">
            <div className="app_footer_pages_counters">
              <p>
                Page {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
              </p>
            </div>
            <div className="app_pagination_btn_cover">
              <button
                className="app_pagination_btn"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <Larrow />
              </button>
              <button
                className="app_pagination_btn"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <Larrow />
              </button>
              <button
                className="app_pagination_btn"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <Rarrow />
              </button>
              <button
                className="app_pagination_btn"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <Rarrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
