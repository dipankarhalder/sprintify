import type { ColumnDef } from '@tanstack/react-table'

export interface DataTableProps<T> {
  columns: ColumnDef<T, any>[]
  data: T[]
}
