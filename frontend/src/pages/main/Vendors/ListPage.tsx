import { useMemo } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import type { VendorTypes } from './types'
import { Alink } from '@/icons'
import { DataTable } from '@/shared/DataTable'
import vendorData from '@/data/vendors.json'

export const VendorListPage = () => {
  const handleEdit = (id: string) => {
    console.log(id)
  }

  const columns = useMemo<ColumnDef<VendorTypes>[]>(
    () => [
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
          return (
            <div className="app_table_row_btns">
              <span className="">
                <Alink />
                <p className="text-[12px]">View</p>
              </span>
              <span
                className=""
                onClick={() => handleEdit(row.original.id ?? '')}
              >
                <Alink />
                <p className="text-[12px]">Edit</p>
              </span>
            </div>
          )
        },
      },
    ],
    [],
  )

  return <DataTable columns={columns} data={vendorData.vendors} />
}
